import { u as useCrmStore, r as reactExports, j as jsxRuntimeExports, m as motion, v as Bell, d as Badge, au as Link, av as Settings, x as cn, A as AnimatePresence, Z as Zap, n as ChevronRight, X, k as Users, B as Briefcase } from "./index-BlMbxdLA.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { C as Checkbox } from "./checkbox-DrxJEOS1.js";
import { S as ScrollArea } from "./scroll-area-KwEGIApL.js";
import { S as Separator } from "./separator-CwslPhpP.js";
import { C as CircleCheck } from "./circle-check-3Bhdwm5r.js";
import { T as Trash2 } from "./trash-2-D1139fWY.js";
import { C as Clock } from "./clock-BUl1m0Xe.js";
import { U as UserPlus } from "./user-plus-BMtmkSyA.js";
import "./index-TftrN_Lb.js";
import "./check-mNj6eV7j.js";
import "./index-IXOTxK3N.js";
import "./index-BrhQEKyn.js";
const typeConfig = {
  lead: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 14 }),
    bg: "bg-emerald-500/15",
    border: "border-l-emerald-500",
    label: "Lead Alert",
    iconClass: "text-emerald-600 dark:text-emerald-400"
  },
  reminder: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }),
    bg: "bg-amber-500/15",
    border: "border-l-amber-500",
    label: "Reminder",
    iconClass: "text-amber-600 dark:text-amber-400"
  },
  deal: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 14 }),
    bg: "bg-primary/15",
    border: "border-l-primary",
    label: "Deal Update",
    iconClass: "text-primary"
  },
  team: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14 }),
    bg: "bg-accent/15",
    border: "border-l-accent",
    label: "Team",
    iconClass: "text-accent"
  },
  system: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 14 }),
    bg: "bg-muted-foreground/15",
    border: "border-l-muted-foreground",
    label: "System",
    iconClass: "text-muted-foreground"
  }
};
const detailActions = {
  lead: [
    { label: "View Lead", variant: "default", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 14 }) },
    { label: "Assign Lead", variant: "outline" }
  ],
  deal: [
    { label: "View Deal", variant: "default", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 14 }) },
    { label: "Update Stage", variant: "outline" }
  ],
  reminder: [
    {
      label: "Mark Complete",
      variant: "default",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14 })
    },
    { label: "Snooze", variant: "outline", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }) }
  ],
  team: [
    { label: "Reply", variant: "default" },
    { label: "View Thread", variant: "outline" }
  ],
  system: [
    { label: "Dismiss", variant: "outline" },
    { label: "Learn More", variant: "default" }
  ]
};
const NOW = /* @__PURE__ */ new Date("2026-04-22T12:00:00");
function relativeTime(ts) {
  const date = new Date(ts);
  const diffMs = NOW.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 6e4);
  const diffHr = Math.floor(diffMs / 36e5);
  const diffDay = Math.floor(diffMs / 864e5);
  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay === 1) {
    const t = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    });
    return `Yesterday at ${t}`;
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function isNew(ts) {
  return NOW.getTime() - new Date(ts).getTime() < 36e5;
}
function getDateGroup(ts) {
  const diff = Math.floor((NOW.getTime() - new Date(ts).getTime()) / 864e5);
  if (diff < 1) return "Today";
  if (diff < 2) return "Yesterday";
  if (diff < 7) return "Earlier This Week";
  return "Older";
}
const DATE_GROUP_ORDER = [
  "Today",
  "Yesterday",
  "Earlier This Week",
  "Older"
];
function NotificationItem({
  notification,
  selected,
  onSelect,
  onMarkRead,
  onDelete,
  onClick,
  isActive,
  index
}) {
  const [hovered, setHovered] = reactExports.useState(false);
  const cfg = typeConfig[notification.type];
  const newer = isNew(notification.timestamp);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.2, delay: index * 0.04 },
      exit: { opacity: 0, x: 12, transition: { duration: 0.15 } },
      className: cn(
        "group relative flex items-start gap-3 px-4 py-3.5 cursor-pointer transition-all duration-200 border-l-2",
        !notification.read ? cfg.border : "border-l-transparent",
        isActive ? "bg-primary/5" : "hover:bg-muted/40"
      ),
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: () => {
        onClick(notification);
        if (!notification.read) onMarkRead(notification.id);
      },
      "data-ocid": `notifications.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "mt-0.5 shrink-0 transition-all duration-200",
              hovered || selected ? "opacity-100" : "opacity-0 w-0 overflow-hidden pointer-events-none"
            ),
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: selected,
                onCheckedChange: (v) => onSelect(notification.id, !!v),
                "data-ocid": `notifications.checkbox.${index + 1}`,
                className: "w-4 h-4"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5",
              cfg.bg,
              cfg.iconClass
            ),
            children: cfg.icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "text-sm leading-snug truncate",
                    !notification.read ? "font-semibold text-foreground" : "font-medium text-foreground/80"
                  ),
                  children: notification.title
                }
              ),
              newer && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] h-4 px-1.5 bg-primary/10 text-primary border-primary/20 font-semibold shrink-0", children: "New" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground shrink-0 mt-0.5 whitespace-nowrap", children: relativeTime(notification.timestamp) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed", children: notification.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5 shrink-0 self-center ml-1", children: [
          !notification.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: hovered && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.12 },
              className: "flex items-center gap-1",
              onClick: (e) => e.stopPropagation(),
              children: [
                !notification.read && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => onMarkRead(notification.id),
                    className: "p-1 rounded hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors",
                    "aria-label": "Mark as read",
                    "data-ocid": `notifications.mark_read.${index + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 13 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => onDelete(notification.id),
                    className: "p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors",
                    "aria-label": "Delete",
                    "data-ocid": `notifications.delete_button.${index + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                  }
                )
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
function NotificationDetail({
  notification,
  onClose,
  onMarkRead
}) {
  const cfg = typeConfig[notification.type];
  const actions = detailActions[notification.type];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 16 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 16 },
      transition: { duration: 0.2 },
      className: "flex flex-col h-full",
      "data-ocid": "notifications.detail.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center",
                  cfg.bg,
                  cfg.iconClass
                ),
                children: cfg.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: cfg.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground",
              "aria-label": "Close detail panel",
              "data-ocid": "notifications.detail.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-5 py-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground leading-snug", children: notification.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: new Date(notification.timestamp).toLocaleString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit"
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          notification.avatar && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0", children: notification.avatar }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: notification.avatar }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Involved contact" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: notification.message }),
          !notification.read && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onMarkRead(notification.id),
              className: "flex items-center gap-1.5 text-xs text-primary hover:underline",
              "data-ocid": "notifications.detail.mark_read_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }),
                "Mark as read"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: actions.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: action.variant ?? "outline",
              size: "sm",
              className: "w-full justify-start gap-2 h-9",
              "data-ocid": `notifications.detail.${action.label.toLowerCase().replace(/\s+/g, "_")}_button`,
              children: [
                action.icon,
                action.label
              ]
            },
            action.label
          )) })
        ] })
      ]
    },
    notification.id
  );
}
const FILTER_TABS = [
  { key: "all", label: "All" },
  { key: "unread", label: "Unread" },
  { key: "lead", label: "Lead Alerts" },
  { key: "reminder", label: "Reminders" },
  { key: "deal", label: "Deal Updates" },
  { key: "team", label: "Team" },
  { key: "system", label: "System" }
];
function NotificationsPage() {
  const { notifications, markNotificationRead, markAllRead } = useCrmStore();
  const [deletedIds, setDeletedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const [selectedIds, setSelectedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [activeNotification, setActiveNotification] = reactExports.useState(null);
  const unreadCount = notifications.filter((n) => !n.read).length;
  const visible = notifications.filter((n) => {
    if (deletedIds.has(n.id)) return false;
    if (activeFilter === "unread") return !n.read;
    if (activeFilter !== "all") return n.type === activeFilter;
    return true;
  });
  const grouped = DATE_GROUP_ORDER.reduce(
    (acc, g) => {
      acc[g] = visible.filter((n) => getDateGroup(n.timestamp) === g);
      return acc;
    },
    { Today: [], Yesterday: [], "Earlier This Week": [], Older: [] }
  );
  const allVisibleIds = visible.map((n) => n.id);
  const allSelected = allVisibleIds.length > 0 && allVisibleIds.every((id) => selectedIds.has(id));
  function toggleSelectAll() {
    if (allSelected) {
      setSelectedIds(/* @__PURE__ */ new Set());
    } else {
      setSelectedIds(new Set(allVisibleIds));
    }
  }
  function handleSelect(id, checked) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  }
  function handleBulkDelete() {
    setDeletedIds((prev) => /* @__PURE__ */ new Set([...prev, ...selectedIds]));
    if (activeNotification && selectedIds.has(activeNotification.id)) {
      setActiveNotification(null);
    }
    setSelectedIds(/* @__PURE__ */ new Set());
  }
  function handleBulkMarkRead() {
    for (const id of selectedIds) markNotificationRead(id);
    setSelectedIds(/* @__PURE__ */ new Set());
  }
  function handleDelete(id) {
    setDeletedIds((prev) => /* @__PURE__ */ new Set([...prev, id]));
    if ((activeNotification == null ? void 0 : activeNotification.id) === id) setActiveNotification(null);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col", "data-ocid": "notifications.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.25 },
        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-primary/10 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground", children: "Notifications" }),
                unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "bg-primary text-primary-foreground text-xs h-5 px-2 font-bold",
                    "data-ocid": "notifications.unread_badge",
                    children: unreadCount
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}` : "You're all caught up" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 gap-1.5 text-sm",
                onClick: markAllRead,
                disabled: unreadCount === 0,
                "data-ocid": "notifications.mark_all_read_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14 }),
                  "Mark All Read"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 gap-1.5 text-sm",
                "data-ocid": "notifications.settings_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 14 }),
                  "Settings"
                ]
              }
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2, delay: 0.06 },
        className: "flex items-center gap-1.5 overflow-x-auto pb-0.5 mb-4 scrollbar-none",
        "data-ocid": "notifications.filter.tabs",
        children: FILTER_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveFilter(tab.key),
            className: cn(
              "shrink-0 px-3.5 h-8 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap",
              activeFilter === tab.key ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            ),
            "data-ocid": `notifications.filter.${tab.key}`,
            children: [
              tab.label,
              tab.key === "unread" && unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 inline-flex items-center justify-center bg-primary/20 text-primary rounded-full px-1.5 text-[10px] font-bold", children: unreadCount })
            ]
          },
          tab.key
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 gap-4 min-h-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0 rounded-2xl border border-border bg-card overflow-hidden shadow-subtle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/20 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: allSelected,
                onCheckedChange: toggleSelectAll,
                "data-ocid": "notifications.select_all_checkbox",
                className: "w-4 h-4"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: selectedIds.size > 0 ? `${selectedIds.size} selected` : `${visible.length} notification${visible.length !== 1 ? "s" : ""}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedIds.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.9 },
              transition: { duration: 0.15 },
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "h-7 text-xs gap-1.5",
                    onClick: handleBulkMarkRead,
                    "data-ocid": "notifications.bulk_mark_read_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }),
                      "Mark Read"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "h-7 text-xs gap-1.5 text-destructive hover:text-destructive hover:bg-destructive/10",
                    onClick: handleBulkDelete,
                    "data-ocid": "notifications.bulk_delete_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }),
                      "Delete"
                    ]
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1", children: visible.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            className: "flex flex-col items-center justify-center py-16 px-6 text-center",
            "data-ocid": "notifications.empty_state",
            children: activeFilter === "unread" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 28 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground mb-1", children: "You're all caught up!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs leading-relaxed", children: "No unread notifications. We'll let you know when something needs your attention." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 28 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground mb-1", children: "No notifications of this type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs leading-relaxed", children: 'Nothing here yet. Switch to "All" to see everything.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "mt-4 h-8 text-xs",
                  onClick: () => setActiveFilter("all"),
                  "data-ocid": "notifications.empty.view_all_button",
                  children: "View all notifications"
                }
              )
            ] })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          DATE_GROUP_ORDER.map((group) => {
            const items = grouped[group];
            if (items.length === 0) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 bg-muted/30 border-b border-border sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: group }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: items.map((n) => {
                const idx = visible.indexOf(n);
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NotificationItem,
                  {
                    notification: n,
                    selected: selectedIds.has(n.id),
                    onSelect: handleSelect,
                    onMarkRead: markNotificationRead,
                    onDelete: handleDelete,
                    onClick: setActiveNotification,
                    isActive: (activeNotification == null ? void 0 : activeNotification.id) === n.id,
                    index: idx >= 0 ? idx : 0
                  },
                  n.id
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {})
            ] }, group);
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.3 },
              className: "mx-4 my-5 p-4 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-between gap-3",
              "data-ocid": "notifications.preferences_banner",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: "Manage notification preferences" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Control what alerts you receive and when" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "h-8 gap-1 text-primary hover:bg-primary/10 shrink-0 text-xs",
                    "data-ocid": "notifications.preferences_link",
                    children: [
                      "Go to Settings ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
                    ]
                  }
                ) })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeNotification && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, width: 0 },
          animate: { opacity: 1, width: 300 },
          exit: { opacity: 0, width: 0 },
          transition: { duration: 0.22, ease: "easeInOut" },
          className: "hidden lg:flex flex-col shrink-0 rounded-2xl border border-border bg-card shadow-subtle overflow-hidden",
          style: { minWidth: 280 },
          "data-ocid": "notifications.detail_panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            NotificationDetail,
            {
              notification: activeNotification,
              onClose: () => setActiveNotification(null),
              onMarkRead: markNotificationRead
            }
          )
        }
      ) })
    ] })
  ] });
}
export {
  NotificationsPage as default
};
