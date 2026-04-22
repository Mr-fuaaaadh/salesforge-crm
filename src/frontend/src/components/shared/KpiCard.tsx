import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  sparklineData?: number[];
  className?: string;
  "data-ocid"?: string;
}

function MiniSparkline({
  data,
  positive,
}: { data: number[]; positive: boolean }) {
  if (!data.length) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 32;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");
  const color = positive ? "oklch(0.62 0.18 152)" : "oklch(0.65 0.19 22)";

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden="true"
      role="img"
      aria-label="Trend chart"
    >
      <polyline
        points={pts}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

export function KpiCard({
  title,
  value,
  icon,
  trend,
  trendLabel,
  sparklineData,
  className,
  "data-ocid": dataOcid,
}: KpiCardProps) {
  const isPositive = trend !== undefined && trend >= 0;
  const trendColor = isPositive
    ? "text-emerald-600 dark:text-emerald-400"
    : "text-destructive";
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      data-ocid={dataOcid}
    >
      <Card
        className={cn(
          "p-5 border border-border/60 shadow-subtle hover:shadow-elevation transition-shadow",
          className,
        )}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              {icon}
            </div>
            <span className="text-xs font-medium text-muted-foreground leading-tight">
              {title}
            </span>
          </div>
          {trend !== undefined && (
            <div
              className={cn(
                "flex items-center gap-1 text-xs font-medium shrink-0",
                trendColor,
              )}
            >
              <TrendIcon size={12} />
              <span>{Math.abs(trend)}%</span>
            </div>
          )}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-display font-bold text-2xl text-foreground leading-none">
              {typeof value === "number" ? value.toLocaleString() : value}
            </p>
            {trendLabel && (
              <p className="text-[11px] text-muted-foreground mt-1">
                {trendLabel}
              </p>
            )}
          </div>
          {sparklineData && sparklineData.length > 1 && (
            <div className="opacity-70">
              <MiniSparkline data={sparklineData} positive={isPositive} />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
