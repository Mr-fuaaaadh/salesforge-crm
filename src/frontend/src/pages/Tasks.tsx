import { PriorityBadge } from "@/components/shared/PriorityBadge";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useCrmStore } from "@/store/crm-store";
import type { Priority, Task, TaskStatus, TaskType } from "@/types";
import {
  AlertCircle,
  AlignLeft,
  ArrowRight,
  Bell,
  Calendar,
  CalendarDays,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Columns,
  FileText,
  Filter,
  List,
  Mail,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  Trash2,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// ── Type icon/color helpers ─────────────────────────────────────────────────

const typeIconMap: Record<TaskType, React.ReactNode> = {
  Call: <Phone size={12} />,
  Email: <Mail size={12} />,
  "Follow-up": <ArrowRight size={12} />,
  Meeting: <Users size={12} />,
  Proposal: <FileText size={12} />,
  Reminder: <Bell size={12} />,
};

const typeColorMap: Record<TaskType, string> = {
  Call: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Email: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Follow-up":
    "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  Meeting:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  Proposal:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Reminder: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

function TypeChip({ type }: { type: TaskType }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap",
        typeColorMap[type],
      )}
    >
      {typeIconMap[type]}
      {type}
    </span>
  );
}

// ── Date helpers ────────────────────────────────────────────────────────────

const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

function parseDate(d: string) {
  const dt = new Date(d);
  dt.setHours(0, 0, 0, 0);
  return dt;
}

function formatDueDate(d: string) {
  if (!d) return "—";
  const dt = parseDate(d);
  const diff = Math.round((dt.getTime() - TODAY.getTime()) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff === -1) return "Yesterday";
  if (diff < 0) return `${Math.abs(diff)}d overdue`;
  if (diff <= 6) return `In ${diff}d`;
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function dueDateClass(task: Task) {
  if (task.status === "Completed") return "text-muted-foreground";
  if (!task.dueDate) return "text-muted-foreground";
  const dt = parseDate(task.dueDate);
  if (dt < TODAY) return "text-destructive font-medium";
  if (dt.getTime() === TODAY.getTime()) return "text-warning font-medium";
  return "text-muted-foreground";
}

function groupTasks(tasks: Task[]) {
  const overdue = tasks.filter(
    (t) =>
      t.status === "Overdue" ||
      (t.status !== "Completed" && t.dueDate && parseDate(t.dueDate) < TODAY),
  );
  const today = tasks.filter(
    (t) =>
      t.status !== "Completed" &&
      t.dueDate &&
      parseDate(t.dueDate).getTime() === TODAY.getTime() &&
      !overdue.includes(t),
  );
  const weekEnd = new Date(TODAY);
  weekEnd.setDate(TODAY.getDate() + 7);
  const thisWeek = tasks.filter(
    (t) =>
      t.status !== "Completed" &&
      t.dueDate &&
      parseDate(t.dueDate) > TODAY &&
      parseDate(t.dueDate) <= weekEnd &&
      !overdue.includes(t) &&
      !today.includes(t),
  );
  const later = tasks.filter(
    (t) =>
      t.status !== "Completed" &&
      (!t.dueDate || parseDate(t.dueDate) > weekEnd) &&
      !overdue.includes(t) &&
      !today.includes(t) &&
      !thisWeek.includes(t),
  );
  const completed = tasks.filter((t) => t.status === "Completed");
  return [
    { label: "Overdue", tasks: overdue, color: "text-destructive" },
    { label: "Due Today", tasks: today, color: "text-warning" },
    { label: "This Week", tasks: thisWeek, color: "text-foreground" },
    { label: "Later", tasks: later, color: "text-muted-foreground" },
    { label: "Completed", tasks: completed, color: "text-success" },
  ].filter((g) => g.tasks.length > 0);
}

// ── Constants ───────────────────────────────────────────────────────────────

const TASK_TYPES: TaskType[] = [
  "Call",
  "Email",
  "Follow-up",
  "Meeting",
  "Proposal",
  "Reminder",
];
const TASK_STATUSES: TaskStatus[] = [
  "Pending",
  "InProgress",
  "Completed",
  "Overdue",
];
const PRIORITIES: Priority[] = ["Low", "Medium", "High", "Urgent"];
const ASSIGNEES = [
  "Alex Rivera",
  "Maria Chen",
  "David Park",
  "Sophia Lee",
  "Jordan Mills",
  "Aisha Patel",
];

// ── Add Task Modal ──────────────────────────────────────────────────────────

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (task: Task) => void;
}

function AddTaskModal({ open, onClose, onAdd }: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<TaskType>("Follow-up");
  const [status, setStatus] = useState<TaskStatus>("Pending");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("Alex Rivera");
  const [relatedTo, setRelatedTo] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
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
      notes,
    });
    setTitle("");
    setDueDate("");
    setRelatedTo("");
    setNotes("");
    setErrors({});
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[520px]" data-ocid="add_task.dialog">
        <DialogHeader>
          <DialogTitle className="font-display font-semibold text-lg">
            Add New Task
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-1.5">
            <Label htmlFor="task-title">
              Title <span className="text-destructive">*</span>
            </Label>
            <Input
              id="task-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title…"
              data-ocid="add_task.input"
            />
            {errors.title && (
              <p
                className="text-xs text-destructive"
                data-ocid="add_task.field_error"
              >
                {errors.title}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label>Type</Label>
              <Select
                value={type}
                onValueChange={(v) => setType(v as TaskType)}
              >
                <SelectTrigger data-ocid="add_task.type_select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TASK_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      <span className="flex items-center gap-2">
                        {typeIconMap[t]}
                        {t}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label>Priority</Label>
              <Select
                value={priority}
                onValueChange={(v) => setPriority(v as Priority)}
              >
                <SelectTrigger data-ocid="add_task.priority_select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PRIORITIES.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label>Status</Label>
              <Select
                value={status}
                onValueChange={(v) => setStatus(v as TaskStatus)}
              >
                <SelectTrigger data-ocid="add_task.status_select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TASK_STATUSES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s === "InProgress" ? "In Progress" : s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label>
                Due Date <span className="text-destructive">*</span>
              </Label>
              <Input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                data-ocid="add_task.due_date_input"
              />
              {errors.dueDate && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="add_task.date_field_error"
                >
                  {errors.dueDate}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label>Assigned To</Label>
              <Select value={assignedTo} onValueChange={setAssignedTo}>
                <SelectTrigger data-ocid="add_task.assignee_select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ASSIGNEES.map((a) => (
                    <SelectItem key={a} value={a}>
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label>Related To</Label>
              <Input
                value={relatedTo}
                onChange={(e) => setRelatedTo(e.target.value)}
                placeholder="Lead, deal, or customer"
                data-ocid="add_task.related_input"
              />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label>Notes</Label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Optional notes…"
              rows={3}
              data-ocid="add_task.notes_textarea"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            data-ocid="add_task.cancel_button"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} data-ocid="add_task.submit_button">
            Add Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Task Detail Drawer ──────────────────────────────────────────────────────

interface SubTaskItem {
  id: string;
  title: string;
  completed: boolean;
}
interface CommentItem {
  id: string;
  text: string;
  author: string;
  time: string;
}

interface TaskDrawerProps {
  task: Task | null;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<Task>) => void;
}

function TaskDrawer({ task, onClose, onUpdate }: TaskDrawerProps) {
  const [editTitle, setEditTitle] = useState(task?.title ?? "");
  const [editNotes, setEditNotes] = useState(task?.notes ?? "");
  const [subtasks, setSubtasks] = useState<SubTaskItem[]>([
    { id: "st1", title: "Review related documents", completed: false },
    { id: "st2", title: "Prepare talking points", completed: true },
    { id: "st3", title: "Send follow-up confirmation", completed: false },
  ]);
  const [newSubtask, setNewSubtask] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: "c1",
      text: "Reached out — they're available Thursday.",
      author: "Alex Rivera",
      time: "2h ago",
    },
    {
      id: "c2",
      text: "Budget approval pending from their CFO.",
      author: "Maria Chen",
      time: "Yesterday",
    },
  ]);

  // Sync state when task changes
  useEffect(() => {
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

  function toggleSub(id: string) {
    setSubtasks((p) =>
      p.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s)),
    );
  }

  function addSubtask() {
    if (!newSubtask.trim()) return;
    setSubtasks((p) => [
      ...p,
      { id: `st${Date.now()}`, title: newSubtask.trim(), completed: false },
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
        time: "Just now",
      },
      ...p,
    ]);
    setComment("");
  }

  const activityLog = [
    { id: "al1", text: "Task created", time: "Apr 20, 9:00 AM" },
    {
      id: "al2",
      text: `Priority set to ${task.priority}`,
      time: "Apr 21, 2:30 PM",
    },
    {
      id: "al3",
      text: `Assigned to ${task.assignedTo}`,
      time: "Apr 21, 3:00 PM",
    },
  ];

  return (
    <Sheet open={!!task} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[520px] overflow-y-auto p-0"
        data-ocid="task_detail.sheet"
      >
        <div className="sticky top-0 bg-card border-b px-6 py-4 z-10">
          <SheetHeader>
            <SheetTitle className="font-display text-base leading-snug text-foreground pr-4">
              {task.title}
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <TypeChip type={task.type} />
            <StatusBadge status={task.status} />
            <PriorityBadge priority={task.priority} />
          </div>
        </div>

        <div className="px-6 py-5 space-y-6">
          <div className="space-y-3">
            <div>
              <Label className="text-xs text-muted-foreground mb-1 block">
                Title
              </Label>
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="text-sm"
                data-ocid="task_detail.title_input"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs text-muted-foreground mb-1 block">
                  Assigned To
                </Label>
                <div className="flex items-center gap-2 p-2 bg-muted/40 rounded-lg text-sm">
                  <UserAvatar name={task.assignedTo} size="xs" />
                  <span className="truncate text-foreground">
                    {task.assignedTo}
                  </span>
                </div>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground mb-1 block">
                  Due Date
                </Label>
                <div className="flex items-center gap-2 p-2 bg-muted/40 rounded-lg text-sm">
                  <Calendar
                    size={12}
                    className="text-muted-foreground shrink-0"
                  />
                  <span className={cn("truncate", dueDateClass(task))}>
                    {formatDueDate(task.dueDate)}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground mb-1 block">
                Related To
              </Label>
              <div className="p-2 bg-muted/40 rounded-lg text-sm text-foreground">
                {task.relatedTo || "—"}
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <Label className="text-xs text-muted-foreground mb-1.5 block">
              Notes
            </Label>
            <Textarea
              value={editNotes}
              onChange={(e) => setEditNotes(e.target.value)}
              rows={3}
              placeholder="Add notes…"
              className="text-sm resize-none"
              data-ocid="task_detail.notes_textarea"
            />
          </div>
          <Button
            size="sm"
            onClick={handleSave}
            className="w-full"
            data-ocid="task_detail.save_button"
          >
            Save Changes
          </Button>

          <Separator />

          <div>
            <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
              Subtasks ({subtasks.filter((s) => s.completed).length}/
              {subtasks.length})
            </p>
            <div className="space-y-1.5">
              {subtasks.map((s) => (
                <div key={s.id} className="flex items-center gap-2">
                  <Checkbox
                    checked={s.completed}
                    onCheckedChange={() => toggleSub(s.id)}
                    className="shrink-0"
                  />
                  <span
                    className={cn(
                      "text-sm flex-1",
                      s.completed && "line-through text-muted-foreground",
                    )}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <Input
                value={newSubtask}
                onChange={(e) => setNewSubtask(e.target.value)}
                placeholder="Add subtask…"
                className="text-sm h-8"
                onKeyDown={(e) => e.key === "Enter" && addSubtask()}
                data-ocid="task_detail.subtask_input"
              />
              <Button
                size="sm"
                variant="outline"
                onClick={addSubtask}
                className="h-8 shrink-0"
              >
                Add
              </Button>
            </div>
          </div>

          <Separator />

          <div>
            <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
              Comments
            </p>
            <div className="space-y-3 mb-3">
              {comments.map((c) => (
                <div key={c.id} className="flex gap-2.5">
                  <UserAvatar
                    name={c.author}
                    size="xs"
                    className="mt-0.5 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-medium text-foreground">
                        {c.author}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {c.time}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/80 leading-snug mt-0.5 break-words">
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment…"
                className="text-sm h-8"
                onKeyDown={(e) => e.key === "Enter" && addComment()}
                data-ocid="task_detail.comment_input"
              />
              <Button
                size="sm"
                onClick={addComment}
                className="h-8 shrink-0"
                data-ocid="task_detail.comment_submit_button"
              >
                Post
              </Button>
            </div>
          </div>

          <Separator />

          <div>
            <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
              Activity
            </p>
            <div className="space-y-2">
              {activityLog.map((a) => (
                <div key={a.id} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                  <span className="text-foreground/80 flex-1">{a.text}</span>
                  <span className="text-[10px] text-muted-foreground shrink-0">
                    {a.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// ── List View ───────────────────────────────────────────────────────────────

interface ListViewProps {
  tasks: Task[];
  selectedIds: Set<string>;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onOpenDetail: (task: Task) => void;
}

function ListView({
  tasks,
  selectedIds,
  onSelect,
  onToggle,
  onDelete,
  onOpenDetail,
}: ListViewProps) {
  const groups = groupTasks(tasks);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  function toggleGroup(label: string) {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  if (tasks.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-20 text-muted-foreground"
        data-ocid="tasks.empty_state"
      >
        <CheckCircle2 size={40} className="mb-3 opacity-20" />
        <p className="font-medium text-foreground">
          No tasks match your filters
        </p>
        <p className="text-sm mt-1">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-3" data-ocid="tasks.list">
      {groups.map((group) => (
        <div
          key={group.label}
          className="bg-card rounded-2xl border border-border overflow-hidden shadow-subtle"
        >
          <button
            type="button"
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/40 transition-colors"
            onClick={() => toggleGroup(group.label)}
            onKeyDown={(e) => e.key === "Enter" && toggleGroup(group.label)}
            data-ocid={`tasks.group_${group.label.toLowerCase().replace(/\s+/g, "_")}`}
          >
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "text-sm font-semibold font-display",
                  group.color,
                )}
              >
                {group.label}
              </span>
              <Badge variant="secondary" className="text-[10px] h-4 px-1.5">
                {group.tasks.length}
              </Badge>
            </div>
            {collapsed.has(group.label) ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronUp size={14} />
            )}
          </button>
          <AnimatePresence initial={false}>
            {!collapsed.has(group.label) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="divide-y divide-border">
                  {group.tasks.map((task, i) => (
                    <TaskRow
                      key={task.id}
                      task={task}
                      index={i + 1}
                      selected={selectedIds.has(task.id)}
                      onSelect={() => onSelect(task.id)}
                      onToggle={() => onToggle(task.id)}
                      onDelete={() => onDelete(task.id)}
                      onOpenDetail={() => onOpenDetail(task)}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

interface TaskRowProps {
  task: Task;
  index: number;
  selected: boolean;
  onSelect: () => void;
  onToggle: () => void;
  onDelete: () => void;
  onOpenDetail: () => void;
}

function TaskRow({
  task,
  index,
  selected,
  onSelect,
  onToggle,
  onDelete,
  onOpenDetail,
}: TaskRowProps) {
  const isCompleted = task.status === "Completed";
  const isOverdue =
    task.status === "Overdue" ||
    (task.status !== "Completed" &&
      task.dueDate &&
      parseDate(task.dueDate) < TODAY);
  return (
    <motion.div
      layout
      className={cn(
        "flex items-center gap-3 px-4 py-3 group hover:bg-muted/30 transition-colors cursor-pointer",
        selected && "bg-primary/5",
        isCompleted && "opacity-60",
      )}
      onClick={onOpenDetail}
      data-ocid={`tasks.item.${index}`}
    >
      {/* Row checkbox */}
      <div
        role="presentation"
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.stopPropagation();
            onSelect();
          }
        }}
      >
        <Checkbox
          checked={selected}
          onCheckedChange={onSelect}
          className="shrink-0"
          data-ocid={`tasks.checkbox.${index}`}
        />
      </div>
      {/* Complete toggle */}
      <button
        type="button"
        className={cn(
          "shrink-0 rounded-full transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isCompleted
            ? "text-success"
            : isOverdue
              ? "text-destructive hover:text-success"
              : "text-muted-foreground hover:text-success",
        )}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-label={isCompleted ? "Mark incomplete" : "Mark complete"}
        data-ocid={`tasks.complete_toggle.${index}`}
      >
        {isCompleted ? (
          <CheckCircle2 size={16} fill="currentColor" />
        ) : (
          <CheckCircle2 size={16} />
        )}
      </button>
      {/* Type chip — hidden on xs */}
      <div className="hidden sm:block shrink-0">
        <TypeChip type={task.type} />
      </div>
      {/* Title */}
      <span
        className={cn(
          "flex-1 min-w-0 text-sm text-foreground truncate",
          isCompleted && "line-through text-muted-foreground",
        )}
      >
        {task.title}
      </span>
      {/* Meta */}
      <div className="hidden md:flex items-center gap-3 shrink-0">
        <PriorityBadge priority={task.priority} showIcon={false} />
        <span className={cn("text-xs whitespace-nowrap", dueDateClass(task))}>
          {task.dueDate ? formatDueDate(task.dueDate) : "—"}
        </span>
        <UserAvatar name={task.assignedTo} size="xs" />
        {task.relatedTo && (
          <span className="text-xs text-muted-foreground max-w-[80px] truncate hidden lg:block">
            {task.relatedTo}
          </span>
        )}
      </div>
      {/* Row actions */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 shrink-0"
            onClick={(e) => e.stopPropagation()}
            data-ocid={`tasks.row_actions.${index}`}
          >
            <MoreHorizontal size={14} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail();
            }}
          >
            View detail
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          >
            {isCompleted ? "Mark pending" : "Mark complete"}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            data-ocid={`tasks.delete_button.${index}`}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}

// ── Kanban View ─────────────────────────────────────────────────────────────

const KANBAN_COLS: {
  status: TaskStatus;
  label: string;
  colorBorder: string;
  icon: React.ReactNode;
}[] = [
  {
    status: "Pending",
    label: "Pending",
    colorBorder: "border-amber-400/40",
    icon: <Clock size={13} className="text-amber-500" />,
  },
  {
    status: "InProgress",
    label: "In Progress",
    colorBorder: "border-blue-400/40",
    icon: <AlertCircle size={13} className="text-blue-500" />,
  },
  {
    status: "Completed",
    label: "Completed",
    colorBorder: "border-emerald-400/40",
    icon: <CheckCircle2 size={13} className="text-emerald-500" />,
  },
  {
    status: "Overdue",
    label: "Overdue",
    colorBorder: "border-red-400/40",
    icon: <AlertCircle size={13} className="text-red-500" />,
  },
];

interface KanbanViewProps {
  tasks: Task[];
  onDrop: (id: string, status: TaskStatus) => void;
  onOpenDetail: (task: Task) => void;
  onDelete: (id: string) => void;
}

function KanbanView({
  tasks,
  onDrop,
  onOpenDetail,
  onDelete,
}: KanbanViewProps) {
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [overCol, setOverCol] = useState<TaskStatus | null>(null);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
      data-ocid="tasks.kanban"
    >
      {KANBAN_COLS.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.status);
        return (
          <div
            key={col.status}
            className={cn(
              "flex flex-col bg-muted/30 rounded-2xl border-2 transition-colors min-h-[200px]",
              overCol === col.status
                ? "border-primary/40 bg-primary/5"
                : col.colorBorder,
            )}
            onDragOver={(e) => {
              e.preventDefault();
              setOverCol(col.status);
            }}
            onDragLeave={() => setOverCol(null)}
            onDrop={(e) => {
              e.preventDefault();
              if (draggingId) {
                onDrop(draggingId, col.status);
                setDraggingId(null);
              }
              setOverCol(null);
            }}
            data-ocid={`tasks.kanban_col_${col.status.toLowerCase()}`}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60">
              {col.icon}
              <span className="text-sm font-semibold font-display text-foreground">
                {col.label}
              </span>
              <Badge
                variant="secondary"
                className="ml-auto text-[10px] h-4 px-1.5"
              >
                {colTasks.length}
              </Badge>
            </div>
            <div className="flex-1 p-3 space-y-2 overflow-y-auto">
              {colTasks.map((task, i) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => setDraggingId(task.id)}
                  onDragEnd={() => setDraggingId(null)}
                  className={cn(
                    "transition-smooth",
                    draggingId === task.id && "opacity-40",
                  )}
                  data-ocid={`tasks.kanban_card.${i + 1}`}
                >
                  <KanbanCard
                    task={task}
                    onOpenDetail={() => onOpenDetail(task)}
                    onDelete={() => onDelete(task.id)}
                  />
                </div>
              ))}
              {colTasks.length === 0 && (
                <div className="flex items-center justify-center h-16 text-muted-foreground text-xs">
                  Drop tasks here
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function KanbanCard({
  task,
  onOpenDetail,
  onDelete,
}: { task: Task; onOpenDetail: () => void; onDelete: () => void }) {
  return (
    <motion.div
      layout
      onClick={onOpenDetail}
      className="bg-card rounded-xl border border-border p-3 cursor-pointer hover:shadow-elevation hover:border-primary/20 transition-smooth group"
    >
      <div className="flex items-start justify-between gap-1 mb-1.5">
        <TypeChip type={task.type} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal size={12} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetail();
              }}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="text-sm text-foreground leading-snug line-clamp-2 mb-2">
        {task.title}
      </p>
      <div className="flex items-center justify-between gap-2">
        <PriorityBadge priority={task.priority} showIcon={false} />
        <div className="flex items-center gap-1.5">
          {task.dueDate && (
            <span className={cn("text-[10px]", dueDateClass(task))}>
              {formatDueDate(task.dueDate)}
            </span>
          )}
          <UserAvatar name={task.assignedTo} size="xs" />
        </div>
      </div>
    </motion.div>
  );
}

// ── Calendar View ────────────────────────────────────────────────────────────

const PRIORITY_DOT: Record<Priority, string> = {
  Low: "bg-muted-foreground",
  Medium: "bg-amber-500",
  High: "bg-orange-500",
  Urgent: "bg-destructive",
};

function CalendarView({
  tasks,
  onOpenDetail,
}: { tasks: Task[]; onOpenDetail: (task: Task) => void }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const todayStr = TODAY.toISOString().split("T")[0];

  const tasksByDate: Record<string, Task[]> = {};
  for (const t of tasks) {
    if (!t.dueDate) continue;
    if (!tasksByDate[t.dueDate]) tasksByDate[t.dueDate] = [];
    tasksByDate[t.dueDate].push(t);
  }

  const selectedTasks = selectedDay ? (tasksByDate[selectedDay] ?? []) : [];

  return (
    <div className="space-y-4" data-ocid="tasks.calendar">
      <div className="bg-card rounded-2xl border border-border shadow-subtle overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <span className="font-display font-semibold text-foreground">
            {monthName}
          </span>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0"
              onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
              data-ocid="tasks.calendar_prev"
            >
              ‹
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0"
              onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
              data-ocid="tasks.calendar_next"
            >
              ›
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 border-b border-border">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div
              key={d}
              className="text-center text-[11px] text-muted-foreground font-medium py-2"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {Array.from({ length: firstDay }, (_, i) => {
            const emptyCellKey = `${year}-${month}-empty-${i}`;
            return (
              <div
                key={emptyCellKey}
                className="min-h-[60px] border-r border-b border-border/40 last:border-r-0"
              />
            );
          })}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const dayTasks = tasksByDate[dateStr] ?? [];
            const isToday = dateStr === todayStr;
            const isSelected = dateStr === selectedDay;
            return (
              <button
                key={dateStr}
                type="button"
                className={cn(
                  "min-h-[60px] border-r border-b border-border/40 p-1.5 text-left transition-colors hover:bg-muted/40",
                  (firstDay + i) % 7 === 6 && "border-r-0",
                  isSelected && "bg-primary/10",
                )}
                onClick={() => setSelectedDay(isSelected ? null : dateStr)}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setSelectedDay(isSelected ? null : dateStr)
                }
                data-ocid={`tasks.calendar_day.${day}`}
              >
                <div
                  className={cn(
                    "text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full mb-1",
                    isToday
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground",
                  )}
                >
                  {day}
                </div>
                {dayTasks.length > 0 && (
                  <div className="flex flex-wrap gap-0.5">
                    {dayTasks.slice(0, 3).map((t) => (
                      <div
                        key={t.id}
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          PRIORITY_DOT[t.priority],
                        )}
                      />
                    ))}
                    {dayTasks.length > 3 && (
                      <span className="text-[9px] text-muted-foreground">
                        +{dayTasks.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {selectedDay && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl border border-border shadow-subtle p-4"
        >
          <h3 className="font-display font-semibold text-foreground mb-3 text-sm">
            {new Date(`${selectedDay}T00:00:00`).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </h3>
          {selectedTasks.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No tasks due on this day.
            </p>
          ) : (
            <div className="space-y-2">
              {selectedTasks.map((task) => (
                <button
                  key={task.id}
                  type="button"
                  className="w-full flex items-center gap-3 p-2.5 bg-muted/30 rounded-xl cursor-pointer hover:bg-muted/50 transition-colors text-left"
                  onClick={() => onOpenDetail(task)}
                >
                  <TypeChip type={task.type} />
                  <span className="flex-1 text-sm text-foreground truncate">
                    {task.title}
                  </span>
                  <PriorityBadge priority={task.priority} showIcon={false} />
                  <UserAvatar name={task.assignedTo} size="xs" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

// ── Agenda View ──────────────────────────────────────────────────────────────

function AgendaView({
  tasks,
  onOpenDetail,
}: { tasks: Task[]; onOpenDetail: (task: Task) => void }) {
  const withDate = tasks.filter((t) => !!t.dueDate);
  const sorted = [...withDate].sort((a, b) =>
    a.dueDate.localeCompare(b.dueDate),
  );

  const byDate: Record<string, Task[]> = {};
  for (const t of sorted) {
    if (!byDate[t.dueDate]) byDate[t.dueDate] = [];
    byDate[t.dueDate].push(t);
  }

  const dates = Object.keys(byDate).sort();

  if (dates.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-20 text-muted-foreground"
        data-ocid="tasks.agenda_empty_state"
      >
        <CalendarDays size={40} className="mb-3 opacity-20" />
        <p className="font-medium text-foreground">No upcoming tasks</p>
      </div>
    );
  }

  return (
    <div className="space-y-5" data-ocid="tasks.agenda">
      {dates.map((date) => {
        const dt = new Date(`${date}T00:00:00`);
        const isToday = date === TODAY.toISOString().split("T")[0];
        const isPast = parseDate(date) < TODAY;
        return (
          <div key={date}>
            <div className="flex items-center gap-3 mb-2 px-1">
              <div
                className={cn(
                  "text-center rounded-xl px-2.5 py-1 shrink-0",
                  isToday
                    ? "bg-primary text-primary-foreground"
                    : isPast
                      ? "bg-destructive/10 text-destructive"
                      : "bg-muted text-muted-foreground",
                )}
              >
                <p className="text-[9px] uppercase font-medium tracking-wide">
                  {dt.toLocaleDateString("en-US", { weekday: "short" })}
                </p>
                <p className="text-base font-bold leading-none">
                  {dt.getDate()}
                </p>
              </div>
              <span className="text-sm text-muted-foreground">
                {dt.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                {isToday && (
                  <span className="ml-2 text-primary font-medium text-xs">
                    Today
                  </span>
                )}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="ml-16 space-y-2">
              {byDate[date].map((task, i) => (
                <motion.button
                  key={task.id}
                  type="button"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => onOpenDetail(task)}
                  className="w-full flex items-center gap-3 p-3 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-subtle cursor-pointer transition-smooth text-left"
                  data-ocid={`tasks.agenda_item.${i + 1}`}
                >
                  <TypeChip type={task.type} />
                  <span className="flex-1 min-w-0 text-sm text-foreground truncate">
                    {task.title}
                  </span>
                  <PriorityBadge priority={task.priority} showIcon={false} />
                  <StatusBadge status={task.status} />
                  <UserAvatar name={task.assignedTo} size="xs" />
                </motion.button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

type ViewMode = "list" | "kanban" | "calendar" | "agenda";

const VIEW_TABS: {
  mode: ViewMode;
  icon: React.ReactNode;
  label: string;
  ocid: string;
}[] = [
  {
    mode: "list",
    icon: <List size={14} />,
    label: "List",
    ocid: "tasks.list_view_tab",
  },
  {
    mode: "kanban",
    icon: <Columns size={14} />,
    label: "Kanban",
    ocid: "tasks.kanban_view_tab",
  },
  {
    mode: "calendar",
    icon: <CalendarDays size={14} />,
    label: "Calendar",
    ocid: "tasks.calendar_view_tab",
  },
  {
    mode: "agenda",
    icon: <AlignLeft size={14} />,
    label: "Agenda",
    ocid: "tasks.agenda_view_tab",
  },
];

function TasksPage() {
  const { tasks, addTask, updateTask, toggleTaskComplete, deleteTask } =
    useCrmStore();

  const [view, setView] = useState<ViewMode>("list");
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterAssignee, setFilterAssignee] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [detailTask, setDetailTask] = useState<Task | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const overdueTasks = tasks.filter(
    (t) =>
      t.status === "Overdue" ||
      (t.status !== "Completed" && t.dueDate && parseDate(t.dueDate) < TODAY),
  );
  const todayTasks = tasks.filter(
    (t) =>
      t.status !== "Completed" &&
      t.dueDate &&
      parseDate(t.dueDate).getTime() === TODAY.getTime(),
  );
  const completedToday = tasks.filter(
    (t) =>
      t.status === "Completed" &&
      t.dueDate &&
      parseDate(t.dueDate).getTime() === TODAY.getTime(),
  );

  const filtered = useMemo(
    () =>
      tasks.filter((t) => {
        if (
          search &&
          !t.title.toLowerCase().includes(search.toLowerCase()) &&
          !t.relatedTo.toLowerCase().includes(search.toLowerCase())
        )
          return false;
        if (filterType !== "all" && t.type !== filterType) return false;
        if (filterStatus !== "all" && t.status !== filterStatus) return false;
        if (filterPriority !== "all" && t.priority !== filterPriority)
          return false;
        if (filterAssignee !== "all" && t.assignedTo !== filterAssignee)
          return false;
        return true;
      }),
    [tasks, search, filterType, filterStatus, filterPriority, filterAssignee],
  );

  const activeFilterChips = [
    filterType !== "all" && {
      key: "type",
      label: `Type: ${filterType}`,
      clear: () => setFilterType("all"),
    },
    filterStatus !== "all" && {
      key: "status",
      label: `Status: ${filterStatus === "InProgress" ? "In Progress" : filterStatus}`,
      clear: () => setFilterStatus("all"),
    },
    filterPriority !== "all" && {
      key: "priority",
      label: `Priority: ${filterPriority}`,
      clear: () => setFilterPriority("all"),
    },
    filterAssignee !== "all" && {
      key: "assignee",
      label: `Assigned: ${filterAssignee}`,
      clear: () => setFilterAssignee("all"),
    },
  ].filter(Boolean) as { key: string; label: string; clear: () => void }[];

  const handleSelect = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }, []);

  // Use a ref to hold the current filtered list so handleSelectAll doesn't
  // need `filtered` in its dependency array (which would cause it to be
  // recreated on every filter change, triggering cascade re-renders).
  const filteredRef = useRef(filtered);
  filteredRef.current = filtered;

  const handleSelectAll = useCallback(() => {
    const currentFiltered = filteredRef.current;
    setSelectedIds((prev) =>
      prev.size === currentFiltered.length
        ? new Set()
        : new Set(currentFiltered.map((t) => t.id)),
    );
  }, []);

  function bulkComplete() {
    for (const id of selectedIds) updateTask(id, { status: "Completed" });
    setSelectedIds(new Set());
  }

  function bulkDelete() {
    for (const id of selectedIds) deleteTask(id);
    setSelectedIds(new Set());
  }

  return (
    <div className="p-4 sm:p-6 space-y-5 min-h-full bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h1 className="font-display font-bold text-xl text-foreground leading-tight">
              Tasks &amp; Follow-ups
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              {tasks.length} total ·{" "}
              {tasks.filter((t) => t.status === "Completed").length} completed
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-1.5"
              onClick={() => setShowFilters((v) => !v)}
              data-ocid="tasks.filter_toggle_button"
            >
              <Filter size={14} /> Filters
              {(activeFilterChips.length > 0 || search) && (
                <Badge className="h-4 w-4 p-0 text-[9px] flex items-center justify-center ml-0.5">
                  {activeFilterChips.length + (search ? 1 : 0)}
                </Badge>
              )}
            </Button>
            <Button
              size="sm"
              className="h-9 gap-1.5"
              onClick={() => setAddOpen(true)}
              data-ocid="tasks.add_button"
            >
              <Plus size={14} /> Add Task
            </Button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
              overdueTasks.length > 0
                ? "bg-destructive/10 text-destructive border-destructive/20"
                : "bg-muted text-muted-foreground border-border",
            )}
          >
            <AlertCircle size={11} /> {overdueTasks.length} overdue
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
              todayTasks.length > 0
                ? "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800"
                : "bg-muted text-muted-foreground border-border",
            )}
          >
            <Clock size={11} /> {todayTasks.length} due today
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800">
            <CheckCheck size={11} /> {completedToday.length} completed today
          </span>
        </div>
      </motion.div>

      {/* Filter Bar */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div
              className="bg-card rounded-2xl border border-border p-4 space-y-3"
              data-ocid="tasks.filter_bar"
            >
              <div className="flex flex-wrap gap-3">
                <div className="relative flex-1 min-w-[200px]">
                  <Search
                    size={13}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tasks…"
                    className="pl-8 h-9 text-sm"
                    data-ocid="tasks.search_input"
                  />
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger
                    className="h-9 w-[130px] text-sm"
                    data-ocid="tasks.type_filter"
                  >
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {TASK_TYPES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger
                    className="h-9 w-[140px] text-sm"
                    data-ocid="tasks.status_filter"
                  >
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    {TASK_STATUSES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s === "InProgress" ? "In Progress" : s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={filterPriority}
                  onValueChange={setFilterPriority}
                >
                  <SelectTrigger
                    className="h-9 w-[130px] text-sm"
                    data-ocid="tasks.priority_filter"
                  >
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    {PRIORITIES.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={filterAssignee}
                  onValueChange={setFilterAssignee}
                >
                  <SelectTrigger
                    className="h-9 w-[150px] text-sm"
                    data-ocid="tasks.assignee_filter"
                  >
                    <SelectValue placeholder="Assignee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Assignees</SelectItem>
                    {ASSIGNEES.map((a) => (
                      <SelectItem key={a} value={a}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {activeFilterChips.length > 0 && (
                <div className="flex flex-wrap gap-2 items-center">
                  {activeFilterChips.map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      onClick={f.clear}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                      data-ocid={`tasks.filter_chip_${f.key}`}
                    >
                      {f.label} <X size={10} />
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setFilterType("all");
                      setFilterStatus("all");
                      setFilterPriority("all");
                      setFilterAssignee("all");
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    data-ocid="tasks.clear_all_filters"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bulk Actions */}
      <AnimatePresence>
        {selectedIds.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-4 py-2.5"
            data-ocid="tasks.bulk_actions_bar"
          >
            <span className="text-sm font-medium text-foreground">
              {selectedIds.size} selected
            </span>
            <div className="flex-1" />
            <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1 text-xs"
              onClick={bulkComplete}
              data-ocid="tasks.bulk_complete_button"
            >
              <CheckCheck size={12} /> Complete
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1 text-xs"
              onClick={() => setSelectedIds(new Set())}
              data-ocid="tasks.bulk_deselect_button"
            >
              <X size={12} /> Deselect
            </Button>
            <Button
              size="sm"
              variant="destructive"
              className="h-7 gap-1 text-xs"
              onClick={bulkDelete}
              data-ocid="tasks.bulk_delete_button"
            >
              <Trash2 size={12} /> Delete
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View Switcher */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div
          className="flex items-center gap-1 bg-muted/60 rounded-xl p-1"
          data-ocid="tasks.view_toggle"
        >
          {VIEW_TABS.map((v) => (
            <button
              key={v.mode}
              type="button"
              onClick={() => setView(v.mode)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth",
                view === v.mode
                  ? "bg-card text-foreground shadow-subtle"
                  : "text-muted-foreground hover:text-foreground",
              )}
              data-ocid={v.ocid}
            >
              {v.icon}
              <span className="hidden sm:block">{v.label}</span>
            </button>
          ))}
        </div>
        {view === "list" && (
          <div className="flex items-center gap-2">
            <Checkbox
              checked={
                selectedIds.size > 0 && selectedIds.size === filtered.length
              }
              onCheckedChange={handleSelectAll}
              data-ocid="tasks.select_all_checkbox"
            />
            <span className="text-xs text-muted-foreground">
              Select all · {filtered.length} tasks
            </span>
          </div>
        )}
        {view !== "list" && (
          <span className="text-xs text-muted-foreground">
            {filtered.length} tasks
          </span>
        )}
      </div>

      {/* View Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {view === "list" && (
            <ListView
              tasks={filtered}
              selectedIds={selectedIds}
              onSelect={handleSelect}
              onToggle={toggleTaskComplete}
              onDelete={deleteTask}
              onOpenDetail={setDetailTask}
            />
          )}
          {view === "kanban" && (
            <KanbanView
              tasks={filtered}
              onDrop={(id, status) => updateTask(id, { status })}
              onOpenDetail={setDetailTask}
              onDelete={deleteTask}
            />
          )}
          {view === "calendar" && (
            <CalendarView tasks={filtered} onOpenDetail={setDetailTask} />
          )}
          {view === "agenda" && (
            <AgendaView tasks={filtered} onOpenDetail={setDetailTask} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Modals */}
      <AddTaskModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        onAdd={addTask}
      />
      <TaskDrawer
        task={detailTask}
        onClose={() => setDetailTask(null)}
        onUpdate={updateTask}
      />
    </div>
  );
}

export default TasksPage;
