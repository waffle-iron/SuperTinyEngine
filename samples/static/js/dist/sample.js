/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.kickOff = exports.Alignment = undefined;
	
	var _fableCore = __webpack_require__(1);
	
	var _Win = __webpack_require__(2);
	
	var _Loader = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	__webpack_require__(5);
	
	var Alignment = exports.Alignment = function Alignment(caseName, fieldsLength) {
	  _classCallCheck(this, Alignment);
	
	  this.Case = caseName;
	  this.Fields = [];
	
	  for (var i = 0; i < fieldsLength; i++) {
	    this.Fields[i] = arguments[i + 2];
	  }
	};
	
	_fableCore.Util.setInterfaces(Alignment.prototype, [], "Herebris.Sample.Main.Alignment");
	
	var kickOff = exports.kickOff = function (value) {
	  var win = new _Win.Window("game");
	  console.log(win.Id);
	};
	
	(0, _Loader.GetSpriteSheetsImageFromJson)("/static/game/assets/spritesheets/tiles/spritesheet_tiles.json", function (value) {
	  kickOff(value);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports);
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports);
	        global.fableCore = mod.exports;
	    }
	})(this, function (exports) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.Tuple = Tuple;
	    exports.Tuple3 = Tuple3;
	
	    var _slicedToArray = function () {
	        function sliceIterator(arr, i) {
	            var _arr = [];
	            var _n = true;
	            var _d = false;
	            var _e = undefined;
	
	            try {
	                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	                    _arr.push(_s.value);
	
	                    if (i && _arr.length === i) break;
	                }
	            } catch (err) {
	                _d = true;
	                _e = err;
	            } finally {
	                try {
	                    if (!_n && _i["return"]) _i["return"]();
	                } finally {
	                    if (_d) throw _e;
	                }
	            }
	
	            return _arr;
	        }
	
	        return function (arr, i) {
	            if (Array.isArray(arr)) {
	                return arr;
	            } else if (Symbol.iterator in Object(arr)) {
	                return sliceIterator(arr, i);
	            } else {
	                throw new TypeError("Invalid attempt to destructure non-iterable instance");
	            }
	        };
	    }();
	
	    function _defineProperty(obj, key, value) {
	        if (key in obj) {
	            Object.defineProperty(obj, key, {
	                value: value,
	                enumerable: true,
	                configurable: true,
	                writable: true
	            });
	        } else {
	            obj[key] = value;
	        }
	
	        return obj;
	    }
	
	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }
	
	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }
	
	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }
	
	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	    };
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    var FSymbol = {
	        interfaces: Symbol("interfaces"),
	        typeName: Symbol("typeName")
	    };
	    exports.Symbol = FSymbol;
	
	    var Choice = exports.Choice = function () {
	        function Choice(t, c, d) {
	            _classCallCheck(this, Choice);
	
	            this.Case = t;
	            this.Fields = [d];
	        }
	
	        Choice.Choice1Of2 = function Choice1Of2(v) {
	            return new Choice("Choice1Of2", 1, v);
	        };
	
	        Choice.Choice2Of2 = function Choice2Of2(v) {
	            return new Choice("Choice2Of2", 1, v);
	        };
	
	        _createClass(Choice, [{
	            key: "valueIfChoice1",
	            get: function get() {
	                return this.Case === "Choice1Of2" ? this.Fields[0] : null;
	            }
	        }, {
	            key: "valueIfChoice2",
	            get: function get() {
	                return this.Case === "Choice2Of2" ? this.Fields[0] : null;
	            }
	        }]);
	
	        return Choice;
	    }();
	
	    function Tuple(x, y) {
	        return [x, y];
	    }
	    function Tuple3(x, y, z) {
	        return [x, y, z];
	    }
	
	    var Util = exports.Util = function () {
	        function Util() {
	            _classCallCheck(this, Util);
	        }
	
	        // For legacy reasons the name is kept, but this method also adds
	        // the type name to a cache. Use it after declaration:
	        // Util.setInterfaces(Foo.prototype, ["IFoo", "IBar"], "MyModule.Foo");
	
	        Util.setInterfaces = function setInterfaces(proto, interfaces, typeName) {
	            if (Array.isArray(interfaces) && interfaces.length > 0) {
	                var currentInterfaces = proto[FSymbol.interfaces];
	                if (Array.isArray(currentInterfaces)) {
	                    for (var i = 0; i < interfaces.length; i++) {
	                        currentInterfaces.push(interfaces[i]);
	                    }
	                } else proto[FSymbol.interfaces] = interfaces;
	            }
	            if (typeName) {
	                proto[FSymbol.typeName] = typeName;
	                Util.__types.set(typeName, proto.constructor);
	            }
	        };
	
	        Util.hasInterface = function hasInterface(obj, interfaceName) {
	            return Array.isArray(obj[FSymbol.interfaces]) && obj[FSymbol.interfaces].indexOf(interfaceName) >= 0;
	        };
	
	        Util.getRestParams = function getRestParams(args, idx) {
	            for (var _len = args.length, restArgs = Array(_len > idx ? _len - idx : 0), _key = idx; _key < _len; _key++) {
	                restArgs[_key - idx] = args[_key];
	            }return restArgs;
	        };
	
	        Util.compareTo = function compareTo(x, y) {
	            function isCollectionComparable(o) {
	                return Array.isArray(o) || ArrayBuffer.isView(o) || o instanceof List || o instanceof Map || o instanceof Set;
	            }
	            function sortIfMapOrSet(o) {
	                return o instanceof Map || o instanceof Set ? Array.from(o).sort() : o;
	            }
	            // Return 0 if both are null or undefined
	            if (x == null && y == null) return 0;
	            if ((typeof x === "undefined" ? "undefined" : _typeof(x)) !== (typeof y === "undefined" ? "undefined" : _typeof(y))) return -1;
	            if (x != null && y != null && (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && (typeof y === "undefined" ? "undefined" : _typeof(y)) === "object") {
	                if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) return -1;
	                if (Util.hasInterface(x, "System.IComparable")) return x.compareTo(y);
	                if (isCollectionComparable(x)) {
	                    var _lengthComp = Util.compareTo(Seq.count(x), Seq.count(y));
	                    return _lengthComp != 0 ? _lengthComp : Seq.fold2(function (prev, v1, v2) {
	                        return prev != 0 ? prev : Util.compareTo(v1, v2);
	                    }, 0, sortIfMapOrSet(x), sortIfMapOrSet(y));
	                }
	                if (x instanceof Date) return x < y ? -1 : x > y ? 1 : 0;
	                var keys1 = Object.getOwnPropertyNames(x),
	                    keys2 = Object.getOwnPropertyNames(y);
	                var lengthComp = Util.compareTo(keys1.length, keys2.length);
	                return lengthComp != 0 ? lengthComp : Seq.fold2(function (prev, k1, k2) {
	                    return prev != 0 ? prev : Util.compareTo(x[k1], y[k2]);
	                }, 0, keys1.sort(), keys2.sort());
	            }
	            return x < y ? -1 : x > y ? 1 : 0;
	        };
	
	        Util.createDisposable = function createDisposable(f) {
	            var disp = { dispose: f };
	            disp[FSymbol.interfaces] = ["System.IDisposable"];
	            return disp;
	        };
	
	        Util.createObj = function createObj(fields) {
	            return Seq.fold(function (acc, kv) {
	                acc[kv[0]] = kv[1];return acc;
	            }, {}, fields);
	        };
	
	        Util.toJson = function toJson(o) {
	            return JSON.stringify(o, function (k, v) {
	                if (ArrayBuffer.isView(v)) return Array.from(v);
	                if ((typeof v === "undefined" ? "undefined" : _typeof(v)) == "object") {
	                    if (v instanceof List || v instanceof Map || v instanceof Set) throw "JSON serialization of List, Map or Set is not supported";
	                    if (v[FSymbol.typeName]) return Object.assign({ __type: v[FSymbol.typeName] }, v);
	                }
	                return v;
	            });
	        };
	
	        Util.ofJson = function ofJson(json) {
	            return JSON.parse(json, function (k, v) {
	                if ((typeof v === "undefined" ? "undefined" : _typeof(v)) == "object" && v.__type) {
	                    var T = Util.__types.get(v.__type);
	                    if (T) {
	                        delete v.__type;
	                        return Object.assign(new T(), v);
	                    }
	                }
	                return v;
	            });
	        };
	
	        return Util;
	    }();
	
	    Util.__types = new Map();
	    Util.toPlainJsObj = function (source) {
	        if (source != null && source.constructor != Object) {
	            var target = {};
	            var props = Object.getOwnPropertyNames(source);
	            for (var i = 0; i < props.length; i++) {
	                target[props[i]] = source[props[i]];
	            }
	            // Copy also properties from prototype, see #192
	            var proto = Object.getPrototypeOf(source);
	            if (proto != null) {
	                props = Object.getOwnPropertyNames(proto);
	                for (var _i = 0; _i < props.length; _i++) {
	                    var prop = Object.getOwnPropertyDescriptor(proto, props[_i]);
	                    if (prop.value) {
	                        target[props[_i]] = prop.value;
	                    } else if (prop.get) {
	                        target[props[_i]] = prop.get.apply(source);
	                    }
	                }
	            }
	            return target;
	        } else {
	            return source;
	        }
	    };
	
	    var TimeSpan = exports.TimeSpan = function (_Number) {
	        _inherits(TimeSpan, _Number);
	
	        function TimeSpan() {
	            _classCallCheck(this, TimeSpan);
	
	            return _possibleConstructorReturn(this, _Number.apply(this, arguments));
	        }
	
	        TimeSpan.create = function create() {
	            var d = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	            var h = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var m = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	            var s = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	            var ms = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	
	            switch (arguments.length) {
	                case 1:
	                    // ticks
	                    return this.fromTicks(arguments[0]);
	                case 3:
	                    // h,m,s
	                    d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
	                    break;
	                default:
	                    // d,h,m,s,ms
	                    d = arguments[0], h = arguments[1], m = arguments[2], s = arguments[3], ms = arguments[4] || 0;
	                    break;
	            }
	            return d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms;
	        };
	
	        TimeSpan.fromTicks = function fromTicks(ticks) {
	            return ticks / 10000;
	        };
	
	        TimeSpan.fromDays = function fromDays(d) {
	            return TimeSpan.create(d, 0, 0, 0);
	        };
	
	        TimeSpan.fromHours = function fromHours(h) {
	            return TimeSpan.create(h, 0, 0);
	        };
	
	        TimeSpan.fromMinutes = function fromMinutes(m) {
	            return TimeSpan.create(0, m, 0);
	        };
	
	        TimeSpan.fromSeconds = function fromSeconds(s) {
	            return TimeSpan.create(0, 0, s);
	        };
	
	        TimeSpan.days = function days(ts) {
	            return Math.floor(ts / 86400000);
	        };
	
	        TimeSpan.hours = function hours(ts) {
	            return Math.floor(ts % 86400000 / 3600000);
	        };
	
	        TimeSpan.minutes = function minutes(ts) {
	            return Math.floor(ts % 3600000 / 60000);
	        };
	
	        TimeSpan.seconds = function seconds(ts) {
	            return Math.floor(ts % 60000 / 1000);
	        };
	
	        TimeSpan.milliseconds = function milliseconds(ts) {
	            return Math.floor(ts % 1000);
	        };
	
	        TimeSpan.ticks = function ticks(ts) {
	            return ts * 10000;
	        };
	
	        TimeSpan.totalDays = function totalDays(ts) {
	            return ts / 86400000;
	        };
	
	        TimeSpan.totalHours = function totalHours(ts) {
	            return ts / 3600000;
	        };
	
	        TimeSpan.totalMinutes = function totalMinutes(ts) {
	            return ts / 60000;
	        };
	
	        TimeSpan.totalSeconds = function totalSeconds(ts) {
	            return ts / 1000;
	        };
	
	        TimeSpan.negate = function negate(ts) {
	            return ts * -1;
	        };
	
	        TimeSpan.add = function add(ts1, ts2) {
	            return ts1 + ts2;
	        };
	
	        TimeSpan.subtract = function subtract(ts1, ts2) {
	            return ts1 - ts2;
	        };
	
	        return TimeSpan;
	    }(Number);
	
	    TimeSpan.compare = Util.compareTo;
	    TimeSpan.compareTo = Util.compareTo;
	    TimeSpan.duration = Math.abs;
	    var DateKind = exports.DateKind = undefined;
	    (function (DateKind) {
	        DateKind[DateKind["UTC"] = 1] = "UTC";
	        DateKind[DateKind["Local"] = 2] = "Local";
	    })(DateKind || (exports.DateKind = DateKind = {}));
	
	    var FDate = function (_Date) {
	        _inherits(FDate, _Date);
	
	        function FDate() {
	            _classCallCheck(this, FDate);
	
	            return _possibleConstructorReturn(this, _Date.apply(this, arguments));
	        }
	
	        FDate.__changeKind = function __changeKind(d, kind) {
	            var d2 = void 0;
	            return d.kind == kind ? d : (d2 = new Date(d.getTime()), d2.kind = kind, d2);
	        };
	
	        FDate.__getValue = function __getValue(d, key) {
	            return d[(d.kind == DateKind.UTC ? "getUTC" : "get") + key]();
	        };
	
	        FDate.minValue = function minValue() {
	            return FDate.parse(-8640000000000000, 1);
	        };
	
	        FDate.maxValue = function maxValue() {
	            return FDate.parse(8640000000000000, 1);
	        };
	
	        FDate.parse = function parse(v, kind) {
	            var date = v == null ? new Date() : new Date(v);
	            if (isNaN(date.getTime())) throw "The string is not a valid Date.";
	            date.kind = kind || DateKind.Local;
	            return date;
	        };
	
	        FDate.create = function create(year, month, day) {
	            var h = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	            var m = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	            var s = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
	            var ms = arguments.length <= 6 || arguments[6] === undefined ? 0 : arguments[6];
	            var kind = arguments.length <= 7 || arguments[7] === undefined ? DateKind.Local : arguments[7];
	
	            var date = kind === DateKind.UTC ? new Date(Date.UTC(year, month - 1, day, h, m, s, ms)) : new Date(year, month - 1, day, h, m, s, ms);
	            if (isNaN(date.getTime())) throw "The parameters describe an unrepresentable Date.";
	            date.kind = kind;
	            return date;
	        };
	
	        FDate.utcNow = function utcNow() {
	            return FDate.parse(null, 1);
	        };
	
	        FDate.today = function today() {
	            return FDate.date(FDate.now());
	        };
	
	        FDate.isLeapYear = function isLeapYear(year) {
	            return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	        };
	
	        FDate.daysInMonth = function daysInMonth(year, month) {
	            return month == 2 ? FDate.isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 == 0 ? 31 : 30 : month % 2 == 0 ? 30 : 31;
	        };
	
	        FDate.toUniversalTime = function toUniversalTime(d) {
	            return FDate.__changeKind(d, 1);
	        };
	
	        FDate.toLocalTime = function toLocalTime(d) {
	            return FDate.__changeKind(d, 2);
	        };
	
	        FDate.timeOfDay = function timeOfDay(d) {
	            return TimeSpan.create(FDate.hour(d), FDate.minute(d), FDate.second(d));
	        };
	
	        FDate.date = function date(d) {
	            return FDate.create(FDate.year(d), FDate.month(d), FDate.day(d), 0, 0, 0, 0, d.kind);
	        };
	
	        FDate.day = function day(d) {
	            return FDate.__getValue(d, "Date");
	        };
	
	        FDate.hour = function hour(d) {
	            return FDate.__getValue(d, "Hours");
	        };
	
	        FDate.millisecond = function millisecond(d) {
	            return FDate.__getValue(d, "Milliseconds");
	        };
	
	        FDate.minute = function minute(d) {
	            return FDate.__getValue(d, "Minutes");
	        };
	
	        FDate.month = function month(d) {
	            return FDate.__getValue(d, "Month") + 1;
	        };
	
	        FDate.second = function second(d) {
	            return FDate.__getValue(d, "Seconds");
	        };
	
	        FDate.year = function year(d) {
	            return FDate.__getValue(d, "FullYear");
	        };
	
	        FDate.ticks = function ticks(d) {
	            return (d.getTime() + 6.2135604e+13 /* millisecondsJSOffset */) * 10000;
	        };
	
	        FDate.dayOfWeek = function dayOfWeek(d) {
	            return FDate.__getValue(d, "Day");
	        };
	
	        FDate.dayOfYear = function dayOfYear(d) {
	            var year = FDate.year(d);
	            var month = FDate.month(d);
	            var day = FDate.day(d);
	            for (var i = 1; i < month; i++) {
	                day += FDate.daysInMonth(year, i);
	            }return day;
	        };
	
	        FDate.add = function add(d, ts) {
	            return FDate.parse(d.getTime() + ts, d.kind);
	        };
	
	        FDate.addDays = function addDays(d, v) {
	            return FDate.parse(d.getTime() + v * 86400000, d.kind);
	        };
	
	        FDate.addHours = function addHours(d, v) {
	            return FDate.parse(d.getTime() + v * 3600000, d.kind);
	        };
	
	        FDate.addMinutes = function addMinutes(d, v) {
	            return FDate.parse(d.getTime() + v * 60000, d.kind);
	        };
	
	        FDate.addSeconds = function addSeconds(d, v) {
	            return FDate.parse(d.getTime() + v * 1000, d.kind);
	        };
	
	        FDate.addMilliseconds = function addMilliseconds(d, v) {
	            return FDate.parse(d.getTime() + v, d.kind);
	        };
	
	        FDate.addTicks = function addTicks(d, v) {
	            return FDate.parse(d.getTime() + v / 10000, d.kind);
	        };
	
	        FDate.addYears = function addYears(d, v) {
	            var newMonth = FDate.month(d);
	            var newYear = FDate.year(d) + v;
	            var daysInMonth = FDate.daysInMonth(newYear, newMonth);
	            var newDay = Math.min(daysInMonth, FDate.day(d));
	            return FDate.create(newYear, newMonth, newDay, FDate.hour(d), FDate.minute(d), FDate.second(d), FDate.millisecond(d), d.kind);
	        };
	
	        FDate.addMonths = function addMonths(d, v) {
	            var newMonth = FDate.month(d) + v;
	            var newMonth_ = 0;
	            var yearOffset = 0;
	            if (newMonth > 12) {
	                newMonth_ = newMonth % 12;
	                yearOffset = Math.floor(newMonth / 12);
	                newMonth = newMonth_;
	            } else if (newMonth < 1) {
	                newMonth_ = 12 + newMonth % 12;
	                yearOffset = Math.floor(newMonth / 12) + (newMonth_ == 12 ? -1 : 0);
	                newMonth = newMonth_;
	            }
	            var newYear = FDate.year(d) + yearOffset;
	            var daysInMonth = FDate.daysInMonth(newYear, newMonth);
	            var newDay = Math.min(daysInMonth, FDate.day(d));
	            return FDate.create(newYear, newMonth, newDay, FDate.hour(d), FDate.minute(d), FDate.second(d), FDate.millisecond(d), d.kind);
	        };
	
	        FDate.subtract = function subtract(d, that) {
	            return typeof that == "number" ? FDate.parse(d.getTime() - that, d.kind) : d.getTime() - that.getTime();
	        };
	
	        FDate.toLongDateString = function toLongDateString(d) {
	            return d.toDateString();
	        };
	
	        FDate.toShortDateString = function toShortDateString(d) {
	            return d.toLocaleDateString();
	        };
	
	        FDate.toLongTimeString = function toLongTimeString(d) {
	            return d.toLocaleTimeString();
	        };
	
	        FDate.toShortTimeString = function toShortTimeString(d) {
	            return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
	        };
	
	        FDate.equals = function equals(d1, d2) {
	            return d1.getTime() == d2.getTime();
	        };
	
	        return FDate;
	    }(Date);
	
	    FDate.now = FDate.parse;
	    FDate.toBinary = FDate.ticks;
	    FDate.compareTo = Util.compareTo;
	    FDate.compare = Util.compareTo;
	    FDate.op_Addition = FDate.add;
	    FDate.op_Subtraction = FDate.subtract;
	    exports.Date = FDate;
	
	    var Timer = exports.Timer = function () {
	        function Timer(interval) {
	            _classCallCheck(this, Timer);
	
	            this.interval = interval > 0 ? interval : 100;
	            this.autoReset = true;
	            this._elapsed = new Event();
	        }
	
	        Timer.prototype.dispose = function dispose() {
	            this.enabled = false;
	            this._isDisposed = true;
	        };
	
	        Timer.prototype.close = function close() {
	            this.dispose();
	        };
	
	        Timer.prototype.start = function start() {
	            this.enabled = true;
	        };
	
	        Timer.prototype.stop = function stop() {
	            this.enabled = false;
	        };
	
	        _createClass(Timer, [{
	            key: "elapsed",
	            get: function get() {
	                return this._elapsed;
	            }
	        }, {
	            key: "enabled",
	            get: function get() {
	                return this._enabled;
	            },
	            set: function set(x) {
	                var _this3 = this;
	
	                if (!this._isDisposed && this._enabled != x) {
	                    if (this._enabled = x) {
	                        if (this.autoReset) {
	                            this._intervalId = setInterval(function () {
	                                if (!_this3.autoReset) _this3.enabled = false;
	                                _this3._elapsed.trigger(new Date());
	                            }, this.interval);
	                        } else {
	                            this._timeoutId = setTimeout(function () {
	                                _this3.enabled = false;
	                                _this3._timeoutId = 0;
	                                if (_this3.autoReset) _this3.enabled = true;
	                                _this3._elapsed.trigger(new Date());
	                            }, this.interval);
	                        }
	                    } else {
	                        if (this._timeoutId) {
	                            clearTimeout(this._timeoutId);
	                            this._timeoutId = 0;
	                        }
	                        if (this._intervalId) {
	                            clearInterval(this._intervalId);
	                            this._intervalId = 0;
	                        }
	                    }
	                }
	            }
	        }]);
	
	        return Timer;
	    }();
	
	    Util.setInterfaces(Timer.prototype, ["System.IDisposable"]);
	
	    var FString = function () {
	        function FString() {
	            _classCallCheck(this, FString);
	        }
	
	        FString.fsFormat = function fsFormat(str) {
	            function isObject(x) {
	                return x !== null && (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
	            }
	            function formatOnce(str, rep) {
	                return str.replace(FString.fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
	                    switch (format) {
	                        case "f":
	                        case "F":
	                            rep = rep.toFixed(precision || 6);
	                            break;
	                        case "g":
	                        case "G":
	                            rep = rep.toPrecision(precision);
	                            break;
	                        case "e":
	                        case "E":
	                            rep = rep.toExponential(precision);
	                            break;
	                        case "A":
	                            rep = (rep instanceof Map ? "map " : rep instanceof Set ? "set " : "") + JSON.stringify(rep, function (k, v) {
	                                return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v) : v;
	                            });
	                            break;
	                    }
	                    var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep) >= 0;
	                    if (!isNaN(pad = parseInt(pad))) {
	                        var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
	                        rep = FString.padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
	                    }
	                    return prefix + (plusPrefix ? "+" + rep : rep);
	                });
	            }
	            function makeFn(str) {
	                return function (rep) {
	                    var str2 = formatOnce(str, rep);
	                    return FString.fsFormatRegExp.test(str2) ? makeFn(str2) : _cont(str2.replace(/%%/g, "%"));
	                };
	            }
	            var _cont = void 0;
	            return function (cont) {
	                _cont = cont;
	                return FString.fsFormatRegExp.test(str) ? makeFn(str) : _cont(str);
	            };
	        };
	
	        FString.format = function format(str) {
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	            }
	
	            return str.replace(FString.formatRegExp, function (match, idx, pad, format) {
	                var rep = args[idx];
	                if (typeof rep === "number") {
	                    switch ((format || "").substring(0, 1)) {
	                        case "f":
	                        case "F":
	                            rep = format.length > 1 ? rep.toFixed(format.substring(1)) : rep.toFixed(2);
	                            break;
	                        case "g":
	                        case "G":
	                            rep = format.length > 1 ? rep.toPrecision(format.substring(1)) : rep.toPrecision();
	                            break;
	                        case "e":
	                        case "E":
	                            rep = format.length > 1 ? rep.toExponential(format.substring(1)) : rep.toExponential();
	                            break;
	                        case "p":
	                        case "P":
	                            rep = (format.length > 1 ? (rep * 100).toFixed(format.substring(1)) : (rep * 100).toFixed(2)) + " %";
	                            break;
	                    }
	                } else if (rep instanceof Date) {
	                    if (format.length === 1) {
	                        switch (format) {
	                            case "D":
	                                rep = rep.toDateString();
	                                break;
	                            case "T":
	                                rep = rep.toLocaleTimeString();
	                                break;
	                            case "d":
	                                rep = rep.toLocaleDateString();
	                                break;
	                            case "t":
	                                rep = rep.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
	                                break;
	                        }
	                    }
	                    rep = format.replace(/\w+/g, function (match2) {
	                        var rep2 = match2;
	                        switch (match2.substring(0, 1)) {
	                            case "y":
	                                rep2 = match2.length < 4 ? FDate.year(rep) % 100 : FDate.year(rep);
	                                break;
	                            case "h":
	                                rep2 = rep.getHours() > 12 ? FDate.hour(rep) % 12 : FDate.hour(rep);
	                                break;
	                            case "M":
	                                rep2 = FDate.month(rep);
	                                break;
	                            case "d":
	                                rep2 = FDate.day(rep);
	                                break;
	                            case "H":
	                                rep2 = FDate.hour(rep);
	                                break;
	                            case "m":
	                                rep2 = FDate.minute(rep);
	                                break;
	                            case "s":
	                                rep2 = FDate.second(rep);
	                                break;
	                        }
	                        if (rep2 !== match2 && rep2 < 10 && match2.length > 1) {
	                            rep2 = "0" + rep2;
	                        }
	                        return rep2;
	                    });
	                }
	                if (!isNaN(pad = parseInt((pad || "").substring(1)))) {
	                    rep = FString.padLeft(rep, Math.abs(pad), " ", pad < 0);
	                }
	                return rep;
	            });
	        };
	
	        FString.endsWith = function endsWith(str, search) {
	            var idx = str.lastIndexOf(search);
	            return idx >= 0 && idx == str.length - search.length;
	        };
	
	        FString.init = function init(n, f) {
	            if (n < 0) throw "String length must be non-negative";
	            var xs = new Array(n);
	            for (var i = 0; i < n; i++) {
	                xs[i] = f(i);
	            }return xs.join("");
	        };
	
	        FString.isNullOrEmpty = function isNullOrEmpty(str) {
	            return typeof str !== "string" || str.length == 0;
	        };
	
	        FString.isNullOrWhiteSpace = function isNullOrWhiteSpace(str) {
	            return typeof str !== "string" || /^\s*$/.test(str);
	        };
	
	        FString.join = function join(delimiter, xs) {
	            xs = typeof xs == "string" ? Util.getRestParams(arguments, 1) : xs;
	            return (Array.isArray(xs) ? xs : Array.from(xs)).join(delimiter);
	        };
	
	        FString.newGuid = function newGuid() {
	            var uuid = "";
	            for (var i = 0; i < 32; i++) {
	                var random = Math.random() * 16 | 0;
	                if (i === 8 || i === 12 || i === 16 || i === 20) uuid += "-";
	                uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
	            }
	            return uuid;
	        };
	
	        FString.padLeft = function padLeft(str, len, ch, isRight) {
	            ch = ch || " ";
	            str = String(str);
	            len = len - str.length;
	            for (var i = -1; ++i < len;) {
	                str = isRight ? str + ch : ch + str;
	            }return str;
	        };
	
	        FString.padRight = function padRight(str, len, ch) {
	            return FString.padLeft(str, len, ch, true);
	        };
	
	        FString.replace = function replace(str, search, _replace) {
	            return str.replace(new RegExp(FRegExp.escape(search), "g"), _replace);
	        };
	
	        FString.replicate = function replicate(n, x) {
	            return FString.init(n, function () {
	                return x;
	            });
	        };
	
	        FString.split = function split(str, splitters, count, removeEmpty) {
	            count = typeof count == "number" ? count : null;
	            removeEmpty = typeof removeEmpty == "number" ? removeEmpty : null;
	            if (count < 0) throw "Count cannot be less than zero";
	            if (count === 0) return [];
	            splitters = Array.isArray(splitters) ? splitters : Util.getRestParams(arguments, 1);
	            splitters = splitters.map(function (x) {
	                return FRegExp.escape(x);
	            });
	            splitters = splitters.length > 0 ? splitters : [" "];
	            var m = void 0;
	            var i = 0;
	            var splits = [];
	            var reg = new RegExp(splitters.join("|"), "g");
	            while ((count == null || count > 1) && (m = reg.exec(str)) !== null) {
	                if (!removeEmpty || m.index - i > 0) {
	                    count = count != null ? count - 1 : count;
	                    splits.push(str.substring(i, m.index));
	                }
	                i = reg.lastIndex;
	            }
	            if (!removeEmpty || str.length - i > 0) splits.push(str.substring(i));
	            return splits;
	        };
	
	        FString.trim = function trim(str, side) {
	            for (var _len3 = arguments.length, chars = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	                chars[_key3 - 2] = arguments[_key3];
	            }
	
	            if (side == "both" && chars.length == 0) return str.trim();
	            if (side == "start" || side == "both") {
	                var reg = chars.length == 0 ? /^\s+/ : new RegExp("^[" + FRegExp.escape(chars.join("")) + "]+");
	                str = str.replace(reg, "");
	            }
	            if (side == "end" || side == "both") {
	                var _reg = chars.length == 0 ? /\s+$/ : new RegExp("[" + FRegExp.escape(chars.join("")) + "]+$");
	                str = str.replace(_reg, "");
	            }
	            return str;
	        };
	
	        return FString;
	    }();
	
	    FString.fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
	    FString.formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
	    FString.concat = FString.join;
	    exports.String = FString;
	
	    var FRegExp = function () {
	        function FRegExp() {
	            _classCallCheck(this, FRegExp);
	        }
	
	        FRegExp.create = function create(pattern, options) {
	            var flags = "g";
	            flags += options & 1 ? "i" : "";
	            flags += options & 2 ? "m" : "";
	            return new RegExp(pattern, flags);
	        };
	
	        FRegExp.escape = function escape(str) {
	            return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	        };
	
	        FRegExp.unescape = function unescape(str) {
	            return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
	        };
	
	        FRegExp.isMatch = function isMatch(str, pattern) {
	            var options = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	            var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = FRegExp.create(pattern, options);
	            return reg.test(str);
	        };
	
	        FRegExp.match = function match(str, pattern) {
	            var options = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	            var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = FRegExp.create(pattern, options);
	            return reg.exec(str);
	        };
	
	        FRegExp.matches = function matches(str, pattern) {
	            var options = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	            var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = FRegExp.create(pattern, options);
	            if (!reg.global) throw "Non-global RegExp"; // Prevent infinite loop
	            var m = void 0;
	            var matches = [];
	            while ((m = reg.exec(str)) !== null) {
	                matches.push(m);
	            }return matches;
	        };
	
	        FRegExp.options = function options(reg) {
	            var options = 256; // ECMAScript
	            options |= reg.ignoreCase ? 1 : 0;
	            options |= reg.multiline ? 2 : 0;
	            return options;
	        };
	
	        FRegExp.replace = function replace(reg, input, replacement, limit) {
	            var offset = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	
	            function replacer() {
	                var res = arguments[0];
	                if (limit !== 0) {
	                    limit--;
	                    var match = [];
	                    var len = arguments.length;
	                    for (var i = 0; i < len - 2; i++) {
	                        match.push(arguments[i]);
	                    }match.index = arguments[len - 2];
	                    match.input = arguments[len - 1];
	                    res = replacement(match);
	                }
	                return res;
	            }
	            if (typeof reg == "string") {
	                var tmp = reg;
	                reg = FRegExp.create(input, limit);
	                input = tmp;
	                limit = undefined;
	            }
	            if (typeof replacement == "function") {
	                limit = limit == null ? -1 : limit;
	                return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
	            } else {
	                if (limit != null) {
	                    var m = void 0;
	                    var sub1 = input.substring(offset);
	                    var matches = FRegExp.matches(reg, sub1);
	                    var sub2 = matches.length > limit ? (m = matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
	                    return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
	                } else {
	                    return input.replace(reg, replacement);
	                }
	            }
	        };
	
	        FRegExp.split = function split(reg, input, limit) {
	            var offset = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	
	            if (typeof reg == "string") {
	                var tmp = reg;
	                reg = FRegExp.create(input, limit);
	                input = tmp;
	                limit = undefined;
	            }
	            input = input.substring(offset);
	            return input.split(reg, limit);
	        };
	
	        return FRegExp;
	    }();
	
	    exports.RegExp = FRegExp;
	
	    var FArray = function () {
	        function FArray() {
	            _classCallCheck(this, FArray);
	        }
	
	        FArray.addRangeInPlace = function addRangeInPlace(range, xs) {
	            Seq.iter(function (x) {
	                return xs.push(x);
	            }, range);
	        };
	
	        FArray.blit = function blit(source, sourceIndex, target, targetIndex, count) {
	            while (count--) {
	                target[targetIndex++] = source[sourceIndex++];
	            }
	        };
	
	        FArray.partition = function partition(f, xs) {
	            var ys = [],
	                zs = [],
	                j = 0,
	                k = 0;
	            for (var i = 0; i < xs.length; i++) {
	                if (f(xs[i])) ys[j++] = xs[i];else zs[k++] = xs[i];
	            }return Tuple(ys, zs);
	        };
	
	        FArray.permute = function permute(f, xs) {
	            // Keep the type of the array
	            var ys = xs.map(function () {
	                return null;
	            });
	            var checkFlags = new Array(xs.length);
	            for (var i = 0; i < xs.length; i++) {
	                var j = f(i);
	                if (j < 0 || j >= xs.length) throw "Not a valid permutation";
	                ys[j] = xs[i];
	                checkFlags[j] = 1;
	            }
	            for (var _i2 = 0; _i2 < xs.length; _i2++) {
	                if (checkFlags[_i2] != 1) throw "Not a valid permutation";
	            }return ys;
	        };
	
	        FArray.removeInPlace = function removeInPlace(item, xs) {
	            var i = xs.indexOf(item);
	            if (i > -1) {
	                xs.splice(i, 1);
	                return true;
	            }
	            return false;
	        };
	
	        FArray.setSlice = function setSlice(target, lower, upper, source) {
	            var length = (upper || target.length - 1) - lower;
	            if (ArrayBuffer.isView(target) && source.length <= length) target.set(source, lower);else for (var i = lower | 0, j = 0; j <= length; i++, j++) {
	                target[i] = source[j];
	            }
	        };
	
	        FArray.sortInPlaceBy = function sortInPlaceBy(f, xs) {
	            var dir = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	            return xs.sort(function (x, y) {
	                x = f(x);
	                y = f(y);
	                return (x < y ? -1 : x == y ? 0 : 1) * dir;
	            });
	        };
	
	        FArray.unzip = function unzip(xs) {
	            var bs = new Array(xs.length),
	                cs = new Array(xs.length);
	            for (var i = 0; i < xs.length; i++) {
	                bs[i] = xs[i][0];
	                cs[i] = xs[i][1];
	            }
	            return Tuple(bs, cs);
	        };
	
	        FArray.unzip3 = function unzip3(xs) {
	            var bs = new Array(xs.length),
	                cs = new Array(xs.length),
	                ds = new Array(xs.length);
	            for (var i = 0; i < xs.length; i++) {
	                bs[i] = xs[i][0];
	                cs[i] = xs[i][1];
	                ds[i] = xs[i][2];
	            }
	            return Tuple3(bs, cs, ds);
	        };
	
	        return FArray;
	    }();
	
	    exports.Array = FArray;
	
	    var List = exports.List = function () {
	        function List(head, tail) {
	            _classCallCheck(this, List);
	
	            this.head = head;
	            this.tail = tail;
	        }
	
	        List.ofArray = function ofArray(args, base) {
	            var acc = base || new List();
	            for (var i = args.length - 1; i >= 0; i--) {
	                acc = new List(args[i], acc);
	            }
	            return acc;
	        };
	
	        List.prototype[Symbol.iterator] = function () {
	            var cur = this;
	            return {
	                next: function next() {
	                    var tmp = cur;
	                    cur = cur.tail;
	                    return { done: tmp.tail == null, value: tmp.head };
	                }
	            };
	        };
	
	        List.prototype.append = function append(ys) {
	            return List.append(this, ys);
	        };
	
	        List.append = function append(xs, ys) {
	            return Seq.fold(function (acc, x) {
	                return new List(x, acc);
	            }, ys, List.rev(xs));
	        };
	
	        List.prototype.choose = function choose(f, xs) {
	            return List.choose(f, this);
	        };
	
	        List.choose = function choose(f, xs) {
	            var r = Seq.fold(function (acc, x) {
	                var y = f(x);
	                return y != null ? new List(y, acc) : acc;
	            }, new List(), xs);
	            return List.rev(r);
	        };
	
	        List.prototype.collect = function collect(f) {
	            return List.collect(f, this);
	        };
	
	        List.collect = function collect(f, xs) {
	            return Seq.fold(function (acc, x) {
	                return acc.append(f(x));
	            }, new List(), xs);
	        };
	        // TODO: should be xs: Iterable<List<T>>
	
	
	        List.concat = function concat(xs) {
	            return List.collect(function (x) {
	                return x;
	            }, xs);
	        };
	
	        List.prototype.filter = function filter(f) {
	            return List.filter(f, this);
	        };
	
	        List.filter = function filter(f, xs) {
	            return List.rev(Seq.fold(function (acc, x) {
	                return f(x) ? new List(x, acc) : acc;
	            }, new List(), xs));
	        };
	
	        List.prototype.where = function where(f) {
	            return List.filter(f, this);
	        };
	
	        List.where = function where(f, xs) {
	            return List.filter(f, xs);
	        };
	
	        List.init = function init(n, f) {
	            if (n < 0) {
	                throw "List length must be non-negative";
	            }
	            var xs = new List();
	            for (var i = 1; i <= n; i++) {
	                xs = new List(f(n - i), xs);
	            }
	            return xs;
	        };
	
	        List.prototype.map = function map(f) {
	            return List.map(f, this);
	        };
	
	        List.map = function map(f, xs) {
	            return List.rev(Seq.fold(function (acc, x) {
	                return new List(f(x), acc);
	            }, new List(), xs));
	        };
	
	        List.prototype.mapi = function mapi(f) {
	            return List.mapi(f, this);
	        };
	
	        List.mapi = function mapi(f, xs) {
	            return List.rev(Seq.fold(function (acc, x, i) {
	                return new List(f(i, x), acc);
	            }, new List(), xs));
	        };
	
	        List.prototype.partition = function partition(f) {
	            return List.partition(f, this);
	        };
	
	        List.partition = function partition(f, xs) {
	            return Seq.fold(function (acc, x) {
	                var lacc = acc[0],
	                    racc = acc[1];
	                return f(x) ? Tuple(new List(x, lacc), racc) : Tuple(lacc, new List(x, racc));
	            }, Tuple(new List(), new List()), List.rev(xs));
	        };
	
	        List.replicate = function replicate(n, x) {
	            return List.init(n, function () {
	                return x;
	            });
	        };
	
	        List.prototype.rev = function rev() {
	            return List.rev(this);
	        };
	
	        List.rev = function rev(xs) {
	            return Seq.fold(function (acc, x) {
	                return new List(x, acc);
	            }, new List(), xs);
	        };
	
	        List.singleton = function singleton(x) {
	            return new List(x, new List());
	        };
	
	        List.prototype.slice = function slice(lower, upper) {
	            return List.slice(lower, upper, this);
	        };
	
	        List.slice = function slice(lower, upper, xs) {
	            var noLower = lower == null;
	            var noUpper = upper == null;
	            return List.rev(Seq.fold(function (acc, x, i) {
	                return (noLower || lower <= i) && (noUpper || i <= upper) ? new List(x, acc) : acc;
	            }, new List(), xs));
	        };
	        /* ToDo: instance unzip() */
	
	
	        List.unzip = function unzip(xs) {
	            return Seq.foldBack(function (xy, acc) {
	                return Tuple(new List(xy[0], acc[0]), new List(xy[1], acc[1]));
	            }, xs, Tuple(new List(), new List()));
	        };
	        /* ToDo: instance unzip3() */
	
	
	        List.unzip3 = function unzip3(xs) {
	            return Seq.foldBack(function (xyz, acc) {
	                return Tuple3(new List(xyz[0], acc[0]), new List(xyz[1], acc[1]), new List(xyz[2], acc[2]));
	            }, xs, Tuple3(new List(), new List(), new List()));
	        };
	
	        _createClass(List, [{
	            key: "length",
	            get: function get() {
	                return Seq.fold(function (acc, x) {
	                    return acc + 1;
	                }, 0, this);
	            }
	        }]);
	
	        return List;
	    }();
	
	    var Seq = exports.Seq = function () {
	        function Seq() {
	            _classCallCheck(this, Seq);
	        }
	
	        Seq.__failIfNone = function __failIfNone(res) {
	            if (res == null) throw "Seq did not contain any matching element";
	            return res;
	        };
	
	        Seq.toList = function toList(xs) {
	            return Seq.foldBack(function (x, acc) {
	                return new List(x, acc);
	            }, xs, new List());
	        };
	
	        Seq.ofList = function ofList(xs) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (x) {
	                    return x.tail != null ? [x.head, x.tail] : null;
	                }, xs);
	            });
	        };
	
	        Seq.ofArray = function ofArray(xs) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (i) {
	                    return i < xs.length ? [xs[i], i + 1] : null;
	                }, 0);
	            });
	        };
	
	        Seq.append = function append(xs, ys) {
	            return Seq.delay(function () {
	                var firstDone = false;
	                var i = xs[Symbol.iterator]();
	                var iters = Tuple(i, null);
	                return Seq.unfold(function () {
	                    var cur = void 0;
	                    if (!firstDone) {
	                        cur = iters[0].next();
	                        if (!cur.done) {
	                            return [cur.value, iters];
	                        } else {
	                            firstDone = true;
	                            iters = [null, ys[Symbol.iterator]()];
	                        }
	                    }
	                    cur = iters[1].next();
	                    return !cur.done ? [cur.value, iters] : null;
	                }, iters);
	            });
	        };
	
	        Seq.average = function average(xs) {
	            var count = 1;
	            var sum = Seq.reduce(function (acc, x) {
	                count++;
	                return acc + x;
	            }, xs);
	            return sum / count;
	        };
	
	        Seq.averageBy = function averageBy(f, xs) {
	            var count = 1;
	            var sum = Seq.reduce(function (acc, x) {
	                count++;
	                return (count === 2 ? f(acc) : acc) + f(x);
	            }, xs);
	            return sum / count;
	        };
	
	        Seq.countBy = function countBy(f, xs) {
	            return Seq.map(function (kv) {
	                return Tuple(kv[0], Seq.count(kv[1]));
	            }, Seq.groupBy(f, xs));
	        };
	
	        Seq.concat = function concat(xs) {
	            return Seq.delay(function () {
	                var iter = xs[Symbol.iterator]();
	                var output = null;
	                return Seq.unfold(function (innerIter) {
	                    var hasFinished = false;
	                    while (!hasFinished) {
	                        if (innerIter == null) {
	                            var cur = iter.next();
	                            if (!cur.done) {
	                                innerIter = cur.value[Symbol.iterator]();
	                            } else {
	                                hasFinished = true;
	                            }
	                        } else {
	                            var _cur = innerIter.next();
	                            if (!_cur.done) {
	                                output = _cur.value;
	                                hasFinished = true;
	                            } else {
	                                innerIter = null;
	                            }
	                        }
	                    }
	                    return innerIter != null && output != null ? [output, innerIter] : null;
	                }, null);
	            });
	        };
	
	        Seq.collect = function collect(f, xs) {
	            return Seq.concat(Seq.map(f, xs));
	        };
	
	        Seq.choose = function choose(f, xs) {
	            var trySkipToNext = function trySkipToNext(iter) {
	                var cur = iter.next();
	                if (!cur.done) {
	                    var y = f(cur.value);
	                    return y != null ? Tuple(y, iter) : trySkipToNext(iter);
	                }
	                return void 0;
	            };
	            return Seq.delay(function () {
	                return Seq.unfold(function (iter) {
	                    return trySkipToNext(iter);
	                }, xs[Symbol.iterator]());
	            });
	        };
	
	        Seq.compareWith = function compareWith(f, xs, ys) {
	            var nonZero = Seq.tryFind(function (i) {
	                return i != 0;
	            }, Seq.map2(function (x, y) {
	                return f(x, y);
	            }, xs, ys));
	            return nonZero != null ? nonZero : Seq.count(xs) - Seq.count(ys);
	        };
	
	        Seq.delay = function delay(f) {
	            return _defineProperty({}, Symbol.iterator, function () {
	                return f()[Symbol.iterator]();
	            });
	        };
	
	        Seq.distinctBy = function distinctBy(f, xs) {
	            return Seq.choose(function (tup) {
	                return tup[0];
	            }, Seq.scan(function (tup, x) {
	                var acc = tup[1];
	                var k = f(x);
	                return acc.has(k) ? Tuple(null, acc) : Tuple(x, acc.add(k));
	            }, Tuple(null, new Set()), xs));
	        };
	
	        Seq.distinct = function distinct(xs) {
	            return Seq.distinctBy(function (x) {
	                return x;
	            }, xs);
	        };
	
	        Seq.empty = function empty() {
	            return Seq.unfold(function () {
	                return void 0;
	            });
	        };
	
	        Seq.enumerateWhile = function enumerateWhile(cond, xs) {
	            return Seq.concat(Seq.unfold(function () {
	                return cond() ? [xs, true] : null;
	            }));
	        };
	
	        Seq.enumerateThenFinally = function enumerateThenFinally(xs, finalFn) {
	            return Seq.delay(function () {
	                var iter = void 0;
	                try {
	                    iter = xs[Symbol.iterator]();
	                } finally {
	                    finalFn();
	                }
	                return Seq.unfold(function (iter) {
	                    try {
	                        var cur = iter.next();
	                        return !cur.done ? [cur.value, iter] : null;
	                    } finally {
	                        finalFn();
	                    }
	                    return void 0;
	                }, iter);
	            });
	        };
	
	        Seq.enumerateUsing = function enumerateUsing(disp, work) {
	            var isDisposed = false;
	            var disposeOnce = function disposeOnce() {
	                if (!isDisposed) {
	                    isDisposed = true;
	                    disp.dispose();
	                }
	            };
	            try {
	                return Seq.enumerateThenFinally(work(disp), disposeOnce);
	            } finally {
	                disposeOnce();
	            }
	            return void 0;
	        };
	
	        Seq.exactlyOne = function exactlyOne(xs) {
	            var iter = xs[Symbol.iterator]();
	            var fst = iter.next();
	            if (fst.done) throw "Seq was empty";
	            var snd = iter.next();
	            if (!snd.done) throw "Seq had multiple items";
	            return fst.value;
	        };
	
	        Seq.exists = function exists(f, xs) {
	            function aux(iter) {
	                var cur = iter.next();
	                return !cur.done && (f(cur.value) || aux(iter));
	            }
	            return aux(xs[Symbol.iterator]());
	        };
	
	        Seq.exists2 = function exists2(f, xs, ys) {
	            function aux(iter1, iter2) {
	                var cur1 = iter1.next(),
	                    cur2 = iter2.next();
	                return !cur1.done && !cur2.done && (f(cur1.value, cur2.value) || aux(iter1, iter2));
	            }
	            return aux(xs[Symbol.iterator](), ys[Symbol.iterator]());
	        };
	
	        Seq.filter = function filter(f, xs) {
	            function trySkipToNext(iter) {
	                var cur = iter.next();
	                if (!cur.done) return f(cur.value) ? [cur.value, iter] : trySkipToNext(iter);
	                return void 0;
	            }
	            return Seq.delay(function () {
	                return Seq.unfold(trySkipToNext, xs[Symbol.iterator]());
	            });
	        };
	
	        Seq.where = function where(f, xs) {
	            return Seq.filter(f, xs);
	        };
	
	        Seq.fold = function fold(f, acc, xs) {
	            if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
	                return xs.reduce(f, acc);
	            } else {
	                var cur = void 0;
	                for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                    cur = iter.next();
	                    if (cur.done) break;
	                    acc = f(acc, cur.value, i);
	                }
	                return acc;
	            }
	        };
	
	        Seq.foldBack = function foldBack(f, xs, acc) {
	            var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	            for (var i = arr.length - 1; i >= 0; i--) {
	                acc = f(arr[i], acc, i);
	            }
	            return acc;
	        };
	
	        Seq.fold2 = function fold2(f, acc, xs, ys) {
	            var iter1 = xs[Symbol.iterator](),
	                iter2 = ys[Symbol.iterator]();
	            var cur1 = void 0,
	                cur2 = void 0;
	            for (var i = 0;; i++) {
	                cur1 = iter1.next();
	                cur2 = iter2.next();
	                if (cur1.done || cur2.done) {
	                    break;
	                }
	                acc = f(acc, cur1.value, cur2.value, i);
	            }
	            return acc;
	        };
	
	        Seq.foldBack2 = function foldBack2(f, xs, ys, acc) {
	            var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	            var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
	            for (var i = ar1.length - 1; i >= 0; i--) {
	                acc = f(ar1[i], ar2[i], acc, i);
	            }
	            return acc;
	        };
	
	        Seq.forall = function forall(f, xs) {
	            return Seq.fold(function (acc, x) {
	                return acc && f(x);
	            }, true, xs);
	        };
	
	        Seq.forall2 = function forall2(f, xs, ys) {
	            return Seq.fold2(function (acc, x, y) {
	                return acc && f(x, y);
	            }, true, xs, ys);
	        };
	        // TODO: Should return a Iterable<Tuple<K, Iterable<T>>> instead of a Map<K, Iterable<T>>
	        // Seq.groupBy : ('T -> 'Key) -> seq<'T> -> seq<'Key * seq<'T>>
	
	
	        Seq.groupBy = function groupBy(f, xs) {
	            return Seq.fold(function (acc, x) {
	                var k = f(x),
	                    vs = acc.get(k);
	                return vs != null ? acc.set(k, new List(x, vs)) : acc.set(k, List.singleton(x));
	            }, new Map(), xs);
	        };
	
	        Seq.tryHead = function tryHead(xs) {
	            var iter = xs[Symbol.iterator]();
	            var cur = iter.next();
	            return cur.done ? null : cur.value;
	        };
	
	        Seq.head = function head(xs) {
	            return Seq.__failIfNone(Seq.tryHead(xs));
	        };
	
	        Seq.init = function init(n, f) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (i) {
	                    return i < n ? [f(i), i + 1] : null;
	                }, 0);
	            });
	        };
	
	        Seq.initInfinite = function initInfinite(f) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (i) {
	                    return [f(i), i + 1];
	                }, 0);
	            });
	        };
	
	        Seq.tryItem = function tryItem(i, xs) {
	            if (i < 0) return null;
	            if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return i < xs.length ? xs[i] : null;
	            for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
	                var cur = iter.next();
	                if (cur.done) return null;
	                if (j === i) return cur.value;
	            }
	        };
	
	        Seq.item = function item(i, xs) {
	            return Seq.__failIfNone(Seq.tryItem(i, xs));
	        };
	
	        Seq.iter = function iter(f, xs) {
	            Seq.fold(function (_, x) {
	                return f(x);
	            }, null, xs);
	        };
	
	        Seq.iter2 = function iter2(f, xs, ys) {
	            Seq.fold2(function (_, x, y) {
	                return f(x, y);
	            }, null, xs, ys);
	        };
	
	        Seq.iteri = function iteri(f, xs) {
	            Seq.fold(function (_, x, i) {
	                return f(i, x);
	            }, null, xs);
	        };
	
	        Seq.iteri2 = function iteri2(f, xs, ys) {
	            Seq.fold2(function (_, x, y, i) {
	                return f(i, x, y);
	            }, null, xs, ys);
	        };
	
	        Seq.isEmpty = function isEmpty(xs) {
	            var i = xs[Symbol.iterator]();
	            return i.next().done;
	        };
	
	        Seq.tryLast = function tryLast(xs) {
	            try {
	                return Seq.reduce(function (_, x) {
	                    return x;
	                }, xs);
	            } catch (err) {
	                return null;
	            }
	        };
	
	        Seq.last = function last(xs) {
	            return Seq.__failIfNone(Seq.tryLast(xs));
	        };
	        // A static 'length' method causes problems in JavaScript -- https://github.com/Microsoft/TypeScript/issues/442
	
	
	        Seq.count = function count(xs) {
	            return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : Seq.fold(function (acc, x) {
	                return acc + 1;
	            }, 0, xs);
	        };
	
	        Seq.map = function map(f, xs) {
	            return Seq.delay(function () {
	                return Seq.unfold(function (iter) {
	                    var cur = iter.next();
	                    return !cur.done ? [f(cur.value), iter] : null;
	                }, xs[Symbol.iterator]());
	            });
	        };
	
	        Seq.mapi = function mapi(f, xs) {
	            return Seq.delay(function () {
	                var i = 0;
	                return Seq.unfold(function (iter) {
	                    var cur = iter.next();
	                    return !cur.done ? [f(i++, cur.value), iter] : null;
	                }, xs[Symbol.iterator]());
	            });
	        };
	
	        Seq.map2 = function map2(f, xs, ys) {
	            return Seq.delay(function () {
	                var iter1 = xs[Symbol.iterator]();
	                var iter2 = ys[Symbol.iterator]();
	                return Seq.unfold(function () {
	                    var cur1 = iter1.next(),
	                        cur2 = iter2.next();
	                    return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
	                });
	            });
	        };
	
	        Seq.mapi2 = function mapi2(f, xs, ys) {
	            return Seq.delay(function () {
	                var i = 0;
	                var iter1 = xs[Symbol.iterator]();
	                var iter2 = ys[Symbol.iterator]();
	                return Seq.unfold(function () {
	                    var cur1 = iter1.next(),
	                        cur2 = iter2.next();
	                    return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
	                });
	            });
	        };
	
	        Seq.map3 = function map3(f, xs, ys, zs) {
	            return Seq.delay(function () {
	                var iter1 = xs[Symbol.iterator]();
	                var iter2 = ys[Symbol.iterator]();
	                var iter3 = zs[Symbol.iterator]();
	                return Seq.unfold(function () {
	                    var cur1 = iter1.next(),
	                        cur2 = iter2.next(),
	                        cur3 = iter3.next();
	                    return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
	                });
	            });
	        };
	
	        Seq.mapFold = function mapFold(f, acc, xs) {
	            var result = [];
	            var r = void 0;
	            var cur = void 0;
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                cur = iter.next();
	                if (cur.done) break;
	
	                var _f = f(acc, cur.value);
	
	                var _f2 = _slicedToArray(_f, 2);
	
	                r = _f2[0];
	                acc = _f2[1];
	
	                result.push(r);
	            }
	            return Tuple(result, acc);
	        };
	
	        Seq.mapFoldBack = function mapFoldBack(f, xs, acc) {
	            var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	            var result = [];
	            var r = void 0;
	            for (var i = arr.length - 1; i >= 0; i--) {
	                var _f3 = f(arr[i], acc);
	
	                var _f4 = _slicedToArray(_f3, 2);
	
	                r = _f4[0];
	                acc = _f4[1];
	
	                result.push(r);
	            }
	            return Tuple(result, acc);
	        };
	
	        Seq.max = function max(xs) {
	            return Seq.reduce(function (acc, x) {
	                return Math.max(acc, x);
	            }, xs);
	        };
	
	        Seq.maxBy = function maxBy(f, xs) {
	            return Seq.reduce(function (x, y) {
	                return f(x) > f(y) ? x : y;
	            }, xs);
	        };
	
	        Seq.min = function min(xs) {
	            return Seq.reduce(function (acc, x) {
	                return Math.min(acc, x);
	            }, xs);
	        };
	
	        Seq.minBy = function minBy(f, xs) {
	            return Seq.reduce(function (x, y) {
	                return f(x) < f(y) ? x : y;
	            }, xs);
	        };
	
	        Seq.pairwise = function pairwise(xs) {
	            return Seq.skip(1, Seq.scan(function (last, next) {
	                return Tuple(last[1], next);
	            }, Tuple(0, 0), xs));
	        };
	
	        Seq.permute = function permute(f, xs) {
	            return Seq.ofArray(FArray.permute(f, Array.from(xs)));
	        };
	
	        Seq.rangeStep = function rangeStep(first, step, last) {
	            if (step === 0) throw "Step cannot be 0";
	            return Seq.unfold(function (x) {
	                return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null;
	            }, first);
	        };
	
	        Seq.rangeChar = function rangeChar(first, last) {
	            return Seq.unfold(function (x) {
	                return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null;
	            }, first);
	        };
	
	        Seq.range = function range(first, last) {
	            return Seq.rangeStep(first, 1, last);
	        };
	
	        Seq.readonly = function readonly(xs) {
	            return Seq.map(function (x) {
	                return x;
	            }, xs);
	        };
	
	        Seq.reduce = function reduce(f, xs) {
	            if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return xs.reduce(f);
	            var iter = xs[Symbol.iterator]();
	            var cur = iter.next();
	            if (cur.done) throw "Seq was empty";
	            var acc = cur.value;
	            for (;;) {
	                cur = iter.next();
	                if (cur.done) break;
	                acc = f(acc, cur.value);
	            }
	            return acc;
	        };
	
	        Seq.reduceBack = function reduceBack(f, xs) {
	            var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	            if (ar.length === 0) throw "Seq was empty";
	            var acc = ar[ar.length - 1];
	            for (var i = ar.length - 2; i >= 0; i--) {
	                acc = f(ar[i], acc, i);
	            }return acc;
	        };
	
	        Seq.replicate = function replicate(n, x) {
	            return Seq.init(n, function () {
	                return x;
	            });
	        };
	
	        Seq.rev = function rev(xs) {
	            var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
	            return Seq.ofArray(ar.reverse());
	        };
	
	        Seq.scan = function scan(f, seed, xs) {
	            return Seq.delay(function () {
	                var iter = xs[Symbol.iterator]();
	                return Seq.unfold(function (acc) {
	                    if (acc == null) return [seed, seed];
	                    var cur = iter.next();
	                    if (!cur.done) {
	                        acc = f(acc, cur.value);
	                        return [acc, acc];
	                    }
	                    return void 0;
	                }, null);
	            });
	        };
	
	        Seq.scanBack = function scanBack(f, xs, seed) {
	            return Seq.rev(Seq.scan(function (acc, x) {
	                return f(x, acc);
	            }, seed, Seq.rev(xs)));
	        };
	
	        Seq.singleton = function singleton(x) {
	            return Seq.unfold(function (x) {
	                return x != null ? [x, null] : null;
	            }, x);
	        };
	
	        Seq.skip = function skip(n, xs) {
	            return _defineProperty({}, Symbol.iterator, function () {
	                var iter = xs[Symbol.iterator]();
	                for (var i = 1; i <= n; i++) {
	                    if (iter.next().done) throw "Seq has not enough elements";
	                }return iter;
	            });
	        };
	
	        Seq.skipWhile = function skipWhile(f, xs) {
	            return Seq.delay(function () {
	                var hasPassed = false;
	                return Seq.filter(function (x) {
	                    return hasPassed || (hasPassed = !f(x));
	                }, xs);
	            });
	        };
	
	        Seq.sortWith = function sortWith(f, xs) {
	            var ys = Array.from(xs);
	            return Seq.ofArray(ys.sort(f));
	        };
	
	        Seq.defaultAdder = function defaultAdder(x, y) {
	            return x + y;
	        };
	
	        Seq.sum = function sum(xs, adder) {
	            adder = adder || Seq.defaultAdder;
	            return Seq.reduce(function (acc, x) {
	                return adder(acc, x);
	            }, xs);
	        };
	
	        Seq.sumBy = function sumBy(f, xs, adder) {
	            var fst = true;
	            adder = adder || Seq.defaultAdder;
	            return Seq.reduce(function (acc, x) {
	                acc = fst ? f(acc) : acc, fst = false;
	                return adder(acc, f(x));
	            }, xs);
	        };
	
	        Seq.tail = function tail(xs) {
	            var iter = xs[Symbol.iterator]();
	            var cur = iter.next();
	            if (cur.done) throw "Seq was empty";
	            return _defineProperty({}, Symbol.iterator, function () {
	                return iter;
	            });
	        };
	
	        Seq.take = function take(n, xs) {
	            var truncate = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	            return Seq.delay(function () {
	                var iter = xs[Symbol.iterator]();
	                return Seq.unfold(function (i) {
	                    if (i < n) {
	                        var cur = iter.next();
	                        if (!cur.done) return [cur.value, i + 1];
	                        if (!truncate) throw "Seq has not enough elements";
	                    }
	                    return void 0;
	                }, 0);
	            });
	        };
	
	        Seq.truncate = function truncate(n, xs) {
	            return Seq.take(n, xs, true);
	        };
	
	        Seq.takeWhile = function takeWhile(f, xs) {
	            return Seq.delay(function () {
	                var iter = xs[Symbol.iterator]();
	                return Seq.unfold(function (i) {
	                    var cur = iter.next();
	                    if (!cur.done && f(cur.value)) return [cur.value, null];
	                    return void 0;
	                }, 0);
	            });
	        };
	
	        Seq.tryFind = function tryFind(f, xs) {
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) return null;
	                if (f(cur.value, i)) return cur.value;
	            }
	        };
	
	        Seq.find = function find(f, xs) {
	            return Seq.__failIfNone(Seq.tryFind(f, xs));
	        };
	
	        Seq.tryFindBack = function tryFindBack(f, xs) {
	            var match = null;
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) return match;
	                if (f(cur.value, i)) match = cur.value;
	            }
	        };
	
	        Seq.findBack = function findBack(f, xs) {
	            return Seq.__failIfNone(Seq.tryFindBack(f, xs));
	        };
	
	        Seq.tryFindIndex = function tryFindIndex(f, xs) {
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) return null;
	                if (f(cur.value, i)) return i;
	            }
	        };
	
	        Seq.findIndex = function findIndex(f, xs) {
	            return Seq.__failIfNone(Seq.tryFindIndex(f, xs));
	        };
	
	        Seq.tryFindIndexBack = function tryFindIndexBack(f, xs) {
	            var match = 0;
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) return match;
	                if (f(cur.value, i)) match = i;
	            }
	        };
	
	        Seq.findIndexBack = function findIndexBack(f, xs) {
	            return Seq.__failIfNone(Seq.tryFindIndexBack(f, xs));
	        };
	
	        Seq.tryPick = function tryPick(f, xs) {
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                var cur = iter.next();
	                if (cur.done) break;
	                var y = f(cur.value, i);
	                if (y != null) return y;
	            }
	            return void 0;
	        };
	
	        Seq.pick = function pick(f, xs) {
	            return Seq.__failIfNone(Seq.tryPick(f, xs));
	        };
	
	        Seq.unfold = function unfold(f, acc) {
	            return _defineProperty({}, Symbol.iterator, function () {
	                return {
	                    next: function next() {
	                        var res = f(acc);
	                        if (res != null) {
	                            acc = res[1];
	                            return { done: false, value: res[0] };
	                        }
	                        return { done: true };
	                    }
	                };
	            });
	        };
	
	        Seq.zip = function zip(xs, ys) {
	            return Seq.map2(function (x, y) {
	                return [x, y];
	            }, xs, ys);
	        };
	
	        Seq.zip3 = function zip3(xs, ys, zs) {
	            return Seq.map3(function (x, y, z) {
	                return [x, y, z];
	            }, xs, ys, zs);
	        };
	
	        return Seq;
	    }();
	
	    var FSet = function () {
	        function FSet() {
	            _classCallCheck(this, FSet);
	        }
	
	        FSet.union = function union(set1, set2) {
	            return Seq.fold(function (acc, x) {
	                acc.add(x);return acc;
	            }, new Set(set1), set2);
	        };
	
	        FSet.unionMany = function unionMany(sets) {
	            return Seq.fold(function (acc, s) {
	                return FSet.union(acc, s);
	            }, new Set(), sets);
	        };
	
	        FSet.difference = function difference(set1, set2) {
	            return Seq.fold(function (acc, x) {
	                acc.delete(x);return acc;
	            }, new Set(set1), set2);
	        };
	
	        FSet.intersect = function intersect(set1, set2) {
	            return Seq.fold(function (acc, x) {
	                if (!set2.has(x)) acc.delete(x);
	                return acc;
	            }, new Set(set1), set1);
	        };
	
	        FSet.intersectMany = function intersectMany(sets) {
	            var ar = Array.isArray(sets) ? sets : Array.from(sets);
	            if (ar.length == 0) throw "Seq was empty";
	            var set = new Set(ar[0]);
	            Seq.iter(function (x) {
	                for (var i = 1; i < ar.length; i++) {
	                    if (!ar[i].has(x)) {
	                        set.delete(x);
	                        break;
	                    }
	                }
	            }, ar[0]);
	            return set;
	        };
	
	        FSet.isProperSubsetOf = function isProperSubsetOf(set1, set2) {
	            return Seq.forall(function (x) {
	                return set2.has(x);
	            }, set1) && Seq.exists(function (x) {
	                return !set1.has(x);
	            }, set2);
	        };
	
	        FSet.isSubsetOf = function isSubsetOf(set1, set2) {
	            return Seq.forall(function (x) {
	                return set2.has(x);
	            }, set1);
	        };
	
	        FSet.isProperSupersetOf = function isProperSupersetOf(set1, set2) {
	            return FSet.isProperSubset(set2, set1);
	        };
	
	        FSet.isSupersetOf = function isSupersetOf(set1, set2) {
	            return FSet.isSubset(set2, set1);
	        };
	
	        FSet.copyTo = function copyTo(xs, arr, arrayIndex, count) {
	            if (!Array.isArray(arr) && !ArrayBuffer.isView(arr)) throw "Array is invalid";
	            count = count || arr.length;
	            var i = arrayIndex || 0;
	            var iter = xs[Symbol.iterator]();
	            while (count--) {
	                var el = iter.next();
	                if (el.done) break;
	                arr[i++] = el.value;
	            }
	        };
	
	        FSet.partition = function partition(f, xs) {
	            return Seq.fold(function (acc, x) {
	                var lacc = acc[0],
	                    racc = acc[1];
	                return f(x) ? Tuple(lacc.add(x), racc) : Tuple(lacc, racc.add(x));
	            }, Tuple(new Set(), new Set()), xs);
	        };
	
	        FSet.remove = function remove(item, xs) {
	            return FSet.removeInPlace(item, new Set(xs));
	        };
	
	        FSet.removeInPlace = function removeInPlace(item, xs) {
	            xs.delete(item);
	            return xs;
	        };
	
	        return FSet;
	    }();
	
	    FSet.op_Addition = FSet.union;
	    FSet.op_Subtraction = FSet.difference;
	    FSet.isProperSubset = FSet.isProperSubsetOf;
	    FSet.isSubset = FSet.isSubsetOf;
	    FSet.isProperSuperset = FSet.isProperSupersetOf;
	    FSet.isSuperset = FSet.isSupersetOf;
	    exports.Set = FSet;
	
	    var FMap = function () {
	        function FMap() {
	            _classCallCheck(this, FMap);
	        }
	
	        FMap.containsValue = function containsValue(v, map) {
	            return Seq.fold(function (acc, k) {
	                return acc || map.get(k) === v;
	            }, false, map.keys());
	        };
	
	        FMap.exists = function exists(f, map) {
	            return Seq.exists(function (kv) {
	                return f(kv[0], kv[1]);
	            }, map);
	        };
	
	        FMap.filter = function filter(f, map) {
	            return Seq.fold(function (acc, kv) {
	                return f(kv[0], kv[1]) ? acc.set(kv[0], kv[1]) : acc;
	            }, new Map(), map);
	        };
	
	        FMap.fold = function fold(f, seed, map) {
	            return Seq.fold(function (acc, kv) {
	                return f(acc, kv[0], kv[1]);
	            }, seed, map);
	        };
	
	        FMap.foldBack = function foldBack(f, map, seed) {
	            return Seq.foldBack(function (kv, acc) {
	                return f(kv[0], kv[1], acc);
	            }, map, seed);
	        };
	
	        FMap.forall = function forall(f, map) {
	            return Seq.forall(function (kv) {
	                return f(kv[0], kv[1]);
	            }, map);
	        };
	
	        FMap.iter = function iter(f, map) {
	            return Seq.iter(function (kv) {
	                return f(kv[0], kv[1]);
	            }, map);
	        };
	
	        FMap.map = function map(f, _map) {
	            return Seq.fold(function (acc, kv) {
	                return acc.set(kv[0], f(kv[0], kv[1]));
	            }, new Map(), _map);
	        };
	
	        FMap.partition = function partition(f, map) {
	            return Seq.fold(function (acc, kv) {
	                var lacc = acc[0],
	                    racc = acc[1];
	                var k = kv[0],
	                    v = kv[1];
	                return f(k, v) ? Tuple(lacc.set(k, v), racc) : Tuple(lacc, racc.set(k, v));
	            }, Tuple(new Map(), new Map()), map);
	        };
	
	        FMap.findKey = function findKey(f, map) {
	            return Seq.pick(function (kv) {
	                return f(kv[0], kv[1]) ? kv[0] : null;
	            }, map);
	        };
	
	        FMap.tryFindKey = function tryFindKey(f, map) {
	            return Seq.tryPick(function (kv) {
	                return f(kv[0], kv[1]) ? kv[0] : null;
	            }, map);
	        };
	
	        FMap.pick = function pick(f, map) {
	            return Seq.pick(function (kv) {
	                var res = f(kv[0], kv[1]);
	                return res != null ? res : null;
	            }, map);
	        };
	
	        FMap.remove = function remove(item, map) {
	            return FMap.removeInPlace(item, new Map(map));
	        };
	
	        FMap.removeInPlace = function removeInPlace(item, map) {
	            map.delete(item);
	            return map;
	        };
	
	        FMap.tryPick = function tryPick(f, map) {
	            return Seq.tryPick(function (kv) {
	                var res = f(kv[0], kv[1]);
	                return res != null ? res : null;
	            }, map);
	        };
	
	        return FMap;
	    }();
	
	    exports.Map = FMap;
	    var Nothing = exports.Nothing = void 0;
	
	    var Async = exports.Async = function () {
	        function Async() {
	            _classCallCheck(this, Async);
	        }
	
	        // --- AsyncBuilder methods
	
	        Async.__protectedAsync = function __protectedAsync(f) {
	            return function (ctx) {
	                if (ctx.cancelToken.isCancelled) ctx.onCancel("cancelled");else try {
	                    return f(ctx);
	                } catch (err) {
	                    ctx.onError(err);
	                }
	            };
	        };
	
	        Async.bind = function bind(computation, binder) {
	            return Async.__protectedAsync(function (ctx) {
	                computation({
	                    onSuccess: function onSuccess(x) {
	                        return binder(x)(ctx);
	                    },
	                    onError: ctx.onError,
	                    onCancel: ctx.onCancel,
	                    cancelToken: ctx.cancelToken
	                });
	            });
	        };
	
	        Async.combine = function combine(computation1, computation2) {
	            return Async.bind(computation1, function () {
	                return computation2;
	            });
	        };
	
	        Async.delay = function delay(generator) {
	            return Async.__protectedAsync(function (ctx) {
	                return generator()(ctx);
	            });
	        };
	
	        Async.for = function _for(sequence, body) {
	            var iter = sequence[Symbol.iterator]();
	            var cur = iter.next();
	            return Async.while(function () {
	                return !cur.done;
	            }, Async.delay(function () {
	                var res = body(cur.value);
	                cur = iter.next();
	                return res;
	            }));
	        };
	
	        Async.return = function _return(value) {
	            return Async.__protectedAsync(function (ctx) {
	                return ctx.onSuccess(value);
	            });
	        };
	
	        Async.returnFrom = function returnFrom(computation) {
	            return computation;
	        };
	
	        Async.tryFinally = function tryFinally(computation, compensation) {
	            return Async.__protectedAsync(function (ctx) {
	                computation({
	                    onSuccess: function onSuccess(x) {
	                        compensation();
	                        ctx.onSuccess(x);
	                    },
	                    onError: function onError(x) {
	                        compensation();
	                        ctx.onError(x);
	                    },
	                    onCancel: function onCancel(x) {
	                        compensation();
	                        ctx.onCancel(x);
	                    },
	                    cancelToken: ctx.cancelToken
	                });
	            });
	        };
	
	        Async.tryWith = function tryWith(computation, catchHandler) {
	            return Async.__protectedAsync(function (ctx) {
	                computation({
	                    onSuccess: ctx.onSuccess,
	                    onCancel: ctx.onCancel,
	                    cancelToken: ctx.cancelToken,
	                    onError: function onError(ex) {
	                        return catchHandler(ex)(ctx);
	                    }
	                });
	            });
	        };
	
	        Async.using = function using(resource, binder) {
	            return Async.tryFinally(binder(resource), function () {
	                return resource.dispose();
	            });
	        };
	
	        Async.while = function _while(guard, computation) {
	            if (guard()) return Async.bind(computation, function () {
	                return Async.while(guard, computation);
	            });else return Async.return(Nothing);
	        };
	
	        Async.zero = function zero() {
	            return Async.__protectedAsync(function (ctx) {
	                return ctx.onSuccess(Nothing);
	            });
	        };
	        // --- Async methods
	        // Async.AwaitTask<T> in F#
	
	
	        Async.awaitPromise = function awaitPromise(p) {
	            return Async.fromContinuations(function (conts) {
	                return p.then(conts[0]).catch(function (err) {
	                    return (err == "cancelled" ? conts[2] : conts[1])(err);
	                });
	            });
	        };
	
	        Async.catch = function _catch(work) {
	            return Async.__protectedAsync(function (ctx) {
	                work({
	                    onSuccess: function onSuccess(x) {
	                        return ctx.onSuccess(Choice.Choice1Of2(x));
	                    },
	                    onError: function onError(ex) {
	                        return ctx.onSuccess(Choice.Choice2Of2(ex));
	                    },
	                    onCancel: ctx.onCancel,
	                    cancelToken: ctx.cancelToken
	                });
	            });
	        };
	
	        Async.fromContinuations = function fromContinuations(f) {
	            return Async.__protectedAsync(function (ctx) {
	                return f([ctx.onSuccess, ctx.onError, ctx.onCancel]);
	            });
	        };
	
	        Async.ignore = function ignore(computation) {
	            return Async.bind(computation, function (x) {
	                return Async.return(Nothing);
	            });
	        };
	
	        Async.parallel = function parallel(computations) {
	            return Async.awaitPromise(Promise.all(Seq.map(function (w) {
	                return Async.startAsPromise(w);
	            }, computations)));
	        };
	
	        Async.sleep = function sleep(millisecondsDueTime) {
	            return Async.__protectedAsync(function (ctx) {
	                setTimeout(function () {
	                    return ctx.cancelToken.isCancelled ? ctx.onCancel("cancelled") : ctx.onSuccess(Nothing);
	                }, millisecondsDueTime);
	            });
	        };
	
	        Async.start = function start(computation, cancellationToken) {
	            return Async.startWithContinuations(computation, cancellationToken);
	        };
	
	        Async.emptyContinuation = function emptyContinuation(x) {
	            // NOP
	        };
	
	        Async.startWithContinuations = function startWithContinuations(computation, continuation, exceptionContinuation, cancellationContinuation, cancelToken) {
	            if (typeof continuation !== "function") {
	                cancelToken = continuation;
	                continuation = null;
	            }
	            computation({
	                onSuccess: continuation ? continuation : Async.emptyContinuation,
	                onError: exceptionContinuation ? exceptionContinuation : Async.emptyContinuation,
	                onCancel: cancellationContinuation ? cancellationContinuation : Async.emptyContinuation,
	                cancelToken: cancelToken ? cancelToken : Async.defaultCancellationToken
	            });
	        };
	        // Async.StartAsTask<T> in F#
	
	
	        Async.startAsPromise = function startAsPromise(computation, cancellationToken) {
	            return new Promise(function (resolve, reject) {
	                return Async.startWithContinuations(computation, resolve, reject, reject, cancellationToken ? cancellationToken : Async.defaultCancellationToken);
	            });
	        };
	
	        _createClass(Async, [{
	            key: "cancellationToken",
	            get: function get() {
	                return Async.__protectedAsync(function (ctx) {
	                    return ctx.onSuccess(ctx.cancelToken);
	                });
	            }
	        }]);
	
	        return Async;
	    }();
	
	    Async.defaultCancellationToken = {
	        isCancelled: false
	    };
	    Async.startImmediate = Async.start;
	
	    var QueueCell = function QueueCell(message) {
	        _classCallCheck(this, QueueCell);
	
	        this.value = message;
	    };
	
	    var MailboxQueue = function () {
	        function MailboxQueue() {
	            _classCallCheck(this, MailboxQueue);
	        }
	
	        MailboxQueue.prototype.add = function add(message) {
	            var itCell = new QueueCell(message);
	            if (this.firstAndLast) {
	                this.firstAndLast[1].next = itCell;
	                this.firstAndLast = [this.firstAndLast[0], itCell];
	            } else this.firstAndLast = [itCell, itCell];
	        };
	
	        MailboxQueue.prototype.tryGet = function tryGet() {
	            if (this.firstAndLast) {
	                var value = this.firstAndLast[0].value;
	                if (this.firstAndLast[0].next) this.firstAndLast = [this.firstAndLast[0].next, this.firstAndLast[1]];else delete this.firstAndLast;
	                return value;
	            }
	            return void 0;
	        };
	
	        return MailboxQueue;
	    }();
	
	    var MailboxProcessor = exports.MailboxProcessor = function () {
	        function MailboxProcessor(body, cancellationToken) {
	            _classCallCheck(this, MailboxProcessor);
	
	            this.body = body;
	            this.cancellationToken = cancellationToken || Async.defaultCancellationToken;
	            this.messages = new MailboxQueue();
	        }
	
	        MailboxProcessor.start = function start(body, cancellationToken) {
	            var mbox = new MailboxProcessor(body, cancellationToken);
	            mbox.start();
	            return mbox;
	        };
	
	        MailboxProcessor.prototype.__processEvents = function __processEvents() {
	            if (this.continuation) {
	                var value = this.messages.tryGet();
	                if (value) {
	                    var cont = this.continuation;
	                    delete this.continuation;
	                    cont(value);
	                }
	            }
	        };
	
	        MailboxProcessor.prototype.start = function start() {
	            Async.startImmediate(this.body(this), this.cancellationToken);
	        };
	
	        MailboxProcessor.prototype.receive = function receive() {
	            var _this4 = this;
	
	            return Async.fromContinuations(function (conts) {
	                if (_this4.continuation) throw "Receive can only be called once!";
	                _this4.continuation = conts[0];
	                _this4.__processEvents();
	            });
	        };
	
	        MailboxProcessor.prototype.post = function post(message) {
	            this.messages.add(message);
	            this.__processEvents();
	        };
	
	        MailboxProcessor.prototype.postAndAsyncReply = function postAndAsyncReply(buildMessage) {
	            var result = void 0;
	            var continuation = void 0;
	            function checkCompletion() {
	                if (result && continuation) continuation(result);
	            }
	            var reply = {
	                reply: function reply(res) {
	                    result = res;
	                    checkCompletion();
	                }
	            };
	            this.messages.add(buildMessage(reply));
	            this.__processEvents();
	            return Async.fromContinuations(function (conts) {
	                continuation = conts[0];
	                checkCompletion();
	            });
	        };
	
	        return MailboxProcessor;
	    }();
	
	    var Observer = function Observer(onNext, onError, onCompleted) {
	        _classCallCheck(this, Observer);
	
	        this.onNext = onNext;
	        this.onError = onError || function (e) {};
	        this.onCompleted = onCompleted || function () {};
	    };
	
	    Util.setInterfaces(Observer.prototype, ["System.IObserver"]);
	
	    var Observable = function Observable(subscribe) {
	        _classCallCheck(this, Observable);
	
	        this.subscribe = subscribe;
	    };
	
	    Util.setInterfaces(Observable.prototype, ["System.IObservable"]);
	
	    var FObservable = function () {
	        function FObservable() {
	            _classCallCheck(this, FObservable);
	        }
	
	        FObservable.__protect = function __protect(f, succeed, fail) {
	            try {
	                return succeed(f());
	            } catch (e) {
	                fail(e);
	            }
	        };
	
	        FObservable.add = function add(callback, source) {
	            source.subscribe(new Observer(callback));
	        };
	
	        FObservable.choose = function choose(chooser, source) {
	            return new Observable(function (observer) {
	                return source.subscribe(new Observer(function (t) {
	                    return FObservable.__protect(function () {
	                        return chooser(t);
	                    }, function (u) {
	                        if (u != null) observer.onNext(u);
	                    }, observer.onError);
	                }, observer.onError, observer.onCompleted));
	            });
	        };
	
	        FObservable.filter = function filter(predicate, source) {
	            return FObservable.choose(function (x) {
	                return predicate(x) ? x : null;
	            }, source);
	        };
	
	        FObservable.map = function map(mapping, source) {
	            return new Observable(function (observer) {
	                return source.subscribe(new Observer(function (t) {
	                    FObservable.__protect(function () {
	                        return mapping(t);
	                    }, observer.onNext, observer.onError);
	                }, observer.onError, observer.onCompleted));
	            });
	        };
	
	        FObservable.merge = function merge(source1, source2) {
	            return new Observable(function (observer) {
	                var stopped = false,
	                    completed1 = false,
	                    completed2 = false;
	                var h1 = source1.subscribe(new Observer(function (v) {
	                    if (!stopped) observer.onNext(v);
	                }, function (e) {
	                    if (!stopped) {
	                        stopped = true;
	                        observer.onError(e);
	                    }
	                }, function () {
	                    if (!stopped) {
	                        completed1 = true;
	                        if (completed2) {
	                            stopped = true;
	                            observer.onCompleted();
	                        }
	                    }
	                }));
	                var h2 = source2.subscribe(new Observer(function (v) {
	                    if (!stopped) {
	                        observer.onNext(v);
	                    }
	                }, function (e) {
	                    if (!stopped) {
	                        stopped = true;
	                        observer.onError(e);
	                    }
	                }, function () {
	                    if (!stopped) {
	                        completed2 = true;
	                        if (completed1) {
	                            stopped = true;
	                            observer.onCompleted();
	                        }
	                    }
	                }));
	                return Util.createDisposable(function () {
	                    h1.dispose();
	                    h2.dispose();
	                });
	            });
	        };
	
	        FObservable.pairwise = function pairwise(source) {
	            return new Observable(function (observer) {
	                var last = null;
	                return source.subscribe(new Observer(function (next) {
	                    if (last != null) observer.onNext([last, next]);
	                    last = next;
	                }, observer.onError, observer.onCompleted));
	            });
	        };
	
	        FObservable.partition = function partition(predicate, source) {
	            return Tuple(FObservable.filter(predicate, source), FObservable.filter(function (x) {
	                return !predicate(x);
	            }, source));
	        };
	
	        FObservable.scan = function scan(collector, state, source) {
	            return new Observable(function (observer) {
	                return source.subscribe(new Observer(function (t) {
	                    FObservable.__protect(function () {
	                        return collector(state, t);
	                    }, function (u) {
	                        state = u;observer.onNext(u);
	                    }, observer.onError);
	                }, observer.onError, observer.onCompleted));
	            });
	        };
	
	        FObservable.split = function split(splitter, source) {
	            return Tuple(FObservable.choose(function (v) {
	                return splitter(v).valueIfChoice1;
	            }, source), FObservable.choose(function (v) {
	                return splitter(v).valueIfChoice2;
	            }, source));
	        };
	
	        FObservable.subscribe = function subscribe(callback, source) {
	            return source.subscribe(new Observer(callback));
	        };
	
	        return FObservable;
	    }();
	
	    exports.Observable = FObservable;
	
	    var Event = exports.Event = function () {
	        function Event(_subscriber, delegates) {
	            _classCallCheck(this, Event);
	
	            this._subscriber = _subscriber;
	            this.delegates = delegates || new Array();
	        }
	
	        Event.prototype.add = function add(f) {
	            this._addHandler(f);
	        };
	        // IEvent<T> methods
	
	
	        Event.prototype.trigger = function trigger(value) {
	            Seq.iter(function (f) {
	                return f(value);
	            }, this.delegates);
	        };
	        // IDelegateEvent<T> methods
	
	
	        Event.prototype._addHandler = function _addHandler(f) {
	            this.delegates.push(f);
	        };
	
	        Event.prototype._removeHandler = function _removeHandler(f) {
	            var index = this.delegates.findIndex(function (el) {
	                return "" + el == "" + f;
	            }); // Special dedication to Chet Husk.
	            if (index > -1) this.delegates.splice(index, 1);
	        };
	
	        Event.prototype.addHandler = function addHandler(handler) {
	            this._addHandler(function (x) {
	                return handler(undefined, x);
	            });
	        };
	
	        Event.prototype.removeHandler = function removeHandler(handler) {
	            this._removeHandler(function (x) {
	                return handler(undefined, x);
	            });
	        };
	        // IObservable<T> methods
	
	
	        Event.prototype._subscribeFromObserver = function _subscribeFromObserver(observer) {
	            var _this5 = this;
	
	            if (this._subscriber) return this._subscriber(observer);
	            var callback = observer.onNext;
	            this._addHandler(callback);
	            return Util.createDisposable(function () {
	                return _this5._removeHandler(callback);
	            });
	        };
	
	        Event.prototype._subscribeFromCallback = function _subscribeFromCallback(callback) {
	            var _this6 = this;
	
	            this._addHandler(callback);
	            return Util.createDisposable(function () {
	                return _this6._removeHandler(callback);
	            });
	        };
	
	        Event.prototype.subscribe = function subscribe(arg) {
	            return typeof arg == "function" ? this._subscribeFromCallback(arg) : this._subscribeFromObserver(arg);
	        };
	
	        Event.add = function add(callback, sourceEvent) {
	            sourceEvent.subscribe(new Observer(callback));
	        };
	
	        Event.choose = function choose(chooser, sourceEvent) {
	            var source = sourceEvent;
	            return new Event(function (observer) {
	                return source.subscribe(new Observer(function (t) {
	                    return FObservable.__protect(function () {
	                        return chooser(t);
	                    }, function (u) {
	                        if (u != null) observer.onNext(u);
	                    }, observer.onError);
	                }, observer.onError, observer.onCompleted));
	            }, source.delegates);
	        };
	
	        Event.filter = function filter(predicate, sourceEvent) {
	            return Event.choose(function (x) {
	                return predicate(x) ? x : null;
	            }, sourceEvent);
	        };
	
	        Event.map = function map(mapping, sourceEvent) {
	            var source = sourceEvent;
	            return new Event(function (observer) {
	                return source.subscribe(new Observer(function (t) {
	                    return FObservable.__protect(function () {
	                        return mapping(t);
	                    }, observer.onNext, observer.onError);
	                }, observer.onError, observer.onCompleted));
	            }, source.delegates);
	        };
	
	        Event.merge = function merge(event1, event2) {
	            var source1 = event1;
	            var source2 = event2;
	            return new Event(function (observer) {
	                var stopped = false,
	                    completed1 = false,
	                    completed2 = false;
	                var h1 = source1.subscribe(new Observer(function (v) {
	                    if (!stopped) observer.onNext(v);
	                }, function (e) {
	                    if (!stopped) {
	                        stopped = true;
	                        observer.onError(e);
	                    }
	                }, function () {
	                    if (!stopped) {
	                        completed1 = true;
	                        if (completed2) {
	                            stopped = true;
	                            observer.onCompleted();
	                        }
	                    }
	                }));
	                var h2 = source2.subscribe(new Observer(function (v) {
	                    if (!stopped) observer.onNext(v);
	                }, function (e) {
	                    if (!stopped) {
	                        stopped = true;
	                        observer.onError(e);
	                    }
	                }, function () {
	                    if (!stopped) {
	                        completed2 = true;
	                        if (completed1) {
	                            stopped = true;
	                            observer.onCompleted();
	                        }
	                    }
	                }));
	                return Util.createDisposable(function () {
	                    h1.dispose();
	                    h2.dispose();
	                });
	            }, source1.delegates.concat(source2.delegates));
	        };
	
	        Event.pairwise = function pairwise(sourceEvent) {
	            var source = sourceEvent;
	            return new Event(function (observer) {
	                var last = null;
	                return source.subscribe(new Observer(function (next) {
	                    if (last != null) observer.onNext([last, next]);
	                    last = next;
	                }, observer.onError, observer.onCompleted));
	            }, source.delegates);
	        };
	
	        Event.partition = function partition(predicate, sourceEvent) {
	            return Tuple(Event.filter(predicate, sourceEvent), Event.filter(function (x) {
	                return !predicate(x);
	            }, sourceEvent));
	        };
	
	        Event.scan = function scan(collector, state, sourceEvent) {
	            var source = sourceEvent;
	            return new Event(function (observer) {
	                return source.subscribe(new Observer(function (t) {
	                    FObservable.__protect(function () {
	                        return collector(state, t);
	                    }, function (u) {
	                        state = u;observer.onNext(u);
	                    }, observer.onError);
	                }, observer.onError, observer.onCompleted));
	            }, source.delegates);
	        };
	
	        Event.split = function split(splitter, sourceEvent) {
	            return Tuple(Event.choose(function (v) {
	                return splitter(v).valueIfChoice1;
	            }, sourceEvent), Event.choose(function (v) {
	                return splitter(v).valueIfChoice2;
	            }, sourceEvent));
	        };
	
	        _createClass(Event, [{
	            key: "publish",
	            get: function get() {
	                return this;
	            }
	        }]);
	
	        return Event;
	    }();
	
	    var Lazy = exports.Lazy = function () {
	        function Lazy(factory) {
	            _classCallCheck(this, Lazy);
	
	            this.factory = factory;
	            this.isValueCreated = false;
	        }
	
	        Lazy.createFromValue = function createFromValue(v) {
	            return new Lazy(function () {
	                return v;
	            });
	        };
	
	        _createClass(Lazy, [{
	            key: "value",
	            get: function get() {
	                if (!this.isValueCreated) {
	                    this.createdValue = this.factory();
	                    this.isValueCreated = true;
	                }
	                return this.createdValue;
	            }
	        }]);
	
	        return Lazy;
	    }();
	});


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var canvas = exports.canvas = document.getElementById("game");
	var context = exports.context = canvas.getContext('2d');
	
	var op_Dollar = exports.op_Dollar = function (s, n) {
	  return s + n.toString();
	};
	
	var rgb = exports.rgb = function (r, g, b) {
	  return op_Dollar(op_Dollar(op_Dollar(op_Dollar(op_Dollar(op_Dollar("rgb(", r), ","), g), ","), b), ")");
	};
	
	var filled = exports.filled = function (color, rect_0, rect_1, rect_2, rect_3) {
	  var rect = [rect_0, rect_1, rect_2, rect_3];
	  context.fillStyle = color;
	
	  (function (tupledArg) {
	    var arg00 = tupledArg[0];
	    var arg01 = tupledArg[1];
	    var arg02 = tupledArg[2];
	    var arg03 = tupledArg[3];
	    context.fillRect(arg00, arg01, arg02, arg03);
	  })(rect);
	};
	
	var dimensions = exports.dimensions = function () {
	  return [canvas.width, canvas.height];
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GetSpriteSheetsImageFromJson = exports.GetJson = exports.CachedSpriteSheet = exports.SpriteSheet = exports.Sprite = exports.SpriteSheetNameJson = undefined;
	
	var _fableCore = __webpack_require__(1);
	
	var _Utils = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SpriteSheetNameJson = exports.SpriteSheetNameJson = function SpriteSheetNameJson($arg0, $arg1, $arg2, $arg3, $arg4, $arg5) {
	  _classCallCheck(this, SpriteSheetNameJson);
	
	  this.Name = $arg0;
	  this.Path = $arg1;
	  this.TileWidth = $arg2;
	  this.TileHeight = $arg3;
	  this.VerticalSpacing = $arg4;
	  this.HorizontalSpacing = $arg5;
	};
	
	_fableCore.Util.setInterfaces(SpriteSheetNameJson.prototype, [], "Fable.Helpers.Herebris.Ste.Loader.SpriteSheetNameJson");
	
	var Sprite = exports.Sprite = function Sprite($arg0, $arg1, $arg2) {
	  _classCallCheck(this, Sprite);
	
	  this.Name = $arg0;
	  this.X = $arg1;
	  this.Y = $arg2;
	};
	
	_fableCore.Util.setInterfaces(Sprite.prototype, [], "Fable.Helpers.Herebris.Ste.Loader.Sprite");
	
	var SpriteSheet = exports.SpriteSheet = function SpriteSheet($arg0, $arg1) {
	  _classCallCheck(this, SpriteSheet);
	
	  this.Sheet = $arg0;
	  this.Sprites = $arg1;
	};
	
	_fableCore.Util.setInterfaces(SpriteSheet.prototype, [], "Fable.Helpers.Herebris.Ste.Loader.SpriteSheet");
	
	var CachedSpriteSheet = exports.CachedSpriteSheet = function CachedSpriteSheet($arg0, $arg1, $arg2) {
	  _classCallCheck(this, CachedSpriteSheet);
	
	  this.Json = $arg0;
	  this.Canvas = $arg1;
	  this.Context = $arg2;
	};
	
	_fableCore.Util.setInterfaces(CachedSpriteSheet.prototype, [], "Fable.Helpers.Herebris.Ste.Loader.CachedSpriteSheet");
	
	var GetJson = exports.GetJson = function (url, giveBack) {
	  (0, _Utils.ajax)(new _Utils.HttpMethod("Get", 1, url), function (data) {
	    var json = _fableCore.Util.ofJson(data);
	
	    giveBack(json);
	  }, function (error) {
	    console.error(function () {
	      var clo1 = _fableCore.String.fsFormat("Error when loading: %s")(function (x) {
	        return x;
	      });
	
	      return function (arg10) {
	        return clo1(arg10);
	      };
	    }()(url));
	  });
	};
	
	var GetSpriteSheetsImageFromJson = exports.GetSpriteSheetsImageFromJson = function (url, giveBack) {
	  GetJson(url, function (json) {
	    var img = document.createElement('img');
	
	    img.onload = function (_arg1) {
	      var c = document.createElement('canvas');
	      var ctx = c.getContext('2d');
	      c.width = img.width;
	      c.height = img.height;
	      ctx.drawImage(img, 0, 0);
	      giveBack(new CachedSpriteSheet(json, c, ctx));
	      return null;
	    };
	
	    img.src = json.Sheet.Path;
	  });
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ajax = exports.HttpMethod = exports.toPixel = undefined;
	
	var _fableCore = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var toPixel = exports.toPixel = function (n) {
	  return function () {
	    var clo1 = _fableCore.String.fsFormat("%ipx")(function (x) {
	      return x;
	    });
	
	    return function (arg10) {
	      return clo1(arg10);
	    };
	  }()(n);
	};
	
	var HttpMethod = exports.HttpMethod = function HttpMethod(caseName, fieldsLength) {
	  _classCallCheck(this, HttpMethod);
	
	  this.Case = caseName;
	  this.Fields = [];
	
	  for (var i = 0; i < fieldsLength; i++) {
	    this.Fields[i] = arguments[i + 2];
	  }
	};
	
	_fableCore.Util.setInterfaces(HttpMethod.prototype, [], "Fable.Helpers.Herebris.Ste.Utils.HttpMethod");
	
	var ajax = exports.ajax = function (meth, onSucess, onError) {
	  var patternInput = function () {
	    var url = meth.Fields[0];
	    return [url, "GET", null];
	  }();
	
	  var url = patternInput[0];
	  var meth_1 = patternInput[1];
	  var data = patternInput[2];
	  var req = new XMLHttpRequest(null);
	
	  req.onreadystatechange = function (_arg1) {
	    if (req.readyState === 4) {
	      var matchValue = req.status;
	
	      var $target0 = function () {
	        onSucess(req.responseText);
	      };
	
	      if (matchValue === 200) {
	        $target0();
	      } else {
	        if (matchValue === 0) {
	          $target0();
	        } else {
	          onError(req.status);
	        }
	      }
	    }
	
	    return null;
	  };
	
	  req.open(meth_1, url, true);
	  req.setRequestHeader("Content-Type", "application/json");
	  req.send(data);
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(297);
	__webpack_require__(168);
	__webpack_require__(299);
	__webpack_require__(298);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(310);
	__webpack_require__(311);
	module.exports = __webpack_require__(13);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(61);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(80);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(89);
	__webpack_require__(91);
	__webpack_require__(93);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(215);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(295);
	__webpack_require__(296);
	module.exports = __webpack_require__(13);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(8)
	  , has            = __webpack_require__(9)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(12)
	  , redefine       = __webpack_require__(22)
	  , META           = __webpack_require__(26).KEY
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(28)
	  , uid            = __webpack_require__(23)
	  , wks            = __webpack_require__(29)
	  , wksExt         = __webpack_require__(30)
	  , wksDefine      = __webpack_require__(31)
	  , keyOf          = __webpack_require__(33)
	  , enumKeys       = __webpack_require__(46)
	  , isArray        = __webpack_require__(49)
	  , anObject       = __webpack_require__(16)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(20)
	  , createDesc     = __webpack_require__(21)
	  , _create        = __webpack_require__(50)
	  , gOPNExt        = __webpack_require__(53)
	  , $GOPD          = __webpack_require__(55)
	  , $DP            = __webpack_require__(15)
	  , $keys          = __webpack_require__(34)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(54).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(48).f  = $propertyIsEnumerable;
	  __webpack_require__(47).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(32)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(13)
	  , hide      = __webpack_require__(14)
	  , redefine  = __webpack_require__(22)
	  , ctx       = __webpack_require__(24)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(15)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(16)
	  , IE8_DOM_DEFINE = __webpack_require__(18)
	  , toPrimitive    = __webpack_require__(20)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(10) && !__webpack_require__(11)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(17);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , hide      = __webpack_require__(14)
	  , has       = __webpack_require__(9)
	  , SRC       = __webpack_require__(23)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(13).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(23)('meta')
	  , isObject = __webpack_require__(17)
	  , has      = __webpack_require__(9)
	  , setDesc  = __webpack_require__(15).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(11)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(15).f
	  , has = __webpack_require__(9)
	  , TAG = __webpack_require__(29)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(27)('wks')
	  , uid        = __webpack_require__(23)
	  , Symbol     = __webpack_require__(8).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(29);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(8)
	  , core           = __webpack_require__(13)
	  , LIBRARY        = __webpack_require__(32)
	  , wksExt         = __webpack_require__(30)
	  , defineProperty = __webpack_require__(15).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(34)
	  , toIObject = __webpack_require__(36);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(9)
	  , toIObject    = __webpack_require__(36)
	  , arrayIndexOf = __webpack_require__(40)(false)
	  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37)
	  , defined = __webpack_require__(39);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(41)
	  , toIndex   = __webpack_require__(43);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(42)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(42)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(27)('keys')
	  , uid    = __webpack_require__(23);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34)
	  , gOPS    = __webpack_require__(47)
	  , pIE     = __webpack_require__(48);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 48 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(16)
	  , dPs         = __webpack_require__(51)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(52).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(15)
	  , anObject = __webpack_require__(16)
	  , getKeys  = __webpack_require__(34);
	
	module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36)
	  , gOPN      = __webpack_require__(54).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(35)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(48)
	  , createDesc     = __webpack_require__(21)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(20)
	  , has            = __webpack_require__(9)
	  , IE8_DOM_DEFINE = __webpack_require__(18)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(50)});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', {defineProperty: __webpack_require__(15).f});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', {defineProperties: __webpack_require__(51)});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(36)
	  , $getOwnPropertyDescriptor = __webpack_require__(55).f;
	
	__webpack_require__(60)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(12)
	  , core    = __webpack_require__(13)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(62)
	  , $getPrototypeOf = __webpack_require__(63);
	
	__webpack_require__(60)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(39);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(9)
	  , toObject    = __webpack_require__(62)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(62)
	  , $keys    = __webpack_require__(34);
	
	__webpack_require__(60)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(60)('getOwnPropertyNames', function(){
	  return __webpack_require__(53).f;
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(17)
	  , meta     = __webpack_require__(26).onFreeze;
	
	__webpack_require__(60)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(17)
	  , meta     = __webpack_require__(26).onFreeze;
	
	__webpack_require__(60)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(17)
	  , meta     = __webpack_require__(26).onFreeze;
	
	__webpack_require__(60)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(17);
	
	__webpack_require__(60)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(17);
	
	__webpack_require__(60)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(17);
	
	__webpack_require__(60)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(12);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(73)});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(34)
	  , gOPS     = __webpack_require__(47)
	  , pIE      = __webpack_require__(48)
	  , toObject = __webpack_require__(62)
	  , IObject  = __webpack_require__(37)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(11)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(12);
	$export($export.S, 'Object', {is: __webpack_require__(75)});

/***/ },
/* 75 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(12);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(77).set});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(17)
	  , anObject = __webpack_require__(16);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(24)(Function.call, __webpack_require__(55).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(79)
	  , test    = {};
	test[__webpack_require__(29)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(22)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(38)
	  , TAG = __webpack_require__(29)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(12);
	
	$export($export.P, 'Function', {bind: __webpack_require__(81)});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(25)
	  , isObject   = __webpack_require__(17)
	  , invoke     = __webpack_require__(82)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(15).f
	  , createDesc = __webpack_require__(21)
	  , has        = __webpack_require__(9)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(17)
	  , getPrototypeOf = __webpack_require__(63)
	  , HAS_INSTANCE   = __webpack_require__(29)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(15).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(12)
	  , $parseInt = __webpack_require__(86);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(8).parseInt
	  , $trim     = __webpack_require__(87).trim
	  , ws        = __webpack_require__(88)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	  , defined = __webpack_require__(39)
	  , fails   = __webpack_require__(11)
	  , spaces  = __webpack_require__(88)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(12)
	  , $parseFloat = __webpack_require__(90);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(8).parseFloat
	  , $trim       = __webpack_require__(87).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(88) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(8)
	  , has               = __webpack_require__(9)
	  , cof               = __webpack_require__(38)
	  , inheritIfRequired = __webpack_require__(92)
	  , toPrimitive       = __webpack_require__(20)
	  , fails             = __webpack_require__(11)
	  , gOPN              = __webpack_require__(54).f
	  , gOPD              = __webpack_require__(55).f
	  , dP                = __webpack_require__(15).f
	  , $trim             = __webpack_require__(87).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(50)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(10) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(22)(global, NUMBER, $Number);
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(17)
	  , setPrototypeOf = __webpack_require__(77).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(12)
	  , toInteger    = __webpack_require__(42)
	  , aNumberValue = __webpack_require__(94)
	  , repeat       = __webpack_require__(95)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(11)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(38);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(42)
	  , defined   = __webpack_require__(39);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(12)
	  , $fails       = __webpack_require__(11)
	  , aNumberValue = __webpack_require__(94)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(12)
	  , _isFinite = __webpack_require__(8).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(100)});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(17)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(12)
	  , isInteger = __webpack_require__(100)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(12)
	  , $parseFloat = __webpack_require__(90);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(12)
	  , $parseInt = __webpack_require__(86);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(12)
	  , log1p   = __webpack_require__(108)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(12)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(12)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(12)
	  , sign    = __webpack_require__(112);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(12)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(12)
	  , $expm1  = __webpack_require__(116);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 116 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(12)
	  , sign      = __webpack_require__(112)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(12)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(12)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(108)});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {sign: __webpack_require__(112)});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(12)
	  , expm1   = __webpack_require__(116)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(12)
	  , expm1   = __webpack_require__(116)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(12)
	  , toIndex        = __webpack_require__(43)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(12)
	  , toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(41);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(87)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(131)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(132)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(42)
	  , defined   = __webpack_require__(39);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(32)
	  , $export        = __webpack_require__(12)
	  , redefine       = __webpack_require__(22)
	  , hide           = __webpack_require__(14)
	  , has            = __webpack_require__(9)
	  , Iterators      = __webpack_require__(133)
	  , $iterCreate    = __webpack_require__(134)
	  , setToStringTag = __webpack_require__(28)
	  , getPrototypeOf = __webpack_require__(63)
	  , ITERATOR       = __webpack_require__(29)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(50)
	  , descriptor     = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(28)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(14)(IteratorPrototype, __webpack_require__(29)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $at     = __webpack_require__(131)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(12)
	  , toLength  = __webpack_require__(41)
	  , context   = __webpack_require__(137)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(139)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(138)
	  , defined  = __webpack_require__(39);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(17)
	  , cof      = __webpack_require__(38)
	  , MATCH    = __webpack_require__(29)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(29)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(12)
	  , context  = __webpack_require__(137)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(139)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(95)
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(12)
	  , toLength    = __webpack_require__(41)
	  , context     = __webpack_require__(137)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(139)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(144)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	  , fails   = __webpack_require__(11)
	  , defined = __webpack_require__(39)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(144)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(144)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(144)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(144)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(144)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(144)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(144)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(144)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(144)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(144)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(144)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(144)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(12)
	  , toObject    = __webpack_require__(62)
	  , toPrimitive = __webpack_require__(20);
	
	$export($export.P + $export.F * __webpack_require__(11)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(12)
	  , fails   = __webpack_require__(11)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(22)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(29)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(14)(proto, TO_PRIMITIVE, __webpack_require__(162));

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(16)
	  , toPrimitive = __webpack_require__(20)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(49)});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(24)
	  , $export        = __webpack_require__(12)
	  , toObject       = __webpack_require__(62)
	  , call           = __webpack_require__(165)
	  , isArrayIter    = __webpack_require__(166)
	  , toLength       = __webpack_require__(41)
	  , createProperty = __webpack_require__(167)
	  , getIterFn      = __webpack_require__(168);
	
	$export($export.S + $export.F * !__webpack_require__(169)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(16);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(133)
	  , ITERATOR   = __webpack_require__(29)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(15)
	  , createDesc      = __webpack_require__(21);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(79)
	  , ITERATOR  = __webpack_require__(29)('iterator')
	  , Iterators = __webpack_require__(133);
	module.exports = __webpack_require__(13).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(29)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(12)
	  , createProperty = __webpack_require__(167);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(12)
	  , toIObject = __webpack_require__(36)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(37) != Object || !__webpack_require__(172)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(11);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(12)
	  , html       = __webpack_require__(52)
	  , cof        = __webpack_require__(38)
	  , toIndex    = __webpack_require__(43)
	  , toLength   = __webpack_require__(41)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(11)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(12)
	  , aFunction = __webpack_require__(25)
	  , toObject  = __webpack_require__(62)
	  , fails     = __webpack_require__(11)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(172)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(12)
	  , $forEach = __webpack_require__(176)(0)
	  , STRICT   = __webpack_require__(172)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(24)
	  , IObject  = __webpack_require__(37)
	  , toObject = __webpack_require__(62)
	  , toLength = __webpack_require__(41)
	  , asc      = __webpack_require__(177);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(178);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17)
	  , isArray  = __webpack_require__(49)
	  , SPECIES  = __webpack_require__(29)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $map    = __webpack_require__(176)(1);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $filter = __webpack_require__(176)(2);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $some   = __webpack_require__(176)(3);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $every  = __webpack_require__(176)(4);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $reduce = __webpack_require__(184);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(25)
	  , toObject  = __webpack_require__(62)
	  , IObject   = __webpack_require__(37)
	  , toLength  = __webpack_require__(41);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $reduce = __webpack_require__(184);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(12)
	  , $indexOf      = __webpack_require__(40)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(172)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(12)
	  , toIObject     = __webpack_require__(36)
	  , toInteger     = __webpack_require__(42)
	  , toLength      = __webpack_require__(41)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(172)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(12);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(189)});
	
	__webpack_require__(190)('copyWithin');

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(62)
	  , toIndex  = __webpack_require__(43)
	  , toLength = __webpack_require__(41);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(29)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(14)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(12);
	
	$export($export.P, 'Array', {fill: __webpack_require__(192)});
	
	__webpack_require__(190)('fill');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(62)
	  , toIndex  = __webpack_require__(43)
	  , toLength = __webpack_require__(41);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(12)
	  , $find   = __webpack_require__(176)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(190)(KEY);

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(12)
	  , $find   = __webpack_require__(176)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(190)(KEY);

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(196)('Array');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(8)
	  , dP          = __webpack_require__(15)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(29)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(190)
	  , step             = __webpack_require__(198)
	  , Iterators        = __webpack_require__(133)
	  , toIObject        = __webpack_require__(36);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(132)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(8)
	  , inheritIfRequired = __webpack_require__(92)
	  , dP                = __webpack_require__(15).f
	  , gOPN              = __webpack_require__(54).f
	  , isRegExp          = __webpack_require__(138)
	  , $flags            = __webpack_require__(200)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(29)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(22)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(196)('RegExp');

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(16);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(202);
	var anObject    = __webpack_require__(16)
	  , $flags      = __webpack_require__(200)
	  , DESCRIPTORS = __webpack_require__(10)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(22)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(11)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(10) && /./g.flags != 'g')__webpack_require__(15).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(200)
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(204)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(14)
	  , redefine = __webpack_require__(22)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(39)
	  , wks      = __webpack_require__(29);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(204)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(204)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(204)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(138)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(32)
	  , global             = __webpack_require__(8)
	  , ctx                = __webpack_require__(24)
	  , classof            = __webpack_require__(79)
	  , $export            = __webpack_require__(12)
	  , isObject           = __webpack_require__(17)
	  , aFunction          = __webpack_require__(25)
	  , anInstance         = __webpack_require__(209)
	  , forOf              = __webpack_require__(210)
	  , speciesConstructor = __webpack_require__(211)
	  , task               = __webpack_require__(212).set
	  , microtask          = __webpack_require__(213)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(29)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(214)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(28)($Promise, PROMISE);
	__webpack_require__(196)(PROMISE);
	Wrapper = __webpack_require__(13)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(169)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(24)
	  , call        = __webpack_require__(165)
	  , isArrayIter = __webpack_require__(166)
	  , anObject    = __webpack_require__(16)
	  , toLength    = __webpack_require__(41)
	  , getIterFn   = __webpack_require__(168)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(16)
	  , aFunction = __webpack_require__(25)
	  , SPECIES   = __webpack_require__(29)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(24)
	  , invoke             = __webpack_require__(82)
	  , html               = __webpack_require__(52)
	  , cel                = __webpack_require__(19)
	  , global             = __webpack_require__(8)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(38)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , macrotask = __webpack_require__(212).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(38)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(22);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(216);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(217)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(15).f
	  , create      = __webpack_require__(50)
	  , redefineAll = __webpack_require__(214)
	  , ctx         = __webpack_require__(24)
	  , anInstance  = __webpack_require__(209)
	  , defined     = __webpack_require__(39)
	  , forOf       = __webpack_require__(210)
	  , $iterDefine = __webpack_require__(132)
	  , step        = __webpack_require__(198)
	  , setSpecies  = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(10)
	  , fastKey     = __webpack_require__(26).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(8)
	  , $export           = __webpack_require__(12)
	  , redefine          = __webpack_require__(22)
	  , redefineAll       = __webpack_require__(214)
	  , meta              = __webpack_require__(26)
	  , forOf             = __webpack_require__(210)
	  , anInstance        = __webpack_require__(209)
	  , isObject          = __webpack_require__(17)
	  , fails             = __webpack_require__(11)
	  , $iterDetect       = __webpack_require__(169)
	  , setToStringTag    = __webpack_require__(28)
	  , inheritIfRequired = __webpack_require__(92);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(216);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(217)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(176)(0)
	  , redefine     = __webpack_require__(22)
	  , meta         = __webpack_require__(26)
	  , assign       = __webpack_require__(73)
	  , weak         = __webpack_require__(220)
	  , isObject     = __webpack_require__(17)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(217)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(214)
	  , getWeak           = __webpack_require__(26).getWeak
	  , anObject          = __webpack_require__(16)
	  , isObject          = __webpack_require__(17)
	  , anInstance        = __webpack_require__(209)
	  , forOf             = __webpack_require__(210)
	  , createArrayMethod = __webpack_require__(176)
	  , $has              = __webpack_require__(9)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(220);
	
	// 23.4 WeakSet Objects
	__webpack_require__(217)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(12)
	  , $typed       = __webpack_require__(223)
	  , buffer       = __webpack_require__(224)
	  , anObject     = __webpack_require__(16)
	  , toIndex      = __webpack_require__(43)
	  , toLength     = __webpack_require__(41)
	  , isObject     = __webpack_require__(17)
	  , ArrayBuffer  = __webpack_require__(8).ArrayBuffer
	  , speciesConstructor = __webpack_require__(211)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(11)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(196)(ARRAY_BUFFER);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , hide   = __webpack_require__(14)
	  , uid    = __webpack_require__(23)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(8)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , LIBRARY        = __webpack_require__(32)
	  , $typed         = __webpack_require__(223)
	  , hide           = __webpack_require__(14)
	  , redefineAll    = __webpack_require__(214)
	  , fails          = __webpack_require__(11)
	  , anInstance     = __webpack_require__(209)
	  , toInteger      = __webpack_require__(42)
	  , toLength       = __webpack_require__(41)
	  , gOPN           = __webpack_require__(54).f
	  , dP             = __webpack_require__(15).f
	  , arrayFill      = __webpack_require__(192)
	  , setToStringTag = __webpack_require__(28)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	$export($export.G + $export.W + $export.F * !__webpack_require__(223).ABV, {
	  DataView: __webpack_require__(224).DataView
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(10)){
	  var LIBRARY             = __webpack_require__(32)
	    , global              = __webpack_require__(8)
	    , fails               = __webpack_require__(11)
	    , $export             = __webpack_require__(12)
	    , $typed              = __webpack_require__(223)
	    , $buffer             = __webpack_require__(224)
	    , ctx                 = __webpack_require__(24)
	    , anInstance          = __webpack_require__(209)
	    , propertyDesc        = __webpack_require__(21)
	    , hide                = __webpack_require__(14)
	    , redefineAll         = __webpack_require__(214)
	    , toInteger           = __webpack_require__(42)
	    , toLength            = __webpack_require__(41)
	    , toIndex             = __webpack_require__(43)
	    , toPrimitive         = __webpack_require__(20)
	    , has                 = __webpack_require__(9)
	    , same                = __webpack_require__(75)
	    , classof             = __webpack_require__(79)
	    , isObject            = __webpack_require__(17)
	    , toObject            = __webpack_require__(62)
	    , isArrayIter         = __webpack_require__(166)
	    , create              = __webpack_require__(50)
	    , getPrototypeOf      = __webpack_require__(63)
	    , gOPN                = __webpack_require__(54).f
	    , getIterFn           = __webpack_require__(168)
	    , uid                 = __webpack_require__(23)
	    , wks                 = __webpack_require__(29)
	    , createArrayMethod   = __webpack_require__(176)
	    , createArrayIncludes = __webpack_require__(40)
	    , speciesConstructor  = __webpack_require__(211)
	    , ArrayIterators      = __webpack_require__(197)
	    , Iterators           = __webpack_require__(133)
	    , $iterDetect         = __webpack_require__(169)
	    , setSpecies          = __webpack_require__(196)
	    , arrayFill           = __webpack_require__(192)
	    , arrayCopyWithin     = __webpack_require__(189)
	    , $DP                 = __webpack_require__(15)
	    , $GOPD               = __webpack_require__(55)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(12)
	  , aFunction = __webpack_require__(25)
	  , anObject  = __webpack_require__(16)
	  , rApply    = (__webpack_require__(8).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(11)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(12)
	  , create     = __webpack_require__(50)
	  , aFunction  = __webpack_require__(25)
	  , anObject   = __webpack_require__(16)
	  , isObject   = __webpack_require__(17)
	  , fails      = __webpack_require__(11)
	  , bind       = __webpack_require__(81)
	  , rConstruct = (__webpack_require__(8).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(15)
	  , $export     = __webpack_require__(12)
	  , anObject    = __webpack_require__(16)
	  , toPrimitive = __webpack_require__(20);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(12)
	  , gOPD     = __webpack_require__(55).f
	  , anObject = __webpack_require__(16);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(12)
	  , anObject = __webpack_require__(16);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(134)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(55)
	  , getPrototypeOf = __webpack_require__(63)
	  , has            = __webpack_require__(9)
	  , $export        = __webpack_require__(12)
	  , isObject       = __webpack_require__(17)
	  , anObject       = __webpack_require__(16);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(55)
	  , $export  = __webpack_require__(12)
	  , anObject = __webpack_require__(16);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(12)
	  , getProto = __webpack_require__(63)
	  , anObject = __webpack_require__(16);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(12)
	  , anObject      = __webpack_require__(16)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(247)});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(54)
	  , gOPS     = __webpack_require__(47)
	  , anObject = __webpack_require__(16)
	  , Reflect  = __webpack_require__(8).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(12)
	  , anObject           = __webpack_require__(16)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(15)
	  , gOPD           = __webpack_require__(55)
	  , getPrototypeOf = __webpack_require__(63)
	  , has            = __webpack_require__(9)
	  , $export        = __webpack_require__(12)
	  , createDesc     = __webpack_require__(21)
	  , anObject       = __webpack_require__(16)
	  , isObject       = __webpack_require__(17);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(12)
	  , setProto = __webpack_require__(77);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(12)
	  , $includes = __webpack_require__(40)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(190)('includes');

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(12)
	  , $at     = __webpack_require__(131)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(12)
	  , $pad    = __webpack_require__(254);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(41)
	  , repeat   = __webpack_require__(95)
	  , defined  = __webpack_require__(39);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(12)
	  , $pad    = __webpack_require__(254);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(87)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(87)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(12)
	  , defined     = __webpack_require__(39)
	  , toLength    = __webpack_require__(41)
	  , isRegExp    = __webpack_require__(138)
	  , getFlags    = __webpack_require__(200)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(134)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31)('asyncIterator');

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31)('observable');

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(12)
	  , ownKeys        = __webpack_require__(247)
	  , toIObject      = __webpack_require__(36)
	  , gOPD           = __webpack_require__(55)
	  , createProperty = __webpack_require__(167);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(12)
	  , $values = __webpack_require__(263)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(34)
	  , toIObject = __webpack_require__(36)
	  , isEnum    = __webpack_require__(48).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(12)
	  , $entries = __webpack_require__(263)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(12)
	  , toObject        = __webpack_require__(62)
	  , aFunction       = __webpack_require__(25)
	  , $defineProperty = __webpack_require__(15);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(32)|| !__webpack_require__(11)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(8)[K];
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(12)
	  , toObject        = __webpack_require__(62)
	  , aFunction       = __webpack_require__(25)
	  , $defineProperty = __webpack_require__(15);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(12)
	  , toObject                 = __webpack_require__(62)
	  , toPrimitive              = __webpack_require__(20)
	  , getPrototypeOf           = __webpack_require__(63)
	  , getOwnPropertyDescriptor = __webpack_require__(55).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(12)
	  , toObject                 = __webpack_require__(62)
	  , toPrimitive              = __webpack_require__(20)
	  , getPrototypeOf           = __webpack_require__(63)
	  , getOwnPropertyDescriptor = __webpack_require__(55).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(12);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(271)('Map')});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(79)
	  , from    = __webpack_require__(272);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(210);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(12);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(271)('Set')});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(12);
	
	$export($export.S, 'System', {global: __webpack_require__(8)});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(12)
	  , cof     = __webpack_require__(38);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(281)
	  , anObject                  = __webpack_require__(16)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(215)
	  , $export = __webpack_require__(12)
	  , shared  = __webpack_require__(27)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(219)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , getPrototypeOf         = __webpack_require__(63)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(218)
	  , from                    = __webpack_require__(272)
	  , metadata                = __webpack_require__(281)
	  , anObject                = __webpack_require__(16)
	  , getPrototypeOf          = __webpack_require__(63)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(281)
	  , anObject                = __webpack_require__(16)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , getPrototypeOf         = __webpack_require__(63)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(281)
	  , anObject                  = __webpack_require__(16)
	  , aFunction                 = __webpack_require__(25)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(12)
	  , microtask = __webpack_require__(213)()
	  , process   = __webpack_require__(8).process
	  , isNode    = __webpack_require__(38)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(12)
	  , global      = __webpack_require__(8)
	  , core        = __webpack_require__(13)
	  , microtask   = __webpack_require__(213)()
	  , OBSERVABLE  = __webpack_require__(29)('observable')
	  , aFunction   = __webpack_require__(25)
	  , anObject    = __webpack_require__(16)
	  , anInstance  = __webpack_require__(209)
	  , redefineAll = __webpack_require__(214)
	  , hide        = __webpack_require__(14)
	  , forOf       = __webpack_require__(210)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(196)('Observable');

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(8)
	  , $export    = __webpack_require__(12)
	  , invoke     = __webpack_require__(82)
	  , partial    = __webpack_require__(293)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(294)
	  , invoke    = __webpack_require__(82)
	  , aFunction = __webpack_require__(25);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	  , $task   = __webpack_require__(212);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(197)
	  , redefine      = __webpack_require__(22)
	  , global        = __webpack_require__(8)
	  , hide          = __webpack_require__(14)
	  , Iterators     = __webpack_require__(133)
	  , wks           = __webpack_require__(29)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(24)
	  , $export        = __webpack_require__(12)
	  , createDesc     = __webpack_require__(21)
	  , assign         = __webpack_require__(73)
	  , create         = __webpack_require__(50)
	  , getPrototypeOf = __webpack_require__(63)
	  , getKeys        = __webpack_require__(34)
	  , dP             = __webpack_require__(15)
	  , keyOf          = __webpack_require__(33)
	  , aFunction      = __webpack_require__(25)
	  , forOf          = __webpack_require__(210)
	  , isIterable     = __webpack_require__(298)
	  , $iterCreate    = __webpack_require__(134)
	  , step           = __webpack_require__(198)
	  , isObject       = __webpack_require__(17)
	  , toIObject      = __webpack_require__(36)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , has            = __webpack_require__(9);
	
	// 0 -> Dict.forEach
	// 1 -> Dict.map
	// 2 -> Dict.filter
	// 3 -> Dict.some
	// 4 -> Dict.every
	// 5 -> Dict.find
	// 6 -> Dict.findKey
	// 7 -> Dict.mapPairs
	var createDictMethod = function(TYPE){
	  var IS_MAP   = TYPE == 1
	    , IS_EVERY = TYPE == 4;
	  return function(object, callbackfn, that /* = undefined */){
	    var f      = ctx(callbackfn, that, 3)
	      , O      = toIObject(object)
	      , result = IS_MAP || TYPE == 7 || TYPE == 2
	          ? new (typeof this == 'function' ? this : Dict) : undefined
	      , key, val, res;
	    for(key in O)if(has(O, key)){
	      val = O[key];
	      res = f(val, key, object);
	      if(TYPE){
	        if(IS_MAP)result[key] = res;            // map
	        else if(res)switch(TYPE){
	          case 2: result[key] = val; break;     // filter
	          case 3: return true;                  // some
	          case 5: return val;                   // find
	          case 6: return key;                   // findKey
	          case 7: result[res[0]] = res[1];      // mapPairs
	        } else if(IS_EVERY)return false;        // every
	      }
	    }
	    return TYPE == 3 || IS_EVERY ? IS_EVERY : result;
	  };
	};
	var findKey = createDictMethod(6);
	
	var createDictIter = function(kind){
	  return function(it){
	    return new DictIterator(it, kind);
	  };
	};
	var DictIterator = function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._a = getKeys(iterated);   // keys
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	};
	$iterCreate(DictIterator, 'Dict', function(){
	  var that = this
	    , O    = that._t
	    , keys = that._a
	    , kind = that._k
	    , key;
	  do {
	    if(that._i >= keys.length){
	      that._t = undefined;
	      return step(1);
	    }
	  } while(!has(O, key = keys[that._i++]));
	  if(kind == 'keys'  )return step(0, key);
	  if(kind == 'values')return step(0, O[key]);
	  return step(0, [key, O[key]]);
	});
	
	function Dict(iterable){
	  var dict = create(null);
	  if(iterable != undefined){
	    if(isIterable(iterable)){
	      forOf(iterable, true, function(key, value){
	        dict[key] = value;
	      });
	    } else assign(dict, iterable);
	  }
	  return dict;
	}
	Dict.prototype = null;
	
	function reduce(object, mapfn, init){
	  aFunction(mapfn);
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , i      = 0
	    , memo, key;
	  if(arguments.length < 3){
	    if(!length)throw TypeError('Reduce of empty object with no initial value');
	    memo = O[keys[i++]];
	  } else memo = Object(init);
	  while(length > i)if(has(O, key = keys[i++])){
	    memo = mapfn(memo, O[key], key, object);
	  }
	  return memo;
	}
	
	function includes(object, el){
	  return (el == el ? keyOf(object, el) : findKey(object, function(it){
	    return it != it;
	  })) !== undefined;
	}
	
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function set(object, key, value){
	  if(DESCRIPTORS && key in Object)dP.f(object, key, createDesc(0, value));
	  else object[key] = value;
	  return object;
	}
	
	function isDict(it){
	  return isObject(it) && getPrototypeOf(it) === Dict.prototype;
	}
	
	$export($export.G + $export.F, {Dict: Dict});
	
	$export($export.S, 'Dict', {
	  keys:     createDictIter('keys'),
	  values:   createDictIter('values'),
	  entries:  createDictIter('entries'),
	  forEach:  createDictMethod(0),
	  map:      createDictMethod(1),
	  filter:   createDictMethod(2),
	  some:     createDictMethod(3),
	  every:    createDictMethod(4),
	  find:     createDictMethod(5),
	  findKey:  findKey,
	  mapPairs: createDictMethod(7),
	  reduce:   reduce,
	  keyOf:    keyOf,
	  includes: includes,
	  has:      has,
	  get:      get,
	  set:      set,
	  isDict:   isDict
	});

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(79)
	  , ITERATOR  = __webpack_require__(29)('iterator')
	  , Iterators = __webpack_require__(133);
	module.exports = __webpack_require__(13).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(16)
	  , get      = __webpack_require__(168);
	module.exports = __webpack_require__(13).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var global  = __webpack_require__(8)
	  , core    = __webpack_require__(13)
	  , $export = __webpack_require__(12)
	  , partial = __webpack_require__(293);
	// https://esdiscuss.org/topic/promise-returning-delay-function
	$export($export.G + $export.F, {
	  delay: function delay(time){
	    return new (core.Promise || global.Promise)(function(resolve){
	      setTimeout(partial.call(resolve, true), time);
	    });
	  }
	});

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var path    = __webpack_require__(294)
	  , $export = __webpack_require__(12);
	
	// Placeholder
	__webpack_require__(13)._ = path._ = path._ || {};
	
	$export($export.P + $export.F, 'Function', {part: __webpack_require__(293)});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	
	$export($export.S + $export.F, 'Object', {isObject: __webpack_require__(17)});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	
	$export($export.S + $export.F, 'Object', {classof: __webpack_require__(79)});

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	  , define  = __webpack_require__(305);
	
	$export($export.S + $export.F, 'Object', {define: define});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var dP        = __webpack_require__(15)
	  , gOPD      = __webpack_require__(55)
	  , ownKeys   = __webpack_require__(247)
	  , toIObject = __webpack_require__(36);
	
	module.exports = function define(target, mixin){
	  var keys   = ownKeys(toIObject(mixin))
	    , length = keys.length
	    , i = 0, key;
	  while(length > i)dP.f(target, key = keys[i++], gOPD.f(mixin, key));
	  return target;
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	  , define  = __webpack_require__(305)
	  , create  = __webpack_require__(50);
	
	$export($export.S + $export.F, 'Object', {
	  make: function(proto, mixin){
	    return define(create(proto), mixin);
	  }
	});

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(132)(Number, 'Number', function(iterated){
	  this._l = +iterated;
	  this._i = 0;
	}, function(){
	  var i    = this._i++
	    , done = !(i < this._l);
	  return {done: done, value: done ? undefined : i};
	});

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(12)
	  , $re     = __webpack_require__(309)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 309 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12);
	var $re = __webpack_require__(309)(/[&<>"']/g, {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&apos;'
	});
	
	$export($export.P + $export.F, 'String', {escapeHTML: function escapeHTML(){ return $re(this); }});

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12);
	var $re = __webpack_require__(309)(/&(?:amp|lt|gt|quot|apos);/g, {
	  '&amp;':  '&',
	  '&lt;':   '<',
	  '&gt;':   '>',
	  '&quot;': '"',
	  '&apos;': "'"
	});
	
	$export($export.P + $export.F, 'String', {unescapeHTML:  function unescapeHTML(){ return $re(this); }});

/***/ }
/******/ ]);
//# sourceMappingURL=sample.js.map