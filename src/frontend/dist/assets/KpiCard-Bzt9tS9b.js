import { j as jsxRuntimeExports, m as motion, x as cn } from "./index-BlMbxdLA.js";
import { C as Card, T as TrendingUp } from "./card-DoSBglZU.js";
import { T as TrendingDown } from "./trending-down--9WBe-Na.js";
function MiniSparkline({
  data,
  positive
}) {
  if (!data.length) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 32;
  const pts = data.map((v, i) => {
    const x = i / (data.length - 1) * w;
    const y = h - (v - min) / range * h;
    return `${x},${y}`;
  }).join(" ");
  const color = positive ? "oklch(0.62 0.18 152)" : "oklch(0.65 0.19 22)";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      width: w,
      height: h,
      viewBox: `0 0 ${w} ${h}`,
      fill: "none",
      "aria-hidden": "true",
      role: "img",
      "aria-label": "Trend chart",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "polyline",
        {
          points: pts,
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
          opacity: "0.8"
        }
      )
    }
  );
}
function KpiCard({
  title,
  value,
  icon,
  trend,
  trendLabel,
  sparklineData,
  className,
  "data-ocid": dataOcid
}) {
  const isPositive = trend !== void 0 && trend >= 0;
  const trendColor = isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-destructive";
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      whileHover: { y: -2, scale: 1.01 },
      transition: { duration: 0.2 },
      "data-ocid": dataOcid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: cn(
            "p-5 border border-border/60 shadow-subtle hover:shadow-elevation transition-shadow",
            className
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0", children: icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground leading-tight", children: title })
              ] }),
              trend !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "flex items-center gap-1 text-xs font-medium shrink-0",
                    trendColor
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendIcon, { size: 12 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      Math.abs(trend),
                      "%"
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl text-foreground leading-none", children: typeof value === "number" ? value.toLocaleString() : value }),
                trendLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1", children: trendLabel })
              ] }),
              sparklineData && sparklineData.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MiniSparkline, { data: sparklineData, positive: isPositive }) })
            ] })
          ]
        }
      )
    }
  );
}
export {
  KpiCard as K
};
