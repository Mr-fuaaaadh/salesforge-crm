import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useCrmStore } from "@/store/crm-store";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";

const routeTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/leads": "Leads",
  "/deals": "Deals",
  "/customers": "Customers",
  "/team": "Sales Team",
  "/tasks": "Tasks",
  "/calendar": "Calendar",
  "/reports": "Reports & Analytics",
  "/messages": "Messages",
  "/settings": "Settings",
  "/notifications": "Notifications",
};

interface TopNavProps {
  sidebarCollapsed: boolean;
  onMenuClick: () => void;
}

export function TopNav({ onMenuClick }: TopNavProps) {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const unreadCount = useCrmStore((s) => s.unreadCount());
  const markAllRead = useCrmStore((s) => s.markAllRead);

  const pageTitle = routeTitles[location.pathname] ?? "SalesForge";

  return (
    <header className="h-16 flex items-center gap-3 px-4 md:px-6 border-b border-border bg-card shrink-0 z-30">
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
        aria-label="Open menu"
        data-ocid="nav.menu.button"
      >
        <Menu size={20} />
      </button>

      {/* Page title */}
      <div className="flex-1 min-w-0">
        <h1 className="font-display font-semibold text-base text-foreground truncate hidden md:block">
          {pageTitle}
        </h1>
      </div>

      {/* Search trigger */}
      <button
        type="button"
        data-ocid="nav.search_input"
        className={cn(
          "hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-input bg-muted/50",
          "text-sm text-muted-foreground hover:bg-muted transition-colors",
          "w-48 lg:w-64",
        )}
        aria-label="Search"
      >
        <Search size={14} />
        <span className="flex-1 text-left">Search...</span>
        <kbd className="text-[10px] border border-border rounded px-1 bg-background">
          ⌘K
        </kbd>
      </button>

      {/* Notifications */}
      <Link
        to="/notifications"
        data-ocid="nav.notifications.link"
        className="relative p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        aria-label="Notifications"
      >
        <Bell size={18} />
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 text-[9px] flex items-center justify-center"
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </Badge>
        )}
      </Link>

      {/* Theme toggle */}
      <button
        type="button"
        data-ocid="nav.theme.toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        aria-label="Toggle theme"
      >
        <Sun size={18} className="hidden dark:block" />
        <Moon size={18} className="dark:hidden" />
      </button>

      {/* User menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            data-ocid="nav.user_menu.button"
            className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-muted transition-colors"
            aria-label="User menu"
          >
            <UserAvatar name="Alex Rivera" size="sm" online />
            <span className="hidden md:block text-sm font-medium text-foreground">
              Alex
            </span>
            <ChevronDown
              size={14}
              className="hidden md:block text-muted-foreground"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <div className="px-3 py-2">
            <p className="text-sm font-medium text-foreground">Alex Rivera</p>
            <p className="text-xs text-muted-foreground">alex@salesforge.io</p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem data-ocid="nav.user_menu.profile">
            <User size={14} className="mr-2" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem data-ocid="nav.user_menu.settings">
            <Settings size={14} className="mr-2" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            data-ocid="nav.user_menu.notifications"
            onClick={markAllRead}
          >
            <Bell size={14} className="mr-2" />
            Mark all read
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            data-ocid="nav.user_menu.logout"
            className="text-destructive focus:text-destructive"
          >
            <LogOut size={14} className="mr-2" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
