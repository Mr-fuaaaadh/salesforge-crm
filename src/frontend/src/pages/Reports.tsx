import { KpiCard } from "@/components/shared/KpiCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  mockDeals,
  mockTeamMembers,
  revenueChartData,
  teamPerformanceData,
} from "@/lib/mock-data";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Calendar,
  Download,
  FileText,
  Layers,
  PieChart as PieIcon,
  RefreshCw,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { toast } from "sonner";

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  blue: "oklch(0.5 0.12 243)",
  purple: "oklch(0.52 0.13 270)",
  green: "oklch(0.62 0.18 152)",
  amber: "oklch(0.65 0.18 84)",
  red: "oklch(0.55 0.22 25)",
  muted: "oklch(0.55 0.003 0)",
  blueLight: "oklch(0.65 0.14 243)",
  greenLight: "oklch(0.72 0.17 152)",
};
const PALETTE = [
  C.blue,
  C.purple,
  C.green,
  C.amber,
  C.red,
  C.blueLight,
  C.greenLight,
];

// ─── Extended Mock Data ──────────────────────────────────────────────────────
const revenueFullYear = [
  {
    month: "Jan",
    revenue: 198000,
    target: 210000,
    prevYear: 162000,
    forecast: null,
  },
  {
    month: "Feb",
    revenue: 267000,
    target: 240000,
    prevYear: 201000,
    forecast: null,
  },
  {
    month: "Mar",
    revenue: 312000,
    target: 280000,
    prevYear: 245000,
    forecast: null,
  },
  {
    month: "Apr",
    revenue: 289000,
    target: 300000,
    prevYear: 230000,
    forecast: null,
  },
  {
    month: "May",
    revenue: 334000,
    target: 310000,
    prevYear: 261000,
    forecast: null,
  },
  {
    month: "Jun",
    revenue: 358000,
    target: 320000,
    prevYear: 285000,
    forecast: null,
  },
  {
    month: "Jul",
    revenue: 322000,
    target: 315000,
    prevYear: 270000,
    forecast: null,
  },
  {
    month: "Aug",
    revenue: 376000,
    target: 340000,
    prevYear: 292000,
    forecast: null,
  },
  {
    month: "Sep",
    revenue: 341000,
    target: 350000,
    prevYear: 278000,
    forecast: null,
  },
  {
    month: "Oct",
    revenue: 398000,
    target: 370000,
    prevYear: 312000,
    forecast: null,
  },
  {
    month: "Nov",
    revenue: 185000,
    target: 200000,
    prevYear: 145000,
    forecast: null,
  },
  {
    month: "Dec",
    revenue: null,
    target: 400000,
    prevYear: 365000,
    forecast: 420000,
  },
];

const winLossData = [
  { month: "Jan", won: 8, lost: 3 },
  { month: "Feb", won: 11, lost: 4 },
  { month: "Mar", won: 14, lost: 2 },
  { month: "Apr", won: 10, lost: 5 },
  { month: "May", won: 13, lost: 3 },
  { month: "Jun", won: 16, lost: 2 },
];

const funnelData = [
  { stage: "Total Leads", count: 480, pct: 100 },
  { stage: "Contacted", count: 312, pct: 65 },
  { stage: "Qualified", count: 204, pct: 43 },
  { stage: "Proposal Sent", count: 118, pct: 25 },
  { stage: "Negotiation", count: 67, pct: 14 },
  { stage: "Won", count: 38, pct: 8 },
];

const sourceConversionData = [
  { source: "Referral", leads: 68, converted: 28, rate: 41, revenue: 142000 },
  { source: "Website", leads: 124, converted: 41, rate: 33, revenue: 185000 },
  { source: "LinkedIn", leads: 98, converted: 28, rate: 29, revenue: 112000 },
  { source: "Events", leads: 54, converted: 14, rate: 26, revenue: 87000 },
  { source: "Partners", leads: 42, converted: 10, rate: 24, revenue: 93000 },
  {
    source: "Cold Outreach",
    leads: 94,
    converted: 12,
    rate: 13,
    revenue: 45000,
  },
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
  { week: "W4 Mar", inflow: 39 },
];

const retentionData = [
  { month: "Jul", retention: 88, churn: 12, newCustomers: 14, returning: 62 },
  { month: "Aug", retention: 91, churn: 9, newCustomers: 18, returning: 68 },
  { month: "Sep", retention: 87, churn: 13, newCustomers: 12, returning: 65 },
  { month: "Oct", retention: 93, churn: 7, newCustomers: 22, returning: 74 },
  { month: "Nov", retention: 90, churn: 10, newCustomers: 16, returning: 70 },
  { month: "Dec", retention: 94, churn: 6, newCustomers: 24, returning: 78 },
];

const clvData = [
  { bucket: "$0–25K", count: 28 },
  { bucket: "$25–50K", count: 42 },
  { bucket: "$50–100K", count: 31 },
  { bucket: "$100–200K", count: 14 },
  { bucket: "$200K+", count: 6 },
];

const atRiskCustomers = [
  {
    name: "FutureLabs Corp",
    lastInteraction: "42 days ago",
    ltv: "$33K",
    risk: "High",
  },
  {
    name: "Samba Digital",
    lastInteraction: "38 days ago",
    ltv: "$9.5K",
    risk: "High",
  },
  {
    name: "Paris Consulting",
    lastInteraction: "29 days ago",
    ltv: "$31K",
    risk: "Medium",
  },
  {
    name: "Catalyst Ventures",
    lastInteraction: "22 days ago",
    ltv: "$8K",
    risk: "Medium",
  },
  {
    name: "AfriTech Innovations",
    lastInteraction: "18 days ago",
    ltv: "$12.5K",
    risk: "Low",
  },
];

const lossReasonData = [
  { name: "Price / Budget", value: 34 },
  { name: "Competitor", value: 28 },
  { name: "No Budget", value: 18 },
  { name: "Timing", value: 12 },
  { name: "Feature Gap", value: 8 },
];

const lostByStageData = [
  { stage: "Qualified", lost: 38 },
  { stage: "Proposal", lost: 24 },
  { stage: "Negotiation", lost: 12 },
  { stage: "Contract", lost: 4 },
];

const lostBySalesPersonData = mockTeamMembers.map((m) => ({
  name: m.name.split(" ")[0],
  lost: Math.round(m.callsMade * 0.08),
  deals: m.dealsClosedThisMonth,
}));

const topDeals = mockDeals
  .filter((d) => d.value > 0)
  .sort((a, b) => b.value - a.value)
  .slice(0, 8);

const scatterData = mockTeamMembers.map((m) => ({
  name: m.name.split(" ")[0],
  calls: m.callsMade,
  deals: m.dealsClosedThisMonth * 10,
  revenue: m.totalRevenue / 1000,
}));

// Activity heatmap: 5 days × 4 weeks
const heatmapDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const heatmapWeeks = ["W1", "W2", "W3", "W4"];
const heatmapData = heatmapDays.flatMap((day) =>
  heatmapWeeks.map((week) => ({
    day,
    week,
    count: Math.floor(Math.random() * 20) + 1,
  })),
);

// ─── Shared Chart Styles ─────────────────────────────────────────────────────
const tooltipStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "0.75rem",
  fontSize: 12,
  color: "var(--foreground)",
};

function ChartCard({
  title,
  children,
  className = "",
  actions,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}) {
  return (
    <Card className={`border border-border/60 ${className}`}>
      <CardHeader className="pb-3 flex-row items-center justify-between">
        <CardTitle className="text-sm font-semibold text-foreground">
          {title}
        </CardTitle>
        {actions}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function SectionKpi({
  label,
  value,
  sub,
  icon,
  positive,
  ocid,
}: {
  label: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
  positive?: boolean;
  ocid: string;
}) {
  return (
    <Card
      className="p-4 border border-border/60 hover:shadow-elevation transition-shadow"
      data-ocid={ocid}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          {label}
        </span>
      </div>
      <p className="font-display font-bold text-2xl text-foreground leading-none">
        {value}
      </p>
      <p
        className={`text-xs mt-1 font-medium ${positive !== false ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"}`}
      >
        {sub}
      </p>
    </Card>
  );
}

// ─── Report Sections ─────────────────────────────────────────────────────────

function SalesReport(_props: { salesRep: string; region: string }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SectionKpi
          label="Total Revenue"
          value="$3.36M"
          sub="+22% vs last year"
          icon={<TrendingUp size={16} />}
          ocid="reports.sales.revenue.card"
        />
        <SectionKpi
          label="Deals Won"
          value="145"
          sub="+18% vs last year"
          icon={<Target size={16} />}
          ocid="reports.sales.deals_won.card"
        />
        <SectionKpi
          label="Avg Deal Size"
          value="$23.2K"
          sub="+5% vs last year"
          icon={<BarChart3 size={16} />}
          ocid="reports.sales.avg_deal.card"
        />
        <SectionKpi
          label="Avg Sales Cycle"
          value="42 days"
          sub="-6 days vs last year"
          icon={<Calendar size={16} />}
          ocid="reports.sales.cycle.card"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="Revenue vs Target — Full Year">
          <ResponsiveContainer width="100%" height={240}>
            <ComposedChart
              data={revenueFullYear}
              margin={{ top: 4, right: 4, bottom: 0, left: -10 }}
            >
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.blue} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={C.blue} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `$${v / 1000}K`}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) =>
                  v ? [`$${v.toLocaleString()}`] : ["—"]
                }
              />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Area
                type="monotone"
                dataKey="revenue"
                fill="url(#revenueGrad)"
                stroke={C.blue}
                strokeWidth={2.5}
                dot={false}
                name="Revenue"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke={C.muted}
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
                name="Target"
              />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke={C.amber}
                strokeWidth={2}
                strokeDasharray="6 3"
                dot={{ r: 4, fill: C.amber }}
                name="Forecast"
                connectNulls={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Win / Loss by Month">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={winLossData}
              margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Bar
                dataKey="won"
                fill={C.green}
                radius={[4, 4, 0, 0]}
                name="Won"
              />
              <Bar
                dataKey="lost"
                fill={C.red}
                radius={[4, 4, 0, 0]}
                name="Lost"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <ChartCard title="Deal Stage Funnel" className="lg:col-span-2">
          <div className="space-y-2 py-1">
            {funnelData.map((item, idx) => (
              <div key={item.stage} className="space-y-0.5">
                <div className="flex justify-between text-xs">
                  <span className="text-foreground font-medium">
                    {item.stage}
                  </span>
                  <span className="text-muted-foreground font-mono">
                    {item.count}{" "}
                    <span className="text-muted-foreground/60">
                      ({item.pct}%)
                    </span>
                  </span>
                </div>
                <div className="h-6 bg-muted rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.pct}%` }}
                    transition={{
                      delay: idx * 0.08,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-lg"
                    style={{ background: PALETTE[idx % PALETTE.length] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Revenue by Source">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={sourceConversionData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="revenue"
                paddingAngle={3}
                nameKey="source"
              >
                {sourceConversionData.map((entry, idx) => (
                  <Cell
                    key={entry.source}
                    fill={PALETTE[idx % PALETTE.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [`$${v.toLocaleString()}`]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1 mt-2">
            {sourceConversionData.slice(0, 4).map((s, idx) => (
              <div key={s.source} className="flex items-center gap-2 text-xs">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: PALETTE[idx % PALETTE.length] }}
                />
                <span className="text-foreground flex-1 truncate">
                  {s.source}
                </span>
                <span className="font-mono text-muted-foreground">
                  ${(s.revenue / 1000).toFixed(0)}K
                </span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* Top 10 Deals Table */}
      <ChartCard title="Top Deals This Period">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border/60">
                {[
                  "Company",
                  "Contact",
                  "Value",
                  "Stage",
                  "Owner",
                  "Probability",
                ].map((h) => (
                  <th
                    key={h}
                    className="pb-2 text-left text-muted-foreground font-medium pr-4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {topDeals.map((deal, idx) => (
                <tr
                  key={deal.id}
                  className="hover:bg-muted/30 transition-colors"
                  data-ocid={`reports.sales.deal.${idx + 1}.row`}
                >
                  <td className="py-2 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center shrink-0">
                        {deal.companyLogo}
                      </div>
                      <span className="truncate max-w-[120px] text-foreground">
                        {deal.company}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">
                    {deal.contact}
                  </td>
                  <td className="py-2 pr-4 font-mono font-semibold text-foreground">
                    ${deal.value.toLocaleString()}
                  </td>
                  <td className="py-2 pr-4">
                    <Badge variant="secondary" className="text-[10px] h-4">
                      {deal.stage}
                    </Badge>
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">
                    {deal.owner}
                  </td>
                  <td className="py-2 font-mono text-foreground">
                    {deal.probability}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </div>
  );
}

function LeadConversionReport() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SectionKpi
          label="Total Leads"
          value="480"
          sub="+31% this quarter"
          icon={<Users size={16} />}
          ocid="reports.leads.total.card"
        />
        <SectionKpi
          label="Lead → Won Rate"
          value="7.9%"
          sub="+1.2pp vs last quarter"
          icon={<TrendingUp size={16} />}
          ocid="reports.leads.won_rate.card"
        />
        <SectionKpi
          label="Avg Lead Age"
          value="18 days"
          sub="-4 days vs last Q"
          icon={<Calendar size={16} />}
          ocid="reports.leads.avg_age.card"
        />
        <SectionKpi
          label="Cost per Lead"
          value="$48"
          sub="-12% vs last Q"
          icon={<Target size={16} />}
          ocid="reports.leads.cpl.card"
        />
      </div>

      {/* Funnel with conversion % */}
      <ChartCard title="Lead Conversion Funnel — Stage by Stage">
        <div className="flex flex-col gap-3 py-2">
          {funnelData.map((item, idx) => {
            const nextPct = funnelData[idx + 1]?.pct ?? 0;
            const convRate =
              idx < funnelData.length - 1
                ? Math.round((nextPct / item.pct) * 100)
                : null;
            return (
              <div key={item.stage} className="flex items-center gap-4">
                <div className="w-32 shrink-0 text-right text-xs font-medium text-foreground truncate">
                  {item.stage}
                </div>
                <div className="flex-1 relative h-8 bg-muted rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.pct}%` }}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute inset-y-0 left-0 rounded-lg flex items-center justify-end pr-2"
                    style={{ background: PALETTE[idx % PALETTE.length] }}
                  >
                    <span className="text-[10px] font-bold text-white drop-shadow">
                      {item.count}
                    </span>
                  </motion.div>
                </div>
                <div className="w-12 shrink-0 text-right">
                  {convRate !== null && (
                    <Badge variant="outline" className="text-[10px] h-4 px-1">
                      →{convRate}%
                    </Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ChartCard>

      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="Lead Sources — Conversion Rate">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={sourceConversionData}
              layout="vertical"
              margin={{ left: 0, right: 20, top: 4, bottom: 4 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                unit="%"
              />
              <YAxis
                type="category"
                dataKey="source"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                width={90}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [`${v}%`, "Conversion"]}
              />
              <Bar dataKey="rate" radius={[0, 4, 4, 0]} name="Conv. Rate">
                {sourceConversionData.map((entry, idx) => (
                  <Cell
                    key={entry.source}
                    fill={PALETTE[idx % PALETTE.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Weekly Lead Inflow">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart
              data={weeklyLeadData}
              margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
            >
              <defs>
                <linearGradient id="inflowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.purple} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={C.purple} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                vertical={false}
              />
              <XAxis
                dataKey="week"
                tick={{ fontSize: 9, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                interval={2}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Area
                type="monotone"
                dataKey="inflow"
                stroke={C.purple}
                strokeWidth={2.5}
                fill="url(#inflowGrad)"
                name="New Leads"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

function RevenueTrendsReport() {
  const growthRate = (((334000 - 267000) / 267000) * 100).toFixed(1);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SectionKpi
          label="YTD Revenue"
          value="$3.36M"
          sub="+22% year-over-year"
          icon={<TrendingUp size={16} />}
          ocid="reports.revenue.ytd.card"
        />
        <SectionKpi
          label="MoM Growth"
          value={`+${growthRate}%`}
          sub="May vs April 2026"
          icon={<Activity size={16} />}
          ocid="reports.revenue.mom.card"
        />
        <SectionKpi
          label="Q2 Forecast"
          value="$420K"
          sub="93% confidence"
          icon={<Zap size={16} />}
          ocid="reports.revenue.forecast.card"
        />
        <SectionKpi
          label="Recurring Rev."
          value="$1.8M"
          sub="54% of total"
          icon={<RefreshCw size={16} />}
          ocid="reports.revenue.recurring.card"
        />
      </div>

      <ChartCard
        title="Monthly Revenue — Actual vs Forecast (gradient area)"
        className="col-span-full"
      >
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart
            data={revenueFullYear}
            margin={{ top: 4, right: 4, bottom: 0, left: -10 }}
          >
            <defs>
              <linearGradient id="areaRevGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={C.blue} stopOpacity={0.35} />
                <stop offset="95%" stopColor={C.blue} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="prevYearGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={C.muted} stopOpacity={0.2} />
                <stop offset="95%" stopColor={C.muted} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              strokeOpacity={0.4}
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `$${v / 1000}K`}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(v: number) =>
                v ? [`$${v.toLocaleString()}`] : ["—"]
              }
            />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
            <Area
              type="monotone"
              dataKey="prevYear"
              fill="url(#prevYearGrad)"
              stroke={C.muted}
              strokeWidth={1.5}
              dot={false}
              name="Prior Year"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              fill="url(#areaRevGrad)"
              stroke={C.blue}
              strokeWidth={2.5}
              dot={false}
              name="Revenue"
            />
            <Line
              type="monotone"
              dataKey="forecast"
              stroke={C.amber}
              strokeWidth={2}
              strokeDasharray="6 3"
              dot={{ r: 4, fill: C.amber }}
              name="Forecast"
              connectNulls={false}
            />
            <ReferenceLine
              y={350000}
              stroke={C.green}
              strokeDasharray="4 2"
              strokeWidth={1}
              label={{
                value: "Goal $350K",
                position: "insideTopRight",
                fontSize: 10,
                fill: C.green,
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid lg:grid-cols-3 gap-4">
        <ChartCard title="Top 10 Deals by Value" className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/60">
                  {["#", "Company", "Value", "Stage", "Probability"].map(
                    (h) => (
                      <th
                        key={h}
                        className="pb-2 text-left text-muted-foreground font-medium pr-3"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {topDeals.map((deal, idx) => (
                  <tr
                    key={deal.id}
                    className="hover:bg-muted/30 transition-colors"
                    data-ocid={`reports.revenue.deal.${idx + 1}.row`}
                  >
                    <td className="py-2 pr-3 font-mono text-muted-foreground">
                      {idx + 1}
                    </td>
                    <td className="py-2 pr-3 font-medium text-foreground truncate max-w-[140px]">
                      {deal.company}
                    </td>
                    <td className="py-2 pr-3 font-mono font-semibold text-foreground">
                      ${deal.value.toLocaleString()}
                    </td>
                    <td className="py-2 pr-3">
                      <Badge variant="secondary" className="text-[10px] h-4">
                        {deal.stage}
                      </Badge>
                    </td>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${deal.probability}%`,
                              background:
                                deal.probability >= 80
                                  ? C.green
                                  : deal.probability >= 50
                                    ? C.amber
                                    : C.red,
                            }}
                          />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground w-8">
                          {deal.probability}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>

        <div className="space-y-4">
          <Card className="p-4 border border-border/60 bg-primary/5">
            <p className="text-xs text-muted-foreground mb-1">Q4 Forecast</p>
            <p className="font-display font-bold text-3xl text-primary">
              $1.24M
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Projected Q4 revenue
            </p>
            <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: "82%", background: C.blue }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              82% of annual target
            </p>
          </Card>
          <Card className="p-4 border border-border/60">
            <p className="text-xs text-muted-foreground mb-2">
              Monthly Growth Rates
            </p>
            {revenueChartData.slice(1).map((d, idx) => {
              const prev = revenueChartData[idx];
              const rate = (
                ((d.revenue - prev.revenue) / prev.revenue) *
                100
              ).toFixed(1);
              const pos = Number(rate) >= 0;
              return (
                <div
                  key={d.month}
                  className="flex justify-between text-xs py-0.5"
                >
                  <span className="text-muted-foreground">{d.month}</span>
                  <span
                    className={
                      pos
                        ? "text-emerald-600 dark:text-emerald-400 font-mono"
                        : "text-destructive font-mono"
                    }
                  >
                    {pos ? "+" : ""}
                    {rate}%
                  </span>
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </div>
  );
}

function SalespersonReport() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SectionKpi
          label="Team Revenue"
          value="$928K"
          sub="+19% vs last month"
          icon={<TrendingUp size={16} />}
          ocid="reports.team.revenue.card"
        />
        <SectionKpi
          label="Avg Conversion"
          value="28.6%"
          sub="+4pp vs last month"
          icon={<Target size={16} />}
          ocid="reports.team.conversion.card"
        />
        <SectionKpi
          label="Total Calls"
          value="752"
          sub="+12% activity"
          icon={<Activity size={16} />}
          ocid="reports.team.calls.card"
        />
        <SectionKpi
          label="Top Performer"
          value="Aisha P."
          sub="$213K · 42% conv."
          icon={<Zap size={16} />}
          ocid="reports.team.top.card"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="Team Revenue vs Target">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={teamPerformanceData}
              margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                unit="K"
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [`$${v}K`]}
              />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Bar
                dataKey="revenue"
                fill={C.blue}
                radius={[4, 4, 0, 0]}
                name="Revenue ($K)"
              />
              <Bar
                dataKey="target"
                fill={C.muted}
                radius={[4, 4, 0, 0]}
                name="Target ($K)"
                opacity={0.4}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Calls vs Deals Closed">
          <ResponsiveContainer width="100%" height={240}>
            <ScatterChart
              margin={{ top: 10, right: 20, bottom: 10, left: -10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
              />
              <XAxis
                dataKey="calls"
                type="number"
                name="Calls Made"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                label={{
                  value: "Calls",
                  position: "insideBottom",
                  offset: -4,
                  fontSize: 10,
                  fill: "var(--muted-foreground)",
                }}
              />
              <YAxis
                dataKey="deals"
                type="number"
                name="Deals × 10"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <ZAxis dataKey="revenue" range={[40, 200]} />
              <Tooltip
                contentStyle={tooltipStyle}
                cursor={{ strokeDasharray: "3 3" }}
                content={({ payload }) => {
                  if (!payload?.length) return null;
                  const d = payload[0]?.payload as (typeof scatterData)[0];
                  return (
                    <div style={{ ...tooltipStyle, padding: "8px 12px" }}>
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-xs">Calls: {d.calls}</p>
                      <p className="text-xs">Deals: {d.deals / 10}</p>
                      <p className="text-xs">Revenue: ${d.revenue}K</p>
                    </div>
                  );
                }}
              />
              <Scatter data={scatterData} fill={C.purple} />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Individual rep cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockTeamMembers.slice(0, 8).map((m, idx) => {
          const pct = Math.min(
            100,
            Math.round((m.totalRevenue / m.monthlyTarget) * 100),
          );
          const rankColors = [
            "text-amber-500",
            "text-muted-foreground",
            "text-orange-600",
            "text-muted-foreground/60",
          ];
          return (
            <Card
              key={m.id}
              className="p-4 border border-border/60 hover:shadow-elevation transition-shadow"
              data-ocid={`reports.team.member.${idx + 1}.card`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                  {m.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground truncate">
                    {m.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground truncate">
                    {m.role}
                  </p>
                </div>
                <span
                  className={`ml-auto text-sm font-bold shrink-0 ${rankColors[idx % 4]}`}
                >
                  #{idx + 1}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <div>
                  <p className="text-muted-foreground">Revenue</p>
                  <p className="font-mono font-semibold text-foreground">
                    ${(m.totalRevenue / 1000).toFixed(0)}K
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Deals</p>
                  <p className="font-mono font-semibold text-foreground">
                    {m.dealsClosedThisMonth}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Conv. Rate</p>
                  <p className="font-mono font-semibold text-foreground">
                    {m.conversionRate}%
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Calls</p>
                  <p className="font-mono font-semibold text-foreground">
                    {m.callsMade}
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>vs Target</span>
                  <span className="font-mono">{pct}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct}%`,
                      background:
                        pct >= 100
                          ? C.green
                          : pct >= 70
                            ? C.blue
                            : pct >= 40
                              ? C.amber
                              : C.red,
                    }}
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Activity heatmap */}
      <ChartCard title="Team Activity Heatmap (Apr)">
        <div className="overflow-x-auto">
          <div className="flex gap-1 mb-1 ml-12">
            {heatmapWeeks.map((w) => (
              <div
                key={w}
                className="w-14 text-center text-[10px] text-muted-foreground"
              >
                {w}
              </div>
            ))}
          </div>
          {heatmapDays.map((day) => (
            <div key={day} className="flex items-center gap-1 mb-1">
              <div className="w-10 text-right text-[10px] text-muted-foreground mr-1">
                {day}
              </div>
              {heatmapWeeks.map((week) => {
                const cell = heatmapData.find(
                  (d) => d.day === day && d.week === week,
                );
                const intensity = cell ? Math.min(1, cell.count / 20) : 0;
                return (
                  <div
                    key={week}
                    className="w-14 h-8 rounded-md flex items-center justify-center text-[10px] font-mono cursor-default"
                    style={{
                      background: `color-mix(in oklch, oklch(0.5 0.12 243) ${Math.round(intensity * 80) + 10}%, var(--muted))`,
                      color:
                        intensity > 0.5 ? "white" : "var(--muted-foreground)",
                    }}
                    title={`${day} ${week}: ${cell?.count ?? 0} activities`}
                  >
                    {cell?.count ?? 0}
                  </div>
                );
              })}
            </div>
          ))}
          <div className="flex items-center gap-2 mt-3 text-[10px] text-muted-foreground">
            <span>Less</span>
            {[0.1, 0.3, 0.5, 0.7, 1].map((v) => (
              <div
                key={v}
                className="w-4 h-4 rounded-sm"
                style={{
                  background: `color-mix(in oklch, oklch(0.5 0.12 243) ${Math.round(v * 80) + 10}%, var(--muted))`,
                }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </ChartCard>
    </div>
  );
}

function CustomerRetentionReport() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SectionKpi
          label="Avg Retention Rate"
          value="90.5%"
          sub="+2.1pp vs last H1"
          icon={<TrendingUp size={16} />}
          ocid="reports.retention.rate.card"
        />
        <SectionKpi
          label="Churn Rate"
          value="9.5%"
          sub="-2.1pp vs last H1"
          icon={<TrendingDown size={16} />}
          positive={false}
          ocid="reports.retention.churn.card"
        />
        <SectionKpi
          label="Avg LTV"
          value="$74K"
          sub="+11% vs last year"
          icon={<Target size={16} />}
          ocid="reports.retention.ltv.card"
        />
        <SectionKpi
          label="At-Risk Accounts"
          value="5"
          sub="Needs attention"
          icon={<AlertTriangle size={16} />}
          positive={false}
          ocid="reports.retention.risk.card"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="Retention Rate Trend">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart
              data={retentionData}
              margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                domain={[80, 100]}
                unit="%"
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [`${v}%`]}
              />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Line
                type="monotone"
                dataKey="retention"
                stroke={C.green}
                strokeWidth={2.5}
                dot={{ r: 3, fill: C.green }}
                name="Retention %"
              />
              <Line
                type="monotone"
                dataKey="churn"
                stroke={C.red}
                strokeWidth={1.5}
                dot={{ r: 3, fill: C.red }}
                name="Churn %"
                strokeDasharray="4 2"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="New vs Returning Customers">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={retentionData}
              margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Bar
                dataKey="returning"
                stackId="a"
                fill={C.blue}
                name="Returning"
              />
              <Bar
                dataKey="newCustomers"
                stackId="a"
                fill={C.purple}
                radius={[4, 4, 0, 0]}
                name="New"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="Customer Lifetime Value Distribution">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={clvData}
              margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                vertical={false}
              />
              <XAxis
                dataKey="bucket"
                tick={{ fontSize: 9, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} name="Customers">
                {clvData.map((entry, idx) => (
                  <Cell
                    key={entry.bucket}
                    fill={PALETTE[idx % PALETTE.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="At-Risk Customers">
          <div className="space-y-2">
            {atRiskCustomers.map((c, idx) => (
              <div
                key={c.name}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                data-ocid={`reports.retention.risk.${idx + 1}.row`}
              >
                <AlertTriangle
                  size={14}
                  className={
                    c.risk === "High"
                      ? "text-destructive"
                      : c.risk === "Medium"
                        ? "text-warning"
                        : "text-amber-400"
                  }
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">
                    {c.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Last: {c.lastInteraction}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {c.ltv}
                </span>
                <Badge
                  variant="outline"
                  className={`text-[10px] h-4 shrink-0 ${c.risk === "High" ? "border-destructive text-destructive" : c.risk === "Medium" ? "border-amber-400 text-amber-600" : "border-border"}`}
                >
                  {c.risk}
                </Badge>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
}

function SourcePerformanceReport() {
  const costPerLeadData = sourceConversionData.map((s) => ({
    ...s,
    cpl: Math.round(s.revenue / s.leads / 3),
    roi: Math.round((s.revenue / (s.leads * 50)) * 100),
  }));

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SectionKpi
          label="Best Source"
          value="Referral"
          sub="41% conversion rate"
          icon={<TrendingUp size={16} />}
          ocid="reports.source.best.card"
        />
        <SectionKpi
          label="Most Volume"
          value="Website"
          sub="124 leads / month"
          icon={<Layers size={16} />}
          ocid="reports.source.volume.card"
        />
        <SectionKpi
          label="Highest Revenue"
          value="Website"
          sub="$185K generated"
          icon={<Target size={16} />}
          ocid="reports.source.revenue.card"
        />
        <SectionKpi
          label="Lowest CPL"
          value="Referral"
          sub="$16 / lead"
          icon={<Zap size={16} />}
          ocid="reports.source.cpl.card"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="Leads per Source">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={sourceConversionData}
              layout="vertical"
              margin={{ left: 0, right: 30, top: 4, bottom: 4 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                type="category"
                dataKey="source"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                width={90}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="leads" radius={[0, 4, 4, 0]} name="Leads">
                {sourceConversionData.map((entry, idx) => (
                  <Cell
                    key={entry.source}
                    fill={PALETTE[idx % PALETTE.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Revenue per Source">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={sourceConversionData}
              layout="vertical"
              margin={{ left: 0, right: 30, top: 4, bottom: 4 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `$${v / 1000}K`}
              />
              <YAxis
                type="category"
                dataKey="source"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                width={90}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [`$${v.toLocaleString()}`]}
              />
              <Bar dataKey="revenue" radius={[0, 4, 4, 0]} name="Revenue">
                {sourceConversionData.map((entry, idx) => (
                  <Cell
                    key={entry.source}
                    fill={PALETTE[idx % PALETTE.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Source Performance Summary">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border/60">
                {[
                  "Source",
                  "Leads",
                  "Converted",
                  "Conv. Rate",
                  "Revenue",
                  "Cost/Lead",
                  "ROI",
                ].map((h) => (
                  <th
                    key={h}
                    className="pb-2 text-left text-muted-foreground font-medium pr-4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {costPerLeadData
                .sort((a, b) => b.rate - a.rate)
                .map((s, idx) => (
                  <tr
                    key={s.source}
                    className="hover:bg-muted/30 transition-colors"
                    data-ocid={`reports.source.row.${idx + 1}.row`}
                  >
                    <td className="py-2 pr-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ background: PALETTE[idx % PALETTE.length] }}
                        />
                        <span className="font-medium text-foreground">
                          {s.source}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 pr-4 font-mono text-foreground">
                      {s.leads}
                    </td>
                    <td className="py-2 pr-4 font-mono text-foreground">
                      {s.converted}
                    </td>
                    <td className="py-2 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${s.rate * 2}%`,
                              background: PALETTE[idx % PALETTE.length],
                            }}
                          />
                        </div>
                        <span className="font-mono text-foreground">
                          {s.rate}%
                        </span>
                      </div>
                    </td>
                    <td className="py-2 pr-4 font-mono font-semibold text-foreground">
                      ${(s.revenue / 1000).toFixed(0)}K
                    </td>
                    <td className="py-2 pr-4 font-mono text-muted-foreground">
                      ${s.cpl}
                    </td>
                    <td className="py-2">
                      <Badge
                        variant={s.roi >= 300 ? "default" : "secondary"}
                        className="text-[10px] h-4"
                      >
                        {s.roi}%
                      </Badge>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </div>
  );
}

function LostDealsReport() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SectionKpi
          label="Lost Deals"
          value="47"
          sub="This quarter"
          icon={<TrendingDown size={16} />}
          positive={false}
          ocid="reports.lost.count.card"
        />
        <SectionKpi
          label="Lost Revenue"
          value="$890K"
          sub="Potential pipeline lost"
          icon={<Target size={16} />}
          positive={false}
          ocid="reports.lost.revenue.card"
        />
        <SectionKpi
          label="Avg Stage Lost"
          value="Proposal"
          sub="Most common dropout"
          icon={<Layers size={16} />}
          positive={false}
          ocid="reports.lost.stage.card"
        />
        <SectionKpi
          label="Win Back Rate"
          value="11%"
          sub="Re-engaged deals"
          icon={<RefreshCw size={16} />}
          ocid="reports.lost.winback.card"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="Loss Reasons Breakdown">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={lossReasonData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={85}
                  dataKey="value"
                  paddingAngle={3}
                >
                  {lossReasonData.map((entry, idx) => (
                    <Cell
                      key={entry.name}
                      fill={PALETTE[idx % PALETTE.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(v: number) => [`${v}%`]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 flex-1">
              {lossReasonData.map((r, idx) => (
                <div key={r.name} className="flex items-center gap-3 text-xs">
                  <div
                    className="w-2.5 h-2.5 rounded-sm shrink-0"
                    style={{ background: PALETTE[idx % PALETTE.length] }}
                  />
                  <span className="flex-1 text-foreground">{r.name}</span>
                  <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${r.value * 2.5}%`,
                        background: PALETTE[idx % PALETTE.length],
                      }}
                    />
                  </div>
                  <span className="font-mono w-8 text-right text-muted-foreground">
                    {r.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ChartCard>

        <ChartCard title="Lost Deals by Pipeline Stage">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={lostByStageData}
              margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                strokeOpacity={0.4}
                vertical={false}
              />
              <XAxis
                dataKey="stage"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="lost" radius={[4, 4, 0, 0]} name="Lost Deals">
                {lostByStageData.map((entry, idx) => (
                  <Cell
                    key={entry.stage}
                    fill={PALETTE[idx % PALETTE.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Lost Deals by Salesperson">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={lostBySalesPersonData}
            margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              strokeOpacity={0.4}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
            <Bar
              dataKey="lost"
              fill={C.red}
              radius={[4, 4, 0, 0]}
              name="Lost Deals"
              opacity={0.8}
            />
            <Bar
              dataKey="deals"
              fill={C.green}
              radius={[4, 4, 0, 0]}
              name="Deals Closed"
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const reportTabs = [
  { id: "sales", label: "Sales Report", icon: <BarChart3 size={13} /> },
  { id: "leads", label: "Lead Conversion", icon: <Users size={13} /> },
  { id: "revenue", label: "Revenue Trends", icon: <TrendingUp size={13} /> },
  { id: "team", label: "Salesperson", icon: <Target size={13} /> },
  { id: "retention", label: "Retention", icon: <RefreshCw size={13} /> },
  { id: "source", label: "Source Perf.", icon: <Layers size={13} /> },
  { id: "lost", label: "Lost Deals", icon: <AlertTriangle size={13} /> },
] as const;
type ReportTab = (typeof reportTabs)[number]["id"];

function ReportsPage() {
  const [activeTab, setActiveTab] = useState<ReportTab>("sales");
  const [dateRange, setDateRange] = useState("this_year");
  const [salesRep, setSalesRep] = useState("all");
  const [region, setRegion] = useState("all");

  function handleExportPDF() {
    toast.success("PDF export queued", {
      description: "Your report will download shortly.",
    });
  }
  function handleExportCSV() {
    toast.success("CSV export started", {
      description: "Data exported to clipboard.",
    });
  }
  function handleSchedule() {
    toast.info("Schedule report", {
      description: "Open the scheduling modal to configure.",
    });
  }

  return (
    <div className="space-y-5 pb-20 md:pb-4" data-ocid="reports.page">
      <PageHeader
        title="Reports & Analytics"
        description="Data-driven insights across your entire sales operation"
        actions={[
          {
            label: "Export PDF",
            onClick: handleExportPDF,
            icon: <FileText size={14} />,
            variant: "outline",
            "data-ocid": "reports.export_pdf.button",
          },
          {
            label: "Export CSV",
            onClick: handleExportCSV,
            icon: <Download size={14} />,
            variant: "outline",
            "data-ocid": "reports.export_csv.button",
          },
          {
            label: "Schedule Report",
            onClick: handleSchedule,
            icon: <Calendar size={14} />,
            "data-ocid": "reports.schedule.button",
          },
        ]}
      />

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center gap-3 pb-1">
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger
            className="h-8 w-40 text-xs"
            data-ocid="reports.date_range.select"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this_week">This Week</SelectItem>
            <SelectItem value="this_month">This Month</SelectItem>
            <SelectItem value="last_3_months">Last 3 Months</SelectItem>
            <SelectItem value="this_year">This Year</SelectItem>
            <SelectItem value="custom">Custom Range</SelectItem>
          </SelectContent>
        </Select>

        <Select value={salesRep} onValueChange={setSalesRep}>
          <SelectTrigger
            className="h-8 w-36 text-xs"
            data-ocid="reports.sales_rep.select"
          >
            <SelectValue placeholder="All Reps" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Reps</SelectItem>
            {mockTeamMembers.map((m) => (
              <SelectItem key={m.id} value={m.id}>
                {m.name.split(" ")[0]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger
            className="h-8 w-32 text-xs"
            data-ocid="reports.region.select"
          >
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="na">North America</SelectItem>
            <SelectItem value="eu">Europe</SelectItem>
            <SelectItem value="apac">APAC</SelectItem>
            <SelectItem value="mea">MEA</SelectItem>
          </SelectContent>
        </Select>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs gap-1"
            onClick={() => toast.info("Comparing to previous period")}
          >
            <RefreshCw size={12} />
            Compare period
          </Button>
        </div>
      </div>

      {/* Report Type Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as ReportTab)}
      >
        <TabsList className="h-9 gap-0.5 flex-wrap">
          {reportTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="h-7 text-xs gap-1.5 px-3"
              data-ocid={`reports.tab.${tab.id}.tab`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Report Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === "sales" && (
          <SalesReport salesRep={salesRep} region={region} />
        )}
        {activeTab === "leads" && <LeadConversionReport />}
        {activeTab === "revenue" && <RevenueTrendsReport />}
        {activeTab === "team" && <SalespersonReport />}
        {activeTab === "retention" && <CustomerRetentionReport />}
        {activeTab === "source" && <SourcePerformanceReport />}
        {activeTab === "lost" && <LostDealsReport />}
      </motion.div>
    </div>
  );
}

export default ReportsPage;
