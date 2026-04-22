import { cn } from "@/lib/utils";

type LeadStatus =
  | "New"
  | "Contacted"
  | "Qualified"
  | "Proposal"
  | "Negotiation"
  | "Won"
  | "Lost";
type DealStage =
  | "Prospect"
  | "Qualified"
  | "Proposal"
  | "Negotiation"
  | "Contract"
  | "Won"
  | "Lost";
type TaskStatus = "Pending" | "InProgress" | "Completed" | "Overdue";
type LifecycleStage =
  | "Subscriber"
  | "Lead"
  | "MQL"
  | "SQL"
  | "Opportunity"
  | "Customer"
  | "Evangelist";

type StatusValue =
  | LeadStatus
  | DealStage
  | TaskStatus
  | LifecycleStage
  | string;

interface StatusBadgeProps {
  status: StatusValue;
  className?: string;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  // Lead statuses
  New: {
    label: "New",
    className:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  Contacted: {
    label: "Contacted",
    className:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  },
  Qualified: {
    label: "Qualified",
    className:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  Proposal: {
    label: "Proposal",
    className:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  Negotiation: {
    label: "Negotiation",
    className:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
  Won: {
    label: "Won",
    className:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  Lost: {
    label: "Lost",
    className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  },
  // Deal stages
  Prospect: {
    label: "Prospect",
    className:
      "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400",
  },
  Contract: {
    label: "Contract",
    className:
      "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  },
  // Task statuses
  Pending: {
    label: "Pending",
    className:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  InProgress: {
    label: "In Progress",
    className:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  Completed: {
    label: "Completed",
    className:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  Overdue: {
    label: "Overdue",
    className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  },
  // Lifecycle
  Subscriber: {
    label: "Subscriber",
    className:
      "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400",
  },
  Lead: {
    label: "Lead",
    className:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  MQL: {
    label: "MQL",
    className:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  },
  SQL: {
    label: "SQL",
    className:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  Opportunity: {
    label: "Opportunity",
    className:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  Customer: {
    label: "Customer",
    className:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  Evangelist: {
    label: "Evangelist",
    className:
      "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status] ?? {
    label: status,
    className: "bg-muted text-muted-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium leading-none whitespace-nowrap",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  );
}
