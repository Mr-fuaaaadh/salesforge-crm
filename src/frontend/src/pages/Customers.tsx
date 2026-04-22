import { KpiCard } from "@/components/shared/KpiCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { SearchBar } from "@/components/shared/SearchBar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
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
import type { Customer, LifecycleStage } from "@/types";
import { format, formatDistanceToNow } from "date-fns";
import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  ExternalLink,
  FileText,
  Grid3X3,
  LayoutList,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Plus,
  Star,
  Tag,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ── Mock detail data ──────────────────────────────────────────────────────────
const customerDetails: Record<
  string,
  {
    industry: string;
    address: string;
    website: string;
    accountManager: string;
    relationshipStart: string;
    annualValue: number;
    deals: { title: string; value: number; stage: string; date: string }[];
    activities: {
      id: string;
      type: string;
      description: string;
      user: string;
      date: string;
    }[];
    notes: { id: string; author: string; date: string; content: string }[];
    tickets: {
      id: string;
      subject: string;
      status: string;
      priority: string;
      created: string;
      updated: string;
    }[];
    payments: {
      id: string;
      invoice: string;
      date: string;
      amount: number;
      status: string;
      due: string;
    }[];
    contracts: {
      id: string;
      name: string;
      value: number;
      start: string;
      end: string;
      status: string;
    }[];
  }
> = {
  c1: {
    industry: "Logistics & Supply Chain",
    address: "400 Industrial Blvd, Chicago, IL 60601",
    website: "apexlog.net",
    accountManager: "David Park",
    relationshipStart: "2025-11-01",
    annualValue: 56000,
    deals: [
      {
        title: "Apex Logistics Suite",
        value: 56000,
        stage: "Won",
        date: "2026-04-19",
      },
    ],
    activities: [
      {
        id: "a1",
        type: "meeting",
        description: "Onboarding kickoff call — systems walkthrough",
        user: "David Park",
        date: "2026-04-29T10:00:00",
      },
      {
        id: "a2",
        type: "deal_won",
        description: "Deal closed — Apex Logistics Suite $56K",
        user: "David Park",
        date: "2026-04-19T16:00:00",
      },
      {
        id: "a3",
        type: "email",
        description: "Sent welcome kit and onboarding guide",
        user: "David Park",
        date: "2026-04-20T09:00:00",
      },
      {
        id: "a4",
        type: "call",
        description: "Discovery call — logistics pain points",
        user: "David Park",
        date: "2026-04-05T14:00:00",
      },
    ],
    notes: [
      {
        id: "n1",
        author: "David Park",
        date: "2026-04-22T11:00:00",
        content:
          "Excellent contact. Robert is very responsive and excited about the integration. Expansion opportunity in Q3 for additional warehouse licenses.",
      },
      {
        id: "n2",
        author: "Alex Rivera",
        date: "2026-04-10T10:00:00",
        content:
          "Initial call went very well. They have 3 warehouses and are scaling to 5 by end of year. Strong upsell potential.",
      },
    ],
    tickets: [
      {
        id: "TK-001",
        subject: "API integration setup assistance",
        status: "Resolved",
        priority: "High",
        created: "2026-04-21",
        updated: "2026-04-22",
      },
      {
        id: "TK-002",
        subject: "User permission configuration",
        status: "Closed",
        priority: "Low",
        created: "2026-04-20",
        updated: "2026-04-21",
      },
      {
        id: "TK-003",
        subject: "Report export not generating PDF",
        status: "Resolved",
        priority: "Medium",
        created: "2026-04-22",
        updated: "2026-04-22",
      },
    ],
    payments: [
      {
        id: "p1",
        invoice: "INV-2026-041",
        date: "2026-04-20",
        amount: 14000,
        status: "Paid",
        due: "2026-05-20",
      },
      {
        id: "p2",
        invoice: "INV-2026-031",
        date: "2026-03-20",
        amount: 14000,
        status: "Paid",
        due: "2026-04-20",
      },
      {
        id: "p3",
        invoice: "INV-2026-021",
        date: "2026-02-20",
        amount: 14000,
        status: "Paid",
        due: "2026-03-20",
      },
      {
        id: "p4",
        invoice: "INV-2026-011",
        date: "2026-01-20",
        amount: 14000,
        status: "Paid",
        due: "2026-02-20",
      },
    ],
    contracts: [
      {
        id: "ct1",
        name: "Logistics Suite — Annual License",
        value: 56000,
        start: "2026-04-19",
        end: "2027-04-18",
        status: "Active",
      },
    ],
  },
  c2: {
    industry: "Software & Technology",
    address: "1200 Tech Park Dr, Austin, TX 78701",
    website: "vertexsw.com",
    accountManager: "Alex Rivera",
    relationshipStart: "2025-08-15",
    annualValue: 61000,
    deals: [
      {
        title: "Vertex Software Growth",
        value: 61000,
        stage: "Won",
        date: "2026-04-22",
      },
      {
        title: "Vertex Starter Plan",
        value: 12000,
        stage: "Won",
        date: "2025-09-01",
      },
    ],
    activities: [
      {
        id: "a1",
        type: "deal_won",
        description: "Growth plan upgrade closed — $61K ARR",
        user: "Alex Rivera",
        date: "2026-04-22T10:00:00",
      },
      {
        id: "a2",
        type: "meeting",
        description: "Kickoff call for expansion plan",
        user: "Alex Rivera",
        date: "2026-04-15T14:00:00",
      },
      {
        id: "a3",
        type: "email",
        description: "Sent growth plan proposal deck",
        user: "Alex Rivera",
        date: "2026-04-10T09:00:00",
      },
      {
        id: "a4",
        type: "call",
        description: "Quarterly business review — positive feedback",
        user: "Alex Rivera",
        date: "2026-03-30T11:00:00",
      },
    ],
    notes: [
      {
        id: "n1",
        author: "Alex Rivera",
        date: "2026-04-22T11:00:00",
        content:
          "Ethan is a power user and champion internally. They're planning to add 20 more seats next quarter. Very high NPS score.",
      },
    ],
    tickets: [
      {
        id: "TK-004",
        subject: "SSO configuration for team",
        status: "Resolved",
        priority: "High",
        created: "2026-04-18",
        updated: "2026-04-19",
      },
      {
        id: "TK-005",
        subject: "Bulk import — CSV format question",
        status: "Closed",
        priority: "Low",
        created: "2026-04-12",
        updated: "2026-04-13",
      },
    ],
    payments: [
      {
        id: "p5",
        invoice: "INV-2026-042",
        date: "2026-04-22",
        amount: 61000,
        status: "Paid",
        due: "2026-05-22",
      },
      {
        id: "p6",
        invoice: "INV-2025-091",
        date: "2025-09-01",
        amount: 12000,
        status: "Paid",
        due: "2025-10-01",
      },
      {
        id: "p7",
        invoice: "INV-2025-121",
        date: "2025-12-01",
        amount: 12000,
        status: "Paid",
        due: "2026-01-01",
      },
    ],
    contracts: [
      {
        id: "ct2",
        name: "Vertex Growth Plan — Annual",
        value: 61000,
        start: "2026-04-22",
        end: "2027-04-21",
        status: "Active",
      },
      {
        id: "ct3",
        name: "Vertex Starter Plan",
        value: 12000,
        start: "2025-09-01",
        end: "2026-04-21",
        status: "Expired",
      },
    ],
  },
  c3: {
    industry: "Enterprise Technology",
    address: "88 Innovation Way, San Jose, CA 95110",
    website: "technova.io",
    accountManager: "Alex Rivera",
    relationshipStart: "2026-03-01",
    annualValue: 42000,
    deals: [
      {
        title: "TechNova Enterprise Suite",
        value: 42000,
        stage: "Negotiation",
        date: "2026-05-15",
      },
    ],
    activities: [
      {
        id: "a1",
        type: "email",
        description: "Received CFO pricing questions re: revised proposal",
        user: "Alex Rivera",
        date: "2026-04-22T10:30:00",
      },
      {
        id: "a2",
        type: "email",
        description: "Sent revised pricing proposal v3",
        user: "Alex Rivera",
        date: "2026-04-19T14:00:00",
      },
      {
        id: "a3",
        type: "meeting",
        description: "Product demo — enterprise feature walkthrough",
        user: "Alex Rivera",
        date: "2026-04-10T15:00:00",
      },
    ],
    notes: [
      {
        id: "n1",
        author: "Alex Rivera",
        date: "2026-04-22T09:00:00",
        content:
          "Sarah is the champion but CFO drives the budget decision. Need to address ROI more clearly in next conversation.",
      },
    ],
    tickets: [
      {
        id: "TK-006",
        subject: "Trial environment access issue",
        status: "Resolved",
        priority: "High",
        created: "2026-04-15",
        updated: "2026-04-16",
      },
    ],
    payments: [
      {
        id: "p8",
        invoice: "INV-2026-POC",
        date: "2026-03-15",
        amount: 2500,
        status: "Paid",
        due: "2026-04-15",
      },
    ],
    contracts: [
      {
        id: "ct4",
        name: "Proof of Concept Agreement",
        value: 2500,
        start: "2026-03-15",
        end: "2026-06-15",
        status: "Active",
      },
    ],
  },
  c4: {
    industry: "Financial Services",
    address: "200 Finance Ave, New York, NY 10001",
    website: "meridian.com",
    accountManager: "Maria Chen",
    relationshipStart: "2026-02-10",
    annualValue: 78500,
    deals: [
      {
        title: "Meridian Integration Project",
        value: 78500,
        stage: "Contract",
        date: "2026-05-01",
      },
    ],
    activities: [
      {
        id: "a1",
        type: "meeting",
        description: "Contract review with legal team",
        user: "Maria Chen",
        date: "2026-04-20T14:00:00",
      },
      {
        id: "a2",
        type: "call",
        description: "Demo call — 45 mins, very positive",
        user: "Maria Chen",
        date: "2026-04-15T15:00:00",
      },
      {
        id: "a3",
        type: "email",
        description: "Sent contract draft for review",
        user: "Maria Chen",
        date: "2026-04-17T10:00:00",
      },
    ],
    notes: [
      {
        id: "n1",
        author: "Maria Chen",
        date: "2026-04-21T09:00:00",
        content:
          "James has full budget authority. Legal team is moving quickly. Needs custom integration with their internal CRM system.",
      },
    ],
    tickets: [
      {
        id: "TK-007",
        subject: "Custom integration spec document",
        status: "Open",
        priority: "High",
        created: "2026-04-20",
        updated: "2026-04-22",
      },
      {
        id: "TK-008",
        subject: "Security compliance questionnaire",
        status: "Pending",
        priority: "Urgent",
        created: "2026-04-21",
        updated: "2026-04-22",
      },
    ],
    payments: [
      {
        id: "p9",
        invoice: "INV-2026-043",
        date: "2026-04-22",
        amount: 19625,
        status: "Pending",
        due: "2026-05-22",
      },
    ],
    contracts: [
      {
        id: "ct5",
        name: "Meridian Integration — Enterprise",
        value: 78500,
        start: "2026-05-01",
        end: "2027-04-30",
        status: "Pending",
      },
    ],
  },
  c5: {
    industry: "Investment & Finance",
    address: "Strandvägen 12, Stockholm, Sweden",
    website: "nordiccap.se",
    accountManager: "Maria Chen",
    relationshipStart: "2026-01-15",
    annualValue: 120000,
    deals: [
      {
        title: "Nordic Capital Platform",
        value: 120000,
        stage: "Contract",
        date: "2026-04-30",
      },
    ],
    activities: [
      {
        id: "a1",
        type: "meeting",
        description: "Contract signing scheduled for Thursday",
        user: "Maria Chen",
        date: "2026-04-22T09:00:00",
      },
      {
        id: "a2",
        type: "call",
        description: "Final review call — all items agreed",
        user: "Maria Chen",
        date: "2026-04-20T16:00:00",
      },
      {
        id: "a3",
        type: "meeting",
        description: "Legal team contract walkthrough",
        user: "Maria Chen",
        date: "2026-04-14T11:00:00",
      },
    ],
    notes: [
      {
        id: "n1",
        author: "Maria Chen",
        date: "2026-04-22T09:15:00",
        content:
          "Nina is excellent. Lawyers finished review — signing Thursday. This will be our biggest deal this quarter.",
      },
    ],
    tickets: [
      {
        id: "TK-009",
        subject: "GDPR data processing agreement",
        status: "Resolved",
        priority: "Urgent",
        created: "2026-04-10",
        updated: "2026-04-18",
      },
    ],
    payments: [
      {
        id: "p10",
        invoice: "INV-2026-044",
        date: "2026-04-30",
        amount: 30000,
        status: "Pending",
        due: "2026-05-30",
      },
    ],
    contracts: [
      {
        id: "ct6",
        name: "Nordic Capital Enterprise Platform",
        value: 120000,
        start: "2026-04-30",
        end: "2027-04-29",
        status: "Pending",
      },
    ],
  },
};

function getDefaultDetail(customer: Customer) {
  return {
    industry: "Technology",
    address: "123 Business Ave, New York, NY 10001",
    website: `${customer.company.toLowerCase().replace(/\s/g, "")}.com`,
    accountManager: "Sophia Lee",
    relationshipStart: customer.lastInteraction,
    annualValue: customer.totalRevenue,
    deals: [],
    activities: [
      {
        id: "a1",
        type: "email",
        description: "Initial outreach email sent",
        user: "Sophia Lee",
        date: `${customer.lastInteraction}T09:00:00`,
      },
    ],
    notes: [],
    tickets: [
      {
        id: "TK-X01",
        subject: "Onboarding support request",
        status: "Open",
        priority: "Medium",
        created: customer.lastInteraction,
        updated: customer.lastInteraction,
      },
    ],
    payments: [],
    contracts: [],
  };
}

// ── Types ─────────────────────────────────────────────────────────────────────
type ViewMode = "table" | "grid";

// ── Lifecycle pipeline ────────────────────────────────────────────────────────
const LIFECYCLE_STAGES: LifecycleStage[] = [
  "Subscriber",
  "Lead",
  "MQL",
  "SQL",
  "Opportunity",
  "Customer",
  "Evangelist",
];

function LifecyclePipeline({ current }: { current: LifecycleStage }) {
  const idx = LIFECYCLE_STAGES.indexOf(current);
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1">
      {LIFECYCLE_STAGES.map((stage, i) => {
        const isActive = i === idx;
        const isPast = i < idx;
        return (
          <div key={stage} className="flex items-center gap-1 shrink-0">
            <div
              className={`px-2 py-1 rounded-md text-[10px] font-medium whitespace-nowrap transition-smooth ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : isPast
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {stage}
            </div>
            {i < LIFECYCLE_STAGES.length - 1 && (
              <div
                className={`w-4 h-px ${isPast || isActive ? "bg-primary/40" : "bg-border"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Activity icon ─────────────────────────────────────────────────────────────
function ActivityIcon({ type }: { type: string }) {
  const map: Record<string, { icon: React.ReactNode; color: string }> = {
    email: {
      icon: <Mail size={12} />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
    },
    call: {
      icon: <Phone size={12} />,
      color:
        "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400",
    },
    meeting: {
      icon: <Calendar size={12} />,
      color:
        "bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400",
    },
    deal_won: {
      icon: <Star size={12} />,
      color:
        "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400",
    },
    note: {
      icon: <MessageSquare size={12} />,
      color: "bg-muted text-muted-foreground",
    },
  };
  const cfg = map[type] ?? map.note;
  return (
    <div
      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${cfg.color}`}
    >
      {cfg.icon}
    </div>
  );
}

// ── Ticket status badge ───────────────────────────────────────────────────────
function TicketStatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Open: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    Pending:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Resolved:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Closed: "bg-muted text-muted-foreground",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${map[status] ?? map.Closed}`}
    >
      {status}
    </span>
  );
}

// ── Payment status badge ──────────────────────────────────────────────────────
function PaymentStatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Pending:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Overdue: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${map[status] ?? ""}`}
    >
      {status}
    </span>
  );
}

// ── Contract status badge ─────────────────────────────────────────────────────
function ContractStatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Pending:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Expired: "bg-muted text-muted-foreground",
    Terminated: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${map[status] ?? ""}`}
    >
      {status}
    </span>
  );
}

// ── Customer Profile Sheet ────────────────────────────────────────────────────
function CustomerProfileSheet({
  customer,
  open,
  onClose,
}: {
  customer: Customer | null;
  open: boolean;
  onClose: () => void;
}) {
  const [noteText, setNoteText] = useState("");
  if (!customer) return null;
  const detail = customerDetails[customer.id] ?? getDefaultDetail(customer);

  const totalPaid = detail.payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);
  const totalOutstanding = detail.payments
    .filter((p) => p.status !== "Paid")
    .reduce((sum, p) => sum + p.amount, 0);
  const relationshipDays = Math.round(
    (Date.now() - new Date(detail.relationshipStart).getTime()) /
      (1000 * 60 * 60 * 24),
  );

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        className="w-full sm:max-w-2xl overflow-y-auto p-0"
        data-ocid="customers.profile.sheet"
      >
        {/* Header */}
        <div className="bg-card border-b border-border/60 p-6">
          <SheetHeader className="mb-0">
            <SheetTitle className="sr-only">Customer Profile</SheetTitle>
          </SheetHeader>
          <div className="flex items-start gap-4">
            <UserAvatar name={customer.name} size="lg" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-display font-bold text-lg text-foreground">
                  {customer.name}
                </h2>
                <StatusBadge status={customer.lifecycleStage} />
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                {detail.industry} · {customer.company}
              </p>
              <div className="flex items-center gap-4 mt-3 flex-wrap">
                <a
                  href={`mailto:${customer.email}`}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={12} />
                  {customer.email}
                </a>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Phone size={12} />
                  {customer.phone}
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="font-display font-bold text-xl text-foreground">
                ${customer.totalRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">Total Revenue</p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <Button
              size="sm"
              variant="outline"
              className="h-8 gap-1.5"
              data-ocid="customers.profile.email_button"
            >
              <Mail size={12} /> Email
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 gap-1.5"
              data-ocid="customers.profile.call_button"
            >
              <Phone size={12} /> Call
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 gap-1.5"
              data-ocid="customers.profile.meeting_button"
            >
              <Calendar size={12} /> Schedule
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 gap-1.5"
              data-ocid="customers.profile.note_button"
            >
              <MessageSquare size={12} /> Note
            </Button>
          </div>

          {/* Lifecycle pipeline */}
          <div className="mt-4">
            <p className="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Lifecycle Stage
            </p>
            <LifecyclePipeline current={customer.lifecycleStage} />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="flex-1">
          <TabsList className="w-full rounded-none border-b border-border/60 bg-transparent h-10 px-6 justify-start gap-0 overflow-x-auto">
            {[
              "overview",
              "activity",
              "notes",
              "tickets",
              "payments",
              "contracts",
            ].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                data-ocid={`customers.profile.${tab}.tab`}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent capitalize text-xs h-full px-3"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="p-6 space-y-6 mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Card className="p-4 border-border/60">
                <p className="text-xs text-muted-foreground">Total Spend</p>
                <p className="font-display font-bold text-xl text-foreground mt-1">
                  ${customer.totalRevenue.toLocaleString()}
                </p>
              </Card>
              <Card className="p-4 border-border/60">
                <p className="text-xs text-muted-foreground">Avg Deal Size</p>
                <p className="font-display font-bold text-xl text-foreground mt-1">
                  $
                  {customer.dealsCount > 0
                    ? Math.round(
                        customer.totalRevenue / customer.dealsCount,
                      ).toLocaleString()
                    : "—"}
                </p>
              </Card>
              <Card className="p-4 border-border/60">
                <p className="text-xs text-muted-foreground">Relationship</p>
                <p className="font-display font-bold text-xl text-foreground mt-1">
                  {relationshipDays}d
                </p>
              </Card>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Contact Info
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail
                      size={13}
                      className="text-muted-foreground shrink-0"
                    />
                    <span className="text-foreground truncate">
                      {customer.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone
                      size={13}
                      className="text-muted-foreground shrink-0"
                    />
                    <span className="text-foreground">{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building2
                      size={13}
                      className="text-muted-foreground shrink-0"
                    />
                    <span className="text-foreground">{customer.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin
                      size={13}
                      className="text-muted-foreground shrink-0"
                    />
                    <span className="text-foreground text-xs">
                      {detail.address}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Company Info
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-sm">
                    <Tag size={13} className="text-muted-foreground shrink-0" />
                    <span className="text-foreground">{detail.industry}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ExternalLink
                      size={13}
                      className="text-muted-foreground shrink-0"
                    />
                    <span className="text-foreground">{detail.website}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users
                      size={13}
                      className="text-muted-foreground shrink-0"
                    />
                    <span className="text-foreground">
                      {detail.accountManager}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      (Account Manager)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar
                      size={13}
                      className="text-muted-foreground shrink-0"
                    />
                    <span className="text-foreground text-xs">
                      Since{" "}
                      {format(
                        new Date(detail.relationshipStart),
                        "MMM d, yyyy",
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {detail.deals.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Associated Deals
                </h4>
                <div className="space-y-2">
                  {detail.deals.map((deal) => (
                    <div
                      key={deal.title}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/40 border border-border/40"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {deal.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(deal.date), "MMM d, yyyy")}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <StatusBadge status={deal.stage} />
                        <span className="font-mono text-sm font-semibold text-foreground">
                          ${deal.value.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {customer.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </TabsContent>

          {/* Activity */}
          <TabsContent value="activity" className="p-6 mt-0">
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-border/60" />
              <div className="space-y-4 pl-8">
                <AnimatePresence>
                  {detail.activities.map((act, i) => (
                    <motion.div
                      key={act.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="relative"
                      data-ocid={`customers.activity.item.${i + 1}`}
                    >
                      <div className="absolute -left-5 top-1">
                        <ActivityIcon type={act.type} />
                      </div>
                      <div className="bg-card border border-border/60 rounded-lg p-3">
                        <p className="text-sm text-foreground">
                          {act.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">
                            {act.user}
                          </span>
                          <span className="text-muted-foreground/40">·</span>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(act.date), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </TabsContent>

          {/* Notes */}
          <TabsContent value="notes" className="p-6 space-y-4 mt-0">
            <div className="space-y-3">
              {detail.notes.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No notes yet.
                </p>
              ) : (
                detail.notes.map((note, i) => (
                  <Card
                    key={note.id}
                    className="p-4 border-border/60"
                    data-ocid={`customers.note.item.${i + 1}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <UserAvatar name={note.author} size="xs" />
                      <span className="text-xs font-medium text-foreground">
                        {note.author}
                      </span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(note.date), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">
                      {note.content}
                    </p>
                  </Card>
                ))
              )}
            </div>
            <div className="border-t border-border/60 pt-4 space-y-2">
              <Textarea
                placeholder="Add a note..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className="text-sm resize-none h-20"
                data-ocid="customers.note.textarea"
              />
              <Button
                size="sm"
                onClick={() => setNoteText("")}
                disabled={!noteText.trim()}
                data-ocid="customers.note.submit_button"
              >
                Add Note
              </Button>
            </div>
          </TabsContent>

          {/* Support Tickets */}
          <TabsContent value="tickets" className="p-6 mt-0">
            <div className="space-y-2">
              {detail.tickets.map((ticket, i) => (
                <div
                  key={ticket.id}
                  className="flex items-start gap-3 p-3 rounded-lg border border-border/60 bg-card hover:border-primary/30 transition-colors"
                  data-ocid={`customers.ticket.item.${i + 1}`}
                >
                  <div className="mt-0.5">
                    {ticket.status === "Resolved" ||
                    ticket.status === "Closed" ? (
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    ) : ticket.priority === "Urgent" ? (
                      <AlertCircle size={14} className="text-destructive" />
                    ) : (
                      <Clock size={14} className="text-amber-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs text-muted-foreground">
                        {ticket.id}
                      </span>
                      <TicketStatusBadge status={ticket.status} />
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          ticket.priority === "Urgent"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : ticket.priority === "High"
                              ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {ticket.priority}
                      </span>
                    </div>
                    <p className="text-sm text-foreground mt-1">
                      {ticket.subject}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Created {format(new Date(ticket.created), "MMM d")} ·
                      Updated {format(new Date(ticket.updated), "MMM d")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Payment History */}
          <TabsContent value="payments" className="p-6 space-y-4 mt-0">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Card className="p-3 border-border/60">
                <p className="text-xs text-muted-foreground">Total Paid</p>
                <p className="font-display font-bold text-lg text-emerald-600 dark:text-emerald-400">
                  ${totalPaid.toLocaleString()}
                </p>
              </Card>
              <Card className="p-3 border-border/60">
                <p className="text-xs text-muted-foreground">Outstanding</p>
                <p
                  className={`font-display font-bold text-lg ${totalOutstanding > 0 ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground"}`}
                >
                  ${totalOutstanding.toLocaleString()}
                </p>
              </Card>
            </div>
            <div className="space-y-2">
              {detail.payments.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No payment records.
                </p>
              ) : (
                detail.payments.map((payment, i) => (
                  <div
                    key={payment.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/60 bg-card"
                    data-ocid={`customers.payment.item.${i + 1}`}
                  >
                    <FileText
                      size={14}
                      className="text-muted-foreground shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-foreground font-medium">
                          {payment.invoice}
                        </span>
                        <PaymentStatusBadge status={payment.status} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Issued {format(new Date(payment.date), "MMM d, yyyy")} ·
                        Due {format(new Date(payment.due), "MMM d, yyyy")}
                      </p>
                    </div>
                    <span className="font-mono font-semibold text-sm text-foreground shrink-0">
                      ${payment.amount.toLocaleString()}
                    </span>
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          {/* Contracts */}
          <TabsContent value="contracts" className="p-6 space-y-3 mt-0">
            {detail.contracts.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No contracts yet.
              </p>
            ) : (
              detail.contracts.map((contract, i) => (
                <Card
                  key={contract.id}
                  className="p-4 border-border/60"
                  data-ocid={`customers.contract.item.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-medium text-sm text-foreground">
                          {contract.name}
                        </p>
                        <ContractStatusBadge status={contract.status} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {format(new Date(contract.start), "MMM d, yyyy")} →{" "}
                        {format(new Date(contract.end), "MMM d, yyyy")}
                      </p>
                    </div>
                    <span className="font-mono font-bold text-base text-foreground shrink-0">
                      ${contract.value.toLocaleString()}
                    </span>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

// ── Add Customer Modal ────────────────────────────────────────────────────────
function AddCustomerModal({
  open,
  onClose,
  onAdd,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (c: Customer) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    lifecycleStage: "Lead" as LifecycleStage,
    tags: "",
    notes: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    const customer: Customer = {
      id: `c${Date.now()}`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      avatar: form.name.substring(0, 2).toUpperCase(),
      lifecycleStage: form.lifecycleStage,
      totalRevenue: 0,
      dealsCount: 0,
      lastInteraction: new Date().toISOString().split("T")[0],
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };
    onAdd(customer);
    onClose();
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      lifecycleStage: "Lead",
      tags: "",
      notes: "",
    });
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg" data-ocid="customers.add.dialog">
        <DialogHeader>
          <DialogTitle className="font-display">Add Customer</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="cust-name" className="text-xs">
                Full Name *
              </Label>
              <Input
                id="cust-name"
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                data-ocid="customers.add.name.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cust-company" className="text-xs">
                Company
              </Label>
              <Input
                id="cust-company"
                placeholder="Acme Corp"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                data-ocid="customers.add.company.input"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="cust-email" className="text-xs">
                Email *
              </Label>
              <Input
                id="cust-email"
                type="email"
                placeholder="jane@acme.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                data-ocid="customers.add.email.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cust-phone" className="text-xs">
                Phone
              </Label>
              <Input
                id="cust-phone"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                data-ocid="customers.add.phone.input"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="cust-industry" className="text-xs">
                Industry
              </Label>
              <Input
                id="cust-industry"
                placeholder="Technology"
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                data-ocid="customers.add.industry.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cust-stage" className="text-xs">
                Lifecycle Stage
              </Label>
              <Select
                value={form.lifecycleStage}
                onValueChange={(v) =>
                  setForm({ ...form, lifecycleStage: v as LifecycleStage })
                }
              >
                <SelectTrigger
                  id="cust-stage"
                  data-ocid="customers.add.stage.select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LIFECYCLE_STAGES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cust-tags" className="text-xs">
              Tags (comma-separated)
            </Label>
            <Input
              id="cust-tags"
              placeholder="enterprise, SaaS, partner"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              data-ocid="customers.add.tags.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cust-notes" className="text-xs">
              Notes
            </Label>
            <Textarea
              id="cust-notes"
              placeholder="Initial notes about this customer..."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="resize-none h-20 text-sm"
              data-ocid="customers.add.notes.textarea"
            />
          </div>
          <DialogFooter className="pt-1">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              data-ocid="customers.add.cancel_button"
            >
              Cancel
            </Button>
            <Button type="submit" data-ocid="customers.add.submit_button">
              Add Customer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ── Customer Table Row ────────────────────────────────────────────────────────
function CustomerTableRow({
  customer,
  index,
  onClick,
}: {
  customer: Customer;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      onClick={onClick}
      className="group cursor-pointer hover:bg-muted/40 transition-colors border-b border-border/40"
      data-ocid={`customers.item.${index + 1}`}
    >
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <UserAvatar name={customer.name} size="sm" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground truncate max-w-[140px]">
              {customer.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Building2 size={12} className="shrink-0" />
          <span className="truncate max-w-[120px]">{customer.company}</span>
        </div>
      </td>
      <td className="px-4 py-3 hidden lg:table-cell">
        <span className="text-xs text-muted-foreground truncate max-w-[160px] block">
          {customer.email}
        </span>
      </td>
      <td className="px-4 py-3 hidden xl:table-cell">
        <span className="text-xs text-muted-foreground">{customer.phone}</span>
      </td>
      <td className="px-4 py-3">
        <StatusBadge status={customer.lifecycleStage} />
      </td>
      <td className="px-4 py-3 text-right">
        <span className="font-mono text-sm font-semibold text-foreground">
          ${customer.totalRevenue.toLocaleString()}
        </span>
      </td>
      <td className="px-4 py-3 text-center hidden md:table-cell">
        <span className="text-sm text-foreground">{customer.dealsCount}</span>
      </td>
      <td className="px-4 py-3 hidden sm:table-cell">
        <span className="text-xs text-muted-foreground">
          {customer.lastInteraction
            ? format(new Date(customer.lastInteraction), "MMM d")
            : "—"}
        </span>
      </td>
      <td className="px-4 py-3">
        <Button
          variant="ghost"
          size="sm"
          className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          aria-label={`View ${customer.name}`}
          data-ocid={`customers.view_button.${index + 1}`}
        >
          <ArrowUpRight size={14} />
        </Button>
      </td>
    </motion.tr>
  );
}

// ── Customer Card ─────────────────────────────────────────────────────────────
function CustomerCard({
  customer,
  index,
  onClick,
}: {
  customer: Customer;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      data-ocid={`customers.card.${index + 1}`}
    >
      <Card
        onClick={onClick}
        className="p-5 border border-border/60 hover:border-primary/40 hover:shadow-elevation transition-all cursor-pointer group"
      >
        <div className="flex items-start gap-3 mb-4">
          <UserAvatar name={customer.name} size="lg" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-foreground truncate">
              {customer.name}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {customer.company}
            </p>
            <StatusBadge status={customer.lifecycleStage} className="mt-1" />
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            aria-label={`View ${customer.name}`}
          >
            <ArrowUpRight size={14} />
          </Button>
        </div>

        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Mail size={11} className="shrink-0" />
            <span className="truncate">{customer.email}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Phone size={11} className="shrink-0" />
            <span>{customer.phone}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border/60">
          <div className="flex items-center gap-1 text-xs">
            <DollarSign
              size={11}
              className="text-emerald-600 dark:text-emerald-400"
            />
            <span className="font-mono font-semibold text-foreground">
              ${customer.totalRevenue.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar size={11} />
            {customer.lastInteraction
              ? format(new Date(customer.lastInteraction), "MMM d")
              : "—"}
          </div>
          <Badge variant="secondary" className="text-[10px]">
            {customer.dealsCount} deals
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {customer.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-[10px] h-4 px-1.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
function CustomersPage() {
  const customers = useCrmStore((s) => s.customers);
  const addCustomer = useCrmStore((s) => s.addCustomer);

  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null,
  );
  const [profileOpen, setProfileOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  // KPI data
  const totalCustomers = customers.length;
  const retained = customers.filter(
    (c) => c.lifecycleStage === "Customer" || c.lifecycleStage === "Evangelist",
  ).length;
  const newThisMonth = customers.filter((c) => {
    const d = new Date(c.lastInteraction);
    const now = new Date();
    return (
      d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    );
  }).length;
  const atRisk = customers.filter((c) => {
    const daysSince =
      (Date.now() - new Date(c.lastInteraction).getTime()) /
      (1000 * 60 * 60 * 24);
    return daysSince > 21 && c.lifecycleStage !== "Customer";
  }).length;

  // Filtered list
  const filtered = customers.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q);
    const matchStage =
      stageFilter === "all" || c.lifecycleStage === stageFilter;
    return matchSearch && matchStage;
  });

  function openProfile(customer: Customer) {
    setSelectedCustomer(customer);
    setProfileOpen(true);
  }

  return (
    <div className="space-y-5 pb-16 md:pb-4">
      <PageHeader
        title="Customers"
        description={`${customers.length} total customers`}
        actions={[
          {
            label: "Add Customer",
            onClick: () => setAddOpen(true),
            icon: <Plus size={14} />,
            "data-ocid": "customers.add.primary_button",
          },
        ]}
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiCard
          title="Total Customers"
          value={totalCustomers}
          icon={<Users size={16} />}
          trend={8}
          trendLabel="vs last month"
          sparklineData={[6, 7, 7, 8, 8, 9, 10]}
          data-ocid="customers.kpi.total"
        />
        <KpiCard
          title="New This Month"
          value={newThisMonth}
          icon={<TrendingUp size={16} />}
          trend={12}
          trendLabel="vs last month"
          sparklineData={[1, 2, 1, 3, 2, 3, newThisMonth]}
          data-ocid="customers.kpi.new"
        />
        <KpiCard
          title="Retained"
          value={retained}
          icon={<Star size={16} />}
          trend={5}
          trendLabel="active customers"
          sparklineData={[3, 3, 4, 4, 4, 5, retained]}
          data-ocid="customers.kpi.retained"
        />
        <KpiCard
          title="At-Risk"
          value={atRisk}
          icon={<XCircle size={16} />}
          trend={-3}
          trendLabel="churn indicators"
          sparklineData={[2, 3, 4, 3, 4, 3, atRisk]}
          data-ocid="customers.kpi.at_risk"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 flex-wrap">
        <SearchBar
          placeholder="Search customers..."
          value={search}
          onChange={setSearch}
          className="w-64"
          data-ocid="customers.search_input"
        />
        <Select value={stageFilter} onValueChange={setStageFilter}>
          <SelectTrigger
            className="w-44 h-9 text-sm"
            data-ocid="customers.stage.select"
          >
            <SelectValue placeholder="All Stages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stages</SelectItem>
            {LIFECYCLE_STAGES.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="ml-auto flex items-center gap-1 border border-border/60 rounded-lg p-1">
          <Button
            variant={viewMode === "table" ? "secondary" : "ghost"}
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => setViewMode("table")}
            aria-label="Table view"
            data-ocid="customers.view.table.toggle"
          >
            <LayoutList size={14} />
          </Button>
          <Button
            variant={viewMode === "grid" ? "secondary" : "ghost"}
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
            data-ocid="customers.view.grid.toggle"
          >
            <Grid3X3 size={14} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {viewMode === "table" ? (
          <motion.div
            key="table"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Card className="border border-border/60 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60 bg-muted/40">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Customer
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Company
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell">
                        Email
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden xl:table-cell">
                        Phone
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Stage
                      </th>
                      <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Revenue
                      </th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">
                        Deals
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden sm:table-cell">
                        Last Activity
                      </th>
                      <th className="px-4 py-3 w-10" />
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr>
                        <td
                          colSpan={9}
                          className="px-4 py-12 text-center text-sm text-muted-foreground"
                          data-ocid="customers.table.empty_state"
                        >
                          No customers found matching your filters.
                        </td>
                      </tr>
                    ) : (
                      filtered.map((customer, i) => (
                        <CustomerTableRow
                          key={customer.id}
                          customer={customer}
                          index={i}
                          onClick={() => openProfile(customer)}
                        />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {filtered.length > 0 && (
                <div className="px-4 py-3 border-t border-border/60 bg-muted/20 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    Showing {filtered.length} of {customers.length} customers
                  </p>
                </div>
              )}
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.length === 0 ? (
              <div
                className="col-span-full text-center py-12 text-sm text-muted-foreground"
                data-ocid="customers.grid.empty_state"
              >
                No customers found matching your filters.
              </div>
            ) : (
              filtered.map((customer, i) => (
                <CustomerCard
                  key={customer.id}
                  customer={customer}
                  index={i}
                  onClick={() => openProfile(customer)}
                />
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Sheet */}
      <CustomerProfileSheet
        customer={selectedCustomer}
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />

      {/* Add Customer Modal */}
      <AddCustomerModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        onAdd={addCustomer}
      />
    </div>
  );
}

export default CustomersPage;
