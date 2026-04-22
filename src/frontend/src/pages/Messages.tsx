import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format, isToday, isYesterday, parseISO } from "date-fns";
import {
  Archive,
  ArrowDownLeft,
  ArrowUpRight,
  ChevronLeft,
  Clock,
  FileText,
  Mail,
  MessageCircle,
  MessageSquare,
  Mic,
  MoreHorizontal,
  Paperclip,
  Phone,
  Play,
  Plus,
  Search,
  Send,
  Star,
  StickyNote,
  Trash2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Channel = "All" | "Email" | "Call" | "WhatsApp" | "SMS" | "Note";
type StatusFilter = "All" | "Unread" | "Starred" | "Archived";

interface Conversation {
  id: string;
  name: string;
  company: string;
  email: string;
  channel: Exclude<Channel, "All">;
  lastMessage: string;
  timestamp: string;
  unread: number;
  starred: boolean;
  archived: boolean;
}

interface ThreadMessage {
  id: string;
  direction: "inbound" | "outbound";
  channel: Exclude<Channel, "All">;
  from: string;
  body: string;
  subject?: string;
  timestamp: string;
  attachments?: string[];
  callDuration?: string;
  callOutcome?: string;
}

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const CONVERSATIONS: Conversation[] = [
  {
    id: "c1",
    name: "Sarah Mitchell",
    company: "TechNova Inc.",
    email: "sarah@technova.io",
    channel: "Email",
    lastMessage:
      "Thanks for the updated pricing. I've reviewed it with our CFO…",
    timestamp: "2026-04-22T10:30:00",
    unread: 2,
    starred: true,
    archived: false,
  },
  {
    id: "c2",
    name: "James Thornton",
    company: "Meridian Group",
    email: "j.thornton@meridian.com",
    channel: "Call",
    lastMessage: "45-min demo call — James was very engaged throughout.",
    timestamp: "2026-04-20T15:00:00",
    unread: 0,
    starred: false,
    archived: false,
  },
  {
    id: "c3",
    name: "Nina Andersen",
    company: "Nordic Capital",
    email: "nina@nordiccap.se",
    channel: "WhatsApp",
    lastMessage:
      "Our lawyers finished the review. We're good to sign Thursday!",
    timestamp: "2026-04-22T09:05:00",
    unread: 1,
    starred: true,
    archived: false,
  },
  {
    id: "c4",
    name: "Elena Vasquez",
    company: "ClearStream Media",
    email: "elena@clearstream.tv",
    channel: "Email",
    lastMessage:
      "We can agree to enterprise tier but need volume discount extended.",
    timestamp: "2026-04-21T16:00:00",
    unread: 0,
    starred: false,
    archived: false,
  },
  {
    id: "c5",
    name: "David Park",
    company: "Apex Logistics",
    email: "david@salesforge.io",
    channel: "Note",
    lastMessage: "Expansion opportunity in Q3 for additional licenses.",
    timestamp: "2026-04-22T11:00:00",
    unread: 0,
    starred: false,
    archived: false,
  },
  {
    id: "c6",
    name: "Benjamin Stark",
    company: "Harbor Insurance",
    email: "b.stark@harborins.com",
    channel: "Email",
    lastMessage: "URGENT: We need SOC 2 docs by EOD Friday or restart eval.",
    timestamp: "2026-04-22T14:00:00",
    unread: 3,
    starred: false,
    archived: false,
  },
  {
    id: "c7",
    name: "Priya Kapoor",
    company: "BrightPath Analytics",
    email: "priya@brightpath.ai",
    channel: "SMS",
    lastMessage:
      "Quick question — does your platform support real-time dashboards?",
    timestamp: "2026-04-19T11:20:00",
    unread: 1,
    starred: false,
    archived: false,
  },
  {
    id: "c8",
    name: "Marcus Johnson",
    company: "Summit Real Estate",
    email: "marcus@summitrealty.com",
    channel: "Call",
    lastMessage: "Follow up after conference. Strong interest in Pro tier.",
    timestamp: "2026-04-18T14:30:00",
    unread: 0,
    starred: false,
    archived: true,
  },
];

const THREADS: Record<string, ThreadMessage[]> = {
  c1: [
    {
      id: "t1-1",
      direction: "outbound",
      channel: "Email",
      from: "Alex Rivera",
      body: "Hi Sarah, as discussed, please find the revised pricing proposal attached. Key highlights:\n\n• Annual commitment: 15% discount\n• Dedicated CSM included at Enterprise tier\n• SOC 2 Type II certification completed\n\nLet me know if you have any questions. Happy to hop on a call this week.",
      subject: "Revised Pricing Proposal — TechNova Enterprise",
      timestamp: "2026-04-19T14:00:00",
      attachments: ["proposal-v3.pdf", "security-cert.pdf"],
    },
    {
      id: "t1-2",
      direction: "inbound",
      channel: "Email",
      from: "Sarah Mitchell",
      body: "Hi Alex, thanks for the updated pricing. I've reviewed it with our CFO and we have a few questions before we proceed.\n\n1. Can the 15% discount apply to a 2-year commitment?\n2. What does dedicated CSM onboarding look like?\n3. Is there a sandbox environment included?\n\nLooking forward to your response!",
      subject: "Re: Revised Pricing Proposal",
      timestamp: "2026-04-22T10:30:00",
    },
  ],
  c2: [
    {
      id: "t2-1",
      direction: "inbound",
      channel: "Call",
      from: "James Thornton",
      body: "Discovery call — James walked through their current CRM pain points. Main needs: pipeline visibility, team collaboration, and Slack integration.",
      timestamp: "2026-04-18T11:00:00",
      callDuration: "22:14",
      callOutcome: "Connected",
    },
    {
      id: "t2-2",
      direction: "outbound",
      channel: "Call",
      from: "Alex Rivera",
      body: "Full product demo completed. James was very engaged. Walked through pipeline board, reporting, and API capabilities. Legal team needs to review enterprise contract terms next.",
      timestamp: "2026-04-20T15:00:00",
      callDuration: "45:08",
      callOutcome: "Connected",
    },
  ],
  c3: [
    {
      id: "t3-1",
      direction: "outbound",
      channel: "WhatsApp",
      from: "Maria Chen",
      body: "Hi Nina! Just checking in — how's the contract review going on your end? 😊",
      timestamp: "2026-04-22T08:55:00",
    },
    {
      id: "t3-2",
      direction: "inbound",
      channel: "WhatsApp",
      from: "Nina Andersen",
      body: "Maria, our lawyers finished the review. We're good to sign on Thursday! 🎉",
      timestamp: "2026-04-22T09:00:00",
    },
    {
      id: "t3-3",
      direction: "outbound",
      channel: "SMS",
      from: "Maria Chen",
      body: "Great news Nina! I'll send the calendar invite for Thursday at 3pm CET.",
      timestamp: "2026-04-22T09:05:00",
    },
  ],
  c4: [
    {
      id: "t4-1",
      direction: "inbound",
      channel: "Email",
      from: "Elena Vasquez",
      body: "Maria, we've spoken with our board. We can agree to the enterprise tier but need the volume discount extended to 2 years. Also, our procurement team requires a custom SLA addendum.",
      subject: "Negotiation Update",
      timestamp: "2026-04-21T16:00:00",
    },
  ],
  c5: [
    {
      id: "t5-1",
      direction: "outbound",
      channel: "Note",
      from: "David Park",
      body: "Apex Logistics deal closed at $56K ARR. Onboarding went smoothly. Robert Kim (Head of Ops) is an excellent contact and very happy with the product.\n\nStrong expansion opportunity in Q3 for 5 additional licenses across the Singapore office. Flag for renewal team at 9-month mark.",
      subject: "Apex Logistics — Post-Sale Notes",
      timestamp: "2026-04-22T11:00:00",
    },
  ],
  c6: [
    {
      id: "t6-1",
      direction: "inbound",
      channel: "Email",
      from: "Benjamin Stark",
      body: "David, before we can proceed with procurement, we'll need:\n\n1. SOC 2 Type II report (last 12 months)\n2. Penetration test results\n3. Data processing agreement\n4. Business continuity plan\n\nPlease route through our IT security team: security@harborins.com",
      subject: "Security Assessment Requirements",
      timestamp: "2026-04-21T13:00:00",
      attachments: ["security-requirements.pdf"],
    },
    {
      id: "t6-2",
      direction: "inbound",
      channel: "Email",
      from: "Benjamin Stark",
      body: "David, following up on the security docs. Our IT team is on a deadline. Could you confirm receipt and ETA?",
      subject: "Re: Security Assessment Requirements",
      timestamp: "2026-04-22T09:00:00",
    },
    {
      id: "t6-3",
      direction: "inbound",
      channel: "Email",
      from: "Benjamin Stark",
      body: "Third reminder — we need these documents by EOD Friday or we'll need to restart the evaluation process entirely.",
      subject: "URGENT: Security Assessment Requirements",
      timestamp: "2026-04-22T14:00:00",
    },
  ],
  c7: [
    {
      id: "t7-1",
      direction: "inbound",
      channel: "SMS",
      from: "Priya Kapoor",
      body: "Quick question — does your platform support real-time dashboards?",
      timestamp: "2026-04-19T11:20:00",
    },
    {
      id: "t7-2",
      direction: "outbound",
      channel: "SMS",
      from: "David Park",
      body: "Yes! Real-time dashboards are included in all plans. I can schedule a quick demo if you'd like to see it in action.",
      timestamp: "2026-04-19T11:35:00",
    },
  ],
  c8: [
    {
      id: "t8-1",
      direction: "outbound",
      channel: "Call",
      from: "Alex Rivera",
      body: "Initial cold outreach call. Marcus was open to a follow-up after the industry conference next month.",
      timestamp: "2026-04-18T14:30:00",
      callDuration: "8:22",
      callOutcome: "Connected",
    },
  ],
};

const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: "tpl1",
    name: "Follow-up",
    subject: "Following up — {{Company}}",
    body: "Hi {{Name}},\n\nI wanted to follow up on our recent conversation. Have you had a chance to review the proposal we discussed?\n\nI'd love to hear your thoughts and address any questions.\n\nBest regards,\n{{SenderName}}",
  },
  {
    id: "tpl2",
    name: "Meeting Invite",
    subject: "Let's connect — {{Company}} × SalesForge",
    body: "Hi {{Name}},\n\nI'd love to schedule a 30-minute call to show you how SalesForge can help {{Company}} streamline your sales process.\n\nAre you available this week?\n[Calendar Link]\n\nLooking forward to connecting!\n{{SenderName}}",
  },
  {
    id: "tpl3",
    name: "Proposal",
    subject: "Proposal for {{Company}} — SalesForge Enterprise",
    body: "Hi {{Name}},\n\nThank you for your interest in SalesForge. Based on our discussions, I've prepared a customized proposal for {{Company}}.\n\nPlease find the full proposal attached.\n\nBest regards,\n{{SenderName}}",
  },
  {
    id: "tpl4",
    name: "Thank You",
    subject: "Thank you, {{Name}}!",
    body: "Hi {{Name}},\n\nThank you for taking the time to meet with us today. It was a pleasure learning more about {{Company}}.\n\nI'll send over the resources we discussed by end of day.\n\nLooking forward to working together!\n{{SenderName}}",
  },
  {
    id: "tpl5",
    name: "Check-in",
    subject: "Checking in — anything I can help with?",
    body: "Hi {{Name}},\n\nJust wanted to check in and see how things are going at {{Company}}. Is there anything I can help with?\n\nAlways happy to chat!\n\n{{SenderName}}",
  },
];

// ─── Channel Config ───────────────────────────────────────────────────────────

const CHANNEL_CFG: Record<
  Exclude<Channel, "All">,
  { icon: React.ReactNode; colorClass: string; bgClass: string }
> = {
  Email: {
    icon: <Mail size={12} />,
    colorClass: "text-blue-600 dark:text-blue-400",
    bgClass: "bg-blue-50 dark:bg-blue-950/40",
  },
  Call: {
    icon: <Phone size={12} />,
    colorClass: "text-emerald-600 dark:text-emerald-400",
    bgClass: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  WhatsApp: {
    icon: <MessageCircle size={12} />,
    colorClass: "text-green-600 dark:text-green-400",
    bgClass: "bg-green-50 dark:bg-green-950/40",
  },
  SMS: {
    icon: <MessageSquare size={12} />,
    colorClass: "text-violet-600 dark:text-violet-400",
    bgClass: "bg-violet-50 dark:bg-violet-950/40",
  },
  Note: {
    icon: <StickyNote size={12} />,
    colorClass: "text-amber-600 dark:text-amber-400",
    bgClass: "bg-amber-50 dark:bg-amber-950/40",
  },
};

const CHANNEL_TABS: { label: Channel; icon: React.ReactNode }[] = [
  { label: "All", icon: <MessageSquare size={12} /> },
  { label: "Email", icon: <Mail size={12} /> },
  { label: "Call", icon: <Phone size={12} /> },
  { label: "WhatsApp", icon: <MessageCircle size={12} /> },
  { label: "SMS", icon: <MessageSquare size={12} /> },
  { label: "Note", icon: <StickyNote size={12} /> },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtConvTime(ts: string): string {
  const d = parseISO(ts);
  if (isToday(d)) return format(d, "h:mm a");
  if (isYesterday(d)) return "Yesterday";
  return format(d, "MMM d");
}

function fmtMsgTime(ts: string): string {
  return format(parseISO(ts), "MMM d, h:mm a");
}

function fmtDateSep(ts: string): string {
  const d = parseISO(ts);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "EEEE, MMMM d");
}

function groupByDate(msgs: ThreadMessage[]) {
  const groups: { date: string; messages: ThreadMessage[] }[] = [];
  for (const msg of msgs) {
    const day = msg.timestamp.slice(0, 10);
    const last = groups[groups.length - 1];
    if (last && last.date === day) last.messages.push(msg);
    else groups.push({ date: day, messages: [msg] });
  }
  return groups;
}

// ─── Channel Badge ────────────────────────────────────────────────────────────

function ChannelBadge({ channel }: { channel: Exclude<Channel, "All"> }) {
  const cfg = CHANNEL_CFG[channel];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium",
        cfg.colorClass,
        cfg.bgClass,
      )}
    >
      {cfg.icon}
      {channel}
    </span>
  );
}

// ─── Message Renderers ────────────────────────────────────────────────────────

function EmailBubble({ msg }: { msg: ThreadMessage }) {
  const isOut = msg.direction === "outbound";
  return (
    <div className={cn("w-full max-w-2xl", isOut ? "ml-auto" : "mr-auto")}>
      <div
        className={cn(
          "rounded-2xl border p-4",
          isOut ? "bg-primary/5 border-primary/20" : "bg-card border-border",
        )}
      >
        {msg.subject && (
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">
            Subject:{" "}
            <span className="text-foreground normal-case font-medium">
              {msg.subject}
            </span>
          </p>
        )}
        <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
          {msg.body}
        </p>
        {msg.attachments && msg.attachments.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {msg.attachments.map((att) => (
              <div
                key={att}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/60 text-xs text-muted-foreground border border-border cursor-pointer hover:bg-muted transition-colors"
              >
                <Paperclip size={11} />
                {att}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={cn(
          "flex items-center gap-1.5 mt-1.5 px-1",
          isOut ? "justify-end" : "justify-start",
        )}
      >
        <UserAvatar name={msg.from} size="xs" />
        <p className="text-[11px] text-muted-foreground">
          {msg.from} · {fmtMsgTime(msg.timestamp)}
        </p>
      </div>
    </div>
  );
}

function CallBubble({ msg }: { msg: ThreadMessage }) {
  const isOut = msg.direction === "outbound";
  return (
    <div className={cn("flex gap-3", isOut ? "flex-row-reverse" : "flex-row")}>
      <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center">
        {isOut ? (
          <ArrowUpRight size={14} className="text-emerald-600" />
        ) : (
          <ArrowDownLeft size={14} className="text-emerald-600" />
        )}
      </div>
      <div className="rounded-2xl border px-4 py-3 max-w-sm bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-800/40">
        <div className="flex items-center flex-wrap gap-2 mb-2">
          <Phone size={12} className="text-emerald-600" />
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            {isOut ? "Outbound" : "Inbound"} Call
          </span>
          {msg.callDuration && (
            <span className="text-xs text-muted-foreground">
              · {msg.callDuration}
            </span>
          )}
          {msg.callOutcome && (
            <Badge
              variant="outline"
              className="text-[10px] h-4 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400 px-1.5"
            >
              {msg.callOutcome}
            </Badge>
          )}
        </div>
        <p className="text-sm text-foreground leading-relaxed">{msg.body}</p>
        <button
          type="button"
          className="mt-2.5 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 rounded-lg bg-muted/50 hover:bg-muted"
        >
          <Play size={10} />
          Play Recording
          <Mic size={10} className="ml-0.5" />
        </button>
      </div>
      <p className="self-end text-[11px] text-muted-foreground pb-1">
        {fmtMsgTime(msg.timestamp)}
      </p>
    </div>
  );
}

function ChatBubble({ msg }: { msg: ThreadMessage }) {
  const isOut = msg.direction === "outbound";
  const isWA = msg.channel === "WhatsApp";
  return (
    <div
      className={cn(
        "flex gap-2 max-w-[75%]",
        isOut ? "ml-auto flex-row-reverse" : "mr-auto flex-row",
      )}
    >
      <UserAvatar name={msg.from} size="xs" className="shrink-0 mt-auto" />
      <div>
        <div
          className={cn(
            "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
            isOut
              ? "bg-primary text-primary-foreground rounded-br-sm"
              : isWA
                ? "bg-green-100 dark:bg-green-900/40 text-foreground rounded-bl-sm border border-green-200/60 dark:border-green-700/40"
                : "bg-violet-100 dark:bg-violet-900/30 text-foreground rounded-bl-sm border border-violet-200/60 dark:border-violet-700/40",
          )}
        >
          {msg.body}
        </div>
        <p
          className={cn(
            "text-[10px] text-muted-foreground mt-1",
            isOut ? "text-right" : "text-left",
          )}
        >
          {fmtMsgTime(msg.timestamp)}
        </p>
      </div>
    </div>
  );
}

function NoteBubble({ msg }: { msg: ThreadMessage }) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="rounded-2xl border border-amber-200/70 dark:border-amber-700/40 bg-amber-50/60 dark:bg-amber-950/20 p-4">
        <div className="flex items-center gap-2 mb-2.5">
          <StickyNote size={13} className="text-amber-600" />
          <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
            Internal Note
          </span>
          {msg.subject && (
            <span className="text-xs text-muted-foreground">
              — {msg.subject}
            </span>
          )}
        </div>
        <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
          {msg.body}
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground mt-1.5 text-center">
        {fmtMsgTime(msg.timestamp)} · {msg.from}
      </p>
    </div>
  );
}

function MessageRenderer({ msg }: { msg: ThreadMessage }) {
  if (msg.channel === "Email") return <EmailBubble msg={msg} />;
  if (msg.channel === "Call") return <CallBubble msg={msg} />;
  if (msg.channel === "Note") return <NoteBubble msg={msg} />;
  return <ChatBubble msg={msg} />;
}

// ─── Compose Modal ─────────────────────────────────────────────────────────────

function ComposeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"Email" | "WhatsApp" | "SMS" | "Note">(
    "Email",
  );
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [scheduleSend, setScheduleSend] = useState(false);
  const [scheduleTime, setScheduleTime] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  function applyTemplate(tplId: string) {
    const tpl = EMAIL_TEMPLATES.find((t) => t.id === tplId);
    if (tpl) {
      setSubject(tpl.subject);
      setBody(tpl.body);
      setSelectedTemplate(tplId);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-2xl w-full p-0 gap-0 overflow-hidden rounded-2xl"
        data-ocid="compose.dialog"
      >
        <DialogHeader className="px-6 pt-5 pb-4 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <DialogTitle className="font-display text-base font-semibold">
              New Message
            </DialogTitle>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-muted transition-colors"
              data-ocid="compose.close_button"
            >
              <X size={16} className="text-muted-foreground" />
            </button>
          </div>
          <Tabs
            value={tab}
            onValueChange={(v) =>
              setTab(v as "Email" | "WhatsApp" | "SMS" | "Note")
            }
            className="mt-3"
          >
            <TabsList className="h-8">
              {(["Email", "WhatsApp", "SMS", "Note"] as const).map((ch) => {
                const cfg = CHANNEL_CFG[ch];
                return (
                  <TabsTrigger
                    key={ch}
                    value={ch}
                    className="text-xs gap-1"
                    data-ocid={`compose.tab.${ch.toLowerCase()}`}
                  >
                    <span className={cfg.colorClass}>{cfg.icon}</span>
                    {ch}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </DialogHeader>

        <div className="px-6 py-4 space-y-3 bg-background">
          <div className="space-y-1">
            <Label className="text-xs text-muted-foreground">To</Label>
            <Input
              placeholder="recipient@company.com"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="h-8 text-sm"
              data-ocid="compose.to.input"
            />
          </div>

          {tab === "Email" && (
            <>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">CC</Label>
                <Input
                  placeholder="cc@company.com"
                  value={cc}
                  onChange={(e) => setCc(e.target.value)}
                  className="h-8 text-sm"
                  data-ocid="compose.cc.input"
                />
              </div>
              <div className="flex items-end gap-2">
                <div className="flex-1 space-y-1">
                  <Label className="text-xs text-muted-foreground">
                    Subject
                  </Label>
                  <Input
                    placeholder="Email subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="h-8 text-sm"
                    data-ocid="compose.subject.input"
                  />
                </div>
                <div className="space-y-1 shrink-0">
                  <Label className="text-xs text-muted-foreground">
                    Template
                  </Label>
                  <select
                    value={selectedTemplate}
                    onChange={(e) => applyTemplate(e.target.value)}
                    className="h-8 text-xs rounded-lg border border-input bg-background px-2 focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer"
                    data-ocid="compose.template.select"
                  >
                    <option value="">Select template…</option>
                    {EMAIL_TEMPLATES.map((tpl) => (
                      <option key={tpl.id} value={tpl.id}>
                        {tpl.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}

          {tab === "Note" && (
            <div className="flex items-center gap-2.5">
              <Switch
                checked={isPrivate}
                onCheckedChange={setIsPrivate}
                id="note-private"
                data-ocid="compose.private.switch"
              />
              <Label
                htmlFor="note-private"
                className="text-xs text-muted-foreground cursor-pointer"
              >
                Private note (only visible to your team)
              </Label>
            </div>
          )}

          <div className="space-y-1">
            <Label className="text-xs text-muted-foreground">Message</Label>
            <Textarea
              placeholder={
                tab === "Email"
                  ? "Write your email…"
                  : tab === "Note"
                    ? "Add a note about this contact or deal…"
                    : "Type a message…"
              }
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={7}
              className="text-sm resize-none"
              data-ocid="compose.body.textarea"
            />
          </div>

          <div className="flex items-center gap-3 py-0.5">
            <Switch
              checked={scheduleSend}
              onCheckedChange={setScheduleSend}
              id="schedule-send"
              data-ocid="compose.schedule.switch"
            />
            <Label
              htmlFor="schedule-send"
              className="text-xs text-muted-foreground cursor-pointer flex items-center gap-1.5"
            >
              <Clock size={11} />
              Schedule send
            </Label>
            {scheduleSend && (
              <Input
                type="datetime-local"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="h-7 text-xs w-44"
                data-ocid="compose.schedule.input"
              />
            )}
          </div>

          {scheduleSend && scheduleTime && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-xs text-muted-foreground bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 flex items-center gap-2"
            >
              <Clock size={11} className="text-primary shrink-0" />
              Will send at {format(new Date(scheduleTime), "MMM d, h:mm a")}
            </motion.div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-border bg-card flex items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
              title="Attach file"
            >
              <Paperclip size={14} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              data-ocid="compose.cancel_button"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={onClose}
              className="gap-1.5"
              data-ocid="compose.submit_button"
            >
              {scheduleSend ? <Clock size={13} /> : <Send size={13} />}
              {scheduleSend ? "Schedule Send" : "Send"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function MessagesPage() {
  const [activeChannel, setActiveChannel] = useState<Channel>("All");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [search, setSearch] = useState("");
  const [activeConvId, setActiveConvId] = useState<string | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [showThread, setShowThread] = useState(false);
  const threadEndRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    return CONVERSATIONS.filter((c) => {
      if (activeChannel !== "All" && c.channel !== activeChannel) return false;
      if (statusFilter === "Unread" && c.unread === 0) return false;
      if (statusFilter === "Starred" && !c.starred) return false;
      if (statusFilter === "Archived" && !c.archived) return false;
      if (statusFilter === "All" && c.archived) return false;
      const q = search.toLowerCase();
      if (
        q &&
        !c.name.toLowerCase().includes(q) &&
        !c.company.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [activeChannel, statusFilter, search]);

  const activeConv = CONVERSATIONS.find((c) => c.id === activeConvId) ?? null;
  const messages = activeConvId ? (THREADS[activeConvId] ?? []) : [];
  const grouped = groupByDate(messages);

  const counts = useMemo(() => {
    const base = CONVERSATIONS.filter((c) => !c.archived);
    return {
      All: base.filter((c) => c.unread > 0).length,
      Email: base.filter((c) => c.channel === "Email" && c.unread > 0).length,
      Call: base.filter((c) => c.channel === "Call" && c.unread > 0).length,
      WhatsApp: base.filter((c) => c.channel === "WhatsApp" && c.unread > 0)
        .length,
      SMS: base.filter((c) => c.channel === "SMS" && c.unread > 0).length,
      Note: base.filter((c) => c.channel === "Note" && c.unread > 0).length,
    } as Record<Channel, number>;
  }, []);

  const msgCount = messages.length;
  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on conv change or new message
  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeConvId, msgCount]);

  function selectConv(id: string) {
    setActiveConvId(id);
    setShowThread(true);
  }

  return (
    <div
      className="h-[calc(100vh-4rem)] flex flex-col"
      data-ocid="messages.page"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-card shrink-0">
        <div>
          <h1 className="font-display text-lg font-bold text-foreground">
            Communication Center
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Emails, calls, messages, and notes — all in one place
          </p>
        </div>
        <Button
          size="sm"
          className="gap-1.5 h-8 text-xs"
          onClick={() => setComposeOpen(true)}
          data-ocid="messages.compose_button"
        >
          <Plus size={13} />
          Compose
        </Button>
      </div>

      {/* Two-panel layout */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* ── LEFT: Conversation list ── */}
        <div
          className={cn(
            "w-80 shrink-0 border-r border-border bg-card flex flex-col",
            showThread ? "hidden md:flex" : "flex w-full md:w-80",
          )}
        >
          {/* Channel tabs */}
          <div className="px-3 pt-3 pb-2 border-b border-border">
            <div className="flex flex-wrap gap-1">
              {CHANNEL_TABS.map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    setActiveChannel(label);
                  }}
                  data-ocid={`messages.channel.tab.${label.toLowerCase()}`}
                  className={cn(
                    "flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-smooth",
                    activeChannel === label
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent",
                  )}
                >
                  {icon}
                  {label}
                  {counts[label] > 0 && (
                    <span className="ml-0.5 min-w-[16px] h-4 px-1 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold">
                      {counts[label]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Search + Filter */}
          <div className="px-3 py-2 space-y-2 border-b border-border">
            <div className="relative">
              <Search
                size={13}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search conversations…"
                className="w-full pl-7 pr-3 h-8 text-xs rounded-lg border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                data-ocid="messages.search.input"
              />
            </div>
            <div className="flex gap-1">
              {(["All", "Unread", "Starred", "Archived"] as StatusFilter[]).map(
                (sf) => (
                  <button
                    key={sf}
                    type="button"
                    onClick={() => setStatusFilter(sf)}
                    data-ocid={`messages.filter.${sf.toLowerCase()}`}
                    className={cn(
                      "flex-1 text-[10px] py-1 rounded-md font-medium transition-colors",
                      statusFilter === sf
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted",
                    )}
                  >
                    {sf}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* List */}
          <ScrollArea className="flex-1">
            {filtered.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-12 text-center px-4"
                data-ocid="messages.list.empty_state"
              >
                <div className="w-10 h-10 rounded-2xl bg-muted/60 flex items-center justify-center mb-3">
                  <MessageSquare
                    size={18}
                    className="text-muted-foreground/50"
                  />
                </div>
                <p className="text-xs font-medium text-foreground">
                  No conversations
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Try adjusting filters or channel tab
                </p>
              </div>
            ) : (
              <div className="py-1">
                {filtered.map((conv, idx) => (
                  <motion.div
                    key={conv.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.22 }}
                  >
                    <button
                      type="button"
                      onClick={() => selectConv(conv.id)}
                      data-ocid={`messages.conversation.item.${idx + 1}`}
                      className={cn(
                        "w-full flex items-start gap-2.5 px-3 py-3 text-left group relative hover:bg-muted/60 transition-smooth",
                        activeConvId === conv.id &&
                          "bg-primary/5 border-r-2 border-r-primary",
                      )}
                    >
                      {/* Avatar with channel badge */}
                      <div className="relative shrink-0">
                        <UserAvatar name={conv.name} size="sm" />
                        <span
                          className={cn(
                            "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card flex items-center justify-center",
                            CHANNEL_CFG[conv.channel].bgClass,
                          )}
                        >
                          <span
                            className={cn(
                              "scale-75",
                              CHANNEL_CFG[conv.channel].colorClass,
                            )}
                          >
                            {CHANNEL_CFG[conv.channel].icon}
                          </span>
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-1">
                          <span
                            className={cn(
                              "text-xs truncate",
                              conv.unread > 0
                                ? "text-foreground font-semibold"
                                : "text-foreground font-medium",
                            )}
                          >
                            {conv.name}
                          </span>
                          <span className="text-[10px] text-muted-foreground shrink-0">
                            {fmtConvTime(conv.timestamp)}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                          {conv.company}
                        </p>
                        <p
                          className={cn(
                            "text-[11px] truncate mt-0.5",
                            conv.unread > 0
                              ? "text-foreground"
                              : "text-muted-foreground",
                          )}
                        >
                          {conv.lastMessage}
                        </p>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        {conv.unread > 0 && (
                          <span className="min-w-[16px] h-4 px-1 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold">
                            {conv.unread}
                          </span>
                        )}
                        {conv.starred && (
                          <Star
                            size={10}
                            className="text-amber-500 fill-amber-400"
                          />
                        )}
                      </div>

                      {/* Hover actions */}
                      <div className="absolute right-2 top-2 hidden group-hover:flex items-center gap-0.5 bg-card border border-border rounded-lg shadow-sm p-0.5 z-10">
                        <button
                          type="button"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground"
                          title="Archive"
                          data-ocid={`messages.archive_button.${idx + 1}`}
                        >
                          <Archive size={10} />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-destructive"
                          title="Delete"
                          data-ocid={`messages.delete_button.${idx + 1}`}
                        >
                          <Trash2 size={10} />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground"
                          title="More"
                        >
                          <MoreHorizontal size={10} />
                        </button>
                      </div>
                    </button>
                    <Separator className="mx-3 opacity-40" />
                  </motion.div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>

        {/* ── RIGHT: Thread ── */}
        <div
          className={cn(
            "flex-1 flex flex-col bg-background min-w-0",
            showThread ? "flex" : "hidden md:flex",
          )}
        >
          <AnimatePresence mode="wait">
            {!activeConv ? (
              <motion.div
                key="no-selection"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center px-6"
                data-ocid="messages.thread.empty_state"
              >
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4"
                >
                  <MessageCircle size={28} className="text-primary/60" />
                </motion.div>
                <h3 className="font-display font-semibold text-base text-foreground mb-1.5">
                  Select a conversation
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                  Choose a conversation from the list to view messages, or
                  compose a new one.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-5 gap-1.5"
                  onClick={() => setComposeOpen(true)}
                  data-ocid="messages.thread.compose_button"
                >
                  <Plus size={13} />
                  Compose Message
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={activeConvId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex flex-col min-h-0"
              >
                {/* Thread header */}
                <div
                  className="flex items-center gap-3 px-5 py-3 border-b border-border bg-card shrink-0"
                  data-ocid="messages.thread.header"
                >
                  <button
                    type="button"
                    onClick={() => setShowThread(false)}
                    className="md:hidden p-1.5 rounded-lg hover:bg-muted transition-colors"
                    data-ocid="messages.back_button"
                  >
                    <ChevronLeft size={16} className="text-muted-foreground" />
                  </button>

                  <UserAvatar name={activeConv.name} size="sm" />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-display text-sm font-semibold text-foreground truncate">
                        {activeConv.name}
                      </span>
                      <ChannelBadge channel={activeConv.channel} />
                    </div>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {activeConv.company} · {activeConv.email}
                    </p>
                  </div>

                  <div className="flex items-center gap-0.5 shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                      title="Call"
                      data-ocid="messages.thread.call_button"
                    >
                      <Phone size={13} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                      title="Email"
                      data-ocid="messages.thread.email_button"
                    >
                      <Mail size={13} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                      title="WhatsApp"
                      data-ocid="messages.thread.whatsapp_button"
                    >
                      <MessageCircle size={13} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                      title="Add note"
                      data-ocid="messages.thread.note_button"
                    >
                      <StickyNote size={13} />
                    </Button>
                    <Separator orientation="vertical" className="h-4 mx-1" />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                      title="More actions"
                    >
                      <MoreHorizontal size={14} />
                    </Button>
                  </div>
                </div>

                {/* Messages scroll area */}
                <ScrollArea className="flex-1 px-5 py-4">
                  <div className="space-y-6 pb-2">
                    {grouped.map((group) => (
                      <div key={group.date}>
                        {/* Date separator */}
                        <div className="flex items-center gap-3 my-3">
                          <div className="flex-1 h-px bg-border" />
                          <span className="text-[10px] text-muted-foreground font-medium px-2.5 py-0.5 rounded-full bg-muted/60 border border-border/60 whitespace-nowrap">
                            {fmtDateSep(`${group.date}T12:00:00`)}
                          </span>
                          <div className="flex-1 h-px bg-border" />
                        </div>
                        <div className="space-y-4">
                          {group.messages.map((msg) => (
                            <motion.div
                              key={msg.id}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.22 }}
                            >
                              <MessageRenderer msg={msg} />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div ref={threadEndRef} />
                </ScrollArea>

                {/* Reply bar */}
                <div
                  className="border-t border-border bg-card px-4 py-3 shrink-0"
                  data-ocid="messages.reply.panel"
                >
                  <div className="flex items-end gap-2.5">
                    <div className="flex-1 min-w-0 rounded-xl border border-input bg-background px-3 py-2 focus-within:ring-1 focus-within:ring-ring transition-smooth">
                      <textarea
                        placeholder={`Reply via ${activeConv.channel}…`}
                        rows={2}
                        className="w-full bg-transparent text-sm text-foreground resize-none focus:outline-none placeholder:text-muted-foreground"
                        data-ocid="messages.reply.textarea"
                      />
                      <div className="flex items-center gap-1 pt-1.5 border-t border-border/40 mt-1">
                        <button
                          type="button"
                          className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                          title="Attach file"
                        >
                          <Paperclip size={12} />
                        </button>
                        <button
                          type="button"
                          className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                          title="Insert template"
                        >
                          <FileText size={12} />
                        </button>
                        <button
                          type="button"
                          className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                          title="Schedule send"
                        >
                          <Clock size={12} />
                        </button>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="h-9 w-9 p-0 shrink-0 rounded-xl"
                      title="Send"
                      data-ocid="messages.reply.submit_button"
                    >
                      <Send size={14} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ComposeModal open={composeOpen} onClose={() => setComposeOpen(false)} />
    </div>
  );
}
