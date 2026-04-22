import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useCrmStore } from "@/store/crm-store";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BarChart3,
  Briefcase,
  Layout,
  ListTodo,
  Mail,
  MoreHorizontal,
  Target,
  Users,
} from "lucide-react";

const bottomNavItems = [
  { label: "Dashboard", path: "/dashboard", icon: Layout },
  { label: "Leads", path: "/leads", icon: Target },
  { label: "Deals", path: "/deals", icon: Briefcase },
  { label: "Tasks", path: "/tasks", icon: ListTodo },
  { label: "More", path: "#more", icon: MoreHorizontal },
];

const drawerItems = [
  { label: "Dashboard", path: "/dashboard", icon: Layout },
  { label: "Leads", path: "/leads", icon: Target },
  { label: "Deals", path: "/deals", icon: Briefcase },
  { label: "Customers", path: "/customers", icon: Users },
  { label: "Tasks", path: "/tasks", icon: ListTodo },
  { label: "Reports", path: "/reports", icon: BarChart3 },
  { label: "Messages", path: "/messages", icon: Mail },
];

export function MobileNav() {
  const location = useLocation();
  const overdueTasks = useCrmStore((s) => s.overdueTasks());

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-card border-t border-border"
      data-ocid="mobile.nav"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {bottomNavItems.map((item) => {
          const isMore = item.path === "#more";
          const isActive =
            !isMore &&
            (location.pathname === item.path ||
              location.pathname.startsWith(`${item.path}/`));
          const showBadge = item.path === "/tasks" && overdueTasks.length > 0;
          const Icon = item.icon;

          if (isMore) {
            return (
              <Sheet key="more">
                <SheetTrigger asChild>
                  <button
                    type="button"
                    data-ocid="mobile.nav.more.button"
                    className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors text-muted-foreground"
                  >
                    <Icon size={20} />
                    <span className="text-[10px] font-medium">
                      {item.label}
                    </span>
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="bottom"
                  className="h-auto rounded-t-2xl pb-8"
                >
                  <div className="pt-2 pb-4">
                    <div className="w-12 h-1 rounded-full bg-muted mx-auto mb-6" />
                    <h3 className="font-display font-semibold text-base text-foreground mb-4 px-1">
                      Navigation
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                      {drawerItems.map((navItem) => {
                        const NavIcon = navItem.icon;
                        const active = location.pathname === navItem.path;
                        return (
                          <Link
                            key={navItem.path}
                            to={navItem.path}
                            data-ocid={`mobile.nav.${navItem.label.toLowerCase()}.link`}
                            className={cn(
                              "flex flex-col items-center gap-1.5 p-3 rounded-xl transition-colors",
                              active
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground",
                            )}
                          >
                            <NavIcon size={20} />
                            <span className="text-[10px] font-medium leading-tight text-center">
                              {navItem.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              data-ocid={`mobile.nav.${item.label.toLowerCase()}.link`}
              className={cn(
                "relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              {isActive && (
                <span className="absolute top-0 inset-x-2 h-0.5 bg-primary rounded-b-full" />
              )}
              <Icon size={20} />
              <span
                className={cn(
                  "text-[10px] font-medium",
                  isActive ? "text-primary" : "",
                )}
              >
                {item.label}
              </span>
              {showBadge && (
                <Badge
                  variant="destructive"
                  className="absolute -top-0.5 right-2 h-3.5 min-w-3.5 px-0.5 text-[8px]"
                >
                  {overdueTasks.length}
                </Badge>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
