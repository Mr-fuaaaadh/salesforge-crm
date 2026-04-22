import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { mockCalendarEvents, mockTeamMembers } from "@/lib/mock-data";
import type { CalendarEvent } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getHours,
  getMinutes,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
  setHours,
  setMinutes,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import {
  Bell,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit2,
  LayoutGrid,
  List,
  MapPin,
  Phone,
  Plus,
  RefreshCw,
  Repeat,
  Trash2,
  Users,
  Video,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

type ViewMode = "month" | "week" | "day" | "agenda";

const EVENT_TYPES = [
  "Meeting",
  "Call",
  "Follow-up",
  "Reminder",
  "Appointment",
] as const;
type _EventType = (typeof EVENT_TYPES)[number];

const typeColors: Record<
  string,
  { bg: string; text: string; dot: string; border: string }
> = {
  Meeting: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
    border: "border-l-blue-500",
  },
  Call: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
    border: "border-l-emerald-500",
  },
  "Follow-up": {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
    border: "border-l-amber-500",
  },
  Reminder: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-700 dark:text-purple-300",
    dot: "bg-purple-500",
    border: "border-l-purple-500",
  },
  Appointment: {
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-700 dark:text-rose-300",
    dot: "bg-rose-500",
    border: "border-l-rose-500",
  },
};

function getEventColors(type: string) {
  return typeColors[type] ?? typeColors.Meeting;
}

function TypeIcon({ type, size = 14 }: { type: string; size?: number }) {
  const props = { size, strokeWidth: 2 };
  if (type === "Call") return <Phone {...props} />;
  if (type === "Follow-up") return <Bell {...props} />;
  if (type === "Reminder") return <Bell {...props} />;
  if (type === "Appointment") return <Building2 {...props} />;
  return <Video {...props} />;
}

// ─────────────────────────────────────────────────────────
// EVENT FORM SCHEMA
// ─────────────────────────────────────────────────────────
const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  type: z.enum(EVENT_TYPES),
  date: z.string().min(1, "Date is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  description: z.string().optional(),
  attendees: z.array(z.string()).optional(),
  customer: z.string().optional(),
  deal: z.string().optional(),
  recurring: z.enum(["None", "Daily", "Weekly", "Monthly"]),
  reminder: z.enum(["None", "15min", "30min", "1hr"]),
});
type EventFormData = z.infer<typeof eventSchema>;

// ─────────────────────────────────────────────────────────
// EVENT DETAIL CONTENT
// ─────────────────────────────────────────────────────────
function EventDetail({
  event,
  onClose,
  onDelete,
}: {
  event: CalendarEvent;
  onClose: () => void;
  onDelete: (id: string) => void;
}) {
  const colors = getEventColors(event.type);
  const start = parseISO(event.start);
  const end = parseISO(event.end);

  return (
    <div className="w-72 p-1">
      <div
        className={`rounded-xl p-4 mb-3 ${colors.bg} border-l-4 ${colors.border}`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3
              className={`font-semibold text-sm leading-tight truncate ${colors.text}`}
            >
              {event.title}
            </h3>
            <div className="flex items-center gap-1 mt-1.5 flex-wrap">
              <Badge
                variant="outline"
                className={`text-xs px-1.5 py-0 border-0 ${colors.bg} ${colors.text}`}
              >
                <TypeIcon type={event.type} size={10} />
                <span className="ml-1">{event.type}</span>
              </Badge>
              {event.recurring && (
                <Badge variant="outline" className="text-xs px-1.5 py-0">
                  <Repeat size={9} className="mr-1" />
                  Recurring
                </Badge>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm shrink-0"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="space-y-2.5 px-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock size={13} className="shrink-0" />
          <span>
            {format(start, "EEE, MMM d")} · {format(start, "h:mm a")} –{" "}
            {format(end, "h:mm a")}
          </span>
        </div>

        {event.description && (
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin size={13} className="shrink-0 mt-0.5" />
            <span className="line-clamp-2">{event.description}</span>
          </div>
        )}

        {event.attendees.length > 0 && (
          <div className="flex items-start gap-2">
            <Users size={13} className="shrink-0 mt-1 text-muted-foreground" />
            <div className="flex flex-wrap gap-1">
              {event.attendees.map((a) => (
                <UserAvatar key={a} name={a} size="xs" />
              ))}
            </div>
          </div>
        )}
      </div>

      <Separator className="my-3" />
      <div className="flex items-center justify-end gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs gap-1"
          data-ocid="calendar.event.edit_button"
        >
          <Edit2 size={11} />
          Edit
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs gap-1 text-destructive hover:text-destructive"
          onClick={() => {
            onDelete(event.id);
            onClose();
          }}
          data-ocid="calendar.event.delete_button"
        >
          <Trash2 size={11} />
          Delete
        </Button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// ADD EVENT MODAL
// ─────────────────────────────────────────────────────────
function AddEventModal({
  open,
  onClose,
  onAdd,
  defaultDate,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (event: CalendarEvent) => void;
  defaultDate: Date;
}) {
  const form = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      type: "Meeting",
      date: format(defaultDate, "yyyy-MM-dd"),
      startTime: "09:00",
      endTime: "10:00",
      description: "",
      attendees: [],
      customer: "",
      deal: "",
      recurring: "None",
      reminder: "15min",
    },
  });

  function onSubmit(data: EventFormData) {
    const newEvent: CalendarEvent = {
      id: `ce${Date.now()}`,
      title: data.title,
      type: data.type,
      start: `${data.date}T${data.startTime}:00`,
      end: `${data.date}T${data.endTime}:00`,
      description: data.description ?? "",
      attendees: data.attendees ?? [],
      recurring: data.recurring !== "None",
      customerId: data.customer || undefined,
      dealId: data.deal || undefined,
    };
    onAdd(newEvent);
    toast.success("Event created", { description: data.title });
    form.reset();
    onClose();
  }

  const teamNames = mockTeamMembers.map((m) => m.name);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-lg flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Calendar size={16} className="text-primary" />
            </div>
            Schedule Event
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-1"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Meeting with..."
                      {...field}
                      data-ocid="calendar.add_event.title_input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger data-ocid="calendar.add_event.type_select">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {EVENT_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        data-ocid="calendar.add_event.date_input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        {...field}
                        data-ocid="calendar.add_event.start_time_input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        {...field}
                        data-ocid="calendar.add_event.end_time_input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add notes or agenda..."
                      className="resize-none"
                      rows={2}
                      {...field}
                      data-ocid="calendar.add_event.description_textarea"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Label className="text-sm font-medium">Attendees</Label>
              <div className="mt-2 grid grid-cols-2 gap-1.5 max-h-28 overflow-y-auto">
                {teamNames.map((name) => {
                  const checked =
                    form.watch("attendees")?.includes(name) ?? false;
                  return (
                    <div key={name} className="flex items-center gap-2">
                      <Checkbox
                        id={`attendee-${name}`}
                        checked={checked}
                        onCheckedChange={(val) => {
                          const current = form.getValues("attendees") ?? [];
                          if (val) {
                            form.setValue("attendees", [...current, name]);
                          } else {
                            form.setValue(
                              "attendees",
                              current.filter((a) => a !== name),
                            );
                          }
                        }}
                        data-ocid="calendar.add_event.attendee_checkbox"
                      />
                      <label
                        htmlFor={`attendee-${name}`}
                        className="text-xs cursor-pointer truncate"
                      >
                        {name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="recurring"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recurring</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger data-ocid="calendar.add_event.recurring_select">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["None", "Daily", "Weekly", "Monthly"].map((r) => (
                          <SelectItem key={r} value={r}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reminder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reminder</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger data-ocid="calendar.add_event.reminder_select">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["None", "15min", "30min", "1hr"].map((r) => (
                          <SelectItem key={r} value={r}>
                            {r === "None" ? "No reminder" : `${r} before`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                data-ocid="calendar.add_event.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                data-ocid="calendar.add_event.submit_button"
              >
                Create Event
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// ─────────────────────────────────────────────────────────
// MINI CALENDAR SIDEBAR
// ─────────────────────────────────────────────────────────
function MiniCalendar({
  currentDate,
  selectedDate,
  events,
  onSelectDate,
}: {
  currentDate: Date;
  selectedDate: Date;
  events: CalendarEvent[];
  onSelectDate: (date: Date) => void;
}) {
  const [miniMonth, setMiniMonth] = useState(currentDate);

  useEffect(() => {
    setMiniMonth(currentDate);
  }, [currentDate]);

  const monthStart = startOfMonth(miniMonth);
  const monthEnd = endOfMonth(miniMonth);
  const calStart = startOfWeek(monthStart);
  const calEnd = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: calStart, end: calEnd });

  function getDayEvents(date: Date) {
    return events.filter((e) => isSameDay(parseISO(e.start), date));
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-4 shadow-subtle">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold font-display">
          {format(miniMonth, "MMM yyyy")}
        </span>
        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={() => setMiniMonth(subMonths(miniMonth, 1))}
            data-ocid="calendar.mini.prev_button"
          >
            <ChevronLeft size={12} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={() => setMiniMonth(addMonths(miniMonth, 1))}
            data-ocid="calendar.mini.next_button"
          >
            <ChevronRight size={12} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-0 mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            className="text-[10px] text-center text-muted-foreground py-0.5 font-medium"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0">
        {days.map((day) => {
          const dayEvents = getDayEvents(day);
          const isCurrentMonth = isSameMonth(day, miniMonth);
          const isTodayDate = isToday(day);
          const isSelected = isSameDay(day, selectedDate);

          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => onSelectDate(day)}
              className={`
                relative flex flex-col items-center py-1 rounded-lg text-[11px] font-medium transition-all
                ${!isCurrentMonth ? "opacity-30" : ""}
                ${isTodayDate && !isSelected ? "text-primary font-bold" : ""}
                ${isSelected ? "bg-primary text-primary-foreground" : "hover:bg-muted"}
              `}
            >
              {day.getDate()}
              {dayEvents.length > 0 && (
                <div className="flex gap-0.5 mt-0.5">
                  {dayEvents.slice(0, 3).map((e) => {
                    const colors = getEventColors(e.type);
                    return (
                      <div
                        key={e.id}
                        className={`w-1 h-1 rounded-full ${isSelected ? "bg-primary-foreground/70" : colors.dot}`}
                      />
                    );
                  })}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// MONTH VIEW
// ─────────────────────────────────────────────────────────
function MonthView({
  currentDate,
  events,
  onDayClick,
  onEventClick,
}: {
  currentDate: Date;
  events: CalendarEvent[];
  onDayClick: (date: Date) => void;
  onEventClick: (event: CalendarEvent) => void;
}) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calStart = startOfWeek(monthStart);
  const calEnd = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: calStart, end: calEnd });

  function getDayEvents(date: Date) {
    return events.filter((e) => isSameDay(parseISO(e.start), date));
  }

  const weeks = days.length / 7;

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-border">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            className="text-center text-xs font-semibold text-muted-foreground py-2 px-1"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div
        className="grid grid-cols-7 flex-1"
        style={{
          gridTemplateRows: `repeat(${weeks}, minmax(100px, 1fr))`,
        }}
      >
        {days.map((day) => {
          const dayEvents = getDayEvents(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isTodayDate = isToday(day);
          const visibleEvents = dayEvents.slice(0, 3);
          const hiddenCount = dayEvents.length - 3;

          return (
            <button
              type="button"
              key={day.toISOString()}
              className={`
                border-b border-r border-border p-1.5 min-h-[100px] cursor-pointer text-left w-full
                ${!isCurrentMonth ? "bg-muted/30" : "bg-card hover:bg-muted/20"}
                transition-colors
              `}
              onClick={() => onDayClick(day)}
              data-ocid="calendar.month.day_cell"
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`
                    text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full
                    ${isTodayDate ? "bg-primary text-primary-foreground" : ""}
                    ${
                      !isCurrentMonth && !isTodayDate
                        ? "text-muted-foreground/50"
                        : "text-foreground"
                    }
                  `}
                >
                  {day.getDate()}
                </span>
              </div>

              <div className="space-y-0.5">
                {visibleEvents.map((event) => {
                  const colors = getEventColors(event.type);
                  return (
                    <button
                      key={event.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick(event);
                      }}
                      className={`
                        w-full text-left text-[10px] font-medium px-1.5 py-0.5 rounded-md truncate
                        ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity
                        flex items-center gap-1
                      `}
                      data-ocid="calendar.month.event_chip"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`}
                      />
                      <span className="truncate">{event.title}</span>
                    </button>
                  );
                })}
                {hiddenCount > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDayClick(day);
                    }}
                    className="w-full text-left text-[10px] text-muted-foreground px-1.5 py-0.5 hover:text-foreground transition-colors"
                    data-ocid="calendar.month.more_events_button"
                  >
                    +{hiddenCount} more
                  </button>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// WEEK VIEW
// ─────────────────────────────────────────────────────────
const HOUR_START = 6;
const HOUR_END = 22;
const TOTAL_HOURS = HOUR_END - HOUR_START;
const HOUR_HEIGHT = 60;

function WeekView({
  currentDate,
  events,
  onEventClick,
}: {
  currentDate: Date;
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
}) {
  const weekStart = startOfWeek(currentDate);
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 7 * HOUR_HEIGHT;
    }
  }, []);

  function getEventsForDay(date: Date) {
    return events.filter((e) => isSameDay(parseISO(e.start), date));
  }

  function getEventPosition(event: CalendarEvent) {
    const start = parseISO(event.start);
    const end = parseISO(event.end);
    const startHour = getHours(start) + getMinutes(start) / 60;
    const endHour = getHours(end) + getMinutes(end) / 60;
    const top = (startHour - HOUR_START) * HOUR_HEIGHT;
    const height = Math.max((endHour - startHour) * HOUR_HEIGHT, 24);
    return { top, height };
  }

  const now = new Date();
  const currentTimeTop =
    (getHours(now) + getMinutes(now) / 60 - HOUR_START) * HOUR_HEIGHT;
  const showCurrentTime =
    getHours(now) >= HOUR_START &&
    getHours(now) < HOUR_END &&
    days.some((d) => isToday(d));

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Day headers */}
      <div className="grid grid-cols-8 border-b border-border bg-card sticky top-0 z-10">
        <div className="w-16" />
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className={`
              text-center py-2 text-xs font-semibold
              ${isToday(day) ? "text-primary" : "text-muted-foreground"}
            `}
          >
            <div>{format(day, "EEE")}</div>
            <div
              className={`
                text-lg font-bold mx-auto w-8 h-8 flex items-center justify-center rounded-full
                ${isToday(day) ? "bg-primary text-primary-foreground" : "text-foreground"}
              `}
            >
              {format(day, "d")}
            </div>
          </div>
        ))}
      </div>

      <ScrollArea className="flex-1">
        <div ref={scrollRef} className="relative">
          <div
            className="grid grid-cols-8"
            style={{ height: TOTAL_HOURS * HOUR_HEIGHT }}
          >
            {/* Hour labels */}
            <div className="w-16 relative">
              {Array.from(
                { length: TOTAL_HOURS },
                (_, i) => i + HOUR_START,
              ).map((hour) => (
                <div
                  key={hour}
                  className="absolute text-[10px] text-muted-foreground text-right pr-2 -translate-y-2.5"
                  style={{ top: (hour - HOUR_START) * HOUR_HEIGHT }}
                >
                  {format(setMinutes(setHours(new Date(), hour), 0), "h a")}
                </div>
              ))}
            </div>

            {/* Day columns */}
            {days.map((day) => {
              const dayEvents = getEventsForDay(day);
              return (
                <div
                  key={day.toISOString()}
                  className="relative border-l border-border"
                >
                  {Array.from({ length: TOTAL_HOURS }, (_, i) => i).map((i) => (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: fixed grid rows
                      key={i}
                      className="absolute w-full border-t border-border/50"
                      style={{ top: i * HOUR_HEIGHT }}
                    />
                  ))}

                  {showCurrentTime && isToday(day) && (
                    <div
                      className="absolute w-full z-20 pointer-events-none"
                      style={{ top: currentTimeTop }}
                    >
                      <div className="relative flex items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500 -ml-1.5 shrink-0" />
                        <div className="flex-1 h-px bg-rose-500" />
                      </div>
                    </div>
                  )}

                  {dayEvents.map((event) => {
                    const { top, height } = getEventPosition(event);
                    const colors = getEventColors(event.type);
                    return (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => onEventClick(event)}
                        className={`
                          absolute left-0.5 right-0.5 rounded-lg p-1.5 text-left cursor-pointer
                          border-l-2 ${colors.border} ${colors.bg} ${colors.text}
                          hover:opacity-90 transition-opacity z-10
                        `}
                        style={{ top: top + 1, height: height - 2 }}
                        data-ocid="calendar.week.event_block"
                      >
                        <div className="text-[10px] font-semibold truncate leading-tight">
                          {event.title}
                        </div>
                        {height > 36 && (
                          <div className="text-[9px] opacity-70 mt-0.5">
                            {format(parseISO(event.start), "h:mm a")}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// DAY VIEW
// ─────────────────────────────────────────────────────────
function DayView({
  currentDate,
  events,
  onEventClick,
}: {
  currentDate: Date;
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
}) {
  const dayEvents = events.filter((e) =>
    isSameDay(parseISO(e.start), currentDate),
  );
  const upcomingEvents = events
    .filter((e) => parseISO(e.start) >= currentDate)
    .sort((a, b) => parseISO(a.start).getTime() - parseISO(b.start).getTime())
    .slice(0, 5);

  const now = new Date();
  const currentTimeTop =
    (getHours(now) + getMinutes(now) / 60 - HOUR_START) * HOUR_HEIGHT;
  const showCurrentTime = isToday(currentDate);

  function getEventPosition(event: CalendarEvent) {
    const start = parseISO(event.start);
    const end = parseISO(event.end);
    const startHour = getHours(start) + getMinutes(start) / 60;
    const endHour = getHours(end) + getMinutes(end) / 60;
    const top = (startHour - HOUR_START) * HOUR_HEIGHT;
    const height = Math.max((endHour - startHour) * HOUR_HEIGHT, 28);
    return { top, height };
  }

  return (
    <div className="flex-1 flex gap-4 min-h-0">
      {/* Main time grid */}
      <div className="flex-1 flex flex-col min-h-0 bg-card rounded-2xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div
              className={`
                w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-lg
                ${isToday(currentDate) ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}
              `}
            >
              {format(currentDate, "d")}
            </div>
            <div>
              <div className="font-semibold text-foreground">
                {format(currentDate, "EEEE")}
              </div>
              <div className="text-sm text-muted-foreground">
                {format(currentDate, "MMMM yyyy")}
              </div>
            </div>
            <Badge variant="secondary" className="ml-auto">
              {dayEvents.length} event{dayEvents.length !== 1 ? "s" : ""}
            </Badge>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div
            className="relative"
            style={{ height: TOTAL_HOURS * HOUR_HEIGHT }}
          >
            {Array.from({ length: TOTAL_HOURS }, (_, i) => i + HOUR_START).map(
              (hour) => (
                <div
                  key={hour}
                  className="absolute w-full flex"
                  style={{ top: (hour - HOUR_START) * HOUR_HEIGHT }}
                >
                  <div className="w-16 shrink-0 text-[10px] text-muted-foreground text-right pr-3 -translate-y-2">
                    {format(setMinutes(setHours(new Date(), hour), 0), "h a")}
                  </div>
                  <div className="flex-1 border-t border-border/60" />
                </div>
              ),
            )}

            {showCurrentTime && (
              <div
                className="absolute inset-x-0 z-20 pointer-events-none flex items-center"
                style={{ top: currentTimeTop }}
              >
                <div className="w-16 shrink-0 flex justify-end pr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                </div>
                <div className="flex-1 h-px bg-rose-500" />
              </div>
            )}

            {dayEvents.map((event) => {
              const { top, height } = getEventPosition(event);
              const colors = getEventColors(event.type);
              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => onEventClick(event)}
                  className={`
                    absolute rounded-xl p-3 text-left cursor-pointer
                    border-l-4 ${colors.border} ${colors.bg}
                    hover:opacity-90 transition-opacity z-10 shadow-sm
                  `}
                  style={{
                    top: top + 1,
                    height: height - 2,
                    left: 72,
                    right: 16,
                  }}
                  data-ocid="calendar.day.event_block"
                >
                  <div
                    className={`text-sm font-semibold truncate ${colors.text}`}
                  >
                    {event.title}
                  </div>
                  <div className={`text-xs mt-0.5 ${colors.text} opacity-70`}>
                    {format(parseISO(event.start), "h:mm a")} –{" "}
                    {format(parseISO(event.end), "h:mm a")}
                  </div>
                  {height > 60 && event.attendees.length > 0 && (
                    <div className="flex -space-x-1 mt-1.5">
                      {event.attendees.slice(0, 3).map((a) => (
                        <UserAvatar
                          key={a}
                          name={a}
                          size="xs"
                          className="ring-1 ring-background"
                        />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Upcoming sidebar */}
      <div className="w-60 shrink-0">
        <div className="bg-card rounded-2xl border border-border p-4 shadow-subtle">
          <h3 className="font-semibold text-sm mb-3 font-display">Upcoming</h3>
          {upcomingEvents.length === 0 ? (
            <p className="text-xs text-muted-foreground">No upcoming events</p>
          ) : (
            <div className="space-y-2">
              {upcomingEvents.map((event) => {
                const colors = getEventColors(event.type);
                return (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => onEventClick(event)}
                    className="w-full text-left group"
                  >
                    <div
                      className={`rounded-xl p-2.5 border-l-2 ${colors.border} ${colors.bg} group-hover:opacity-80 transition-opacity`}
                    >
                      <div
                        className={`text-xs font-semibold truncate ${colors.text}`}
                      >
                        {event.title}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">
                        {format(parseISO(event.start), "MMM d, h:mm a")}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// AGENDA VIEW
// ─────────────────────────────────────────────────────────
function AgendaView({
  currentDate,
  events,
  onEventClick,
}: {
  currentDate: Date;
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
}) {
  const sortedEvents = [...events]
    .filter((e) => parseISO(e.start) >= startOfMonth(subMonths(currentDate, 1)))
    .sort((a, b) => parseISO(a.start).getTime() - parseISO(b.start).getTime());

  const grouped: Record<string, CalendarEvent[]> = {};
  for (const event of sortedEvents) {
    const key = format(parseISO(event.start), "yyyy-MM-dd");
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(event);
  }

  function getDateLabel(dateStr: string) {
    const date = parseISO(dateStr);
    if (isToday(date)) return "Today";
    if (isSameDay(date, addDays(new Date(), 1))) return "Tomorrow";
    return format(date, "EEEE, MMMM d");
  }

  return (
    <ScrollArea className="flex-1">
      <div className="space-y-6 pb-8">
        {Object.entries(grouped).map(([dateStr, dayEvents]) => (
          <div key={dateStr} data-ocid="calendar.agenda.date_group">
            <div className="flex items-center gap-3 mb-3 sticky top-0 bg-background py-1 z-10">
              <div
                className={`
                  text-sm font-bold font-display
                  ${isToday(parseISO(dateStr)) ? "text-primary" : "text-foreground"}
                `}
              >
                {getDateLabel(dateStr)}
              </div>
              <div className="flex-1 h-px bg-border" />
              <Badge variant="secondary" className="text-xs">
                {dayEvents.length}
              </Badge>
            </div>

            <div className="space-y-2">
              {dayEvents.map((event) => {
                const colors = getEventColors(event.type);
                const start = parseISO(event.start);
                const end = parseISO(event.end);

                return (
                  <motion.button
                    key={event.id}
                    type="button"
                    onClick={() => onEventClick(event)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`
                      w-full text-left rounded-2xl p-4 border border-border
                      border-l-4 ${colors.border} bg-card hover:shadow-elevation
                      transition-all
                    `}
                    data-ocid="calendar.agenda.event_row"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-24 text-right">
                        <div className="text-sm font-semibold text-foreground">
                          {format(start, "h:mm a")}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          – {format(end, "h:mm a")}
                        </div>
                      </div>

                      <div
                        className={`shrink-0 p-2 rounded-xl ${colors.bg} ${colors.text}`}
                      >
                        <TypeIcon type={event.type} size={14} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm text-foreground truncate">
                            {event.title}
                          </span>
                          <Badge
                            variant="outline"
                            className={`text-[10px] px-1.5 py-0 ${colors.bg} ${colors.text} border-0`}
                          >
                            {event.type}
                          </Badge>
                          {event.recurring && (
                            <Badge
                              variant="outline"
                              className="text-[10px] px-1.5 py-0"
                            >
                              <Repeat size={8} className="mr-1" />
                              Recurring
                            </Badge>
                          )}
                        </div>

                        {event.description && (
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                            {event.description}
                          </p>
                        )}

                        {event.attendees.length > 0 && (
                          <div className="flex items-center gap-1.5 mt-2">
                            <div className="flex -space-x-1">
                              {event.attendees.slice(0, 4).map((a) => (
                                <UserAvatar
                                  key={a}
                                  name={a}
                                  size="xs"
                                  className="ring-1 ring-background"
                                />
                              ))}
                            </div>
                            {event.attendees.length > 4 && (
                              <span className="text-[10px] text-muted-foreground">
                                +{event.attendees.length - 4}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}

        {Object.keys(grouped).length === 0 && (
          <div
            className="text-center py-16 text-muted-foreground"
            data-ocid="calendar.agenda.empty_state"
          >
            <Calendar size={40} className="mx-auto mb-3 opacity-30" />
            <p className="font-medium">No events scheduled</p>
            <p className="text-sm">Add a new event to get started</p>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}

// ─────────────────────────────────────────────────────────
// MAIN CALENDAR PAGE
// ─────────────────────────────────────────────────────────
export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 22));
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [events, setEvents] = useState<CalendarEvent[]>(mockCalendarEvents);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );
  const [popoverOpen, setPopoverOpen] = useState(false);

  function navigate(dir: -1 | 1) {
    if (viewMode === "month") {
      setCurrentDate(
        dir === 1 ? addMonths(currentDate, 1) : subMonths(currentDate, 1),
      );
    } else if (viewMode === "week") {
      setCurrentDate(addDays(currentDate, dir * 7));
    } else {
      setCurrentDate(addDays(currentDate, dir));
    }
  }

  function goToToday() {
    setCurrentDate(new Date());
  }

  function getHeaderTitle() {
    if (viewMode === "month") return format(currentDate, "MMMM yyyy");
    if (viewMode === "week") {
      const ws = startOfWeek(currentDate);
      const we = endOfWeek(currentDate);
      if (ws.getMonth() === we.getMonth()) {
        return `${format(ws, "MMM d")} – ${format(we, "d, yyyy")}`;
      }
      return `${format(ws, "MMM d")} – ${format(we, "MMM d, yyyy")}`;
    }
    if (viewMode === "day") return format(currentDate, "EEEE, MMMM d, yyyy");
    return "Upcoming Events";
  }

  function handleEventClick(event: CalendarEvent) {
    setSelectedEvent(event);
    setPopoverOpen(true);
  }

  function handleDeleteEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
    toast.success("Event deleted");
  }

  function handleAddEvent(event: CalendarEvent) {
    setEvents((prev) => [...prev, event]);
  }

  const viewButtons: {
    id: ViewMode;
    label: string;
    icon: React.ReactNode;
  }[] = [
    { id: "month", label: "Month", icon: <LayoutGrid size={14} /> },
    { id: "week", label: "Week", icon: <Calendar size={14} /> },
    { id: "day", label: "Day", icon: <Clock size={14} /> },
    { id: "agenda", label: "Agenda", icon: <List size={14} /> },
  ];

  return (
    <div className="flex h-full gap-4 min-h-0">
      {/* LEFT SIDEBAR */}
      <div className="hidden xl:flex flex-col gap-3 w-52 shrink-0">
        <Button
          className="w-full gap-2"
          onClick={() => setShowAddModal(true)}
          data-ocid="calendar.add_event_button"
        >
          <Plus size={14} />
          Add Event
        </Button>

        <MiniCalendar
          currentDate={currentDate}
          selectedDate={currentDate}
          events={events}
          onSelectDate={(date) => {
            setCurrentDate(date);
            if (viewMode === "month") setViewMode("day");
          }}
        />

        {/* Legend */}
        <div className="bg-card rounded-2xl border border-border p-4 shadow-subtle">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Event Types
          </h3>
          <div className="space-y-2">
            {Object.entries(typeColors).map(([type, colors]) => (
              <div key={type} className="flex items-center gap-2 text-xs">
                <div
                  className={`w-2 h-2 rounded-full shrink-0 ${colors.dot}`}
                />
                <span className="text-muted-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Today quick list */}
        <div className="bg-card rounded-2xl border border-border p-4 shadow-subtle flex-1 overflow-hidden">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Today
          </h3>
          {events
            .filter((e) => isToday(parseISO(e.start)))
            .sort(
              (a, b) =>
                parseISO(a.start).getTime() - parseISO(b.start).getTime(),
            )
            .map((event) => {
              const colors = getEventColors(event.type);
              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => handleEventClick(event)}
                  className={`w-full text-left rounded-xl p-2 mb-1.5 ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity`}
                >
                  <div className="text-[11px] font-semibold truncate">
                    {event.title}
                  </div>
                  <div className="text-[10px] opacity-70">
                    {format(parseISO(event.start), "h:mm a")}
                  </div>
                </button>
              );
            })}
          {events.filter((e) => isToday(parseISO(e.start))).length === 0 && (
            <p className="text-xs text-muted-foreground">No events today</p>
          )}
        </div>
      </div>

      {/* MAIN CALENDAR AREA */}
      <div className="flex-1 flex flex-col min-h-0 min-w-0 bg-card rounded-2xl border border-border shadow-subtle overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 p-4 border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(-1)}
              className="h-8 w-8 p-0"
              data-ocid="calendar.header.prev_button"
              aria-label="Previous"
            >
              <ChevronLeft size={14} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(1)}
              className="h-8 w-8 p-0"
              data-ocid="calendar.header.next_button"
              aria-label="Next"
            >
              <ChevronRight size={14} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToToday}
              className="h-8 px-3 text-sm"
              data-ocid="calendar.header.today_button"
            >
              Today
            </Button>
            <motion.h2
              key={getHeaderTitle()}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-base text-foreground ml-1 hidden sm:block"
            >
              {getHeaderTitle()}
            </motion.h2>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hidden sm:flex"
              data-ocid="calendar.header.refresh_button"
              aria-label="Refresh"
            >
              <RefreshCw size={13} />
            </Button>

            <div className="flex items-center bg-muted rounded-xl p-0.5 gap-0.5">
              {viewButtons.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setViewMode(v.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                    ${
                      viewMode === v.id
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                  data-ocid={`calendar.view.${v.id}_tab`}
                >
                  {v.icon}
                  <span className="hidden sm:inline">{v.label}</span>
                </button>
              ))}
            </div>

            <Button
              size="sm"
              className="gap-1.5 xl:hidden"
              onClick={() => setShowAddModal(true)}
              data-ocid="calendar.add_event_button_mobile"
            >
              <Plus size={13} />
              <span className="hidden sm:inline">Add Event</span>
            </Button>
          </div>
        </div>

        {/* View content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="flex-1 flex flex-col min-h-0 overflow-hidden"
          >
            {viewMode === "month" && (
              <MonthView
                currentDate={currentDate}
                events={events}
                onDayClick={(day) => {
                  setCurrentDate(day);
                  setViewMode("day");
                }}
                onEventClick={handleEventClick}
              />
            )}
            {viewMode === "week" && (
              <WeekView
                currentDate={currentDate}
                events={events}
                onEventClick={handleEventClick}
              />
            )}
            {viewMode === "day" && (
              <div className="flex-1 flex flex-col p-4 gap-4 min-h-0">
                <DayView
                  currentDate={currentDate}
                  events={events}
                  onEventClick={handleEventClick}
                />
              </div>
            )}
            {viewMode === "agenda" && (
              <div className="flex-1 p-4 min-h-0">
                <AgendaView
                  currentDate={currentDate}
                  events={events}
                  onEventClick={handleEventClick}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* EVENT DETAIL POPOVER */}
      {selectedEvent && (
        <Popover
          open={popoverOpen}
          onOpenChange={(open) => {
            setPopoverOpen(open);
            if (!open) setSelectedEvent(null);
          }}
        >
          <PopoverTrigger asChild>
            <div className="fixed inset-0 pointer-events-none" aria-hidden />
          </PopoverTrigger>
          <PopoverContent
            className="p-3 w-auto"
            side="bottom"
            align="center"
            sideOffset={4}
            data-ocid="calendar.event.detail_popover"
          >
            <EventDetail
              event={selectedEvent}
              onClose={() => {
                setPopoverOpen(false);
                setSelectedEvent(null);
              }}
              onDelete={handleDeleteEvent}
            />
          </PopoverContent>
        </Popover>
      )}

      {/* ADD EVENT MODAL */}
      <AddEventModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddEvent}
        defaultDate={currentDate}
      />
    </div>
  );
}
