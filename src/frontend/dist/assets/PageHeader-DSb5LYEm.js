import { j as jsxRuntimeExports, m as motion, x as cn } from "./index-BlMbxdLA.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { A as ArrowLeft } from "./arrow-left-Dz494sRC.js";
function PageHeader({
  title,
  description,
  actions,
  backAction,
  badge,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.25 },
      className: cn(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
          backAction && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: backAction,
              className: "h-8 w-8 p-0 mt-0.5 shrink-0",
              "aria-label": "Go back",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground leading-tight truncate", children: title }),
              badge
            ] }),
            description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5 leading-snug", children: description })
          ] })
        ] }),
        actions && actions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0 flex-wrap", children: actions.map((action, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: action.variant ?? (i === actions.length - 1 ? "default" : "outline"),
            size: "sm",
            onClick: action.onClick,
            "data-ocid": action["data-ocid"],
            className: "h-9",
            children: [
              action.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1.5", children: action.icon }),
              action.label
            ]
          },
          i
        )) })
      ]
    }
  );
}
export {
  PageHeader as P
};
