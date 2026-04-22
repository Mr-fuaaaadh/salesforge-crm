import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, y as Search, X, x as cn } from "./index-BlMbxdLA.js";
import { c as constructNow } from "./constructNow-BzYtCcud.js";
import { t as toDate, e as enUS, g as getTimezoneOffsetInMilliseconds, m as minutesInDay, a as minutesInMonth, b as getDefaultOptions } from "./format-MbcRETyn.js";
import { e as endOfMonth } from "./endOfMonth-Bz9NRzi1.js";
import { I as Input } from "./input-NM7OR39o.js";
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function compareAsc(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  const diff = _dateLeft.getTime() - _dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
  } else {
    return diff;
  }
}
function differenceInCalendarMonths(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
  const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}
function differenceInMilliseconds(dateLeft, dateRight) {
  return +toDate(dateLeft) - +toDate(dateRight);
}
function endOfDay(date) {
  const _date = toDate(date);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function isLastDayOfMonth(date) {
  const _date = toDate(date);
  return +endOfDay(_date) === +endOfMonth(_date);
}
function differenceInMonths(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);
  const sign = compareAsc(_dateLeft, _dateRight);
  const difference = Math.abs(
    differenceInCalendarMonths(_dateLeft, _dateRight)
  );
  let result;
  if (difference < 1) {
    result = 0;
  } else {
    if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {
      _dateLeft.setDate(30);
    }
    _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);
    let isLastMonthNotFull = compareAsc(_dateLeft, _dateRight) === -sign;
    if (isLastDayOfMonth(toDate(dateLeft)) && difference === 1 && compareAsc(dateLeft, _dateRight) === 1) {
      isLastMonthNotFull = false;
    }
    result = sign * (difference - Number(isLastMonthNotFull));
  }
  return result === 0 ? 0 : result;
}
function differenceInSeconds(dateLeft, dateRight, options) {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / 1e3;
  return getRoundingMethod(options == null ? void 0 : options.roundingMethod)(diff);
}
function formatDistance(date, baseDate, options) {
  const defaultOptions = getDefaultOptions();
  const locale = (options == null ? void 0 : options.locale) ?? defaultOptions.locale ?? enUS;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(date, baseDate);
  if (isNaN(comparison)) {
    throw new RangeError("Invalid time value");
  }
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options == null ? void 0 : options.addSuffix,
    comparison
  });
  let dateLeft;
  let dateRight;
  if (comparison > 0) {
    dateLeft = toDate(baseDate);
    dateRight = toDate(date);
  } else {
    dateLeft = toDate(date);
    dateRight = toDate(baseDate);
  }
  const seconds = differenceInSeconds(dateRight, dateLeft);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;
  if (minutes < 2) {
    if (options == null ? void 0 : options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(dateRight, dateLeft);
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}
function formatDistanceToNow(date, options) {
  return formatDistance(date, constructNow(date), options);
}
function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  className,
  autoFocus,
  "data-ocid": dataOcid
}) {
  const [internal, setInternal] = reactExports.useState(value ?? "");
  const inputRef = reactExports.useRef(null);
  const controlled = value !== void 0;
  const displayValue = controlled ? value : internal;
  reactExports.useEffect(() => {
    var _a;
    if (autoFocus) (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, [autoFocus]);
  function handleChange(e) {
    const v = e.target.value;
    if (!controlled) setInternal(v);
    onChange == null ? void 0 : onChange(v);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch == null ? void 0 : onSearch(displayValue);
    if (e.key === "Escape") {
      if (!controlled) setInternal("");
      onChange == null ? void 0 : onChange("");
    }
  }
  function handleClear() {
    var _a;
    if (!controlled) setInternal("");
    onChange == null ? void 0 : onChange("");
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative flex items-center", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Search,
      {
        size: 15,
        className: "absolute left-3 text-muted-foreground pointer-events-none z-10"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        ref: inputRef,
        type: "search",
        placeholder,
        value: displayValue,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        "data-ocid": dataOcid ?? "search.input",
        className: "pl-9 pr-8 h-9 text-sm",
        "aria-label": placeholder
      }
    ),
    displayValue && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: handleClear,
        className: "absolute right-2.5 p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors",
        "aria-label": "Clear search",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13 })
      }
    )
  ] });
}
export {
  SearchBar as S,
  Tag as T,
  formatDistanceToNow as f
};
