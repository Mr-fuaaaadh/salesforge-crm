import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as Calendar, z as mockTeamMembers, e as ue, m as motion, w as ChartColumn, k as Users, T as Target, d as Badge, Z as Zap, f as revenueChartData, t as teamPerformanceData, ab as mockDeals } from "./index-BlMbxdLA.js";
import { P as PageHeader } from "./PageHeader-DSb5LYEm.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { T as TrendingUp, C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-DoSBglZU.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CwDuuSgI.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "./tabs-CfPtILIY.js";
import { F as FileText } from "./file-text-CaNw91lo.js";
import { D as Download } from "./download-Duj6N_G9.js";
import { R as RefreshCw } from "./refresh-cw-BxVbcfuL.js";
import { T as TriangleAlert } from "./triangle-alert-DCcAastL.js";
import { T as generateCategoricalChart, a3 as XAxis, a4 as YAxis, aa as formatAxisMap, a1 as ResponsiveContainer, a2 as CartesianGrid, a5 as Tooltip, a6 as Legend, a7 as Line, a8 as BarChart, a9 as Bar, Z as Cell, ab as ReferenceLine } from "./BarChart-CaYUu0ud.js";
import { S as Scatter, Z as ZAxis, C as ComposedChart, c as Area, d as PieChart, e as Pie, A as AreaChart } from "./ComposedChart-Ut0xuUsm.js";
import { T as TrendingDown } from "./trending-down--9WBe-Na.js";
import { L as LineChart } from "./LineChart-2QOuxXzE.js";
import "./arrow-left-Dz494sRC.js";
import "./index-IXOTxK3N.js";
import "./index-TftrN_Lb.js";
import "./check-mNj6eV7j.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode);
var ScatterChart = generateCategoricalChart({
  chartName: "ScatterChart",
  GraphicalChild: Scatter,
  defaultTooltipEventType: "item",
  validateTooltipEventTypes: ["item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }, {
    axisType: "zAxis",
    AxisComp: ZAxis
  }],
  formatAxisMap
});
const C = {
  blue: "oklch(0.5 0.12 243)",
  purple: "oklch(0.52 0.13 270)",
  green: "oklch(0.62 0.18 152)",
  amber: "oklch(0.65 0.18 84)",
  red: "oklch(0.55 0.22 25)",
  muted: "oklch(0.55 0.003 0)",
  blueLight: "oklch(0.65 0.14 243)",
  greenLight: "oklch(0.72 0.17 152)"
};
const PALETTE = [
  C.blue,
  C.purple,
  C.green,
  C.amber,
  C.red,
  C.blueLight,
  C.greenLight
];
const revenueFullYear = [
  {
    month: "Jan",
    revenue: 198e3,
    target: 21e4,
    prevYear: 162e3,
    forecast: null
  },
  {
    month: "Feb",
    revenue: 267e3,
    target: 24e4,
    prevYear: 201e3,
    forecast: null
  },
  {
    month: "Mar",
    revenue: 312e3,
    target: 28e4,
    prevYear: 245e3,
    forecast: null
  },
  {
    month: "Apr",
    revenue: 289e3,
    target: 3e5,
    prevYear: 23e4,
    forecast: null
  },
  {
    month: "May",
    revenue: 334e3,
    target: 31e4,
    prevYear: 261e3,
    forecast: null
  },
  {
    month: "Jun",
    revenue: 358e3,
    target: 32e4,
    prevYear: 285e3,
    forecast: null
  },
  {
    month: "Jul",
    revenue: 322e3,
    target: 315e3,
    prevYear: 27e4,
    forecast: null
  },
  {
    month: "Aug",
    revenue: 376e3,
    target: 34e4,
    prevYear: 292e3,
    forecast: null
  },
  {
    month: "Sep",
    revenue: 341e3,
    target: 35e4,
    prevYear: 278e3,
    forecast: null
  },
  {
    month: "Oct",
    revenue: 398e3,
    target: 37e4,
    prevYear: 312e3,
    forecast: null
  },
  {
    month: "Nov",
    revenue: 185e3,
    target: 2e5,
    prevYear: 145e3,
    forecast: null
  },
  {
    month: "Dec",
    revenue: null,
    target: 4e5,
    prevYear: 365e3,
    forecast: 42e4
  }
];
const winLossData = [
  { month: "Jan", won: 8, lost: 3 },
  { month: "Feb", won: 11, lost: 4 },
  { month: "Mar", won: 14, lost: 2 },
  { month: "Apr", won: 10, lost: 5 },
  { month: "May", won: 13, lost: 3 },
  { month: "Jun", won: 16, lost: 2 }
];
const funnelData = [
  { stage: "Total Leads", count: 480, pct: 100 },
  { stage: "Contacted", count: 312, pct: 65 },
  { stage: "Qualified", count: 204, pct: 43 },
  { stage: "Proposal Sent", count: 118, pct: 25 },
  { stage: "Negotiation", count: 67, pct: 14 },
  { stage: "Won", count: 38, pct: 8 }
];
const sourceConversionData = [
  { source: "Referral", leads: 68, converted: 28, rate: 41, revenue: 142e3 },
  { source: "Website", leads: 124, converted: 41, rate: 33, revenue: 185e3 },
  { source: "LinkedIn", leads: 98, converted: 28, rate: 29, revenue: 112e3 },
  { source: "Events", leads: 54, converted: 14, rate: 26, revenue: 87e3 },
  { source: "Partners", leads: 42, converted: 10, rate: 24, revenue: 93e3 },
  {
    source: "Cold Outreach",
    leads: 94,
    converted: 12,
    rate: 13,
    revenue: 45e3
  }
];
const weeklyLeadData = [
  { week: "W1 Jan", inflow: 18 },
  { week: "W2 Jan", inflow: 24 },
  { week: "W3 Jan", inflow: 31 },
  { week: "W4 Jan", inflow: 22 },
  { week: "W1 Feb", inflow: 38 },
  { week: "W2 Feb", inflow: 29 },
  { week: "W3 Feb", inflow: 44 },
  { week: "W4 Feb", inflow: 35 },
  { week: "W1 Mar", inflow: 52 },
  { week: "W2 Mar", inflow: 41 },
  { week: "W3 Mar", inflow: 47 },
  { week: "W4 Mar", inflow: 39 }
];
const retentionData = [
  { month: "Jul", retention: 88, churn: 12, newCustomers: 14, returning: 62 },
  { month: "Aug", retention: 91, churn: 9, newCustomers: 18, returning: 68 },
  { month: "Sep", retention: 87, churn: 13, newCustomers: 12, returning: 65 },
  { month: "Oct", retention: 93, churn: 7, newCustomers: 22, returning: 74 },
  { month: "Nov", retention: 90, churn: 10, newCustomers: 16, returning: 70 },
  { month: "Dec", retention: 94, churn: 6, newCustomers: 24, returning: 78 }
];
const clvData = [
  { bucket: "$0–25K", count: 28 },
  { bucket: "$25–50K", count: 42 },
  { bucket: "$50–100K", count: 31 },
  { bucket: "$100–200K", count: 14 },
  { bucket: "$200K+", count: 6 }
];
const atRiskCustomers = [
  {
    name: "FutureLabs Corp",
    lastInteraction: "42 days ago",
    ltv: "$33K",
    risk: "High"
  },
  {
    name: "Samba Digital",
    lastInteraction: "38 days ago",
    ltv: "$9.5K",
    risk: "High"
  },
  {
    name: "Paris Consulting",
    lastInteraction: "29 days ago",
    ltv: "$31K",
    risk: "Medium"
  },
  {
    name: "Catalyst Ventures",
    lastInteraction: "22 days ago",
    ltv: "$8K",
    risk: "Medium"
  },
  {
    name: "AfriTech Innovations",
    lastInteraction: "18 days ago",
    ltv: "$12.5K",
    risk: "Low"
  }
];
const lossReasonData = [
  { name: "Price / Budget", value: 34 },
  { name: "Competitor", value: 28 },
  { name: "No Budget", value: 18 },
  { name: "Timing", value: 12 },
  { name: "Feature Gap", value: 8 }
];
const lostByStageData = [
  { stage: "Qualified", lost: 38 },
  { stage: "Proposal", lost: 24 },
  { stage: "Negotiation", lost: 12 },
  { stage: "Contract", lost: 4 }
];
const lostBySalesPersonData = mockTeamMembers.map((m) => ({
  name: m.name.split(" ")[0],
  lost: Math.round(m.callsMade * 0.08),
  deals: m.dealsClosedThisMonth
}));
const topDeals = mockDeals.filter((d) => d.value > 0).sort((a, b) => b.value - a.value).slice(0, 8);
const scatterData = mockTeamMembers.map((m) => ({
  name: m.name.split(" ")[0],
  calls: m.callsMade,
  deals: m.dealsClosedThisMonth * 10,
  revenue: m.totalRevenue / 1e3
}));
const heatmapDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const heatmapWeeks = ["W1", "W2", "W3", "W4"];
const heatmapData = heatmapDays.flatMap(
  (day) => heatmapWeeks.map((week) => ({
    day,
    week,
    count: Math.floor(Math.random() * 20) + 1
  }))
);
const tooltipStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "0.75rem",
  fontSize: 12,
  color: "var(--foreground)"
};
function ChartCard({
  title,
  children,
  className = "",
  actions
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border border-border/60 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3 flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-foreground", children: title }),
      actions
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children })
  ] });
}
function SectionKpi({
  label,
  value,
  sub,
  icon,
  positive,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: "p-4 border border-border/60 hover:shadow-elevation transition-shadow",
      "data-ocid": ocid,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl text-foreground leading-none", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: `text-xs mt-1 font-medium ${positive !== false ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"}`,
            children: sub
          }
        )
      ]
    }
  );
}
function SalesReport(_props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Total Revenue",
          value: "$3.36M",
          sub: "+22% vs last year",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
          ocid: "reports.sales.revenue.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Deals Won",
          value: "145",
          sub: "+18% vs last year",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 16 }),
          ocid: "reports.sales.deals_won.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Avg Deal Size",
          value: "$23.2K",
          sub: "+5% vs last year",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { size: 16 }),
          ocid: "reports.sales.avg_deal.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Avg Sales Cycle",
          value: "42 days",
          sub: "-6 days vs last year",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16 }),
          ocid: "reports.sales.cycle.card"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Revenue vs Target — Full Year", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ComposedChart,
        {
          data: revenueFullYear,
          margin: { top: 4, right: 4, bottom: 0, left: -10 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "revenueGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: C.blue, stopOpacity: 0.3 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: C.blue, stopOpacity: 0 })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "month",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                tickFormatter: (v) => `$${v / 1e3}K`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: tooltipStyle,
                formatter: (v) => v ? [`$${v.toLocaleString()}`] : ["—"]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconSize: 8, wrapperStyle: { fontSize: 11 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Area,
              {
                type: "monotone",
                dataKey: "revenue",
                fill: "url(#revenueGrad)",
                stroke: C.blue,
                strokeWidth: 2.5,
                dot: false,
                name: "Revenue"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                type: "monotone",
                dataKey: "target",
                stroke: C.muted,
                strokeWidth: 1.5,
                strokeDasharray: "4 4",
                dot: false,
                name: "Target"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                type: "monotone",
                dataKey: "forecast",
                stroke: C.amber,
                strokeWidth: 2,
                strokeDasharray: "6 3",
                dot: { r: 4, fill: C.amber },
                name: "Forecast",
                connectNulls: false
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Win / Loss by Month", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: winLossData,
          margin: { top: 4, right: 4, bottom: 0, left: -20 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "month",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconSize: 8, wrapperStyle: { fontSize: 11 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "won",
                fill: C.green,
                radius: [4, 4, 0, 0],
                name: "Won"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "lost",
                fill: C.red,
                radius: [4, 4, 0, 0],
                name: "Lost"
              }
            )
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Deal Stage Funnel", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 py-1", children: funnelData.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: item.stage }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-mono", children: [
            item.count,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground/60", children: [
              "(",
              item.pct,
              "%)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-muted rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            animate: { width: `${item.pct}%` },
            transition: {
              delay: idx * 0.08,
              duration: 0.5,
              ease: "easeOut"
            },
            className: "h-full rounded-lg",
            style: { background: PALETTE[idx % PALETTE.length] }
          }
        ) })
      ] }, item.stage)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ChartCard, { title: "Revenue by Source", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pie,
            {
              data: sourceConversionData,
              cx: "50%",
              cy: "50%",
              innerRadius: 50,
              outerRadius: 80,
              dataKey: "revenue",
              paddingAngle: 3,
              nameKey: "source",
              children: sourceConversionData.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Cell,
                {
                  fill: PALETTE[idx % PALETTE.length]
                },
                entry.source
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              contentStyle: tooltipStyle,
              formatter: (v) => [`$${v.toLocaleString()}`]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 mt-2", children: sourceConversionData.slice(0, 4).map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-2 h-2 rounded-full shrink-0",
              style: { background: PALETTE[idx % PALETTE.length] }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground flex-1 truncate", children: s.source }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground", children: [
            "$",
            (s.revenue / 1e3).toFixed(0),
            "K"
          ] })
        ] }, s.source)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Top Deals This Period", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border/60", children: [
        "Company",
        "Contact",
        "Value",
        "Stage",
        "Owner",
        "Probability"
      ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "th",
        {
          className: "pb-2 text-left text-muted-foreground font-medium pr-4",
          children: h
        },
        h
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40", children: topDeals.map((deal, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "hover:bg-muted/30 transition-colors",
          "data-ocid": `reports.sales.deal.${idx + 1}.row`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-md bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center shrink-0", children: deal.companyLogo }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[120px] text-foreground", children: deal.company })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-muted-foreground", children: deal.contact }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-4 font-mono font-semibold text-foreground", children: [
              "$",
              deal.value.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] h-4", children: deal.stage }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-muted-foreground", children: deal.owner }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 font-mono text-foreground", children: [
              deal.probability,
              "%"
            ] })
          ]
        },
        deal.id
      )) })
    ] }) }) })
  ] });
}
function LeadConversionReport() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Total Leads",
          value: "480",
          sub: "+31% this quarter",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16 }),
          ocid: "reports.leads.total.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Lead → Won Rate",
          value: "7.9%",
          sub: "+1.2pp vs last quarter",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
          ocid: "reports.leads.won_rate.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Avg Lead Age",
          value: "18 days",
          sub: "-4 days vs last Q",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16 }),
          ocid: "reports.leads.avg_age.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Cost per Lead",
          value: "$48",
          sub: "-12% vs last Q",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 16 }),
          ocid: "reports.leads.cpl.card"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Lead Conversion Funnel — Stage by Stage", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 py-2", children: funnelData.map((item, idx) => {
      var _a;
      const nextPct = ((_a = funnelData[idx + 1]) == null ? void 0 : _a.pct) ?? 0;
      const convRate = idx < funnelData.length - 1 ? Math.round(nextPct / item.pct * 100) : null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 shrink-0 text-right text-xs font-medium text-foreground truncate", children: item.stage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative h-8 bg-muted rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            animate: { width: `${item.pct}%` },
            transition: {
              delay: idx * 0.1,
              duration: 0.5,
              ease: "easeOut"
            },
            className: "absolute inset-y-0 left-0 rounded-lg flex items-center justify-end pr-2",
            style: { background: PALETTE[idx % PALETTE.length] },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-white drop-shadow", children: item.count })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 shrink-0 text-right", children: convRate !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] h-4 px-1", children: [
          "→",
          convRate,
          "%"
        ] }) })
      ] }, item.stage);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Lead Sources — Conversion Rate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: sourceConversionData,
          layout: "vertical",
          margin: { left: 0, right: 20, top: 4, bottom: 4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                horizontal: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                type: "number",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                unit: "%"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                type: "category",
                dataKey: "source",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                width: 90
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: tooltipStyle,
                formatter: (v) => [`${v}%`, "Conversion"]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "rate", radius: [0, 4, 4, 0], name: "Conv. Rate", children: sourceConversionData.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Cell,
              {
                fill: PALETTE[idx % PALETTE.length]
              },
              entry.source
            )) })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Weekly Lead Inflow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        AreaChart,
        {
          data: weeklyLeadData,
          margin: { top: 4, right: 4, bottom: 0, left: -20 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "inflowGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: C.purple, stopOpacity: 0.4 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: C.purple, stopOpacity: 0 })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "week",
                tick: { fontSize: 9, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                interval: 2
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Area,
              {
                type: "monotone",
                dataKey: "inflow",
                stroke: C.purple,
                strokeWidth: 2.5,
                fill: "url(#inflowGrad)",
                name: "New Leads"
              }
            )
          ]
        }
      ) }) })
    ] })
  ] });
}
function RevenueTrendsReport() {
  const growthRate = ((334e3 - 267e3) / 267e3 * 100).toFixed(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "YTD Revenue",
          value: "$3.36M",
          sub: "+22% year-over-year",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
          ocid: "reports.revenue.ytd.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "MoM Growth",
          value: `+${growthRate}%`,
          sub: "May vs April 2026",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { size: 16 }),
          ocid: "reports.revenue.mom.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Q2 Forecast",
          value: "$420K",
          sub: "93% confidence",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16 }),
          ocid: "reports.revenue.forecast.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Recurring Rev.",
          value: "$1.8M",
          sub: "54% of total",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 16 }),
          ocid: "reports.revenue.recurring.card"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChartCard,
      {
        title: "Monthly Revenue — Actual vs Forecast (gradient area)",
        className: "col-span-full",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 280, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ComposedChart,
          {
            data: revenueFullYear,
            margin: { top: 4, right: 4, bottom: 0, left: -10 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "areaRevGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: C.blue, stopOpacity: 0.35 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: C.blue, stopOpacity: 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "prevYearGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: C.muted, stopOpacity: 0.2 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: C.muted, stopOpacity: 0 })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CartesianGrid,
                {
                  strokeDasharray: "3 3",
                  stroke: "var(--border)",
                  strokeOpacity: 0.4,
                  vertical: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                XAxis,
                {
                  dataKey: "month",
                  tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                  tickLine: false,
                  axisLine: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                  tickLine: false,
                  axisLine: false,
                  tickFormatter: (v) => `$${v / 1e3}K`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  contentStyle: tooltipStyle,
                  formatter: (v) => v ? [`$${v.toLocaleString()}`] : ["—"]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconSize: 8, wrapperStyle: { fontSize: 11 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Area,
                {
                  type: "monotone",
                  dataKey: "prevYear",
                  fill: "url(#prevYearGrad)",
                  stroke: C.muted,
                  strokeWidth: 1.5,
                  dot: false,
                  name: "Prior Year"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Area,
                {
                  type: "monotone",
                  dataKey: "revenue",
                  fill: "url(#areaRevGrad)",
                  stroke: C.blue,
                  strokeWidth: 2.5,
                  dot: false,
                  name: "Revenue"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Line,
                {
                  type: "monotone",
                  dataKey: "forecast",
                  stroke: C.amber,
                  strokeWidth: 2,
                  strokeDasharray: "6 3",
                  dot: { r: 4, fill: C.amber },
                  name: "Forecast",
                  connectNulls: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReferenceLine,
                {
                  y: 35e4,
                  stroke: C.green,
                  strokeDasharray: "4 2",
                  strokeWidth: 1,
                  label: {
                    value: "Goal $350K",
                    position: "insideTopRight",
                    fontSize: 10,
                    fill: C.green
                  }
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Top 10 Deals by Value", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border/60", children: ["#", "Company", "Value", "Stage", "Probability"].map(
          (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "pb-2 text-left text-muted-foreground font-medium pr-3",
              children: h
            },
            h
          )
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40", children: topDeals.map((deal, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-muted/30 transition-colors",
            "data-ocid": `reports.revenue.deal.${idx + 1}.row`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 font-mono text-muted-foreground", children: idx + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 font-medium text-foreground truncate max-w-[140px]", children: deal.company }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-3 font-mono font-semibold text-foreground", children: [
                "$",
                deal.value.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] h-4", children: deal.stage }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full",
                    style: {
                      width: `${deal.probability}%`,
                      background: deal.probability >= 80 ? C.green : deal.probability >= 50 ? C.amber : C.red
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground w-8", children: [
                  deal.probability,
                  "%"
                ] })
              ] }) })
            ]
          },
          deal.id
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border/60 bg-primary/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Q4 Forecast" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-3xl text-primary", children: "$1.24M" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Projected Q4 revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full",
              style: { width: "82%", background: C.blue }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "82% of annual target" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Monthly Growth Rates" }),
          revenueChartData.slice(1).map((d, idx) => {
            const prev = revenueChartData[idx];
            const rate = ((d.revenue - prev.revenue) / prev.revenue * 100).toFixed(1);
            const pos = Number(rate) >= 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex justify-between text-xs py-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: d.month }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: pos ? "text-emerald-600 dark:text-emerald-400 font-mono" : "text-destructive font-mono",
                      children: [
                        pos ? "+" : "",
                        rate,
                        "%"
                      ]
                    }
                  )
                ]
              },
              d.month
            );
          })
        ] })
      ] })
    ] })
  ] });
}
function SalespersonReport() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Team Revenue",
          value: "$928K",
          sub: "+19% vs last month",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
          ocid: "reports.team.revenue.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Avg Conversion",
          value: "28.6%",
          sub: "+4pp vs last month",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 16 }),
          ocid: "reports.team.conversion.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Total Calls",
          value: "752",
          sub: "+12% activity",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { size: 16 }),
          ocid: "reports.team.calls.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Top Performer",
          value: "Aisha P.",
          sub: "$213K · 42% conv.",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16 }),
          ocid: "reports.team.top.card"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Team Revenue vs Target", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: teamPerformanceData,
          margin: { top: 4, right: 4, bottom: 0, left: -20 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "name",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                unit: "K"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: tooltipStyle,
                formatter: (v) => [`$${v}K`]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconSize: 8, wrapperStyle: { fontSize: 11 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "revenue",
                fill: C.blue,
                radius: [4, 4, 0, 0],
                name: "Revenue ($K)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "target",
                fill: C.muted,
                radius: [4, 4, 0, 0],
                name: "Target ($K)",
                opacity: 0.4
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Calls vs Deals Closed", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ScatterChart,
        {
          margin: { top: 10, right: 20, bottom: 10, left: -10 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "calls",
                type: "number",
                name: "Calls Made",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                label: {
                  value: "Calls",
                  position: "insideBottom",
                  offset: -4,
                  fontSize: 10,
                  fill: "var(--muted-foreground)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                dataKey: "deals",
                type: "number",
                name: "Deals × 10",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ZAxis, { dataKey: "revenue", range: [40, 200] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: tooltipStyle,
                cursor: { strokeDasharray: "3 3" },
                content: ({ payload }) => {
                  var _a;
                  if (!(payload == null ? void 0 : payload.length)) return null;
                  const d = (_a = payload[0]) == null ? void 0 : _a.payload;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { ...tooltipStyle, padding: "8px 12px" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: d.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                      "Calls: ",
                      d.calls
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                      "Deals: ",
                      d.deals / 10
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                      "Revenue: $",
                      d.revenue,
                      "K"
                    ] })
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Scatter, { data: scatterData, fill: C.purple })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: mockTeamMembers.slice(0, 8).map((m, idx) => {
      const pct = Math.min(
        100,
        Math.round(m.totalRevenue / m.monthlyTarget * 100)
      );
      const rankColors = [
        "text-amber-500",
        "text-muted-foreground",
        "text-orange-600",
        "text-muted-foreground/60"
      ];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "p-4 border border-border/60 hover:shadow-elevation transition-shadow",
          "data-ocid": `reports.team.member.${idx + 1}.card`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0", children: m.avatar }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: m.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: m.role })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `ml-auto text-sm font-bold shrink-0 ${rankColors[idx % 4]}`,
                  children: [
                    "#",
                    idx + 1
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Revenue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono font-semibold text-foreground", children: [
                  "$",
                  (m.totalRevenue / 1e3).toFixed(0),
                  "K"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Deals" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono font-semibold text-foreground", children: m.dealsClosedThisMonth })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Conv. Rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono font-semibold text-foreground", children: [
                  m.conversionRate,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Calls" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono font-semibold text-foreground", children: m.callsMade })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "vs Target" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  pct,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full transition-all",
                  style: {
                    width: `${pct}%`,
                    background: pct >= 100 ? C.green : pct >= 70 ? C.blue : pct >= 40 ? C.amber : C.red
                  }
                }
              ) })
            ] })
          ]
        },
        m.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Team Activity Heatmap (Apr)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-1 ml-12", children: heatmapWeeks.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-14 text-center text-[10px] text-muted-foreground",
          children: w
        },
        w
      )) }),
      heatmapDays.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 text-right text-[10px] text-muted-foreground mr-1", children: day }),
        heatmapWeeks.map((week) => {
          const cell = heatmapData.find(
            (d) => d.day === day && d.week === week
          );
          const intensity = cell ? Math.min(1, cell.count / 20) : 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-14 h-8 rounded-md flex items-center justify-center text-[10px] font-mono cursor-default",
              style: {
                background: `color-mix(in oklch, oklch(0.5 0.12 243) ${Math.round(intensity * 80) + 10}%, var(--muted))`,
                color: intensity > 0.5 ? "white" : "var(--muted-foreground)"
              },
              title: `${day} ${week}: ${(cell == null ? void 0 : cell.count) ?? 0} activities`,
              children: (cell == null ? void 0 : cell.count) ?? 0
            },
            week
          );
        })
      ] }, day)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3 text-[10px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Less" }),
        [0.1, 0.3, 0.5, 0.7, 1].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-4 h-4 rounded-sm",
            style: {
              background: `color-mix(in oklch, oklch(0.5 0.12 243) ${Math.round(v * 80) + 10}%, var(--muted))`
            }
          },
          v
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "More" })
      ] })
    ] }) })
  ] });
}
function CustomerRetentionReport() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Avg Retention Rate",
          value: "90.5%",
          sub: "+2.1pp vs last H1",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
          ocid: "reports.retention.rate.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Churn Rate",
          value: "9.5%",
          sub: "-2.1pp vs last H1",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { size: 16 }),
          positive: false,
          ocid: "reports.retention.churn.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Avg LTV",
          value: "$74K",
          sub: "+11% vs last year",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 16 }),
          ocid: "reports.retention.ltv.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "At-Risk Accounts",
          value: "5",
          sub: "Needs attention",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 16 }),
          positive: false,
          ocid: "reports.retention.risk.card"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Retention Rate Trend", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        LineChart,
        {
          data: retentionData,
          margin: { top: 4, right: 4, bottom: 0, left: -20 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "month",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                domain: [80, 100],
                unit: "%"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: tooltipStyle,
                formatter: (v) => [`${v}%`]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconSize: 8, wrapperStyle: { fontSize: 11 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                type: "monotone",
                dataKey: "retention",
                stroke: C.green,
                strokeWidth: 2.5,
                dot: { r: 3, fill: C.green },
                name: "Retention %"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                type: "monotone",
                dataKey: "churn",
                stroke: C.red,
                strokeWidth: 1.5,
                dot: { r: 3, fill: C.red },
                name: "Churn %",
                strokeDasharray: "4 2"
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "New vs Returning Customers", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: retentionData,
          margin: { top: 4, right: 4, bottom: 0, left: -20 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "month",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconSize: 8, wrapperStyle: { fontSize: 11 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "returning",
                stackId: "a",
                fill: C.blue,
                name: "Returning"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "newCustomers",
                stackId: "a",
                fill: C.purple,
                radius: [4, 4, 0, 0],
                name: "New"
              }
            )
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Customer Lifetime Value Distribution", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: clvData,
          margin: { top: 4, right: 4, bottom: 0, left: -20 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "bucket",
                tick: { fontSize: 9, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", radius: [4, 4, 0, 0], name: "Customers", children: clvData.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Cell,
              {
                fill: PALETTE[idx % PALETTE.length]
              },
              entry.bucket
            )) })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "At-Risk Customers", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: atRiskCustomers.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors",
          "data-ocid": `reports.retention.risk.${idx + 1}.row`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TriangleAlert,
              {
                size: 14,
                className: c.risk === "High" ? "text-destructive" : c.risk === "Medium" ? "text-warning" : "text-amber-400"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                "Last: ",
                c.lastInteraction
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: c.ltv }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: `text-[10px] h-4 shrink-0 ${c.risk === "High" ? "border-destructive text-destructive" : c.risk === "Medium" ? "border-amber-400 text-amber-600" : "border-border"}`,
                children: c.risk
              }
            )
          ]
        },
        c.name
      )) }) })
    ] })
  ] });
}
function SourcePerformanceReport() {
  const costPerLeadData = sourceConversionData.map((s) => ({
    ...s,
    cpl: Math.round(s.revenue / s.leads / 3),
    roi: Math.round(s.revenue / (s.leads * 50) * 100)
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Best Source",
          value: "Referral",
          sub: "41% conversion rate",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
          ocid: "reports.source.best.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Most Volume",
          value: "Website",
          sub: "124 leads / month",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 16 }),
          ocid: "reports.source.volume.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Highest Revenue",
          value: "Website",
          sub: "$185K generated",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 16 }),
          ocid: "reports.source.revenue.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Lowest CPL",
          value: "Referral",
          sub: "$16 / lead",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16 }),
          ocid: "reports.source.cpl.card"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Leads per Source", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: sourceConversionData,
          layout: "vertical",
          margin: { left: 0, right: 30, top: 4, bottom: 4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                horizontal: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                type: "number",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                type: "category",
                dataKey: "source",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                width: 90
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "leads", radius: [0, 4, 4, 0], name: "Leads", children: sourceConversionData.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Cell,
              {
                fill: PALETTE[idx % PALETTE.length]
              },
              entry.source
            )) })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Revenue per Source", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: sourceConversionData,
          layout: "vertical",
          margin: { left: 0, right: 30, top: 4, bottom: 4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                horizontal: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                type: "number",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                tickFormatter: (v) => `$${v / 1e3}K`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                type: "category",
                dataKey: "source",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false,
                width: 90
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: tooltipStyle,
                formatter: (v) => [`$${v.toLocaleString()}`]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "revenue", radius: [0, 4, 4, 0], name: "Revenue", children: sourceConversionData.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Cell,
              {
                fill: PALETTE[idx % PALETTE.length]
              },
              entry.source
            )) })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Source Performance Summary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border/60", children: [
        "Source",
        "Leads",
        "Converted",
        "Conv. Rate",
        "Revenue",
        "Cost/Lead",
        "ROI"
      ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "th",
        {
          className: "pb-2 text-left text-muted-foreground font-medium pr-4",
          children: h
        },
        h
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40", children: costPerLeadData.sort((a, b) => b.rate - a.rate).map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "hover:bg-muted/30 transition-colors",
          "data-ocid": `reports.source.row.${idx + 1}.row`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-2 h-2 rounded-full shrink-0",
                  style: { background: PALETTE[idx % PALETTE.length] }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: s.source })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 font-mono text-foreground", children: s.leads }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 font-mono text-foreground", children: s.converted }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full",
                  style: {
                    width: `${s.rate * 2}%`,
                    background: PALETTE[idx % PALETTE.length]
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground", children: [
                s.rate,
                "%"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-4 font-mono font-semibold text-foreground", children: [
              "$",
              (s.revenue / 1e3).toFixed(0),
              "K"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-4 font-mono text-muted-foreground", children: [
              "$",
              s.cpl
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: s.roi >= 300 ? "default" : "secondary",
                className: "text-[10px] h-4",
                children: [
                  s.roi,
                  "%"
                ]
              }
            ) })
          ]
        },
        s.source
      )) })
    ] }) }) })
  ] });
}
function LostDealsReport() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Lost Deals",
          value: "47",
          sub: "This quarter",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { size: 16 }),
          positive: false,
          ocid: "reports.lost.count.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Lost Revenue",
          value: "$890K",
          sub: "Potential pipeline lost",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 16 }),
          positive: false,
          ocid: "reports.lost.revenue.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Avg Stage Lost",
          value: "Proposal",
          sub: "Most common dropout",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 16 }),
          positive: false,
          ocid: "reports.lost.stage.card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionKpi,
        {
          label: "Win Back Rate",
          value: "11%",
          sub: "Re-engaged deals",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 16 }),
          ocid: "reports.lost.winback.card"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Loss Reasons Breakdown", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: 200, height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pie,
            {
              data: lossReasonData,
              cx: "50%",
              cy: "50%",
              innerRadius: 45,
              outerRadius: 85,
              dataKey: "value",
              paddingAngle: 3,
              children: lossReasonData.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Cell,
                {
                  fill: PALETTE[idx % PALETTE.length]
                },
                entry.name
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              contentStyle: tooltipStyle,
              formatter: (v) => [`${v}%`]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 flex-1", children: lossReasonData.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-2.5 h-2.5 rounded-sm shrink-0",
              style: { background: PALETTE[idx % PALETTE.length] }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-foreground", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full",
              style: {
                width: `${r.value * 2.5}%`,
                background: PALETTE[idx % PALETTE.length]
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono w-8 text-right text-muted-foreground", children: [
            r.value,
            "%"
          ] })
        ] }, r.name)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Lost Deals by Pipeline Stage", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: lostByStageData,
          margin: { top: 4, right: 4, bottom: 0, left: -20 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "var(--border)",
                strokeOpacity: 0.4,
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "stage",
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                tickLine: false,
                axisLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "lost", radius: [4, 4, 0, 0], name: "Lost Deals", children: lostByStageData.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Cell,
              {
                fill: PALETTE[idx % PALETTE.length]
              },
              entry.stage
            )) })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Lost Deals by Salesperson", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      BarChart,
      {
        data: lostBySalesPersonData,
        margin: { top: 4, right: 4, bottom: 0, left: -20 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CartesianGrid,
            {
              strokeDasharray: "3 3",
              stroke: "var(--border)",
              strokeOpacity: 0.4,
              vertical: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            XAxis,
            {
              dataKey: "name",
              tick: { fontSize: 10, fill: "var(--muted-foreground)" },
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            YAxis,
            {
              tick: { fontSize: 10, fill: "var(--muted-foreground)" },
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconSize: 8, wrapperStyle: { fontSize: 11 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Bar,
            {
              dataKey: "lost",
              fill: C.red,
              radius: [4, 4, 0, 0],
              name: "Lost Deals",
              opacity: 0.8
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Bar,
            {
              dataKey: "deals",
              fill: C.green,
              radius: [4, 4, 0, 0],
              name: "Deals Closed"
            }
          )
        ]
      }
    ) }) })
  ] });
}
const reportTabs = [
  { id: "sales", label: "Sales Report", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { size: 13 }) },
  { id: "leads", label: "Lead Conversion", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 13 }) },
  { id: "revenue", label: "Revenue Trends", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 13 }) },
  { id: "team", label: "Salesperson", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 13 }) },
  { id: "retention", label: "Retention", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 13 }) },
  { id: "source", label: "Source Perf.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 13 }) },
  { id: "lost", label: "Lost Deals", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 13 }) }
];
function ReportsPage() {
  const [activeTab, setActiveTab] = reactExports.useState("sales");
  const [dateRange, setDateRange] = reactExports.useState("this_year");
  const [salesRep, setSalesRep] = reactExports.useState("all");
  const [region, setRegion] = reactExports.useState("all");
  function handleExportPDF() {
    ue.success("PDF export queued", {
      description: "Your report will download shortly."
    });
  }
  function handleExportCSV() {
    ue.success("CSV export started", {
      description: "Data exported to clipboard."
    });
  }
  function handleSchedule() {
    ue.info("Schedule report", {
      description: "Open the scheduling modal to configure."
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-20 md:pb-4", "data-ocid": "reports.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Reports & Analytics",
        description: "Data-driven insights across your entire sales operation",
        actions: [
          {
            label: "Export PDF",
            onClick: handleExportPDF,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14 }),
            variant: "outline",
            "data-ocid": "reports.export_pdf.button"
          },
          {
            label: "Export CSV",
            onClick: handleExportCSV,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 }),
            variant: "outline",
            "data-ocid": "reports.export_csv.button"
          },
          {
            label: "Schedule Report",
            onClick: handleSchedule,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
            "data-ocid": "reports.schedule.button"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 pb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: dateRange, onValueChange: setDateRange, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "h-8 w-40 text-xs",
            "data-ocid": "reports.date_range.select",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "this_week", children: "This Week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "this_month", children: "This Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "last_3_months", children: "Last 3 Months" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "this_year", children: "This Year" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "custom", children: "Custom Range" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: salesRep, onValueChange: setSalesRep, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "h-8 w-36 text-xs",
            "data-ocid": "reports.sales_rep.select",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Reps" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Reps" }),
          mockTeamMembers.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.id, children: m.name.split(" ")[0] }, m.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: region, onValueChange: setRegion, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "h-8 w-32 text-xs",
            "data-ocid": "reports.region.select",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Region" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Regions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "na", children: "North America" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "eu", children: "Europe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "apac", children: "APAC" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "mea", children: "MEA" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "h-8 text-xs gap-1",
          onClick: () => ue.info("Comparing to previous period"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12 }),
            "Compare period"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tabs,
      {
        value: activeTab,
        onValueChange: (v) => setActiveTab(v),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "h-9 gap-0.5 flex-wrap", children: reportTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: tab.id,
            className: "h-7 text-xs gap-1.5 px-3",
            "data-ocid": `reports.tab.${tab.id}.tab`,
            children: [
              tab.icon,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tab.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: tab.label.split(" ")[0] })
            ]
          },
          tab.id
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.2 },
        children: [
          activeTab === "sales" && /* @__PURE__ */ jsxRuntimeExports.jsx(SalesReport, { salesRep, region }),
          activeTab === "leads" && /* @__PURE__ */ jsxRuntimeExports.jsx(LeadConversionReport, {}),
          activeTab === "revenue" && /* @__PURE__ */ jsxRuntimeExports.jsx(RevenueTrendsReport, {}),
          activeTab === "team" && /* @__PURE__ */ jsxRuntimeExports.jsx(SalespersonReport, {}),
          activeTab === "retention" && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomerRetentionReport, {}),
          activeTab === "source" && /* @__PURE__ */ jsxRuntimeExports.jsx(SourcePerformanceReport, {}),
          activeTab === "lost" && /* @__PURE__ */ jsxRuntimeExports.jsx(LostDealsReport, {})
        ]
      },
      activeTab
    )
  ] });
}
export {
  ReportsPage as default
};
