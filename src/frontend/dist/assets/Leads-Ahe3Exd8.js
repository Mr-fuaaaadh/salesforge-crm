import { c as createLucideIcon, u as useCrmStore, r as reactExports, j as jsxRuntimeExports, d as Badge, k as Users, l as ChevronDown, A as AnimatePresence, m as motion, X, n as ChevronRight, b as UserAvatar, E as Ellipsis, M as Mail, C as Calendar, S as Sheet, o as SheetContent, p as SheetHeader, q as SheetTitle, s as User, v as Bell } from "./index-BlMbxdLA.js";
import { K as KpiCard } from "./KpiCard-Bzt9tS9b.js";
import { P as PageHeader } from "./PageHeader-DSb5LYEm.js";
import { P as PriorityBadge } from "./PriorityBadge-Cno_Tsvr.js";
import { S as SearchBar, T as Tag, f as formatDistanceToNow } from "./SearchBar-DRbvE61H.js";
import { S as StatusBadge } from "./StatusBadge-Bb6VdZiW.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { T as TrendingUp, C as Card } from "./card-DoSBglZU.js";
import { C as Checkbox } from "./checkbox-DrxJEOS1.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-CmxgkzUi.js";
import { I as Input } from "./input-NM7OR39o.js";
import { L as Label } from "./label-CJYb5cSz.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CwDuuSgI.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CfPtILIY.js";
import { T as Textarea } from "./textarea-BdIGEuKt.js";
import { U as Upload } from "./upload-jBpkVeh4.js";
import { D as Download } from "./download-Duj6N_G9.js";
import { P as Plus } from "./plus-B_ARFHaG.js";
import { F as Funnel } from "./funnel-C9x5ee5h.js";
import { L as LayoutGrid } from "./layout-grid-1msGVLmQ.js";
import { T as Trash2 } from "./trash-2-D1139fWY.js";
import { f as format } from "./format-MbcRETyn.js";
import { C as Clock } from "./clock-BUl1m0Xe.js";
import { B as Building2 } from "./building-2-b0v5v_ku.js";
import { P as Phone } from "./phone-CcwBP2xL.js";
import { S as StickyNote } from "./sticky-note-CqejlyDI.js";
import { F as FileText } from "./file-text-CaNw91lo.js";
import "./trending-down--9WBe-Na.js";
import "./arrow-left-Dz494sRC.js";
import "./constructNow-BzYtCcud.js";
import "./endOfMonth-Bz9NRzi1.js";
import "./index-TftrN_Lb.js";
import "./check-mNj6eV7j.js";
import "./index-BrhQEKyn.js";
import "./index-IXOTxK3N.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 5v11", key: "mdvv1e" }],
  ["path", { d: "M12 5v6", key: "14ar3b" }],
  ["path", { d: "M18 5v14", key: "7ji314" }]
];
const Kanban = createLucideIcon("kanban", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const SquareCheckBig = createLucideIcon("square-check-big", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83"
    }
  ]
];
const Table2 = createLucideIcon("table-2", __iconNode);
const STAGES = [
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Negotiation",
  "Won",
  "Lost"
];
const STAGE_COLORS = {
  New: "bg-blue-500",
  Contacted: "bg-violet-500",
  Qualified: "bg-amber-500",
  Proposal: "bg-indigo-500",
  Negotiation: "bg-orange-500",
  Won: "bg-emerald-500",
  Lost: "bg-red-500"
};
const STAGE_HEADER_COLORS = {
  New: "border-t-blue-500",
  Contacted: "border-t-violet-500",
  Qualified: "border-t-amber-500",
  Proposal: "border-t-indigo-500",
  Negotiation: "border-t-orange-500",
  Won: "border-t-emerald-500",
  Lost: "border-t-red-500"
};
const SOURCES = [
  "Website",
  "LinkedIn",
  "Referral",
  "Cold Email",
  "Partner",
  "Event",
  "Trade Show"
];
const TEAM_MEMBERS = [
  "Alex Rivera",
  "Maria Chen",
  "David Park",
  "Sophia Lee",
  "Jordan Mills",
  "Aisha Patel"
];
const MOCK_ACTIVITIES = [
  {
    id: "a1",
    type: "call",
    icon: Phone,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    title: "Discovery call completed",
    detail: "45 min · Discussed pricing and requirements",
    user: "Alex Rivera",
    time: "2026-04-20T15:00:00"
  },
  {
    id: "a2",
    type: "email",
    icon: Mail,
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    title: "Proposal sent via email",
    detail: "Attached: proposal-v2.pdf",
    user: "Alex Rivera",
    time: "2026-04-18T14:00:00"
  },
  {
    id: "a3",
    type: "meeting",
    icon: Calendar,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    title: "Meeting scheduled",
    detail: "Contract review — 3:00 PM Thursday",
    user: "Maria Chen",
    time: "2026-04-17T10:00:00"
  },
  {
    id: "a4",
    type: "note",
    icon: StickyNote,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    title: "Note added",
    detail: "Budget approval pending from CFO",
    user: "David Park",
    time: "2026-04-15T09:30:00"
  }
];
const MOCK_DOCS = [
  {
    id: "f1",
    name: "proposal-v2.pdf",
    size: "1.2 MB",
    type: "PDF",
    uploaded: "2026-04-18"
  },
  {
    id: "f2",
    name: "requirements.docx",
    size: "340 KB",
    type: "DOCX",
    uploaded: "2026-04-15"
  },
  {
    id: "f3",
    name: "pricing-matrix.xlsx",
    size: "88 KB",
    type: "XLSX",
    uploaded: "2026-04-10"
  }
];
const MOCK_TIMELINE = [
  { stage: "New", date: "2026-04-01", by: "System" },
  { stage: "Contacted", date: "2026-04-05", by: "Alex Rivera" },
  { stage: "Qualified", date: "2026-04-12", by: "Alex Rivera" },
  { stage: "Proposal", date: "2026-04-18", by: "Maria Chen" }
];
const MOCK_REMINDERS = [
  {
    id: "r1",
    title: "Follow-up call",
    due: "2026-04-25",
    assigned: "Alex Rivera",
    done: false
  },
  {
    id: "r2",
    title: "Send revised pricing",
    due: "2026-04-27",
    assigned: "Maria Chen",
    done: false
  },
  {
    id: "r3",
    title: "Check budget approval status",
    due: "2026-04-30",
    assigned: "Alex Rivera",
    done: true
  }
];
function FilterChip({
  label,
  onRemove
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 pl-2.5 pr-1.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onRemove,
        className: "rounded-full hover:bg-primary/20 p-0.5 transition-colors",
        "aria-label": `Remove ${label} filter`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
      }
    )
  ] });
}
function BulkActionBar({
  count,
  onAssign,
  onChangeStatus,
  onDelete,
  onClear
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 8 },
      className: "flex items-center gap-3 px-4 py-2.5 bg-primary/5 border border-primary/20 rounded-xl",
      "data-ocid": "leads.bulk_action_bar",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-primary", children: [
          count,
          " selected"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 text-xs",
            onClick: onAssign,
            "data-ocid": "leads.bulk.assign_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12, className: "mr-1.5" }),
              "Assign"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 text-xs",
            onClick: onChangeStatus,
            "data-ocid": "leads.bulk.status_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: "mr-1.5" }),
              "Change Status"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 text-xs",
            onClick: () => {
            },
            "data-ocid": "leads.bulk.export_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 12, className: "mr-1.5" }),
              "Export"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 text-xs text-destructive hover:text-destructive",
            onClick: onDelete,
            "data-ocid": "leads.bulk.delete_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12, className: "mr-1.5" }),
              "Delete"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "ml-auto text-muted-foreground hover:text-foreground transition-colors",
            onClick: onClear,
            "data-ocid": "leads.bulk.clear_button",
            "aria-label": "Clear selection",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
          }
        )
      ]
    }
  );
}
function LeadDetailDrawer({
  lead,
  onClose,
  onUpdate
}) {
  const [note, setNote] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState([
    {
      id: "n1",
      text: (lead == null ? void 0 : lead.notes) ?? "",
      author: "Alex Rivera",
      time: "2026-04-18T10:00:00"
    }
  ]);
  const [reminderDone, setReminderDone] = reactExports.useState({
    r3: true
  });
  function addNote() {
    if (!note.trim()) return;
    setNotes((prev) => [
      {
        id: `n${Date.now()}`,
        text: note,
        author: "You",
        time: (/* @__PURE__ */ new Date()).toISOString()
      },
      ...prev
    ]);
    setNote("");
  }
  if (!lead) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!lead, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-xl p-0 flex flex-col",
      "data-ocid": "leads.detail.sheet",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-6 pb-4 border-b border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: lead.name, size: "md" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-base font-bold text-foreground leading-tight truncate", children: lead.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 11 }),
                  lead.company
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: lead.priority })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/60 rounded-lg px-3 py-2 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Deal Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold font-mono text-foreground", children: [
                "$",
                lead.dealValue.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/60 rounded-lg px-3 py-2 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Source" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: lead.source })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/60 rounded-lg px-3 py-2 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Follow-up" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: lead.nextFollowUp ? format(new Date(lead.nextFollowUp), "MMM d") : "—" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1 h-8 text-xs",
                "data-ocid": "leads.detail.call_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12, className: "mr-1.5" }),
                  "Call"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1 h-8 text-xs",
                "data-ocid": "leads.detail.email_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12, className: "mr-1.5" }),
                  "Email"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1 h-8 text-xs",
                "data-ocid": "leads.detail.schedule_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12, className: "mr-1.5" }),
                  "Meet"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-8 w-8 p-0",
                "data-ocid": "leads.detail.more_button",
                "aria-label": "More actions",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 14 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "flex-1 flex flex-col min-h-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "mx-6 mt-4 mb-0 justify-start gap-0.5 bg-transparent border-b border-border rounded-none h-auto pb-0", children: [
            { v: "overview", label: "Overview", icon: User },
            { v: "activity", label: "Activity", icon: Clock },
            { v: "notes", label: "Notes", icon: StickyNote },
            { v: "documents", label: "Docs", icon: FileText },
            { v: "timeline", label: "Timeline", icon: TrendingUp },
            { v: "reminders", label: "Reminders", icon: Bell }
          ].map(({ v, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsTrigger,
            {
              value: v,
              "data-ocid": `leads.detail.tab.${v}`,
              className: "text-xs px-3 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 11, className: "mr-1.5" }),
                label
              ]
            },
            v
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-6 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "mt-0 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                {
                  label: "Email",
                  value: lead.email,
                  icon: Mail
                },
                {
                  label: "Phone",
                  value: lead.phone,
                  icon: Phone
                },
                {
                  label: "Assigned To",
                  value: lead.assignedTo,
                  icon: User
                },
                {
                  label: "Last Contact",
                  value: lead.lastContact ? format(new Date(lead.lastContact), "MMM d, yyyy") : "—",
                  icon: Clock
                }
              ].map(({ label, value, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-muted/40 rounded-xl p-3 border border-border/40",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 11, className: "text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wide font-semibold text-muted-foreground", children: label })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate", children: value })
                  ]
                },
                label
              )) }),
              lead.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 12, className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Tags" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: lead.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-[11px]",
                    children: tag
                  },
                  tag
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Change Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => onUpdate(lead.id, { status: s }),
                    "data-ocid": `leads.detail.status.${s.toLowerCase()}`,
                    className: `text-[11px] px-2.5 py-1 rounded-full border font-medium transition-all ${lead.status === s ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`,
                    children: s
                  },
                  s
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "activity", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MOCK_ACTIVITIES.map((act, i) => {
              const Icon = act.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `leads.detail.activity.item.${i + 1}`,
                  className: "flex gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-8 h-8 rounded-full ${act.bg} flex items-center justify-center shrink-0`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 14, className: act.color })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: act.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: act.detail }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
                        act.user,
                        " ·",
                        " ",
                        formatDistanceToNow(new Date(act.time), {
                          addSuffix: true
                        })
                      ] })
                    ] })
                  ]
                },
                act.id
              );
            }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "notes", className: "mt-0 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    placeholder: "Add a note...",
                    value: note,
                    onChange: (e) => setNote(e.target.value),
                    className: "text-sm resize-none",
                    rows: 3,
                    "data-ocid": "leads.detail.note_textarea"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    onClick: addNote,
                    disabled: !note.trim(),
                    "data-ocid": "leads.detail.add_note_button",
                    className: "w-full h-8 text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12, className: "mr-1.5" }),
                      "Add Note"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: notes.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `leads.detail.note.item.${i + 1}`,
                  className: "bg-muted/40 rounded-xl p-3 border border-border/40",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground leading-relaxed", children: n.text }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1.5", children: [
                      n.author,
                      " ·",
                      " ",
                      formatDistanceToNow(new Date(n.time), {
                        addSuffix: true
                      })
                    ] })
                  ]
                },
                n.id
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "documents", className: "mt-0 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "w-full h-9 text-xs border-dashed",
                  "data-ocid": "leads.detail.upload_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 13, className: "mr-1.5" }),
                    "Upload Document"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: MOCK_DOCS.map((doc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `leads.detail.doc.item.${i + 1}`,
                  className: "flex items-center gap-3 p-3 bg-muted/40 rounded-xl border border-border/40 hover:border-primary/30 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate", children: doc.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                        doc.size,
                        " · ",
                        doc.uploaded
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "h-7 w-7 p-0 shrink-0",
                        "aria-label": `Download ${doc.name}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 12 })
                      }
                    )
                  ]
                },
                doc.id
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "timeline", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[7px] top-2 bottom-2 w-px bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: MOCK_TIMELINE.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `leads.detail.timeline.item.${i + 1}`,
                  className: "flex items-start gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-3.5 h-3.5 rounded-full border-2 border-background shrink-0 mt-0.5 -ml-[3px] ${STAGE_COLORS[item.stage] || "bg-muted"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground", children: [
                        "Stage: ",
                        item.stage
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                        format(new Date(item.date), "MMM d, yyyy"),
                        " · by",
                        " ",
                        item.by
                      ] })
                    ] })
                  ]
                },
                item.stage
              )) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "reminders", className: "mt-0 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "w-full h-9 text-xs border-dashed",
                  "data-ocid": "leads.detail.add_reminder_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 13, className: "mr-1.5" }),
                    "Add Reminder"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: MOCK_REMINDERS.map((rem, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `leads.detail.reminder.item.${i + 1}`,
                  className: `flex items-center gap-3 p-3 rounded-xl border transition-colors ${reminderDone[rem.id] ? "bg-muted/20 border-border/30 opacity-60" : "bg-muted/40 border-border/40 hover:border-primary/30"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Checkbox,
                      {
                        checked: !!reminderDone[rem.id],
                        onCheckedChange: (v) => setReminderDone((p) => ({
                          ...p,
                          [rem.id]: Boolean(v)
                        })),
                        "data-ocid": `leads.detail.reminder.checkbox.${i + 1}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: `text-xs font-medium ${reminderDone[rem.id] ? "line-through text-muted-foreground" : "text-foreground"}`,
                          children: rem.title
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                        "Due ",
                        rem.due,
                        " · ",
                        rem.assigned
                      ] })
                    ] })
                  ]
                },
                rem.id
              )) })
            ] })
          ] })
        ] })
      ]
    }
  ) });
}
function AddLeadModal({ open, onClose, onAdd }) {
  const [step, setStep] = reactExports.useState(0);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    dealValue: "",
    status: "New",
    priority: "Medium",
    assignedTo: "",
    tags: "",
    notes: ""
  });
  const steps = ["Contact Info", "Company", "Deal Details", "Assignment"];
  function patch(k, v) {
    setForm((p) => ({ ...p, [k]: v }));
  }
  function handleSubmit() {
    const lead = {
      id: `l${Date.now()}`,
      name: form.name || "New Lead",
      email: form.email,
      phone: form.phone,
      company: form.company,
      source: form.source,
      dealValue: Number(form.dealValue) || 0,
      status: form.status,
      priority: form.priority,
      assignedTo: form.assignedTo,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      notes: form.notes,
      lastContact: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
      nextFollowUp: ""
    };
    onAdd(lead);
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      source: "",
      dealValue: "",
      status: "New",
      priority: "Medium",
      assignedTo: "",
      tags: "",
      notes: ""
    });
    setStep(0);
    onClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", "data-ocid": "leads.add_lead.dialog", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-lg", children: "Add New Lead" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mb-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => i < step && setStep(i),
          className: `w-6 h-6 rounded-full text-[11px] font-bold transition-all flex items-center justify-center shrink-0 ${i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
          children: i + 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `text-[10px] font-medium truncate ${i === step ? "text-foreground" : "text-muted-foreground"}`,
          children: s
        }
      ),
      i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `flex-1 h-px ${i < step ? "bg-primary" : "bg-border"}`
        }
      )
    ] }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", className: "text-xs", children: "Full Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "name",
              placeholder: "Sarah Mitchell",
              value: form.name,
              onChange: (e) => patch("name", e.target.value),
              className: "h-9 text-sm",
              "data-ocid": "leads.add_lead.name_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-xs", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "email",
              type: "email",
              placeholder: "sarah@company.com",
              value: form.email,
              onChange: (e) => patch("email", e.target.value),
              className: "h-9 text-sm",
              "data-ocid": "leads.add_lead.email_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", className: "text-xs", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "phone",
              placeholder: "+1 (555) 000-0000",
              value: form.phone,
              onChange: (e) => patch("phone", e.target.value),
              className: "h-9 text-sm",
              "data-ocid": "leads.add_lead.phone_input"
            }
          )
        ] })
      ] }),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "company", className: "text-xs", children: "Company Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "company",
              placeholder: "TechNova Inc.",
              value: form.company,
              onChange: (e) => patch("company", e.target.value),
              className: "h-9 text-sm",
              "data-ocid": "leads.add_lead.company_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "source", className: "text-xs", children: "Lead Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.source,
              onValueChange: (v) => patch("source", v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-9 text-sm",
                    "data-ocid": "leads.add_lead.source_select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select source..." })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SOURCES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-sm", children: s }, s)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "tags", className: "text-xs", children: "Tags (comma separated)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "tags",
              placeholder: "enterprise, SaaS, finance",
              value: form.tags,
              onChange: (e) => patch("tags", e.target.value),
              className: "h-9 text-sm",
              "data-ocid": "leads.add_lead.tags_input"
            }
          )
        ] })
      ] }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dealValue", className: "text-xs", children: "Deal Value ($)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "dealValue",
              type: "number",
              placeholder: "50000",
              value: form.dealValue,
              onChange: (e) => patch("dealValue", e.target.value),
              className: "h-9 text-sm",
              "data-ocid": "leads.add_lead.deal_value_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.status,
                onValueChange: (v) => patch("status", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-9 text-sm",
                      "data-ocid": "leads.add_lead.status_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-sm", children: s }, s)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.priority,
                onValueChange: (v) => patch("priority", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-9 text-sm",
                      "data-ocid": "leads.add_lead.priority_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Low", "Medium", "High", "Urgent"].map(
                    (p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, className: "text-sm", children: p }, p)
                  ) })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              placeholder: "Initial notes about this lead...",
              value: form.notes,
              onChange: (e) => patch("notes", e.target.value),
              className: "text-sm resize-none",
              rows: 3,
              "data-ocid": "leads.add_lead.notes_textarea"
            }
          )
        ] })
      ] }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Assign To" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.assignedTo,
            onValueChange: (v) => patch("assignedTo", v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-9 text-sm",
                  "data-ocid": "leads.add_lead.assign_select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select team member..." })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TEAM_MEMBERS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m, className: "text-sm", children: m }, m)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground pt-2", children: "The selected rep will be notified and the lead will appear in their pipeline." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => step > 0 ? setStep((s) => s - 1) : onClose(),
          "data-ocid": "leads.add_lead.back_button",
          children: step === 0 ? "Cancel" : "Back"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: step < steps.length - 1 ? () => setStep((s) => s + 1) : handleSubmit,
          disabled: step === 0 && !form.name.trim(),
          "data-ocid": step < steps.length - 1 ? "leads.add_lead.next_button" : "leads.add_lead.submit_button",
          children: step < steps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Next ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "ml-1" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14, className: "mr-1.5" }),
            "Add Lead"
          ] })
        }
      )
    ] })
  ] }) });
}
function TableView({
  leads,
  selected,
  onToggleSelect,
  onToggleAll,
  onRowClick,
  sortKey,
  sortDir,
  onSort,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange
}) {
  const total = leads.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const slice = leads.slice((page - 1) * pageSize, page * pageSize);
  const allSelected = slice.length > 0 && slice.every((l) => selected.has(l.id));
  const SortIcon = ({ col }) => sortKey === col ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `ml-1 text-primary ${sortDir === "desc" ? "rotate-180" : ""} inline-block`,
      children: "↑"
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 opacity-0 group-hover:opacity-40", children: "↑" });
  const cols = [
    { key: "name", label: "Lead", sortable: true },
    { key: "company", label: "Company", sortable: true },
    { key: "source", label: "Source" },
    { key: "status", label: "Status", sortable: true },
    { key: "priority", label: "Priority", sortable: true },
    { key: "dealValue", label: "Value", sortable: true, align: "right" },
    { key: "assignedTo", label: "Assigned" },
    { key: "nextFollowUp", label: "Follow-up", sortable: true }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-2xl overflow-hidden",
      "data-ocid": "leads.table",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-10 px-3 py-3 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: allSelected,
                onCheckedChange: () => onToggleAll(slice.map((l) => l.id)),
                "aria-label": "Select all",
                "data-ocid": "leads.table.select_all"
              }
            ) }),
            cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "th",
              {
                className: `px-3 py-3 text-xs font-semibold text-muted-foreground tracking-wide whitespace-nowrap ${c.align === "right" ? "text-right" : "text-left"} ${c.sortable ? "cursor-pointer hover:text-foreground group select-none" : ""}`,
                onClick: c.sortable ? () => onSort(c.key) : void 0,
                onKeyDown: c.sortable ? (e) => e.key === "Enter" && onSort(c.key) : void 0,
                tabIndex: c.sortable ? 0 : void 0,
                children: [
                  c.label,
                  c.sortable && /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { col: c.key })
                ]
              },
              c.key
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-xs font-semibold text-muted-foreground w-10" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: slice.map((lead, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.tr,
              {
                layout: true,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.15, delay: i * 0.02 },
                onClick: () => onRowClick(lead),
                "data-ocid": `leads.table.row.${i + 1}`,
                className: "border-b border-border/50 hover:bg-muted/30 cursor-pointer transition-colors group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-3 py-3",
                      onClick: (e) => e.stopPropagation(),
                      onKeyDown: (e) => e.stopPropagation(),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Checkbox,
                        {
                          checked: selected.has(lead.id),
                          onCheckedChange: () => onToggleSelect(lead.id),
                          "aria-label": `Select ${lead.name}`,
                          "data-ocid": `leads.table.checkbox.${i + 1}`
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-[140px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: lead.name, size: "sm" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate max-w-[120px]", children: lead.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate max-w-[120px]", children: lead.email })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate max-w-[120px]", children: lead.company }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: lead.phone })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-[11px] font-normal",
                      children: lead.source
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: lead.priority }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-sm font-bold text-foreground", children: [
                    "$",
                    lead.dealValue.toLocaleString()
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: lead.assignedTo, size: "xs" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate max-w-[70px]", children: lead.assignedTo.split(" ")[0] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: lead.nextFollowUp ? format(new Date(lead.nextFollowUp), "MMM d") : "—" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-3 py-3",
                      onClick: (e) => e.stopPropagation(),
                      onKeyDown: (e) => e.stopPropagation(),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "ghost",
                          size: "sm",
                          className: "h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
                          "data-ocid": `leads.table.more_button.${i + 1}`,
                          "aria-label": "More options",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 14 })
                        }
                      )
                    }
                  )
                ]
              },
              lead.id
            )) }),
            slice.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 10, className: "py-14 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center gap-2",
                "data-ocid": "leads.table.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 32, className: "text-muted-foreground/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No leads match your filters" })
                ]
              }
            ) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-t border-border bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rows per page:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: String(pageSize),
                onValueChange: (v) => {
                  onPageSizeChange(Number(v));
                  onPageChange(1);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-7 w-16 text-xs",
                      "data-ocid": "leads.table.page_size_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [10, 25, 50].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(n), className: "text-xs", children: n }, n)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              Math.min((page - 1) * pageSize + 1, total),
              "–",
              Math.min(page * pageSize, total),
              " of ",
              total
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-7 w-7 p-0 text-xs",
                onClick: () => onPageChange(page - 1),
                disabled: page === 1,
                "data-ocid": "leads.table.pagination_prev",
                "aria-label": "Previous page",
                children: "‹"
              }
            ),
            Array.from({ length: Math.min(totalPages, 5) }, (_, k) => {
              const p = k + 1;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: page === p ? "default" : "outline",
                  size: "sm",
                  className: "h-7 w-7 p-0 text-xs",
                  onClick: () => onPageChange(p),
                  "data-ocid": `leads.table.page.${p}`,
                  children: p
                },
                p
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-7 w-7 p-0 text-xs",
                onClick: () => onPageChange(page + 1),
                disabled: page === totalPages,
                "data-ocid": "leads.table.pagination_next",
                "aria-label": "Next page",
                children: "›"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function KanbanView({
  leads,
  onCardClick,
  onStatusChange,
  onAddLead
}) {
  const [dragId, setDragId] = reactExports.useState(null);
  const [dragOver, setDragOver] = reactExports.useState(null);
  function handleDragStart(id) {
    setDragId(id);
  }
  function handleDrop(status) {
    if (dragId) {
      onStatusChange(dragId, status);
    }
    setDragId(null);
    setDragOver(null);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex gap-3 overflow-x-auto pb-4 pt-1 -mx-1 px-1",
      "data-ocid": "leads.kanban",
      children: STAGES.map((stage) => {
        const stageLeads = leads.filter((l) => l.status === stage);
        const totalValue = stageLeads.reduce((s, l) => s + l.dealValue, 0);
        const isOver = dragOver === stage;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex-none w-[260px]",
            onDragOver: (e) => {
              e.preventDefault();
              setDragOver(stage);
            },
            onDragLeave: () => setDragOver(null),
            onDrop: () => handleDrop(stage),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `bg-card border border-border rounded-t-xl border-t-4 px-3 pt-2.5 pb-2 mb-1 ${STAGE_HEADER_COLORS[stage]}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground", children: stage }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "secondary",
                            className: "h-4 px-1.5 text-[10px] font-bold",
                            children: stageLeads.length
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => onAddLead(stage),
                          "data-ocid": `leads.kanban.add_button.${stage.toLowerCase()}`,
                          className: "w-5 h-5 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors",
                          "aria-label": `Add lead to ${stage}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 11 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground font-mono", children: [
                      "$",
                      totalValue.toLocaleString()
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `bg-muted/20 border border-border border-t-0 rounded-b-xl min-h-[60px] p-2 space-y-2 transition-colors ${isOver ? "bg-primary/5 border-primary/30" : ""}`,
                  children: [
                    stageLeads.map((lead, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        draggable: true,
                        onDragStart: () => handleDragStart(lead.id),
                        onDragEnd: () => setDragId(null),
                        "data-ocid": `leads.kanban.item.${i + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 6 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: i * 0.04 },
                            whileHover: { y: -1 },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Card,
                              {
                                onClick: () => onCardClick(lead),
                                className: `p-3 border cursor-pointer transition-all ${dragId === lead.id ? "opacity-40 scale-95" : "border-border/50 hover:border-primary/30 hover:shadow-subtle"}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-2", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: lead.name, size: "xs" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate leading-tight", children: lead.name }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: lead.company })
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      PriorityBadge,
                                      {
                                        priority: lead.priority,
                                        showIcon: false
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold font-mono text-foreground", children: [
                                      "$",
                                      lead.dealValue.toLocaleString()
                                    ] }),
                                    lead.nextFollowUp && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground flex items-center gap-0.5", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 9 }),
                                      format(new Date(lead.nextFollowUp), "MMM d")
                                    ] })
                                  ] })
                                ]
                              }
                            )
                          }
                        )
                      },
                      lead.id
                    )),
                    stageLeads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `py-5 text-center text-[11px] text-muted-foreground rounded-lg border-2 border-dashed transition-colors ${isOver ? "border-primary/40 text-primary/60" : "border-border"}`,
                        "data-ocid": `leads.kanban.empty.${stage.toLowerCase()}`,
                        children: isOver ? "Drop here" : "No leads"
                      }
                    )
                  ]
                }
              )
            ]
          },
          stage
        );
      })
    }
  );
}
function GridView({
  leads,
  onCardClick
}) {
  if (leads.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center", "data-ocid": "leads.grid.empty_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 40, className: "text-muted-foreground/40 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No leads match your filters" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
      "data-ocid": "leads.grid",
      children: leads.map((lead, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: i * 0.04, duration: 0.2 },
          whileHover: { y: -2 },
          "data-ocid": `leads.grid.item.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              onClick: () => onCardClick(lead),
              className: "p-4 border border-border/60 hover:border-primary/30 hover:shadow-elevation cursor-pointer transition-all group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: lead.name, size: "md" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: lead.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 10 }),
                        lead.company
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: lead.priority })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground flex items-center gap-1.5 truncate", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 10, className: "shrink-0" }),
                    lead.email
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 10, className: "shrink-0" }),
                    lead.phone
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold font-mono text-foreground", children: [
                    "$",
                    lead.dealValue.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2.5 border-t border-border/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: lead.assignedTo, size: "xs" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground truncate max-w-[80px]", children: lead.assignedTo.split(" ")[0] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => e.stopPropagation(),
                        "data-ocid": `leads.grid.call_button.${i + 1}`,
                        className: "w-6 h-6 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors",
                        "aria-label": `Call ${lead.name}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 10 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => e.stopPropagation(),
                        "data-ocid": `leads.grid.email_button.${i + 1}`,
                        className: "w-6 h-6 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors",
                        "aria-label": `Email ${lead.name}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 10 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => e.stopPropagation(),
                        "data-ocid": `leads.grid.schedule_button.${i + 1}`,
                        className: "w-6 h-6 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors",
                        "aria-label": `Schedule meeting with ${lead.name}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 10 })
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        },
        lead.id
      ))
    }
  );
}
function LeadsPage() {
  const leads = useCrmStore((s) => s.leads);
  const addLead = useCrmStore((s) => s.addLead);
  const updateLead = useCrmStore((s) => s.updateLead);
  const deleteLead = useCrmStore((s) => s.deleteLead);
  const updateLeadStatus = useCrmStore((s) => s.updateLeadStatus);
  const [search, setSearch] = reactExports.useState("");
  const [activeFilters, setActiveFilters] = reactExports.useState(
    {}
  );
  const [view, setView] = reactExports.useState("table");
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [detailLead, setDetailLead] = reactExports.useState(null);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [addStatus, setAddStatus] = reactExports.useState("New");
  const [sortKey, setSortKey] = reactExports.useState(null);
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [page, setPage] = reactExports.useState(1);
  const [pageSize, setPageSize] = reactExports.useState(10);
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const now = /* @__PURE__ */ new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1e3);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const totalLeads = leads.length;
  const newThisWeek = leads.filter(
    (l) => new Date(l.lastContact) >= weekAgo
  ).length;
  const qualified = leads.filter((l) => l.status === "Qualified").length;
  const wonThisMonth = leads.filter(
    (l) => l.status === "Won" && new Date(l.lastContact) >= monthStart
  ).length;
  const filtered = reactExports.useMemo(() => {
    let arr = leads.filter((l) => {
      const q = search.toLowerCase();
      return (!q || l.name.toLowerCase().includes(q) || l.company.toLowerCase().includes(q) || l.email.toLowerCase().includes(q)) && (!activeFilters.status || l.status === activeFilters.status) && (!activeFilters.priority || l.priority === activeFilters.priority) && (!activeFilters.source || l.source === activeFilters.source) && (!activeFilters.assignedTo || l.assignedTo === activeFilters.assignedTo);
    });
    if (sortKey) {
      arr = [...arr].sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return sortDir === "asc" ? cmp : -cmp;
      });
    }
    return arr;
  }, [leads, search, activeFilters, sortKey, sortDir]);
  const handleSort = reactExports.useCallback(
    (key) => {
      if (sortKey === key) {
        setSortDir((d) => d === "asc" ? "desc" : "asc");
      } else {
        setSortKey(key);
        setSortDir("asc");
      }
      setPage(1);
    },
    [sortKey]
  );
  function toggleSelect(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  function toggleAll(ids) {
    const allIn = ids.every((id) => selected.has(id));
    setSelected((prev) => {
      const next = new Set(prev);
      if (allIn) {
        for (const id of ids) next.delete(id);
      } else {
        for (const id of ids) next.add(id);
      }
      return next;
    });
  }
  function clearFilter(key) {
    setActiveFilters((p) => {
      const next = { ...p };
      delete next[key];
      return next;
    });
    setPage(1);
  }
  function setFilter(k, v) {
    setActiveFilters((p) => ({ ...p, [k]: v }));
    setPage(1);
  }
  const activeFilterChips = Object.entries(activeFilters).filter(([, v]) => v);
  const FILTER_OPTIONS = [
    {
      key: "status",
      label: "Status",
      options: STAGES.map((s) => ({ value: s, label: s }))
    },
    {
      key: "priority",
      label: "Priority",
      options: ["Low", "Medium", "High", "Urgent"].map((p) => ({
        value: p,
        label: p
      }))
    },
    {
      key: "source",
      label: "Source",
      options: SOURCES.map((s) => ({ value: s, label: s }))
    },
    {
      key: "assignedTo",
      label: "Assigned To",
      options: TEAM_MEMBERS.map((m) => ({ value: m, label: m }))
    }
  ];
  function openAddLeadForStatus(status) {
    setAddStatus(status);
    setAddOpen(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-16 md:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Leads",
        description: `${leads.length} total leads · ${filtered.length} shown`,
        badge: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "secondary",
            className: "text-xs font-bold",
            "data-ocid": "leads.total_badge",
            children: leads.length
          }
        ),
        actions: [
          {
            label: "Import",
            onClick: () => {
            },
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 14 }),
            variant: "outline",
            "data-ocid": "leads.import_button"
          },
          {
            label: "Export CSV",
            onClick: () => {
            },
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 }),
            variant: "outline",
            "data-ocid": "leads.export_button"
          },
          {
            label: "Add Lead",
            onClick: () => {
              setAddStatus("New");
              setAddOpen(true);
            },
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
            "data-ocid": "leads.add_primary_button"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiCard,
        {
          title: "Total Leads",
          value: totalLeads,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16 }),
          trend: 12,
          trendLabel: "vs last month",
          sparklineData: [14, 18, 15, 22, 19, 24, 20],
          "data-ocid": "leads.kpi.total"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiCard,
        {
          title: "New This Week",
          value: newThisWeek,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
          trend: 8,
          trendLabel: "since last week",
          sparklineData: [3, 5, 4, 7, 5, 8, 6],
          "data-ocid": "leads.kpi.new_week"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiCard,
        {
          title: "Qualified",
          value: qualified,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { size: 16 }),
          trend: 5,
          trendLabel: "conversion rate up",
          sparklineData: [2, 3, 4, 3, 5, 4, 6],
          "data-ocid": "leads.kpi.qualified"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiCard,
        {
          title: "Won This Month",
          value: wonThisMonth,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
          trend: 18,
          trendLabel: "vs prior month",
          sparklineData: [1, 2, 1, 3, 2, 3, 2],
          "data-ocid": "leads.kpi.won_month"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 items-start sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SearchBar,
          {
            placeholder: "Search by name, company, email...",
            value: search,
            onChange: (v) => {
              setSearch(v);
              setPage(1);
            },
            className: "w-full sm:w-72",
            "data-ocid": "leads.search_input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => setShowFilters((p) => !p),
            "data-ocid": "leads.filter_toggle",
            className: `h-9 gap-1.5 ${showFilters ? "border-primary text-primary bg-primary/5" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 14 }),
              "Filters",
              activeFilterChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "h-4 w-4 p-0 flex items-center justify-center text-[9px] font-bold rounded-full", children: activeFilterChips.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  size: 12,
                  className: `transition-transform ${showFilters ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex items-center border border-border rounded-lg overflow-hidden", children: [
          ["table", Table2, "Table view"],
          ["kanban", Kanban, "Kanban view"],
          ["grid", LayoutGrid, "Grid view"]
        ].map(([v, Icon, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setView(v),
            "data-ocid": `leads.view.${v}_toggle`,
            className: `p-2 transition-colors ${view === v ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`,
            "aria-label": label,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15 })
          },
          v
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          className: "overflow-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-1 pb-1", children: [
            FILTER_OPTIONS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: activeFilters[f.key] ?? "",
                onValueChange: (v) => v === "" ? clearFilter(f.key) : setFilter(f.key, v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: `h-8 text-xs w-auto min-w-[120px] ${activeFilters[f.key] ? "border-primary text-primary bg-primary/5" : ""}`,
                      "data-ocid": `leads.filter.${f.key}_select`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: f.label })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      SelectItem,
                      {
                        value: "",
                        className: "text-xs text-muted-foreground",
                        children: [
                          "All ",
                          f.label
                        ]
                      }
                    ),
                    f.options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectItem,
                      {
                        value: o.value,
                        className: "text-xs",
                        children: o.label
                      },
                      o.value
                    ))
                  ] })
                ]
              },
              f.key
            )),
            activeFilterChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-8 text-xs text-muted-foreground px-2",
                onClick: () => setActiveFilters({}),
                "data-ocid": "leads.filter.clear_all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "mr-1" }),
                  "Clear all"
                ]
              }
            )
          ] })
        }
      ) }),
      activeFilterChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: activeFilterChips.map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FilterChip,
        {
          label: `${k}: ${v}`,
          onRemove: () => clearFilter(k)
        },
        k
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selected.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        BulkActionBar,
        {
          count: selected.size,
          onAssign: () => {
          },
          onChangeStatus: () => {
          },
          onDelete: () => {
            for (const id of selected) deleteLead(id);
            setSelected(/* @__PURE__ */ new Set());
          },
          onClear: () => setSelected(/* @__PURE__ */ new Set())
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        children: [
          view === "table" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableView,
            {
              leads: filtered,
              selected,
              onToggleSelect: toggleSelect,
              onToggleAll: toggleAll,
              onRowClick: setDetailLead,
              sortKey,
              sortDir,
              onSort: handleSort,
              page,
              pageSize,
              onPageChange: setPage,
              onPageSizeChange: setPageSize
            }
          ),
          view === "kanban" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            KanbanView,
            {
              leads: filtered,
              onCardClick: setDetailLead,
              onStatusChange: updateLeadStatus,
              onAddLead: openAddLeadForStatus
            }
          ),
          view === "grid" && /* @__PURE__ */ jsxRuntimeExports.jsx(GridView, { leads: filtered, onCardClick: setDetailLead })
        ]
      },
      view
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddLeadModal,
      {
        open: addOpen,
        onClose: () => setAddOpen(false),
        onAdd: (lead) => {
          addLead({ ...lead, status: addStatus });
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LeadDetailDrawer,
      {
        lead: detailLead,
        onClose: () => setDetailLead(null),
        onUpdate: (id, updates) => {
          updateLead(id, updates);
          setDetailLead(
            (prev) => prev && prev.id === id ? { ...prev, ...updates } : prev
          );
        }
      }
    )
  ] });
}
export {
  LeadsPage as default
};
