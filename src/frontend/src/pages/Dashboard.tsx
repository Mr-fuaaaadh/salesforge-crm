import { KpiCard } from "@/components/shared/KpiCard";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  conversionChartData,
  getActivityFeed,
  revenueChartData,
  teamPerformanceData,
} from "@/lib/mock-data";
import { useCrmStore } from "@/store/crm-store";
import { format } from "date-fns";
import {
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Mail,
  Phone,
  Plus,
  Receipt,
  Send,
  Star,
  Target,
  TrendingUp,
  Trophy,
  UserPlus,
  Users2,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Funnel,
  FunnelChart,
  LabelList,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";

// ─── Greeting Helper ─────────────────────────────────────────────────────────
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

// ─── Activity Icons ───────────────────────────────────────────────────────────
const activityConfig: Record<
  string,
  { icon: React.ReactNode; bg: string; label: string }
> = {
  deal_won: {
    icon: <Trophy size={13} />,
    bg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    label: "Deal Won",
  },
  lead_created: {
    icon: <UserPlus size={13} />,
    bg: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    label: "Lead Added",
  },
  call_completed: {
    icon: <Phone size={13} />,
    bg: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
    label: "Call Done",
  },
  meeting_scheduled: {
    icon: <Calendar size={13} />,
    bg: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
    label: "Meeting",
  },
  deal_moved: {
    icon: <Briefcase size={13} />,
    bg: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    label: "Deal Moved",
  },
  email_sent: {
    icon: <Mail size={13} />,
    bg: "bg-teal-500/15 text-teal-600 dark:text-teal-400",
    label: "Email Sent",
  },
};

// ─── Quick Actions ────────────────────────────────────────────────────────────
const quickActions = [
  {
    label: "Add Lead",
    icon: <UserPlus size={18} />,
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    borderColor: "hover:border-blue-400/50",
    message: "Lead creation form opened",
    dataOcid: "dashboard.add_lead.button",
  },
  {
    label: "New Opportunity",
    icon: <Zap size={18} />,
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    borderColor: "hover:border-violet-400/50",
    message: "Opportunity creation opened",
    dataOcid: "dashboard.new_opportunity.button",
  },
  {
    label: "Schedule Meeting",
    icon: <Calendar size={18} />,
    iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    borderColor: "hover:border-indigo-400/50",
    message: "Calendar scheduler opened",
    dataOcid: "dashboard.schedule_meeting.button",
  },
  {
    label: "Send Proposal",
    icon: <Send size={18} />,
    iconBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    borderColor: "hover:border-teal-400/50",
    message: "Proposal builder opened",
    dataOcid: "dashboard.send_proposal.button",
  },
  {
    label: "Generate Invoice",
    icon: <Receipt size={18} />,
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    borderColor: "hover:border-amber-400/50",
    message: "Invoice generator opened",
    dataOcid: "dashboard.generate_invoice.button",
  },
];

// ─── Static derived chart data ────────────────────────────────────────────────
const monthlyDealData = [
  { month: "Nov", closed: 8, lost: 3, value: 185 },
  { month: "Dec", closed: 11, lost: 2, value: 241 },
  { month: "Jan", closed: 7, lost: 4, value: 198 },
  { month: "Feb", closed: 13, lost: 2, value: 267 },
  { month: "Mar", closed: 15, lost: 3, value: 312 },
  { month: "Apr", closed: 12, lost: 1, value: 289 },
];

const regionData = [
  { name: "North America", value: 412000, fill: "oklch(0.5 0.12 243)" },
  { name: "Europe", value: 278000, fill: "oklch(0.52 0.13 270)" },
  { name: "Asia Pacific", value: 156000, fill: "oklch(0.72 0.17 152)" },
  { name: "Middle East", value: 89000, fill: "oklch(0.72 0.15 84)" },
  { name: "LatAm", value: 41000, fill: "oklch(0.55 0.22 25)" },
];

const radarTeamData = [
  { metric: "Revenue", Alex: 98, Maria: 110, David: 59 },
  { metric: "Calls", Alex: 87, Maria: 64, David: 102 },
  { metric: "Meetings", Alex: 82, Maria: 110, David: 64 },
  { metric: "Conversion", Alex: 86, Maria: 100, David: 50 },
  { metric: "Deals", Alex: 80, Maria: 75, David: 50 },
];

const tooltipStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "0.75rem",
  fontSize: 12,
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function SummaryStatPill({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border/60 shadow-subtle">
      <span className={color}>{icon}</span>
      <span className="text-xs text-muted-foreground hidden sm:block">
        {label}:
      </span>
      <span className="text-xs font-semibold text-foreground">{value}</span>
    </div>
  );
}

function ChartCard({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={`p-5 border border-border/60 shadow-subtle hover:shadow-elevation transition-shadow ${className ?? ""}`}
    >
      <div className="mb-4">
        <h3 className="font-display font-semibold text-sm text-foreground">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      {children}
    </Card>
  );
}

// ─── Custom Pie Label ─────────────────────────────────────────────────────────
function PieLabel({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  name: string;
  percent: number;
}) {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 28;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.05) return null;
  return (
    <text
      x={x}
      y={y}
      fill="var(--muted-foreground)"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={10}
    >
      {name.split(" ")[0]} {(percent * 100).toFixed(0)}%
    </text>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
function DashboardPage() {
  const leads = useCrmStore((s) => s.leads);
  const deals = useCrmStore((s) => s.deals);
  const tasks = useCrmStore((s) => s.tasks);
  const teamMembers = useCrmStore((s) => s.teamMembers);
  const overdueTasks = useCrmStore((s) => s.overdueTasks());

  const qualifiedLeads = leads.filter(
    (l) =>
      l.status === "Qualified" ||
      l.status === "Proposal" ||
      l.status === "Negotiation",
  ).length;
  const activeDeals = deals.filter(
    (d) => d.stage !== "Won" && d.stage !== "Lost",
  ).length;
  const closedDeals = deals.filter((d) => d.stage === "Won").length;
  const totalRevenue = deals
    .filter((d) => d.stage === "Won")
    .reduce((s, d) => s + d.value, 0);
  const pendingFollowUps = tasks.filter(
    (t) => t.type === "Follow-up" && t.status !== "Completed",
  ).length;
  const avgConversion =
    teamMembers.reduce((s, m) => s + m.conversionRate, 0) /
    (teamMembers.length || 1);
  const activityFeed = getActivityFeed();

  const kpiCards = [
    {
      title: "Total Leads",
      value: leads.length,
      icon: <Users2 size={18} />,
      trend: 12,
      trendLabel: "vs last month",
      sparklineData: [45, 52, 48, 61, 58, 72, leads.length],
    },
    {
      title: "Qualified Leads",
      value: qualifiedLeads,
      icon: <Target size={18} />,
      trend: 8,
      trendLabel: "conversion improving",
      sparklineData: [18, 22, 19, 28, 24, 31, qualifiedLeads],
    },
    {
      title: "Active Deals",
      value: activeDeals,
      icon: <Briefcase size={18} />,
      trend: 5,
      trendLabel: "in pipeline",
      sparklineData: [8, 10, 11, 9, 13, 12, activeDeals],
    },
    {
      title: "Closed Deals",
      value: closedDeals,
      icon: <CheckCircle2 size={18} />,
      trend: 18,
      trendLabel: "this month",
      sparklineData: [2, 3, 4, 2, 5, 4, closedDeals],
    },
    {
      title: "Revenue (Month)",
      value: `$${(totalRevenue / 1000).toFixed(0)}K`,
      icon: <DollarSign size={18} />,
      trend: 22,
      trendLabel: "$289K this month",
      sparklineData: [185, 241, 198, 267, 312, 289],
    },
    {
      title: "Revenue Growth",
      value: "22%",
      icon: <TrendingUp size={18} />,
      trend: 22,
      trendLabel: "month over month",
      sparklineData: [8, 12, 10, 18, 15, 22],
    },
    {
      title: "Team Performance",
      value: `${avgConversion.toFixed(0)}%`,
      icon: <Award size={18} />,
      trend: 3,
      trendLabel: "avg conversion rate",
      sparklineData: [28, 29, 30, 31, 31, Math.round(avgConversion)],
    },
    {
      title: "Pending Follow-ups",
      value: pendingFollowUps,
      icon: <Clock size={18} />,
      trend: -5,
      trendLabel: "due this week",
      sparklineData: [12, 10, 14, 11, 9, pendingFollowUps],
    },
  ];

  return (
    <div className="space-y-6 pb-16 md:pb-0" data-ocid="dashboard.page">
      {/* ── Hero Header ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl overflow-hidden border border-border/60 bg-card shadow-subtle"
      >
        {/* Background gradient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 90% 50%, oklch(0.5 0.12 243 / 0.08), transparent)",
          }}
        />
        <div className="relative px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <UserAvatar name="Alex Rivera" size="lg" />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-display font-bold text-xl text-foreground">
                  {getGreeting()}, Alex 👋
                </h1>
                <Badge
                  variant="secondary"
                  className="text-[10px] font-medium h-5"
                >
                  <Star size={9} className="mr-1 fill-current" />
                  Senior AE
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                {format(new Date(), "EEEE, MMMM d, yyyy")} · April is looking
                strong 🚀
              </p>
            </div>
          </div>

          {/* Summary pills */}
          <div className="flex flex-wrap gap-2">
            <SummaryStatPill
              label="Pipeline"
              value={`$${(
                deals
                  .filter((d) => d.stage !== "Won" && d.stage !== "Lost")
                  .reduce((s, d) => s + d.value, 0) / 1000
              ).toFixed(0)}K`}
              icon={<Briefcase size={13} />}
              color="text-primary"
            />
            <SummaryStatPill
              label="Overdue"
              value={overdueTasks.length}
              icon={<Clock size={13} />}
              color={
                overdueTasks.length > 0
                  ? "text-destructive"
                  : "text-muted-foreground"
              }
            />
            <Button
              size="sm"
              className="h-8 rounded-full"
              onClick={() => toast.success("Opening lead form…")}
              data-ocid="dashboard.add_lead.header_button"
            >
              <Plus size={14} className="mr-1" />
              Add Lead
            </Button>
          </div>
        </div>
      </motion.div>

      {/* ── KPI Cards ───────────────────────────────────────────────────────── */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        data-ocid="dashboard.kpi.section"
      >
        {kpiCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            <KpiCard
              title={card.title}
              value={card.value}
              icon={card.icon}
              trend={card.trend}
              trendLabel={card.trendLabel}
              sparklineData={card.sparklineData}
              data-ocid={`dashboard.kpi.${i + 1}.card`}
            />
          </motion.div>
        ))}
      </div>

      {/* ── Analytics Charts 2×3 Grid ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        data-ocid="dashboard.charts.section"
      >
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-display font-semibold text-base text-foreground">
            Analytics Overview
          </h2>
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            Last 6 months
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Row 1: Revenue (2/3) + Funnel (1/3) */}
          <ChartCard
            title="Revenue Over Time"
            subtitle="Actual vs target ($K)"
            className="lg:col-span-2"
          >
            <ResponsiveContainer width="100%" height={210}>
              <AreaChart
                data={revenueChartData}
                margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
              >
                <defs>
                  <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="oklch(0.5 0.12 243)"
                      stopOpacity={0.25}
                    />
                    <stop
                      offset="100%"
                      stopColor="oklch(0.5 0.12 243)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  strokeOpacity={0.4}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v: number) => `$${v / 1000}K`}
                />
                <Tooltip
                  formatter={(v: number) => [`$${v.toLocaleString()}`, ""]}
                  contentStyle={tooltipStyle}
                />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: 11 }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="oklch(0.5 0.12 243)"
                  strokeWidth={2.5}
                  fill="url(#revGradient)"
                  dot={{ fill: "oklch(0.5 0.12 243)", r: 3 }}
                  name="Revenue"
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="var(--muted-foreground)"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  dot={false}
                  name="Target"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Pipeline Funnel"
            subtitle="Lead-to-close conversion"
          >
            <ResponsiveContainer width="100%" height={210}>
              <FunnelChart>
                <Funnel
                  dataKey="count"
                  data={conversionChartData}
                  isAnimationActive
                >
                  <LabelList
                    position="right"
                    fill="var(--foreground)"
                    stroke="none"
                    dataKey="stage"
                    style={{ fontSize: 11 }}
                  />
                </Funnel>
                <Tooltip contentStyle={tooltipStyle} />
              </FunnelChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Row 2: Conversion Bar + Monthly Deals Composed + Region Pie */}
          <ChartCard title="Conversion Rate" subtitle="By lead source category">
            <ResponsiveContainer width="100%" height={210}>
              <BarChart
                data={[
                  { source: "Website", rate: 34, leads: 89 },
                  { source: "LinkedIn", rate: 28, leads: 64 },
                  { source: "Referral", rate: 52, leads: 41 },
                  { source: "Partner", rate: 45, leads: 38 },
                  { source: "Event", rate: 19, leads: 28 },
                  { source: "Cold", rate: 11, leads: 56 },
                ]}
                margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
              >
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="oklch(0.52 0.13 270)"
                      stopOpacity={0.9}
                    />
                    <stop
                      offset="100%"
                      stopColor="oklch(0.52 0.13 270)"
                      stopOpacity={0.5}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  strokeOpacity={0.4}
                  vertical={false}
                />
                <XAxis
                  dataKey="source"
                  tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v: number) => `${v}%`}
                />
                <Tooltip
                  formatter={(v: number) => [`${v}%`, "Conversion"]}
                  contentStyle={tooltipStyle}
                />
                <Bar
                  dataKey="rate"
                  fill="url(#barGradient)"
                  radius={[4, 4, 0, 0]}
                  name="Conversion %"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Monthly Deal Performance"
            subtitle="Closed deals + value trend"
          >
            <ResponsiveContainer width="100%" height={210}>
              <ComposedChart
                data={monthlyDealData}
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
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  yAxisId="left"
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v: number) => `$${v}K`}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: 11 }}
                />
                <Bar
                  yAxisId="left"
                  dataKey="closed"
                  fill="oklch(0.72 0.17 152)"
                  radius={[3, 3, 0, 0]}
                  name="Closed"
                  opacity={0.85}
                />
                <Bar
                  yAxisId="left"
                  dataKey="lost"
                  fill="oklch(0.55 0.22 25)"
                  radius={[3, 3, 0, 0]}
                  name="Lost"
                  opacity={0.7}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="value"
                  stroke="oklch(0.5 0.12 243)"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "oklch(0.5 0.12 243)" }}
                  name="Value $K"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Region-wise Sales" subtitle="Revenue by geography">
            <ResponsiveContainer width="100%" height={210}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={75}
                  innerRadius={40}
                  dataKey="value"
                  labelLine={false}
                  label={PieLabel}
                >
                  {regionData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v: number) => [`$${v.toLocaleString()}`, ""]}
                  contentStyle={tooltipStyle}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
              {regionData.map((r) => (
                <span
                  key={r.name}
                  className="flex items-center gap-1 text-[10px] text-muted-foreground"
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block shrink-0"
                    style={{ background: r.fill }}
                  />
                  {r.name.split(" ")[0]}
                </span>
              ))}
            </div>
          </ChartCard>
        </div>

        {/* Row 3: Team Performance Radar + Performance Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <ChartCard title="Team Productivity" subtitle="Multi-metric radar">
            <ResponsiveContainer width="100%" height={210}>
              <RadarChart data={radarTeamData} cx="50%" cy="50%">
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                />
                <PolarRadiusAxis
                  tick={{ fontSize: 9, fill: "var(--muted-foreground)" }}
                  axisLine={false}
                />
                <Radar
                  name="Alex"
                  dataKey="Alex"
                  stroke="oklch(0.5 0.12 243)"
                  fill="oklch(0.5 0.12 243)"
                  fillOpacity={0.2}
                  strokeWidth={1.5}
                />
                <Radar
                  name="Maria"
                  dataKey="Maria"
                  stroke="oklch(0.72 0.17 152)"
                  fill="oklch(0.72 0.17 152)"
                  fillOpacity={0.2}
                  strokeWidth={1.5}
                />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: 11 }}
                />
                <Tooltip contentStyle={tooltipStyle} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Team Revenue vs Target"
            subtitle="Revenue ($K) this month"
            className="lg:col-span-2"
          >
            <ResponsiveContainer width="100%" height={210}>
              <BarChart
                data={teamPerformanceData}
                margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
                layout="horizontal"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  strokeOpacity={0.4}
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v: number) => `$${v}K`}
                />
                <Tooltip
                  formatter={(v: number) => [`$${v}K`, ""]}
                  contentStyle={tooltipStyle}
                />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: 11 }}
                />
                <Bar
                  dataKey="revenue"
                  name="Revenue"
                  radius={[4, 4, 0, 0]}
                  fill="oklch(0.5 0.12 243)"
                  opacity={0.9}
                />
                <Bar
                  dataKey="target"
                  name="Target"
                  radius={[4, 4, 0, 0]}
                  fill="var(--muted)"
                  opacity={0.6}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </motion.div>

      {/* ── Bottom Row: Activity + Quick Actions ─────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Activity Timeline */}
        <Card
          className="lg:col-span-3 p-5 border border-border/60 shadow-subtle"
          data-ocid="dashboard.activity.section"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-display font-semibold text-sm text-foreground">
                Recent Activity
              </h3>
              <p className="text-xs text-muted-foreground">
                Latest team actions
              </p>
            </div>
            <Badge variant="secondary" className="text-[10px]">
              Live
            </Badge>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-border/60" />

            <div className="space-y-1">
              {activityFeed.map((item, i) => {
                const cfg = activityConfig[item.type] ?? {
                  icon: <FileText size={13} />,
                  bg: "bg-muted text-muted-foreground",
                  label: "Activity",
                };
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    className="flex items-start gap-3 py-2.5 pl-1"
                    data-ocid={`dashboard.activity.item.${i + 1}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${cfg.bg}`}
                    >
                      {cfg.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-foreground leading-snug truncate">
                            {item.description}
                          </p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">
                            <span className="font-medium">{item.user}</span>
                            {item.relatedTo && <> · {item.relatedTo}</>}
                          </p>
                        </div>
                        <span className="text-[10px] text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">
                          {format(new Date(item.timestamp), "h:mm a")}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card
          className="lg:col-span-2 p-5 border border-border/60 shadow-subtle"
          data-ocid="dashboard.quick_actions.section"
        >
          <div className="mb-5">
            <h3 className="font-display font-semibold text-sm text-foreground">
              Quick Actions
            </h3>
            <p className="text-xs text-muted-foreground">
              Common tasks at a glance
            </p>
          </div>

          <div className="space-y-2">
            {quickActions.map((action, i) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.07 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  toast.success(action.message, { duration: 3000 })
                }
                data-ocid={action.dataOcid}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-card hover:bg-muted/50 transition-smooth cursor-pointer text-left ${action.borderColor}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${action.iconBg}`}
                >
                  {action.icon}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {action.label}
                </span>
                <Plus
                  size={14}
                  className="ml-auto text-muted-foreground opacity-50"
                />
              </motion.button>
            ))}
          </div>

          {overdueTasks.length > 0 && (
            <div className="mt-4 p-3 rounded-xl bg-destructive/8 border border-destructive/20">
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-destructive shrink-0" />
                <p className="text-xs font-medium text-destructive">
                  {overdueTasks.length} overdue task
                  {overdueTasks.length > 1 ? "s" : ""} need attention
                </p>
              </div>
            </div>
          )}

          {/* Top performer spotlight */}
          <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-2">
              🏆 Top Performer
            </p>
            {teamMembers.length > 0 && (
              <div className="flex items-center gap-2">
                <UserAvatar
                  name={
                    [...teamMembers].sort(
                      (a, b) => b.totalRevenue - a.totalRevenue,
                    )[0].name
                  }
                  size="sm"
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground truncate">
                    {
                      [...teamMembers].sort(
                        (a, b) => b.totalRevenue - a.totalRevenue,
                      )[0].name
                    }
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    $
                    {[...teamMembers]
                      .sort((a, b) => b.totalRevenue - a.totalRevenue)[0]
                      .totalRevenue.toLocaleString()}{" "}
                    revenue
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;
