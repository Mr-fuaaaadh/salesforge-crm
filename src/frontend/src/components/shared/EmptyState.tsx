import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileSearch, Inbox, Users } from "lucide-react";
import { motion } from "motion/react";

type EmptyVariant = "search" | "list" | "team" | "default";

interface EmptyStateProps {
  variant?: EmptyVariant;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  className?: string;
  "data-ocid"?: string;
}

const variantConfig: Record<
  EmptyVariant,
  { icon: React.ReactNode; defaultTitle: string; defaultDesc: string }
> = {
  search: {
    icon: <FileSearch size={36} className="text-muted-foreground/40" />,
    defaultTitle: "No results found",
    defaultDesc:
      "Try adjusting your search or filters to find what you're looking for.",
  },
  list: {
    icon: <Inbox size={36} className="text-muted-foreground/40" />,
    defaultTitle: "Nothing here yet",
    defaultDesc: "Get started by adding your first item.",
  },
  team: {
    icon: <Users size={36} className="text-muted-foreground/40" />,
    defaultTitle: "No team members",
    defaultDesc: "Invite your team to get started.",
  },
  default: {
    icon: <Inbox size={36} className="text-muted-foreground/40" />,
    defaultTitle: "Nothing to show",
    defaultDesc: "There's nothing here yet.",
  },
};

export function EmptyState({
  variant = "default",
  title,
  description,
  action,
  className,
  "data-ocid": dataOcid,
}: EmptyStateProps) {
  const config = variantConfig[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex flex-col items-center justify-center py-16 px-6 text-center",
        className,
      )}
      data-ocid={dataOcid ?? "empty.state"}
    >
      <div className="mb-4 p-4 rounded-2xl bg-muted/50">{config.icon}</div>
      <h3 className="font-display font-semibold text-base text-foreground mb-1.5">
        {title ?? config.defaultTitle}
      </h3>
      <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
        {description ?? config.defaultDesc}
      </p>
      {action && (
        <Button
          onClick={action.onClick}
          size="sm"
          className="mt-5"
          data-ocid="empty.state.action.button"
        >
          {action.icon}
          {action.label}
        </Button>
      )}
    </motion.div>
  );
}
