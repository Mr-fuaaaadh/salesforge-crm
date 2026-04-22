import { KpiCard } from "@/components/shared/KpiCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTeamMetrics, mockTeamMembers } from "@/lib/mock-data";
import type { TeamMember } from "@/types";
import {
  Award,
  BarChart2,
  Download,
  LayoutGrid,
  List,
  Mail,
  Phone,
  Star,
  Target,
  TrendingUp,
  Trophy,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ViewMode = "cards" | "leaderboard" | "table";

const INCENTIVE_BADGES = [
  {
    key: "top-closer",
    label: "Top Closer",
    icon: Trophy,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    selector: (m: TeamMember[]) =>
      m.reduce((a, b) =>
        a.dealsClosedThisMonth > b.dealsClosedThisMonth ? a : b,
      ),
  },
  {
    key: "most-calls",
    label: "Most Calls",
    icon: Phone,
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/20",
    selector: (m: TeamMember[]) =>
      m.reduce((a, b) => (a.callsMade > b.callsMade ? a : b)),
  },
  {
    key: "best-conversion",
    label: "Best Conversion",
    icon: TrendingUp,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    selector: (m: TeamMember[]) =>
      m.reduce((a, b) => (a.conversionRate > b.conversionRate ? a : b)),
  },
  {
    key: "rising-star",
    label: "Rising Star",
    icon: Star,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    selector: (m: TeamMember[]) =>
      m.find((x) => x.name === "Aisha Patel") ?? m[0],
  },
];

function targetColor(pct: number) {
  if (pct >= 80) return "bg-emerald-500";
  if (pct >= 50) return "bg-amber-500";
  return "bg-destructive";
}

function targetTextColor(pct: number) {
  if (pct >= 80) return "text-emerald-600 dark:text-emerald-400";
  if (pct >= 50) return "text-amber-600 dark:text-amber-400";
  return "text-destructive";
}

function memberTrendData(member: TeamMember) {
  const base = Math.round(member.totalRevenue / 6);
  return [
    { month: "Nov", revenue: Math.round(base * 0.7) },
    { month: "Dec", revenue: Math.round(base * 0.9) },
    { month: "Jan", revenue: Math.round(base * 0.8) },
    { month: "Feb", revenue: Math.round(base * 1.1) },
    { month: "Mar", revenue: Math.round(base * 1.3) },
    { month: "Apr", revenue: Math.round(base * 1.0) },
  ];
}

const MEMBER_DEALS: Record<string, string[]> = {
  tm1: [
    "TechNova Enterprise Suite",
    "Summit CRM Rollout",
    "GreenEnergy ESG",
    "Pinpoint Analytics Pro",
  ],
  tm2: [
    "Meridian Integration",
    "Nordic Capital Platform",
    "ClearStream Media Hub",
    "HealthFirst HIPAA",
  ],
  tm3: [
    "BrightPath License",
    "Apex Logistics Suite",
    "Harbor Insurance Platform",
  ],
  tm4: [
    "FutureLabs Platform",
    "Gulf Tech Enterprise",
    "Paris Consulting Suite",
  ],
  tm5: [
    "GreenEnergy ESG Toolkit",
    "Pinpoint Analytics Pro",
    "Summit CRM Rollout",
  ],
  tm6: [
    "Vertex Software Growth",
    "Meridian Integration",
    "Nordic Capital Platform",
    "ClearStream Media",
    "Apex Logistics",
  ],
  tm7: [],
  tm8: ["BrightPath License", "Harbor Insurance Platform"],
};

const RANK_STYLES = [
  {
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-300/60 dark:border-amber-700/40",
    text: "text-amber-600 dark:text-amber-400",
  },
  {
    bg: "bg-slate-50 dark:bg-slate-900/20",
    border: "border-border/60",
    text: "text-slate-500 dark:text-slate-400",
  },
  {
    bg: "bg-orange-50 dark:bg-orange-950/20",
    border: "border-orange-300/60 dark:border-orange-700/40",
    text: "text-orange-600 dark:text-orange-400",
  },
];

// --- Member Profile Modal ---
function MemberProfileModal({
  member,
  rank,
  open,
  onClose,
}: {
  member: TeamMember;
  rank: number;
  open: boolean;
  onClose: () => void;
}) {
  const trendData = memberTrendData(member);
  const targetPct = Math.min(
    100,
    Math.round((member.totalRevenue / member.monthlyTarget) * 100),
  );
  const deals = MEMBER_DEALS[member.id] ?? [];

  const activities = [
    {
      action: "Closed deal",
      detail: deals[0] ?? "No recent deal",
      time: "2 days ago",
    },
    {
      action: "Discovery call",
      detail: "40-min call completed",
      time: "3 days ago",
    },
    {
      action: "Proposal sent",
      detail: "Q2 enterprise proposal",
      time: "5 days ago",
    },
    {
      action: "Meeting held",
      detail: "Onboarding session",
      time: "1 week ago",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto"
        data-ocid="team.profile.dialog"
      >
        <DialogHeader>
          <DialogTitle className="sr-only">Member Profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <UserAvatar
                name={member.name}
                size="lg"
                online
                className="w-16 h-16 text-lg"
              />
              <span className="absolute -top-2 -right-2 text-lg">
                {rank === 1
                  ? "🥇"
                  : rank === 2
                    ? "🥈"
                    : rank === 3
                      ? "🥉"
                      : null}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-display font-bold text-xl text-foreground">
                  {member.name}
                </h2>
                <Badge variant="outline" className="text-xs">
                  #{rank}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Mail size={11} />
                  {member.email}
                </span>
              </div>
            </div>
            <Badge
              className={`text-xs ${targetPct >= 80 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"}`}
              variant="secondary"
            >
              {targetPct}% Target
            </Badge>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              {
                label: "Revenue",
                value: `$${(member.totalRevenue / 1000).toFixed(0)}K`,
                icon: TrendingUp,
                color: "text-primary",
              },
              {
                label: "Deals Closed",
                value: member.dealsClosedThisMonth,
                icon: Trophy,
                color: "text-amber-500",
              },
              {
                label: "Calls Made",
                value: member.callsMade,
                icon: Phone,
                color: "text-emerald-600 dark:text-emerald-400",
              },
              {
                label: "Meetings",
                value: member.meetingsHeld,
                icon: Users,
                color: "text-violet-600 dark:text-violet-400",
              },
              {
                label: "Conv. Rate",
                value: `${member.conversionRate}%`,
                icon: Target,
                color: "text-accent",
              },
              {
                label: "Commission",
                value: `$${member.commission.toLocaleString()}`,
                icon: Award,
                color: "text-emerald-600 dark:text-emerald-400",
              },
            ].map(({ label, value, icon: Icon, color }) => (
              <Card key={label} className="p-3 border border-border/60">
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={13} className={color} />
                  <span className="text-[11px] text-muted-foreground">
                    {label}
                  </span>
                </div>
                <p className="font-display font-bold text-lg text-foreground leading-none">
                  {value}
                </p>
              </Card>
            ))}
          </div>

          {/* Monthly Target Progress */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-foreground">
                Monthly Target Progress
              </span>
              <span
                className={`font-semibold font-mono ${targetTextColor(targetPct)}`}
              >
                {targetPct}%
              </span>
            </div>
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${targetPct}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`h-full rounded-full ${targetColor(targetPct)}`}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>${(member.totalRevenue / 1000).toFixed(0)}K achieved</span>
              <span>${(member.monthlyTarget / 1000).toFixed(0)}K target</span>
            </div>
          </div>

          {/* Revenue Trend Chart */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              6-Month Revenue Trend
            </h4>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart
                data={trendData}
                margin={{ top: 4, right: 8, bottom: 0, left: -20 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  strokeOpacity={0.5}
                  vertical={false}
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
                  tickFormatter={(v) => `$${v / 1000}K`}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.75rem",
                    fontSize: 12,
                  }}
                  formatter={(v: number) => [
                    `$${(v / 1000).toFixed(0)}K`,
                    "Revenue",
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="oklch(0.5 0.12 243)"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Commission Breakdown */}
          <Card className="p-4 border border-border/60 bg-muted/30">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Commission Breakdown
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Base commission (5%)
                </span>
                <span className="font-mono font-semibold">
                  ${Math.round(member.totalRevenue * 0.035).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Performance bonus</span>
                <span className="font-mono font-semibold">
                  ${Math.round(member.commission * 0.3).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t border-border/60 pt-2">
                <span className="font-semibold text-foreground">
                  Total Earned
                </span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  ${member.commission.toLocaleString()}
                </span>
              </div>
            </div>
          </Card>

          {/* Activity Timeline */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Recent Activity
            </h4>
            <div className="space-y-3">
              {activities.map((a, i) => (
                <div key={`${member.id}-activity-${i}`} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    {i < activities.length - 1 && (
                      <div className="w-px flex-1 bg-border/60 mt-1" />
                    )}
                  </div>
                  <div className="pb-3 flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium">
                      {a.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{a.detail}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assigned Deals */}
          {deals.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Assigned Deals
              </h4>
              <div className="space-y-2">
                {deals.map((deal) => (
                  <div
                    key={deal}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/50 border border-border/40"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-foreground">{deal}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// --- Cards View ---
function CardsView({
  sorted,
  onSelect,
}: { sorted: TeamMember[]; onSelect: (m: TeamMember, rank: number) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {sorted.map((member, i) => {
        const targetPct = Math.min(
          100,
          Math.round((member.totalRevenue / member.monthlyTarget) * 100),
        );
        const rankStyle = RANK_STYLES[i] ?? {
          bg: "",
          border: "border-border/60",
          text: "text-muted-foreground",
        };
        return (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3, scale: 1.01 }}
            data-ocid={`team.member.${i + 1}.card`}
          >
            <Card
              className={`p-4 border cursor-pointer transition-all hover:shadow-elevation group ${rankStyle.border}`}
              onClick={() => onSelect(member, i + 1)}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="relative">
                  <UserAvatar name={member.name} size="md" online />
                  {i === 0 && (
                    <span className="absolute -top-2 -right-1.5 text-base">
                      🥇
                    </span>
                  )}
                  {i === 1 && (
                    <span className="absolute -top-2 -right-1.5 text-base">
                      🥈
                    </span>
                  )}
                  {i === 2 && (
                    <span className="absolute -top-2 -right-1.5 text-base">
                      🥉
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">
                    {member.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {member.role}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={`text-[10px] shrink-0 font-mono ${rankStyle.text}`}
                >
                  #{i + 1}
                </Badge>
              </div>

              {/* Target */}
              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Monthly Target</span>
                  <span
                    className={`font-mono font-semibold ${targetTextColor(targetPct)}`}
                  >
                    {targetPct}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${targetPct}%` }}
                    transition={{ duration: 0.7, delay: i * 0.06 }}
                    className={`h-full rounded-full ${targetColor(targetPct)}`}
                  />
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="font-mono font-semibold text-foreground">
                    ${(member.totalRevenue / 1000).toFixed(0)}K
                  </span>
                  <span className="text-muted-foreground">
                    / ${(member.monthlyTarget / 1000).toFixed(0)}K
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/60">
                <div className="text-center">
                  <p className="font-semibold text-sm text-foreground">
                    {member.dealsClosedThisMonth}
                  </p>
                  <p className="text-[10px] text-muted-foreground">Deals</p>
                </div>
                <div className="text-center border-x border-border/60">
                  <p className="font-semibold text-sm text-foreground">
                    {member.callsMade}
                  </p>
                  <p className="text-[10px] text-muted-foreground">Calls</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm text-foreground">
                    {member.conversionRate}%
                  </p>
                  <p className="text-[10px] text-muted-foreground">Conv.</p>
                </div>
              </div>

              {/* Commission */}
              <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-border/60">
                <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <Award size={10} className="text-emerald-500" /> Commission
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  ${member.commission.toLocaleString()}
                </span>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

// --- Leaderboard View ---
function LeaderboardView({
  sorted,
  onSelect,
}: { sorted: TeamMember[]; onSelect: (m: TeamMember, rank: number) => void }) {
  const maxRevenue = sorted[0]?.totalRevenue ?? 1;
  return (
    <Card className="border border-border/60 overflow-hidden">
      <CardHeader className="pb-3 border-b border-border/60 bg-muted/20">
        <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Trophy size={15} className="text-amber-500" /> Revenue Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border/60">
          {sorted.map((member, i) => {
            const targetPct = Math.min(
              100,
              Math.round((member.totalRevenue / member.monthlyTarget) * 100),
            );
            const barPct = Math.round((member.totalRevenue / maxRevenue) * 100);
            const rankStyle = RANK_STYLES[i] ?? {
              bg: "",
              border: "",
              text: "text-muted-foreground",
            };
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => onSelect(member, i + 1)}
                data-ocid={`team.leaderboard.${i + 1}.row`}
                className={`flex items-center gap-4 px-5 py-3.5 cursor-pointer hover:bg-muted/40 transition-colors ${i < 3 ? rankStyle.bg : ""}`}
              >
                {/* Rank */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono shrink-0 ${i < 3 ? `${rankStyle.bg} border ${rankStyle.border} ${rankStyle.text}` : "bg-muted text-muted-foreground"}`}
                >
                  {i + 1}
                </div>

                {/* Avatar + Name */}
                <div className="flex items-center gap-3 w-40 shrink-0">
                  <UserAvatar name={member.name} size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {member.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {member.role.split(" ")[0]}
                    </p>
                  </div>
                </div>

                {/* Animated Bar */}
                <div className="flex-1 hidden sm:block">
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${barPct}%` }}
                      transition={{ duration: 0.7, delay: i * 0.05 + 0.2 }}
                      className={`h-full rounded-full ${i < 3 ? "bg-primary" : "bg-muted-foreground/40"}`}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-5 gap-4 shrink-0 text-right hidden md:grid">
                  <div>
                    <p className="text-sm font-mono font-bold text-foreground">
                      ${(member.totalRevenue / 1000).toFixed(0)}K
                    </p>
                    <p className="text-[9px] text-muted-foreground">Revenue</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono font-bold text-foreground">
                      {member.dealsClosedThisMonth}
                    </p>
                    <p className="text-[9px] text-muted-foreground">Deals</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono font-bold text-foreground">
                      {member.callsMade}
                    </p>
                    <p className="text-[9px] text-muted-foreground">Calls</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono font-bold text-foreground">
                      {member.meetingsHeld}
                    </p>
                    <p className="text-[9px] text-muted-foreground">Meetings</p>
                  </div>
                  <div>
                    <p
                      className={`text-sm font-mono font-bold ${targetTextColor(targetPct)}`}
                    >
                      {member.conversionRate}%
                    </p>
                    <p className="text-[9px] text-muted-foreground">Conv.</p>
                  </div>
                </div>

                {/* Commission */}
                <div className="shrink-0 text-right hidden lg:block">
                  <p className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    ${member.commission.toLocaleString()}
                  </p>
                  <p className="text-[9px] text-muted-foreground">Commission</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

// --- Table View ---
function TableView({
  sorted,
  onSelect,
}: { sorted: TeamMember[]; onSelect: (m: TeamMember, rank: number) => void }) {
  return (
    <Card className="border border-border/60 overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 border-b border-border/60 hover:bg-muted/30">
              <TableHead className="text-xs font-semibold text-muted-foreground w-12">
                Rank
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground">
                Member
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground text-right">
                Revenue
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground text-right">
                Deals
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground text-right">
                Calls
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground text-right">
                Meetings
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground text-right">
                Conv. Rate
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground text-right">
                Target %
              </TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground text-right">
                Commission
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((member, i) => {
              const targetPct = Math.min(
                100,
                Math.round((member.totalRevenue / member.monthlyTarget) * 100),
              );
              return (
                <TableRow
                  key={member.id}
                  data-ocid={`team.table.${i + 1}.row`}
                  className="cursor-pointer hover:bg-muted/40 transition-colors"
                  onClick={() => onSelect(member, i + 1)}
                >
                  <TableCell>
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      {i === 0
                        ? "🥇"
                        : i === 1
                          ? "🥈"
                          : i === 2
                            ? "🥉"
                            : `#${i + 1}`}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <UserAvatar name={member.name} size="sm" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {member.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-mono font-bold text-sm">
                    ${(member.totalRevenue / 1000).toFixed(0)}K
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    {member.dealsClosedThisMonth}
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    {member.callsMade}
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    {member.meetingsHeld}
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    {member.conversionRate}%
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`text-xs font-mono font-bold ${targetTextColor(targetPct)}`}
                    >
                      {targetPct}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm text-emerald-600 dark:text-emerald-400 font-bold">
                    ${member.commission.toLocaleString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}

// --- Main Page ---
function TeamPage() {
  const [view, setView] = useState<ViewMode>("cards");
  const [selected, setSelected] = useState<{
    member: TeamMember;
    rank: number;
  } | null>(null);

  const sorted = [...mockTeamMembers].sort(
    (a, b) => b.totalRevenue - a.totalRevenue,
  );
  const metrics = getTeamMetrics(mockTeamMembers);

  const commissionChartData = sorted.map((m) => ({
    name: m.name.split(" ")[0],
    earned: m.commission,
    target: Math.round(m.monthlyTarget * 0.05),
  }));

  const kpis = [
    {
      title: "Total Revenue",
      value: `$${(metrics.totalRevenue / 1000).toFixed(0)}K`,
      icon: <TrendingUp size={16} />,
      trend: 12,
      trendLabel: "vs last month",
      sparklineData: [185, 241, 198, 267, 312, 289],
      ocid: "team.kpi.revenue",
    },
    {
      title: "Deals Closed",
      value: metrics.totalDeals,
      icon: <Trophy size={16} />,
      trend: 8,
      trendLabel: "this month",
      sparklineData: [12, 18, 14, 22, 19, 20],
      ocid: "team.kpi.deals",
    },
    {
      title: "Avg Conversion",
      value: `${metrics.avgConversionRate.toFixed(1)}%`,
      icon: <Target size={16} />,
      trend: 3,
      trendLabel: "above benchmark",
      sparklineData: [28, 32, 27, 30, 34, 29],
      ocid: "team.kpi.conversion",
    },
    {
      title: "Total Calls",
      value: metrics.totalCalls,
      icon: <Phone size={16} />,
      trend: -2,
      trendLabel: "vs last week",
      sparklineData: [520, 480, 610, 590, 640, 752],
      ocid: "team.kpi.calls",
    },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      {/* Page Header */}
      <PageHeader
        title="Sales Team"
        description={`${mockTeamMembers.length} members · $${(metrics.totalRevenue / 1000).toFixed(0)}K total revenue`}
        actions={[
          {
            label: "Export Report",
            onClick: () => {},
            icon: <Download size={14} />,
            variant: "outline",
            "data-ocid": "team.export_button",
          },
          {
            label: "Invite Member",
            onClick: () => {},
            icon: <UserPlus size={14} />,
            "data-ocid": "team.invite_button",
          },
        ]}
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.ocid}
            title={kpi.title}
            value={kpi.value}
            icon={kpi.icon}
            trend={kpi.trend}
            trendLabel={kpi.trendLabel}
            sparklineData={kpi.sparklineData}
            data-ocid={kpi.ocid}
          />
        ))}
      </div>

      {/* Incentives Board */}
      <Card className="p-4 border border-border/60">
        <div className="flex items-center gap-2 mb-4">
          <Zap size={15} className="text-amber-500" />
          <h3 className="font-display font-semibold text-sm text-foreground">
            Incentives Board
          </h3>
          <Badge variant="secondary" className="text-[10px]">
            This Month
          </Badge>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {INCENTIVE_BADGES.map(
            ({ key, label, icon: Icon, color, bg, border, selector }) => {
              const winner = selector(mockTeamMembers);
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  data-ocid={`team.incentive.${key}`}
                  className={`flex flex-col gap-2 p-3 rounded-xl border ${bg} ${border}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${bg} border ${border}`}
                  >
                    <Icon size={15} className={color} />
                  </div>
                  <div>
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-wide ${color}`}
                    >
                      {label}
                    </p>
                    <p className="text-sm font-bold text-foreground leading-tight">
                      {winner.name.split(" ")[0]}
                    </p>
                  </div>
                </motion.div>
              );
            },
          )}
        </div>
      </Card>

      {/* View Toggle + Views */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-border/60 bg-muted/30 p-1 gap-0.5">
            {(["cards", "leaderboard", "table"] as ViewMode[]).map((v) => {
              const Icon =
                v === "cards"
                  ? LayoutGrid
                  : v === "leaderboard"
                    ? BarChart2
                    : List;
              const label = v.charAt(0).toUpperCase() + v.slice(1);
              return (
                <button
                  key={v}
                  type="button"
                  data-ocid={`team.view.${v}.toggle`}
                  onClick={() => setView(v)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view === v ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <Icon size={13} />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {view === "cards" && (
          <CardsView
            sorted={sorted}
            onSelect={(m, r) => setSelected({ member: m, rank: r })}
          />
        )}
        {view === "leaderboard" && (
          <LeaderboardView
            sorted={sorted}
            onSelect={(m, r) => setSelected({ member: m, rank: r })}
          />
        )}
        {view === "table" && (
          <TableView
            sorted={sorted}
            onSelect={(m, r) => setSelected({ member: m, rank: r })}
          />
        )}
      </div>

      {/* Commission Tracker */}
      <Card className="p-5 border border-border/60">
        <div className="flex items-center gap-2 mb-4">
          <Award size={15} className="text-primary" />
          <h3 className="font-display font-semibold text-sm text-foreground">
            Commission Tracker
          </h3>
          <Badge variant="secondary" className="text-[10px]">
            April 2026
          </Badge>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={commissionChartData}
            margin={{ top: 4, right: 8, bottom: 0, left: -16 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              strokeOpacity={0.5}
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
              tickFormatter={(v) => `$${v / 1000}K`}
            />
            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.75rem",
                fontSize: 12,
              }}
              formatter={(v: number) => [`$${v.toLocaleString()}`]}
            />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar
              dataKey="target"
              fill="oklch(0.85 0.015 243)"
              radius={[3, 3, 0, 0]}
              name="Target"
            />
            <Bar
              dataKey="earned"
              fill="oklch(0.62 0.18 152)"
              radius={[3, 3, 0, 0]}
              name="Earned"
            />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Monthly Targets Overview */}
      <Card className="p-5 border border-border/60">
        <div className="flex items-center gap-2 mb-4">
          <Target size={15} className="text-primary" />
          <h3 className="font-display font-semibold text-sm text-foreground">
            Monthly Targets
          </h3>
          <Badge variant="secondary" className="text-[10px]">
            April 2026
          </Badge>
        </div>
        <div className="space-y-4">
          {sorted.map((member, i) => {
            const targetPct = Math.min(
              100,
              Math.round((member.totalRevenue / member.monthlyTarget) * 100),
            );
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-4"
                data-ocid={`team.target.${i + 1}.row`}
              >
                <UserAvatar name={member.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-foreground truncate">
                      {member.name}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold ml-2 shrink-0 ${targetTextColor(targetPct)}`}
                    >
                      {targetPct}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${targetPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.04 + 0.1 }}
                      className={`h-full rounded-full ${targetColor(targetPct)}`}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
                    <span className="font-mono">
                      ${(member.totalRevenue / 1000).toFixed(0)}K achieved
                    </span>
                    <span className="font-mono">
                      ${(member.monthlyTarget / 1000).toFixed(0)}K target
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>

      {/* Profile Modal */}
      {selected && (
        <MemberProfileModal
          member={selected.member}
          rank={selected.rank}
          open={!!selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default TeamPage;
