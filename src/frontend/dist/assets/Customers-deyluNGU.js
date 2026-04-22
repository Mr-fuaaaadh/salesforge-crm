import { c as createLucideIcon, u as useCrmStore, r as reactExports, j as jsxRuntimeExports, k as Users, A as AnimatePresence, m as motion, b as UserAvatar, M as Mail, C as Calendar, d as Badge, S as Sheet, o as SheetContent, p as SheetHeader, q as SheetTitle } from "./index-BlMbxdLA.js";
import { K as KpiCard } from "./KpiCard-Bzt9tS9b.js";
import { P as PageHeader } from "./PageHeader-DSb5LYEm.js";
import { S as SearchBar, T as Tag, f as formatDistanceToNow } from "./SearchBar-DRbvE61H.js";
import { S as StatusBadge } from "./StatusBadge-Bb6VdZiW.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { T as TrendingUp, C as Card } from "./card-DoSBglZU.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogFooter } from "./dialog-CmxgkzUi.js";
import { I as Input } from "./input-NM7OR39o.js";
import { L as Label } from "./label-CJYb5cSz.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CwDuuSgI.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CfPtILIY.js";
import { T as Textarea } from "./textarea-BdIGEuKt.js";
import { P as Plus } from "./plus-B_ARFHaG.js";
import { S as Star } from "./star-CWBygbFO.js";
import { L as LayoutList } from "./layout-list-h8QhFo9R.js";
import { B as Building2 } from "./building-2-b0v5v_ku.js";
import { f as format } from "./format-MbcRETyn.js";
import { A as ArrowUpRight } from "./arrow-up-right-ANJbz47A.js";
import { P as Phone } from "./phone-CcwBP2xL.js";
import { D as DollarSign } from "./dollar-sign-CMRQM1ah.js";
import { M as MessageSquare } from "./message-square-DcuiSNSD.js";
import { M as MapPin } from "./map-pin-CxE656i2.js";
import { E as ExternalLink } from "./external-link-CEd-k8G8.js";
import { C as CircleCheck } from "./circle-check-3Bhdwm5r.js";
import { C as CircleAlert } from "./circle-alert-BQpio714.js";
import { C as Clock } from "./clock-BUl1m0Xe.js";
import { F as FileText } from "./file-text-CaNw91lo.js";
import "./trending-down--9WBe-Na.js";
import "./arrow-left-Dz494sRC.js";
import "./constructNow-BzYtCcud.js";
import "./endOfMonth-Bz9NRzi1.js";
import "./index-BrhQEKyn.js";
import "./index-IXOTxK3N.js";
import "./index-TftrN_Lb.js";
import "./check-mNj6eV7j.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
const Grid3x3 = createLucideIcon("grid-3x3", __iconNode);
const customerDetails = {
  c1: {
    industry: "Logistics & Supply Chain",
    address: "400 Industrial Blvd, Chicago, IL 60601",
    website: "apexlog.net",
    accountManager: "David Park",
    relationshipStart: "2025-11-01",
    annualValue: 56e3,
    deals: [
      {
        title: "Apex Logistics Suite",
        value: 56e3,
        stage: "Won",
        date: "2026-04-19"
      }
    ],
    activities: [
      {
        id: "a1",
        type: "meeting",
        description: "Onboarding kickoff call — systems walkthrough",
        user: "David Park",
        date: "2026-04-29T10:00:00"
      },
      {
        id: "a2",
        type: "deal_won",
        description: "Deal closed — Apex Logistics Suite $56K",
        user: "David Park",
        date: "2026-04-19T16:00:00"
      },
      {
        id: "a3",
        type: "email",
        description: "Sent welcome kit and onboarding guide",
        user: "David Park",
        date: "2026-04-20T09:00:00"
      },
      {
        id: "a4",
        type: "call",
        description: "Discovery call — logistics pain points",
        user: "David Park",
        date: "2026-04-05T14:00:00"
      }
    ],
    notes: [
      {
        id: "n1",
        author: "David Park",
        date: "2026-04-22T11:00:00",
        content: "Excellent contact. Robert is very responsive and excited about the integration. Expansion opportunity in Q3 for additional warehouse licenses."
      },
      {
        id: "n2",
        author: "Alex Rivera",
        date: "2026-04-10T10:00:00",
        content: "Initial call went very well. They have 3 warehouses and are scaling to 5 by end of year. Strong upsell potential."
      }
    ],
    tickets: [
      {
        id: "TK-001",
        subject: "API integration setup assistance",
        status: "Resolved",
        priority: "High",
        created: "2026-04-21",
        updated: "2026-04-22"
      },
      {
        id: "TK-002",
        subject: "User permission configuration",
        status: "Closed",
        priority: "Low",
        created: "2026-04-20",
        updated: "2026-04-21"
      },
      {
        id: "TK-003",
        subject: "Report export not generating PDF",
        status: "Resolved",
        priority: "Medium",
        created: "2026-04-22",
        updated: "2026-04-22"
      }
    ],
    payments: [
      {
        id: "p1",
        invoice: "INV-2026-041",
        date: "2026-04-20",
        amount: 14e3,
        status: "Paid",
        due: "2026-05-20"
      },
      {
        id: "p2",
        invoice: "INV-2026-031",
        date: "2026-03-20",
        amount: 14e3,
        status: "Paid",
        due: "2026-04-20"
      },
      {
        id: "p3",
        invoice: "INV-2026-021",
        date: "2026-02-20",
        amount: 14e3,
        status: "Paid",
        due: "2026-03-20"
      },
      {
        id: "p4",
        invoice: "INV-2026-011",
        date: "2026-01-20",
        amount: 14e3,
        status: "Paid",
        due: "2026-02-20"
      }
    ],
    contracts: [
      {
        id: "ct1",
        name: "Logistics Suite — Annual License",
        value: 56e3,
        start: "2026-04-19",
        end: "2027-04-18",
        status: "Active"
      }
    ]
  },
  c2: {
    industry: "Software & Technology",
    address: "1200 Tech Park Dr, Austin, TX 78701",
    website: "vertexsw.com",
    accountManager: "Alex Rivera",
    relationshipStart: "2025-08-15",
    annualValue: 61e3,
    deals: [
      {
        title: "Vertex Software Growth",
        value: 61e3,
        stage: "Won",
        date: "2026-04-22"
      },
      {
        title: "Vertex Starter Plan",
        value: 12e3,
        stage: "Won",
        date: "2025-09-01"
      }
    ],
    activities: [
      {
        id: "a1",
        type: "deal_won",
        description: "Growth plan upgrade closed — $61K ARR",
        user: "Alex Rivera",
        date: "2026-04-22T10:00:00"
      },
      {
        id: "a2",
        type: "meeting",
        description: "Kickoff call for expansion plan",
        user: "Alex Rivera",
        date: "2026-04-15T14:00:00"
      },
      {
        id: "a3",
        type: "email",
        description: "Sent growth plan proposal deck",
        user: "Alex Rivera",
        date: "2026-04-10T09:00:00"
      },
      {
        id: "a4",
        type: "call",
        description: "Quarterly business review — positive feedback",
        user: "Alex Rivera",
        date: "2026-03-30T11:00:00"
      }
    ],
    notes: [
      {
        id: "n1",
        author: "Alex Rivera",
        date: "2026-04-22T11:00:00",
        content: "Ethan is a power user and champion internally. They're planning to add 20 more seats next quarter. Very high NPS score."
      }
    ],
    tickets: [
      {
        id: "TK-004",
        subject: "SSO configuration for team",
        status: "Resolved",
        priority: "High",
        created: "2026-04-18",
        updated: "2026-04-19"
      },
      {
        id: "TK-005",
        subject: "Bulk import — CSV format question",
        status: "Closed",
        priority: "Low",
        created: "2026-04-12",
        updated: "2026-04-13"
      }
    ],
    payments: [
      {
        id: "p5",
        invoice: "INV-2026-042",
        date: "2026-04-22",
        amount: 61e3,
        status: "Paid",
        due: "2026-05-22"
      },
      {
        id: "p6",
        invoice: "INV-2025-091",
        date: "2025-09-01",
        amount: 12e3,
        status: "Paid",
        due: "2025-10-01"
      },
      {
        id: "p7",
        invoice: "INV-2025-121",
        date: "2025-12-01",
        amount: 12e3,
        status: "Paid",
        due: "2026-01-01"
      }
    ],
    contracts: [
      {
        id: "ct2",
        name: "Vertex Growth Plan — Annual",
        value: 61e3,
        start: "2026-04-22",
        end: "2027-04-21",
        status: "Active"
      },
      {
        id: "ct3",
        name: "Vertex Starter Plan",
        value: 12e3,
        start: "2025-09-01",
        end: "2026-04-21",
        status: "Expired"
      }
    ]
  },
  c3: {
    industry: "Enterprise Technology",
    address: "88 Innovation Way, San Jose, CA 95110",
    website: "technova.io",
    accountManager: "Alex Rivera",
    relationshipStart: "2026-03-01",
    annualValue: 42e3,
    deals: [
      {
        title: "TechNova Enterprise Suite",
        value: 42e3,
        stage: "Negotiation",
        date: "2026-05-15"
      }
    ],
    activities: [
      {
        id: "a1",
        type: "email",
        description: "Received CFO pricing questions re: revised proposal",
        user: "Alex Rivera",
        date: "2026-04-22T10:30:00"
      },
      {
        id: "a2",
        type: "email",
        description: "Sent revised pricing proposal v3",
        user: "Alex Rivera",
        date: "2026-04-19T14:00:00"
      },
      {
        id: "a3",
        type: "meeting",
        description: "Product demo — enterprise feature walkthrough",
        user: "Alex Rivera",
        date: "2026-04-10T15:00:00"
      }
    ],
    notes: [
      {
        id: "n1",
        author: "Alex Rivera",
        date: "2026-04-22T09:00:00",
        content: "Sarah is the champion but CFO drives the budget decision. Need to address ROI more clearly in next conversation."
      }
    ],
    tickets: [
      {
        id: "TK-006",
        subject: "Trial environment access issue",
        status: "Resolved",
        priority: "High",
        created: "2026-04-15",
        updated: "2026-04-16"
      }
    ],
    payments: [
      {
        id: "p8",
        invoice: "INV-2026-POC",
        date: "2026-03-15",
        amount: 2500,
        status: "Paid",
        due: "2026-04-15"
      }
    ],
    contracts: [
      {
        id: "ct4",
        name: "Proof of Concept Agreement",
        value: 2500,
        start: "2026-03-15",
        end: "2026-06-15",
        status: "Active"
      }
    ]
  },
  c4: {
    industry: "Financial Services",
    address: "200 Finance Ave, New York, NY 10001",
    website: "meridian.com",
    accountManager: "Maria Chen",
    relationshipStart: "2026-02-10",
    annualValue: 78500,
    deals: [
      {
        title: "Meridian Integration Project",
        value: 78500,
        stage: "Contract",
        date: "2026-05-01"
      }
    ],
    activities: [
      {
        id: "a1",
        type: "meeting",
        description: "Contract review with legal team",
        user: "Maria Chen",
        date: "2026-04-20T14:00:00"
      },
      {
        id: "a2",
        type: "call",
        description: "Demo call — 45 mins, very positive",
        user: "Maria Chen",
        date: "2026-04-15T15:00:00"
      },
      {
        id: "a3",
        type: "email",
        description: "Sent contract draft for review",
        user: "Maria Chen",
        date: "2026-04-17T10:00:00"
      }
    ],
    notes: [
      {
        id: "n1",
        author: "Maria Chen",
        date: "2026-04-21T09:00:00",
        content: "James has full budget authority. Legal team is moving quickly. Needs custom integration with their internal CRM system."
      }
    ],
    tickets: [
      {
        id: "TK-007",
        subject: "Custom integration spec document",
        status: "Open",
        priority: "High",
        created: "2026-04-20",
        updated: "2026-04-22"
      },
      {
        id: "TK-008",
        subject: "Security compliance questionnaire",
        status: "Pending",
        priority: "Urgent",
        created: "2026-04-21",
        updated: "2026-04-22"
      }
    ],
    payments: [
      {
        id: "p9",
        invoice: "INV-2026-043",
        date: "2026-04-22",
        amount: 19625,
        status: "Pending",
        due: "2026-05-22"
      }
    ],
    contracts: [
      {
        id: "ct5",
        name: "Meridian Integration — Enterprise",
        value: 78500,
        start: "2026-05-01",
        end: "2027-04-30",
        status: "Pending"
      }
    ]
  },
  c5: {
    industry: "Investment & Finance",
    address: "Strandvägen 12, Stockholm, Sweden",
    website: "nordiccap.se",
    accountManager: "Maria Chen",
    relationshipStart: "2026-01-15",
    annualValue: 12e4,
    deals: [
      {
        title: "Nordic Capital Platform",
        value: 12e4,
        stage: "Contract",
        date: "2026-04-30"
      }
    ],
    activities: [
      {
        id: "a1",
        type: "meeting",
        description: "Contract signing scheduled for Thursday",
        user: "Maria Chen",
        date: "2026-04-22T09:00:00"
      },
      {
        id: "a2",
        type: "call",
        description: "Final review call — all items agreed",
        user: "Maria Chen",
        date: "2026-04-20T16:00:00"
      },
      {
        id: "a3",
        type: "meeting",
        description: "Legal team contract walkthrough",
        user: "Maria Chen",
        date: "2026-04-14T11:00:00"
      }
    ],
    notes: [
      {
        id: "n1",
        author: "Maria Chen",
        date: "2026-04-22T09:15:00",
        content: "Nina is excellent. Lawyers finished review — signing Thursday. This will be our biggest deal this quarter."
      }
    ],
    tickets: [
      {
        id: "TK-009",
        subject: "GDPR data processing agreement",
        status: "Resolved",
        priority: "Urgent",
        created: "2026-04-10",
        updated: "2026-04-18"
      }
    ],
    payments: [
      {
        id: "p10",
        invoice: "INV-2026-044",
        date: "2026-04-30",
        amount: 3e4,
        status: "Pending",
        due: "2026-05-30"
      }
    ],
    contracts: [
      {
        id: "ct6",
        name: "Nordic Capital Enterprise Platform",
        value: 12e4,
        start: "2026-04-30",
        end: "2027-04-29",
        status: "Pending"
      }
    ]
  }
};
function getDefaultDetail(customer) {
  return {
    industry: "Technology",
    address: "123 Business Ave, New York, NY 10001",
    website: `${customer.company.toLowerCase().replace(/\s/g, "")}.com`,
    accountManager: "Sophia Lee",
    relationshipStart: customer.lastInteraction,
    annualValue: customer.totalRevenue,
    deals: [],
    activities: [
      {
        id: "a1",
        type: "email",
        description: "Initial outreach email sent",
        user: "Sophia Lee",
        date: `${customer.lastInteraction}T09:00:00`
      }
    ],
    notes: [],
    tickets: [
      {
        id: "TK-X01",
        subject: "Onboarding support request",
        status: "Open",
        priority: "Medium",
        created: customer.lastInteraction,
        updated: customer.lastInteraction
      }
    ],
    payments: [],
    contracts: []
  };
}
const LIFECYCLE_STAGES = [
  "Subscriber",
  "Lead",
  "MQL",
  "SQL",
  "Opportunity",
  "Customer",
  "Evangelist"
];
function LifecyclePipeline({ current }) {
  const idx = LIFECYCLE_STAGES.indexOf(current);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 overflow-x-auto pb-1", children: LIFECYCLE_STAGES.map((stage, i) => {
    const isActive = i === idx;
    const isPast = i < idx;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `px-2 py-1 rounded-md text-[10px] font-medium whitespace-nowrap transition-smooth ${isActive ? "bg-primary text-primary-foreground" : isPast ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`,
          children: stage
        }
      ),
      i < LIFECYCLE_STAGES.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-4 h-px ${isPast || isActive ? "bg-primary/40" : "bg-border"}`
        }
      )
    ] }, stage);
  }) });
}
function ActivityIcon({ type }) {
  const map = {
    email: {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12 }),
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
    },
    call: {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }),
      color: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
    },
    meeting: {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
      color: "bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400"
    },
    deal_won: {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12 }),
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400"
    },
    note: {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 12 }),
      color: "bg-muted text-muted-foreground"
    }
  };
  const cfg = map[type] ?? map.note;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${cfg.color}`,
      children: cfg.icon
    }
  );
}
function TicketStatusBadge({ status }) {
  const map = {
    Open: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Resolved: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Closed: "bg-muted text-muted-foreground"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${map[status] ?? map.Closed}`,
      children: status
    }
  );
}
function PaymentStatusBadge({ status }) {
  const map = {
    Paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Overdue: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${map[status] ?? ""}`,
      children: status
    }
  );
}
function ContractStatusBadge({ status }) {
  const map = {
    Active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Expired: "bg-muted text-muted-foreground",
    Terminated: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${map[status] ?? ""}`,
      children: status
    }
  );
}
function CustomerProfileSheet({
  customer,
  open,
  onClose
}) {
  const [noteText, setNoteText] = reactExports.useState("");
  if (!customer) return null;
  const detail = customerDetails[customer.id] ?? getDefaultDetail(customer);
  const totalPaid = detail.payments.filter((p) => p.status === "Paid").reduce((sum, p) => sum + p.amount, 0);
  const totalOutstanding = detail.payments.filter((p) => p.status !== "Paid").reduce((sum, p) => sum + p.amount, 0);
  const relationshipDays = Math.round(
    (Date.now() - new Date(detail.relationshipStart).getTime()) / (1e3 * 60 * 60 * 24)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SheetContent,
    {
      className: "w-full sm:max-w-2xl overflow-y-auto p-0",
      "data-ocid": "customers.profile.sheet",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-b border-border/60 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "sr-only", children: "Customer Profile" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: customer.name, size: "lg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground", children: customer.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: customer.lifecycleStage })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
                detail.industry,
                " · ",
                customer.company
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: `mailto:${customer.email}`,
                    className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12 }),
                      customer.email
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }),
                  customer.phone
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-xl text-foreground", children: [
                "$",
                customer.totalRevenue.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Revenue" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-8 gap-1.5",
                "data-ocid": "customers.profile.email_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12 }),
                  " Email"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-8 gap-1.5",
                "data-ocid": "customers.profile.call_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }),
                  " Call"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-8 gap-1.5",
                "data-ocid": "customers.profile.meeting_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
                  " Schedule"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-8 gap-1.5",
                "data-ocid": "customers.profile.note_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 12 }),
                  " Note"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide", children: "Lifecycle Stage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(LifecyclePipeline, { current: customer.lifecycleStage })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "w-full rounded-none border-b border-border/60 bg-transparent h-10 px-6 justify-start gap-0 overflow-x-auto", children: [
            "overview",
            "activity",
            "notes",
            "tickets",
            "payments",
            "contracts"
          ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TabsTrigger,
            {
              value: tab,
              "data-ocid": `customers.profile.${tab}.tab`,
              className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent capitalize text-xs h-full px-3",
              children: tab
            },
            tab
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "p-6 space-y-6 mt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border-border/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Spend" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-xl text-foreground mt-1", children: [
                  "$",
                  customer.totalRevenue.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border-border/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Avg Deal Size" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-xl text-foreground mt-1", children: [
                  "$",
                  customer.dealsCount > 0 ? Math.round(
                    customer.totalRevenue / customer.dealsCount
                  ).toLocaleString() : "—"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border-border/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Relationship" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-xl text-foreground mt-1", children: [
                  relationshipDays,
                  "d"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Contact Info" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Mail,
                      {
                        size: 13,
                        className: "text-muted-foreground shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate", children: customer.email })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Phone,
                      {
                        size: 13,
                        className: "text-muted-foreground shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: customer.phone })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Building2,
                      {
                        size: 13,
                        className: "text-muted-foreground shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: customer.company })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      MapPin,
                      {
                        size: 13,
                        className: "text-muted-foreground shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-xs", children: detail.address })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Company Info" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 13, className: "text-muted-foreground shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: detail.industry })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ExternalLink,
                      {
                        size: 13,
                        className: "text-muted-foreground shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: detail.website })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Users,
                      {
                        size: 13,
                        className: "text-muted-foreground shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: detail.accountManager }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "(Account Manager)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Calendar,
                      {
                        size: 13,
                        className: "text-muted-foreground shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground text-xs", children: [
                      "Since",
                      " ",
                      format(
                        new Date(detail.relationshipStart),
                        "MMM d, yyyy"
                      )
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            detail.deals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Associated Deals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: detail.deals.map((deal) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-between p-3 rounded-lg bg-muted/40 border border-border/40",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: deal.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: format(new Date(deal.date), "MMM d, yyyy") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: deal.stage }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-sm font-semibold text-foreground", children: [
                        "$",
                        deal.value.toLocaleString()
                      ] })
                    ] })
                  ]
                },
                deal.title
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: customer.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tag)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "activity", className: "p-6 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-0 bottom-0 w-px bg-border/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 pl-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: detail.activities.map((act, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.07 },
                className: "relative",
                "data-ocid": `customers.activity.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-5 top-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityIcon, { type: act.type }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/60 rounded-lg p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: act.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: act.user }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40", children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatDistanceToNow(new Date(act.date), {
                        addSuffix: true
                      }) })
                    ] })
                  ] })
                ]
              },
              act.id
            )) }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "notes", className: "p-6 space-y-4 mt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: detail.notes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No notes yet." }) : detail.notes.map((note, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Card,
              {
                className: "p-4 border-border/60",
                "data-ocid": `customers.note.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: note.author, size: "xs" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: note.author }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40", children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatDistanceToNow(new Date(note.date), {
                      addSuffix: true
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: note.content })
                ]
              },
              note.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 pt-4 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  placeholder: "Add a note...",
                  value: noteText,
                  onChange: (e) => setNoteText(e.target.value),
                  className: "text-sm resize-none h-20",
                  "data-ocid": "customers.note.textarea"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  onClick: () => setNoteText(""),
                  disabled: !noteText.trim(),
                  "data-ocid": "customers.note.submit_button",
                  children: "Add Note"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "tickets", className: "p-6 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: detail.tickets.map((ticket, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-start gap-3 p-3 rounded-lg border border-border/60 bg-card hover:border-primary/30 transition-colors",
              "data-ocid": `customers.ticket.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5", children: ticket.status === "Resolved" || ticket.status === "Closed" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14, className: "text-emerald-500" }) : ticket.priority === "Urgent" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 14, className: "text-destructive" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "text-amber-500" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: ticket.id }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TicketStatusBadge, { status: ticket.status }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${ticket.priority === "Urgent" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : ticket.priority === "High" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" : "bg-muted text-muted-foreground"}`,
                        children: ticket.priority
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mt-1", children: ticket.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                    "Created ",
                    format(new Date(ticket.created), "MMM d"),
                    " · Updated ",
                    format(new Date(ticket.updated), "MMM d")
                  ] })
                ] })
              ]
            },
            ticket.id
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "payments", className: "p-6 space-y-4 mt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 border-border/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Paid" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-lg text-emerald-600 dark:text-emerald-400", children: [
                  "$",
                  totalPaid.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 border-border/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Outstanding" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: `font-display font-bold text-lg ${totalOutstanding > 0 ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground"}`,
                    children: [
                      "$",
                      totalOutstanding.toLocaleString()
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: detail.payments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No payment records." }) : detail.payments.map((payment, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 rounded-lg border border-border/60 bg-card",
                "data-ocid": `customers.payment.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FileText,
                    {
                      size: 14,
                      className: "text-muted-foreground shrink-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-foreground font-medium", children: payment.invoice }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentStatusBadge, { status: payment.status })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                      "Issued ",
                      format(new Date(payment.date), "MMM d, yyyy"),
                      " · Due ",
                      format(new Date(payment.due), "MMM d, yyyy")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold text-sm text-foreground shrink-0", children: [
                    "$",
                    payment.amount.toLocaleString()
                  ] })
                ]
              },
              payment.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "contracts", className: "p-6 space-y-3 mt-0", children: detail.contracts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No contracts yet." }) : detail.contracts.map((contract, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "p-4 border-border/60",
              "data-ocid": `customers.contract.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground", children: contract.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ContractStatusBadge, { status: contract.status })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                    format(new Date(contract.start), "MMM d, yyyy"),
                    " →",
                    " ",
                    format(new Date(contract.end), "MMM d, yyyy")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-base text-foreground shrink-0", children: [
                  "$",
                  contract.value.toLocaleString()
                ] })
              ] })
            },
            contract.id
          )) })
        ] })
      ]
    }
  ) });
}
function AddCustomerModal({
  open,
  onClose,
  onAdd
}) {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    lifecycleStage: "Lead",
    tags: "",
    notes: ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    const customer = {
      id: `c${Date.now()}`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      avatar: form.name.substring(0, 2).toUpperCase(),
      lifecycleStage: form.lifecycleStage,
      totalRevenue: 0,
      dealsCount: 0,
      lastInteraction: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean)
    };
    onAdd(customer);
    onClose();
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      lifecycleStage: "Lead",
      tags: "",
      notes: ""
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", "data-ocid": "customers.add.dialog", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Add Customer" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cust-name", className: "text-xs", children: "Full Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "cust-name",
              placeholder: "Jane Smith",
              value: form.name,
              onChange: (e) => setForm({ ...form, name: e.target.value }),
              required: true,
              "data-ocid": "customers.add.name.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cust-company", className: "text-xs", children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "cust-company",
              placeholder: "Acme Corp",
              value: form.company,
              onChange: (e) => setForm({ ...form, company: e.target.value }),
              "data-ocid": "customers.add.company.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cust-email", className: "text-xs", children: "Email *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "cust-email",
              type: "email",
              placeholder: "jane@acme.com",
              value: form.email,
              onChange: (e) => setForm({ ...form, email: e.target.value }),
              required: true,
              "data-ocid": "customers.add.email.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cust-phone", className: "text-xs", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "cust-phone",
              placeholder: "+1 (555) 000-0000",
              value: form.phone,
              onChange: (e) => setForm({ ...form, phone: e.target.value }),
              "data-ocid": "customers.add.phone.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cust-industry", className: "text-xs", children: "Industry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "cust-industry",
              placeholder: "Technology",
              value: form.industry,
              onChange: (e) => setForm({ ...form, industry: e.target.value }),
              "data-ocid": "customers.add.industry.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cust-stage", className: "text-xs", children: "Lifecycle Stage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.lifecycleStage,
              onValueChange: (v) => setForm({ ...form, lifecycleStage: v }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    id: "cust-stage",
                    "data-ocid": "customers.add.stage.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: LIFECYCLE_STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cust-tags", className: "text-xs", children: "Tags (comma-separated)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "cust-tags",
            placeholder: "enterprise, SaaS, partner",
            value: form.tags,
            onChange: (e) => setForm({ ...form, tags: e.target.value }),
            "data-ocid": "customers.add.tags.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cust-notes", className: "text-xs", children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "cust-notes",
            placeholder: "Initial notes about this customer...",
            value: form.notes,
            onChange: (e) => setForm({ ...form, notes: e.target.value }),
            className: "resize-none h-20 text-sm",
            "data-ocid": "customers.add.notes.textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: onClose,
            "data-ocid": "customers.add.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", "data-ocid": "customers.add.submit_button", children: "Add Customer" })
      ] })
    ] })
  ] }) });
}
function CustomerTableRow({
  customer,
  index,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.tr,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.04 },
      onClick,
      className: "group cursor-pointer hover:bg-muted/40 transition-colors border-b border-border/40",
      "data-ocid": `customers.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: customer.name, size: "sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate max-w-[140px]", children: customer.name }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 12, className: "shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[120px]", children: customer.company })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden lg:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate max-w-[160px] block", children: customer.email }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden xl:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: customer.phone }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: customer.lifecycleStage }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-sm font-semibold text-foreground", children: [
          "$",
          customer.totalRevenue.toLocaleString()
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: customer.dealsCount }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: customer.lastInteraction ? format(new Date(customer.lastInteraction), "MMM d") : "—" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
            onClick: (e) => {
              e.stopPropagation();
              onClick();
            },
            "aria-label": `View ${customer.name}`,
            "data-ocid": `customers.view_button.${index + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
          }
        ) })
      ]
    }
  );
}
function CustomerCard({
  customer,
  index,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.05 },
      "data-ocid": `customers.card.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          onClick,
          className: "p-5 border border-border/60 hover:border-primary/40 hover:shadow-elevation transition-all cursor-pointer group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: customer.name, size: "lg" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: customer.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: customer.company }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: customer.lifecycleStage, className: "mt-1" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity shrink-0",
                  onClick: (e) => {
                    e.stopPropagation();
                    onClick();
                  },
                  "aria-label": `View ${customer.name}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 11, className: "shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: customer.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 11, className: "shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: customer.phone })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DollarSign,
                  {
                    size: 11,
                    className: "text-emerald-600 dark:text-emerald-400"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold text-foreground", children: [
                  "$",
                  customer.totalRevenue.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11 }),
                customer.lastInteraction ? format(new Date(customer.lastInteraction), "MMM d") : "—"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
                customer.dealsCount,
                " deals"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-3", children: customer.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-[10px] h-4 px-1.5",
                children: tag
              },
              tag
            )) })
          ]
        }
      )
    }
  );
}
function CustomersPage() {
  const customers = useCrmStore((s) => s.customers);
  const addCustomer = useCrmStore((s) => s.addCustomer);
  const [search, setSearch] = reactExports.useState("");
  const [stageFilter, setStageFilter] = reactExports.useState("all");
  const [viewMode, setViewMode] = reactExports.useState("table");
  const [selectedCustomer, setSelectedCustomer] = reactExports.useState(
    null
  );
  const [profileOpen, setProfileOpen] = reactExports.useState(false);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const totalCustomers = customers.length;
  const retained = customers.filter(
    (c) => c.lifecycleStage === "Customer" || c.lifecycleStage === "Evangelist"
  ).length;
  const newThisMonth = customers.filter((c) => {
    const d = new Date(c.lastInteraction);
    const now = /* @__PURE__ */ new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;
  const atRisk = customers.filter((c) => {
    const daysSince = (Date.now() - new Date(c.lastInteraction).getTime()) / (1e3 * 60 * 60 * 24);
    return daysSince > 21 && c.lifecycleStage !== "Customer";
  }).length;
  const filtered = customers.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch = !q || c.name.toLowerCase().includes(q) || c.company.toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
    const matchStage = stageFilter === "all" || c.lifecycleStage === stageFilter;
    return matchSearch && matchStage;
  });
  function openProfile(customer) {
    setSelectedCustomer(customer);
    setProfileOpen(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-16 md:pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Customers",
        description: `${customers.length} total customers`,
        actions: [
          {
            label: "Add Customer",
            onClick: () => setAddOpen(true),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
            "data-ocid": "customers.add.primary_button"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiCard,
        {
          title: "Total Customers",
          value: totalCustomers,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16 }),
          trend: 8,
          trendLabel: "vs last month",
          sparklineData: [6, 7, 7, 8, 8, 9, 10],
          "data-ocid": "customers.kpi.total"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiCard,
        {
          title: "New This Month",
          value: newThisMonth,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16 }),
          trend: 12,
          trendLabel: "vs last month",
          sparklineData: [1, 2, 1, 3, 2, 3, newThisMonth],
          "data-ocid": "customers.kpi.new"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiCard,
        {
          title: "Retained",
          value: retained,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16 }),
          trend: 5,
          trendLabel: "active customers",
          sparklineData: [3, 3, 4, 4, 4, 5, retained],
          "data-ocid": "customers.kpi.retained"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KpiCard,
        {
          title: "At-Risk",
          value: atRisk,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 16 }),
          trend: -3,
          trendLabel: "churn indicators",
          sparklineData: [2, 3, 4, 3, 4, 3, atRisk],
          "data-ocid": "customers.kpi.at_risk"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchBar,
        {
          placeholder: "Search customers...",
          value: search,
          onChange: setSearch,
          className: "w-64",
          "data-ocid": "customers.search_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: stageFilter, onValueChange: setStageFilter, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            className: "w-44 h-9 text-sm",
            "data-ocid": "customers.stage.select",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Stages" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Stages" }),
          LIFECYCLE_STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1 border border-border/60 rounded-lg p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: viewMode === "table" ? "secondary" : "ghost",
            size: "sm",
            className: "h-7 w-7 p-0",
            onClick: () => setViewMode("table"),
            "aria-label": "Table view",
            "data-ocid": "customers.view.table.toggle",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutList, { size: 14 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: viewMode === "grid" ? "secondary" : "ghost",
            size: "sm",
            className: "h-7 w-7 p-0",
            onClick: () => setViewMode("grid"),
            "aria-label": "Grid view",
            "data-ocid": "customers.view.grid.toggle",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: viewMode === "table" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border/60 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60 bg-muted/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Customer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Company" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden xl:table-cell", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Stage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Revenue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell", children: "Deals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden sm:table-cell", children: "Last Activity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 w-10" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                colSpan: 9,
                className: "px-4 py-12 text-center text-sm text-muted-foreground",
                "data-ocid": "customers.table.empty_state",
                children: "No customers found matching your filters."
              }
            ) }) : filtered.map((customer, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              CustomerTableRow,
              {
                customer,
                index: i,
                onClick: () => openProfile(customer)
              },
              customer.id
            )) })
          ] }) }),
          filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-t border-border/60 bg-muted/20 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Showing ",
            filtered.length,
            " of ",
            customers.length,
            " customers"
          ] }) })
        ] })
      },
      "table"
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "col-span-full text-center py-12 text-sm text-muted-foreground",
            "data-ocid": "customers.grid.empty_state",
            children: "No customers found matching your filters."
          }
        ) : filtered.map((customer, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CustomerCard,
          {
            customer,
            index: i,
            onClick: () => openProfile(customer)
          },
          customer.id
        ))
      },
      "grid"
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomerProfileSheet,
      {
        customer: selectedCustomer,
        open: profileOpen,
        onClose: () => setProfileOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddCustomerModal,
      {
        open: addOpen,
        onClose: () => setAddOpen(false),
        onAdd: addCustomer
      }
    )
  ] });
}
export {
  CustomersPage as default
};
