import { StatusBadge } from "@/components/shared/StatusBadge";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useCrmStore } from "@/store/crm-store";
import type { Deal, DealStage, DealTask } from "@/types";
import {
  AlertCircle,
  BarChart3,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Filter,
  Grip,
  LayoutList,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Plus,
  Target,
  TrendingUp,
  Upload,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Constants ────────────────────────────────────────────────────────────────

const STAGES: DealStage[] = [
  "Prospect",
  "Qualified",
  "Proposal",
  "Negotiation",
  "Contract",
  "Won",
  "Lost",
];

const STAGE_CONFIG: Record<
  DealStage,
  {
    color: string;
    bg: string;
    border: string;
    dot: string;
    accent: string;
  }
> = {
  Prospect: {
    color: "text-foreground/70",
    bg: "bg-muted",
    border: "border-border",
    dot: "bg-muted-foreground/40",
    accent: "#94a3b8",
  },
  Qualified: {
    color: "text-amber-700 dark:text-amber-300",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-700",
    dot: "bg-amber-400",
    accent: "#f59e0b",
  },
  Proposal: {
    color: "text-indigo-700 dark:text-indigo-300",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-700",
    dot: "bg-indigo-400",
    accent: "#6366f1",
  },
  Negotiation: {
    color: "text-orange-700 dark:text-orange-300",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
    dot: "bg-orange-400",
    accent: "#f97316",
  },
  Contract: {
    color: "text-teal-700 dark:text-teal-300",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    dot: "bg-teal-400",
    accent: "#14b8a6",
  },
  Won: {
    color: "text-emerald-700 dark:text-emerald-300",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-700",
    dot: "bg-emerald-400",
    accent: "#10b981",
  },
  Lost: {
    color: "text-red-700 dark:text-red-300",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-700",
    dot: "bg-red-400",
    accent: "#ef4444",
  },
};

const LOST_REASONS = [
  "Price",
  "Competitor",
  "No Budget",
  "Timing",
  "No Interest",
];

const STAGE_PROGRESS: Record<DealStage, number> = {
  Prospect: 8,
  Qualified: 24,
  Proposal: 42,
  Negotiation: 62,
  Contract: 82,
  Won: 100,
  Lost: 0,
};

const OWNERS = [
  "Alex Rivera",
  "Maria Chen",
  "David Park",
  "Sophia Lee",
  "Jordan Mills",
  "Aisha Patel",
];

type ViewMode = "kanban" | "list" | "forecast";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(value: number) {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value}`;
}

function fmtFull(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function isOverdue(dateStr: string) {
  return dateStr !== "" && new Date(dateStr) < new Date();
}

function probColor(prob: number) {
  if (prob >= 70)
    return "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30";
  if (prob >= 40)
    return "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30";
  return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30";
}

function companyInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function companyColor(name: string) {
  const palette = [
    "from-blue-500 to-blue-600",
    "from-violet-500 to-violet-600",
    "from-emerald-500 to-emerald-600",
    "from-amber-500 to-amber-600",
    "from-rose-500 to-rose-600",
    "from-teal-500 to-teal-600",
    "from-indigo-500 to-indigo-600",
    "from-cyan-500 to-cyan-600",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return palette[Math.abs(hash) % palette.length];
}

// ─── Deal Card ────────────────────────────────────────────────────────────────

interface DealCardProps {
  deal: Deal;
  index: number;
  onDragStart: (deal: Deal) => void;
  onClick: (deal: Deal) => void;
}

function DealCard({ deal, index, onDragStart, onClick }: DealCardProps) {
  const cfg = STAGE_CONFIG[deal.stage];
  const overdue = isOverdue(deal.expectedCloseDate);
  const completedTasks = deal.tasks.filter((t) => t.completed).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.2 }}
      draggable
      onDragStart={() => onDragStart(deal)}
      onClick={() => onClick(deal)}
      data-ocid={`deal.card.${index + 1}`}
      className={cn(
        "group bg-card border border-border rounded-xl p-3.5 cursor-pointer select-none",
        "hover:shadow-elevation hover:-translate-y-0.5 transition-smooth hover:border-primary/30",
        "active:opacity-60 active:scale-95",
      )}
    >
      {/* Header row */}
      <div className="flex items-start gap-2.5 mb-2.5">
        <div
          className={cn(
            "w-9 h-9 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-[11px] font-bold shrink-0",
            companyColor(deal.company),
          )}
        >
          {companyInitials(deal.company)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground truncate leading-tight">
            {deal.title}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {deal.company}
          </p>
        </div>
        <Grip className="w-3.5 h-3.5 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-smooth shrink-0 mt-0.5" />
      </div>

      {/* Value + Probability */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-base font-bold text-foreground">
          {fmt(deal.value)}
        </span>
        <span
          className={cn(
            "text-[11px] font-semibold px-1.5 py-0.5 rounded-full",
            probColor(deal.probability),
          )}
        >
          {deal.probability}%
        </span>
      </div>

      {/* Stage progress bar */}
      <div className="h-1 bg-muted rounded-full mb-2.5 overflow-hidden">
        <div
          className="h-full rounded-full transition-smooth"
          style={{
            width: `${STAGE_PROGRESS[deal.stage]}%`,
            background: cfg.accent,
          }}
        />
      </div>

      {/* Meta row */}
      <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-2">
        <div
          className={cn(
            "flex items-center gap-1",
            overdue && "text-red-500 dark:text-red-400",
          )}
        >
          <Calendar className="w-3 h-3" />
          <span>{overdue ? "Overdue" : deal.expectedCloseDate.slice(5)}</span>
        </div>
        <div className="flex items-center gap-1">
          <User className="w-3 h-3" />
          <span className="truncate max-w-[80px]">
            {deal.owner.split(" ")[0]}
          </span>
        </div>
      </div>

      {/* Footer: contact + tasks */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground truncate">
          {deal.contact}
        </span>
        {deal.tasks.length > 0 && (
          <span
            className={cn(
              "text-[10px] font-medium px-1.5 py-0.5 rounded-full",
              completedTasks === deal.tasks.length
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                : "bg-muted text-muted-foreground",
            )}
          >
            {completedTasks}/{deal.tasks.length}
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ─── Kanban Column ────────────────────────────────────────────────────────────

interface KanbanColumnProps {
  stage: DealStage;
  deals: Deal[];
  onDragStart: (deal: Deal) => void;
  onDrop: (stage: DealStage) => void;
  onDealClick: (deal: Deal) => void;
}

function KanbanColumn({
  stage,
  deals,
  onDragStart,
  onDrop,
  onDealClick,
}: KanbanColumnProps) {
  const [isOver, setIsOver] = useState(false);
  const cfg = STAGE_CONFIG[stage];
  const total = deals.reduce((s, d) => s + d.value, 0);

  return (
    <div
      className="flex flex-col min-w-[260px] w-[260px] shrink-0"
      onDragOver={(e) => {
        e.preventDefault();
        setIsOver(true);
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={() => {
        setIsOver(false);
        onDrop(stage);
      }}
      data-ocid={`pipeline.column.${stage.toLowerCase()}`}
    >
      {/* Column header */}
      <div
        className={cn(
          "flex items-center justify-between px-3 py-2.5 rounded-xl border mb-2",
          cfg.bg,
          cfg.border,
        )}
      >
        <div className="flex items-center gap-2">
          <span className={cn("w-2.5 h-2.5 rounded-full", cfg.dot)} />
          <span className={cn("text-xs font-bold", cfg.color)}>{stage}</span>
          <span
            className={cn(
              "w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center border",
              cfg.bg,
              cfg.color,
              cfg.border,
            )}
          >
            {deals.length}
          </span>
        </div>
        <span className="text-[11px] font-semibold text-muted-foreground">
          {fmt(total)}
        </span>
      </div>

      {/* Drop zone */}
      <div
        className={cn(
          "flex-1 rounded-xl p-1.5 min-h-[120px] transition-smooth space-y-2",
          isOver && "bg-primary/5 ring-2 ring-primary/30 ring-dashed",
        )}
      >
        <AnimatePresence>
          {deals.map((deal, i) => (
            <DealCard
              key={deal.id}
              deal={deal}
              index={i}
              onDragStart={onDragStart}
              onClick={onDealClick}
            />
          ))}
        </AnimatePresence>
        {deals.length === 0 && !isOver && (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground/40">
            <div className="w-8 h-8 rounded-lg border-2 border-dashed border-muted-foreground/20 mb-2" />
            <p className="text-[11px]">Drop here</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Pipeline Summary Bar ─────────────────────────────────────────────────────

function PipelineSummaryBar({ deals }: { deals: Deal[] }) {
  const totals = STAGES.map((s) => ({
    stage: s,
    value: deals
      .filter((d) => d.stage === s)
      .reduce((sum, d) => sum + d.value, 0),
    count: deals.filter((d) => d.stage === s).length,
  }));
  const grandTotal = totals.reduce((s, t) => s + t.value, 0) || 1;

  return (
    <div className="bg-muted/30 border border-border rounded-xl p-4">
      <div className="flex items-end gap-3 mb-2 overflow-x-auto pb-1">
        {totals.map(({ stage, value, count }) => {
          const cfg = STAGE_CONFIG[stage];
          return (
            <div key={stage} className="flex-1 min-w-[60px]">
              <div className="flex items-center justify-between mb-1">
                <span
                  className={cn(
                    "text-[10px] font-semibold truncate",
                    cfg.color,
                  )}
                >
                  {stage}
                </span>
                <span className="text-[10px] text-muted-foreground ml-1">
                  {count}
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(value / grandTotal) * 100}%`,
                    background: cfg.accent,
                  }}
                />
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 font-medium">
                {fmt(value)}
              </div>
            </div>
          );
        })}
      </div>
      {/* Stacked bar */}
      <div className="h-1.5 flex rounded-full overflow-hidden gap-px">
        {totals.map(({ stage, value }) => (
          <div
            key={stage}
            style={{
              flex: value || 0,
              background: STAGE_CONFIG[stage].accent,
              minWidth: value ? 2 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Forecast View ────────────────────────────────────────────────────────────

function ForecastView({ deals }: { deals: Deal[] }) {
  const months = ["May", "Jun", "Jul", "Aug", "Sep"];
  const activeDeals = deals.filter(
    (d) => d.stage !== "Won" && d.stage !== "Lost",
  );

  const rows = activeDeals.map((d) => {
    const closeDate = new Date(d.expectedCloseDate);
    const month = closeDate.toLocaleString("en-US", { month: "short" });
    const weighted = Math.round((d.value * d.probability) / 100);
    return { ...d, month, weighted };
  });

  const monthTotals = months.map((m) => ({
    month: m,
    raw: rows.filter((r) => r.month === m).reduce((s, r) => s + r.value, 0),
    weighted: rows
      .filter((r) => r.month === m)
      .reduce((s, r) => s + r.weighted, 0),
  }));

  return (
    <div className="space-y-4">
      {/* Month summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {monthTotals.map(({ month, raw, weighted }) => (
          <div
            key={month}
            className="bg-card border border-border rounded-xl p-3"
          >
            <p className="text-xs text-muted-foreground mb-1">{month} 2026</p>
            <p className="text-base font-bold text-foreground">
              {fmt(weighted)}
            </p>
            <p className="text-[11px] text-muted-foreground">
              Weighted forecast
            </p>
            <div className="mt-2 h-1 bg-muted rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{
                  width: raw
                    ? `${Math.min((weighted / raw) * 100, 100)}%`
                    : "0%",
                }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground/70 mt-0.5">
              {fmt(raw)} pipeline
            </p>
          </div>
        ))}
      </div>

      {/* Deals table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">
            Revenue Forecast by Deal
          </h3>
          <span className="text-xs text-muted-foreground">
            {rows.length} deals
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {[
                  "Deal",
                  "Company",
                  "Stage",
                  "Close Date",
                  "Value",
                  "Probability",
                  "Weighted",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={cn(
                    "border-b border-border/50 hover:bg-muted/20 transition-smooth",
                    i % 2 === 1 && "bg-muted/10",
                  )}
                >
                  <td className="px-4 py-2.5 font-medium text-foreground text-xs">
                    <span className="truncate block max-w-[160px]">
                      {row.title}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-xs text-muted-foreground whitespace-nowrap">
                    {row.company}
                  </td>
                  <td className="px-4 py-2.5">
                    <StatusBadge status={row.stage} />
                  </td>
                  <td
                    className={cn(
                      "px-4 py-2.5 text-xs whitespace-nowrap",
                      isOverdue(row.expectedCloseDate)
                        ? "text-red-500"
                        : "text-muted-foreground",
                    )}
                  >
                    {row.expectedCloseDate}
                  </td>
                  <td className="px-4 py-2.5 text-xs font-semibold text-foreground text-right whitespace-nowrap">
                    {fmtFull(row.value)}
                  </td>
                  <td className="px-4 py-2.5">
                    <span
                      className={cn(
                        "text-[11px] font-semibold px-1.5 py-0.5 rounded-full",
                        probColor(row.probability),
                      )}
                    >
                      {row.probability}%
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right whitespace-nowrap">
                    {fmtFull(row.weighted)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-muted/30 border-t-2 border-border">
                <td
                  colSpan={4}
                  className="px-4 py-2.5 text-xs font-bold text-foreground"
                >
                  Total Pipeline
                </td>
                <td className="px-4 py-2.5 text-xs font-bold text-foreground text-right">
                  {fmtFull(rows.reduce((s, r) => s + r.value, 0))}
                </td>
                <td />
                <td className="px-4 py-2.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right">
                  {fmtFull(rows.reduce((s, r) => s + r.weighted, 0))}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── List View ────────────────────────────────────────────────────────────────

function ListView({
  deals,
  onDealClick,
}: { deals: Deal[]; onDealClick: (d: Deal) => void }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {[
                "Deal",
                "Company",
                "Contact",
                "Stage",
                "Value",
                "Probability",
                "Close Date",
                "Owner",
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, i) => (
              <tr
                key={deal.id}
                onClick={() => onDealClick(deal)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && onDealClick(deal)
                }
                tabIndex={0}
                className={cn(
                  "border-b border-border/50 hover:bg-muted/20 cursor-pointer transition-smooth",
                  i % 2 === 1 && "bg-muted/10",
                )}
                data-ocid={`deal.list.item.${i + 1}`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-[10px] font-bold shrink-0",
                        companyColor(deal.company),
                      )}
                    >
                      {companyInitials(deal.company)}
                    </div>
                    <span className="font-medium text-foreground text-xs truncate max-w-[140px]">
                      {deal.title}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                  {deal.company}
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                  {deal.contact}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={deal.stage} />
                </td>
                <td className="px-4 py-3 text-xs font-semibold text-foreground whitespace-nowrap">
                  {fmtFull(deal.value)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "text-[11px] font-semibold px-1.5 py-0.5 rounded-full",
                      probColor(deal.probability),
                    )}
                  >
                    {deal.probability}%
                  </span>
                </td>
                <td
                  className={cn(
                    "px-4 py-3 text-xs whitespace-nowrap",
                    isOverdue(deal.expectedCloseDate)
                      ? "text-red-500"
                      : "text-muted-foreground",
                  )}
                >
                  {deal.expectedCloseDate}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <UserAvatar name={deal.owner} size="xs" />
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {deal.owner.split(" ")[0]}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Add Deal Modal ───────────────────────────────────────────────────────────

interface AddDealModalProps {
  open: boolean;
  onClose: () => void;
}

function AddDealModal({ open, onClose }: AddDealModalProps) {
  const addDeal = useCrmStore((s) => s.addDeal);
  const [form, setForm] = useState({
    title: "",
    company: "",
    contact: "",
    value: "",
    probability: "50",
    expectedCloseDate: "",
    stage: "Prospect" as DealStage,
    owner: "Alex Rivera",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.company || !form.value) {
      toast.error("Please fill in required fields");
      return;
    }
    addDeal({
      id: `d${Date.now()}`,
      title: form.title,
      company: form.company,
      companyLogo: companyInitials(form.company),
      contact: form.contact,
      value: Number(form.value),
      probability: Number(form.probability),
      expectedCloseDate: form.expectedCloseDate || "2026-06-30",
      stage: form.stage,
      owner: form.owner,
      notes: form.notes,
      tasks: [],
      attachments: [],
    });
    toast.success("Deal created successfully");
    onClose();
    setForm({
      title: "",
      company: "",
      contact: "",
      value: "",
      probability: "50",
      expectedCloseDate: "",
      stage: "Prospect",
      owner: "Alex Rivera",
      notes: "",
    });
  };

  const set = (key: string, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg" data-ocid="deal.add_modal.dialog">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Plus className="w-4 h-4 text-primary" />
            </div>
            Add New Deal
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 pt-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 space-y-1">
              <Label htmlFor="add-title">Deal Title *</Label>
              <Input
                id="add-title"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                placeholder="Enterprise Platform Deal"
                data-ocid="deal.add.title.input"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="add-company">Company *</Label>
              <Input
                id="add-company"
                value={form.company}
                onChange={(e) => set("company", e.target.value)}
                placeholder="Company name"
                data-ocid="deal.add.company.input"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="add-contact">Contact</Label>
              <Input
                id="add-contact"
                value={form.contact}
                onChange={(e) => set("contact", e.target.value)}
                placeholder="Contact name"
                data-ocid="deal.add.contact.input"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="add-value">Deal Value *</Label>
              <Input
                id="add-value"
                type="number"
                value={form.value}
                onChange={(e) => set("value", e.target.value)}
                placeholder="50000"
                data-ocid="deal.add.value.input"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="add-prob">Probability %</Label>
              <Input
                id="add-prob"
                type="number"
                min="0"
                max="100"
                value={form.probability}
                onChange={(e) => set("probability", e.target.value)}
                data-ocid="deal.add.probability.input"
              />
            </div>
            <div className="space-y-1">
              <Label>Stage</Label>
              <Select value={form.stage} onValueChange={(v) => set("stage", v)}>
                <SelectTrigger data-ocid="deal.add.stage.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STAGES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label>Owner</Label>
              <Select value={form.owner} onValueChange={(v) => set("owner", v)}>
                <SelectTrigger data-ocid="deal.add.owner.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {OWNERS.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="add-date">Expected Close</Label>
              <Input
                id="add-date"
                type="date"
                value={form.expectedCloseDate}
                onChange={(e) => set("expectedCloseDate", e.target.value)}
                data-ocid="deal.add.close_date.input"
              />
            </div>
            <div className="col-span-2 space-y-1">
              <Label htmlFor="add-notes">Notes</Label>
              <Textarea
                id="add-notes"
                rows={2}
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                placeholder="Add any notes..."
                data-ocid="deal.add.notes.textarea"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              data-ocid="deal.add_modal.cancel_button"
            >
              Cancel
            </Button>
            <Button type="submit" data-ocid="deal.add_modal.submit_button">
              Create Deal
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Lost Reason Modal ────────────────────────────────────────────────────────

interface LostReasonModalProps {
  dealId: string | null;
  onConfirm: (dealId: string, reason: string) => void;
  onCancel: () => void;
}

function LostReasonModal({
  dealId,
  onConfirm,
  onCancel,
}: LostReasonModalProps) {
  const [reason, setReason] = useState("");

  return (
    <Dialog open={!!dealId} onOpenChange={onCancel}>
      <DialogContent className="max-w-sm" data-ocid="deal.lost_reason.dialog">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5" />
            Mark as Lost
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3 pt-1">
          <p className="text-sm text-muted-foreground">
            Select a reason for losing this deal:
          </p>
          <div className="space-y-2">
            {LOST_REASONS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setReason(r)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-lg border text-sm transition-smooth",
                  reason === r
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                    : "border-border hover:border-muted-foreground/40 text-foreground",
                )}
                data-ocid={`deal.lost_reason.${r.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <Button
              variant="outline"
              onClick={onCancel}
              data-ocid="deal.lost_reason.cancel_button"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={!reason}
              onClick={() => dealId && onConfirm(dealId, reason)}
              data-ocid="deal.lost_reason.confirm_button"
            >
              Mark as Lost
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Deal Detail Modal ────────────────────────────────────────────────────────

const MOCK_ACTIVITY = [
  {
    id: "a1",
    type: "stage",
    text: "Deal moved to Negotiation",
    user: "Alex Rivera",
    time: "Apr 20, 2026",
  },
  {
    id: "a2",
    type: "note",
    text: "Added pricing notes",
    user: "Alex Rivera",
    time: "Apr 18, 2026",
  },
  {
    id: "a3",
    type: "email",
    text: "Sent revised proposal v2",
    user: "Alex Rivera",
    time: "Apr 17, 2026",
  },
  {
    id: "a4",
    type: "call",
    text: "Discovery call completed (45 min)",
    user: "Maria Chen",
    time: "Apr 14, 2026",
  },
  {
    id: "a5",
    type: "stage",
    text: "Deal created in Prospect",
    user: "Maria Chen",
    time: "Apr 10, 2026",
  },
];

const MOCK_DOCS = [
  { id: "doc1", name: "proposal-v2.pdf", type: "pdf", size: "1.2 MB" },
  { id: "doc2", name: "pricing-matrix.xlsx", type: "excel", size: "340 KB" },
  { id: "doc3", name: "requirements.docx", type: "word", size: "88 KB" },
];

interface DealDetailModalProps {
  deal: Deal | null;
  onClose: () => void;
}

function DealDetailModal({ deal, onClose }: DealDetailModalProps) {
  const updateDeal = useCrmStore((s) => s.updateDeal);
  const moveDeal = useCrmStore((s) => s.moveDeal);
  const [newNote, setNewNote] = useState("");
  const [newTask, setNewTask] = useState("");
  const [lostModalDealId, setLostModalDealId] = useState<string | null>(null);
  const [localTasks, setLocalTasks] = useState<DealTask[]>(deal?.tasks ?? []);

  // Sync tasks when the deal being viewed changes — use useEffect to avoid setState-in-render (React error #185)
  const prevDealIdRef = useRef<string | undefined>(undefined);
  useEffect(() => {
    if (deal && deal.id !== prevDealIdRef.current) {
      prevDealIdRef.current = deal.id;
      setLocalTasks(deal.tasks);
    }
  });

  if (!deal) return null;
  const cfg = STAGE_CONFIG[deal.stage];
  const overdue = isOverdue(deal.expectedCloseDate);

  const handleToggleTask = (taskId: string) => {
    const updated = localTasks.map((t) =>
      t.id === taskId ? { ...t, completed: !t.completed } : t,
    );
    setLocalTasks(updated);
    updateDeal(deal.id, { tasks: updated });
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const task: DealTask = {
      id: `t${Date.now()}`,
      title: newTask.trim(),
      completed: false,
    };
    const updated = [...localTasks, task];
    setLocalTasks(updated);
    updateDeal(deal.id, { tasks: updated });
    setNewTask("");
  };

  const handleDeleteTask = (taskId: string) => {
    const updated = localTasks.filter((t) => t.id !== taskId);
    setLocalTasks(updated);
    updateDeal(deal.id, { tasks: updated });
  };

  const handleSaveNote = () => {
    if (!newNote.trim()) return;
    const timestamp = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const prefix = deal.notes ? `${deal.notes}\n\n` : "";
    updateDeal(deal.id, {
      notes: `${prefix}[${timestamp}]: ${newNote.trim()}`,
    });
    setNewNote("");
    toast.success("Note saved");
  };

  const handleMarkWon = () => {
    moveDeal(deal.id, "Won");
    toast.success(`${deal.title} marked as Won! 🎉`);
    onClose();
  };

  const handleLostConfirm = (dealId: string) => {
    moveDeal(dealId, "Lost");
    toast.error("Deal marked as Lost");
    setLostModalDealId(null);
    onClose();
  };

  const completedCount = localTasks.filter((t) => t.completed).length;

  return (
    <>
      <Dialog open={!!deal} onOpenChange={onClose}>
        <DialogContent
          className="max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden"
          data-ocid="deal.detail.dialog"
        >
          {/* Header */}
          <div className="shrink-0 px-6 pt-6 pb-4 border-b border-border">
            <div className="flex items-start gap-3 mb-4">
              <div
                className={cn(
                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm shrink-0",
                  companyColor(deal.company),
                )}
              >
                {companyInitials(deal.company)}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-bold text-foreground leading-tight truncate">
                  {deal.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {deal.company} · {deal.contact}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-lg font-bold text-foreground">
                  {fmtFull(deal.value)}
                </span>
                <StatusBadge status={deal.stage} />
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                {
                  icon: Target,
                  label: "Win Probability",
                  value: `${deal.probability}%`,
                  cls: probColor(deal.probability),
                },
                {
                  icon: Calendar,
                  label: "Close Date",
                  value: deal.expectedCloseDate,
                  cls: overdue ? "text-red-500" : "text-foreground",
                },
                {
                  icon: User,
                  label: "Owner",
                  value: deal.owner.split(" ")[0],
                  cls: "text-foreground",
                },
                {
                  icon: Check,
                  label: "Tasks Done",
                  value: `${completedCount}/${localTasks.length}`,
                  cls: "text-foreground",
                },
              ].map(({ icon: Icon, label, value, cls }) => (
                <div key={label} className="bg-muted/40 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-1 mb-0.5">
                    <Icon className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground truncate">
                      {label}
                    </span>
                  </div>
                  <span
                    className={cn("text-xs font-semibold truncate block", cls)}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Stage progress */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-muted-foreground">
                  Pipeline Progress
                </span>
                <span
                  className="text-[11px] font-semibold"
                  style={{ color: cfg.accent }}
                >
                  {STAGE_PROGRESS[deal.stage]}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-smooth"
                  style={{
                    width: `${STAGE_PROGRESS[deal.stage]}%`,
                    background: cfg.accent,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex-1 flex flex-col min-h-0 px-6 py-4">
            <Tabs
              defaultValue="overview"
              className="flex-1 flex flex-col min-h-0"
            >
              <TabsList className="grid grid-cols-5 shrink-0 mb-4">
                <TabsTrigger
                  value="overview"
                  data-ocid="deal.detail.overview.tab"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger value="notes" data-ocid="deal.detail.notes.tab">
                  Notes
                </TabsTrigger>
                <TabsTrigger value="tasks" data-ocid="deal.detail.tasks.tab">
                  Tasks
                  {localTasks.length > 0 && (
                    <span className="ml-1 opacity-60">
                      ({localTasks.length})
                    </span>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  data-ocid="deal.detail.documents.tab"
                >
                  Docs
                </TabsTrigger>
                <TabsTrigger
                  value="activity"
                  data-ocid="deal.detail.activity.tab"
                >
                  Activity
                </TabsTrigger>
              </TabsList>

              <div className="flex-1 overflow-y-auto min-h-0">
                {/* Overview */}
                <TabsContent value="overview" className="mt-0 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Deal Title", value: deal.title },
                      { label: "Company", value: deal.company },
                      { label: "Contact Name", value: deal.contact },
                      { label: "Deal Value", value: fmtFull(deal.value) },
                      { label: "Probability", value: `${deal.probability}%` },
                      {
                        label: "Expected Close",
                        value: deal.expectedCloseDate,
                      },
                      { label: "Sales Owner", value: deal.owner },
                      { label: "Current Stage", value: deal.stage },
                    ].map(({ label, value }) => (
                      <div key={label} className="space-y-0.5">
                        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide">
                          {label}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                  {deal.attachments.length > 0 && (
                    <div>
                      <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide mb-2">
                        Attachments
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {deal.attachments.map((att) => (
                          <span
                            key={att}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                          >
                            <Paperclip className="w-3 h-3" />
                            {att}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>

                {/* Notes */}
                <TabsContent value="notes" className="mt-0 space-y-3">
                  <div className="bg-muted/30 rounded-lg p-3 text-sm text-foreground whitespace-pre-wrap leading-relaxed min-h-[80px]">
                    {deal.notes || (
                      <span className="text-muted-foreground italic text-sm">
                        No notes yet. Add your first note below.
                      </span>
                    )}
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label className="text-xs">Add Note</Label>
                    <Textarea
                      rows={3}
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Type a note about this deal..."
                      data-ocid="deal.detail.notes.textarea"
                    />
                    <Button
                      size="sm"
                      onClick={handleSaveNote}
                      disabled={!newNote.trim()}
                      data-ocid="deal.detail.notes.save_button"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                      Save Note
                    </Button>
                  </div>
                </TabsContent>

                {/* Tasks */}
                <TabsContent value="tasks" className="mt-0 space-y-2">
                  <div className="space-y-1">
                    {localTasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-2.5 group p-2 rounded-lg hover:bg-muted/40 transition-smooth"
                      >
                        <Checkbox
                          checked={task.completed}
                          onCheckedChange={() => handleToggleTask(task.id)}
                          data-ocid={`deal.detail.task.checkbox.${task.id}`}
                        />
                        <span
                          className={cn(
                            "text-sm flex-1",
                            task.completed &&
                              "line-through text-muted-foreground",
                          )}
                        >
                          {task.title}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleDeleteTask(task.id)}
                          className="opacity-0 group-hover:opacity-100 transition-smooth text-muted-foreground/60 hover:text-red-500"
                          data-ocid={`deal.detail.task.delete_button.${task.id}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                    {localTasks.length === 0 && (
                      <p
                        className="text-sm text-muted-foreground italic text-center py-6"
                        data-ocid="deal.detail.tasks.empty_state"
                      >
                        No tasks yet. Add one below.
                      </p>
                    )}
                  </div>
                  <Separator />
                  <div className="flex gap-2">
                    <Input
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      placeholder="Add a task..."
                      onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
                      data-ocid="deal.detail.task.input"
                    />
                    <Button
                      size="sm"
                      onClick={handleAddTask}
                      disabled={!newTask.trim()}
                      data-ocid="deal.detail.task.add_button"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </TabsContent>

                {/* Documents */}
                <TabsContent value="documents" className="mt-0 space-y-2">
                  {[
                    ...MOCK_DOCS,
                    ...deal.attachments
                      .filter((a) => !MOCK_DOCS.find((d) => d.name === a))
                      .map((name, i) => ({
                        id: `att-${i}`,
                        name,
                        type: "pdf",
                        size: "—",
                      })),
                  ].map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer group"
                    >
                      <div
                        className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center",
                          doc.type === "pdf"
                            ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                            : doc.type === "excel"
                              ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                              : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                        )}
                      >
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {doc.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {doc.size}
                        </p>
                      </div>
                      <Download className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-smooth" />
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2"
                    data-ocid="deal.detail.documents.upload_button"
                  >
                    <Upload className="w-3.5 h-3.5 mr-1.5" />
                    Upload Document
                  </Button>
                </TabsContent>

                {/* Activity */}
                <TabsContent value="activity" className="mt-0">
                  <div className="space-y-0">
                    {MOCK_ACTIVITY.map((item, i) => (
                      <div key={item.id} className="flex gap-3 pb-4 relative">
                        {i < MOCK_ACTIVITY.length - 1 && (
                          <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
                        )}
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 z-10",
                            item.type === "stage"
                              ? "bg-primary"
                              : item.type === "note"
                                ? "bg-amber-500"
                                : item.type === "email"
                                  ? "bg-indigo-500"
                                  : "bg-emerald-500",
                          )}
                        >
                          {item.type === "stage" && (
                            <ChevronRight className="w-3.5 h-3.5" />
                          )}
                          {item.type === "note" && (
                            <MessageSquare className="w-3.5 h-3.5" />
                          )}
                          {item.type === "email" && (
                            <FileText className="w-3.5 h-3.5" />
                          )}
                          {item.type === "call" && (
                            <Clock className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0 pt-1">
                          <p className="text-sm text-foreground">{item.text}</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {item.user} · {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Footer actions */}
          {deal.stage !== "Won" && deal.stage !== "Lost" && (
            <div className="shrink-0 flex gap-2 px-6 py-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-red-600 border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-900/20 dark:text-red-400"
                onClick={() => setLostModalDealId(deal.id)}
                data-ocid="deal.detail.mark_lost_button"
              >
                <X className="w-3.5 h-3.5 mr-1.5" />
                Mark as Lost
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={handleMarkWon}
                data-ocid="deal.detail.mark_won_button"
              >
                <Check className="w-3.5 h-3.5 mr-1.5" />
                Mark as Won
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <LostReasonModal
        dealId={lostModalDealId}
        onConfirm={handleLostConfirm}
        onCancel={() => setLostModalDealId(null)}
      />
    </>
  );
}

// ─── Main Deals Page ──────────────────────────────────────────────────────────

export default function DealsPage() {
  const deals = useCrmStore((s) => s.deals);
  const moveDeal = useCrmStore((s) => s.moveDeal);
  const [view, setView] = useState<ViewMode>("kanban");
  const [addOpen, setAddOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [lostModalDealId, setLostModalDealId] = useState<string | null>(null);
  const draggingDeal = useRef<Deal | null>(null);

  const totalValue = deals
    .filter((d) => d.stage !== "Lost")
    .reduce((s, d) => s + d.value, 0);
  const activeCount = deals.filter((d) => d.stage !== "Lost").length;
  const weightedValue = deals
    .filter((d) => d.stage !== "Won" && d.stage !== "Lost")
    .reduce((s, d) => s + (d.value * d.probability) / 100, 0);

  const dealsByStage = STAGES.reduce<Record<DealStage, Deal[]>>(
    (acc, stage) => {
      acc[stage] = deals.filter((d) => d.stage === stage);
      return acc;
    },
    {} as Record<DealStage, Deal[]>,
  );

  const handleDragStart = useCallback((deal: Deal) => {
    draggingDeal.current = deal;
  }, []);

  const handleDrop = useCallback(
    (targetStage: DealStage) => {
      const deal = draggingDeal.current;
      draggingDeal.current = null;
      if (!deal || deal.stage === targetStage) return;
      if (targetStage === "Lost") {
        setLostModalDealId(deal.id);
      } else {
        moveDeal(deal.id, targetStage);
        toast.success(`"${deal.title}" moved to ${targetStage}`);
      }
    },
    [moveDeal],
  );

  const handleLostConfirm = useCallback(
    (dealId: string) => {
      moveDeal(dealId, "Lost");
      toast.error("Deal marked as Lost");
      setLostModalDealId(null);
    },
    [moveDeal],
  );

  return (
    <div className="flex flex-col h-full" data-ocid="deals.page">
      {/* Page Header */}
      <div className="shrink-0 px-6 pt-6 pb-4 bg-card border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h1 className="text-2xl font-bold font-display text-foreground">
              Sales Pipeline
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              <span className="font-semibold text-foreground">
                {activeCount}
              </span>{" "}
              active deals ·{" "}
              <span className="font-semibold text-foreground">
                {fmtFull(totalValue)}
              </span>{" "}
              pipeline ·{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                {fmtFull(weightedValue)}
              </span>{" "}
              weighted
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {/* View toggle */}
            <div className="flex items-center gap-0.5 bg-muted p-0.5 rounded-lg border border-border">
              {(
                [
                  {
                    mode: "kanban" as ViewMode,
                    icon: LayoutList,
                    label: "Board",
                  },
                  {
                    mode: "list" as ViewMode,
                    icon: MoreHorizontal,
                    label: "List",
                  },
                  {
                    mode: "forecast" as ViewMode,
                    icon: BarChart3,
                    label: "Forecast",
                  },
                ] as const
              ).map(({ mode, icon: Icon, label }) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setView(mode)}
                  className={cn(
                    "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-smooth",
                    view === mode
                      ? "bg-background text-foreground shadow-subtle"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  data-ocid={`deals.view.${mode}.toggle`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" data-ocid="deals.filter_button">
              <Filter className="w-3.5 h-3.5 mr-1.5" />
              Filter
            </Button>
            <Button
              size="sm"
              onClick={() => setAddOpen(true)}
              data-ocid="deals.add_button"
            >
              <Plus className="w-3.5 h-3.5 mr-1.5" />
              Add Deal
            </Button>
          </div>
        </div>

        {/* Pipeline Summary Bar */}
        <PipelineSummaryBar deals={deals} />
      </div>

      {/* Content area */}
      <div className="flex-1 min-h-0 overflow-hidden bg-background">
        <AnimatePresence mode="wait">
          {view === "kanban" && (
            <motion.div
              key="kanban"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="h-full overflow-x-auto overflow-y-hidden"
            >
              <div
                className="flex gap-3 p-6 h-full"
                style={{ minWidth: "max-content" }}
              >
                {STAGES.map((stage) => (
                  <KanbanColumn
                    key={stage}
                    stage={stage}
                    deals={dealsByStage[stage]}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                    onDealClick={setSelectedDeal}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {view === "list" && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-6 overflow-y-auto h-full"
            >
              <ListView deals={deals} onDealClick={setSelectedDeal} />
            </motion.div>
          )}

          {view === "forecast" && (
            <motion.div
              key="forecast"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-6 overflow-y-auto h-full"
            >
              <ForecastView deals={deals} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <AddDealModal open={addOpen} onClose={() => setAddOpen(false)} />
      <DealDetailModal
        deal={selectedDeal}
        onClose={() => setSelectedDeal(null)}
      />
      <LostReasonModal
        dealId={lostModalDealId}
        onConfirm={handleLostConfirm}
        onCancel={() => setLostModalDealId(null)}
      />
    </div>
  );
}
