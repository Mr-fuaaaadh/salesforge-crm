import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useCrmStore } from "@/store/crm-store";
import type { Notification, NotificationType } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Clock,
  Settings,
  Trash2,
  UserPlus,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Type config ─────────────────────────────────────────────────────────────

type FilterTab =
  | "all"
  | "unread"
  | "lead"
  | "reminder"
  | "deal"
  | "team"
  | "system";

interface TypeConfig {
  icon: React.ReactNode;
  bg: string;
  border: string;
  label: string;
  iconClass: string;
}

const typeConfig: Record<NotificationType, TypeConfig> = {
  lead: {
    icon: <UserPlus size={14} />,
    bg: "bg-emerald-500/15",
    border: "border-l-emerald-500",
    label: "Lead Alert",
    iconClass: "text-emerald-600 dark:text-emerald-400",
  },
  reminder: {
    icon: <Clock size={14} />,
    bg: "bg-amber-500/15",
    border: "border-l-amber-500",
    label: "Reminder",
    iconClass: "text-amber-600 dark:text-amber-400",
  },
  deal: {
    icon: <Briefcase size={14} />,
    bg: "bg-primary/15",
    border: "border-l-primary",
    label: "Deal Update",
    iconClass: "text-primary",
  },
  team: {
    icon: <Users size={14} />,
    bg: "bg-accent/15",
    border: "border-l-accent",
    label: "Team",
    iconClass: "text-accent",
  },
  system: {
    icon: <Settings size={14} />,
    bg: "bg-muted-foreground/15",
    border: "border-l-muted-foreground",
    label: "System",
    iconClass: "text-muted-foreground",
  },
};

// ─── Detail actions by type ──────────────────────────────────────────────────

const detailActions: Record<
  NotificationType,
  Array<{
    label: string;
    icon?: React.ReactNode;
    variant?: "default" | "outline" | "secondary";
  }>
> = {
  lead: [
    { label: "View Lead", variant: "default", icon: <UserPlus size={14} /> },
    { label: "Assign Lead", variant: "outline" },
  ],
  deal: [
    { label: "View Deal", variant: "default", icon: <Briefcase size={14} /> },
    { label: "Update Stage", variant: "outline" },
  ],
  reminder: [
    {
      label: "Mark Complete",
      variant: "default",
      icon: <CheckCircle2 size={14} />,
    },
    { label: "Snooze", variant: "outline", icon: <Clock size={14} /> },
  ],
  team: [
    { label: "Reply", variant: "default" },
    { label: "View Thread", variant: "outline" },
  ],
  system: [
    { label: "Dismiss", variant: "outline" },
    { label: "Learn More", variant: "default" },
  ],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const NOW = new Date("2026-04-22T12:00:00");

function relativeTime(ts: string): string {
  const date = new Date(ts);
  const diffMs = NOW.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMs / 3600000);
  const diffDay = Math.floor(diffMs / 86400000);
  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay === 1) {
    const t = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    return `Yesterday at ${t}`;
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function isNew(ts: string): boolean {
  return NOW.getTime() - new Date(ts).getTime() < 3600000;
}

type DateGroup = "Today" | "Yesterday" | "Earlier This Week" | "Older";

function getDateGroup(ts: string): DateGroup {
  const diff = Math.floor((NOW.getTime() - new Date(ts).getTime()) / 86400000);
  if (diff < 1) return "Today";
  if (diff < 2) return "Yesterday";
  if (diff < 7) return "Earlier This Week";
  return "Older";
}

const DATE_GROUP_ORDER: DateGroup[] = [
  "Today",
  "Yesterday",
  "Earlier This Week",
  "Older",
];

// ─── NotificationItem ─────────────────────────────────────────────────────────

interface NotificationItemProps {
  notification: Notification;
  selected: boolean;
  onSelect: (id: string, checked: boolean) => void;
  onMarkRead: (id: string) => void;
  onDelete: (id: string) => void;
  onClick: (n: Notification) => void;
  isActive: boolean;
  index: number;
}

function NotificationItem({
  notification,
  selected,
  onSelect,
  onMarkRead,
  onDelete,
  onClick,
  isActive,
  index,
}: NotificationItemProps) {
  const [hovered, setHovered] = useState(false);
  const cfg = typeConfig[notification.type];
  const newer = isNew(notification.timestamp);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.04 }}
      exit={{ opacity: 0, x: 12, transition: { duration: 0.15 } }}
      className={cn(
        "group relative flex items-start gap-3 px-4 py-3.5 cursor-pointer transition-all duration-200 border-l-2",
        !notification.read ? cfg.border : "border-l-transparent",
        isActive ? "bg-primary/5" : "hover:bg-muted/40",
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        onClick(notification);
        if (!notification.read) onMarkRead(notification.id);
      }}
      data-ocid={`notifications.item.${index + 1}`}
    >
      {/* Checkbox — appears on hover */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: checkbox wrapper, inner Checkbox handles keyboard */}
      <div
        className={cn(
          "mt-0.5 shrink-0 transition-all duration-200",
          hovered || selected
            ? "opacity-100"
            : "opacity-0 w-0 overflow-hidden pointer-events-none",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Checkbox
          checked={selected}
          onCheckedChange={(v) => onSelect(notification.id, !!v)}
          data-ocid={`notifications.checkbox.${index + 1}`}
          className="w-4 h-4"
        />
      </div>

      {/* Icon */}
      <div
        className={cn(
          "shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5",
          cfg.bg,
          cfg.iconClass,
        )}
      >
        {cfg.icon}
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap min-w-0">
            <span
              className={cn(
                "text-sm leading-snug truncate",
                !notification.read
                  ? "font-semibold text-foreground"
                  : "font-medium text-foreground/80",
              )}
            >
              {notification.title}
            </span>
            {newer && (
              <Badge className="text-[10px] h-4 px-1.5 bg-primary/10 text-primary border-primary/20 font-semibold shrink-0">
                New
              </Badge>
            )}
          </div>
          <span className="text-[11px] text-muted-foreground shrink-0 mt-0.5 whitespace-nowrap">
            {relativeTime(notification.timestamp)}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
          {notification.message}
        </p>
      </div>

      {/* Unread dot + hover actions */}
      <div className="flex flex-col items-center gap-1.5 shrink-0 self-center ml-1">
        {!notification.read && (
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
        )}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.12 }}
              className="flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => onMarkRead(notification.id)}
                  className="p-1 rounded hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Mark as read"
                  data-ocid={`notifications.mark_read.${index + 1}`}
                >
                  <CheckCircle2 size={13} />
                </button>
              )}
              <button
                type="button"
                onClick={() => onDelete(notification.id)}
                className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                aria-label="Delete"
                data-ocid={`notifications.delete_button.${index + 1}`}
              >
                <Trash2 size={13} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function NotificationDetail({
  notification,
  onClose,
  onMarkRead,
}: {
  notification: Notification;
  onClose: () => void;
  onMarkRead: (id: string) => void;
}) {
  const cfg = typeConfig[notification.type];
  const actions = detailActions[notification.type];

  return (
    <motion.div
      key={notification.id}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col h-full"
      data-ocid="notifications.detail.panel"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "w-7 h-7 rounded-lg flex items-center justify-center",
              cfg.bg,
              cfg.iconClass,
            )}
          >
            {cfg.icon}
          </div>
          <span className="text-xs font-semibold text-muted-foreground">
            {cfg.label}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          aria-label="Close detail panel"
          data-ocid="notifications.detail.close_button"
        >
          <X size={14} />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
        <div>
          <h2 className="font-display font-semibold text-base text-foreground leading-snug">
            {notification.title}
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            {new Date(notification.timestamp).toLocaleString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
        </div>

        <Separator />

        {notification.avatar && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
              {notification.avatar}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-foreground">
                {notification.avatar}
              </p>
              <p className="text-[11px] text-muted-foreground">
                Involved contact
              </p>
            </div>
          </div>
        )}

        <p className="text-sm text-foreground/80 leading-relaxed">
          {notification.message}
        </p>

        {!notification.read && (
          <button
            type="button"
            onClick={() => onMarkRead(notification.id)}
            className="flex items-center gap-1.5 text-xs text-primary hover:underline"
            data-ocid="notifications.detail.mark_read_button"
          >
            <CheckCircle2 size={12} />
            Mark as read
          </button>
        )}
      </div>

      {/* Actions */}
      <div className="px-5 py-4 border-t border-border">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          Actions
        </p>
        <div className="space-y-2">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant={action.variant ?? "outline"}
              size="sm"
              className="w-full justify-start gap-2 h-9"
              data-ocid={`notifications.detail.${action.label.toLowerCase().replace(/\s+/g, "_")}_button`}
            >
              {action.icon}
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Filter tabs ──────────────────────────────────────────────────────────────

const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "unread", label: "Unread" },
  { key: "lead", label: "Lead Alerts" },
  { key: "reminder", label: "Reminders" },
  { key: "deal", label: "Deal Updates" },
  { key: "team", label: "Team" },
  { key: "system", label: "System" },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  const { notifications, markNotificationRead, markAllRead } = useCrmStore();
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [activeNotification, setActiveNotification] =
    useState<Notification | null>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Filtered + non-deleted list
  const visible = notifications.filter((n) => {
    if (deletedIds.has(n.id)) return false;
    if (activeFilter === "unread") return !n.read;
    if (activeFilter !== "all") return n.type === activeFilter;
    return true;
  });

  // Group by date
  const grouped = DATE_GROUP_ORDER.reduce<Record<DateGroup, Notification[]>>(
    (acc, g) => {
      acc[g] = visible.filter((n) => getDateGroup(n.timestamp) === g);
      return acc;
    },
    { Today: [], Yesterday: [], "Earlier This Week": [], Older: [] },
  );

  const allVisibleIds = visible.map((n) => n.id);
  const allSelected =
    allVisibleIds.length > 0 &&
    allVisibleIds.every((id) => selectedIds.has(id));

  function toggleSelectAll() {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(allVisibleIds));
    }
  }

  function handleSelect(id: string, checked: boolean) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  function handleBulkDelete() {
    setDeletedIds((prev) => new Set([...prev, ...selectedIds]));
    if (activeNotification && selectedIds.has(activeNotification.id)) {
      setActiveNotification(null);
    }
    setSelectedIds(new Set());
  }

  function handleBulkMarkRead() {
    for (const id of selectedIds) markNotificationRead(id);
    setSelectedIds(new Set());
  }

  function handleDelete(id: string) {
    setDeletedIds((prev) => new Set([...prev, id]));
    if (activeNotification?.id === id) setActiveNotification(null);
  }

  return (
    <div className="h-full flex flex-col" data-ocid="notifications.page">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
            <Bell size={18} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <h1 className="font-display font-bold text-xl text-foreground">
                Notifications
              </h1>
              {unreadCount > 0 && (
                <Badge
                  className="bg-primary text-primary-foreground text-xs h-5 px-2 font-bold"
                  data-ocid="notifications.unread_badge"
                >
                  {unreadCount}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {unreadCount > 0
                ? `${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}`
                : "You're all caught up"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-1.5 text-sm"
            onClick={markAllRead}
            disabled={unreadCount === 0}
            data-ocid="notifications.mark_all_read_button"
          >
            <CheckCircle2 size={14} />
            Mark All Read
          </Button>
          <Link to="/settings">
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-1.5 text-sm"
              data-ocid="notifications.settings_button"
            >
              <Settings size={14} />
              Settings
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.06 }}
        className="flex items-center gap-1.5 overflow-x-auto pb-0.5 mb-4 scrollbar-none"
        data-ocid="notifications.filter.tabs"
      >
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveFilter(tab.key)}
            className={cn(
              "shrink-0 px-3.5 h-8 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap",
              activeFilter === tab.key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
            data-ocid={`notifications.filter.${tab.key}`}
          >
            {tab.label}
            {tab.key === "unread" && unreadCount > 0 && (
              <span className="ml-1.5 inline-flex items-center justify-center bg-primary/20 text-primary rounded-full px-1.5 text-[10px] font-bold">
                {unreadCount}
              </span>
            )}
          </button>
        ))}
      </motion.div>

      {/* Content */}
      <div className="flex flex-1 gap-4 min-h-0 overflow-hidden">
        {/* List Panel */}
        <div className="flex-1 flex flex-col min-w-0 rounded-2xl border border-border bg-card overflow-hidden shadow-subtle">
          {/* Bulk actions bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/20 shrink-0">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={allSelected}
                onCheckedChange={toggleSelectAll}
                data-ocid="notifications.select_all_checkbox"
                className="w-4 h-4"
              />
              <span className="text-xs text-muted-foreground">
                {selectedIds.size > 0
                  ? `${selectedIds.size} selected`
                  : `${visible.length} notification${visible.length !== 1 ? "s" : ""}`}
              </span>
            </div>
            <AnimatePresence>
              {selectedIds.size > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs gap-1.5"
                    onClick={handleBulkMarkRead}
                    data-ocid="notifications.bulk_mark_read_button"
                  >
                    <CheckCircle2 size={12} />
                    Mark Read
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs gap-1.5 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={handleBulkDelete}
                    data-ocid="notifications.bulk_delete_button"
                  >
                    <Trash2 size={12} />
                    Delete
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Scrollable list */}
          <ScrollArea className="flex-1">
            {visible.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-16 px-6 text-center"
                data-ocid="notifications.empty_state"
              >
                {activeFilter === "unread" ? (
                  <>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-1">
                      You're all caught up!
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                      No unread notifications. We'll let you know when something
                      needs your attention.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground mb-4">
                      <Bell size={28} />
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-1">
                      No notifications of this type
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                      Nothing here yet. Switch to "All" to see everything.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 h-8 text-xs"
                      onClick={() => setActiveFilter("all")}
                      data-ocid="notifications.empty.view_all_button"
                    >
                      View all notifications
                    </Button>
                  </>
                )}
              </motion.div>
            ) : (
              <div>
                {DATE_GROUP_ORDER.map((group) => {
                  const items = grouped[group];
                  if (items.length === 0) return null;
                  return (
                    <div key={group}>
                      {/* Date group label */}
                      <div className="px-4 py-2 bg-muted/30 border-b border-border sticky top-0 z-10">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                          {group}
                        </span>
                      </div>

                      {/* Items */}
                      <AnimatePresence>
                        {items.map((n) => {
                          const idx = visible.indexOf(n);
                          return (
                            <NotificationItem
                              key={n.id}
                              notification={n}
                              selected={selectedIds.has(n.id)}
                              onSelect={handleSelect}
                              onMarkRead={markNotificationRead}
                              onDelete={handleDelete}
                              onClick={setActiveNotification}
                              isActive={activeNotification?.id === n.id}
                              index={idx >= 0 ? idx : 0}
                            />
                          );
                        })}
                      </AnimatePresence>

                      <Separator />
                    </div>
                  );
                })}

                {/* Preferences banner */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mx-4 my-5 p-4 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-between gap-3"
                  data-ocid="notifications.preferences_banner"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Zap size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        Manage notification preferences
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Control what alerts you receive and when
                      </p>
                    </div>
                  </div>
                  <Link to="/settings">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1 text-primary hover:bg-primary/10 shrink-0 text-xs"
                      data-ocid="notifications.preferences_link"
                    >
                      Go to Settings <ChevronRight size={12} />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            )}
          </ScrollArea>
        </div>

        {/* Detail Panel — desktop only */}
        <AnimatePresence>
          {activeNotification && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 300 }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="hidden lg:flex flex-col shrink-0 rounded-2xl border border-border bg-card shadow-subtle overflow-hidden"
              style={{ minWidth: 280 }}
              data-ocid="notifications.detail_panel"
            >
              <NotificationDetail
                notification={activeNotification}
                onClose={() => setActiveNotification(null)}
                onMarkRead={markNotificationRead}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
