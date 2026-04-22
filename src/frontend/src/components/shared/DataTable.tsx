import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsUpDown,
} from "lucide-react";
import { useMemo, useState } from "react";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T extends { id: string }> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
  selectable?: boolean;
  onSelectionChange?: (selectedIds: string[]) => void;
  emptyState?: React.ReactNode;
  className?: string;
  "data-ocid"?: string;
}

export function DataTable<T extends { id: string }>({
  data,
  columns,
  pageSize = 10,
  selectable = false,
  onSelectionChange,
  emptyState,
  className,
  "data-ocid": dataOcid,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string>("");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = (a as Record<string, unknown>)[sortKey];
      const bVal = (b as Record<string, unknown>)[sortKey];
      const cmp = String(aVal ?? "").localeCompare(
        String(bVal ?? ""),
        undefined,
        { numeric: true },
      );
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const pageData = sortedData.slice((page - 1) * pageSize, page * pageSize);

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPage(1);
  }

  function toggleRow(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      onSelectionChange?.([...next]);
      return next;
    });
  }

  function toggleAll() {
    if (selectedIds.size === pageData.length) {
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    } else {
      const ids = new Set(pageData.map((r) => r.id));
      setSelectedIds(ids);
      onSelectionChange?.([...ids]);
    }
  }

  const SortIcon = ({ col }: { col: string }) => {
    if (sortKey !== col)
      return <ChevronsUpDown size={12} className="text-muted-foreground/50" />;
    return sortDir === "asc" ? (
      <ChevronUp size={12} className="text-primary" />
    ) : (
      <ChevronDown size={12} className="text-primary" />
    );
  };

  return (
    <div className={cn("flex flex-col gap-3", className)} data-ocid={dataOcid}>
      {selectable && selectedIds.size > 0 && (
        <div className="flex items-center gap-2 px-3 py-2 bg-primary/5 rounded-lg border border-primary/20">
          <Badge variant="secondary">{selectedIds.size} selected</Badge>
          <span className="text-sm text-muted-foreground">items</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setSelectedIds(new Set());
              onSelectionChange?.([]);
            }}
            className="ml-auto h-7 text-xs"
          >
            Clear
          </Button>
        </div>
      )}

      <div className="rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40">
              {selectable && (
                <TableHead className="w-10 px-3">
                  <Checkbox
                    checked={
                      pageData.length > 0 &&
                      selectedIds.size === pageData.length
                    }
                    onCheckedChange={toggleAll}
                    aria-label="Select all"
                    data-ocid="table.select_all.checkbox"
                  />
                </TableHead>
              )}
              {columns.map((col) => (
                <TableHead
                  key={String(col.key)}
                  className={cn(
                    "text-xs font-semibold text-muted-foreground",
                    col.className,
                  )}
                >
                  {col.sortable ? (
                    <button
                      type="button"
                      onClick={() => handleSort(String(col.key))}
                      className="flex items-center gap-1 hover:text-foreground transition-colors"
                    >
                      {col.label}
                      <SortIcon col={String(col.key)} />
                    </button>
                  ) : (
                    col.label
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="text-center py-12"
                >
                  {emptyState ?? (
                    <span className="text-muted-foreground text-sm">
                      No data found
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ) : (
              pageData.map((row, i) => (
                <TableRow
                  key={row.id}
                  className={cn(
                    "transition-colors",
                    selectedIds.has(row.id) && "bg-primary/5",
                  )}
                  data-ocid={`table.row.${i + 1}`}
                >
                  {selectable && (
                    <TableCell className="px-3">
                      <Checkbox
                        checked={selectedIds.has(row.id)}
                        onCheckedChange={() => toggleRow(row.id)}
                        aria-label={`Select row ${i + 1}`}
                        data-ocid={`table.checkbox.${i + 1}`}
                      />
                    </TableCell>
                  )}
                  {columns.map((col) => {
                    const rawVal = (row as Record<string, unknown>)[
                      String(col.key)
                    ];
                    return (
                      <TableCell
                        key={String(col.key)}
                        className={cn("text-sm", col.className)}
                      >
                        {col.render
                          ? col.render(rawVal, row)
                          : String(rawVal ?? "")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-1">
          <span className="text-xs text-muted-foreground">
            Page {page} of {totalPages} · {sortedData.length} results
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              data-ocid="table.pagination_prev"
              className="h-7 w-7 p-0"
            >
              <ChevronLeft size={14} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              data-ocid="table.pagination_next"
              className="h-7 w-7 p-0"
            >
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
