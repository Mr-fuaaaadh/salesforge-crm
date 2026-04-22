import { c as createLucideIcon, u as useCrmStore, r as reactExports, e as ue, j as jsxRuntimeExports, E as Ellipsis, w as ChartColumn, x as cn, A as AnimatePresence, m as motion, b as UserAvatar, T as Target, C as Calendar, s as User, X, n as ChevronRight } from "./index-BlMbxdLA.js";
import { S as StatusBadge } from "./StatusBadge-Bb6VdZiW.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { C as Checkbox } from "./checkbox-DrxJEOS1.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-CmxgkzUi.js";
import { I as Input } from "./input-NM7OR39o.js";
import { L as Label } from "./label-CJYb5cSz.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CwDuuSgI.js";
import { S as Separator } from "./separator-CwslPhpP.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CfPtILIY.js";
import { T as Textarea } from "./textarea-BdIGEuKt.js";
import { L as LayoutList } from "./layout-list-h8QhFo9R.js";
import { F as Funnel } from "./funnel-C9x5ee5h.js";
import { P as Plus } from "./plus-B_ARFHaG.js";
import { C as Check } from "./check-mNj6eV7j.js";
import { P as Paperclip } from "./paperclip-BDniJpSj.js";
import { M as MessageSquare } from "./message-square-DcuiSNSD.js";
import { F as FileText } from "./file-text-CaNw91lo.js";
import { D as Download } from "./download-Duj6N_G9.js";
import { U as Upload } from "./upload-jBpkVeh4.js";
import { C as Clock } from "./clock-BUl1m0Xe.js";
import { C as CircleAlert } from "./circle-alert-BQpio714.js";
import "./index-TftrN_Lb.js";
import "./index-BrhQEKyn.js";
import "./index-IXOTxK3N.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "19", cy: "5", r: "1", key: "w8mnmm" }],
  ["circle", { cx: "5", cy: "5", r: "1", key: "lttvr7" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
  ["circle", { cx: "19", cy: "19", r: "1", key: "shf9b7" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
];
const Grip = createLucideIcon("grip", __iconNode);
const STAGES = [
  "Prospect",
  "Qualified",
  "Proposal",
  "Negotiation",
  "Contract",
  "Won",
  "Lost"
];
const STAGE_CONFIG = {
  Prospect: {
    color: "text-foreground/70",
    bg: "bg-muted",
    border: "border-border",
    dot: "bg-muted-foreground/40",
    accent: "#94a3b8"
  },
  Qualified: {
    color: "text-amber-700 dark:text-amber-300",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-700",
    dot: "bg-amber-400",
    accent: "#f59e0b"
  },
  Proposal: {
    color: "text-indigo-700 dark:text-indigo-300",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-700",
    dot: "bg-indigo-400",
    accent: "#6366f1"
  },
  Negotiation: {
    color: "text-orange-700 dark:text-orange-300",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
    dot: "bg-orange-400",
    accent: "#f97316"
  },
  Contract: {
    color: "text-teal-700 dark:text-teal-300",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    dot: "bg-teal-400",
    accent: "#14b8a6"
  },
  Won: {
    color: "text-emerald-700 dark:text-emerald-300",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-700",
    dot: "bg-emerald-400",
    accent: "#10b981"
  },
  Lost: {
    color: "text-red-700 dark:text-red-300",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-700",
    dot: "bg-red-400",
    accent: "#ef4444"
  }
};
const LOST_REASONS = [
  "Price",
  "Competitor",
  "No Budget",
  "Timing",
  "No Interest"
];
const STAGE_PROGRESS = {
  Prospect: 8,
  Qualified: 24,
  Proposal: 42,
  Negotiation: 62,
  Contract: 82,
  Won: 100,
  Lost: 0
};
const OWNERS = [
  "Alex Rivera",
  "Maria Chen",
  "David Park",
  "Sophia Lee",
  "Jordan Mills",
  "Aisha Patel"
];
function fmt(value) {
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(0)}K`;
  return `$${value}`;
}
function fmtFull(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}
function isOverdue(dateStr) {
  return dateStr !== "" && new Date(dateStr) < /* @__PURE__ */ new Date();
}
function probColor(prob) {
  if (prob >= 70)
    return "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30";
  if (prob >= 40)
    return "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30";
  return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30";
}
function companyInitials(name) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}
function companyColor(name) {
  const palette = [
    "from-blue-500 to-blue-600",
    "from-violet-500 to-violet-600",
    "from-emerald-500 to-emerald-600",
    "from-amber-500 to-amber-600",
    "from-rose-500 to-rose-600",
    "from-teal-500 to-teal-600",
    "from-indigo-500 to-indigo-600",
    "from-cyan-500 to-cyan-600"
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return palette[Math.abs(hash) % palette.length];
}
function DealCard({ deal, index, onDragStart, onClick }) {
  const cfg = STAGE_CONFIG[deal.stage];
  const overdue = isOverdue(deal.expectedCloseDate);
  const completedTasks = deal.tasks.filter((t) => t.completed).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.04, duration: 0.2 },
      draggable: true,
      onDragStart: () => onDragStart(deal),
      onClick: () => onClick(deal),
      "data-ocid": `deal.card.${index + 1}`,
      className: cn(
        "group bg-card border border-border rounded-xl p-3.5 cursor-pointer select-none",
        "hover:shadow-elevation hover:-translate-y-0.5 transition-smooth hover:border-primary/30",
        "active:opacity-60 active:scale-95"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 mb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "w-9 h-9 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-[11px] font-bold shrink-0",
                companyColor(deal.company)
              ),
              children: companyInitials(deal.company)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate leading-tight", children: deal.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: deal.company })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grip, { className: "w-3.5 h-3.5 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-smooth shrink-0 mt-0.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-foreground", children: fmt(deal.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: cn(
                "text-[11px] font-semibold px-1.5 py-0.5 rounded-full",
                probColor(deal.probability)
              ),
              children: [
                deal.probability,
                "%"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-muted rounded-full mb-2.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full transition-smooth",
            style: {
              width: `${STAGE_PROGRESS[deal.stage]}%`,
              background: cfg.accent
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-muted-foreground mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-1",
                overdue && "text-red-500 dark:text-red-400"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: overdue ? "Overdue" : deal.expectedCloseDate.slice(5) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[80px]", children: deal.owner.split(" ")[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground truncate", children: deal.contact }),
          deal.tasks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: cn(
                "text-[10px] font-medium px-1.5 py-0.5 rounded-full",
                completedTasks === deal.tasks.length ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-muted text-muted-foreground"
              ),
              children: [
                completedTasks,
                "/",
                deal.tasks.length
              ]
            }
          )
        ] })
      ]
    }
  );
}
function KanbanColumn({
  stage,
  deals,
  onDragStart,
  onDrop,
  onDealClick
}) {
  const [isOver, setIsOver] = reactExports.useState(false);
  const cfg = STAGE_CONFIG[stage];
  const total = deals.reduce((s, d) => s + d.value, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col min-w-[260px] w-[260px] shrink-0",
      onDragOver: (e) => {
        e.preventDefault();
        setIsOver(true);
      },
      onDragLeave: () => setIsOver(false),
      onDrop: () => {
        setIsOver(false);
        onDrop(stage);
      },
      "data-ocid": `pipeline.column.${stage.toLowerCase()}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex items-center justify-between px-3 py-2.5 rounded-xl border mb-2",
              cfg.bg,
              cfg.border
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("w-2.5 h-2.5 rounded-full", cfg.dot) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-xs font-bold", cfg.color), children: stage }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center border",
                      cfg.bg,
                      cfg.color,
                      cfg.border
                    ),
                    children: deals.length
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-muted-foreground", children: fmt(total) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex-1 rounded-xl p-1.5 min-h-[120px] transition-smooth space-y-2",
              isOver && "bg-primary/5 ring-2 ring-primary/30 ring-dashed"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: deals.map((deal, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                DealCard,
                {
                  deal,
                  index: i,
                  onDragStart,
                  onClick: onDealClick
                },
                deal.id
              )) }),
              deals.length === 0 && !isOver && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-muted-foreground/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg border-2 border-dashed border-muted-foreground/20 mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", children: "Drop here" })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function PipelineSummaryBar({ deals }) {
  const totals = STAGES.map((s) => ({
    stage: s,
    value: deals.filter((d) => d.stage === s).reduce((sum, d) => sum + d.value, 0),
    count: deals.filter((d) => d.stage === s).length
  }));
  const grandTotal = totals.reduce((s, t) => s + t.value, 0) || 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border rounded-xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-3 mb-2 overflow-x-auto pb-1", children: totals.map(({ stage, value, count }) => {
      const cfg = STAGE_CONFIG[stage];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[60px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-[10px] font-semibold truncate",
                cfg.color
              ),
              children: stage
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground ml-1", children: count })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full",
            style: {
              width: `${value / grandTotal * 100}%`,
              background: cfg.accent
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5 font-medium", children: fmt(value) })
      ] }, stage);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 flex rounded-full overflow-hidden gap-px", children: totals.map(({ stage, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          flex: value || 0,
          background: STAGE_CONFIG[stage].accent,
          minWidth: value ? 2 : 0
        }
      },
      stage
    )) })
  ] });
}
function ForecastView({ deals }) {
  const months = ["May", "Jun", "Jul", "Aug", "Sep"];
  const activeDeals = deals.filter(
    (d) => d.stage !== "Won" && d.stage !== "Lost"
  );
  const rows = activeDeals.map((d) => {
    const closeDate = new Date(d.expectedCloseDate);
    const month = closeDate.toLocaleString("en-US", { month: "short" });
    const weighted = Math.round(d.value * d.probability / 100);
    return { ...d, month, weighted };
  });
  const monthTotals = months.map((m) => ({
    month: m,
    raw: rows.filter((r) => r.month === m).reduce((s, r) => s + r.value, 0),
    weighted: rows.filter((r) => r.month === m).reduce((s, r) => s + r.weighted, 0)
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3", children: monthTotals.map(({ month, raw, weighted }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-1", children: [
            month,
            " 2026"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-foreground", children: fmt(weighted) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Weighted forecast" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1 bg-muted rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-primary rounded-full",
              style: {
                width: raw ? `${Math.min(weighted / raw * 100, 100)}%` : "0%"
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground/70 mt-0.5", children: [
            fmt(raw),
            " pipeline"
          ] })
        ]
      },
      month
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Revenue Forecast by Deal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          rows.length,
          " deals"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-muted/30", children: [
          "Deal",
          "Company",
          "Stage",
          "Close Date",
          "Value",
          "Probability",
          "Weighted"
        ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: cn(
              "border-b border-border/50 hover:bg-muted/20 transition-smooth",
              i % 2 === 1 && "bg-muted/10"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-medium text-foreground text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate block max-w-[160px]", children: row.title }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground whitespace-nowrap", children: row.company }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: row.stage }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  className: cn(
                    "px-4 py-2.5 text-xs whitespace-nowrap",
                    isOverdue(row.expectedCloseDate) ? "text-red-500" : "text-muted-foreground"
                  ),
                  children: row.expectedCloseDate
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-semibold text-foreground text-right whitespace-nowrap", children: fmtFull(row.value) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: cn(
                    "text-[11px] font-semibold px-1.5 py-0.5 rounded-full",
                    probColor(row.probability)
                  ),
                  children: [
                    row.probability,
                    "%"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right whitespace-nowrap", children: fmtFull(row.weighted) })
            ]
          },
          row.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/30 border-t-2 border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              colSpan: 4,
              className: "px-4 py-2.5 text-xs font-bold text-foreground",
              children: "Total Pipeline"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-bold text-foreground text-right", children: fmtFull(rows.reduce((s, r) => s + r.value, 0)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right", children: fmtFull(rows.reduce((s, r) => s + r.weighted, 0)) })
        ] }) })
      ] }) })
    ] })
  ] });
}
function ListView({
  deals,
  onDealClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-muted/30", children: [
      "Deal",
      "Company",
      "Contact",
      "Stage",
      "Value",
      "Probability",
      "Close Date",
      "Owner"
    ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "th",
      {
        className: "px-4 py-3 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap",
        children: h
      },
      h
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: deals.map((deal, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "tr",
      {
        onClick: () => onDealClick(deal),
        onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && onDealClick(deal),
        tabIndex: 0,
        className: cn(
          "border-b border-border/50 hover:bg-muted/20 cursor-pointer transition-smooth",
          i % 2 === 1 && "bg-muted/10"
        ),
        "data-ocid": `deal.list.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "w-7 h-7 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-[10px] font-bold shrink-0",
                  companyColor(deal.company)
                ),
                children: companyInitials(deal.company)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-xs truncate max-w-[140px]", children: deal.title })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground whitespace-nowrap", children: deal.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground whitespace-nowrap", children: deal.contact }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: deal.stage }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs font-semibold text-foreground whitespace-nowrap", children: fmtFull(deal.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: cn(
                "text-[11px] font-semibold px-1.5 py-0.5 rounded-full",
                probColor(deal.probability)
              ),
              children: [
                deal.probability,
                "%"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              className: cn(
                "px-4 py-3 text-xs whitespace-nowrap",
                isOverdue(deal.expectedCloseDate) ? "text-red-500" : "text-muted-foreground"
              ),
              children: deal.expectedCloseDate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: deal.owner, size: "xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: deal.owner.split(" ")[0] })
          ] }) })
        ]
      },
      deal.id
    )) })
  ] }) }) });
}
function AddDealModal({ open, onClose }) {
  const addDeal = useCrmStore((s) => s.addDeal);
  const [form, setForm] = reactExports.useState({
    title: "",
    company: "",
    contact: "",
    value: "",
    probability: "50",
    expectedCloseDate: "",
    stage: "Prospect",
    owner: "Alex Rivera",
    notes: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.company || !form.value) {
      ue.error("Please fill in required fields");
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
      attachments: []
    });
    ue.success("Deal created successfully");
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
      notes: ""
    });
  };
  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", "data-ocid": "deal.add_modal.dialog", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-primary" }) }),
      "Add New Deal"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "add-title", children: "Deal Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "add-title",
              value: form.title,
              onChange: (e) => set("title", e.target.value),
              placeholder: "Enterprise Platform Deal",
              "data-ocid": "deal.add.title.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "add-company", children: "Company *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "add-company",
              value: form.company,
              onChange: (e) => set("company", e.target.value),
              placeholder: "Company name",
              "data-ocid": "deal.add.company.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "add-contact", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "add-contact",
              value: form.contact,
              onChange: (e) => set("contact", e.target.value),
              placeholder: "Contact name",
              "data-ocid": "deal.add.contact.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "add-value", children: "Deal Value *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "add-value",
              type: "number",
              value: form.value,
              onChange: (e) => set("value", e.target.value),
              placeholder: "50000",
              "data-ocid": "deal.add.value.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "add-prob", children: "Probability %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "add-prob",
              type: "number",
              min: "0",
              max: "100",
              value: form.probability,
              onChange: (e) => set("probability", e.target.value),
              "data-ocid": "deal.add.probability.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Stage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.stage, onValueChange: (v) => set("stage", v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "deal.add.stage.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Owner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.owner, onValueChange: (v) => set("owner", v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "deal.add.owner.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: OWNERS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, children: o }, o)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "add-date", children: "Expected Close" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "add-date",
              type: "date",
              value: form.expectedCloseDate,
              onChange: (e) => set("expectedCloseDate", e.target.value),
              "data-ocid": "deal.add.close_date.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "add-notes", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "add-notes",
              rows: 2,
              value: form.notes,
              onChange: (e) => set("notes", e.target.value),
              placeholder: "Add any notes...",
              "data-ocid": "deal.add.notes.textarea"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: onClose,
            "data-ocid": "deal.add_modal.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", "data-ocid": "deal.add_modal.submit_button", children: "Create Deal" })
      ] })
    ] })
  ] }) });
}
function LostReasonModal({
  dealId,
  onConfirm,
  onCancel
}) {
  const [reason, setReason] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!dealId, onOpenChange: onCancel, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", "data-ocid": "deal.lost_reason.dialog", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-red-600 dark:text-red-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5" }),
      "Mark as Lost"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select a reason for losing this deal:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: LOST_REASONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setReason(r),
          className: cn(
            "w-full text-left px-3 py-2 rounded-lg border text-sm transition-smooth",
            reason === r ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300" : "border-border hover:border-muted-foreground/40 text-foreground"
          ),
          "data-ocid": `deal.lost_reason.${r.toLowerCase().replace(/\s+/g, "_")}`,
          children: r
        },
        r
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: onCancel,
            "data-ocid": "deal.lost_reason.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "destructive",
            disabled: !reason,
            onClick: () => dealId && onConfirm(dealId, reason),
            "data-ocid": "deal.lost_reason.confirm_button",
            children: "Mark as Lost"
          }
        )
      ] })
    ] })
  ] }) });
}
const MOCK_ACTIVITY = [
  {
    id: "a1",
    type: "stage",
    text: "Deal moved to Negotiation",
    user: "Alex Rivera",
    time: "Apr 20, 2026"
  },
  {
    id: "a2",
    type: "note",
    text: "Added pricing notes",
    user: "Alex Rivera",
    time: "Apr 18, 2026"
  },
  {
    id: "a3",
    type: "email",
    text: "Sent revised proposal v2",
    user: "Alex Rivera",
    time: "Apr 17, 2026"
  },
  {
    id: "a4",
    type: "call",
    text: "Discovery call completed (45 min)",
    user: "Maria Chen",
    time: "Apr 14, 2026"
  },
  {
    id: "a5",
    type: "stage",
    text: "Deal created in Prospect",
    user: "Maria Chen",
    time: "Apr 10, 2026"
  }
];
const MOCK_DOCS = [
  { id: "doc1", name: "proposal-v2.pdf", type: "pdf", size: "1.2 MB" },
  { id: "doc2", name: "pricing-matrix.xlsx", type: "excel", size: "340 KB" },
  { id: "doc3", name: "requirements.docx", type: "word", size: "88 KB" }
];
function DealDetailModal({ deal, onClose }) {
  const updateDeal = useCrmStore((s) => s.updateDeal);
  const moveDeal = useCrmStore((s) => s.moveDeal);
  const [newNote, setNewNote] = reactExports.useState("");
  const [newTask, setNewTask] = reactExports.useState("");
  const [lostModalDealId, setLostModalDealId] = reactExports.useState(null);
  const [localTasks, setLocalTasks] = reactExports.useState((deal == null ? void 0 : deal.tasks) ?? []);
  const prevDealIdRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    if (deal && deal.id !== prevDealIdRef.current) {
      prevDealIdRef.current = deal.id;
      setLocalTasks(deal.tasks);
    }
  });
  if (!deal) return null;
  const cfg = STAGE_CONFIG[deal.stage];
  const overdue = isOverdue(deal.expectedCloseDate);
  const handleToggleTask = (taskId) => {
    const updated = localTasks.map(
      (t) => t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    setLocalTasks(updated);
    updateDeal(deal.id, { tasks: updated });
  };
  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: `t${Date.now()}`,
      title: newTask.trim(),
      completed: false
    };
    const updated = [...localTasks, task];
    setLocalTasks(updated);
    updateDeal(deal.id, { tasks: updated });
    setNewTask("");
  };
  const handleDeleteTask = (taskId) => {
    const updated = localTasks.filter((t) => t.id !== taskId);
    setLocalTasks(updated);
    updateDeal(deal.id, { tasks: updated });
  };
  const handleSaveNote = () => {
    if (!newNote.trim()) return;
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    const prefix = deal.notes ? `${deal.notes}

` : "";
    updateDeal(deal.id, {
      notes: `${prefix}[${timestamp}]: ${newNote.trim()}`
    });
    setNewNote("");
    ue.success("Note saved");
  };
  const handleMarkWon = () => {
    moveDeal(deal.id, "Won");
    ue.success(`${deal.title} marked as Won! 🎉`);
    onClose();
  };
  const handleLostConfirm = (dealId) => {
    moveDeal(dealId, "Lost");
    ue.error("Deal marked as Lost");
    setLostModalDealId(null);
    onClose();
  };
  const completedCount = localTasks.filter((t) => t.completed).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!deal, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden",
        "data-ocid": "deal.detail.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 px-6 pt-6 pb-4 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm shrink-0",
                    companyColor(deal.company)
                  ),
                  children: companyInitials(deal.company)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-foreground leading-tight truncate", children: deal.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                  deal.company,
                  " · ",
                  deal.contact
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-foreground", children: fmtFull(deal.value) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: deal.stage })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 mb-4", children: [
              {
                icon: Target,
                label: "Win Probability",
                value: `${deal.probability}%`,
                cls: probColor(deal.probability)
              },
              {
                icon: Calendar,
                label: "Close Date",
                value: deal.expectedCloseDate,
                cls: overdue ? "text-red-500" : "text-foreground"
              },
              {
                icon: User,
                label: "Owner",
                value: deal.owner.split(" ")[0],
                cls: "text-foreground"
              },
              {
                icon: Check,
                label: "Tasks Done",
                value: `${completedCount}/${localTasks.length}`,
                cls: "text-foreground"
              }
            ].map(({ icon: Icon, label, value, cls }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg px-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground truncate", children: label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn("text-xs font-semibold truncate block", cls),
                  children: value
                }
              )
            ] }, label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "Pipeline Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "text-[11px] font-semibold",
                    style: { color: cfg.accent },
                    children: [
                      STAGE_PROGRESS[deal.stage],
                      "%"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full transition-smooth",
                  style: {
                    width: `${STAGE_PROGRESS[deal.stage]}%`,
                    background: cfg.accent
                  }
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col min-h-0 px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Tabs,
            {
              defaultValue: "overview",
              className: "flex-1 flex flex-col min-h-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-5 shrink-0 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TabsTrigger,
                    {
                      value: "overview",
                      "data-ocid": "deal.detail.overview.tab",
                      children: "Overview"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "notes", "data-ocid": "deal.detail.notes.tab", children: "Notes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "tasks", "data-ocid": "deal.detail.tasks.tab", children: [
                    "Tasks",
                    localTasks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 opacity-60", children: [
                      "(",
                      localTasks.length,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TabsTrigger,
                    {
                      value: "documents",
                      "data-ocid": "deal.detail.documents.tab",
                      children: "Docs"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TabsTrigger,
                    {
                      value: "activity",
                      "data-ocid": "deal.detail.activity.tab",
                      children: "Activity"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto min-h-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "mt-0 space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                      { label: "Deal Title", value: deal.title },
                      { label: "Company", value: deal.company },
                      { label: "Contact Name", value: deal.contact },
                      { label: "Deal Value", value: fmtFull(deal.value) },
                      { label: "Probability", value: `${deal.probability}%` },
                      {
                        label: "Expected Close",
                        value: deal.expectedCloseDate
                      },
                      { label: "Sales Owner", value: deal.owner },
                      { label: "Current Stage", value: deal.stage }
                    ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-semibold uppercase tracking-wide", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: value })
                    ] }, label)) }),
                    deal.attachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-semibold uppercase tracking-wide mb-2", children: "Attachments" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: deal.attachments.map((att) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "w-3 h-3" }),
                            att
                          ]
                        },
                        att
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "notes", className: "mt-0 space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 rounded-lg p-3 text-sm text-foreground whitespace-pre-wrap leading-relaxed min-h-[80px]", children: deal.notes || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground italic text-sm", children: "No notes yet. Add your first note below." }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Add Note" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          rows: 3,
                          value: newNote,
                          onChange: (e) => setNewNote(e.target.value),
                          placeholder: "Type a note about this deal...",
                          "data-ocid": "deal.detail.notes.textarea"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          onClick: handleSaveNote,
                          disabled: !newNote.trim(),
                          "data-ocid": "deal.detail.notes.save_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-3.5 h-3.5 mr-1.5" }),
                            "Save Note"
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "tasks", className: "mt-0 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                      localTasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-2.5 group p-2 rounded-lg hover:bg-muted/40 transition-smooth",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Checkbox,
                              {
                                checked: task.completed,
                                onCheckedChange: () => handleToggleTask(task.id),
                                "data-ocid": `deal.detail.task.checkbox.${task.id}`
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: cn(
                                  "text-sm flex-1",
                                  task.completed && "line-through text-muted-foreground"
                                ),
                                children: task.title
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => handleDeleteTask(task.id),
                                className: "opacity-0 group-hover:opacity-100 transition-smooth text-muted-foreground/60 hover:text-red-500",
                                "data-ocid": `deal.detail.task.delete_button.${task.id}`,
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
                              }
                            )
                          ]
                        },
                        task.id
                      )),
                      localTasks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm text-muted-foreground italic text-center py-6",
                          "data-ocid": "deal.detail.tasks.empty_state",
                          children: "No tasks yet. Add one below."
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          value: newTask,
                          onChange: (e) => setNewTask(e.target.value),
                          placeholder: "Add a task...",
                          onKeyDown: (e) => e.key === "Enter" && handleAddTask(),
                          "data-ocid": "deal.detail.task.input"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          onClick: handleAddTask,
                          disabled: !newTask.trim(),
                          "data-ocid": "deal.detail.task.add_button",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "documents", className: "mt-0 space-y-2", children: [
                    [
                      ...MOCK_DOCS,
                      ...deal.attachments.filter((a) => !MOCK_DOCS.find((d) => d.name === a)).map((name, i) => ({
                        id: `att-${i}`,
                        name,
                        type: "pdf",
                        size: "—"
                      }))
                    ].map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer group",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: cn(
                                "w-9 h-9 rounded-lg flex items-center justify-center",
                                doc.type === "pdf" ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" : doc.type === "excel" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                              ),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: doc.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: doc.size })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-smooth" })
                        ]
                      },
                      doc.id
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        className: "w-full mt-2",
                        "data-ocid": "deal.detail.documents.upload_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3.5 h-3.5 mr-1.5" }),
                          "Upload Document"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "activity", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: MOCK_ACTIVITY.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pb-4 relative", children: [
                    i < MOCK_ACTIVITY.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[15px] top-8 bottom-0 w-px bg-border" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 z-10",
                          item.type === "stage" ? "bg-primary" : item.type === "note" ? "bg-amber-500" : item.type === "email" ? "bg-indigo-500" : "bg-emerald-500"
                        ),
                        children: [
                          item.type === "stage" && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" }),
                          item.type === "note" && /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-3.5 h-3.5" }),
                          item.type === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
                          item.type === "call" && /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: item.text }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                        item.user,
                        " · ",
                        item.time
                      ] })
                    ] })
                  ] }, item.id)) }) })
                ] })
              ]
            }
          ) }),
          deal.stage !== "Won" && deal.stage !== "Lost" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex gap-2 px-6 py-4 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "flex-1 text-red-600 border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-900/20 dark:text-red-400",
                onClick: () => setLostModalDealId(deal.id),
                "data-ocid": "deal.detail.mark_lost_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 mr-1.5" }),
                  "Mark as Lost"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "flex-1 bg-emerald-600 hover:bg-emerald-700 text-white",
                onClick: handleMarkWon,
                "data-ocid": "deal.detail.mark_won_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 mr-1.5" }),
                  "Mark as Won"
                ]
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LostReasonModal,
      {
        dealId: lostModalDealId,
        onConfirm: handleLostConfirm,
        onCancel: () => setLostModalDealId(null)
      }
    )
  ] });
}
function DealsPage() {
  const deals = useCrmStore((s) => s.deals);
  const moveDeal = useCrmStore((s) => s.moveDeal);
  const [view, setView] = reactExports.useState("kanban");
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [selectedDeal, setSelectedDeal] = reactExports.useState(null);
  const [lostModalDealId, setLostModalDealId] = reactExports.useState(null);
  const draggingDeal = reactExports.useRef(null);
  const totalValue = deals.filter((d) => d.stage !== "Lost").reduce((s, d) => s + d.value, 0);
  const activeCount = deals.filter((d) => d.stage !== "Lost").length;
  const weightedValue = deals.filter((d) => d.stage !== "Won" && d.stage !== "Lost").reduce((s, d) => s + d.value * d.probability / 100, 0);
  const dealsByStage = STAGES.reduce(
    (acc, stage) => {
      acc[stage] = deals.filter((d) => d.stage === stage);
      return acc;
    },
    {}
  );
  const handleDragStart = reactExports.useCallback((deal) => {
    draggingDeal.current = deal;
  }, []);
  const handleDrop = reactExports.useCallback(
    (targetStage) => {
      const deal = draggingDeal.current;
      draggingDeal.current = null;
      if (!deal || deal.stage === targetStage) return;
      if (targetStage === "Lost") {
        setLostModalDealId(deal.id);
      } else {
        moveDeal(deal.id, targetStage);
        ue.success(`"${deal.title}" moved to ${targetStage}`);
      }
    },
    [moveDeal]
  );
  const handleLostConfirm = reactExports.useCallback(
    (dealId) => {
      moveDeal(dealId, "Lost");
      ue.error("Deal marked as Lost");
      setLostModalDealId(null);
    },
    [moveDeal]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", "data-ocid": "deals.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 px-6 pt-6 pb-4 bg-card border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-foreground", children: "Sales Pipeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: activeCount }),
            " ",
            "active deals ·",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: fmtFull(totalValue) }),
            " ",
            "pipeline ·",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-emerald-600 dark:text-emerald-400", children: fmtFull(weightedValue) }),
            " ",
            "weighted"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 bg-muted p-0.5 rounded-lg border border-border", children: [
            {
              mode: "kanban",
              icon: LayoutList,
              label: "Board"
            },
            {
              mode: "list",
              icon: Ellipsis,
              label: "List"
            },
            {
              mode: "forecast",
              icon: ChartColumn,
              label: "Forecast"
            }
          ].map(({ mode, icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setView(mode),
              className: cn(
                "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-smooth",
                view === mode ? "bg-background text-foreground shadow-subtle" : "text-muted-foreground hover:text-foreground"
              ),
              "data-ocid": `deals.view.${mode}.toggle`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" }),
                label
              ]
            },
            mode
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", "data-ocid": "deals.filter_button", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3.5 h-3.5 mr-1.5" }),
            "Filter"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              onClick: () => setAddOpen(true),
              "data-ocid": "deals.add_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1.5" }),
                "Add Deal"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineSummaryBar, { deals })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-hidden bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      view === "kanban" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.15 },
          className: "h-full overflow-x-auto overflow-y-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-3 p-6 h-full",
              style: { minWidth: "max-content" },
              children: STAGES.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                KanbanColumn,
                {
                  stage,
                  deals: dealsByStage[stage],
                  onDragStart: handleDragStart,
                  onDrop: handleDrop,
                  onDealClick: setSelectedDeal
                },
                stage
              ))
            }
          )
        },
        "kanban"
      ),
      view === "list" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "p-6 overflow-y-auto h-full",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListView, { deals, onDealClick: setSelectedDeal })
        },
        "list"
      ),
      view === "forecast" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "p-6 overflow-y-auto h-full",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForecastView, { deals })
        },
        "forecast"
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddDealModal, { open: addOpen, onClose: () => setAddOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DealDetailModal,
      {
        deal: selectedDeal,
        onClose: () => setSelectedDeal(null)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LostReasonModal,
      {
        dealId: lostModalDealId,
        onConfirm: handleLostConfirm,
        onCancel: () => setLostModalDealId(null)
      }
    )
  ] });
}
export {
  DealsPage as default
};
