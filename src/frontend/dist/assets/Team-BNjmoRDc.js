import { c as createLucideIcon, j as jsxRuntimeExports, x as cn, r as reactExports, z as mockTeamMembers, D as getTeamMetrics, T as Target, Z as Zap, d as Badge, m as motion, b as UserAvatar, M as Mail, k as Users } from "./index-BlMbxdLA.js";
import { K as KpiCard } from "./KpiCard-Bzt9tS9b.js";
import { P as PageHeader } from "./PageHeader-DSb5LYEm.js";
import { T as TrendingUp, C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-DoSBglZU.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-CmxgkzUi.js";
import { T as Trophy, A as Award } from "./trophy-DIk_fvfg.js";
import { P as Phone } from "./phone-CcwBP2xL.js";
import { D as Download } from "./download-Duj6N_G9.js";
import { U as UserPlus } from "./user-plus-BMtmkSyA.js";
import { S as Star } from "./star-CWBygbFO.js";
import { L as LayoutGrid } from "./layout-grid-1msGVLmQ.js";
import { L as List } from "./list-BEMR0IU3.js";
import { a1 as ResponsiveContainer, a8 as BarChart, a2 as CartesianGrid, a3 as XAxis, a4 as YAxis, a5 as Tooltip, a6 as Legend, a9 as Bar, a7 as Line } from "./BarChart-CaYUu0ud.js";
import { L as LineChart } from "./LineChart-2QOuxXzE.js";
import "./trending-down--9WBe-Na.js";
import "./button-DsZ2YpJM.js";
import "./arrow-left-Dz494sRC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
];
const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", __iconNode);
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
const INCENTIVE_BADGES = [
  {
    key: "top-closer",
    label: "Top Closer",
    icon: Trophy,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    selector: (m) => m.reduce(
      (a, b) => a.dealsClosedThisMonth > b.dealsClosedThisMonth ? a : b
    )
  },
  {
    key: "most-calls",
    label: "Most Calls",
    icon: Phone,
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/20",
    selector: (m) => m.reduce((a, b) => a.callsMade > b.callsMade ? a : b)
  },
  {
    key: "best-conversion",
    label: "Best Conversion",
    icon: TrendingUp,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    selector: (m) => m.reduce((a, b) => a.conversionRate > b.conversionRate ? a : b)
  },
  {
    key: "rising-star",
    label: "Rising Star",
    icon: Star,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    selector: (m) => m.find((x) => x.name === "Aisha Patel") ?? m[0]
  }
];
function targetColor(pct) {
  if (pct >= 80) return "bg-emerald-500";
  if (pct >= 50) return "bg-amber-500";
  return "bg-destructive";
}
function targetTextColor(pct) {
  if (pct >= 80) return "text-emerald-600 dark:text-emerald-400";
  if (pct >= 50) return "text-amber-600 dark:text-amber-400";
  return "text-destructive";
}
function memberTrendData(member) {
  const base = Math.round(member.totalRevenue / 6);
  return [
    { month: "Nov", revenue: Math.round(base * 0.7) },
    { month: "Dec", revenue: Math.round(base * 0.9) },
    { month: "Jan", revenue: Math.round(base * 0.8) },
    { month: "Feb", revenue: Math.round(base * 1.1) },
    { month: "Mar", revenue: Math.round(base * 1.3) },
    { month: "Apr", revenue: Math.round(base * 1) }
  ];
}
const MEMBER_DEALS = {
  tm1: [
    "TechNova Enterprise Suite",
    "Summit CRM Rollout",
    "GreenEnergy ESG",
    "Pinpoint Analytics Pro"
  ],
  tm2: [
    "Meridian Integration",
    "Nordic Capital Platform",
    "ClearStream Media Hub",
    "HealthFirst HIPAA"
  ],
  tm3: [
    "BrightPath License",
    "Apex Logistics Suite",
    "Harbor Insurance Platform"
  ],
  tm4: [
    "FutureLabs Platform",
    "Gulf Tech Enterprise",
    "Paris Consulting Suite"
  ],
  tm5: [
    "GreenEnergy ESG Toolkit",
    "Pinpoint Analytics Pro",
    "Summit CRM Rollout"
  ],
  tm6: [
    "Vertex Software Growth",
    "Meridian Integration",
    "Nordic Capital Platform",
    "ClearStream Media",
    "Apex Logistics"
  ],
  tm7: [],
  tm8: ["BrightPath License", "Harbor Insurance Platform"]
};
const RANK_STYLES = [
  {
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-300/60 dark:border-amber-700/40",
    text: "text-amber-600 dark:text-amber-400"
  },
  {
    bg: "bg-slate-50 dark:bg-slate-900/20",
    border: "border-border/60",
    text: "text-slate-500 dark:text-slate-400"
  },
  {
    bg: "bg-orange-50 dark:bg-orange-950/20",
    border: "border-orange-300/60 dark:border-orange-700/40",
    text: "text-orange-600 dark:text-orange-400"
  }
];
function MemberProfileModal({
  member,
  rank,
  open,
  onClose
}) {
  const trendData = memberTrendData(member);
  const targetPct = Math.min(
    100,
    Math.round(member.totalRevenue / member.monthlyTarget * 100)
  );
  const deals = MEMBER_DEALS[member.id] ?? [];
  const activities = [
    {
      action: "Closed deal",
      detail: deals[0] ?? "No recent deal",
      time: "2 days ago"
    },
    {
      action: "Discovery call",
      detail: "40-min call completed",
      time: "3 days ago"
    },
    {
      action: "Proposal sent",
      detail: "Q2 enterprise proposal",
      time: "5 days ago"
    },
    {
      action: "Meeting held",
      detail: "Onboarding session",
      time: "1 week ago"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-2xl max-h-[90vh] overflow-y-auto",
      "data-ocid": "team.profile.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "sr-only", children: "Member Profile" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                UserAvatar,
                {
                  name: member.name,
                  size: "lg",
                  online: true,
                  className: "w-16 h-16 text-lg"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-2 text-lg", children: rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : null })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: member.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                  "#",
                  rank
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: member.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mt-2 text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 11 }),
                member.email
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: `text-xs ${targetPct >= 80 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"}`,
                variant: "secondary",
                children: [
                  targetPct,
                  "% Target"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
            {
              label: "Revenue",
              value: `$${(member.totalRevenue / 1e3).toFixed(0)}K`,
              icon: TrendingUp,
              color: "text-primary"
            },
            {
              label: "Deals Closed",
              value: member.dealsClosedThisMonth,
              icon: Trophy,
              color: "text-amber-500"
            },
            {
              label: "Calls Made",
              value: member.callsMade,
              icon: Phone,
              color: "text-emerald-600 dark:text-emerald-400"
            },
            {
              label: "Meetings",
              value: member.meetingsHeld,
              icon: Users,
              color: "text-violet-600 dark:text-violet-400"
            },
            {
              label: "Conv. Rate",
              value: `${member.conversionRate}%`,
              icon: Target,
              color: "text-accent"
            },
            {
              label: "Commission",
              value: `$${member.commission.toLocaleString()}`,
              icon: Award,
              color: "text-emerald-600 dark:text-emerald-400"
            }
          ].map(({ label, value, icon: Icon, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 border border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13, className: color }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-foreground leading-none", children: value })
          ] }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Monthly Target Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `font-semibold font-mono ${targetTextColor(targetPct)}`,
                  children: [
                    targetPct,
                    "%"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                animate: { width: `${targetPct}%` },
                transition: { duration: 0.8, ease: "easeOut" },
                className: `h-full rounded-full ${targetColor(targetPct)}`
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "$",
                (member.totalRevenue / 1e3).toFixed(0),
                "K achieved"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "$",
                (member.monthlyTarget / 1e3).toFixed(0),
                "K target"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-3", children: "6-Month Revenue Trend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              LineChart,
              {
                data: trendData,
                margin: { top: 4, right: 8, bottom: 0, left: -20 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      stroke: "var(--border)",
                      strokeOpacity: 0.5,
                      vertical: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    XAxis,
                    {
                      dataKey: "month",
                      tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                      tickLine: false,
                      axisLine: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                      tickLine: false,
                      axisLine: false,
                      tickFormatter: (v) => `$${v / 1e3}K`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      contentStyle: {
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "0.75rem",
                        fontSize: 12
                      },
                      formatter: (v) => [
                        `$${(v / 1e3).toFixed(0)}K`,
                        "Revenue"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Line,
                    {
                      type: "monotone",
                      dataKey: "revenue",
                      stroke: "oklch(0.5 0.12 243)",
                      strokeWidth: 2,
                      dot: { r: 3 }
                    }
                  )
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border/60 bg-muted/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-3", children: "Commission Breakdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Base commission (5%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold", children: [
                  "$",
                  Math.round(member.totalRevenue * 0.035).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Performance bonus" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold", children: [
                  "$",
                  Math.round(member.commission * 0.3).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border/60 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Total Earned" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-emerald-600 dark:text-emerald-400", children: [
                  "$",
                  member.commission.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-3", children: "Recent Activity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: activities.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" }),
                i < activities.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px flex-1 bg-border/60 mt-1" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-3 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: a.action }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: a.detail }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: a.time })
              ] })
            ] }, `${member.id}-activity-${i}`)) })
          ] }),
          deals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-3", children: "Assigned Deals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: deals.map((deal) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 p-2.5 rounded-lg bg-muted/50 border border-border/40",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: deal })
                ]
              },
              deal
            )) })
          ] })
        ] })
      ]
    }
  ) });
}
function CardsView({
  sorted,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: sorted.map((member, i) => {
    const targetPct = Math.min(
      100,
      Math.round(member.totalRevenue / member.monthlyTarget * 100)
    );
    const rankStyle = RANK_STYLES[i] ?? {
      border: "border-border/60",
      text: "text-muted-foreground"
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.06 },
        whileHover: { y: -3, scale: 1.01 },
        "data-ocid": `team.member.${i + 1}.card`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: `p-4 border cursor-pointer transition-all hover:shadow-elevation group ${rankStyle.border}`,
            onClick: () => onSelect(member, i + 1),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: member.name, size: "md", online: true }),
                  i === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-1.5 text-base", children: "🥇" }),
                  i === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-1.5 text-base", children: "🥈" }),
                  i === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-1.5 text-base", children: "🥉" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: member.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: member.role })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: `text-[10px] shrink-0 font-mono ${rankStyle.text}`,
                    children: [
                      "#",
                      i + 1
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Monthly Target" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `font-mono font-semibold ${targetTextColor(targetPct)}`,
                      children: [
                        targetPct,
                        "%"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { width: 0 },
                    animate: { width: `${targetPct}%` },
                    transition: { duration: 0.7, delay: i * 0.06 },
                    className: `h-full rounded-full ${targetColor(targetPct)}`
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold text-foreground", children: [
                    "$",
                    (member.totalRevenue / 1e3).toFixed(0),
                    "K"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                    "/ $",
                    (member.monthlyTarget / 1e3).toFixed(0),
                    "K"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 pt-3 border-t border-border/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: member.dealsClosedThisMonth }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Deals" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-x border-border/60", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: member.callsMade }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Calls" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sm text-foreground", children: [
                    member.conversionRate,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Conv." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between pt-2.5 border-t border-border/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 10, className: "text-emerald-500" }),
                  " Commission"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400", children: [
                  "$",
                  member.commission.toLocaleString()
                ] })
              ] })
            ]
          }
        )
      },
      member.id
    );
  }) });
}
function LeaderboardView({
  sorted,
  onSelect
}) {
  var _a;
  const maxRevenue = ((_a = sorted[0]) == null ? void 0 : _a.totalRevenue) ?? 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border/60 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border/60 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 15, className: "text-amber-500" }),
      " Revenue Leaderboard"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: sorted.map((member, i) => {
      const targetPct = Math.min(
        100,
        Math.round(member.totalRevenue / member.monthlyTarget * 100)
      );
      const barPct = Math.round(member.totalRevenue / maxRevenue * 100);
      const rankStyle = RANK_STYLES[i] ?? {
        bg: "",
        border: "",
        text: "text-muted-foreground"
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -12 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.05 },
          onClick: () => onSelect(member, i + 1),
          "data-ocid": `team.leaderboard.${i + 1}.row`,
          className: `flex items-center gap-4 px-5 py-3.5 cursor-pointer hover:bg-muted/40 transition-colors ${i < 3 ? rankStyle.bg : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono shrink-0 ${i < 3 ? `${rankStyle.bg} border ${rankStyle.border} ${rankStyle.text}` : "bg-muted text-muted-foreground"}`,
                children: i + 1
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 w-40 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: member.name, size: "sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: member.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: member.role.split(" ")[0] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                animate: { width: `${barPct}%` },
                transition: { duration: 0.7, delay: i * 0.05 + 0.2 },
                className: `h-full rounded-full ${i < 3 ? "bg-primary" : "bg-muted-foreground/40"}`
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 gap-4 shrink-0 text-right hidden md:grid", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono font-bold text-foreground", children: [
                  "$",
                  (member.totalRevenue / 1e3).toFixed(0),
                  "K"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "Revenue" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono font-bold text-foreground", children: member.dealsClosedThisMonth }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "Deals" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono font-bold text-foreground", children: member.callsMade }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "Calls" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono font-bold text-foreground", children: member.meetingsHeld }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "Meetings" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: `text-sm font-mono font-bold ${targetTextColor(targetPct)}`,
                    children: [
                      member.conversionRate,
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "Conv." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-right hidden lg:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400", children: [
                "$",
                member.commission.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "Commission" })
            ] })
          ]
        },
        member.id
      );
    }) }) })
  ] });
}
function TableView({
  sorted,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border/60 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/30 border-b border-border/60 hover:bg-muted/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold text-muted-foreground w-12", children: "Rank" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold text-muted-foreground", children: "Member" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold text-muted-foreground text-right", children: "Revenue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold text-muted-foreground text-right", children: "Deals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold text-muted-foreground text-right", children: "Calls" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold text-muted-foreground text-right", children: "Meetings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold text-muted-foreground text-right", children: "Conv. Rate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold text-muted-foreground text-right", children: "Target %" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-semibold text-muted-foreground text-right", children: "Commission" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sorted.map((member, i) => {
      const targetPct = Math.min(
        100,
        Math.round(member.totalRevenue / member.monthlyTarget * 100)
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TableRow,
        {
          "data-ocid": `team.table.${i + 1}.row`,
          className: "cursor-pointer hover:bg-muted/40 transition-colors",
          onClick: () => onSelect(member, i + 1),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-bold text-muted-foreground", children: i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: member.name, size: "sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: member.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: member.role })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-right font-mono font-bold text-sm", children: [
              "$",
              (member.totalRevenue / 1e3).toFixed(0),
              "K"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right font-mono text-sm", children: member.dealsClosedThisMonth }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right font-mono text-sm", children: member.callsMade }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right font-mono text-sm", children: member.meetingsHeld }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-right font-mono text-sm", children: [
              member.conversionRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `text-xs font-mono font-bold ${targetTextColor(targetPct)}`,
                children: [
                  targetPct,
                  "%"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-right font-mono text-sm text-emerald-600 dark:text-emerald-400 font-bold", children: [
              "$",
              member.commission.toLocaleString()
            ] })
          ]
        },
        member.id
      );
    }) })
  ] }) }) });
}
function TeamPage() {
  const [view, setView] = reactExports.useState("cards");
  const [selected, setSelected] = reactExports.useState(null);
  const sorted = [...mockTeamMembers].sort(
    (a, b) => b.totalRevenue - a.totalRevenue
  );
  const metrics = getTeamMetrics(mockTeamMembers);
  const commissionChartData = sorted.map((m) => ({
    name: m.name.split(" ")[0],
    earned: m.commission,
    target: Math.round(m.monthlyTarget * 0.05)
  }));
  const kpis = [
    {
      title: "Total Revenue",
      value: `$${(metrics.totalRevenue / 1e3).toFixed(0)}K`,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
      trend: 12,
      trendLabel: "vs last month",
      sparklineData: [185, 241, 198, 267, 312, 289],
      ocid: "team.kpi.revenue"
    },
    {
      title: "Deals Closed",
      value: metrics.totalDeals,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 16 }),
      trend: 8,
      trendLabel: "this month",
      sparklineData: [12, 18, 14, 22, 19, 20],
      ocid: "team.kpi.deals"
    },
    {
      title: "Avg Conversion",
      value: `${metrics.avgConversionRate.toFixed(1)}%`,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 16 }),
      trend: 3,
      trendLabel: "above benchmark",
      sparklineData: [28, 32, 27, 30, 34, 29],
      ocid: "team.kpi.conversion"
    },
    {
      title: "Total Calls",
      value: metrics.totalCalls,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
      trend: -2,
      trendLabel: "vs last week",
      sparklineData: [520, 480, 610, 590, 640, 752],
      ocid: "team.kpi.calls"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-20 md:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Sales Team",
        description: `${mockTeamMembers.length} members · $${(metrics.totalRevenue / 1e3).toFixed(0)}K total revenue`,
        actions: [
          {
            label: "Export Report",
            onClick: () => {
            },
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 }),
            variant: "outline",
            "data-ocid": "team.export_button"
          },
          {
            label: "Invite Member",
            onClick: () => {
            },
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 14 }),
            "data-ocid": "team.invite_button"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: kpis.map((kpi) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      KpiCard,
      {
        title: kpi.title,
        value: kpi.value,
        icon: kpi.icon,
        trend: kpi.trend,
        trendLabel: kpi.trendLabel,
        sparklineData: kpi.sparklineData,
        "data-ocid": kpi.ocid
      },
      kpi.ocid
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 15, className: "text-amber-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground", children: "Incentives Board" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: "This Month" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: INCENTIVE_BADGES.map(
        ({ key, label, icon: Icon, color, bg, border, selector }) => {
          const winner = selector(mockTeamMembers);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.1 },
              whileHover: { scale: 1.03 },
              "data-ocid": `team.incentive.${key}`,
              className: `flex flex-col gap-2 p-3 rounded-xl border ${bg} ${border}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-8 h-8 rounded-lg flex items-center justify-center ${bg} border ${border}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15, className: color })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-[10px] font-semibold uppercase tracking-wide ${color}`,
                      children: label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground leading-tight", children: winner.name.split(" ")[0] })
                ] })
              ]
            },
            key
          );
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center rounded-lg border border-border/60 bg-muted/30 p-1 gap-0.5", children: ["cards", "leaderboard", "table"].map((v) => {
        const Icon = v === "cards" ? LayoutGrid : v === "leaderboard" ? ChartNoAxesColumn : List;
        const label = v.charAt(0).toUpperCase() + v.slice(1);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `team.view.${v}.toggle`,
            onClick: () => setView(v),
            className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view === v ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: label })
            ]
          },
          v
        );
      }) }) }),
      view === "cards" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardsView,
        {
          sorted,
          onSelect: (m, r) => setSelected({ member: m, rank: r })
        }
      ),
      view === "leaderboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        LeaderboardView,
        {
          sorted,
          onSelect: (m, r) => setSelected({ member: m, rank: r })
        }
      ),
      view === "table" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableView,
        {
          sorted,
          onSelect: (m, r) => setSelected({ member: m, rank: r })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 15, className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground", children: "Commission Tracker" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: "April 2026" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: commissionChartData,
          margin: { top: 4, right: 8, bottom: 0, left: -16 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.5,
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "name",
                tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                tickFormatter: (v) => `$${v / 1e3}K`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: {
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.75rem",
                  fontSize: 12
                },
                formatter: (v) => [`$${v.toLocaleString()}`]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 11 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "target",
                fill: "oklch(0.85 0.015 243)",
                radius: [3, 3, 0, 0],
                name: "Target"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "earned",
                fill: "oklch(0.62 0.18 152)",
                radius: [3, 3, 0, 0],
                name: "Earned"
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 15, className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground", children: "Monthly Targets" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: "April 2026" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: sorted.map((member, i) => {
        const targetPct = Math.min(
          100,
          Math.round(member.totalRevenue / member.monthlyTarget * 100)
        );
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -8 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.04 },
            className: "flex items-center gap-4",
            "data-ocid": `team.target.${i + 1}.row`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: member.name, size: "sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground truncate", children: member.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-xs font-mono font-bold ml-2 shrink-0 ${targetTextColor(targetPct)}`,
                      children: [
                        targetPct,
                        "%"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { width: 0 },
                    whileInView: { width: `${targetPct}%` },
                    viewport: { once: true },
                    transition: { duration: 0.7, delay: i * 0.04 + 0.1 },
                    className: `h-full rounded-full ${targetColor(targetPct)}`
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                    "$",
                    (member.totalRevenue / 1e3).toFixed(0),
                    "K achieved"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                    "$",
                    (member.monthlyTarget / 1e3).toFixed(0),
                    "K target"
                  ] })
                ] })
              ] })
            ]
          },
          member.id
        );
      }) })
    ] }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MemberProfileModal,
      {
        member: selected.member,
        rank: selected.rank,
        open: !!selected,
        onClose: () => setSelected(null)
      }
    )
  ] });
}
export {
  TeamPage as default
};
