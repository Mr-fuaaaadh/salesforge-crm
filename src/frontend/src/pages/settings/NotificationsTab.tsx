import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Bell,
  BellOff,
  CalendarClock,
  Mail,
  MessageSquare,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

type Channel = "email" | "push" | "inapp";
type Frequency = "immediate" | "daily" | "weekly";

interface NotifType {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  channels: Record<Channel, boolean>;
  frequency: Frequency;
}

const initialTypes: NotifType[] = [
  {
    id: "new_lead",
    label: "New Lead",
    description: "When a new lead is created or assigned to you",
    icon: <Star size={14} />,
    channels: { email: true, push: true, inapp: true },
    frequency: "immediate",
  },
  {
    id: "deal_stage",
    label: "Deal Stage Change",
    description: "When a deal moves to a new pipeline stage",
    icon: <TrendingUp size={14} />,
    channels: { email: true, push: false, inapp: true },
    frequency: "immediate",
  },
  {
    id: "task_due",
    label: "Task Due",
    description: "Reminders for upcoming and overdue tasks",
    icon: <CalendarClock size={14} />,
    channels: { email: true, push: true, inapp: true },
    frequency: "daily",
  },
  {
    id: "meeting",
    label: "Meeting Reminder",
    description: "Before scheduled meetings and appointments",
    icon: <CalendarClock size={14} />,
    channels: { email: false, push: true, inapp: true },
    frequency: "immediate",
  },
  {
    id: "team_msg",
    label: "Team Message",
    description: "When a team member mentions or messages you",
    icon: <MessageSquare size={14} />,
    channels: { email: false, push: true, inapp: true },
    frequency: "immediate",
  },
  {
    id: "report_ready",
    label: "Report Ready",
    description: "When a scheduled report has been generated",
    icon: <Zap size={14} />,
    channels: { email: true, push: false, inapp: false },
    frequency: "weekly",
  },
  {
    id: "team_activity",
    label: "Team Activity",
    description: "When your team members complete key actions",
    icon: <Users size={14} />,
    channels: { email: false, push: false, inapp: true },
    frequency: "daily",
  },
];

const CHANNELS: { key: Channel; label: string; icon: React.ReactNode }[] = [
  { key: "email", label: "Email", icon: <Mail size={12} /> },
  { key: "push", label: "Push", icon: <Smartphone size={12} /> },
  { key: "inapp", label: "In-App", icon: <Bell size={12} /> },
];

const FREQUENCIES: { key: Frequency; label: string }[] = [
  { key: "immediate", label: "Immediate" },
  { key: "daily", label: "Daily Digest" },
  { key: "weekly", label: "Weekly" },
];

export function NotificationsTab() {
  const [types, setTypes] = useState<NotifType[]>(initialTypes);
  const [dndEnabled, setDndEnabled] = useState(false);
  const [dndStart, setDndStart] = useState("22:00");
  const [dndEnd, setDndEnd] = useState("08:00");

  function toggleChannel(id: string, channel: Channel) {
    setTypes((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              channels: { ...t.channels, [channel]: !t.channels[channel] },
            }
          : t,
      ),
    );
  }

  function setFrequency(id: string, freq: Frequency) {
    setTypes((prev) =>
      prev.map((t) => (t.id === id ? { ...t, frequency: freq } : t)),
    );
  }

  return (
    <div className="space-y-5">
      {/* Notification Matrix */}
      <Card className="p-6 border border-border/60 space-y-5">
        <div>
          <h3 className="font-display font-semibold text-base">
            Notification Preferences
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Control how and when you receive notifications.
          </p>
        </div>
        <Separator />
        {/* Column headers */}
        <div className="hidden sm:grid grid-cols-[1fr_auto_auto_auto_auto] gap-3 text-[10px] text-muted-foreground uppercase tracking-wide px-1 pb-1">
          <span>Type</span>
          {CHANNELS.map((c) => (
            <span key={c.key} className="text-center w-16">
              {c.label}
            </span>
          ))}
          <span className="text-center w-28">Frequency</span>
        </div>
        <div className="space-y-2">
          {types.map((notif, i) => (
            <div
              key={notif.id}
              data-ocid={`settings.notifications.item.${i + 1}`}
              className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_auto_auto_auto] gap-3 items-start sm:items-center p-3 rounded-xl bg-muted/30 border border-border/40 hover:border-border/70 transition-smooth"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <span className="text-muted-foreground mt-0.5 shrink-0">
                  {notif.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium">{notif.label}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {notif.description}
                  </p>
                </div>
              </div>
              {CHANNELS.map((ch) => (
                <div
                  key={ch.key}
                  className="flex items-center justify-center w-16 gap-1 sm:gap-0"
                >
                  <span className="sm:hidden text-[10px] text-muted-foreground mr-1">
                    {ch.label}:
                  </span>
                  <Switch
                    checked={notif.channels[ch.key]}
                    onCheckedChange={() => toggleChannel(notif.id, ch.key)}
                    className="scale-75"
                    data-ocid={`settings.notifications.${notif.id}_${ch.key}.switch`}
                  />
                </div>
              ))}
              <div className="flex gap-1 w-full sm:w-28">
                {FREQUENCIES.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setFrequency(notif.id, f.key)}
                    className={`text-[10px] px-1.5 py-0.5 rounded-md border transition-smooth ${
                      notif.frequency === f.key
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted border-border/40 text-muted-foreground hover:border-border"
                    }`}
                    data-ocid={`settings.notifications.${notif.id}_freq_${f.key}.toggle`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Do Not Disturb */}
      <Card className="p-6 border border-border/60 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BellOff size={16} className="text-muted-foreground" />
            <div>
              <h3 className="font-display font-semibold text-base">
                Do Not Disturb
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Mute all notifications during set hours
              </p>
            </div>
          </div>
          <Switch
            checked={dndEnabled}
            onCheckedChange={setDndEnabled}
            data-ocid="settings.notifications.dnd.switch"
          />
        </div>
        {dndEnabled && (
          <>
            <Separator />
            <div className="flex items-center gap-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Start time</p>
                <input
                  type="time"
                  value={dndStart}
                  onChange={(e) => setDndStart(e.target.value)}
                  className="h-9 px-3 text-sm rounded-lg border border-input bg-background text-foreground"
                  data-ocid="settings.notifications.dnd_start.input"
                />
              </div>
              <span className="text-muted-foreground text-sm mt-4">to</span>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">End time</p>
                <input
                  type="time"
                  value={dndEnd}
                  onChange={(e) => setDndEnd(e.target.value)}
                  className="h-9 px-3 text-sm rounded-lg border border-input bg-background text-foreground"
                  data-ocid="settings.notifications.dnd_end.input"
                />
              </div>
              <Badge variant="secondary" className="text-xs mt-4">
                Active
              </Badge>
            </div>
          </>
        )}
      </Card>

      <div className="flex justify-end">
        <Button
          size="sm"
          className="h-9 px-5"
          data-ocid="settings.notifications.save.submit_button"
        >
          Save Preferences
        </Button>
      </div>
    </div>
  );
}
