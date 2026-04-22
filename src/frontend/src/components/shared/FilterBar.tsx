import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { ChevronDown } from "lucide-react";

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterConfig {
  key: string;
  label: string;
  options: FilterOption[];
}

interface FilterBarProps {
  filters: FilterConfig[];
  activeFilters: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onClearAll?: () => void;
  className?: string;
}

export function FilterBar({
  filters,
  activeFilters,
  onChange,
  onClearAll,
  className,
}: FilterBarProps) {
  const activeCount = Object.values(activeFilters).filter(Boolean).length;

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {filters.map((filter) => {
        const active = activeFilters[filter.key];
        const activeOption = filter.options.find((o) => o.value === active);

        return (
          <DropdownMenu key={filter.key}>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                data-ocid={`filter.${filter.key}.select`}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
                  active
                    ? "bg-primary/10 text-primary border-primary/30"
                    : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground",
                )}
              >
                {filter.label}
                {activeOption && (
                  <span className="font-semibold">: {activeOption.label}</span>
                )}
                <ChevronDown size={11} className="opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-36">
              <DropdownMenuItem
                onClick={() => onChange(filter.key, "")}
                className={cn("text-xs", !active && "font-medium text-primary")}
              >
                All
              </DropdownMenuItem>
              {filter.options.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => onChange(filter.key, opt.value)}
                  className={cn(
                    "text-xs",
                    active === opt.value && "font-medium text-primary",
                  )}
                >
                  {opt.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}

      {activeCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          data-ocid="filter.clear_all.button"
          className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
        >
          <X size={12} className="mr-1" />
          Clear ({activeCount})
        </Button>
      )}
    </div>
  );
}
