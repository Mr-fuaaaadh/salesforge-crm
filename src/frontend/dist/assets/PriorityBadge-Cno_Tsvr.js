import { c as createLucideIcon, j as jsxRuntimeExports, x as cn } from "./index-BlMbxdLA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
];
const ArrowUp = createLucideIcon("arrow-up", __iconNode$1);
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
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode);
const priorityConfig = {
  Low: {
    label: "Low",
    className: "bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 10 })
  },
  Medium: {
    label: "Medium",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 10 })
  },
  High: {
    label: "High",
    className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 10 })
  },
  Urgent: {
    label: "Urgent",
    className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 10 })
  }
};
function PriorityBadge({
  priority,
  showIcon = true,
  className
}) {
  const config = priorityConfig[priority];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium leading-none whitespace-nowrap",
        config.className,
        className
      ),
      children: [
        showIcon && config.icon,
        config.label
      ]
    }
  );
}
export {
  ArrowRight as A,
  PriorityBadge as P
};
