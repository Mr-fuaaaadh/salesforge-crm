import { KpiCard } from "@/components/shared/KpiCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { PriorityBadge } from "@/components/shared/PriorityBadge";
import { SearchBar } from "@/components/shared/SearchBar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useCrmStore } from "@/store/crm-store";
import type { Lead, LeadStatus, Priority } from "@/types";
import { format, formatDistanceToNow } from "date-fns";
import {
  Bell,
  Building2,
  Calendar,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Filter,
  Kanban,
  LayoutGrid,
  Link,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Phone,
  Plus,
  StickyNote,
  Table2,
  Tag,
  Trash2,
  TrendingUp,
  Upload,
  User,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

const STAGES: LeadStatus[] = [
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Negotiation",
  "Won",
  "Lost",
];

const STAGE_COLORS: Record<LeadStatus, string> = {
  New: "bg-blue-500",
  Contacted: "bg-violet-500",
  Qualified: "bg-amber-500",
  Proposal: "bg-indigo-500",
  Negotiation: "bg-orange-500",
  Won: "bg-emerald-500",
  Lost: "bg-red-500",
};

const STAGE_HEADER_COLORS: Record<LeadStatus, string> = {
  New: "border-t-blue-500",
  Contacted: "border-t-violet-500",
  Qualified: "border-t-amber-500",
  Proposal: "border-t-indigo-500",
  Negotiation: "border-t-orange-500",
  Won: "border-t-emerald-500",
  Lost: "border-t-red-500",
};

const SOURCES = [
  "Website",
  "LinkedIn",
  "Referral",
  "Cold Email",
  "Partner",
  "Event",
  "Trade Show",
];
const TEAM_MEMBERS = [
  "Alex Rivera",
  "Maria Chen",
  "David Park",
  "Sophia Lee",
  "Jordan Mills",
  "Aisha Patel",
];

// Mock activities for detail drawer
const MOCK_ACTIVITIES = [
  {
    id: "a1",
    type: "call",
    icon: Phone,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    title: "Discovery call completed",
    detail: "45 min · Discussed pricing and requirements",
    user: "Alex Rivera",
    time: "2026-04-20T15:00:00",
  },
  {
    id: "a2",
    type: "email",
    icon: Mail,
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    title: "Proposal sent via email",
    detail: "Attached: proposal-v2.pdf",
    user: "Alex Rivera",
    time: "2026-04-18T14:00:00",
  },
  {
    id: "a3",
    type: "meeting",
    icon: Calendar,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    title: "Meeting scheduled",
    detail: "Contract review — 3:00 PM Thursday",
    user: "Maria Chen",
    time: "2026-04-17T10:00:00",
  },
  {
    id: "a4",
    type: "note",
    icon: StickyNote,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    title: "Note added",
    detail: "Budget approval pending from CFO",
    user: "David Park",
    time: "2026-04-15T09:30:00",
  },
];

const MOCK_DOCS = [
  {
    id: "f1",
    name: "proposal-v2.pdf",
    size: "1.2 MB",
    type: "PDF",
    uploaded: "2026-04-18",
  },
  {
    id: "f2",
    name: "requirements.docx",
    size: "340 KB",
    type: "DOCX",
    uploaded: "2026-04-15",
  },
  {
    id: "f3",
    name: "pricing-matrix.xlsx",
    size: "88 KB",
    type: "XLSX",
    uploaded: "2026-04-10",
  },
];

const MOCK_TIMELINE = [
  { stage: "New", date: "2026-04-01", by: "System" },
  { stage: "Contacted", date: "2026-04-05", by: "Alex Rivera" },
  { stage: "Qualified", date: "2026-04-12", by: "Alex Rivera" },
  { stage: "Proposal", date: "2026-04-18", by: "Maria Chen" },
];

const MOCK_REMINDERS = [
  {
    id: "r1",
    title: "Follow-up call",
    due: "2026-04-25",
    assigned: "Alex Rivera",
    done: false,
  },
  {
    id: "r2",
    title: "Send revised pricing",
    due: "2026-04-27",
    assigned: "Maria Chen",
    done: false,
  },
  {
    id: "r3",
    title: "Check budget approval status",
    due: "2026-04-30",
    assigned: "Alex Rivera",
    done: true,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FilterChip({
  label,
  onRemove,
}: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 pl-2.5 pr-1.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="rounded-full hover:bg-primary/20 p-0.5 transition-colors"
        aria-label={`Remove ${label} filter`}
      >
        <X size={10} />
      </button>
    </span>
  );
}

interface BulkBarProps {
  count: number;
  onAssign: () => void;
  onChangeStatus: () => void;
  onDelete: () => void;
  onClear: () => void;
}
function BulkActionBar({
  count,
  onAssign,
  onChangeStatus,
  onDelete,
  onClear,
}: BulkBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="flex items-center gap-3 px-4 py-2.5 bg-primary/5 border border-primary/20 rounded-xl"
      data-ocid="leads.bulk_action_bar"
    >
      <span className="text-sm font-medium text-primary">{count} selected</span>
      <div className="h-4 w-px bg-border" />
      <Button
        variant="ghost"
        size="sm"
        className="h-7 text-xs"
        onClick={onAssign}
        data-ocid="leads.bulk.assign_button"
      >
        <Users size={12} className="mr-1.5" />
        Assign
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-7 text-xs"
        onClick={onChangeStatus}
        data-ocid="leads.bulk.status_button"
      >
        <ChevronRight size={12} className="mr-1.5" />
        Change Status
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-7 text-xs"
        onClick={() => {}}
        data-ocid="leads.bulk.export_button"
      >
        <Download size={12} className="mr-1.5" />
        Export
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-7 text-xs text-destructive hover:text-destructive"
        onClick={onDelete}
        data-ocid="leads.bulk.delete_button"
      >
        <Trash2 size={12} className="mr-1.5" />
        Delete
      </Button>
      <button
        type="button"
        className="ml-auto text-muted-foreground hover:text-foreground transition-colors"
        onClick={onClear}
        data-ocid="leads.bulk.clear_button"
        aria-label="Clear selection"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}

// ─── Lead Detail Drawer ───────────────────────────────────────────────────────

function LeadDetailDrawer({
  lead,
  onClose,
  onUpdate,
}: {
  lead: Lead | null;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<Lead>) => void;
}) {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([
    {
      id: "n1",
      text: lead?.notes ?? "",
      author: "Alex Rivera",
      time: "2026-04-18T10:00:00",
    },
  ]);
  const [reminderDone, setReminderDone] = useState<Record<string, boolean>>({
    r3: true,
  });

  function addNote() {
    if (!note.trim()) return;
    setNotes((prev) => [
      {
        id: `n${Date.now()}`,
        text: note,
        author: "You",
        time: new Date().toISOString(),
      },
      ...prev,
    ]);
    setNote("");
  }

  if (!lead) return null;

  return (
    <Sheet open={!!lead} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-xl p-0 flex flex-col"
        data-ocid="leads.detail.sheet"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-border bg-card">
          <SheetHeader className="mb-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <UserAvatar name={lead.name} size="md" />
                <div className="min-w-0">
                  <SheetTitle className="text-base font-bold text-foreground leading-tight truncate">
                    {lead.name}
                  </SheetTitle>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Building2 size={11} />
                    {lead.company}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <StatusBadge status={lead.status} />
                <PriorityBadge priority={lead.priority} />
              </div>
            </div>
          </SheetHeader>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-muted/60 rounded-lg px-3 py-2 text-center">
              <p className="text-xs text-muted-foreground">Deal Value</p>
              <p className="text-sm font-bold font-mono text-foreground">
                ${lead.dealValue.toLocaleString()}
              </p>
            </div>
            <div className="bg-muted/60 rounded-lg px-3 py-2 text-center">
              <p className="text-xs text-muted-foreground">Source</p>
              <p className="text-sm font-semibold text-foreground truncate">
                {lead.source}
              </p>
            </div>
            <div className="bg-muted/60 rounded-lg px-3 py-2 text-center">
              <p className="text-xs text-muted-foreground">Follow-up</p>
              <p className="text-sm font-semibold text-foreground truncate">
                {lead.nextFollowUp
                  ? format(new Date(lead.nextFollowUp), "MMM d")
                  : "—"}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 mt-3">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 h-8 text-xs"
              data-ocid="leads.detail.call_button"
            >
              <Phone size={12} className="mr-1.5" />
              Call
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 h-8 text-xs"
              data-ocid="leads.detail.email_button"
            >
              <Mail size={12} className="mr-1.5" />
              Email
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 h-8 text-xs"
              data-ocid="leads.detail.schedule_button"
            >
              <Calendar size={12} className="mr-1.5" />
              Meet
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0"
              data-ocid="leads.detail.more_button"
              aria-label="More actions"
            >
              <MoreHorizontal size={14} />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="flex-1 flex flex-col min-h-0">
          <TabsList className="mx-6 mt-4 mb-0 justify-start gap-0.5 bg-transparent border-b border-border rounded-none h-auto pb-0">
            {[
              { v: "overview", label: "Overview", icon: User },
              { v: "activity", label: "Activity", icon: Clock },
              { v: "notes", label: "Notes", icon: StickyNote },
              { v: "documents", label: "Docs", icon: FileText },
              { v: "timeline", label: "Timeline", icon: TrendingUp },
              { v: "reminders", label: "Reminders", icon: Bell },
            ].map(({ v, label, icon: Icon }) => (
              <TabsTrigger
                key={v}
                value={v}
                data-ocid={`leads.detail.tab.${v}`}
                className="text-xs px-3 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
              >
                <Icon size={11} className="mr-1.5" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {/* Overview */}
            <TabsContent value="overview" className="mt-0 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Email",
                    value: lead.email,
                    icon: Mail,
                  },
                  {
                    label: "Phone",
                    value: lead.phone,
                    icon: Phone,
                  },
                  {
                    label: "Assigned To",
                    value: lead.assignedTo,
                    icon: User,
                  },
                  {
                    label: "Last Contact",
                    value: lead.lastContact
                      ? format(new Date(lead.lastContact), "MMM d, yyyy")
                      : "—",
                    icon: Clock,
                  },
                ].map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="bg-muted/40 rounded-xl p-3 border border-border/40"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon size={11} className="text-muted-foreground" />
                      <span className="text-[10px] uppercase tracking-wide font-semibold text-muted-foreground">
                        {label}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-foreground truncate">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {lead.tags.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Tag size={12} className="text-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Tags
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {lead.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[11px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Change Status
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {STAGES.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => onUpdate(lead.id, { status: s })}
                      data-ocid={`leads.detail.status.${s.toLowerCase()}`}
                      className={`text-[11px] px-2.5 py-1 rounded-full border font-medium transition-all ${
                        lead.status === s
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Activity */}
            <TabsContent value="activity" className="mt-0">
              <div className="space-y-3">
                {MOCK_ACTIVITIES.map((act, i) => {
                  const Icon = act.icon;
                  return (
                    <div
                      key={act.id}
                      data-ocid={`leads.detail.activity.item.${i + 1}`}
                      className="flex gap-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${act.bg} flex items-center justify-center shrink-0`}
                      >
                        <Icon size={14} className={act.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground">
                          {act.title}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {act.detail}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          {act.user} ·{" "}
                          {formatDistanceToNow(new Date(act.time), {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Notes */}
            <TabsContent value="notes" className="mt-0 space-y-4">
              <div className="space-y-2">
                <Textarea
                  placeholder="Add a note..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="text-sm resize-none"
                  rows={3}
                  data-ocid="leads.detail.note_textarea"
                />
                <Button
                  size="sm"
                  onClick={addNote}
                  disabled={!note.trim()}
                  data-ocid="leads.detail.add_note_button"
                  className="w-full h-8 text-xs"
                >
                  <Plus size={12} className="mr-1.5" />
                  Add Note
                </Button>
              </div>
              <div className="space-y-3">
                {notes.map((n, i) => (
                  <div
                    key={n.id}
                    data-ocid={`leads.detail.note.item.${i + 1}`}
                    className="bg-muted/40 rounded-xl p-3 border border-border/40"
                  >
                    <p className="text-xs text-foreground leading-relaxed">
                      {n.text}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1.5">
                      {n.author} ·{" "}
                      {formatDistanceToNow(new Date(n.time), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Documents */}
            <TabsContent value="documents" className="mt-0 space-y-3">
              <Button
                size="sm"
                variant="outline"
                className="w-full h-9 text-xs border-dashed"
                data-ocid="leads.detail.upload_button"
              >
                <Upload size={13} className="mr-1.5" />
                Upload Document
              </Button>
              <div className="space-y-2">
                {MOCK_DOCS.map((doc, i) => (
                  <div
                    key={doc.id}
                    data-ocid={`leads.detail.doc.item.${i + 1}`}
                    className="flex items-center gap-3 p-3 bg-muted/40 rounded-xl border border-border/40 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <FileText size={14} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground truncate">
                        {doc.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {doc.size} · {doc.uploaded}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 shrink-0"
                      aria-label={`Download ${doc.name}`}
                    >
                      <Download size={12} />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Timeline */}
            <TabsContent value="timeline" className="mt-0">
              <div className="relative pl-4">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                <div className="space-y-4">
                  {MOCK_TIMELINE.map((item, i) => (
                    <div
                      key={item.stage}
                      data-ocid={`leads.detail.timeline.item.${i + 1}`}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 border-background shrink-0 mt-0.5 -ml-[3px] ${STAGE_COLORS[item.stage as LeadStatus] || "bg-muted"}`}
                      />
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          Stage: {item.stage}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {format(new Date(item.date), "MMM d, yyyy")} · by{" "}
                          {item.by}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Reminders */}
            <TabsContent value="reminders" className="mt-0 space-y-3">
              <Button
                size="sm"
                variant="outline"
                className="w-full h-9 text-xs border-dashed"
                data-ocid="leads.detail.add_reminder_button"
              >
                <Bell size={13} className="mr-1.5" />
                Add Reminder
              </Button>
              <div className="space-y-2">
                {MOCK_REMINDERS.map((rem, i) => (
                  <div
                    key={rem.id}
                    data-ocid={`leads.detail.reminder.item.${i + 1}`}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                      reminderDone[rem.id]
                        ? "bg-muted/20 border-border/30 opacity-60"
                        : "bg-muted/40 border-border/40 hover:border-primary/30"
                    }`}
                  >
                    <Checkbox
                      checked={!!reminderDone[rem.id]}
                      onCheckedChange={(v) =>
                        setReminderDone((p) => ({
                          ...p,
                          [rem.id]: Boolean(v),
                        }))
                      }
                      data-ocid={`leads.detail.reminder.checkbox.${i + 1}`}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-xs font-medium ${reminderDone[rem.id] ? "line-through text-muted-foreground" : "text-foreground"}`}
                      >
                        {rem.title}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Due {rem.due} · {rem.assigned}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

// ─── Add Lead Modal ───────────────────────────────────────────────────────────

interface AddLeadModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (lead: Lead) => void;
}

function AddLeadModal({ open, onClose, onAdd }: AddLeadModalProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    dealValue: "",
    status: "New" as LeadStatus,
    priority: "Medium" as Priority,
    assignedTo: "",
    tags: "",
    notes: "",
  });

  const steps = ["Contact Info", "Company", "Deal Details", "Assignment"];

  function patch(k: string, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  function handleSubmit() {
    const lead: Lead = {
      id: `l${Date.now()}`,
      name: form.name || "New Lead",
      email: form.email,
      phone: form.phone,
      company: form.company,
      source: form.source,
      dealValue: Number(form.dealValue) || 0,
      status: form.status,
      priority: form.priority,
      assignedTo: form.assignedTo,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      notes: form.notes,
      lastContact: format(new Date(), "yyyy-MM-dd"),
      nextFollowUp: "",
    };
    onAdd(lead);
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      source: "",
      dealValue: "",
      status: "New",
      priority: "Medium",
      assignedTo: "",
      tags: "",
      notes: "",
    });
    setStep(0);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md" data-ocid="leads.add_lead.dialog">
        <DialogHeader>
          <DialogTitle className="font-display text-lg">
            Add New Lead
          </DialogTitle>
        </DialogHeader>

        {/* Step indicators */}
        <div className="flex items-center gap-1.5 mb-6">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-1.5 flex-1">
              <button
                type="button"
                onClick={() => i < step && setStep(i)}
                className={`w-6 h-6 rounded-full text-[11px] font-bold transition-all flex items-center justify-center shrink-0 ${
                  i <= step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </button>
              <span
                className={`text-[10px] font-medium truncate ${i === step ? "text-foreground" : "text-muted-foreground"}`}
              >
                {s}
              </span>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-px ${i < step ? "bg-primary" : "bg-border"}`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {step === 0 && (
            <>
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Sarah Mitchell"
                  value={form.name}
                  onChange={(e) => patch("name", e.target.value)}
                  className="h-9 text-sm"
                  data-ocid="leads.add_lead.name_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="sarah@company.com"
                  value={form.email}
                  onChange={(e) => patch("email", e.target.value)}
                  className="h-9 text-sm"
                  data-ocid="leads.add_lead.email_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs">
                  Phone
                </Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => patch("phone", e.target.value)}
                  className="h-9 text-sm"
                  data-ocid="leads.add_lead.phone_input"
                />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="space-y-1.5">
                <Label htmlFor="company" className="text-xs">
                  Company Name *
                </Label>
                <Input
                  id="company"
                  placeholder="TechNova Inc."
                  value={form.company}
                  onChange={(e) => patch("company", e.target.value)}
                  className="h-9 text-sm"
                  data-ocid="leads.add_lead.company_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="source" className="text-xs">
                  Lead Source
                </Label>
                <Select
                  value={form.source}
                  onValueChange={(v) => patch("source", v)}
                >
                  <SelectTrigger
                    className="h-9 text-sm"
                    data-ocid="leads.add_lead.source_select"
                  >
                    <SelectValue placeholder="Select source..." />
                  </SelectTrigger>
                  <SelectContent>
                    {SOURCES.map((s) => (
                      <SelectItem key={s} value={s} className="text-sm">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="tags" className="text-xs">
                  Tags (comma separated)
                </Label>
                <Input
                  id="tags"
                  placeholder="enterprise, SaaS, finance"
                  value={form.tags}
                  onChange={(e) => patch("tags", e.target.value)}
                  className="h-9 text-sm"
                  data-ocid="leads.add_lead.tags_input"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-1.5">
                <Label htmlFor="dealValue" className="text-xs">
                  Deal Value ($)
                </Label>
                <Input
                  id="dealValue"
                  type="number"
                  placeholder="50000"
                  value={form.dealValue}
                  onChange={(e) => patch("dealValue", e.target.value)}
                  className="h-9 text-sm"
                  data-ocid="leads.add_lead.deal_value_input"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs">Status</Label>
                  <Select
                    value={form.status}
                    onValueChange={(v) => patch("status", v)}
                  >
                    <SelectTrigger
                      className="h-9 text-sm"
                      data-ocid="leads.add_lead.status_select"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STAGES.map((s) => (
                        <SelectItem key={s} value={s} className="text-sm">
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Priority</Label>
                  <Select
                    value={form.priority}
                    onValueChange={(v) => patch("priority", v)}
                  >
                    <SelectTrigger
                      className="h-9 text-sm"
                      data-ocid="leads.add_lead.priority_select"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(["Low", "Medium", "High", "Urgent"] as Priority[]).map(
                        (p) => (
                          <SelectItem key={p} value={p} className="text-sm">
                            {p}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Notes</Label>
                <Textarea
                  placeholder="Initial notes about this lead..."
                  value={form.notes}
                  onChange={(e) => patch("notes", e.target.value)}
                  className="text-sm resize-none"
                  rows={3}
                  data-ocid="leads.add_lead.notes_textarea"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <div className="space-y-1.5">
              <Label className="text-xs">Assign To</Label>
              <Select
                value={form.assignedTo}
                onValueChange={(v) => patch("assignedTo", v)}
              >
                <SelectTrigger
                  className="h-9 text-sm"
                  data-ocid="leads.add_lead.assign_select"
                >
                  <SelectValue placeholder="Select team member..." />
                </SelectTrigger>
                <SelectContent>
                  {TEAM_MEMBERS.map((m) => (
                    <SelectItem key={m} value={m} className="text-sm">
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-[11px] text-muted-foreground pt-2">
                The selected rep will be notified and the lead will appear in
                their pipeline.
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => (step > 0 ? setStep((s) => s - 1) : onClose())}
            data-ocid="leads.add_lead.back_button"
          >
            {step === 0 ? "Cancel" : "Back"}
          </Button>
          <Button
            size="sm"
            onClick={
              step < steps.length - 1
                ? () => setStep((s) => s + 1)
                : handleSubmit
            }
            disabled={step === 0 && !form.name.trim()}
            data-ocid={
              step < steps.length - 1
                ? "leads.add_lead.next_button"
                : "leads.add_lead.submit_button"
            }
          >
            {step < steps.length - 1 ? (
              <>
                Next <ChevronRight size={14} className="ml-1" />
              </>
            ) : (
              <>
                <Plus size={14} className="mr-1.5" />
                Add Lead
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Table View ───────────────────────────────────────────────────────────────

interface TableViewProps {
  leads: Lead[];
  selected: Set<string>;
  onToggleSelect: (id: string) => void;
  onToggleAll: (ids: string[]) => void;
  onRowClick: (lead: Lead) => void;
  sortKey: keyof Lead | null;
  sortDir: "asc" | "desc";
  onSort: (key: keyof Lead) => void;
  page: number;
  pageSize: number;
  onPageChange: (p: number) => void;
  onPageSizeChange: (s: number) => void;
}

function TableView({
  leads,
  selected,
  onToggleSelect,
  onToggleAll,
  onRowClick,
  sortKey,
  sortDir,
  onSort,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: TableViewProps) {
  const total = leads.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const slice = leads.slice((page - 1) * pageSize, page * pageSize);
  const allSelected =
    slice.length > 0 && slice.every((l) => selected.has(l.id));

  const SortIcon = ({ col }: { col: keyof Lead }) =>
    sortKey === col ? (
      <span
        className={`ml-1 text-primary ${sortDir === "desc" ? "rotate-180" : ""} inline-block`}
      >
        ↑
      </span>
    ) : (
      <span className="ml-1 opacity-0 group-hover:opacity-40">↑</span>
    );

  const cols: {
    key: keyof Lead;
    label: string;
    sortable?: boolean;
    align?: string;
  }[] = [
    { key: "name", label: "Lead", sortable: true },
    { key: "company", label: "Company", sortable: true },
    { key: "source", label: "Source" },
    { key: "status", label: "Status", sortable: true },
    { key: "priority", label: "Priority", sortable: true },
    { key: "dealValue", label: "Value", sortable: true, align: "right" },
    { key: "assignedTo", label: "Assigned" },
    { key: "nextFollowUp", label: "Follow-up", sortable: true },
  ];

  return (
    <div
      className="bg-card border border-border rounded-2xl overflow-hidden"
      data-ocid="leads.table"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/30 border-b border-border">
            <tr>
              <th className="w-10 px-3 py-3 text-left">
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={() => onToggleAll(slice.map((l) => l.id))}
                  aria-label="Select all"
                  data-ocid="leads.table.select_all"
                />
              </th>
              {cols.map((c) => (
                <th
                  key={c.key}
                  className={`px-3 py-3 text-xs font-semibold text-muted-foreground tracking-wide whitespace-nowrap ${c.align === "right" ? "text-right" : "text-left"} ${c.sortable ? "cursor-pointer hover:text-foreground group select-none" : ""}`}
                  onClick={c.sortable ? () => onSort(c.key) : undefined}
                  onKeyDown={
                    c.sortable
                      ? (e) => e.key === "Enter" && onSort(c.key)
                      : undefined
                  }
                  tabIndex={c.sortable ? 0 : undefined}
                >
                  {c.label}
                  {c.sortable && <SortIcon col={c.key} />}
                </th>
              ))}
              <th className="px-3 py-3 text-xs font-semibold text-muted-foreground w-10" />
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {slice.map((lead, i) => (
                <motion.tr
                  key={lead.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, delay: i * 0.02 }}
                  onClick={() => onRowClick(lead)}
                  data-ocid={`leads.table.row.${i + 1}`}
                  className="border-b border-border/50 hover:bg-muted/30 cursor-pointer transition-colors group"
                >
                  <td
                    className="px-3 py-3"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                  >
                    <Checkbox
                      checked={selected.has(lead.id)}
                      onCheckedChange={() => onToggleSelect(lead.id)}
                      aria-label={`Select ${lead.name}`}
                      data-ocid={`leads.table.checkbox.${i + 1}`}
                    />
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5 min-w-[140px]">
                      <UserAvatar name={lead.name} size="sm" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate max-w-[120px]">
                          {lead.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground truncate max-w-[120px]">
                          {lead.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <p className="text-sm font-medium text-foreground truncate max-w-[120px]">
                      {lead.company}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {lead.phone}
                    </p>
                  </td>
                  <td className="px-3 py-3">
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      {lead.source}
                    </Badge>
                  </td>
                  <td className="px-3 py-3">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="px-3 py-3">
                    <PriorityBadge priority={lead.priority} />
                  </td>
                  <td className="px-3 py-3 text-right">
                    <span className="font-mono text-sm font-bold text-foreground">
                      ${lead.dealValue.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-1.5">
                      <UserAvatar name={lead.assignedTo} size="xs" />
                      <span className="text-xs text-muted-foreground truncate max-w-[70px]">
                        {lead.assignedTo.split(" ")[0]}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {lead.nextFollowUp
                        ? format(new Date(lead.nextFollowUp), "MMM d")
                        : "—"}
                    </span>
                  </td>
                  <td
                    className="px-3 py-3"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      data-ocid={`leads.table.more_button.${i + 1}`}
                      aria-label="More options"
                    >
                      <MoreHorizontal size={14} />
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>

            {slice.length === 0 && (
              <tr>
                <td colSpan={10} className="py-14 text-center">
                  <div
                    className="flex flex-col items-center gap-2"
                    data-ocid="leads.table.empty_state"
                  >
                    <Users size={32} className="text-muted-foreground/40" />
                    <p className="text-sm text-muted-foreground">
                      No leads match your filters
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-muted/20">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Rows per page:</span>
          <Select
            value={String(pageSize)}
            onValueChange={(v) => {
              onPageSizeChange(Number(v));
              onPageChange(1);
            }}
          >
            <SelectTrigger
              className="h-7 w-16 text-xs"
              data-ocid="leads.table.page_size_select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 25, 50].map((n) => (
                <SelectItem key={n} value={String(n)} className="text-xs">
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span>
            {Math.min((page - 1) * pageSize + 1, total)}–
            {Math.min(page * pageSize, total)} of {total}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="h-7 w-7 p-0 text-xs"
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            data-ocid="leads.table.pagination_prev"
            aria-label="Previous page"
          >
            ‹
          </Button>
          {Array.from({ length: Math.min(totalPages, 5) }, (_, k) => {
            const p = k + 1;
            return (
              <Button
                key={p}
                variant={page === p ? "default" : "outline"}
                size="sm"
                className="h-7 w-7 p-0 text-xs"
                onClick={() => onPageChange(p)}
                data-ocid={`leads.table.page.${p}`}
              >
                {p}
              </Button>
            );
          })}
          <Button
            variant="outline"
            size="sm"
            className="h-7 w-7 p-0 text-xs"
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            data-ocid="leads.table.pagination_next"
            aria-label="Next page"
          >
            ›
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Kanban View ──────────────────────────────────────────────────────────────

function KanbanView({
  leads,
  onCardClick,
  onStatusChange,
  onAddLead,
}: {
  leads: Lead[];
  onCardClick: (lead: Lead) => void;
  onStatusChange: (id: string, status: LeadStatus) => void;
  onAddLead: (status: LeadStatus) => void;
}) {
  const [dragId, setDragId] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<LeadStatus | null>(null);

  function handleDragStart(id: string) {
    setDragId(id);
  }

  function handleDrop(status: LeadStatus) {
    if (dragId) {
      onStatusChange(dragId, status);
    }
    setDragId(null);
    setDragOver(null);
  }

  return (
    <div
      className="flex gap-3 overflow-x-auto pb-4 pt-1 -mx-1 px-1"
      data-ocid="leads.kanban"
    >
      {STAGES.map((stage) => {
        const stageLeads = leads.filter((l) => l.status === stage);
        const totalValue = stageLeads.reduce((s, l) => s + l.dealValue, 0);
        const isOver = dragOver === stage;

        return (
          <div
            key={stage}
            className="flex-none w-[260px]"
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(stage);
            }}
            onDragLeave={() => setDragOver(null)}
            onDrop={() => handleDrop(stage)}
          >
            {/* Column header */}
            <div
              className={`bg-card border border-border rounded-t-xl border-t-4 px-3 pt-2.5 pb-2 mb-1 ${STAGE_HEADER_COLORS[stage]}`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-foreground">
                    {stage}
                  </span>
                  <Badge
                    variant="secondary"
                    className="h-4 px-1.5 text-[10px] font-bold"
                  >
                    {stageLeads.length}
                  </Badge>
                </div>
                <button
                  type="button"
                  onClick={() => onAddLead(stage)}
                  data-ocid={`leads.kanban.add_button.${stage.toLowerCase()}`}
                  className="w-5 h-5 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label={`Add lead to ${stage}`}
                >
                  <Plus size={11} />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground font-mono">
                ${totalValue.toLocaleString()}
              </p>
            </div>

            {/* Cards */}
            <div
              className={`bg-muted/20 border border-border border-t-0 rounded-b-xl min-h-[60px] p-2 space-y-2 transition-colors ${isOver ? "bg-primary/5 border-primary/30" : ""}`}
            >
              {stageLeads.map((lead, i) => (
                <div
                  key={lead.id}
                  draggable
                  onDragStart={() => handleDragStart(lead.id)}
                  onDragEnd={() => setDragId(null)}
                  data-ocid={`leads.kanban.item.${i + 1}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -1 }}
                  >
                    <Card
                      onClick={() => onCardClick(lead)}
                      className={`p-3 border cursor-pointer transition-all ${
                        dragId === lead.id
                          ? "opacity-40 scale-95"
                          : "border-border/50 hover:border-primary/30 hover:shadow-subtle"
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <UserAvatar name={lead.name} size="xs" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-foreground truncate leading-tight">
                            {lead.name}
                          </p>
                          <p className="text-[10px] text-muted-foreground truncate">
                            {lead.company}
                          </p>
                        </div>
                        <PriorityBadge
                          priority={lead.priority}
                          showIcon={false}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-mono text-foreground">
                          ${lead.dealValue.toLocaleString()}
                        </span>
                        {lead.nextFollowUp && (
                          <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                            <Clock size={9} />
                            {format(new Date(lead.nextFollowUp), "MMM d")}
                          </span>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
              {stageLeads.length === 0 && (
                <div
                  className={`py-5 text-center text-[11px] text-muted-foreground rounded-lg border-2 border-dashed transition-colors ${isOver ? "border-primary/40 text-primary/60" : "border-border"}`}
                  data-ocid={`leads.kanban.empty.${stage.toLowerCase()}`}
                >
                  {isOver ? "Drop here" : "No leads"}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Grid View ────────────────────────────────────────────────────────────────

function GridView({
  leads,
  onCardClick,
}: {
  leads: Lead[];
  onCardClick: (lead: Lead) => void;
}) {
  if (leads.length === 0) {
    return (
      <div className="py-16 text-center" data-ocid="leads.grid.empty_state">
        <Users size={40} className="text-muted-foreground/40 mx-auto mb-3" />
        <p className="text-muted-foreground">No leads match your filters</p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      data-ocid="leads.grid"
    >
      {leads.map((lead, i) => (
        <motion.div
          key={lead.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.04, duration: 0.2 }}
          whileHover={{ y: -2 }}
          data-ocid={`leads.grid.item.${i + 1}`}
        >
          <Card
            onClick={() => onCardClick(lead)}
            className="p-4 border border-border/60 hover:border-primary/30 hover:shadow-elevation cursor-pointer transition-all group"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <UserAvatar name={lead.name} size="md" />
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">
                    {lead.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate flex items-center gap-1">
                    <Building2 size={10} />
                    {lead.company}
                  </p>
                </div>
              </div>
              <PriorityBadge priority={lead.priority} />
            </div>

            {/* Contact */}
            <div className="space-y-1 mb-3">
              <p className="text-[11px] text-muted-foreground flex items-center gap-1.5 truncate">
                <Mail size={10} className="shrink-0" />
                {lead.email}
              </p>
              <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <Phone size={10} className="shrink-0" />
                {lead.phone}
              </p>
            </div>

            {/* Status + value */}
            <div className="flex items-center justify-between mb-3">
              <StatusBadge status={lead.status} />
              <span className="text-sm font-bold font-mono text-foreground">
                ${lead.dealValue.toLocaleString()}
              </span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2.5 border-t border-border/50">
              <div className="flex items-center gap-1.5">
                <UserAvatar name={lead.assignedTo} size="xs" />
                <span className="text-[11px] text-muted-foreground truncate max-w-[80px]">
                  {lead.assignedTo.split(" ")[0]}
                </span>
              </div>
              {/* Quick actions */}
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  data-ocid={`leads.grid.call_button.${i + 1}`}
                  className="w-6 h-6 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                  aria-label={`Call ${lead.name}`}
                >
                  <Phone size={10} />
                </button>
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  data-ocid={`leads.grid.email_button.${i + 1}`}
                  className="w-6 h-6 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                  aria-label={`Email ${lead.name}`}
                >
                  <Mail size={10} />
                </button>
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  data-ocid={`leads.grid.schedule_button.${i + 1}`}
                  className="w-6 h-6 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                  aria-label={`Schedule meeting with ${lead.name}`}
                >
                  <Calendar size={10} />
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

function LeadsPage() {
  const leads = useCrmStore((s) => s.leads);
  const addLead = useCrmStore((s) => s.addLead);
  const updateLead = useCrmStore((s) => s.updateLead);
  const deleteLead = useCrmStore((s) => s.deleteLead);
  const updateLeadStatus = useCrmStore((s) => s.updateLeadStatus);

  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>(
    {},
  );
  const [view, setView] = useState<"table" | "kanban" | "grid">("table");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [detailLead, setDetailLead] = useState<Lead | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [addStatus, setAddStatus] = useState<LeadStatus>("New");
  const [sortKey, setSortKey] = useState<keyof Lead | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showFilters, setShowFilters] = useState(false);

  // KPI metrics
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const totalLeads = leads.length;
  const newThisWeek = leads.filter(
    (l) => new Date(l.lastContact) >= weekAgo,
  ).length;
  const qualified = leads.filter((l) => l.status === "Qualified").length;
  const wonThisMonth = leads.filter(
    (l) => l.status === "Won" && new Date(l.lastContact) >= monthStart,
  ).length;

  const filtered = useMemo(() => {
    let arr = leads.filter((l) => {
      const q = search.toLowerCase();
      return (
        (!q ||
          l.name.toLowerCase().includes(q) ||
          l.company.toLowerCase().includes(q) ||
          l.email.toLowerCase().includes(q)) &&
        (!activeFilters.status || l.status === activeFilters.status) &&
        (!activeFilters.priority || l.priority === activeFilters.priority) &&
        (!activeFilters.source || l.source === activeFilters.source) &&
        (!activeFilters.assignedTo || l.assignedTo === activeFilters.assignedTo)
      );
    });

    if (sortKey) {
      arr = [...arr].sort((a, b) => {
        const av = a[sortKey] as string | number;
        const bv = b[sortKey] as string | number;
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return sortDir === "asc" ? cmp : -cmp;
      });
    }
    return arr;
  }, [leads, search, activeFilters, sortKey, sortDir]);

  const handleSort = useCallback(
    (key: keyof Lead) => {
      if (sortKey === key) {
        setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      } else {
        setSortKey(key);
        setSortDir("asc");
      }
      setPage(1);
    },
    [sortKey],
  );

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll(ids: string[]) {
    const allIn = ids.every((id) => selected.has(id));
    setSelected((prev) => {
      const next = new Set(prev);
      if (allIn) {
        for (const id of ids) next.delete(id);
      } else {
        for (const id of ids) next.add(id);
      }
      return next;
    });
  }

  function clearFilter(key: string) {
    setActiveFilters((p) => {
      const next = { ...p };
      delete next[key];
      return next;
    });
    setPage(1);
  }

  function setFilter(k: string, v: string) {
    setActiveFilters((p) => ({ ...p, [k]: v }));
    setPage(1);
  }

  const activeFilterChips = Object.entries(activeFilters).filter(([, v]) => v);

  const FILTER_OPTIONS: {
    key: string;
    label: string;
    options: { value: string; label: string }[];
  }[] = [
    {
      key: "status",
      label: "Status",
      options: STAGES.map((s) => ({ value: s, label: s })),
    },
    {
      key: "priority",
      label: "Priority",
      options: ["Low", "Medium", "High", "Urgent"].map((p) => ({
        value: p,
        label: p,
      })),
    },
    {
      key: "source",
      label: "Source",
      options: SOURCES.map((s) => ({ value: s, label: s })),
    },
    {
      key: "assignedTo",
      label: "Assigned To",
      options: TEAM_MEMBERS.map((m) => ({ value: m, label: m })),
    },
  ];

  function openAddLeadForStatus(status: LeadStatus) {
    setAddStatus(status);
    setAddOpen(true);
  }

  return (
    <div className="space-y-5 pb-16 md:pb-0">
      {/* Page Header */}
      <PageHeader
        title="Leads"
        description={`${leads.length} total leads · ${filtered.length} shown`}
        badge={
          <Badge
            variant="secondary"
            className="text-xs font-bold"
            data-ocid="leads.total_badge"
          >
            {leads.length}
          </Badge>
        }
        actions={[
          {
            label: "Import",
            onClick: () => {},
            icon: <Upload size={14} />,
            variant: "outline",
            "data-ocid": "leads.import_button",
          },
          {
            label: "Export CSV",
            onClick: () => {},
            icon: <Download size={14} />,
            variant: "outline",
            "data-ocid": "leads.export_button",
          },
          {
            label: "Add Lead",
            onClick: () => {
              setAddStatus("New");
              setAddOpen(true);
            },
            icon: <Plus size={14} />,
            "data-ocid": "leads.add_primary_button",
          },
        ]}
      />

      {/* KPI Mini Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiCard
          title="Total Leads"
          value={totalLeads}
          icon={<Users size={16} />}
          trend={12}
          trendLabel="vs last month"
          sparklineData={[14, 18, 15, 22, 19, 24, 20]}
          data-ocid="leads.kpi.total"
        />
        <KpiCard
          title="New This Week"
          value={newThisWeek}
          icon={<Plus size={16} />}
          trend={8}
          trendLabel="since last week"
          sparklineData={[3, 5, 4, 7, 5, 8, 6]}
          data-ocid="leads.kpi.new_week"
        />
        <KpiCard
          title="Qualified"
          value={qualified}
          icon={<CheckSquare size={16} />}
          trend={5}
          trendLabel="conversion rate up"
          sparklineData={[2, 3, 4, 3, 5, 4, 6]}
          data-ocid="leads.kpi.qualified"
        />
        <KpiCard
          title="Won This Month"
          value={wonThisMonth}
          icon={<TrendingUp size={16} />}
          trend={18}
          trendLabel="vs prior month"
          sparklineData={[1, 2, 1, 3, 2, 3, 2]}
          data-ocid="leads.kpi.won_month"
        />
      </div>

      {/* Search + Filters */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <SearchBar
            placeholder="Search by name, company, email..."
            value={search}
            onChange={(v) => {
              setSearch(v);
              setPage(1);
            }}
            className="w-full sm:w-72"
            data-ocid="leads.search_input"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters((p) => !p)}
            data-ocid="leads.filter_toggle"
            className={`h-9 gap-1.5 ${showFilters ? "border-primary text-primary bg-primary/5" : ""}`}
          >
            <Filter size={14} />
            Filters
            {activeFilterChips.length > 0 && (
              <Badge className="h-4 w-4 p-0 flex items-center justify-center text-[9px] font-bold rounded-full">
                {activeFilterChips.length}
              </Badge>
            )}
            <ChevronDown
              size={12}
              className={`transition-transform ${showFilters ? "rotate-180" : ""}`}
            />
          </Button>

          {/* View switcher */}
          <div className="ml-auto flex items-center border border-border rounded-lg overflow-hidden">
            {(
              [
                ["table", Table2, "Table view"],
                ["kanban", Kanban, "Kanban view"],
                ["grid", LayoutGrid, "Grid view"],
              ] as const
            ).map(([v, Icon, label]) => (
              <button
                type="button"
                key={v}
                onClick={() => setView(v)}
                data-ocid={`leads.view.${v}_toggle`}
                className={`p-2 transition-colors ${view === v ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}
                aria-label={label}
              >
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>

        {/* Filter dropdowns */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-1 pb-1">
                {FILTER_OPTIONS.map((f) => (
                  <Select
                    key={f.key}
                    value={activeFilters[f.key] ?? ""}
                    onValueChange={(v) =>
                      v === "" ? clearFilter(f.key) : setFilter(f.key, v)
                    }
                  >
                    <SelectTrigger
                      className={`h-8 text-xs w-auto min-w-[120px] ${activeFilters[f.key] ? "border-primary text-primary bg-primary/5" : ""}`}
                      data-ocid={`leads.filter.${f.key}_select`}
                    >
                      <SelectValue placeholder={f.label} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value=""
                        className="text-xs text-muted-foreground"
                      >
                        All {f.label}
                      </SelectItem>
                      {f.options.map((o) => (
                        <SelectItem
                          key={o.value}
                          value={o.value}
                          className="text-xs"
                        >
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
                {activeFilterChips.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs text-muted-foreground px-2"
                    onClick={() => setActiveFilters({})}
                    data-ocid="leads.filter.clear_all"
                  >
                    <X size={12} className="mr-1" />
                    Clear all
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active filter chips */}
        {activeFilterChips.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {activeFilterChips.map(([k, v]) => (
              <FilterChip
                key={k}
                label={`${k}: ${v}`}
                onRemove={() => clearFilter(k)}
              />
            ))}
          </div>
        )}

        {/* Bulk action bar */}
        <AnimatePresence>
          {selected.size > 0 && (
            <BulkActionBar
              count={selected.size}
              onAssign={() => {}}
              onChangeStatus={() => {}}
              onDelete={() => {
                for (const id of selected) deleteLead(id);
                setSelected(new Set());
              }}
              onClear={() => setSelected(new Set())}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Views */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {view === "table" && (
            <TableView
              leads={filtered}
              selected={selected}
              onToggleSelect={toggleSelect}
              onToggleAll={toggleAll}
              onRowClick={setDetailLead}
              sortKey={sortKey}
              sortDir={sortDir}
              onSort={handleSort}
              page={page}
              pageSize={pageSize}
              onPageChange={setPage}
              onPageSizeChange={setPageSize}
            />
          )}
          {view === "kanban" && (
            <KanbanView
              leads={filtered}
              onCardClick={setDetailLead}
              onStatusChange={updateLeadStatus}
              onAddLead={openAddLeadForStatus}
            />
          )}
          {view === "grid" && (
            <GridView leads={filtered} onCardClick={setDetailLead} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Add Lead Modal */}
      <AddLeadModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        onAdd={(lead) => {
          addLead({ ...lead, status: addStatus });
        }}
      />

      {/* Lead Detail Drawer */}
      <LeadDetailDrawer
        lead={detailLead}
        onClose={() => setDetailLead(null)}
        onUpdate={(id, updates) => {
          updateLead(id, updates);
          setDetailLead((prev) =>
            prev && prev.id === id ? { ...prev, ...updates } : prev,
          );
        }}
      />
    </div>
  );
}

export default LeadsPage;
