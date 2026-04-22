import { c as createLucideIcon, R as React, a as clsx, g as getDefaultExportFromCjs, r as reactExports, u as useCrmStore, j as jsxRuntimeExports, U as UsersRound, T as Target, B as Briefcase, m as motion, b as UserAvatar, d as Badge, e as ue, f as revenueChartData, h as conversionChartData, t as teamPerformanceData, i as getActivityFeed, M as Mail, C as Calendar, Z as Zap } from "./index-BlMbxdLA.js";
import { K as KpiCard } from "./KpiCard-Bzt9tS9b.js";
import { B as Button } from "./button-DsZ2YpJM.js";
import { T as TrendingUp, C as Card } from "./card-DoSBglZU.js";
import { S as Separator } from "./separator-CwslPhpP.js";
import { C as CircleCheck } from "./circle-check-3Bhdwm5r.js";
import { D as DollarSign } from "./dollar-sign-CMRQM1ah.js";
import { A as Award, T as Trophy } from "./trophy-DIk_fvfg.js";
import { C as Clock } from "./clock-BUl1m0Xe.js";
import { S as Star } from "./star-CWBygbFO.js";
import { f as format } from "./format-MbcRETyn.js";
import { P as Plus } from "./plus-B_ARFHaG.js";
import { f as filterProps, p as polarToCartesian, i as isFunction, D as Dot, L as Layer, A as Animate, a as interpolateNumber, b as isEqual, c as LabelList, G as Global, g as getValueByDataKey, l as last$1, d as isNil, e as eq_1, _ as _baseAssignValue, k as keys_1, h as isObject_1, j as _isPrototype, m as isArrayLike_1, n as _arrayLikeKeys, o as _root, q as _getSymbols, s as stubArray_1, r as _arrayPush, t as _getPrototype, u as _baseGetAllKeys, v as _Uint8Array, w as _Symbol, x as isObjectLike_1, y as _getTag, z as _nodeUtilExports, B as _baseUnary, C as _Stack, E as isBufferExports, F as isArray_1, H as _getAllKeys, I as _baseGet, J as _baseSlice, K as _castPath, M as _toKey, N as last_1, O as isPlainObject_1, P as _baseFlatten, Q as _setToString, R as _overRest, S as _arrayMap, T as generateCategoricalChart, U as formatAxisMap, V as Shape, W as getPropsFromShapeOption, X as adaptEventsOfChild, Y as findAllByType, Z as Cell, $ as isNumber, a0 as isString, a1 as ResponsiveContainer, a2 as CartesianGrid, a3 as XAxis, a4 as YAxis, a5 as Tooltip, a6 as Legend, a7 as Line, a8 as BarChart, a9 as Bar } from "./BarChart-CaYUu0ud.js";
import { P as Polygon, a as PolarAngleAxis, b as PolarRadiusAxis, A as AreaChart, c as Area, C as ComposedChart, d as PieChart, e as Pie } from "./ComposedChart-Ut0xuUsm.js";
import { P as Phone } from "./phone-CcwBP2xL.js";
import { U as UserPlus } from "./user-plus-BMtmkSyA.js";
import { F as FileText } from "./file-text-CaNw91lo.js";
import { S as Send } from "./send-S2FWeZLf.js";
import "./trending-down--9WBe-Na.js";
import "./index-BrhQEKyn.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]
];
const Receipt = createLucideIcon("receipt", __iconNode);
var _excluded$1 = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function _typeof$3(o) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$3(o);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$3(t) {
  var i = _toPrimitive$3(t, "string");
  return "symbol" == _typeof$3(i) ? i : i + "";
}
function _toPrimitive$3(t, r) {
  if ("object" != _typeof$3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getPolygonPath = function getPolygonPath2(radius, cx, cy, polarAngles) {
  var path = "";
  polarAngles.forEach(function(angle, i) {
    var point = polarToCartesian(cx, cy, radius, angle);
    if (i) {
      path += "L ".concat(point.x, ",").concat(point.y);
    } else {
      path += "M ".concat(point.x, ",").concat(point.y);
    }
  });
  path += "Z";
  return path;
};
var PolarAngles = function PolarAngles2(props) {
  var cx = props.cx, cy = props.cy, innerRadius = props.innerRadius, outerRadius = props.outerRadius, polarAngles = props.polarAngles, radialLines = props.radialLines;
  if (!polarAngles || !polarAngles.length || !radialLines) {
    return null;
  }
  var polarAnglesProps = _objectSpread$3({
    stroke: "#ccc"
  }, filterProps(props, false));
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, polarAngles.map(function(entry) {
    var start = polarToCartesian(cx, cy, innerRadius, entry);
    var end = polarToCartesian(cx, cy, outerRadius, entry);
    return /* @__PURE__ */ React.createElement("line", _extends$3({}, polarAnglesProps, {
      key: "line-".concat(entry),
      x1: start.x,
      y1: start.y,
      x2: end.x,
      y2: end.y
    }));
  }));
};
var ConcentricCircle = function ConcentricCircle2(props) {
  var cx = props.cx, cy = props.cy, radius = props.radius, index = props.index;
  var concentricCircleProps = _objectSpread$3(_objectSpread$3({
    stroke: "#ccc"
  }, filterProps(props, false)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ React.createElement("circle", _extends$3({}, concentricCircleProps, {
    className: clsx("recharts-polar-grid-concentric-circle", props.className),
    key: "circle-".concat(index),
    cx,
    cy,
    r: radius
  }));
};
var ConcentricPolygon = function ConcentricPolygon2(props) {
  var radius = props.radius, index = props.index;
  var concentricPolygonProps = _objectSpread$3(_objectSpread$3({
    stroke: "#ccc"
  }, filterProps(props, false)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ React.createElement("path", _extends$3({}, concentricPolygonProps, {
    className: clsx("recharts-polar-grid-concentric-polygon", props.className),
    key: "path-".concat(index),
    d: getPolygonPath(radius, props.cx, props.cy, props.polarAngles)
  }));
};
var ConcentricPath = function ConcentricPath2(props) {
  var polarRadius = props.polarRadius, gridType = props.gridType;
  if (!polarRadius || !polarRadius.length) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, polarRadius.map(function(entry, i) {
    var key = i;
    if (gridType === "circle") return /* @__PURE__ */ React.createElement(ConcentricCircle, _extends$3({
      key
    }, props, {
      radius: entry,
      index: i
    }));
    return /* @__PURE__ */ React.createElement(ConcentricPolygon, _extends$3({
      key
    }, props, {
      radius: entry,
      index: i
    }));
  }));
};
var PolarGrid = function PolarGrid2(_ref) {
  var _ref$cx = _ref.cx, cx = _ref$cx === void 0 ? 0 : _ref$cx, _ref$cy = _ref.cy, cy = _ref$cy === void 0 ? 0 : _ref$cy, _ref$innerRadius = _ref.innerRadius, innerRadius = _ref$innerRadius === void 0 ? 0 : _ref$innerRadius, _ref$outerRadius = _ref.outerRadius, outerRadius = _ref$outerRadius === void 0 ? 0 : _ref$outerRadius, _ref$gridType = _ref.gridType, gridType = _ref$gridType === void 0 ? "polygon" : _ref$gridType, _ref$radialLines = _ref.radialLines, radialLines = _ref$radialLines === void 0 ? true : _ref$radialLines, props = _objectWithoutProperties$1(_ref, _excluded$1);
  if (outerRadius <= 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ React.createElement(PolarAngles, _extends$3({
    cx,
    cy,
    innerRadius,
    outerRadius,
    gridType,
    radialLines
  }, props)), /* @__PURE__ */ React.createElement(ConcentricPath, _extends$3({
    cx,
    cy,
    innerRadius,
    outerRadius,
    gridType,
    radialLines
  }, props)));
};
PolarGrid.displayName = "PolarGrid";
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_1 = head;
var first = head_1;
const first$1 = /* @__PURE__ */ getDefaultExportFromCjs(first);
var _excluded = ["key"];
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$2(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$1(t, o, e) {
  return o = _getPrototypeOf$1(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf$1(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Radar = /* @__PURE__ */ function(_PureComponent) {
  function Radar2() {
    var _this;
    _classCallCheck$1(this, Radar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$1(this, Radar2, [].concat(args));
    _defineProperty$2(_this, "state", {
      isAnimationFinished: false
    });
    _defineProperty$2(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty$2(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    _defineProperty$2(_this, "handleMouseEnter", function(e) {
      var onMouseEnter = _this.props.onMouseEnter;
      if (onMouseEnter) {
        onMouseEnter(_this.props, e);
      }
    });
    _defineProperty$2(_this, "handleMouseLeave", function(e) {
      var onMouseLeave = _this.props.onMouseLeave;
      if (onMouseLeave) {
        onMouseLeave(_this.props, e);
      }
    });
    return _this;
  }
  _inherits$1(Radar2, _PureComponent);
  return _createClass$1(Radar2, [{
    key: "renderDots",
    value: function renderDots(points) {
      var _this$props = this.props, dot = _this$props.dot, dataKey = _this$props.dataKey;
      var baseProps = filterProps(this.props, false);
      var customDotProps = filterProps(dot, true);
      var dots = points.map(function(entry, i) {
        var dotProps = _objectSpread$2(_objectSpread$2(_objectSpread$2({
          key: "dot-".concat(i),
          r: 3
        }, baseProps), customDotProps), {}, {
          dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          payload: entry
        });
        return Radar2.renderDotItem(dot, dotProps);
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-radar-dots"
      }, dots);
    }
  }, {
    key: "renderPolygonStatically",
    value: function renderPolygonStatically(points) {
      var _this$props2 = this.props, shape = _this$props2.shape, dot = _this$props2.dot, isRange = _this$props2.isRange, baseLinePoints = _this$props2.baseLinePoints, connectNulls = _this$props2.connectNulls;
      var radar;
      if (/* @__PURE__ */ React.isValidElement(shape)) {
        radar = /* @__PURE__ */ React.cloneElement(shape, _objectSpread$2(_objectSpread$2({}, this.props), {}, {
          points
        }));
      } else if (isFunction(shape)) {
        radar = shape(_objectSpread$2(_objectSpread$2({}, this.props), {}, {
          points
        }));
      } else {
        radar = /* @__PURE__ */ React.createElement(Polygon, _extends$2({}, filterProps(this.props, true), {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          points,
          baseLinePoints: isRange ? baseLinePoints : null,
          connectNulls
        }));
      }
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-radar-polygon"
      }, radar, dot ? this.renderDots(points) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function renderPolygonWithAnimation() {
      var _this2 = this;
      var _this$props3 = this.props, points = _this$props3.points, isAnimationActive = _this$props3.isAnimationActive, animationBegin = _this$props3.animationBegin, animationDuration = _this$props3.animationDuration, animationEasing = _this$props3.animationEasing, animationId = _this$props3.animationId;
      var prevPoints = this.state.prevPoints;
      return /* @__PURE__ */ React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        var prevPointsDiffFactor = prevPoints && prevPoints.length / points.length;
        var stepData = points.map(function(entry, index) {
          var prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];
          if (prev) {
            var _interpolatorX = interpolateNumber(prev.x, entry.x);
            var _interpolatorY = interpolateNumber(prev.y, entry.y);
            return _objectSpread$2(_objectSpread$2({}, entry), {}, {
              x: _interpolatorX(t),
              y: _interpolatorY(t)
            });
          }
          var interpolatorX = interpolateNumber(entry.cx, entry.x);
          var interpolatorY = interpolateNumber(entry.cy, entry.y);
          return _objectSpread$2(_objectSpread$2({}, entry), {}, {
            x: interpolatorX(t),
            y: interpolatorY(t)
          });
        });
        return _this2.renderPolygonStatically(stepData);
      });
    }
  }, {
    key: "renderPolygon",
    value: function renderPolygon() {
      var _this$props4 = this.props, points = _this$props4.points, isAnimationActive = _this$props4.isAnimationActive, isRange = _this$props4.isRange;
      var prevPoints = this.state.prevPoints;
      if (isAnimationActive && points && points.length && !isRange && (!prevPoints || !isEqual(prevPoints, points))) {
        return this.renderPolygonWithAnimation();
      }
      return this.renderPolygonStatically(points);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, hide = _this$props5.hide, className = _this$props5.className, points = _this$props5.points, isAnimationActive = _this$props5.isAnimationActive;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = clsx("recharts-radar", className);
      return /* @__PURE__ */ React.createElement(Layer, {
        className: layerClass
      }, this.renderPolygon(), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }
      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }
      return null;
    }
  }, {
    key: "renderDotItem",
    value: function renderDotItem(option, props) {
      var dotItem;
      if (/* @__PURE__ */ React.isValidElement(option)) {
        dotItem = /* @__PURE__ */ React.cloneElement(option, props);
      } else if (isFunction(option)) {
        dotItem = option(props);
      } else {
        var key = props.key, dotProps = _objectWithoutProperties(props, _excluded);
        dotItem = /* @__PURE__ */ React.createElement(Dot, _extends$2({}, dotProps, {
          key,
          className: clsx("recharts-radar-dot", typeof option !== "boolean" ? option.className : "")
        }));
      }
      return dotItem;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty$2(Radar, "displayName", "Radar");
_defineProperty$2(Radar, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: false,
  activeDot: true,
  dot: false,
  legendType: "rect",
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
_defineProperty$2(Radar, "getComposedData", function(_ref2) {
  var radiusAxis = _ref2.radiusAxis, angleAxis = _ref2.angleAxis, displayedData = _ref2.displayedData, dataKey = _ref2.dataKey, bandSize = _ref2.bandSize;
  var cx = angleAxis.cx, cy = angleAxis.cy;
  var isRange = false;
  var points = [];
  var angleBandSize = angleAxis.type !== "number" ? bandSize !== null && bandSize !== void 0 ? bandSize : 0 : 0;
  displayedData.forEach(function(entry, i) {
    var name = getValueByDataKey(entry, angleAxis.dataKey, i);
    var value = getValueByDataKey(entry, dataKey);
    var angle = angleAxis.scale(name) + angleBandSize;
    var pointValue = Array.isArray(value) ? last$1(value) : value;
    var radius = isNil(pointValue) ? void 0 : radiusAxis.scale(pointValue);
    if (Array.isArray(value) && value.length >= 2) {
      isRange = true;
    }
    points.push(_objectSpread$2(_objectSpread$2({}, polarToCartesian(cx, cy, radius, angle)), {}, {
      name,
      value,
      cx,
      cy,
      radius,
      angle,
      payload: entry
    }));
  });
  var baseLinePoints = [];
  if (isRange) {
    points.forEach(function(point) {
      if (Array.isArray(point.value)) {
        var baseValue = first$1(point.value);
        var radius = isNil(baseValue) ? void 0 : radiusAxis.scale(baseValue);
        baseLinePoints.push(_objectSpread$2(_objectSpread$2({}, point), {}, {
          radius
        }, polarToCartesian(cx, cy, radius, point.angle)));
      } else {
        baseLinePoints.push(point);
      }
    });
  }
  return {
    points,
    isRange,
    baseLinePoints
  };
});
function arrayEach$1(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$3.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$5(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;
var copyObject$4 = _copyObject, keys$1 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$4(source, keys$1(source), object);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$2 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$3;
var copyObject$3 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$3(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
(function(module, exports$1) {
  var root = _root;
  var freeExports = exports$1 && !exports$1.nodeType && exports$1;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var _cloneBufferExports = _cloneBuffer.exports;
function copyArray$1(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$1;
var copyObject$2 = _copyObject, getSymbols$1 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols$1(source), object);
}
var _copySymbols = copySymbols$1;
var arrayPush = _arrayPush, getPrototype$1 = _getPrototype, getSymbols = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype$1(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$2(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$2;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$1.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var Uint8Array = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$1 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBufferExports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn$1 = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray = isArray_1, isBuffer = isBufferExports, isMap = isMap_1, isObject = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn$1 : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseGet = _baseGet, baseSlice = _baseSlice;
function parent$1(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
var _parent = parent$1;
var castPath$1 = _castPath, last = last_1, parent = _parent, toKey = _toKey;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseUnset$1(object, path) {
  path = castPath$1(path, object);
  var index = -1, length = path.length;
  if (!length) {
    return true;
  }
  var isRootPrimitive = object == null || typeof object !== "object" && typeof object !== "function";
  while (++index < length) {
    var key = path[index];
    if (typeof key !== "string") {
      continue;
    }
    if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
      return false;
    }
    if (key === "constructor" && index + 1 < length && typeof path[index + 1] === "string" && path[index + 1] === "prototype") {
      if (isRootPrimitive && index === 0) {
        continue;
      }
      return false;
    }
  }
  var obj = parent(object, path);
  return obj == null || delete obj[toKey(last(path))];
}
var _baseUnset = baseUnset$1;
var isPlainObject = isPlainObject_1;
function customOmitClone$1(value) {
  return isPlainObject(value) ? void 0 : value;
}
var _customOmitClone = customOmitClone$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$1(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$1;
var arrayMap = _arrayMap, baseClone = _baseClone, baseUnset = _baseUnset, castPath = _castPath, copyObject = _copyObject, customOmitClone = _customOmitClone, flatRest = _flatRest, getAllKeysIn = _getAllKeysIn;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit_1 = omit;
const omit$1 = /* @__PURE__ */ getDefaultExportFromCjs(omit_1);
var RadarChart = generateCategoricalChart({
  chartName: "RadarChart",
  GraphicalChild: Radar,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: PolarAngleAxis
  }, {
    axisType: "radiusAxis",
    AxisComp: PolarRadiusAxis
  }],
  formatAxisMap,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function typeGuardTrapezoidProps(option, props) {
  var xValue = "".concat(props.x || option.x);
  var x = parseInt(xValue, 10);
  var yValue = "".concat(props.y || option.y);
  var y = parseInt(yValue, 10);
  var heightValue = "".concat((props === null || props === void 0 ? void 0 : props.height) || (option === null || option === void 0 ? void 0 : option.height));
  var height = parseInt(heightValue, 10);
  return _objectSpread$1(_objectSpread$1(_objectSpread$1({}, props), getPropsFromShapeOption(option)), {}, {
    height,
    x,
    y
  });
}
function FunnelTrapezoid(props) {
  return /* @__PURE__ */ React.createElement(Shape, _extends$1({
    shapeType: "trapezoid",
    propTransformer: typeGuardTrapezoidProps
  }, props));
}
var _Funnel;
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Funnel = /* @__PURE__ */ function(_PureComponent) {
  function Funnel2() {
    var _this;
    _classCallCheck(this, Funnel2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Funnel2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: false
    });
    _defineProperty(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    return _this;
  }
  _inherits(Funnel2, _PureComponent);
  return _createClass(Funnel2, [{
    key: "isActiveIndex",
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;
      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }
      return i === activeIndex;
    }
  }, {
    key: "renderTrapezoidsStatically",
    value: function renderTrapezoidsStatically(trapezoids) {
      var _this2 = this;
      var _this$props = this.props, shape = _this$props.shape, activeShape = _this$props.activeShape;
      return trapezoids.map(function(entry, i) {
        var trapezoidOptions = _this2.isActiveIndex(i) ? activeShape : shape;
        var trapezoidProps = _objectSpread(_objectSpread({}, entry), {}, {
          isActive: _this2.isActiveIndex(i),
          stroke: entry.stroke
        });
        return /* @__PURE__ */ React.createElement(Layer, _extends({
          className: "recharts-funnel-trapezoid"
        }, adaptEventsOfChild(_this2.props, entry, i), {
          key: "trapezoid-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.name, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value),
          role: "img"
        }), /* @__PURE__ */ React.createElement(FunnelTrapezoid, _extends({
          option: trapezoidOptions
        }, trapezoidProps)));
      });
    }
  }, {
    key: "renderTrapezoidsWithAnimation",
    value: function renderTrapezoidsWithAnimation() {
      var _this3 = this;
      var _this$props2 = this.props, trapezoids = _this$props2.trapezoids, isAnimationActive = _this$props2.isAnimationActive, animationBegin = _this$props2.animationBegin, animationDuration = _this$props2.animationDuration, animationEasing = _this$props2.animationEasing, animationId = _this$props2.animationId;
      var prevTrapezoids = this.state.prevTrapezoids;
      return /* @__PURE__ */ React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "funnel-".concat(animationId),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(_ref) {
        var t = _ref.t;
        var stepData = trapezoids.map(function(entry, index) {
          var prev = prevTrapezoids && prevTrapezoids[index];
          if (prev) {
            var _interpolatorX = interpolateNumber(prev.x, entry.x);
            var _interpolatorY = interpolateNumber(prev.y, entry.y);
            var _interpolatorUpperWidth = interpolateNumber(prev.upperWidth, entry.upperWidth);
            var _interpolatorLowerWidth = interpolateNumber(prev.lowerWidth, entry.lowerWidth);
            var _interpolatorHeight = interpolateNumber(prev.height, entry.height);
            return _objectSpread(_objectSpread({}, entry), {}, {
              x: _interpolatorX(t),
              y: _interpolatorY(t),
              upperWidth: _interpolatorUpperWidth(t),
              lowerWidth: _interpolatorLowerWidth(t),
              height: _interpolatorHeight(t)
            });
          }
          var interpolatorX = interpolateNumber(entry.x + entry.upperWidth / 2, entry.x);
          var interpolatorY = interpolateNumber(entry.y + entry.height / 2, entry.y);
          var interpolatorUpperWidth = interpolateNumber(0, entry.upperWidth);
          var interpolatorLowerWidth = interpolateNumber(0, entry.lowerWidth);
          var interpolatorHeight = interpolateNumber(0, entry.height);
          return _objectSpread(_objectSpread({}, entry), {}, {
            x: interpolatorX(t),
            y: interpolatorY(t),
            upperWidth: interpolatorUpperWidth(t),
            lowerWidth: interpolatorLowerWidth(t),
            height: interpolatorHeight(t)
          });
        });
        return /* @__PURE__ */ React.createElement(Layer, null, _this3.renderTrapezoidsStatically(stepData));
      });
    }
  }, {
    key: "renderTrapezoids",
    value: function renderTrapezoids() {
      var _this$props3 = this.props, trapezoids = _this$props3.trapezoids, isAnimationActive = _this$props3.isAnimationActive;
      var prevTrapezoids = this.state.prevTrapezoids;
      if (isAnimationActive && trapezoids && trapezoids.length && (!prevTrapezoids || !isEqual(prevTrapezoids, trapezoids))) {
        return this.renderTrapezoidsWithAnimation();
      }
      return this.renderTrapezoidsStatically(trapezoids);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, hide = _this$props4.hide, trapezoids = _this$props4.trapezoids, className = _this$props4.className, isAnimationActive = _this$props4.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (hide || !trapezoids || !trapezoids.length) {
        return null;
      }
      var layerClass = clsx("recharts-trapezoids", className);
      return /* @__PURE__ */ React.createElement(Layer, {
        className: layerClass
      }, this.renderTrapezoids(), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, trapezoids));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curTrapezoids: nextProps.trapezoids,
          prevTrapezoids: prevState.curTrapezoids
        };
      }
      if (nextProps.trapezoids !== prevState.curTrapezoids) {
        return {
          curTrapezoids: nextProps.trapezoids
        };
      }
      return null;
    }
  }]);
}(reactExports.PureComponent);
_Funnel = Funnel;
_defineProperty(Funnel, "displayName", "Funnel");
_defineProperty(Funnel, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  labelLine: true,
  hide: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  lastShapeType: "triangle"
});
_defineProperty(Funnel, "getRealFunnelData", function(item) {
  var _item$props = item.props, data = _item$props.data, children = _item$props.children;
  var presentationProps = filterProps(item.props, false);
  var cells = findAllByType(children, Cell);
  if (data && data.length) {
    return data.map(function(entry, index) {
      return _objectSpread(_objectSpread(_objectSpread({
        payload: entry
      }, presentationProps), entry), cells && cells[index] && cells[index].props);
    });
  }
  if (cells && cells.length) {
    return cells.map(function(cell) {
      return _objectSpread(_objectSpread({}, presentationProps), cell.props);
    });
  }
  return [];
});
_defineProperty(Funnel, "getRealWidthHeight", function(item, offset) {
  var customWidth = item.props.width;
  var width = offset.width, height = offset.height, left = offset.left, right = offset.right, top = offset.top, bottom = offset.bottom;
  var realHeight = height;
  var realWidth = width;
  if (isNumber(customWidth)) {
    realWidth = customWidth;
  } else if (isString(customWidth)) {
    realWidth = realWidth * parseFloat(customWidth) / 100;
  }
  return {
    realWidth: realWidth - left - right - 50,
    realHeight: realHeight - bottom - top,
    offsetX: (width - realWidth) / 2,
    offsetY: (height - realHeight) / 2
  };
});
_defineProperty(Funnel, "getComposedData", function(_ref2) {
  var item = _ref2.item, offset = _ref2.offset;
  var funnelData = _Funnel.getRealFunnelData(item);
  var _item$props2 = item.props, dataKey = _item$props2.dataKey, nameKey = _item$props2.nameKey, tooltipType = _item$props2.tooltipType, lastShapeType = _item$props2.lastShapeType, reversed = _item$props2.reversed;
  var left = offset.left, top = offset.top;
  var _Funnel$getRealWidthH = _Funnel.getRealWidthHeight(item, offset), realHeight = _Funnel$getRealWidthH.realHeight, realWidth = _Funnel$getRealWidthH.realWidth, offsetX = _Funnel$getRealWidthH.offsetX, offsetY = _Funnel$getRealWidthH.offsetY;
  var maxValue = Math.max.apply(null, funnelData.map(function(entry) {
    return getValueByDataKey(entry, dataKey, 0);
  }));
  var len = funnelData.length;
  var rowHeight = realHeight / len;
  var parentViewBox = {
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height
  };
  var trapezoids = funnelData.map(function(entry, i) {
    var rawVal = getValueByDataKey(entry, dataKey, 0);
    var name = getValueByDataKey(entry, nameKey, i);
    var val = rawVal;
    var nextVal;
    if (i !== len - 1) {
      nextVal = getValueByDataKey(funnelData[i + 1], dataKey, 0);
      if (nextVal instanceof Array) {
        var _nextVal = nextVal;
        var _nextVal2 = _slicedToArray(_nextVal, 1);
        nextVal = _nextVal2[0];
      }
    } else if (rawVal instanceof Array && rawVal.length === 2) {
      var _rawVal = _slicedToArray(rawVal, 2);
      val = _rawVal[0];
      nextVal = _rawVal[1];
    } else if (lastShapeType === "rectangle") {
      nextVal = val;
    } else {
      nextVal = 0;
    }
    var x = (maxValue - val) * realWidth / (2 * maxValue) + top + 25 + offsetX;
    var y = rowHeight * i + left + offsetY;
    var upperWidth = val / maxValue * realWidth;
    var lowerWidth = nextVal / maxValue * realWidth;
    var tooltipPayload = [{
      name,
      value: val,
      payload: entry,
      dataKey,
      type: tooltipType
    }];
    var tooltipPosition = {
      x: x + upperWidth / 2,
      y: y + rowHeight / 2
    };
    return _objectSpread(_objectSpread({
      x,
      y,
      width: Math.max(upperWidth, lowerWidth),
      upperWidth,
      lowerWidth,
      height: rowHeight,
      name,
      val,
      tooltipPayload,
      tooltipPosition
    }, omit$1(entry, "width")), {}, {
      payload: entry,
      parentViewBox,
      labelViewBox: {
        x: x + (upperWidth - lowerWidth) / 4,
        y,
        width: Math.abs(upperWidth - lowerWidth) / 2 + Math.min(upperWidth, lowerWidth),
        height: rowHeight
      }
    });
  });
  if (reversed) {
    trapezoids = trapezoids.map(function(entry, index) {
      var newY = entry.y - index * rowHeight + (len - 1 - index) * rowHeight;
      return _objectSpread(_objectSpread({}, entry), {}, {
        upperWidth: entry.lowerWidth,
        lowerWidth: entry.upperWidth,
        x: entry.x - (entry.lowerWidth - entry.upperWidth) / 2,
        y: entry.y - index * rowHeight + (len - 1 - index) * rowHeight,
        tooltipPosition: _objectSpread(_objectSpread({}, entry.tooltipPosition), {}, {
          y: newY + rowHeight / 2
        }),
        labelViewBox: _objectSpread(_objectSpread({}, entry.labelViewBox), {}, {
          y: newY
        })
      });
    });
  }
  return {
    trapezoids,
    data: funnelData
  };
});
var FunnelChart = generateCategoricalChart({
  chartName: "FunnelChart",
  GraphicalChild: Funnel,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  axisComponents: [],
  defaultProps: {
    layout: "centric"
  }
});
function getGreeting() {
  const hour = (/* @__PURE__ */ new Date()).getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}
const activityConfig = {
  deal_won: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 13 }),
    bg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    label: "Deal Won"
  },
  lead_created: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 13 }),
    bg: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    label: "Lead Added"
  },
  call_completed: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 13 }),
    bg: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
    label: "Call Done"
  },
  meeting_scheduled: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 13 }),
    bg: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
    label: "Meeting"
  },
  deal_moved: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 13 }),
    bg: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    label: "Deal Moved"
  },
  email_sent: {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 13 }),
    bg: "bg-teal-500/15 text-teal-600 dark:text-teal-400",
    label: "Email Sent"
  }
};
const quickActions = [
  {
    label: "Add Lead",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 18 }),
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    borderColor: "hover:border-blue-400/50",
    message: "Lead creation form opened",
    dataOcid: "dashboard.add_lead.button"
  },
  {
    label: "New Opportunity",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18 }),
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    borderColor: "hover:border-violet-400/50",
    message: "Opportunity creation opened",
    dataOcid: "dashboard.new_opportunity.button"
  },
  {
    label: "Schedule Meeting",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18 }),
    iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    borderColor: "hover:border-indigo-400/50",
    message: "Calendar scheduler opened",
    dataOcid: "dashboard.schedule_meeting.button"
  },
  {
    label: "Send Proposal",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 }),
    iconBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    borderColor: "hover:border-teal-400/50",
    message: "Proposal builder opened",
    dataOcid: "dashboard.send_proposal.button"
  },
  {
    label: "Generate Invoice",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { size: 18 }),
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    borderColor: "hover:border-amber-400/50",
    message: "Invoice generator opened",
    dataOcid: "dashboard.generate_invoice.button"
  }
];
const monthlyDealData = [
  { month: "Nov", closed: 8, lost: 3, value: 185 },
  { month: "Dec", closed: 11, lost: 2, value: 241 },
  { month: "Jan", closed: 7, lost: 4, value: 198 },
  { month: "Feb", closed: 13, lost: 2, value: 267 },
  { month: "Mar", closed: 15, lost: 3, value: 312 },
  { month: "Apr", closed: 12, lost: 1, value: 289 }
];
const regionData = [
  { name: "North America", value: 412e3, fill: "oklch(0.5 0.12 243)" },
  { name: "Europe", value: 278e3, fill: "oklch(0.52 0.13 270)" },
  { name: "Asia Pacific", value: 156e3, fill: "oklch(0.72 0.17 152)" },
  { name: "Middle East", value: 89e3, fill: "oklch(0.72 0.15 84)" },
  { name: "LatAm", value: 41e3, fill: "oklch(0.55 0.22 25)" }
];
const radarTeamData = [
  { metric: "Revenue", Alex: 98, Maria: 110, David: 59 },
  { metric: "Calls", Alex: 87, Maria: 64, David: 102 },
  { metric: "Meetings", Alex: 82, Maria: 110, David: 64 },
  { metric: "Conversion", Alex: 86, Maria: 100, David: 50 },
  { metric: "Deals", Alex: 80, Maria: 75, David: 50 }
];
const tooltipStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "0.75rem",
  fontSize: 12,
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
};
function SummaryStatPill({
  label,
  value,
  icon,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border/60 shadow-subtle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: color, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground hidden sm:block", children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: value })
  ] });
}
function ChartCard({
  title,
  subtitle,
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: `p-5 border border-border/60 shadow-subtle hover:shadow-elevation transition-shadow ${className ?? ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: subtitle })
        ] }),
        children
      ]
    }
  );
}
function PieLabel({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  percent
}) {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 28;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.05) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "text",
    {
      x,
      y,
      fill: "var(--muted-foreground)",
      textAnchor: x > cx ? "start" : "end",
      dominantBaseline: "central",
      fontSize: 10,
      children: [
        name.split(" ")[0],
        " ",
        (percent * 100).toFixed(0),
        "%"
      ]
    }
  );
}
function DashboardPage() {
  const leads = useCrmStore((s) => s.leads);
  const deals = useCrmStore((s) => s.deals);
  const tasks = useCrmStore((s) => s.tasks);
  const teamMembers = useCrmStore((s) => s.teamMembers);
  const overdueTasks = useCrmStore((s) => s.overdueTasks());
  const qualifiedLeads = leads.filter(
    (l) => l.status === "Qualified" || l.status === "Proposal" || l.status === "Negotiation"
  ).length;
  const activeDeals = deals.filter(
    (d) => d.stage !== "Won" && d.stage !== "Lost"
  ).length;
  const closedDeals = deals.filter((d) => d.stage === "Won").length;
  const totalRevenue = deals.filter((d) => d.stage === "Won").reduce((s, d) => s + d.value, 0);
  const pendingFollowUps = tasks.filter(
    (t) => t.type === "Follow-up" && t.status !== "Completed"
  ).length;
  const avgConversion = teamMembers.reduce((s, m) => s + m.conversionRate, 0) / (teamMembers.length || 1);
  const activityFeed = getActivityFeed();
  const kpiCards = [
    {
      title: "Total Leads",
      value: leads.length,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { size: 18 }),
      trend: 12,
      trendLabel: "vs last month",
      sparklineData: [45, 52, 48, 61, 58, 72, leads.length]
    },
    {
      title: "Qualified Leads",
      value: qualifiedLeads,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 18 }),
      trend: 8,
      trendLabel: "conversion improving",
      sparklineData: [18, 22, 19, 28, 24, 31, qualifiedLeads]
    },
    {
      title: "Active Deals",
      value: activeDeals,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 18 }),
      trend: 5,
      trendLabel: "in pipeline",
      sparklineData: [8, 10, 11, 9, 13, 12, activeDeals]
    },
    {
      title: "Closed Deals",
      value: closedDeals,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18 }),
      trend: 18,
      trendLabel: "this month",
      sparklineData: [2, 3, 4, 2, 5, 4, closedDeals]
    },
    {
      title: "Revenue (Month)",
      value: `$${(totalRevenue / 1e3).toFixed(0)}K`,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 18 }),
      trend: 22,
      trendLabel: "$289K this month",
      sparklineData: [185, 241, 198, 267, 312, 289]
    },
    {
      title: "Revenue Growth",
      value: "22%",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18 }),
      trend: 22,
      trendLabel: "month over month",
      sparklineData: [8, 12, 10, 18, 15, 22]
    },
    {
      title: "Team Performance",
      value: `${avgConversion.toFixed(0)}%`,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 18 }),
      trend: 3,
      trendLabel: "avg conversion rate",
      sparklineData: [28, 29, 30, 31, 31, Math.round(avgConversion)]
    },
    {
      title: "Pending Follow-ups",
      value: pendingFollowUps,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 18 }),
      trend: -5,
      trendLabel: "due this week",
      sparklineData: [12, 10, 14, 11, 9, pendingFollowUps]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-16 md:pb-0", "data-ocid": "dashboard.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        className: "relative rounded-2xl overflow-hidden border border-border/60 bg-card shadow-subtle",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 80% at 90% 50%, oklch(0.5 0.12 243 / 0.08), transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvatar, { name: "Alex Rivera", size: "lg" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-xl text-foreground", children: [
                    getGreeting(),
                    ", Alex 👋"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "secondary",
                      className: "text-[10px] font-medium h-5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 9, className: "mr-1 fill-current" }),
                        "Senior AE"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
                  format(/* @__PURE__ */ new Date(), "EEEE, MMMM d, yyyy"),
                  " · April is looking strong 🚀"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SummaryStatPill,
                {
                  label: "Pipeline",
                  value: `$${(deals.filter((d) => d.stage !== "Won" && d.stage !== "Lost").reduce((s, d) => s + d.value, 0) / 1e3).toFixed(0)}K`,
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 13 }),
                  color: "text-primary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SummaryStatPill,
                {
                  label: "Overdue",
                  value: overdueTasks.length,
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13 }),
                  color: overdueTasks.length > 0 ? "text-destructive" : "text-muted-foreground"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "h-8 rounded-full",
                  onClick: () => ue.success("Opening lead form…"),
                  "data-ocid": "dashboard.add_lead.header_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14, className: "mr-1" }),
                    "Add Lead"
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",
        "data-ocid": "dashboard.kpi.section",
        children: kpiCards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.05, duration: 0.3 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              KpiCard,
              {
                title: card.title,
                value: card.value,
                icon: card.icon,
                trend: card.trend,
                trendLabel: card.trendLabel,
                sparklineData: card.sparklineData,
                "data-ocid": `dashboard.kpi.${i + 1}.card`
              }
            )
          },
          card.title
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.4, duration: 0.3 },
        "data-ocid": "dashboard.charts.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground", children: "Analytics Overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "flex-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: "Last 6 months" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChartCard,
              {
                title: "Revenue Over Time",
                subtitle: "Actual vs target ($K)",
                className: "lg:col-span-2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 210, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  AreaChart,
                  {
                    data: revenueChartData,
                    margin: { top: 4, right: 4, bottom: 0, left: -20 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "revGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "stop",
                          {
                            offset: "0%",
                            stopColor: "oklch(0.5 0.12 243)",
                            stopOpacity: 0.25
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "stop",
                          {
                            offset: "100%",
                            stopColor: "oklch(0.5 0.12 243)",
                            stopOpacity: 0
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CartesianGrid,
                        {
                          strokeDasharray: "3 3",
                          stroke: "var(--border)",
                          strokeOpacity: 0.4
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        XAxis,
                        {
                          dataKey: "month",
                          tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                          tickLine: false,
                          axisLine: false
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        YAxis,
                        {
                          tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                          tickLine: false,
                          axisLine: false,
                          tickFormatter: (v) => `$${v / 1e3}K`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Tooltip,
                        {
                          formatter: (v) => [`$${v.toLocaleString()}`, ""],
                          contentStyle: tooltipStyle
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Legend,
                        {
                          iconType: "circle",
                          iconSize: 8,
                          wrapperStyle: { fontSize: 11 }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Area,
                        {
                          type: "monotone",
                          dataKey: "revenue",
                          stroke: "oklch(0.5 0.12 243)",
                          strokeWidth: 2.5,
                          fill: "url(#revGradient)",
                          dot: { fill: "oklch(0.5 0.12 243)", r: 3 },
                          name: "Revenue"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Line,
                        {
                          type: "monotone",
                          dataKey: "target",
                          stroke: "var(--muted-foreground)",
                          strokeWidth: 1.5,
                          strokeDasharray: "4 4",
                          dot: false,
                          name: "Target"
                        }
                      )
                    ]
                  }
                ) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChartCard,
              {
                title: "Pipeline Funnel",
                subtitle: "Lead-to-close conversion",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 210, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FunnelChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Funnel,
                    {
                      dataKey: "count",
                      data: conversionChartData,
                      isAnimationActive: true,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        LabelList,
                        {
                          position: "right",
                          fill: "var(--foreground)",
                          stroke: "none",
                          dataKey: "stage",
                          style: { fontSize: 11 }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Conversion Rate", subtitle: "By lead source category", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 210, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                data: [
                  { source: "Website", rate: 34, leads: 89 },
                  { source: "LinkedIn", rate: 28, leads: 64 },
                  { source: "Referral", rate: 52, leads: 41 },
                  { source: "Partner", rate: 45, leads: 38 },
                  { source: "Event", rate: 19, leads: 28 },
                  { source: "Cold", rate: 11, leads: 56 }
                ],
                margin: { top: 4, right: 4, bottom: 0, left: -20 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "barGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "0%",
                        stopColor: "oklch(0.52 0.13 270)",
                        stopOpacity: 0.9
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "100%",
                        stopColor: "oklch(0.52 0.13 270)",
                        stopOpacity: 0.5
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      stroke: "var(--border)",
                      strokeOpacity: 0.4,
                      vertical: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    XAxis,
                    {
                      dataKey: "source",
                      tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                      tickLine: false,
                      axisLine: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                      tickLine: false,
                      axisLine: false,
                      tickFormatter: (v) => `${v}%`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      formatter: (v) => [`${v}%`, "Conversion"],
                      contentStyle: tooltipStyle
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "rate",
                      fill: "url(#barGradient)",
                      radius: [4, 4, 0, 0],
                      name: "Conversion %"
                    }
                  )
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChartCard,
              {
                title: "Monthly Deal Performance",
                subtitle: "Closed deals + value trend",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 210, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  ComposedChart,
                  {
                    data: monthlyDealData,
                    margin: { top: 4, right: 4, bottom: 0, left: -20 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CartesianGrid,
                        {
                          strokeDasharray: "3 3",
                          stroke: "var(--border)",
                          strokeOpacity: 0.4,
                          vertical: false
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        XAxis,
                        {
                          dataKey: "month",
                          tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                          tickLine: false,
                          axisLine: false
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        YAxis,
                        {
                          yAxisId: "left",
                          tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                          tickLine: false,
                          axisLine: false
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        YAxis,
                        {
                          yAxisId: "right",
                          orientation: "right",
                          tick: { fontSize: 10, fill: "var(--muted-foreground)" },
                          tickLine: false,
                          axisLine: false,
                          tickFormatter: (v) => `$${v}K`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Legend,
                        {
                          iconType: "circle",
                          iconSize: 8,
                          wrapperStyle: { fontSize: 11 }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Bar,
                        {
                          yAxisId: "left",
                          dataKey: "closed",
                          fill: "oklch(0.72 0.17 152)",
                          radius: [3, 3, 0, 0],
                          name: "Closed",
                          opacity: 0.85
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Bar,
                        {
                          yAxisId: "left",
                          dataKey: "lost",
                          fill: "oklch(0.55 0.22 25)",
                          radius: [3, 3, 0, 0],
                          name: "Lost",
                          opacity: 0.7
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Line,
                        {
                          yAxisId: "right",
                          type: "monotone",
                          dataKey: "value",
                          stroke: "oklch(0.5 0.12 243)",
                          strokeWidth: 2,
                          dot: { r: 3, fill: "oklch(0.5 0.12 243)" },
                          name: "Value $K"
                        }
                      )
                    ]
                  }
                ) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ChartCard, { title: "Region-wise Sales", subtitle: "Revenue by geography", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 210, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Pie,
                  {
                    data: regionData,
                    cx: "50%",
                    cy: "50%",
                    outerRadius: 75,
                    innerRadius: 40,
                    dataKey: "value",
                    labelLine: false,
                    label: PieLabel,
                    children: regionData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.fill }, entry.name))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    formatter: (v) => [`$${v.toLocaleString()}`, ""],
                    contentStyle: tooltipStyle
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-3 gap-y-1 mt-1", children: regionData.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "flex items-center gap-1 text-[10px] text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-2 h-2 rounded-full inline-block shrink-0",
                        style: { background: r.fill }
                      }
                    ),
                    r.name.split(" ")[0]
                  ]
                },
                r.name
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Team Productivity", subtitle: "Multi-metric radar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 210, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: radarTeamData, cx: "50%", cy: "50%", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, { stroke: "var(--border)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PolarAngleAxis,
                {
                  dataKey: "metric",
                  tick: { fontSize: 10, fill: "var(--muted-foreground)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PolarRadiusAxis,
                {
                  tick: { fontSize: 9, fill: "var(--muted-foreground)" },
                  axisLine: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Radar,
                {
                  name: "Alex",
                  dataKey: "Alex",
                  stroke: "oklch(0.5 0.12 243)",
                  fill: "oklch(0.5 0.12 243)",
                  fillOpacity: 0.2,
                  strokeWidth: 1.5
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Radar,
                {
                  name: "Maria",
                  dataKey: "Maria",
                  stroke: "oklch(0.72 0.17 152)",
                  fill: "oklch(0.72 0.17 152)",
                  fillOpacity: 0.2,
                  strokeWidth: 1.5
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Legend,
                {
                  iconType: "circle",
                  iconSize: 8,
                  wrapperStyle: { fontSize: 11 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChartCard,
              {
                title: "Team Revenue vs Target",
                subtitle: "Revenue ($K) this month",
                className: "lg:col-span-2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 210, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  BarChart,
                  {
                    data: teamPerformanceData,
                    margin: { top: 4, right: 4, bottom: 0, left: -20 },
                    layout: "horizontal",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CartesianGrid,
                        {
                          strokeDasharray: "3 3",
                          stroke: "var(--border)",
                          strokeOpacity: 0.4,
                          vertical: false
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        XAxis,
                        {
                          dataKey: "name",
                          tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                          tickLine: false,
                          axisLine: false
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        YAxis,
                        {
                          tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                          tickLine: false,
                          axisLine: false,
                          tickFormatter: (v) => `$${v}K`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Tooltip,
                        {
                          formatter: (v) => [`$${v}K`, ""],
                          contentStyle: tooltipStyle
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Legend,
                        {
                          iconType: "circle",
                          iconSize: 8,
                          wrapperStyle: { fontSize: 11 }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Bar,
                        {
                          dataKey: "revenue",
                          name: "Revenue",
                          radius: [4, 4, 0, 0],
                          fill: "oklch(0.5 0.12 243)",
                          opacity: 0.9
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Bar,
                        {
                          dataKey: "target",
                          name: "Target",
                          radius: [4, 4, 0, 0],
                          fill: "var(--muted)",
                          opacity: 0.6
                        }
                      )
                    ]
                  }
                ) })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "lg:col-span-3 p-5 border border-border/60 shadow-subtle",
          "data-ocid": "dashboard.activity.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground", children: "Recent Activity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Latest team actions" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: "Live" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[17px] top-2 bottom-2 w-px bg-border/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: activityFeed.map((item, i) => {
                const cfg = activityConfig[item.type] ?? {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 13 }),
                  bg: "bg-muted text-muted-foreground"
                };
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -16 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.5 + i * 0.07 },
                    className: "flex items-start gap-3 py-2.5 pl-1",
                    "data-ocid": `dashboard.activity.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${cfg.bg}`,
                          children: cfg.icon
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground leading-snug truncate", children: item.description }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.user }),
                            item.relatedTo && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              " · ",
                              item.relatedTo
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground whitespace-nowrap shrink-0 mt-0.5", children: format(new Date(item.timestamp), "h:mm a") })
                      ] }) })
                    ]
                  },
                  item.id
                );
              }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "lg:col-span-2 p-5 border border-border/60 shadow-subtle",
          "data-ocid": "dashboard.quick_actions.section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground", children: "Quick Actions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Common tasks at a glance" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: quickActions.map((action, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                initial: { opacity: 0, x: 16 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.55 + i * 0.07 },
                whileHover: { scale: 1.01 },
                whileTap: { scale: 0.98 },
                onClick: () => ue.success(action.message, { duration: 3e3 }),
                "data-ocid": action.dataOcid,
                className: `w-full flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-card hover:bg-muted/50 transition-smooth cursor-pointer text-left ${action.borderColor}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${action.iconBg}`,
                      children: action.icon
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: action.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Plus,
                    {
                      size: 14,
                      className: "ml-auto text-muted-foreground opacity-50"
                    }
                  )
                ]
              },
              action.label
            )) }),
            overdueTasks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-3 rounded-xl bg-destructive/8 border border-destructive/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13, className: "text-destructive shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-destructive", children: [
                overdueTasks.length,
                " overdue task",
                overdueTasks.length > 1 ? "s" : "",
                " need attention"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-primary uppercase tracking-wider mb-2", children: "🏆 Top Performer" }),
              teamMembers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  UserAvatar,
                  {
                    name: [...teamMembers].sort(
                      (a, b) => b.totalRevenue - a.totalRevenue
                    )[0].name,
                    size: "sm"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: [...teamMembers].sort(
                    (a, b) => b.totalRevenue - a.totalRevenue
                  )[0].name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                    "$",
                    [...teamMembers].sort((a, b) => b.totalRevenue - a.totalRevenue)[0].totalRevenue.toLocaleString(),
                    " ",
                    "revenue"
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  DashboardPage as default
};
