import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, x as cn, y as Search, m as motion, b as UserAvatar, E as Ellipsis, A as AnimatePresence, aa as ChevronLeft, M as Mail, X, d as Badge } from "./index-BlMbxdLA.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-CmxgkzUi.js";
import { I as Input } from "./input-NM7OR39o.js";
import { L as Label } from "./label-CJYb5cSz.js";
import { S as ScrollArea } from "./scroll-area-KwEGIApL.js";
import { S as Separator } from "./separator-CwslPhpP.js";
import { S as Switch } from "./switch-BLMWg68o.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "./tabs-CfPtILIY.js";
import { T as Textarea } from "./textarea-BdIGEuKt.js";
import { P as Plus } from "./plus-B_ARFHaG.js";
import { M as MessageSquare } from "./message-square-DcuiSNSD.js";
import { S as Star } from "./star-CWBygbFO.js";
import { T as Trash2 } from "./trash-2-D1139fWY.js";
import { P as Phone } from "./phone-CcwBP2xL.js";
import { S as StickyNote } from "./sticky-note-CqejlyDI.js";
import { P as Paperclip } from "./paperclip-BDniJpSj.js";
import { F as FileText } from "./file-text-CaNw91lo.js";
import { C as Clock } from "./clock-BUl1m0Xe.js";
import { S as Send } from "./send-S2FWeZLf.js";
import { a as addDays, b as isSameDay, p as parseISO, i as isToday } from "./parseISO-w5WsTe_U.js";
import { f as format } from "./format-MbcRETyn.js";
import { c as constructNow } from "./constructNow-BzYtCcud.js";
import { A as ArrowUpRight } from "./arrow-up-right-ANJbz47A.js";
import "./index-BrhQEKyn.js";
import "./index-IXOTxK3N.js";
import "./index-TftrN_Lb.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
];
const Archive = createLucideIcon("archive", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M17 7 7 17", key: "15tmo1" }],
  ["path", { d: "M17 17H7V7", key: "1org7z" }]
];
const ArrowDownLeft = createLucideIcon("arrow-down-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
];
const Mic = createLucideIcon("mic", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode);
function subDays(date, amount) {
  return addDays(date, -1);
}
function isYesterday(date) {
  return isSameDay(date, subDays(constructNow(date)));
}
const CONVERSATIONS = [
  {
    id: "c1",
    name: "Sarah Mitchell",
    company: "TechNova Inc.",
    email: "sarah@technova.io",
    channel: "Email",
    lastMessage: "Thanks for the updated pricing. I've reviewed it with our CFO…",
    timestamp: "2026-04-22T10:30:00",
    unread: 2,
    starred: true,
    archived: false
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
    archived: false
  },
  {
    id: "c3",
    name: "Nina Andersen",
    company: "Nordic Capital",
    email: "nina@nordiccap.se",
    channel: "WhatsApp",
    lastMessage: "Our lawyers finished the review. We're good to sign Thursday!",
    timestamp: "2026-04-22T09:05:00",
    unread: 1,
    starred: true,
    archived: false
  },
  {
    id: "c4",
    name: "Elena Vasquez",
    company: "ClearStream Media",
    email: "elena@clearstream.tv",
    channel: "Email",
    lastMessage: "We can agree to enterprise tier but need volume discount extended.",
    timestamp: "2026-04-21T16:00:00",
    unread: 0,
    starred: false,
    archived: false
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
    archived: false
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
    archived: false
  },
  {
    id: "c7",
    name: "Priya Kapoor",
    company: "BrightPath Analytics",
    email: "priya@brightpath.ai",
    channel: "SMS",
    lastMessage: "Quick question — does your platform support real-time dashboards?",
    timestamp: "2026-04-19T11:20:00",
    unread: 1,
    starred: false,
    archived: false
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
    archived: true
  }
];
const THREADS = {
  c1: [
    {
      id: "t1-1",
      direction: "outbound",
      channel: "Email",
      from: "Alex Rivera",
      body: "Hi Sarah, as discussed, please find the revised pricing proposal attached. Key highlights:\n\n• Annual commitment: 15% discount\n• Dedicated CSM included at Enterprise tier\n• SOC 2 Type II certification completed\n\nLet me know if you have any questions. Happy to hop on a call this week.",
      subject: "Revised Pricing Proposal — TechNova Enterprise",
      timestamp: "2026-04-19T14:00:00",
      attachments: ["proposal-v3.pdf", "security-cert.pdf"]
    },
    {
      id: "t1-2",
      direction: "inbound",
      channel: "Email",
      from: "Sarah Mitchell",
      body: "Hi Alex, thanks for the updated pricing. I've reviewed it with our CFO and we have a few questions before we proceed.\n\n1. Can the 15% discount apply to a 2-year commitment?\n2. What does dedicated CSM onboarding look like?\n3. Is there a sandbox environment included?\n\nLooking forward to your response!",
      subject: "Re: Revised Pricing Proposal",
      timestamp: "2026-04-22T10:30:00"
    }
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
      callOutcome: "Connected"
    },
    {
      id: "t2-2",
      direction: "outbound",
      channel: "Call",
      from: "Alex Rivera",
      body: "Full product demo completed. James was very engaged. Walked through pipeline board, reporting, and API capabilities. Legal team needs to review enterprise contract terms next.",
      timestamp: "2026-04-20T15:00:00",
      callDuration: "45:08",
      callOutcome: "Connected"
    }
  ],
  c3: [
    {
      id: "t3-1",
      direction: "outbound",
      channel: "WhatsApp",
      from: "Maria Chen",
      body: "Hi Nina! Just checking in — how's the contract review going on your end? 😊",
      timestamp: "2026-04-22T08:55:00"
    },
    {
      id: "t3-2",
      direction: "inbound",
      channel: "WhatsApp",
      from: "Nina Andersen",
      body: "Maria, our lawyers finished the review. We're good to sign on Thursday! 🎉",
      timestamp: "2026-04-22T09:00:00"
    },
    {
      id: "t3-3",
      direction: "outbound",
      channel: "SMS",
      from: "Maria Chen",
      body: "Great news Nina! I'll send the calendar invite for Thursday at 3pm CET.",
      timestamp: "2026-04-22T09:05:00"
    }
  ],
  c4: [
    {
      id: "t4-1",
      direction: "inbound",
      channel: "Email",
      from: "Elena Vasquez",
      body: "Maria, we've spoken with our board. We can agree to the enterprise tier but need the volume discount extended to 2 years. Also, our procurement team requires a custom SLA addendum.",
      subject: "Negotiation Update",
      timestamp: "2026-04-21T16:00:00"
    }
  ],
  c5: [
    {
      id: "t5-1",
      direction: "outbound",
      channel: "Note",
      from: "David Park",
      body: "Apex Logistics deal closed at $56K ARR. Onboarding went smoothly. Robert Kim (Head of Ops) is an excellent contact and very happy with the product.\n\nStrong expansion opportunity in Q3 for 5 additional licenses across the Singapore office. Flag for renewal team at 9-month mark.",
      subject: "Apex Logistics — Post-Sale Notes",
      timestamp: "2026-04-22T11:00:00"
    }
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
      attachments: ["security-requirements.pdf"]
    },
    {
      id: "t6-2",
      direction: "inbound",
      channel: "Email",
      from: "Benjamin Stark",
      body: "David, following up on the security docs. Our IT team is on a deadline. Could you confirm receipt and ETA?",
      subject: "Re: Security Assessment Requirements",
      timestamp: "2026-04-22T09:00:00"
    },
    {
      id: "t6-3",
      direction: "inbound",
      channel: "Email",
      from: "Benjamin Stark",
      body: "Third reminder — we need these documents by EOD Friday or we'll need to restart the evaluation process entirely.",
      subject: "URGENT: Security Assessment Requirements",
      timestamp: "2026-04-22T14:00:00"
    }
  ],
  c7: [
    {
      id: "t7-1",
      direction: "inbound",
      channel: "SMS",
      from: "Priya Kapoor",
      body: "Quick question — does your platform support real-time dashboards?",
      timestamp: "2026-04-19T11:20:00"
    },
    {
      id: "t7-2",
      direction: "outbound",
      channel: "SMS",
      from: "David Park",
      body: "Yes! Real-time dashboards are included in all plans. I can schedule a quick demo if you'd like to see it in action.",
      timestamp: "2026-04-19T11:35:00"
    }
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
      callOutcome: "Connected"
    }
  ]
};
const EMAIL_TEMPLATES = [
  {
    id: "tpl1",
    name: "Follow-up",
    subject: "Following up — {{Company}}",
    body: "Hi {{Name}},\n\nI wanted to follow up on our recent conversation. Have you had a chance to review the proposal we discussed?\n\nI'd love to hear your thoughts and address any questions.\n\nBest regards,\n{{SenderName}}"
  },
  {
    id: "tpl2",
    name: "Meeting Invite",
    subject: "Let's connect — {{Company}} × SalesForge",
    body: "Hi {{Name}},\n\nI'd love to schedule a 30-minute call to show you how SalesForge can help {{Company}} streamline your sales process.\n\nAre you available this week?\n[Calendar Link]\n\nLooking forward to connecting!\n{{SenderName}}"
  },
  {
    id: "tpl3",
    name: "Proposal",
    subject: "Proposal for {{Company}} — SalesForge Enterprise",
    body: "Hi {{Name}},\n\nThank you for your interest in SalesForge. Based on our discussions, I've prepared a customized proposal for {{Company}}.\n\nPlease find the full proposal attached.\n\nBest regards,\n{{SenderName}}"
  },
  {
    id: "tpl4",
    name: "Thank You",
    subject: "Thank you, {{Name}}!",
    body: "Hi {{Name}},\n\nThank you for taking the time to meet with us today. It was a pleasure learning more about {{Company}}.\n\nI'll send over the resources we discussed by end of day.\n\nLooking forward to working together!\n{{SenderName}}"
  },
  {
    id: "tpl5",
    name: "Check-in",
    subject: "Checking in — anything I can help with?",
    body: "Hi {{Name}},\n\nJust wanted to check in and see how things are going at {{Company}}. Is there anything I can help with?\n\nAlways happy to chat!\n\n{{SenderName}}"
  }
];
const CHANNEL_CFG = {
  Email: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12 }),
    colorClass: "text-blue-600 dark:text-blue-400",
    bgClass: "bg-blue-50 dark:bg-blue-950/40"
  },
  Call: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }),
    colorClass: "text-emerald-600 dark:text-emerald-400",
    bgClass: "bg-emerald-50 dark:bg-emerald-950/40"
  },
  WhatsApp: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 12 }),
    colorClass: "text-green-600 dark:text-green-400",
    bgClass: "bg-green-50 dark:bg-green-950/40"
  },
  SMS: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 12 }),
    colorClass: "text-violet-600 dark:text-violet-400",
    bgClass: "bg-violet-50 dark:bg-violet-950/40"
  },
  Note: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { size: 12 }),
    colorClass: "text-amber-600 dark:text-amber-400",
    bgClass: "bg-amber-50 dark:bg-amber-950/40"
  }
};
const CHANNEL_TABS = [
  { label: "All", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 12 }) },
  { label: "Email", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12 }) },
  { label: "Call", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }) },
  { label: "WhatsApp", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 12 }) },
  { label: "SMS", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 12 }) },
  { label: "Note", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { size: 12 }) }
];
function fmtConvTime(ts) {
  const d = parseISO(ts);
  if (isToday(d)) return format(d, "h:mm a");
  if (isYesterday(d)) return "Yesterday";
  return format(d, "MMM d");
}
function fmtMsgTime(ts) {
  return format(parseISO(ts), "MMM d, h:mm a");
}
function fmtDateSep(ts) {
  const d = parseISO(ts);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "EEEE, MMMM d");
}
function groupByDate(msgs) {
  const groups = [];
  for (const msg of msgs) {
    const day = msg.timestamp.slice(0, 10);
    const last = groups[groups.length - 1];
    if (last && last.date === day) last.messages.push(msg);
    else groups.push({ date: day, messages: [msg] });
  }
  return groups;
}
function ChannelBadge({ channel }) {
  const cfg = CHANNEL_CFG[channel];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium",
        cfg.colorClass,
        cfg.bgClass
      ),
      children: [
        cfg.icon,
        channel
      ]
    }
  );
}
function EmailBubble({ msg }) {
  const isOut = msg.direction === "outbound";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full max-w-2xl", isOut ? "ml-auto" : "mr-auto"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "rounded-2xl border p-4",
          isOut ? "bg-primary/5 border-primary/20" : "bg-card border-border"
        ),
        children: [
          msg.subject && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-2.5", children: [
            "Subject:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground normal-case font-medium", children: msg.subject })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed whitespace-pre-line", children: msg.body }),
          msg.attachments && msg.attachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: msg.attachments.map((att) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/60 text-xs text-muted-foreground border border-border cursor-pointer hover:bg-muted transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { size: 11 }),
                att
              ]
            },
            att
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "flex items-center gap-1.5 mt-1.5 px-1",
          isOut ? "justify-end" : "justify-start"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: msg.from, size: "xs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
            msg.from,
            " · ",
            fmtMsgTime(msg.timestamp)
          ] })
        ]
      }
    )
  ] });
}
function CallBubble({ msg }) {
  const isOut = msg.direction === "outbound";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex gap-3", isOut ? "flex-row-reverse" : "flex-row"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center", children: isOut ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14, className: "text-emerald-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { size: 14, className: "text-emerald-600" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border px-4 py-3 max-w-sm bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-800/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-wrap gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12, className: "text-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-emerald-700 dark:text-emerald-400", children: [
          isOut ? "Outbound" : "Inbound",
          " Call"
        ] }),
        msg.callDuration && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "· ",
          msg.callDuration
        ] }),
        msg.callOutcome && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "text-[10px] h-4 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400 px-1.5",
            children: msg.callOutcome
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: msg.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "mt-2.5 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 rounded-lg bg-muted/50 hover:bg-muted",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 10 }),
            "Play Recording",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 10, className: "ml-0.5" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "self-end text-[11px] text-muted-foreground pb-1", children: fmtMsgTime(msg.timestamp) })
  ] });
}
function ChatBubble({ msg }) {
  const isOut = msg.direction === "outbound";
  const isWA = msg.channel === "WhatsApp";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex gap-2 max-w-[75%]",
        isOut ? "ml-auto flex-row-reverse" : "mr-auto flex-row"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: msg.from, size: "xs", className: "shrink-0 mt-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                isOut ? "bg-primary text-primary-foreground rounded-br-sm" : isWA ? "bg-green-100 dark:bg-green-900/40 text-foreground rounded-bl-sm border border-green-200/60 dark:border-green-700/40" : "bg-violet-100 dark:bg-violet-900/30 text-foreground rounded-bl-sm border border-violet-200/60 dark:border-violet-700/40"
              ),
              children: msg.body
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: cn(
                "text-[10px] text-muted-foreground mt-1",
                isOut ? "text-right" : "text-left"
              ),
              children: fmtMsgTime(msg.timestamp)
            }
          )
        ] })
      ]
    }
  );
}
function NoteBubble({ msg }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200/70 dark:border-amber-700/40 bg-amber-50/60 dark:bg-amber-950/20 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { size: 13, className: "text-amber-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-amber-700 dark:text-amber-400", children: "Internal Note" }),
        msg.subject && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "— ",
          msg.subject
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed whitespace-pre-line", children: msg.body })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-1.5 text-center", children: [
      fmtMsgTime(msg.timestamp),
      " · ",
      msg.from
    ] })
  ] });
}
function MessageRenderer({ msg }) {
  if (msg.channel === "Email") return /* @__PURE__ */ jsxRuntimeExports.jsx(EmailBubble, { msg });
  if (msg.channel === "Call") return /* @__PURE__ */ jsxRuntimeExports.jsx(CallBubble, { msg });
  if (msg.channel === "Note") return /* @__PURE__ */ jsxRuntimeExports.jsx(NoteBubble, { msg });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ChatBubble, { msg });
}
function ComposeModal({
  open,
  onClose
}) {
  const [tab, setTab] = reactExports.useState(
    "Email"
  );
  const [to, setTo] = reactExports.useState("");
  const [cc, setCc] = reactExports.useState("");
  const [subject, setSubject] = reactExports.useState("");
  const [body, setBody] = reactExports.useState("");
  const [scheduleSend, setScheduleSend] = reactExports.useState(false);
  const [scheduleTime, setScheduleTime] = reactExports.useState("");
  const [selectedTemplate, setSelectedTemplate] = reactExports.useState("");
  const [isPrivate, setIsPrivate] = reactExports.useState(false);
  function applyTemplate(tplId) {
    const tpl = EMAIL_TEMPLATES.find((t) => t.id === tplId);
    if (tpl) {
      setSubject(tpl.subject);
      setBody(tpl.body);
      setSelectedTemplate(tplId);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-2xl w-full p-0 gap-0 overflow-hidden rounded-2xl",
      "data-ocid": "compose.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "px-6 pt-5 pb-4 border-b border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-base font-semibold", children: "New Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
                "data-ocid": "compose.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16, className: "text-muted-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tabs,
            {
              value: tab,
              onValueChange: (v) => setTab(v),
              className: "mt-3",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "h-8", children: ["Email", "WhatsApp", "SMS", "Note"].map((ch) => {
                const cfg = CHANNEL_CFG[ch];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TabsTrigger,
                  {
                    value: ch,
                    className: "text-xs gap-1",
                    "data-ocid": `compose.tab.${ch.toLowerCase()}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cfg.colorClass, children: cfg.icon }),
                      ch
                    ]
                  },
                  ch
                );
              }) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 space-y-3 bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "To" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "recipient@company.com",
                value: to,
                onChange: (e) => setTo(e.target.value),
                className: "h-8 text-sm",
                "data-ocid": "compose.to.input"
              }
            )
          ] }),
          tab === "Email" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "CC" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "cc@company.com",
                  value: cc,
                  onChange: (e) => setCc(e.target.value),
                  className: "h-8 text-sm",
                  "data-ocid": "compose.cc.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Subject" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Email subject",
                    value: subject,
                    onChange: (e) => setSubject(e.target.value),
                    className: "h-8 text-sm",
                    "data-ocid": "compose.subject.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Template" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: selectedTemplate,
                    onChange: (e) => applyTemplate(e.target.value),
                    className: "h-8 text-xs rounded-lg border border-input bg-background px-2 focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer",
                    "data-ocid": "compose.template.select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select template…" }),
                      EMAIL_TEMPLATES.map((tpl) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: tpl.id, children: tpl.name }, tpl.id))
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          tab === "Note" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: isPrivate,
                onCheckedChange: setIsPrivate,
                id: "note-private",
                "data-ocid": "compose.private.switch"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "note-private",
                className: "text-xs text-muted-foreground cursor-pointer",
                children: "Private note (only visible to your team)"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                placeholder: tab === "Email" ? "Write your email…" : tab === "Note" ? "Add a note about this contact or deal…" : "Type a message…",
                value: body,
                onChange: (e) => setBody(e.target.value),
                rows: 7,
                className: "text-sm resize-none",
                "data-ocid": "compose.body.textarea"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: scheduleSend,
                onCheckedChange: setScheduleSend,
                id: "schedule-send",
                "data-ocid": "compose.schedule.switch"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "schedule-send",
                className: "text-xs text-muted-foreground cursor-pointer flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
                  "Schedule send"
                ]
              }
            ),
            scheduleSend && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "datetime-local",
                value: scheduleTime,
                onChange: (e) => setScheduleTime(e.target.value),
                className: "h-7 text-xs w-44",
                "data-ocid": "compose.schedule.input"
              }
            )
          ] }),
          scheduleSend && scheduleTime && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              className: "text-xs text-muted-foreground bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11, className: "text-primary shrink-0" }),
                "Will send at ",
                format(new Date(scheduleTime), "MMM d, h:mm a")
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-border bg-card flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground",
              title: "Attach file",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { size: 14 })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: onClose,
                "data-ocid": "compose.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                onClick: onClose,
                className: "gap-1.5",
                "data-ocid": "compose.submit_button",
                children: [
                  scheduleSend ? /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 13 }),
                  scheduleSend ? "Schedule Send" : "Send"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function MessagesPage() {
  const [activeChannel, setActiveChannel] = reactExports.useState("All");
  const [statusFilter, setStatusFilter] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  const [activeConvId, setActiveConvId] = reactExports.useState(null);
  const [composeOpen, setComposeOpen] = reactExports.useState(false);
  const [showThread, setShowThread] = reactExports.useState(false);
  const threadEndRef = reactExports.useRef(null);
  const filtered = reactExports.useMemo(() => {
    return CONVERSATIONS.filter((c) => {
      if (activeChannel !== "All" && c.channel !== activeChannel) return false;
      if (statusFilter === "Unread" && c.unread === 0) return false;
      if (statusFilter === "Starred" && !c.starred) return false;
      if (statusFilter === "Archived" && !c.archived) return false;
      if (statusFilter === "All" && c.archived) return false;
      const q = search.toLowerCase();
      if (q && !c.name.toLowerCase().includes(q) && !c.company.toLowerCase().includes(q))
        return false;
      return true;
    });
  }, [activeChannel, statusFilter, search]);
  const activeConv = CONVERSATIONS.find((c) => c.id === activeConvId) ?? null;
  const messages = activeConvId ? THREADS[activeConvId] ?? [] : [];
  const grouped = groupByDate(messages);
  const counts = reactExports.useMemo(() => {
    const base = CONVERSATIONS.filter((c) => !c.archived);
    return {
      All: base.filter((c) => c.unread > 0).length,
      Email: base.filter((c) => c.channel === "Email" && c.unread > 0).length,
      Call: base.filter((c) => c.channel === "Call" && c.unread > 0).length,
      WhatsApp: base.filter((c) => c.channel === "WhatsApp" && c.unread > 0).length,
      SMS: base.filter((c) => c.channel === "SMS" && c.unread > 0).length,
      Note: base.filter((c) => c.channel === "Note" && c.unread > 0).length
    };
  }, []);
  const msgCount = messages.length;
  reactExports.useEffect(() => {
    var _a;
    (_a = threadEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [activeConvId, msgCount]);
  function selectConv(id) {
    setActiveConvId(id);
    setShowThread(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "h-[calc(100vh-4rem)] flex flex-col",
      "data-ocid": "messages.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-3 border-b border-border bg-card shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-lg font-bold text-foreground", children: "Communication Center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Emails, calls, messages, and notes — all in one place" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "gap-1.5 h-8 text-xs",
              onClick: () => setComposeOpen(true),
              "data-ocid": "messages.compose_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                "Compose"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 min-h-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "w-80 shrink-0 border-r border-border bg-card flex flex-col",
                showThread ? "hidden md:flex" : "flex w-full md:w-80"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pt-3 pb-2 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: CHANNEL_TABS.map(({ label, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setActiveChannel(label);
                    },
                    "data-ocid": `messages.channel.tab.${label.toLowerCase()}`,
                    className: cn(
                      "flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-smooth",
                      activeChannel === label ? "bg-primary/10 text-primary border border-primary/30" : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                    ),
                    children: [
                      icon,
                      label,
                      counts[label] > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 min-w-[16px] h-4 px-1 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold", children: counts[label] })
                    ]
                  },
                  label
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2 space-y-2 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Search,
                      {
                        size: 13,
                        className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        value: search,
                        onChange: (e) => setSearch(e.target.value),
                        placeholder: "Search conversations…",
                        className: "w-full pl-7 pr-3 h-8 text-xs rounded-lg border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring",
                        "data-ocid": "messages.search.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["All", "Unread", "Starred", "Archived"].map(
                    (sf) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setStatusFilter(sf),
                        "data-ocid": `messages.filter.${sf.toLowerCase()}`,
                        className: cn(
                          "flex-1 text-[10px] py-1 rounded-md font-medium transition-colors",
                          statusFilter === sf ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted"
                        ),
                        children: sf
                      },
                      sf
                    )
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center justify-center py-12 text-center px-4",
                    "data-ocid": "messages.list.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl bg-muted/60 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        MessageSquare,
                        {
                          size: 18,
                          className: "text-muted-foreground/50"
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground", children: "No conversations" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1", children: "Try adjusting filters or channel tab" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1", children: filtered.map((conv, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -8 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: idx * 0.04, duration: 0.22 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => selectConv(conv.id),
                          "data-ocid": `messages.conversation.item.${idx + 1}`,
                          className: cn(
                            "w-full flex items-start gap-2.5 px-3 py-3 text-left group relative hover:bg-muted/60 transition-smooth",
                            activeConvId === conv.id && "bg-primary/5 border-r-2 border-r-primary"
                          ),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: conv.name, size: "sm" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: cn(
                                    "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card flex items-center justify-center",
                                    CHANNEL_CFG[conv.channel].bgClass
                                  ),
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      className: cn(
                                        "scale-75",
                                        CHANNEL_CFG[conv.channel].colorClass
                                      ),
                                      children: CHANNEL_CFG[conv.channel].icon
                                    }
                                  )
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-1", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: cn(
                                      "text-xs truncate",
                                      conv.unread > 0 ? "text-foreground font-semibold" : "text-foreground font-medium"
                                    ),
                                    children: conv.name
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground shrink-0", children: fmtConvTime(conv.timestamp) })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate mt-0.5", children: conv.company }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: cn(
                                    "text-[11px] truncate mt-0.5",
                                    conv.unread > 0 ? "text-foreground" : "text-muted-foreground"
                                  ),
                                  children: conv.lastMessage
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1 shrink-0", children: [
                              conv.unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-[16px] h-4 px-1 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold", children: conv.unread }),
                              conv.starred && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Star,
                                {
                                  size: 10,
                                  className: "text-amber-500 fill-amber-400"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-2 top-2 hidden group-hover:flex items-center gap-0.5 bg-card border border-border rounded-lg shadow-sm p-0.5 z-10", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (e) => e.stopPropagation(),
                                  className: "p-1 rounded hover:bg-muted transition-colors text-muted-foreground",
                                  title: "Archive",
                                  "data-ocid": `messages.archive_button.${idx + 1}`,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { size: 10 })
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (e) => e.stopPropagation(),
                                  className: "p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-destructive",
                                  title: "Delete",
                                  "data-ocid": `messages.delete_button.${idx + 1}`,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 10 })
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (e) => e.stopPropagation(),
                                  className: "p-1 rounded hover:bg-muted transition-colors text-muted-foreground",
                                  title: "More",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 10 })
                                }
                              )
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mx-3 opacity-40" })
                    ]
                  },
                  conv.id
                )) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "flex-1 flex flex-col bg-background min-w-0",
                showThread ? "flex" : "hidden md:flex"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !activeConv ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "flex-1 flex flex-col items-center justify-center text-center px-6",
                  "data-ocid": "messages.thread.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { scale: 0.85, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        transition: { delay: 0.1, type: "spring", stiffness: 200 },
                        className: "w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 28, className: "text-primary/60" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground mb-1.5", children: "Select a conversation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs leading-relaxed", children: "Choose a conversation from the list to view messages, or compose a new one." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "mt-5 gap-1.5",
                        onClick: () => setComposeOpen(true),
                        "data-ocid": "messages.thread.compose_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                          "Compose Message"
                        ]
                      }
                    )
                  ]
                },
                "no-selection"
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.18 },
                  className: "flex-1 flex flex-col min-h-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-3 px-5 py-3 border-b border-border bg-card shrink-0",
                        "data-ocid": "messages.thread.header",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setShowThread(false),
                              className: "md:hidden p-1.5 rounded-lg hover:bg-muted transition-colors",
                              "data-ocid": "messages.back_button",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16, className: "text-muted-foreground" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: activeConv.name, size: "sm" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold text-foreground truncate", children: activeConv.name }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ChannelBadge, { channel: activeConv.channel })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground truncate", children: [
                              activeConv.company,
                              " · ",
                              activeConv.email
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "ghost",
                                size: "sm",
                                className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
                                title: "Call",
                                "data-ocid": "messages.thread.call_button",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 13 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "ghost",
                                size: "sm",
                                className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
                                title: "Email",
                                "data-ocid": "messages.thread.email_button",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 13 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "ghost",
                                size: "sm",
                                className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
                                title: "WhatsApp",
                                "data-ocid": "messages.thread.whatsapp_button",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 13 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "ghost",
                                size: "sm",
                                className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
                                title: "Add note",
                                "data-ocid": "messages.thread.note_button",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { size: 13 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-4 mx-1" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                variant: "ghost",
                                size: "sm",
                                className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
                                title: "More actions",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 14 })
                              }
                            )
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollArea, { className: "flex-1 px-5 py-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 pb-2", children: grouped.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-medium px-2.5 py-0.5 rounded-full bg-muted/60 border border-border/60 whitespace-nowrap", children: fmtDateSep(`${group.date}T12:00:00`) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: group.messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 6 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.22 },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageRenderer, { msg })
                          },
                          msg.id
                        )) })
                      ] }, group.date)) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: threadEndRef })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "border-t border-border bg-card px-4 py-3 shrink-0",
                        "data-ocid": "messages.reply.panel",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 rounded-xl border border-input bg-background px-3 py-2 focus-within:ring-1 focus-within:ring-ring transition-smooth", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "textarea",
                              {
                                placeholder: `Reply via ${activeConv.channel}…`,
                                rows: 2,
                                className: "w-full bg-transparent text-sm text-foreground resize-none focus:outline-none placeholder:text-muted-foreground",
                                "data-ocid": "messages.reply.textarea"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 pt-1.5 border-t border-border/40 mt-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  className: "p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground",
                                  title: "Attach file",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { size: 12 })
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  className: "p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground",
                                  title: "Insert template",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 12 })
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  className: "p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground",
                                  title: "Schedule send",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 })
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "sm",
                              className: "h-9 w-9 p-0 shrink-0 rounded-xl",
                              title: "Send",
                              "data-ocid": "messages.reply.submit_button",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14 })
                            }
                          )
                        ] })
                      }
                    )
                  ]
                },
                activeConvId
              ) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ComposeModal, { open: composeOpen, onClose: () => setComposeOpen(false) })
      ]
    }
  );
}
export {
  MessagesPage as default
};
