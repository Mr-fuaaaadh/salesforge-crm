import { c as createLucideIcon, u as useCrmStore, r as reactExports, j as jsxRuntimeExports, m as motion, d as Badge, x as cn, A as AnimatePresence, y as Search, X, l as ChevronDown, b as UserAvatar, S as Sheet, o as SheetContent, p as SheetHeader, q as SheetTitle, C as Calendar, F as DropdownMenu, G as DropdownMenuTrigger, E as Ellipsis, H as DropdownMenuContent, I as DropdownMenuItem, J as DropdownMenuSeparator, v as Bell, k as Users, M as Mail } from "./index-BlMbxdLA.js";
import { P as PriorityBadge, A as ArrowRight } from "./PriorityBadge-Cno_Tsvr.js";
import { S as StatusBadge } from "./StatusBadge-Bb6VdZiW.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { C as Checkbox } from "./checkbox-DrxJEOS1.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogFooter } from "./dialog-CmxgkzUi.js";
import { I as Input } from "./input-NM7OR39o.js";
import { L as Label } from "./label-CJYb5cSz.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as ChevronUp } from "./select-CwDuuSgI.js";
import { S as Separator } from "./separator-CwslPhpP.js";
import { T as Textarea } from "./textarea-BdIGEuKt.js";
import { F as Funnel } from "./funnel-C9x5ee5h.js";
import { P as Plus } from "./plus-B_ARFHaG.js";
import { C as CircleAlert } from "./circle-alert-BQpio714.js";
import { C as Clock } from "./clock-BUl1m0Xe.js";
import { T as Trash2 } from "./trash-2-D1139fWY.js";
import { L as List } from "./list-BEMR0IU3.js";
import { C as CircleCheck } from "./circle-check-3Bhdwm5r.js";
import { F as FileText } from "./file-text-CaNw91lo.js";
import { P as Phone } from "./phone-CcwBP2xL.js";
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
const __iconNode$3 = [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
];
const AlignLeft = createLucideIcon("align-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
const CheckCheck = createLucideIcon("check-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
];
const Columns2 = createLucideIcon("columns-2", __iconNode);
const typeIconMap = {
  Call: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }),
  Email: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12 }),
  "Follow-up": /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 }),
  Meeting: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12 }),
  Proposal: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 12 }),
  Reminder: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 12 })
};
const typeColorMap = {
  Call: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Email: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Follow-up": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  Meeting: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  Proposal: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Reminder: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
};
function TypeChip({ type }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap",
        typeColorMap[type]
      ),
      children: [
        typeIconMap[type],
        type
      ]
    }
  );
}
const TODAY = /* @__PURE__ */ new Date();
TODAY.setHours(0, 0, 0, 0);
function parseDate(d) {
  const dt = new Date(d);
  dt.setHours(0, 0, 0, 0);
  return dt;
}
function formatDueDate(d) {
  if (!d) return "—";
  const dt = parseDate(d);
  const diff = Math.round((dt.getTime() - TODAY.getTime()) / 864e5);
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff === -1) return "Yesterday";
  if (diff < 0) return `${Math.abs(diff)}d overdue`;
  if (diff <= 6) return `In ${diff}d`;
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function dueDateClass(task) {
  if (task.status === "Completed") return "text-muted-foreground";
  if (!task.dueDate) return "text-muted-foreground";
  const dt = parseDate(task.dueDate);
  if (dt < TODAY) return "text-destructive font-medium";
  if (dt.getTime() === TODAY.getTime()) return "text-warning font-medium";
  return "text-muted-foreground";
}
function groupTasks(tasks) {
  const overdue = tasks.filter(
    (t) => t.status === "Overdue" || t.status !== "Completed" && t.dueDate && parseDate(t.dueDate) < TODAY
  );
  const today = tasks.filter(
    (t) => t.status !== "Completed" && t.dueDate && parseDate(t.dueDate).getTime() === TODAY.getTime() && !overdue.includes(t)
  );
  const weekEnd = new Date(TODAY);
  weekEnd.setDate(TODAY.getDate() + 7);
  const thisWeek = tasks.filter(
    (t) => t.status !== "Completed" && t.dueDate && parseDate(t.dueDate) > TODAY && parseDate(t.dueDate) <= weekEnd && !overdue.includes(t) && !today.includes(t)
  );
  const later = tasks.filter(
    (t) => t.status !== "Completed" && (!t.dueDate || parseDate(t.dueDate) > weekEnd) && !overdue.includes(t) && !today.includes(t) && !thisWeek.includes(t)
  );
  const completed = tasks.filter((t) => t.status === "Completed");
  return [
    { label: "Overdue", tasks: overdue, color: "text-destructive" },
    { label: "Due Today", tasks: today, color: "text-warning" },
    { label: "This Week", tasks: thisWeek, color: "text-foreground" },
    { label: "Later", tasks: later, color: "text-muted-foreground" },
    { label: "Completed", tasks: completed, color: "text-success" }
  ].filter((g) => g.tasks.length > 0);
}
const TASK_TYPES = [
  "Call",
  "Email",
  "Follow-up",
  "Meeting",
  "Proposal",
  "Reminder"
];
const TASK_STATUSES = [
  "Pending",
  "InProgress",
  "Completed",
  "Overdue"
];
const PRIORITIES = ["Low", "Medium", "High", "Urgent"];
const ASSIGNEES = [
  "Alex Rivera",
  "Maria Chen",
  "David Park",
  "Sophia Lee",
  "Jordan Mills",
  "Aisha Patel"
];
function AddTaskModal({ open, onClose, onAdd }) {
  const [title, setTitle] = reactExports.useState("");
  const [type, setType] = reactExports.useState("Follow-up");
  const [status, setStatus] = reactExports.useState("Pending");
  const [priority, setPriority] = reactExports.useState("Medium");
  const [dueDate, setDueDate] = reactExports.useState("");
  const [assignedTo, setAssignedTo] = reactExports.useState("Alex Rivera");
  const [relatedTo, setRelatedTo] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  function validate() {
    const e = {};
    if (!title.trim()) e.title = "Title is required";
    if (!dueDate) e.dueDate = "Due date is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function handleSubmit() {
    if (!validate()) return;
    onAdd({
      id: `tk${Date.now()}`,
      title: title.trim(),
      type,
      status,
      priority,
      dueDate,
      assignedTo,
      relatedTo,
      notes
    });
    setTitle("");
    setDueDate("");
    setRelatedTo("");
    setNotes("");
    setErrors({});
    onClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[520px]", "data-ocid": "add_task.dialog", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display font-semibold text-lg", children: "Add New Task" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "task-title", children: [
          "Title ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "task-title",
            value: title,
            onChange: (e) => setTitle(e.target.value),
            placeholder: "Task title…",
            "data-ocid": "add_task.input"
          }
        ),
        errors.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs text-destructive",
            "data-ocid": "add_task.field_error",
            children: errors.title
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: type,
              onValueChange: (v) => setType(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "add_task.type_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TASK_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  typeIconMap[t],
                  t
                ] }) }, t)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Priority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: priority,
              onValueChange: (v) => setPriority(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "add_task.priority_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRIORITIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: status,
              onValueChange: (v) => setStatus(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "add_task.status_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TASK_STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s === "InProgress" ? "In Progress" : s }, s)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
            "Due Date ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: dueDate,
              onChange: (e) => setDueDate(e.target.value),
              "data-ocid": "add_task.due_date_input"
            }
          ),
          errors.dueDate && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-destructive",
              "data-ocid": "add_task.date_field_error",
              children: errors.dueDate
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Assigned To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: assignedTo, onValueChange: setAssignedTo, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "add_task.assignee_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ASSIGNEES.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: a, children: a }, a)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Related To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: relatedTo,
              onChange: (e) => setRelatedTo(e.target.value),
              placeholder: "Lead, deal, or customer",
              "data-ocid": "add_task.related_input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: notes,
            onChange: (e) => setNotes(e.target.value),
            placeholder: "Optional notes…",
            rows: 3,
            "data-ocid": "add_task.notes_textarea"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          onClick: onClose,
          "data-ocid": "add_task.cancel_button",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSubmit, "data-ocid": "add_task.submit_button", children: "Add Task" })
    ] })
  ] }) });
}
function TaskDrawer({ task, onClose, onUpdate }) {
  const [editTitle, setEditTitle] = reactExports.useState((task == null ? void 0 : task.title) ?? "");
  const [editNotes, setEditNotes] = reactExports.useState((task == null ? void 0 : task.notes) ?? "");
  const [subtasks, setSubtasks] = reactExports.useState([
    { id: "st1", title: "Review related documents", completed: false },
    { id: "st2", title: "Prepare talking points", completed: true },
    { id: "st3", title: "Send follow-up confirmation", completed: false }
  ]);
  const [newSubtask, setNewSubtask] = reactExports.useState("");
  const [comment, setComment] = reactExports.useState("");
  const [comments, setComments] = reactExports.useState([
    {
      id: "c1",
      text: "Reached out — they're available Thursday.",
      author: "Alex Rivera",
      time: "2h ago"
    },
    {
      id: "c2",
      text: "Budget approval pending from their CFO.",
      author: "Maria Chen",
      time: "Yesterday"
    }
  ]);
  reactExports.useEffect(() => {
    if (task) {
      setEditTitle(task.title);
      setEditNotes(task.notes);
    }
  }, [task]);
  if (!task) return null;
  function handleSave() {
    if (!task) return;
    onUpdate(task.id, { title: editTitle, notes: editNotes });
  }
  function toggleSub(id) {
    setSubtasks(
      (p) => p.map((s) => s.id === id ? { ...s, completed: !s.completed } : s)
    );
  }
  function addSubtask() {
    if (!newSubtask.trim()) return;
    setSubtasks((p) => [
      ...p,
      { id: `st${Date.now()}`, title: newSubtask.trim(), completed: false }
    ]);
    setNewSubtask("");
  }
  function addComment() {
    if (!comment.trim()) return;
    setComments((p) => [
      {
        id: `c${Date.now()}`,
        text: comment.trim(),
        author: "Alex Rivera",
        time: "Just now"
      },
      ...p
    ]);
    setComment("");
  }
  const activityLog = [
    { id: "al1", text: "Task created", time: "Apr 20, 9:00 AM" },
    {
      id: "al2",
      text: `Priority set to ${task.priority}`,
      time: "Apr 21, 2:30 PM"
    },
    {
      id: "al3",
      text: `Assigned to ${task.assignedTo}`,
      time: "Apr 21, 3:00 PM"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!task, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-[520px] overflow-y-auto p-0",
      "data-ocid": "task_detail.sheet",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-card border-b px-6 py-4 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display text-base leading-snug text-foreground pr-4", children: task.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TypeChip, { type: task.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: task.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: editTitle,
                  onChange: (e) => setEditTitle(e.target.value),
                  className: "text-sm",
                  "data-ocid": "task_detail.title_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Assigned To" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 bg-muted/40 rounded-lg text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: task.assignedTo, size: "xs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-foreground", children: task.assignedTo })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Due Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 bg-muted/40 rounded-lg text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Calendar,
                    {
                      size: 12,
                      className: "text-muted-foreground shrink-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("truncate", dueDateClass(task)), children: formatDueDate(task.dueDate) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Related To" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-muted/40 rounded-lg text-sm text-foreground", children: task.relatedTo || "—" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1.5 block", children: "Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: editNotes,
                onChange: (e) => setEditNotes(e.target.value),
                rows: 3,
                placeholder: "Add notes…",
                className: "text-sm resize-none",
                "data-ocid": "task_detail.notes_textarea"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              onClick: handleSave,
              className: "w-full",
              "data-ocid": "task_detail.save_button",
              children: "Save Changes"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-2 uppercase tracking-wide", children: [
              "Subtasks (",
              subtasks.filter((s) => s.completed).length,
              "/",
              subtasks.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: subtasks.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  checked: s.completed,
                  onCheckedChange: () => toggleSub(s.id),
                  className: "shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "text-sm flex-1",
                    s.completed && "line-through text-muted-foreground"
                  ),
                  children: s.title
                }
              )
            ] }, s.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: newSubtask,
                  onChange: (e) => setNewSubtask(e.target.value),
                  placeholder: "Add subtask…",
                  className: "text-sm h-8",
                  onKeyDown: (e) => e.key === "Enter" && addSubtask(),
                  "data-ocid": "task_detail.subtask_input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: addSubtask,
                  className: "h-8 shrink-0",
                  children: "Add"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2 uppercase tracking-wide", children: "Comments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-3", children: comments.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                UserAvatar,
                {
                  name: c.author,
                  size: "xs",
                  className: "mt-0.5 shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: c.author }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: c.time })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-snug mt-0.5 break-words", children: c.text })
              ] })
            ] }, c.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: comment,
                  onChange: (e) => setComment(e.target.value),
                  placeholder: "Write a comment…",
                  className: "text-sm h-8",
                  onKeyDown: (e) => e.key === "Enter" && addComment(),
                  "data-ocid": "task_detail.comment_input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  onClick: addComment,
                  className: "h-8 shrink-0",
                  "data-ocid": "task_detail.comment_submit_button",
                  children: "Post"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2 uppercase tracking-wide", children: "Activity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: activityLog.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 flex-1", children: a.text }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground shrink-0", children: a.time })
            ] }, a.id)) })
          ] })
        ] })
      ]
    }
  ) });
}
function ListView({
  tasks,
  selectedIds,
  onSelect,
  onToggle,
  onDelete,
  onOpenDetail
}) {
  const groups = groupTasks(tasks);
  const [collapsed, setCollapsed] = reactExports.useState(/* @__PURE__ */ new Set());
  function toggleGroup(label) {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }
  if (tasks.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 text-muted-foreground",
        "data-ocid": "tasks.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 40, className: "mb-3 opacity-20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "No tasks match your filters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Try adjusting your search or filters" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "tasks.list", children: groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-2xl border border-border overflow-hidden shadow-subtle",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between px-4 py-3 hover:bg-muted/40 transition-colors",
            onClick: () => toggleGroup(group.label),
            onKeyDown: (e) => e.key === "Enter" && toggleGroup(group.label),
            "data-ocid": `tasks.group_${group.label.toLowerCase().replace(/\s+/g, "_")}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-sm font-semibold font-display",
                      group.color
                    ),
                    children: group.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] h-4 px-1.5", children: group.tasks.length })
              ] }),
              collapsed.has(group.label) ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: !collapsed.has(group.label) && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.2 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: group.tasks.map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TaskRow,
              {
                task,
                index: i + 1,
                selected: selectedIds.has(task.id),
                onSelect: () => onSelect(task.id),
                onToggle: () => onToggle(task.id),
                onDelete: () => onDelete(task.id),
                onOpenDetail: () => onOpenDetail(task)
              },
              task.id
            )) })
          }
        ) })
      ]
    },
    group.label
  )) });
}
function TaskRow({
  task,
  index,
  selected,
  onSelect,
  onToggle,
  onDelete,
  onOpenDetail
}) {
  const isCompleted = task.status === "Completed";
  const isOverdue = task.status === "Overdue" || task.status !== "Completed" && task.dueDate && parseDate(task.dueDate) < TODAY;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layout: true,
      className: cn(
        "flex items-center gap-3 px-4 py-3 group hover:bg-muted/30 transition-colors cursor-pointer",
        selected && "bg-primary/5",
        isCompleted && "opacity-60"
      ),
      onClick: onOpenDetail,
      "data-ocid": `tasks.item.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            role: "presentation",
            onClick: (e) => {
              e.stopPropagation();
              onSelect();
            },
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                onSelect();
              }
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: selected,
                onCheckedChange: onSelect,
                className: "shrink-0",
                "data-ocid": `tasks.checkbox.${index}`
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: cn(
              "shrink-0 rounded-full transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isCompleted ? "text-success" : isOverdue ? "text-destructive hover:text-success" : "text-muted-foreground hover:text-success"
            ),
            onClick: (e) => {
              e.stopPropagation();
              onToggle();
            },
            "aria-label": isCompleted ? "Mark incomplete" : "Mark complete",
            "data-ocid": `tasks.complete_toggle.${index}`,
            children: isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16, fill: "currentColor" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypeChip, { type: task.type }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "flex-1 min-w-0 text-sm text-foreground truncate",
              isCompleted && "line-through text-muted-foreground"
            ),
            children: task.title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-3 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority, showIcon: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-xs whitespace-nowrap", dueDateClass(task)), children: task.dueDate ? formatDueDate(task.dueDate) : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: task.assignedTo, size: "xs" }),
          task.relatedTo && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground max-w-[80px] truncate hidden lg:block", children: task.relatedTo })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-7 w-7 p-0 opacity-0 group-hover:opacity-100 shrink-0",
              onClick: (e) => e.stopPropagation(),
              "data-ocid": `tasks.row_actions.${index}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 14 })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-36", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DropdownMenuItem,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  onOpenDetail();
                },
                children: "View detail"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DropdownMenuItem,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  onToggle();
                },
                children: isCompleted ? "Mark pending" : "Mark complete"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DropdownMenuItem,
              {
                className: "text-destructive focus:text-destructive",
                onClick: (e) => {
                  e.stopPropagation();
                  onDelete();
                },
                "data-ocid": `tasks.delete_button.${index}`,
                children: "Delete"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const KANBAN_COLS = [
  {
    status: "Pending",
    label: "Pending",
    colorBorder: "border-amber-400/40",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13, className: "text-amber-500" })
  },
  {
    status: "InProgress",
    label: "In Progress",
    colorBorder: "border-blue-400/40",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 13, className: "text-blue-500" })
  },
  {
    status: "Completed",
    label: "Completed",
    colorBorder: "border-emerald-400/40",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 13, className: "text-emerald-500" })
  },
  {
    status: "Overdue",
    label: "Overdue",
    colorBorder: "border-red-400/40",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 13, className: "text-red-500" })
  }
];
function KanbanView({
  tasks,
  onDrop,
  onOpenDetail,
  onDelete
}) {
  const [draggingId, setDraggingId] = reactExports.useState(null);
  const [overCol, setOverCol] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",
      "data-ocid": "tasks.kanban",
      children: KANBAN_COLS.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.status);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex flex-col bg-muted/30 rounded-2xl border-2 transition-colors min-h-[200px]",
              overCol === col.status ? "border-primary/40 bg-primary/5" : col.colorBorder
            ),
            onDragOver: (e) => {
              e.preventDefault();
              setOverCol(col.status);
            },
            onDragLeave: () => setOverCol(null),
            onDrop: (e) => {
              e.preventDefault();
              if (draggingId) {
                onDrop(draggingId, col.status);
                setDraggingId(null);
              }
              setOverCol(null);
            },
            "data-ocid": `tasks.kanban_col_${col.status.toLowerCase()}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-border/60", children: [
                col.icon,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold font-display text-foreground", children: col.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "ml-auto text-[10px] h-4 px-1.5",
                    children: colTasks.length
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-3 space-y-2 overflow-y-auto", children: [
                colTasks.map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    draggable: true,
                    onDragStart: () => setDraggingId(task.id),
                    onDragEnd: () => setDraggingId(null),
                    className: cn(
                      "transition-smooth",
                      draggingId === task.id && "opacity-40"
                    ),
                    "data-ocid": `tasks.kanban_card.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      KanbanCard,
                      {
                        task,
                        onOpenDetail: () => onOpenDetail(task),
                        onDelete: () => onDelete(task.id)
                      }
                    )
                  },
                  task.id
                )),
                colTasks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-16 text-muted-foreground text-xs", children: "Drop tasks here" })
              ] })
            ]
          },
          col.status
        );
      })
    }
  );
}
function KanbanCard({
  task,
  onOpenDetail,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layout: true,
      onClick: onOpenDetail,
      className: "bg-card rounded-xl border border-border p-3 cursor-pointer hover:shadow-elevation hover:border-primary/20 transition-smooth group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-1 mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TypeChip, { type: task.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-5 w-5 p-0 opacity-0 group-hover:opacity-100 shrink-0",
                onClick: (e) => e.stopPropagation(),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 12 })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-32", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DropdownMenuItem,
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    onOpenDetail();
                  },
                  children: "View"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DropdownMenuItem,
                {
                  className: "text-destructive focus:text-destructive",
                  onClick: (e) => {
                    e.stopPropagation();
                    onDelete();
                  },
                  children: "Delete"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-snug line-clamp-2 mb-2", children: task.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority, showIcon: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            task.dueDate && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px]", dueDateClass(task)), children: formatDueDate(task.dueDate) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: task.assignedTo, size: "xs" })
          ] })
        ] })
      ]
    }
  );
}
const PRIORITY_DOT = {
  Low: "bg-muted-foreground",
  Medium: "bg-amber-500",
  High: "bg-orange-500",
  Urgent: "bg-destructive"
};
function CalendarView({
  tasks,
  onOpenDetail
}) {
  const [currentDate, setCurrentDate] = reactExports.useState(/* @__PURE__ */ new Date());
  const [selectedDay, setSelectedDay] = reactExports.useState(null);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
  const todayStr = TODAY.toISOString().split("T")[0];
  const tasksByDate = {};
  for (const t of tasks) {
    if (!t.dueDate) continue;
    if (!tasksByDate[t.dueDate]) tasksByDate[t.dueDate] = [];
    tasksByDate[t.dueDate].push(t);
  }
  const selectedTasks = selectedDay ? tasksByDate[selectedDay] ?? [] : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "tasks.calendar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border shadow-subtle overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground", children: monthName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-7 w-7 p-0",
              onClick: () => setCurrentDate(new Date(year, month - 1, 1)),
              "data-ocid": "tasks.calendar_prev",
              children: "‹"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-7 w-7 p-0",
              onClick: () => setCurrentDate(new Date(year, month + 1, 1)),
              "data-ocid": "tasks.calendar_next",
              children: "›"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 border-b border-border", children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-center text-[11px] text-muted-foreground font-medium py-2",
          children: d
        },
        d
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7", children: [
        Array.from({ length: firstDay }, (_, i) => {
          const emptyCellKey = `${year}-${month}-empty-${i}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "min-h-[60px] border-r border-b border-border/40 last:border-r-0"
            },
            emptyCellKey
          );
        }),
        Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const dayTasks = tasksByDate[dateStr] ?? [];
          const isToday = dateStr === todayStr;
          const isSelected = dateStr === selectedDay;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: cn(
                "min-h-[60px] border-r border-b border-border/40 p-1.5 text-left transition-colors hover:bg-muted/40",
                (firstDay + i) % 7 === 6 && "border-r-0",
                isSelected && "bg-primary/10"
              ),
              onClick: () => setSelectedDay(isSelected ? null : dateStr),
              onKeyDown: (e) => e.key === "Enter" && setSelectedDay(isSelected ? null : dateStr),
              "data-ocid": `tasks.calendar_day.${day}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full mb-1",
                      isToday ? "bg-primary text-primary-foreground" : "text-foreground"
                    ),
                    children: day
                  }
                ),
                dayTasks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-0.5", children: [
                  dayTasks.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: cn(
                        "w-1.5 h-1.5 rounded-full",
                        PRIORITY_DOT[t.priority]
                      )
                    },
                    t.id
                  )),
                  dayTasks.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground", children: [
                    "+",
                    dayTasks.length - 3
                  ] })
                ] })
              ]
            },
            dateStr
          );
        })
      ] })
    ] }),
    selectedDay && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "bg-card rounded-2xl border border-border shadow-subtle p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-3 text-sm", children: (/* @__PURE__ */ new Date(`${selectedDay}T00:00:00`)).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
          }) }),
          selectedTasks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No tasks due on this day." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: selectedTasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "w-full flex items-center gap-3 p-2.5 bg-muted/30 rounded-xl cursor-pointer hover:bg-muted/50 transition-colors text-left",
              onClick: () => onOpenDetail(task),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TypeChip, { type: task.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm text-foreground truncate", children: task.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority, showIcon: false }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: task.assignedTo, size: "xs" })
              ]
            },
            task.id
          )) })
        ]
      }
    )
  ] });
}
function AgendaView({
  tasks,
  onOpenDetail
}) {
  const withDate = tasks.filter((t) => !!t.dueDate);
  const sorted = [...withDate].sort(
    (a, b) => a.dueDate.localeCompare(b.dueDate)
  );
  const byDate = {};
  for (const t of sorted) {
    if (!byDate[t.dueDate]) byDate[t.dueDate] = [];
    byDate[t.dueDate].push(t);
  }
  const dates = Object.keys(byDate).sort();
  if (dates.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 text-muted-foreground",
        "data-ocid": "tasks.agenda_empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 40, className: "mb-3 opacity-20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "No upcoming tasks" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", "data-ocid": "tasks.agenda", children: dates.map((date) => {
    const dt = /* @__PURE__ */ new Date(`${date}T00:00:00`);
    const isToday = date === TODAY.toISOString().split("T")[0];
    const isPast = parseDate(date) < TODAY;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2 px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "text-center rounded-xl px-2.5 py-1 shrink-0",
              isToday ? "bg-primary text-primary-foreground" : isPast ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase font-medium tracking-wide", children: dt.toLocaleDateString("en-US", { weekday: "short" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold leading-none", children: dt.getDate() })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
          dt.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          }),
          isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-primary font-medium text-xs", children: "Today" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-16 space-y-2", children: byDate[date].map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          initial: { opacity: 0, x: -8 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.04 },
          onClick: () => onOpenDetail(task),
          className: "w-full flex items-center gap-3 p-3 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-subtle cursor-pointer transition-smooth text-left",
          "data-ocid": `tasks.agenda_item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TypeChip, { type: task.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 min-w-0 text-sm text-foreground truncate", children: task.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority, showIcon: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: task.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: task.assignedTo, size: "xs" })
          ]
        },
        task.id
      )) })
    ] }, date);
  }) });
}
const VIEW_TABS = [
  {
    mode: "list",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 14 }),
    label: "List",
    ocid: "tasks.list_view_tab"
  },
  {
    mode: "kanban",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Columns2, { size: 14 }),
    label: "Kanban",
    ocid: "tasks.kanban_view_tab"
  },
  {
    mode: "calendar",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 14 }),
    label: "Calendar",
    ocid: "tasks.calendar_view_tab"
  },
  {
    mode: "agenda",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(AlignLeft, { size: 14 }),
    label: "Agenda",
    ocid: "tasks.agenda_view_tab"
  }
];
function TasksPage() {
  const { tasks, addTask, updateTask, toggleTaskComplete, deleteTask } = useCrmStore();
  const [view, setView] = reactExports.useState("list");
  const [search, setSearch] = reactExports.useState("");
  const [filterType, setFilterType] = reactExports.useState("all");
  const [filterStatus, setFilterStatus] = reactExports.useState("all");
  const [filterPriority, setFilterPriority] = reactExports.useState("all");
  const [filterAssignee, setFilterAssignee] = reactExports.useState("all");
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [detailTask, setDetailTask] = reactExports.useState(null);
  const [selectedIds, setSelectedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const overdueTasks = tasks.filter(
    (t) => t.status === "Overdue" || t.status !== "Completed" && t.dueDate && parseDate(t.dueDate) < TODAY
  );
  const todayTasks = tasks.filter(
    (t) => t.status !== "Completed" && t.dueDate && parseDate(t.dueDate).getTime() === TODAY.getTime()
  );
  const completedToday = tasks.filter(
    (t) => t.status === "Completed" && t.dueDate && parseDate(t.dueDate).getTime() === TODAY.getTime()
  );
  const filtered = reactExports.useMemo(
    () => tasks.filter((t) => {
      if (search && !t.title.toLowerCase().includes(search.toLowerCase()) && !t.relatedTo.toLowerCase().includes(search.toLowerCase()))
        return false;
      if (filterType !== "all" && t.type !== filterType) return false;
      if (filterStatus !== "all" && t.status !== filterStatus) return false;
      if (filterPriority !== "all" && t.priority !== filterPriority)
        return false;
      if (filterAssignee !== "all" && t.assignedTo !== filterAssignee)
        return false;
      return true;
    }),
    [tasks, search, filterType, filterStatus, filterPriority, filterAssignee]
  );
  const activeFilterChips = [
    filterType !== "all" && {
      key: "type",
      label: `Type: ${filterType}`,
      clear: () => setFilterType("all")
    },
    filterStatus !== "all" && {
      key: "status",
      label: `Status: ${filterStatus === "InProgress" ? "In Progress" : filterStatus}`,
      clear: () => setFilterStatus("all")
    },
    filterPriority !== "all" && {
      key: "priority",
      label: `Priority: ${filterPriority}`,
      clear: () => setFilterPriority("all")
    },
    filterAssignee !== "all" && {
      key: "assignee",
      label: `Assigned: ${filterAssignee}`,
      clear: () => setFilterAssignee("all")
    }
  ].filter(Boolean);
  const handleSelect = reactExports.useCallback((id) => {
    setSelectedIds((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }, []);
  const filteredRef = reactExports.useRef(filtered);
  filteredRef.current = filtered;
  const handleSelectAll = reactExports.useCallback(() => {
    const currentFiltered = filteredRef.current;
    setSelectedIds(
      (prev) => prev.size === currentFiltered.length ? /* @__PURE__ */ new Set() : new Set(currentFiltered.map((t) => t.id))
    );
  }, []);
  function bulkComplete() {
    for (const id of selectedIds) updateTask(id, { status: "Completed" });
    setSelectedIds(/* @__PURE__ */ new Set());
  }
  function bulkDelete() {
    for (const id of selectedIds) deleteTask(id);
    setSelectedIds(/* @__PURE__ */ new Set());
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 space-y-5 min-h-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.25 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground leading-tight", children: "Tasks & Follow-ups" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
                tasks.length,
                " total ·",
                " ",
                tasks.filter((t) => t.status === "Completed").length,
                " completed"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "h-9 gap-1.5",
                  onClick: () => setShowFilters((v) => !v),
                  "data-ocid": "tasks.filter_toggle_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 14 }),
                    " Filters",
                    (activeFilterChips.length > 0 || search) && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "h-4 w-4 p-0 text-[9px] flex items-center justify-center ml-0.5", children: activeFilterChips.length + (search ? 1 : 0) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "h-9 gap-1.5",
                  onClick: () => setAddOpen(true),
                  "data-ocid": "tasks.add_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                    " Add Task"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
                  overdueTasks.length > 0 ? "bg-destructive/10 text-destructive border-destructive/20" : "bg-muted text-muted-foreground border-border"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 11 }),
                  " ",
                  overdueTasks.length,
                  " overdue"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
                  todayTasks.length > 0 ? "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800" : "bg-muted text-muted-foreground border-border"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
                  " ",
                  todayTasks.length,
                  " due today"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { size: 11 }),
              " ",
              completedToday.length,
              " completed today"
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-2xl border border-border p-4 space-y-3",
            "data-ocid": "tasks.filter_bar",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[200px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Search,
                    {
                      size: 13,
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: search,
                      onChange: (e) => setSearch(e.target.value),
                      placeholder: "Search tasks…",
                      className: "pl-8 h-9 text-sm",
                      "data-ocid": "tasks.search_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterType, onValueChange: setFilterType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-9 w-[130px] text-sm",
                      "data-ocid": "tasks.type_filter",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Type" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Types" }),
                    TASK_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t))
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterStatus, onValueChange: setFilterStatus, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-9 w-[140px] text-sm",
                      "data-ocid": "tasks.status_filter",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Status" }),
                    TASK_STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s === "InProgress" ? "In Progress" : s }, s))
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: filterPriority,
                    onValueChange: setFilterPriority,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          className: "h-9 w-[130px] text-sm",
                          "data-ocid": "tasks.priority_filter",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Priority" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Priority" }),
                        PRIORITIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p))
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: filterAssignee,
                    onValueChange: setFilterAssignee,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          className: "h-9 w-[150px] text-sm",
                          "data-ocid": "tasks.assignee_filter",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assignee" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Assignees" }),
                        ASSIGNEES.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: a, children: a }, a))
                      ] })
                    ]
                  }
                )
              ] }),
              activeFilterChips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
                activeFilterChips.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: f.clear,
                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors",
                    "data-ocid": `tasks.filter_chip_${f.key}`,
                    children: [
                      f.label,
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
                    ]
                  },
                  f.key
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setSearch("");
                      setFilterType("all");
                      setFilterStatus("all");
                      setFilterPriority("all");
                      setFilterAssignee("all");
                    },
                    className: "text-xs text-muted-foreground hover:text-foreground transition-colors",
                    "data-ocid": "tasks.clear_all_filters",
                    children: "Clear all"
                  }
                )
              ] })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedIds.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 8 },
        transition: { duration: 0.18 },
        className: "flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-4 py-2.5",
        "data-ocid": "tasks.bulk_actions_bar",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-foreground", children: [
            selectedIds.size,
            " selected"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 gap-1 text-xs",
              onClick: bulkComplete,
              "data-ocid": "tasks.bulk_complete_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { size: 12 }),
                " Complete"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 gap-1 text-xs",
              onClick: () => setSelectedIds(/* @__PURE__ */ new Set()),
              "data-ocid": "tasks.bulk_deselect_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }),
                " Deselect"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "destructive",
              className: "h-7 gap-1 text-xs",
              onClick: bulkDelete,
              "data-ocid": "tasks.bulk_delete_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }),
                " Delete"
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex items-center gap-1 bg-muted/60 rounded-xl p-1",
          "data-ocid": "tasks.view_toggle",
          children: VIEW_TABS.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setView(v.mode),
              className: cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth",
                view === v.mode ? "bg-card text-foreground shadow-subtle" : "text-muted-foreground hover:text-foreground"
              ),
              "data-ocid": v.ocid,
              children: [
                v.icon,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block", children: v.label })
              ]
            },
            v.mode
          ))
        }
      ),
      view === "list" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: selectedIds.size > 0 && selectedIds.size === filtered.length,
            onCheckedChange: handleSelectAll,
            "data-ocid": "tasks.select_all_checkbox"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "Select all · ",
          filtered.length,
          " tasks"
        ] })
      ] }),
      view !== "list" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
        filtered.length,
        " tasks"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.18 },
        children: [
          view === "list" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListView,
            {
              tasks: filtered,
              selectedIds,
              onSelect: handleSelect,
              onToggle: toggleTaskComplete,
              onDelete: deleteTask,
              onOpenDetail: setDetailTask
            }
          ),
          view === "kanban" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            KanbanView,
            {
              tasks: filtered,
              onDrop: (id, status) => updateTask(id, { status }),
              onOpenDetail: setDetailTask,
              onDelete: deleteTask
            }
          ),
          view === "calendar" && /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarView, { tasks: filtered, onOpenDetail: setDetailTask }),
          view === "agenda" && /* @__PURE__ */ jsxRuntimeExports.jsx(AgendaView, { tasks: filtered, onOpenDetail: setDetailTask })
        ]
      },
      view
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddTaskModal,
      {
        open: addOpen,
        onClose: () => setAddOpen(false),
        onAdd: addTask
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TaskDrawer,
      {
        task: detailTask,
        onClose: () => setDetailTask(null),
        onUpdate: updateTask
      }
    )
  ] });
}
export {
  TasksPage as default
};
