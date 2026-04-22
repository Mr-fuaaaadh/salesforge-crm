import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  autoFocus?: boolean;
  "data-ocid"?: string;
}

export function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  className,
  autoFocus,
  "data-ocid": dataOcid,
}: SearchBarProps) {
  const [internal, setInternal] = useState(value ?? "");
  const inputRef = useRef<HTMLInputElement>(null);
  const controlled = value !== undefined;
  const displayValue = controlled ? value : internal;

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    if (!controlled) setInternal(v);
    onChange?.(v);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") onSearch?.(displayValue);
    if (e.key === "Escape") {
      if (!controlled) setInternal("");
      onChange?.("");
    }
  }

  function handleClear() {
    if (!controlled) setInternal("");
    onChange?.("");
    inputRef.current?.focus();
  }

  return (
    <div className={cn("relative flex items-center", className)}>
      <Search
        size={15}
        className="absolute left-3 text-muted-foreground pointer-events-none z-10"
      />
      <Input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        value={displayValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        data-ocid={dataOcid ?? "search.input"}
        className="pl-9 pr-8 h-9 text-sm"
        aria-label={placeholder}
      />
      {displayValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2.5 p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <X size={13} />
        </button>
      )}
    </div>
  );
}
