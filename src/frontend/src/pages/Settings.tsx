import { PageHeader } from "@/components/shared/PageHeader";
import { cn } from "@/lib/utils";
import {
  Bell,
  Building,
  ChevronDown,
  CreditCard,
  GitBranch,
  Key,
  Plug,
  Shield,
  User,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ApiKeysTab } from "./settings/ApiKeysTab";
import { BillingTab } from "./settings/BillingTab";
import { CompanyTab } from "./settings/CompanyTab";
import { IntegrationsTab } from "./settings/IntegrationsTab";
import { NotificationsTab } from "./settings/NotificationsTab";
import { PermissionsTab } from "./settings/PermissionsTab";
import { ProfileTab } from "./settings/ProfileTab";
import { SalesStagesTab } from "./settings/SalesStagesTab";
import { UserRolesTab } from "./settings/UserRolesTab";

type TabId =
  | "profile"
  | "company"
  | "stages"
  | "roles"
  | "permissions"
  | "notifications"
  | "api"
  | "integrations"
  | "billing";

interface TabDef {
  id: TabId;
  label: string;
  icon: React.ReactNode;
  description: string;
  group: string;
}

const TABS: TabDef[] = [
  {
    id: "profile",
    label: "Profile",
    icon: <User size={15} />,
    description: "Personal info & security",
    group: "Account",
  },
  {
    id: "company",
    label: "Company",
    icon: <Building size={15} />,
    description: "Org settings & branding",
    group: "Account",
  },
  {
    id: "stages",
    label: "Sales Stages",
    icon: <GitBranch size={15} />,
    description: "Pipeline stage config",
    group: "CRM",
  },
  {
    id: "roles",
    label: "User Roles",
    icon: <Users size={15} />,
    description: "Role definitions",
    group: "CRM",
  },
  {
    id: "permissions",
    label: "Permissions",
    icon: <Shield size={15} />,
    description: "Feature access matrix",
    group: "CRM",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell size={15} />,
    description: "Alert preferences",
    group: "Preferences",
  },
  {
    id: "api",
    label: "API Keys",
    icon: <Key size={15} />,
    description: "Keys & webhooks",
    group: "Developers",
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: <Plug size={15} />,
    description: "Third-party apps",
    group: "Developers",
  },
  {
    id: "billing",
    label: "Billing",
    icon: <CreditCard size={15} />,
    description: "Plans & invoices",
    group: "Account",
  },
];

const GROUPS = ["Account", "CRM", "Preferences", "Developers"];

function TabContent({ id }: { id: TabId }) {
  switch (id) {
    case "profile":
      return <ProfileTab />;
    case "company":
      return <CompanyTab />;
    case "stages":
      return <SalesStagesTab />;
    case "roles":
      return <UserRolesTab />;
    case "permissions":
      return <PermissionsTab />;
    case "notifications":
      return <NotificationsTab />;
    case "api":
      return <ApiKeysTab />;
    case "integrations":
      return <IntegrationsTab />;
    case "billing":
      return <BillingTab />;
  }
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentTab = TABS.find((t) => t.id === activeTab)!;

  return (
    <div className="space-y-5 pb-16 md:pb-0">
      <PageHeader
        title="Settings"
        description="Manage your workspace, team, and integrations"
      />

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* ── Desktop sidebar ── */}
        <nav className="hidden lg:flex flex-col w-52 shrink-0 sticky top-6">
          <div className="rounded-2xl border border-border/60 bg-card p-2 space-y-0.5">
            {GROUPS.map((group) => {
              const groupTabs = TABS.filter((t) => t.group === group);
              return (
                <div key={group}>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest px-3 py-2 mt-1 first:mt-0">
                    {group}
                  </p>
                  {groupTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      data-ocid={`settings.${tab.id}.tab`}
                      className={cn(
                        "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-smooth group",
                        activeTab === tab.id
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "shrink-0",
                          activeTab === tab.id
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground",
                        )}
                      >
                        {tab.icon}
                      </span>
                      <span className="text-xs font-medium truncate">
                        {tab.label}
                      </span>
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        </nav>

        {/* ── Mobile dropdown ── */}
        <div className="lg:hidden w-full">
          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            data-ocid="settings.mobile.menu.toggle"
            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-border/60 bg-card text-sm font-medium"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-primary">{currentTab.icon}</span>
              <span>{currentTab.label}</span>
            </div>
            <ChevronDown
              size={15}
              className={cn(
                "text-muted-foreground transition-transform duration-200",
                mobileOpen && "rotate-180",
              )}
            />
          </button>
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-1.5 p-2 rounded-2xl border border-border/60 bg-card shadow-elevation space-y-0.5">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileOpen(false);
                      }}
                      data-ocid={`settings.${tab.id}.mobile_tab`}
                      className={cn(
                        "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-smooth",
                        activeTab === tab.id
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <span className="shrink-0">{tab.icon}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium">{tab.label}</p>
                        <p className="text-[10px] text-muted-foreground">
                          {tab.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Content area ── */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
            >
              <TabContent id={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
