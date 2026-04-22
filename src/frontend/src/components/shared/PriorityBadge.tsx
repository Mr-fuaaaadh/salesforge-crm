import { cn } from "@/lib/utils";
import type { Priority } from "@/types";
import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Flame,
} from "lucide-react";

interface PriorityBadgeProps {
  priority: Priority;
  showIcon?: boolean;
  className?: string;
}

const priorityConfig: Record<
  Priority,
  { label: string; className: string; icon: React.ReactNode }
> = {
  Low: {
    label: "Low",
    className:
      "bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400",
    icon: <ArrowDown size={10} />,
  },
  Medium: {
    label: "Medium",
    className:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    icon: <ArrowRight size={10} />,
  },
  High: {
    label: "High",
    className:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    icon: <ArrowUp size={10} />,
  },
  Urgent: {
    label: "Urgent",
    className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    icon: <Flame size={10} />,
  },
};

export function PriorityBadge({
  priority,
  showIcon = true,
  className,
}: PriorityBadgeProps) {
  const config = priorityConfig[priority];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium leading-none whitespace-nowrap",
        config.className,
        className,
      )}
    >
      {showIcon && config.icon}
      {config.label}
    </span>
  );
}
