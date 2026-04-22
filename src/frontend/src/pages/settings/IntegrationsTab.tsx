import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, MessageSquare, Zap } from "lucide-react";
import { useState } from "react";
import {
  SiGooglecalendar,
  SiHubspot,
  SiMailchimp,
  SiSlack,
  SiStripe,
  SiZapier,
  SiZoom,
} from "react-icons/si";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  connected: boolean;
  category: string;
}

const INTEGRATIONS: Integration[] = [
  {
    id: "gcal",
    name: "Google Calendar",
    description: "Sync meetings and events with your Google Calendar.",
    icon: <SiGooglecalendar size={22} />,
    iconBg: "bg-blue-500/10",
    connected: true,
    category: "Productivity",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Get deal and lead notifications directly in Slack.",
    icon: <SiSlack size={22} />,
    iconBg: "bg-amber-500/10",
    connected: true,
    category: "Communication",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "Two-way sync of contacts and deals with HubSpot.",
    icon: <SiHubspot size={22} />,
    iconBg: "bg-orange-500/10",
    connected: false,
    category: "CRM",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Add leads to email campaigns automatically.",
    icon: <SiMailchimp size={22} />,
    iconBg: "bg-yellow-500/10",
    connected: false,
    category: "Marketing",
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Connect to 5,000+ apps with automated workflows.",
    icon: <SiZapier size={22} />,
    iconBg: "bg-orange-600/10",
    connected: true,
    category: "Automation",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Create and track invoices linked to deals.",
    icon: <SiStripe size={22} />,
    iconBg: "bg-violet-500/10",
    connected: false,
    category: "Payments",
  },
  {
    id: "zoom",
    name: "Zoom",
    description: "Schedule and start Zoom meetings from CRM.",
    icon: <SiZoom size={22} />,
    iconBg: "bg-blue-600/10",
    connected: true,
    category: "Communication",
  },
  {
    id: "msteams",
    name: "Microsoft Teams",
    description: "Share updates and collaborate in Teams channels.",
    icon: <MessageSquare size={22} className="text-indigo-500" />,
    iconBg: "bg-indigo-500/10",
    connected: false,
    category: "Communication",
  },
];

const CATEGORIES = [
  "All",
  "Productivity",
  "Communication",
  "CRM",
  "Marketing",
  "Automation",
  "Payments",
];

export function IntegrationsTab() {
  const [connections, setConnections] = useState<Record<string, boolean>>(
    Object.fromEntries(INTEGRATIONS.map((i) => [i.id, i.connected])),
  );
  const [activeCategory, setActiveCategory] = useState("All");

  function toggle(id: string) {
    setConnections((p) => ({ ...p, [id]: !p[id] }));
  }

  const filtered = INTEGRATIONS.filter(
    (i) => activeCategory === "All" || i.category === activeCategory,
  );
  const connectedCount = Object.values(connections).filter(Boolean).length;

  return (
    <div className="space-y-5">
      {/* Stats bar */}
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 border border-border/50">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-success" />
          <span className="text-sm font-semibold">
            {connectedCount} Connected
          </span>
        </div>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex items-center gap-2">
          <Circle size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {INTEGRATIONS.length - connectedCount} Available
          </span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <Zap size={13} className="text-primary" />
          <span className="text-xs text-muted-foreground">
            Automations running: 3
          </span>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full border transition-smooth",
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted border-border/50 text-muted-foreground hover:border-border",
            )}
            data-ocid={`settings.integrations.filter_${cat.toLowerCase()}.toggle`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((intg, i) => {
          const isConnected = connections[intg.id];
          return (
            <Card
              key={intg.id}
              data-ocid={`settings.integrations.item.${i + 1}`}
              className={cn(
                "p-5 border transition-smooth hover:shadow-elevation",
                isConnected
                  ? "border-success/30 bg-success/5"
                  : "border-border/50",
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-foreground",
                    intg.iconBg,
                  )}
                >
                  {intg.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold">{intg.name}</span>
                    <Badge variant="outline" className="text-[9px] h-4 px-1.5">
                      {intg.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {intg.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/30">
                <div className="flex items-center gap-1.5">
                  {isConnected ? (
                    <CheckCircle2 size={12} className="text-success" />
                  ) : (
                    <Circle size={12} className="text-muted-foreground" />
                  )}
                  <span
                    className={cn(
                      "text-[11px] font-medium",
                      isConnected ? "text-success" : "text-muted-foreground",
                    )}
                  >
                    {isConnected ? "Connected" : "Not connected"}
                  </span>
                </div>
                <Button
                  variant={isConnected ? "outline" : "default"}
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => toggle(intg.id)}
                  data-ocid={`settings.integrations.${intg.id}.button`}
                >
                  {isConnected ? "Disconnect" : "Connect"}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
