import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

interface PageAction {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
  "data-ocid"?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: PageAction[];
  backAction?: () => void;
  badge?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  actions,
  backAction,
  badge,
  className,
}: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
        className,
      )}
    >
      <div className="flex items-start gap-3 min-w-0">
        {backAction && (
          <Button
            variant="ghost"
            size="sm"
            onClick={backAction}
            className="h-8 w-8 p-0 mt-0.5 shrink-0"
            aria-label="Go back"
          >
            <ArrowLeft size={16} />
          </Button>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="font-display font-bold text-xl text-foreground leading-tight truncate">
              {title}
            </h1>
            {badge}
          </div>
          {description && (
            <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
              {description}
            </p>
          )}
        </div>
      </div>

      {actions && actions.length > 0 && (
        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          {actions.map((action, i) => (
            <Button
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              variant={
                action.variant ??
                (i === actions.length - 1 ? "default" : "outline")
              }
              size="sm"
              onClick={action.onClick}
              data-ocid={action["data-ocid"]}
              className="h-9"
            >
              {action.icon && <span className="mr-1.5">{action.icon}</span>}
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
