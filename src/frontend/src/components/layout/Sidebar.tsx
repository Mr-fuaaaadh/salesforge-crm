import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useCrmStore } from "@/store/crm-store";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BarChart3,
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Layout,
  ListTodo,
  Mail,
  Settings,
  Target,
  Users,
  Users2,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  badge?: number;
}

interface SidebarProps {
  collapsed: boolean;
  onCollapse: () => void;
  isMobile?: boolean;
}

const navItems: NavItem[] = [
  { label: "Dashboard", path: "/dashboard", icon: <Layout size={18} /> },
  { label: "Leads", path: "/leads", icon: <Target size={18} /> },
  { label: "Deals", path: "/deals", icon: <Briefcase size={18} /> },
  { label: "Customers", path: "/customers", icon: <Users size={18} /> },
  { label: "Sales Team", path: "/team", icon: <Users2 size={18} /> },
  { label: "Tasks", path: "/tasks", icon: <ListTodo size={18} /> },
  { label: "Calendar", path: "/calendar", icon: <Calendar size={18} /> },
  { label: "Reports", path: "/reports", icon: <BarChart3 size={18} /> },
  { label: "Messages", path: "/messages", icon: <Mail size={18} /> },
  { label: "Settings", path: "/settings", icon: <Settings size={18} /> },
];

export function Sidebar({
  collapsed,
  onCollapse,
  isMobile = false,
}: SidebarProps) {
  const location = useLocation();
  const overdueTasks = useCrmStore((s) => s.overdueTasks());

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 64 : 240 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex flex-col h-full bg-card border-r border-border overflow-hidden shrink-0"
    >
      {/* Logo / Brand */}
      <div
        className={cn(
          "flex items-center h-16 px-4 border-b border-border shrink-0",
          collapsed ? "justify-center" : "justify-between",
        )}
      >
        <AnimatePresence mode="wait">
          {!collapsed ? (
            <motion.div
              key="full"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2.5 min-w-0"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Zap size={16} className="text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <span className="font-display font-bold text-sm text-foreground leading-tight truncate block">
                  SalesForge
                </span>
                <span className="text-[10px] text-muted-foreground font-body leading-tight truncate block">
                  CRM Platform
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
            >
              <Zap size={16} className="text-primary-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
        {isMobile ? (
          <button
            type="button"
            onClick={onCollapse}
            className="p-1 rounded-md hover:bg-muted transition-colors text-muted-foreground"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        ) : (
          !collapsed && (
            <button
              type="button"
              onClick={onCollapse}
              className="p-1 rounded-md hover:bg-muted transition-colors text-muted-foreground"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft size={16} />
            </button>
          )
        )}
      </div>

      {/* Workspace switcher */}
      {!collapsed && (
        <div className="px-3 py-3 border-b border-border">
          <button
            type="button"
            className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-muted transition-colors text-left"
          >
            <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-accent">SF</span>
            </div>
            <span className="text-xs font-medium text-foreground truncate">
              SalesForge Workspace
            </span>
            <ChevronRight
              size={12}
              className="ml-auto text-muted-foreground shrink-0"
            />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(`${item.path}/`);
          const showBadge = item.path === "/tasks" && overdueTasks.length > 0;

          return (
            <Link
              key={item.path}
              to={item.path}
              data-ocid={`nav.${item.label.toLowerCase().replace(" ", "_")}.link`}
              className={cn(
                "flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm transition-smooth group relative",
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
                collapsed && "justify-center px-0 w-10 mx-auto",
              )}
              title={collapsed ? item.label : undefined}
            >
              <span
                className={cn(
                  "shrink-0",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground",
                )}
              >
                {item.icon}
              </span>
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.15 }}
                    className="truncate flex-1"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              {!collapsed && showBadge && (
                <Badge
                  variant="destructive"
                  className="h-4 px-1.5 text-[10px] ml-auto shrink-0"
                >
                  {overdueTasks.length}
                </Badge>
              )}
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary rounded-r-full"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div
        className={cn(
          "border-t border-border p-3",
          collapsed ? "flex justify-center" : "",
        )}
      >
        {collapsed ? (
          <UserAvatar name="Alex Rivera" size="sm" />
        ) : (
          <div className="flex items-center gap-2.5">
            <UserAvatar name="Alex Rivera" size="sm" online />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-foreground truncate">
                Alex Rivera
              </p>
              <p className="text-[10px] text-muted-foreground truncate">
                alex@salesforge.io
              </p>
            </div>
            <button
              type="button"
              onClick={onCollapse}
              className="p-1 rounded-md hover:bg-muted transition-colors text-muted-foreground shrink-0"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft size={14} />
            </button>
          </div>
        )}
        {collapsed && (
          <button
            type="button"
            onClick={onCollapse}
            className="mt-2 w-full flex justify-center p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground"
            aria-label="Expand sidebar"
          >
            <ChevronRight size={14} />
          </button>
        )}
      </div>
    </motion.aside>
  );
}
