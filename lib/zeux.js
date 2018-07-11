(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("zeux", [], factory);
	else if(typeof exports === 'object')
		exports["zeux"] = factory();
	else
		root["zeux"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Color.js":
/*!**********************!*\
  !*** ./src/Color.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Color =
/*#__PURE__*/
function () {
  function Color() {
    _classCallCheck(this, Color);

    this._lineColor = '#00CED1';
  }

  _createClass(Color, [{
    key: "lineColor",
    set: function set(color) {
      this._lineColor = color;
    },
    get: function get() {
      return this._lineColor;
    }
  }]);

  return Color;
}();

exports.default = Color;
module.exports = exports["default"];

/***/ }),

/***/ "./src/Rect.js":
/*!*********************!*\
  !*** ./src/Rect.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rect =
/*#__PURE__*/
function () {
  function Rect(canvas) {
    _classCallCheck(this, Rect);

    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
  }

  _createClass(Rect, [{
    key: "update",
    value: function update() {
      this._ctx.beginPath();

      this._ctx.moveTo(100, 100);

      this._ctx.lineTo(200, 100);

      this._ctx.lineTo(200, 300);

      this._ctx.lineTo(100, 300);

      this._ctx.closePath();

      this._ctx.fill();
    }
  }]);

  return Rect;
}();

exports.default = Rect;
module.exports = exports["default"];

/***/ }),

/***/ "./src/base-canvas.js":
/*!****************************!*\
  !*** ./src/base-canvas.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseCanvas =
/*#__PURE__*/
function () {
  function BaseCanvas(canvas) {
    _classCallCheck(this, BaseCanvas);

    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
  }

  _createClass(BaseCanvas, [{
    key: "scale",
    value: function scale(x, y) {
      this._ctx.scale(x, y);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }]);

  return BaseCanvas;
}();

exports.default = BaseCanvas;
module.exports = exports["default"];

/***/ }),

/***/ "./src/circle.js":
/*!***********************!*\
  !*** ./src/circle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Circle =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(Circle, _BaseCanvas);

  function Circle(canvas) {
    var _this;

    _classCallCheck(this, Circle);

    _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, canvas));
    _this._dotsPerCircle = 30;
    _this._interval = Math.PI * 2 / _this._dotsPerCircle;
    _this._centerX = 100;
    _this._centerY = 100;
    _this._radius = 50;
    _this._angle = 0;
    _this._speed = 15;
    return _this;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      var _this2 = this;

      this._timer = setInterval(function () {
        _this2._angle = (_this2._angle + 1) % 360;

        _this2.clearAll();

        _this2._ctx.save();

        _this2._ctx.translate(100, 100);

        _this2._ctx.rotate(_this2._angle * Math.PI / 180);

        for (var i = 0; i < _this2._dotsPerCircle; i++) {
          var desiredRadianAngleOnCircle = _this2._interval * i;
          var x = _this2._centerX + _this2._radius * Math.cos(desiredRadianAngleOnCircle) - 100;
          var y = _this2._centerY + _this2._radius * Math.sin(desiredRadianAngleOnCircle) - 100;

          _this2._ctx.beginPath();

          _this2._ctx.arc(x, y, 3, 0, Math.PI * 2);

          _this2._ctx.closePath();

          _this2._ctx.fill();
        }

        _this2._ctx.restore();
      }, this._speed);
    }
  }, {
    key: "speed",
    set: function set(n) {
      clearInterval(this._timer);
      this._speed = n;
      this.draw();
    },
    get: function get() {
      return this._speed;
    }
  }]);

  return Circle;
}(_baseCanvas.default);

exports.default = Circle;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function get() {
    return _circle.default;
  }
});
Object.defineProperty(exports, "Rect", {
  enumerable: true,
  get: function get() {
    return _Rect.default;
  }
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function get() {
    return _Color.default;
  }
});

var _circle = _interopRequireDefault(__webpack_require__(/*! ./circle.js */ "./src/circle.js"));

var _Rect = _interopRequireDefault(__webpack_require__(/*! ./Rect.js */ "./src/Rect.js"));

var _Color = _interopRequireDefault(__webpack_require__(/*! ./Color.js */ "./src/Color.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=zeux.js.map