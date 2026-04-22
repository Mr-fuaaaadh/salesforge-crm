import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, x as cn, K as Slot$1, L as useControllableState, N as Root2$1, O as useId, P as useComposedRefs, Q as Primitive, V as composeEventHandlers, W as Anchor, Y as Presence, _ as Portal$1, $ as createPopperScope, a0 as hideOthers, a1 as ReactRemoveScroll, a2 as createContextScope, a3 as createSlot, a4 as useFocusGuards, a5 as FocusScope, a6 as DismissableLayer, a7 as Content, a8 as Arrow, a9 as mockCalendarEvents, aa as ChevronLeft, n as ChevronRight, m as motion, A as AnimatePresence, e as ue, C as Calendar, d as Badge, b as UserAvatar, k as Users, z as mockTeamMembers, v as Bell } from "./index-BlMbxdLA.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { C as Checkbox } from "./checkbox-DrxJEOS1.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-CmxgkzUi.js";
import { F as FormProvider, C as Controller, u as useFormContext, a as useFormState, b as useForm, c as a, o as object, _ as _enum, s as string, d as array } from "./schemas-CliX3hN0.js";
import { L as Label } from "./label-CJYb5cSz.js";
import { I as Input } from "./input-NM7OR39o.js";
import { S as ScrollArea } from "./scroll-area-KwEGIApL.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CwDuuSgI.js";
import { S as Separator } from "./separator-CwslPhpP.js";
import { T as Textarea } from "./textarea-BdIGEuKt.js";
import { P as Plus } from "./plus-B_ARFHaG.js";
import { i as isToday, p as parseISO, a as addDays, b as isSameDay } from "./parseISO-w5WsTe_U.js";
import { t as toDate, c as constructFrom, b as getDefaultOptions, f as format, s as startOfWeek } from "./format-MbcRETyn.js";
import { R as RefreshCw } from "./refresh-cw-BxVbcfuL.js";
import { L as LayoutGrid } from "./layout-grid-1msGVLmQ.js";
import { C as Clock } from "./clock-BUl1m0Xe.js";
import { L as List } from "./list-BEMR0IU3.js";
import { e as endOfMonth } from "./endOfMonth-Bz9NRzi1.js";
import { M as MapPin } from "./map-pin-CxE656i2.js";
import { P as Pen } from "./pen-9YlBfF4q.js";
import { T as Trash2 } from "./trash-2-D1139fWY.js";
import { P as Phone } from "./phone-CcwBP2xL.js";
import { B as Building2 } from "./building-2-b0v5v_ku.js";
import "./index-TftrN_Lb.js";
import "./check-mNj6eV7j.js";
import "./index-BrhQEKyn.js";
import "./index-IXOTxK3N.js";
import "./constructNow-BzYtCcud.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
];
const Repeat = createLucideIcon("repeat", __iconNode$1);
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
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
];
const Video = createLucideIcon("video", __iconNode);
function addMonths(date, amount) {
  const _date = toDate(date);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}
function eachDayOfInterval(interval, options) {
  const startDate = toDate(interval.start);
  const endDate = toDate(interval.end);
  let reversed = +startDate > +endDate;
  const endTime = reversed ? +startDate : +endDate;
  const currentDate = reversed ? endDate : startDate;
  currentDate.setHours(0, 0, 0, 0);
  let step = 1;
  const dates = [];
  while (+currentDate <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }
  return reversed ? dates.reverse() : dates;
}
function startOfMonth(date) {
  const _date = toDate(date);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function endOfWeek(date, options) {
  var _a, _b;
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = defaultOptions.weekStartsOn ?? ((_b = (_a = defaultOptions.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? 0;
  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function getHours(date) {
  const _date = toDate(date);
  const hours = _date.getHours();
  return hours;
}
function getMinutes(date) {
  const _date = toDate(date);
  const minutes = _date.getMinutes();
  return minutes;
}
function isSameMonth(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  return _dateLeft.getFullYear() === _dateRight.getFullYear() && _dateLeft.getMonth() === _dateRight.getMonth();
}
function setHours(date, hours) {
  const _date = toDate(date);
  _date.setHours(hours);
  return _date;
}
function setMinutes(date, minutes) {
  const _date = toDate(date);
  _date.setMinutes(minutes);
  return _date;
}
function subMonths(date, amount) {
  return addMonths(date, -1);
}
const Form = FormProvider;
const FormFieldContext = reactExports.createContext(
  {}
);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = reactExports.useContext(FormFieldContext);
  const itemContext = reactExports.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = reactExports.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = reactExports.useId();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slot$1,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String((error == null ? void 0 : error.message) ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm", className),
      ...props,
      children: body
    }
  );
}
var POPOVER_NAME = "Popover";
var [createPopoverContext] = createContextScope(POPOVER_NAME, [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover$1 = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope(__scopePopover);
  const triggerRef = reactExports.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = reactExports.useState(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: POPOVER_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$1, { ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: reactExports.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: reactExports.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
};
Popover$1.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    reactExports.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { asChild: true, ...popperScope, children: trigger });
  }
);
PopoverTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
  forceMount: void 0
});
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children }) }) });
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent";
var PopoverContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
PopoverContent$1.displayName = CONTENT_NAME;
var Slot = createSlot("PopoverContent.RemoveScroll");
var PopoverContentModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          if (!isRightClickOutsideRef.current) (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
var PopoverContentNonModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var PopoverContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DismissableLayer,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Content,
              {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }
);
var CLOSE_NAME = "PopoverClose";
var PopoverClose = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Popover$1;
var Trigger = PopoverTrigger$1;
var Portal = PopoverPortal;
var Content2 = PopoverContent$1;
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
const EVENT_TYPES = [
  "Meeting",
  "Call",
  "Follow-up",
  "Reminder",
  "Appointment"
];
const typeColors = {
  Meeting: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
    border: "border-l-blue-500"
  },
  Call: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
    border: "border-l-emerald-500"
  },
  "Follow-up": {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
    border: "border-l-amber-500"
  },
  Reminder: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-700 dark:text-purple-300",
    dot: "bg-purple-500",
    border: "border-l-purple-500"
  },
  Appointment: {
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-700 dark:text-rose-300",
    dot: "bg-rose-500",
    border: "border-l-rose-500"
  }
};
function getEventColors(type) {
  return typeColors[type] ?? typeColors.Meeting;
}
function TypeIcon({ type, size = 14 }) {
  const props = { size, strokeWidth: 2 };
  if (type === "Call") return /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { ...props });
  if (type === "Follow-up") return /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { ...props });
  if (type === "Reminder") return /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { ...props });
  if (type === "Appointment") return /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { ...props });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { ...props });
}
const eventSchema = object({
  title: string().min(1, "Title is required"),
  type: _enum(EVENT_TYPES),
  date: string().min(1, "Date is required"),
  startTime: string().min(1, "Start time is required"),
  endTime: string().min(1, "End time is required"),
  description: string().optional(),
  attendees: array(string()).optional(),
  customer: string().optional(),
  deal: string().optional(),
  recurring: _enum(["None", "Daily", "Weekly", "Monthly"]),
  reminder: _enum(["None", "15min", "30min", "1hr"])
});
function EventDetail({
  event,
  onClose,
  onDelete
}) {
  const colors = getEventColors(event.type);
  const start = parseISO(event.start);
  const end = parseISO(event.end);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-72 p-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `rounded-xl p-4 mb-3 ${colors.bg} border-l-4 ${colors.border}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: `font-semibold text-sm leading-tight truncate ${colors.text}`,
                children: event.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1.5 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: `text-xs px-1.5 py-0 border-0 ${colors.bg} ${colors.text}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { type: event.type, size: 10 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1", children: event.type })
                  ]
                }
              ),
              event.recurring && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs px-1.5 py-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { size: 9, className: "mr-1" }),
                "Recurring"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "text-muted-foreground hover:text-foreground transition-colors text-sm shrink-0",
              children: "✕"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 px-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13, className: "shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          format(start, "EEE, MMM d"),
          " · ",
          format(start, "h:mm a"),
          " –",
          " ",
          format(end, "h:mm a")
        ] })
      ] }),
      event.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 13, className: "shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2", children: event.description })
      ] }),
      event.attendees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 13, className: "shrink-0 mt-1 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: event.attendees.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: a2, size: "xs" }, a2)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "h-7 text-xs gap-1",
          "data-ocid": "calendar.event.edit_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 11 }),
            "Edit"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "h-7 text-xs gap-1 text-destructive hover:text-destructive",
          onClick: () => {
            onDelete(event.id);
            onClose();
          },
          "data-ocid": "calendar.event.delete_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 11 }),
            "Delete"
          ]
        }
      )
    ] })
  ] });
}
function AddEventModal({
  open,
  onClose,
  onAdd,
  defaultDate
}) {
  const form = useForm({
    resolver: a(eventSchema),
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
      reminder: "15min"
    }
  });
  function onSubmit(data) {
    const newEvent = {
      id: `ce${Date.now()}`,
      title: data.title,
      type: data.type,
      start: `${data.date}T${data.startTime}:00`,
      end: `${data.date}T${data.endTime}:00`,
      description: data.description ?? "",
      attendees: data.attendees ?? [],
      recurring: data.recurring !== "None",
      customerId: data.customer || void 0,
      dealId: data.deal || void 0
    };
    onAdd(newEvent);
    ue.success("Event created", { description: data.title });
    form.reset();
    onClose();
  }
  const teamNames = mockTeamMembers.map((m) => m.name);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-lg flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-lg bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16, className: "text-primary" }) }),
      "Schedule Event"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: form.handleSubmit(onSubmit),
        className: "space-y-4 mt-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "title",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Meeting with...",
                    ...field,
                    "data-ocid": "calendar.add_event.title_input"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "type",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      onValueChange: field.onChange,
                      defaultValue: field.value,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "calendar.add_event.type_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: EVENT_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "date",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "date",
                      ...field,
                      "data-ocid": "calendar.add_event.date_input"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "startTime",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Start Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "time",
                      ...field,
                      "data-ocid": "calendar.add_event.start_time_input"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "endTime",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "End Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "time",
                      ...field,
                      "data-ocid": "calendar.add_event.end_time_input"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "description",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    placeholder: "Add notes or agenda...",
                    className: "resize-none",
                    rows: 2,
                    ...field,
                    "data-ocid": "calendar.add_event.description_textarea"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Attendees" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-2 gap-1.5 max-h-28 overflow-y-auto", children: teamNames.map((name) => {
              var _a;
              const checked = ((_a = form.watch("attendees")) == null ? void 0 : _a.includes(name)) ?? false;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: `attendee-${name}`,
                    checked,
                    onCheckedChange: (val) => {
                      const current = form.getValues("attendees") ?? [];
                      if (val) {
                        form.setValue("attendees", [...current, name]);
                      } else {
                        form.setValue(
                          "attendees",
                          current.filter((a2) => a2 !== name)
                        );
                      }
                    },
                    "data-ocid": "calendar.add_event.attendee_checkbox"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: `attendee-${name}`,
                    className: "text-xs cursor-pointer truncate",
                    children: name
                  }
                )
              ] }, name);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "recurring",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Recurring" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      onValueChange: field.onChange,
                      defaultValue: field.value,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "calendar.add_event.recurring_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["None", "Daily", "Weekly", "Monthly"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "reminder",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Reminder" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      onValueChange: field.onChange,
                      defaultValue: field.value,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "calendar.add_event.reminder_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["None", "15min", "30min", "1hr"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r === "None" ? "No reminder" : `${r} before` }, r)) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: onClose,
                "data-ocid": "calendar.add_event.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                "data-ocid": "calendar.add_event.submit_button",
                children: "Create Event"
              }
            )
          ] })
        ]
      }
    ) })
  ] }) });
}
function MiniCalendar({
  currentDate,
  selectedDate,
  events,
  onSelectDate
}) {
  const [miniMonth, setMiniMonth] = reactExports.useState(currentDate);
  reactExports.useEffect(() => {
    setMiniMonth(currentDate);
  }, [currentDate]);
  const monthStart = startOfMonth(miniMonth);
  const monthEnd = endOfMonth(miniMonth);
  const calStart = startOfWeek(monthStart);
  const calEnd = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: calStart, end: calEnd });
  function getDayEvents(date) {
    return events.filter((e) => isSameDay(parseISO(e.start), date));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-4 shadow-subtle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold font-display", children: format(miniMonth, "MMM yyyy") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-6 w-6 p-0",
            onClick: () => setMiniMonth(subMonths(miniMonth)),
            "data-ocid": "calendar.mini.prev_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 12 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-6 w-6 p-0",
            onClick: () => setMiniMonth(addMonths(miniMonth, 1)),
            "data-ocid": "calendar.mini.next_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-0 mb-1", children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-[10px] text-center text-muted-foreground py-0.5 font-medium",
        children: d
      },
      d
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-0", children: days.map((day) => {
      const dayEvents = getDayEvents(day);
      const isCurrentMonth = isSameMonth(day, miniMonth);
      const isTodayDate = isToday(day);
      const isSelected = isSameDay(day, selectedDate);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onSelectDate(day),
          className: `
                relative flex flex-col items-center py-1 rounded-lg text-[11px] font-medium transition-all
                ${!isCurrentMonth ? "opacity-30" : ""}
                ${isTodayDate && !isSelected ? "text-primary font-bold" : ""}
                ${isSelected ? "bg-primary text-primary-foreground" : "hover:bg-muted"}
              `,
          children: [
            day.getDate(),
            dayEvents.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mt-0.5", children: dayEvents.slice(0, 3).map((e) => {
              const colors = getEventColors(e.type);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-1 h-1 rounded-full ${isSelected ? "bg-primary-foreground/70" : colors.dot}`
                },
                e.id
              );
            }) })
          ]
        },
        day.toISOString()
      );
    }) })
  ] });
}
function MonthView({
  currentDate,
  events,
  onDayClick,
  onEventClick
}) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calStart = startOfWeek(monthStart);
  const calEnd = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: calStart, end: calEnd });
  function getDayEvents(date) {
    return events.filter((e) => isSameDay(parseISO(e.start), date));
  }
  const weeks = days.length / 7;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 border-b border-border", children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-center text-xs font-semibold text-muted-foreground py-2 px-1",
        children: d
      },
      d
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-7 flex-1",
        style: {
          gridTemplateRows: `repeat(${weeks}, minmax(100px, 1fr))`
        },
        children: days.map((day) => {
          const dayEvents = getDayEvents(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isTodayDate = isToday(day);
          const visibleEvents = dayEvents.slice(0, 3);
          const hiddenCount = dayEvents.length - 3;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: `
                border-b border-r border-border p-1.5 min-h-[100px] cursor-pointer text-left w-full
                ${!isCurrentMonth ? "bg-muted/30" : "bg-card hover:bg-muted/20"}
                transition-colors
              `,
              onClick: () => onDayClick(day),
              "data-ocid": "calendar.month.day_cell",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `
                    text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full
                    ${isTodayDate ? "bg-primary text-primary-foreground" : ""}
                    ${!isCurrentMonth && !isTodayDate ? "text-muted-foreground/50" : "text-foreground"}
                  `,
                    children: day.getDate()
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                  visibleEvents.map((event) => {
                    const colors = getEventColors(event.type);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation();
                          onEventClick(event);
                        },
                        className: `
                        w-full text-left text-[10px] font-medium px-1.5 py-0.5 rounded-md truncate
                        ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity
                        flex items-center gap-1
                      `,
                        "data-ocid": "calendar.month.event_chip",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: event.title })
                        ]
                      },
                      event.id
                    );
                  }),
                  hiddenCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        onDayClick(day);
                      },
                      className: "w-full text-left text-[10px] text-muted-foreground px-1.5 py-0.5 hover:text-foreground transition-colors",
                      "data-ocid": "calendar.month.more_events_button",
                      children: [
                        "+",
                        hiddenCount,
                        " more"
                      ]
                    }
                  )
                ] })
              ]
            },
            day.toISOString()
          );
        })
      }
    )
  ] });
}
const HOUR_START = 6;
const HOUR_END = 22;
const TOTAL_HOURS = HOUR_END - HOUR_START;
const HOUR_HEIGHT = 60;
function WeekView({
  currentDate,
  events,
  onEventClick
}) {
  const weekStart = startOfWeek(currentDate);
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 7 * HOUR_HEIGHT;
    }
  }, []);
  function getEventsForDay(date) {
    return events.filter((e) => isSameDay(parseISO(e.start), date));
  }
  function getEventPosition(event) {
    const start = parseISO(event.start);
    const end = parseISO(event.end);
    const startHour = getHours(start) + getMinutes(start) / 60;
    const endHour = getHours(end) + getMinutes(end) / 60;
    const top = (startHour - HOUR_START) * HOUR_HEIGHT;
    const height = Math.max((endHour - startHour) * HOUR_HEIGHT, 24);
    return { top, height };
  }
  const now = /* @__PURE__ */ new Date();
  const currentTimeTop = (getHours(now) + getMinutes(now) / 60 - HOUR_START) * HOUR_HEIGHT;
  const showCurrentTime = getHours(now) >= HOUR_START && getHours(now) < HOUR_END && days.some((d) => isToday(d));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-8 border-b border-border bg-card sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16" }),
      days.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `
              text-center py-2 text-xs font-semibold
              ${isToday(day) ? "text-primary" : "text-muted-foreground"}
            `,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: format(day, "EEE") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `
                text-lg font-bold mx-auto w-8 h-8 flex items-center justify-center rounded-full
                ${isToday(day) ? "bg-primary text-primary-foreground" : "text-foreground"}
              `,
                children: format(day, "d")
              }
            )
          ]
        },
        day.toISOString()
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-8",
        style: { height: TOTAL_HOURS * HOUR_HEIGHT },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 relative", children: Array.from(
            { length: TOTAL_HOURS },
            (_, i) => i + HOUR_START
          ).map((hour) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute text-[10px] text-muted-foreground text-right pr-2 -translate-y-2.5",
              style: { top: (hour - HOUR_START) * HOUR_HEIGHT },
              children: format(setMinutes(setHours(/* @__PURE__ */ new Date(), hour), 0), "h a")
            },
            hour
          )) }),
          days.map((day) => {
            const dayEvents = getEventsForDay(day);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative border-l border-border",
                children: [
                  Array.from({ length: TOTAL_HOURS }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute w-full border-t border-border/50",
                      style: { top: i * HOUR_HEIGHT }
                    },
                    i
                  )),
                  showCurrentTime && isToday(day) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute w-full z-20 pointer-events-none",
                      style: { top: currentTimeTop },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-rose-500 -ml-1.5 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-rose-500" })
                      ] })
                    }
                  ),
                  dayEvents.map((event) => {
                    const { top, height } = getEventPosition(event);
                    const colors = getEventColors(event.type);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => onEventClick(event),
                        className: `
                          absolute left-0.5 right-0.5 rounded-lg p-1.5 text-left cursor-pointer
                          border-l-2 ${colors.border} ${colors.bg} ${colors.text}
                          hover:opacity-90 transition-opacity z-10
                        `,
                        style: { top: top + 1, height: height - 2 },
                        "data-ocid": "calendar.week.event_block",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold truncate leading-tight", children: event.title }),
                          height > 36 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] opacity-70 mt-0.5", children: format(parseISO(event.start), "h:mm a") })
                        ]
                      },
                      event.id
                    );
                  })
                ]
              },
              day.toISOString()
            );
          })
        ]
      }
    ) }) })
  ] });
}
function DayView({
  currentDate,
  events,
  onEventClick
}) {
  const dayEvents = events.filter(
    (e) => isSameDay(parseISO(e.start), currentDate)
  );
  const upcomingEvents = events.filter((e) => parseISO(e.start) >= currentDate).sort((a2, b) => parseISO(a2.start).getTime() - parseISO(b.start).getTime()).slice(0, 5);
  const now = /* @__PURE__ */ new Date();
  const currentTimeTop = (getHours(now) + getMinutes(now) / 60 - HOUR_START) * HOUR_HEIGHT;
  const showCurrentTime = isToday(currentDate);
  function getEventPosition(event) {
    const start = parseISO(event.start);
    const end = parseISO(event.end);
    const startHour = getHours(start) + getMinutes(start) / 60;
    const endHour = getHours(end) + getMinutes(end) / 60;
    const top = (startHour - HOUR_START) * HOUR_HEIGHT;
    const height = Math.max((endHour - startHour) * HOUR_HEIGHT, 28);
    return { top, height };
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex gap-4 min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-0 bg-card rounded-2xl border border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `
                w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-lg
                ${isToday(currentDate) ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}
              `,
            children: format(currentDate, "d")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: format(currentDate, "EEEE") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: format(currentDate, "MMMM yyyy") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "ml-auto", children: [
          dayEvents.length,
          " event",
          dayEvents.length !== 1 ? "s" : ""
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative",
          style: { height: TOTAL_HOURS * HOUR_HEIGHT },
          children: [
            Array.from({ length: TOTAL_HOURS }, (_, i) => i + HOUR_START).map(
              (hour) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "absolute w-full flex",
                  style: { top: (hour - HOUR_START) * HOUR_HEIGHT },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 shrink-0 text-[10px] text-muted-foreground text-right pr-3 -translate-y-2", children: format(setMinutes(setHours(/* @__PURE__ */ new Date(), hour), 0), "h a") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-border/60" })
                  ]
                },
                hour
              )
            ),
            showCurrentTime && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute inset-x-0 z-20 pointer-events-none flex items-center",
                style: { top: currentTimeTop },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 shrink-0 flex justify-end pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-rose-500" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-rose-500" })
                ]
              }
            ),
            dayEvents.map((event) => {
              const { top, height } = getEventPosition(event);
              const colors = getEventColors(event.type);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onEventClick(event),
                  className: `
                    absolute rounded-xl p-3 text-left cursor-pointer
                    border-l-4 ${colors.border} ${colors.bg}
                    hover:opacity-90 transition-opacity z-10 shadow-sm
                  `,
                  style: {
                    top: top + 1,
                    height: height - 2,
                    left: 72,
                    right: 16
                  },
                  "data-ocid": "calendar.day.event_block",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `text-sm font-semibold truncate ${colors.text}`,
                        children: event.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-xs mt-0.5 ${colors.text} opacity-70`, children: [
                      format(parseISO(event.start), "h:mm a"),
                      " –",
                      " ",
                      format(parseISO(event.end), "h:mm a")
                    ] }),
                    height > 60 && event.attendees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-1 mt-1.5", children: event.attendees.slice(0, 3).map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      UserAvatar,
                      {
                        name: a2,
                        size: "xs",
                        className: "ring-1 ring-background"
                      },
                      a2
                    )) })
                  ]
                },
                event.id
              );
            })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-60 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-4 shadow-subtle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-3 font-display", children: "Upcoming" }),
      upcomingEvents.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No upcoming events" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: upcomingEvents.map((event) => {
        const colors = getEventColors(event.type);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onEventClick(event),
            className: "w-full text-left group",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `rounded-xl p-2.5 border-l-2 ${colors.border} ${colors.bg} group-hover:opacity-80 transition-opacity`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `text-xs font-semibold truncate ${colors.text}`,
                      children: event.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: format(parseISO(event.start), "MMM d, h:mm a") })
                ]
              }
            )
          },
          event.id
        );
      }) })
    ] }) })
  ] });
}
function AgendaView({
  currentDate,
  events,
  onEventClick
}) {
  const sortedEvents = [...events].filter((e) => parseISO(e.start) >= startOfMonth(subMonths(currentDate))).sort((a2, b) => parseISO(a2.start).getTime() - parseISO(b.start).getTime());
  const grouped = {};
  for (const event of sortedEvents) {
    const key = format(parseISO(event.start), "yyyy-MM-dd");
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(event);
  }
  function getDateLabel(dateStr) {
    const date = parseISO(dateStr);
    if (isToday(date)) return "Today";
    if (isSameDay(date, addDays(/* @__PURE__ */ new Date(), 1))) return "Tomorrow";
    return format(date, "EEEE, MMMM d");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-8", children: [
    Object.entries(grouped).map(([dateStr, dayEvents]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "calendar.agenda.date_group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3 sticky top-0 bg-background py-1 z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `
                  text-sm font-bold font-display
                  ${isToday(parseISO(dateStr)) ? "text-primary" : "text-foreground"}
                `,
            children: getDateLabel(dateStr)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: dayEvents.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: dayEvents.map((event) => {
        const colors = getEventColors(event.type);
        const start = parseISO(event.start);
        const end = parseISO(event.end);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.button,
          {
            type: "button",
            onClick: () => onEventClick(event),
            initial: { opacity: 0, x: -8 },
            animate: { opacity: 1, x: 0 },
            className: `
                      w-full text-left rounded-2xl p-4 border border-border
                      border-l-4 ${colors.border} bg-card hover:shadow-elevation
                      transition-all
                    `,
            "data-ocid": "calendar.agenda.event_row",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 w-24 text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: format(start, "h:mm a") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
                  "– ",
                  format(end, "h:mm a")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `shrink-0 p-2 rounded-xl ${colors.bg} ${colors.text}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { type: event.type, size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground truncate", children: event.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: `text-[10px] px-1.5 py-0 ${colors.bg} ${colors.text} border-0`,
                      children: event.type
                    }
                  ),
                  event.recurring && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-[10px] px-1.5 py-0",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { size: 8, className: "mr-1" }),
                        "Recurring"
                      ]
                    }
                  )
                ] }),
                event.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-1", children: event.description }),
                event.attendees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-1", children: event.attendees.slice(0, 4).map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    UserAvatar,
                    {
                      name: a2,
                      size: "xs",
                      className: "ring-1 ring-background"
                    },
                    a2
                  )) }),
                  event.attendees.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                    "+",
                    event.attendees.length - 4
                  ] })
                ] })
              ] })
            ] })
          },
          event.id
        );
      }) })
    ] }, dateStr)),
    Object.keys(grouped).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-16 text-muted-foreground",
        "data-ocid": "calendar.agenda.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 40, className: "mx-auto mb-3 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No events scheduled" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Add a new event to get started" })
        ]
      }
    )
  ] }) });
}
function CalendarPage() {
  const [currentDate, setCurrentDate] = reactExports.useState(new Date(2026, 3, 22));
  const [viewMode, setViewMode] = reactExports.useState("month");
  const [events, setEvents] = reactExports.useState(mockCalendarEvents);
  const [showAddModal, setShowAddModal] = reactExports.useState(false);
  const [selectedEvent, setSelectedEvent] = reactExports.useState(
    null
  );
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  function navigate(dir) {
    if (viewMode === "month") {
      setCurrentDate(
        dir === 1 ? addMonths(currentDate, 1) : subMonths(currentDate)
      );
    } else if (viewMode === "week") {
      setCurrentDate(addDays(currentDate, dir * 7));
    } else {
      setCurrentDate(addDays(currentDate, dir));
    }
  }
  function goToToday() {
    setCurrentDate(/* @__PURE__ */ new Date());
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
  function handleEventClick(event) {
    setSelectedEvent(event);
    setPopoverOpen(true);
  }
  function handleDeleteEvent(id) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
    ue.success("Event deleted");
  }
  function handleAddEvent(event) {
    setEvents((prev) => [...prev, event]);
  }
  const viewButtons = [
    { id: "month", label: "Month", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: 14 }) },
    { id: "week", label: "Week", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }) },
    { id: "day", label: "Day", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }) },
    { id: "agenda", label: "Agenda", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 14 }) }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full gap-4 min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden xl:flex flex-col gap-3 w-52 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full gap-2",
          onClick: () => setShowAddModal(true),
          "data-ocid": "calendar.add_event_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
            "Add Event"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MiniCalendar,
        {
          currentDate,
          selectedDate: currentDate,
          events,
          onSelectDate: (date) => {
            setCurrentDate(date);
            if (viewMode === "month") setViewMode("day");
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-4 shadow-subtle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Event Types" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Object.entries(typeColors).map(([type, colors]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-2 h-2 rounded-full shrink-0 ${colors.dot}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: type })
        ] }, type)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-4 shadow-subtle flex-1 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Today" }),
        events.filter((e) => isToday(parseISO(e.start))).sort(
          (a2, b) => parseISO(a2.start).getTime() - parseISO(b.start).getTime()
        ).map((event) => {
          const colors = getEventColors(event.type);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleEventClick(event),
              className: `w-full text-left rounded-xl p-2 mb-1.5 ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold truncate", children: event.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-70", children: format(parseISO(event.start), "h:mm a") })
              ]
            },
            event.id
          );
        }),
        events.filter((e) => isToday(parseISO(e.start))).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No events today" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-0 min-w-0 bg-card rounded-2xl border border-border shadow-subtle overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 p-4 border-b border-border shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => navigate(-1),
              className: "h-8 w-8 p-0",
              "data-ocid": "calendar.header.prev_button",
              "aria-label": "Previous",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 14 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => navigate(1),
              className: "h-8 w-8 p-0",
              "data-ocid": "calendar.header.next_button",
              "aria-label": "Next",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: goToToday,
              className: "h-8 px-3 text-sm",
              "data-ocid": "calendar.header.today_button",
              children: "Today"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h2,
            {
              initial: { opacity: 0, y: -4 },
              animate: { opacity: 1, y: 0 },
              className: "font-display font-bold text-base text-foreground ml-1 hidden sm:block",
              children: getHeaderTitle()
            },
            getHeaderTitle()
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 w-8 p-0 hidden sm:flex",
              "data-ocid": "calendar.header.refresh_button",
              "aria-label": "Refresh",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 13 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center bg-muted rounded-xl p-0.5 gap-0.5", children: viewButtons.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setViewMode(v.id),
              className: `
                    flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                    ${viewMode === v.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}
                  `,
              "data-ocid": `calendar.view.${v.id}_tab`,
              children: [
                v.icon,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: v.label })
              ]
            },
            v.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "gap-1.5 xl:hidden",
              onClick: () => setShowAddModal(true),
              "data-ocid": "calendar.add_event_button_mobile",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Add Event" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 4 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -4 },
          transition: { duration: 0.18 },
          className: "flex-1 flex flex-col min-h-0 overflow-hidden",
          children: [
            viewMode === "month" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              MonthView,
              {
                currentDate,
                events,
                onDayClick: (day) => {
                  setCurrentDate(day);
                  setViewMode("day");
                },
                onEventClick: handleEventClick
              }
            ),
            viewMode === "week" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              WeekView,
              {
                currentDate,
                events,
                onEventClick: handleEventClick
              }
            ),
            viewMode === "day" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col p-4 gap-4 min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DayView,
              {
                currentDate,
                events,
                onEventClick: handleEventClick
              }
            ) }),
            viewMode === "agenda" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-4 min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              AgendaView,
              {
                currentDate,
                events,
                onEventClick: handleEventClick
              }
            ) })
          ]
        },
        viewMode
      ) })
    ] }),
    selectedEvent && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Popover,
      {
        open: popoverOpen,
        onOpenChange: (open) => {
          setPopoverOpen(open);
          if (!open) setSelectedEvent(null);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none", "aria-hidden": true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PopoverContent,
            {
              className: "p-3 w-auto",
              side: "bottom",
              align: "center",
              sideOffset: 4,
              "data-ocid": "calendar.event.detail_popover",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                EventDetail,
                {
                  event: selectedEvent,
                  onClose: () => {
                    setPopoverOpen(false);
                    setSelectedEvent(null);
                  },
                  onDelete: handleDeleteEvent
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddEventModal,
      {
        open: showAddModal,
        onClose: () => setShowAddModal(false),
        onAdd: handleAddEvent,
        defaultDate: currentDate
      }
    )
  ] });
}
export {
  CalendarPage as default
};
