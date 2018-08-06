(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("zeu", [], factory);
	else if(typeof exports === 'object')
		exports["zeu"] = factory();
	else
		root["zeu"] = factory();
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

/***/ "./src/animation-timer.js":
/*!********************************!*\
  !*** ./src/animation-timer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = __webpack_require__(/*! ./global */ "./src/global.js");

var _settings = _interopRequireDefault(__webpack_require__(/*! ./settings */ "./src/settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnimationTimer =
/*#__PURE__*/
function () {
  function AnimationTimer() {
    _classCallCheck(this, AnimationTimer);

    // Bind the render function.
    this.render = this.render.bind(this); // Animation parameters.

    this._fps = _settings.default._fps;
    this._fpsInterval = 1000 / this._fps;
    this._lastFrame = Date.now(); // Cross browser.

    if (!window.requestAnimationFrame) {
      window.requestAnimFrame = function () {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
      };
    }
  }

  _createClass(AnimationTimer, [{
    key: "render",
    value: function render() {
      window.requestAnimationFrame(this.render); // FPS control

      var now = Date.now();
      var elapsed = now - this._lastFrame;

      if (elapsed > this._fpsInterval) {
        this._lastFrame = now - elapsed % this._fpsInterval; // Draw

        for (var i = 0; i < _global.GLOBAL.requestAnimationFrameArray.length; i++) {
          var drawFrameObj = _global.GLOBAL.requestAnimationFrameArray[i]; // Buy me some time.

          /*
          setTimeout(() => {
            drawFrameObj.func.call(drawFrameObj.self);
          }, 0);
          */

          drawFrameObj.func.call(drawFrameObj.self);
        }
      }
    }
  }]);

  return AnimationTimer;
}();

var _default = new AnimationTimer();

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/bar-meter.js":
/*!**************************!*\
  !*** ./src/bar-meter.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BarMeter =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(BarMeter, _BaseCanvas);

  function BarMeter(canvas, options) {
    var _this;

    _classCallCheck(this, BarMeter);

    _this = _possibleConstructorReturn(this, (BarMeter.__proto__ || Object.getPrototypeOf(BarMeter)).call(this, canvas, 100, 200)); // Options

    _this._min = _utility.default.has(options, 'min') ? options.min : 0;
    _this._max = _utility.default.has(options, 'max') ? options.max : 100;
    _this._value = _utility.default.has(options, 'value') ? options.value : 50;
    _this._dashColor = _utility.default.has(options, 'dashColor') ? options.dashColor : _color.COLOR.grey;
    _this._barColor = _utility.default.has(options, 'barColor') ? options.barColor : _color.COLOR.green;
    _this._speed = _utility.default.has(options, 'speed') ? options.speed : 5;
    _this._barWidth = 80;
    _this._barHeight = 15;
    _this._space = (100 - _this._barWidth) / 2;
    _this._currBar = 0;
    _this._numberOfBars = Math.floor((_this._value - _this._min) / (_this._max - _this._min) * 10);
    _this._barMax = _this._numberOfBars * 100;
    return _this;
  }

  _createClass(BarMeter, [{
    key: "postConstructor",
    value: function postConstructor() {
      _get(BarMeter.prototype.__proto__ || Object.getPrototypeOf(BarMeter.prototype), "postConstructor", this).call(this);

      this._ctx.globalCompositeOperation = 'source-over';
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      this.clearAll();

      this._ctx.save();

      this.scale();
      this._ctx.fillStyle = this._dashColor;

      for (var i = 0; i < 10; i++) {
        var y = 5 + i * 20;

        this._ctx.beginPath();

        this._ctx.fillRect(this._space, y, this._barWidth, this._barHeight);

        this._ctx.closePath();
      }

      this._ctx.fillStyle = this._barColor;

      if (this._currBar >= this._barMax) {
        this._currBar = -100;
      } else {
        var bar = this._currBar / 100;

        for (var _i = 0; _i < bar; _i++) {
          var _y = 200 - (15 + _i * 20);

          this._ctx.beginPath();

          this._ctx.fillRect(this._space, _y, this._barWidth, this._barHeight);

          this._ctx.closePath();
        }

        this._currBar += this._speed;
      }

      this._ctx.restore();
    }
  }, {
    key: "value",
    set: function set(value) {
      this._value = value;
      this._numberOfBars = Math.floor((this._value - this._min) / (this._max - this._min) * 10);
      this._barMax = this._numberOfBars * 100;
    },
    get: function get() {
      return this._value;
    }
  }, {
    key: "valuePct",
    get: function get() {
      return Math.floor(this._value / (this._max - this._min) * 100);
    }
  }, {
    key: "dashColor",
    set: function set(dashColor) {
      this._dashColor = dashColor;
    },
    get: function get() {
      return this._dashColor;
    }
  }, {
    key: "barColor",
    set: function set(barColor) {
      this._barColor = barColor;
    },
    get: function get() {
      return this._barColor;
    }
  }]);

  return BarMeter;
}(_baseCanvas.default);

exports.default = BarMeter;
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

var _global = __webpack_require__(/*! ./global */ "./src/global.js");

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseCanvas =
/*#__PURE__*/
function () {
  function BaseCanvas(baseDiv, width, height) {
    _classCallCheck(this, BaseCanvas);

    this._div = baseDiv;
    this._defaultWidth = width;
    this._defaultHeight = height;
    this._canvas = document.createElement('canvas');

    this._canvas.setAttribute('width', baseDiv.clientWidth);

    this._canvas.setAttribute('height', baseDiv.clientHeight);

    this._div.appendChild(this._canvas);

    this._ctx = this._canvas.getContext('2d'); // Base scale on the height. Use CSS transform instead of scale()
    // let heightScale = baseDiv.clientHeight / height;
    // this._canvas.style.transformOrigin = '0 0'; // scale from top left
    // this._canvas.style.transform = 'scale(' + heightScale + ')';
    // Bind the drawFrame function.

    this.drawFrame = this.drawFrame.bind(this); // Default color

    this._fontColor = _color.COLOR.black;
    this._lineColor = _color.COLOR.grey;
    this._fillColor = _color.COLOR.green;
    this.postConstructor();
  }

  _createClass(BaseCanvas, [{
    key: "destroy",
    value: function destroy() {
      this.stopAnimation();

      this._div.removeChild(this._canvas);
    }
  }, {
    key: "postConstructor",
    value: function postConstructor() {
      this.startAnimation();
    }
  }, {
    key: "scale",
    value: function scale() {
      // Base scale on the height.
      var heightScale = this._div.clientHeight / this._defaultHeight; // Width after being scaled.

      this._scaledWidth = this._defaultWidth / heightScale;

      this._ctx.scale(heightScale, heightScale);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var index = this.getAnimationFrameArrayPos();

      if (index === -1) {
        _global.GLOBAL.requestAnimationFrameArray.push(this.drawFrameObj());
      }
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      var index = this.getAnimationFrameArrayPos();

      if (index !== -1) {
        _global.GLOBAL.requestAnimationFrameArray.splice(index, 1);
      }
    }
  }, {
    key: "drawFrameObj",
    value: function drawFrameObj() {
      return {
        func: this.drawFrame,
        self: this
      };
    }
  }, {
    key: "getAnimationFrameArrayPos",
    value: function getAnimationFrameArrayPos() {
      var index = -1;

      for (var i = 0; i < _global.GLOBAL.requestAnimationFrameArray.length; i++) {
        var drawFrameObj = _global.GLOBAL.requestAnimationFrameArray[i];

        if (drawFrameObj.self._div.id === this._div.id) {
          index = i;
          break;
        }
      }

      return index;
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {}
  }, {
    key: "isAnimationOn",
    get: function get() {
      return this.getAnimationFrameArrayPos() !== -1;
    }
  }]);

  return BaseCanvas;
}();

exports.default = BaseCanvas;
module.exports = exports["default"];

/***/ }),

/***/ "./src/blink-text.js":
/*!***************************!*\
  !*** ./src/blink-text.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlinkText =
/*#__PURE__*/
function () {
  function BlinkText(baseDiv, options) {
    _classCallCheck(this, BlinkText);

    this._div = baseDiv;
    this._defaultCss = baseDiv.style.cssText;
    this._blinkTimer = null; // Options

    this._interval = _utility.default.has(options, 'interval') ? options.interval : 500;
    this._blinkCss = _utility.default.has(options, 'blinkCss') ? options.blinkCss : 'color: white; background-color: red;';
  }

  _createClass(BlinkText, [{
    key: "blink",
    value: function blink(message) {
      var _this = this;

      if (message != null) {
        this._div.innerHTML = message;
      }

      if (this._blinkTimer == null) {
        this._blinkTimer = setInterval(function () {
          var currCss = _this._div.style.cssText !== _this._defaultCss ? _this._defaultCss : _this._blinkCss;
          _this._div.style.cssText = currCss;
        }, this._interval);
      }
    }
  }, {
    key: "unblink",
    value: function unblink() {
      if (this._blinkTimer != null) {
        clearInterval(this._blinkTimer);
        this._blinkTimer = null;
        this._div.style.cssText = this._defaultCss;
      }
    }
  }, {
    key: "interval",
    set: function set(interval) {
      this._interval = interval;

      if (this._blinkTimer != null) {
        this.unblink();
        this.blink();
      }
    },
    get: function get() {
      return this._interval;
    }
  }, {
    key: "blinkCss",
    set: function set(blinkCss) {
      this._blinkCss = blinkCss;
    },
    get: function get() {
      return this._blinkCss;
    }
  }]);

  return BlinkText;
}();

exports.default = BlinkText;
module.exports = exports["default"];

/***/ }),

/***/ "./src/color.js":
/*!**********************!*\
  !*** ./src/color.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLOR = void 0;
var COLOR = {
  green: '#00d7af',
  grey: '#F8F8FF',
  black: '#000',
  white: '#fff',
  red: '#dc3545'
};
exports.COLOR = COLOR;

/***/ }),

/***/ "./src/digital-clock.js":
/*!******************************!*\
  !*** ./src/digital-clock.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DigitalClock =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(DigitalClock, _BaseCanvas);

  function DigitalClock(baseDiv, options) {
    var _this;

    _classCallCheck(this, DigitalClock);

    _this = _possibleConstructorReturn(this, (DigitalClock.__proto__ || Object.getPrototypeOf(DigitalClock)).call(this, baseDiv, 370, 100)); // Options
    // Bar width

    _this._bw = _utility.default.has(options, 'barWidth') ? options.barWidth : 4; // Bar height

    _this._bh = _utility.default.has(options, 'barHeight') ? options.barHeight : 20; // Space between numbers

    _this._space = _utility.default.has(options, 'space') ? options.space : 10;
    _this._numberColor = _utility.default.has(options, 'numberColor') ? options.numberColor : _color.COLOR.green;
    _this._dashColor = _utility.default.has(options, 'dashColor') ? options.dashColor : _color.COLOR.grey;
    _this._hourOffset = _utility.default.has(options, 'hourOffset') ? options.hourOffset : 0;
    _this._timer = null;
    return _this;
  }

  _createClass(DigitalClock, [{
    key: "postConstructor",
    value: function postConstructor() {
      this.tick();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stopTick();

      _get(DigitalClock.prototype.__proto__ || Object.getPrototypeOf(DigitalClock.prototype), "destroy", this).call(this);
    }
  }, {
    key: "tick",
    value: function tick() {
      var _this2 = this;

      if (this._timer == null) {
        this._timer = setInterval(function () {
          var now = _utility.default.addHour(_this2._hourOffset);

          _this2.clearAll();

          _this2._ctx.save();

          _this2.scale();

          _this2._ctx.translate(_this2._space, _this2._space); // Draw hour.


          _this2.drawTime(now.getHours());

          _this2.drawInterpoint(); // Draw minute.


          _this2.drawTime(now.getMinutes());

          _this2.drawInterpoint(); // Draw second.


          _this2.drawTime(now.getSeconds());

          _this2._ctx.restore();
        }, 1000);
      }
    }
  }, {
    key: "stopTick",
    value: function stopTick() {
      if (this._timer != null) {
        clearInterval(this._timer);
        this._timer = null;
      }
    }
  }, {
    key: "drawInterpoint",
    value: function drawInterpoint() {
      this._ctx.beginPath();

      this._ctx.fillStyle = this._numberColor;

      this._ctx.fillRect(0, (this._bh * 2 + this._bw) / 3, this._bw, this._bw);

      this._ctx.fillRect(0, (this._bh * 2 + this._bw) / 3 * 2 + this._bw, this._bw, this._bw);

      this._ctx.translate(this._bw + this._space, 0);

      this._ctx.closePath();
    }
  }, {
    key: "drawTime",
    value: function drawTime(t) {
      if (t < 10) {
        this.drawNumber(0);

        this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);

        this.drawNumber(t);

        this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);
      } else {
        var d = Math.floor(t / 10);
        var r = t % 10;
        this.drawNumber(d);

        this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);

        this.drawNumber(r);

        this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);
      }
    }
  }, {
    key: "drawEmpty",
    value: function drawEmpty() {
      this._ctx.beginPath();

      this._ctx.fillStyle = this._dashColor;

      this._ctx.moveTo(0, 0);

      this.vTopLeft();
      this.vBottomLeft();
      this.vBottomRight();
      this.vTopRight();
      this.hTop();
      this.hMiddle();
      this.hBottom();

      this._ctx.closePath();
    } // Vertical: top left

  }, {
    key: "vTopLeft",
    value: function vTopLeft() {
      this._ctx.fillRect(0, this._bw, this._bw, this._bh);
    } // Vertical: bottom left

  }, {
    key: "vBottomLeft",
    value: function vBottomLeft() {
      this._ctx.fillRect(0, this._bw * 2 + this._bh, this._bw, this._bh);
    } // Vertial: top right

  }, {
    key: "vTopRight",
    value: function vTopRight() {
      this._ctx.fillRect(this._bw + this._bh, this._bw, this._bw, this._bh);
    } // Vertial: bottom right

  }, {
    key: "vBottomRight",
    value: function vBottomRight() {
      this._ctx.fillRect(this._bw + this._bh, this._bw * 2 + this._bh, this._bw, this._bh);
    } // Horizontal: top

  }, {
    key: "hTop",
    value: function hTop() {
      this._ctx.fillRect(this._bw, 0, this._bh, this._bw);
    } // Horizontal: middle

  }, {
    key: "hMiddle",
    value: function hMiddle() {
      this._ctx.fillRect(this._bw, this._bw + this._bh, this._bh, this._bw);
    } // Horizontal: bottom

  }, {
    key: "hBottom",
    value: function hBottom() {
      this._ctx.fillRect(this._bw, this._bw * 2 + this._bh * 2, this._bh, this._bw);
    }
  }, {
    key: "drawNumber",
    value: function drawNumber(n) {
      this.drawEmpty();

      this._ctx.beginPath();

      this._ctx.fillStyle = this._numberColor;

      switch (n) {
        case 0:
          this.hTop();
          this.hBottom();
          this.vTopLeft();
          this.vTopRight();
          this.vBottomLeft();
          this.vBottomRight();
          break;

        case 1:
          this.vTopRight();
          this.vBottomRight();
          break;

        case 2:
          this.hTop();
          this.vTopRight();
          this.hMiddle();
          this.vBottomLeft();
          this.hBottom();
          break;

        case 3:
          this.hTop();
          this.hMiddle();
          this.hBottom();
          this.vTopRight();
          this.vBottomRight();
          break;

        case 4:
          this.hMiddle();
          this.vTopLeft();
          this.vTopRight();
          this.vBottomRight();
          break;

        case 5:
          this.hTop();
          this.hMiddle();
          this.hBottom();
          this.vTopLeft();
          this.vBottomRight();
          break;

        case 6:
          this.hTop();
          this.hMiddle();
          this.hBottom();
          this.vTopLeft();
          this.vBottomLeft();
          this.vBottomRight();
          break;

        case 7:
          this.hTop();
          this.vTopRight();
          this.vBottomRight();
          break;

        case 8:
          this.vTopLeft();
          this.vBottomLeft();
          this.vTopRight();
          this.vBottomRight();
          this.hTop();
          this.hMiddle();
          this.hBottom();
          break;

        case 9:
          this.hTop();
          this.hMiddle();
          this.vTopLeft();
          this.vTopRight();
          this.vBottomRight();
          break;
      }

      this._ctx.closePath();
    }
  }, {
    key: "numberColor",
    set: function set(numberColor) {
      this._numberColor = numberColor;
    },
    get: function get() {
      return this._numberColor;
    }
  }, {
    key: "dashColor",
    set: function set(dashColor) {
      this._dashColor = dashColor;
    },
    get: function get() {
      return this._dashColor;
    }
  }]);

  return DigitalClock;
}(_baseCanvas.default);

exports.default = DigitalClock;
module.exports = exports["default"];

/***/ }),

/***/ "./src/digital-number.js":
/*!*******************************!*\
  !*** ./src/digital-number.js ***!
  \*******************************/
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

var DigitalNumber =
/*#__PURE__*/
function () {
  function DigitalNumber(canvasCtx, barWidth, numberWidth, numberHeight, dashColor, numberColor) {
    _classCallCheck(this, DigitalNumber);

    this._ctx = canvasCtx;
    this._barWidth = barWidth;
    this._verBarHeight = (numberHeight - 3 * barWidth) / 2;
    this._horBarHeight = numberWidth - 2 * barWidth;
    this._dashColor = dashColor;
    this._numberColor = numberColor;
  }

  _createClass(DigitalNumber, [{
    key: "drawEmpty",
    value: function drawEmpty() {
      this._ctx.beginPath();

      this._ctx.fillStyle = this._dashColor;

      this._ctx.moveTo(0, 0);

      this.topLeft();
      this.bottomLeft();
      this.topRight();
      this.bottomRight();
      this.top();
      this.middle();
      this.bottom();

      this._ctx.closePath();
    } // Vertical: top left

  }, {
    key: "topLeft",
    value: function topLeft() {
      this._ctx.fillRect(0, this._barWidth, this._barWidth, this._verBarHeight);
    } // Vertical: bottom left

  }, {
    key: "bottomLeft",
    value: function bottomLeft() {
      this._ctx.fillRect(0, this._barWidth * 2 + this._verBarHeight, this._barWidth, this._verBarHeight);
    } // Vertial: top right

  }, {
    key: "topRight",
    value: function topRight() {
      this._ctx.fillRect(this._barWidth + this._horBarHeight, this._barWidth, this._barWidth, this._verBarHeight);
    } // Vertial: bottom right

  }, {
    key: "bottomRight",
    value: function bottomRight() {
      this._ctx.fillRect(this._barWidth + this._horBarHeight, this._barWidth * 2 + this._verBarHeight, this._barWidth, this._verBarHeight);
    } // Horizontal: top

  }, {
    key: "top",
    value: function top() {
      this._ctx.fillRect(this._barWidth, 0, this._horBarHeight, this._barWidth);
    } // Horizontal: middle

  }, {
    key: "middle",
    value: function middle() {
      this._ctx.fillRect(this._barWidth, this._barWidth + this._verBarHeight, this._horBarHeight, this._barWidth);
    } // Horizontal: bottom

  }, {
    key: "bottom",
    value: function bottom() {
      this._ctx.fillRect(this._barWidth, this._barWidth * 2 + this._verBarHeight * 2, this._horBarHeight, this._barWidth);
    }
  }, {
    key: "drawNumber",
    value: function drawNumber(number) {
      this.drawEmpty();

      this._ctx.beginPath();

      this._ctx.fillStyle = this._numberColor;

      switch (number) {
        case 0:
          this.top();
          this.bottom();
          this.topLeft();
          this.topRight();
          this.bottomLeft();
          this.bottomRight();
          break;

        case 1:
          this.topRight();
          this.bottomRight();
          break;

        case 2:
          this.top();
          this.topRight();
          this.middle();
          this.bottomLeft();
          this.bottom();
          break;

        case 3:
          this.top();
          this.middle();
          this.bottom();
          this.topRight();
          this.bottomRight();
          break;

        case 4:
          this.middle();
          this.topLeft();
          this.topRight();
          this.bottomRight();
          break;

        case 5:
          this.top();
          this.middle();
          this.bottom();
          this.topLeft();
          this.bottomRight();
          break;

        case 6:
          this.top();
          this.middle();
          this.bottom();
          this.topLeft();
          this.bottomLeft();
          this.bottomRight();
          break;

        case 7:
          this.top();
          this.topRight();
          this.bottomRight();
          break;

        case 8:
          this.topLeft();
          this.bottomLeft();
          this.topRight();
          this.bottomRight();
          this.top();
          this.middle();
          this.bottom();
          break;

        case 9:
          this.top();
          this.middle();
          this.topLeft();
          this.topRight();
          this.bottomRight();
          break;
      }

      this._ctx.closePath();
    }
  }]);

  return DigitalNumber;
}();

exports.default = DigitalNumber;
module.exports = exports["default"];

/***/ }),

/***/ "./src/double-circle.js":
/*!******************************!*\
  !*** ./src/double-circle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DoubleCircle =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(DoubleCircle, _BaseCanvas);

  function DoubleCircle(baseDiv, options) {
    var _this;

    _classCallCheck(this, DoubleCircle);

    _this = _possibleConstructorReturn(this, (DoubleCircle.__proto__ || Object.getPrototypeOf(DoubleCircle)).call(this, baseDiv, 200, 200)); // Options

    var outer = _utility.default.has(options, 'outer') ? options.outer : null;
    _this._outerColor = _utility.default.has(outer, 'color') ? outer.color : _color.COLOR.green;
    _this._outerSpeed = _utility.default.has(outer, 'speed') ? outer.speed : 0.5;
    _this._outerRadius = _utility.default.has(outer, 'radius') ? outer.radius : 90;
    var inner = _utility.default.has(options, 'inner') ? options.inner : null;
    _this._innerColor = _utility.default.has(inner, 'color') ? inner.color : _color.COLOR.red;
    _this._innerSpeed = _utility.default.has(inner, 'speed') ? inner.speed : 0.2;
    _this._innerRadius = _utility.default.has(inner, 'radius') ? inner.radius : 80;
    _this._fontColor = _utility.default.has(options, 'fontColor') ? options.fontColor : _color.COLOR.green;
    _this._text = _utility.default.has(options, 'text') ? options.text : 'ON';
    _this._font = _utility.default.has(options, 'font') ? options.font : '20px Arial';
    _this._isDot = _utility.default.has(options, 'isDot') ? options.isDot : true;
    _this._dots = _utility.default.has(options, 'dots') ? options.dots : 30;
    _this._lineWidth = _utility.default.has(options, 'lineWidth') ? options.lineWidth : 10;
    _this._interval = Math.PI * 2 / _this._dots;
    return _this;
  }

  _createClass(DoubleCircle, [{
    key: "drawFrame",
    value: function drawFrame() {
      this._ctx.font = this._font;
      this._ctx.textAlign = 'center';
      var now = new Date();

      var outerAngle = _utility.default.getAngleByDate(this._outerSpeed, now);

      var innerAngle = -_utility.default.getAngleByDate(this._innerSpeed, now);
      this.clearAll();

      this._ctx.save();

      this.scale();
      this._ctx.fillStyle = this._fontColor;

      this._ctx.fillText(this._text, 100, 100);

      this._ctx.translate(100, 100);

      this._ctx.rotate(outerAngle); // Draw outer circle


      if (this._isDot) {
        this._ctx.fillStyle = this._outerColor;

        for (var i = 0; i < this._dots; i++) {
          var d = this._interval * i;
          var x = this._outerRadius * Math.cos(d);
          var y = this._outerRadius * Math.sin(d);

          this._ctx.beginPath();

          this._ctx.fillRect(x - 3, y - 3, 6, 6);

          this._ctx.closePath();

          this._ctx.fill();
        }
      } else {
        this._ctx.strokeStyle = this._outerColor;

        this._ctx.beginPath();

        this._ctx.lineWidth = this._lineWidth;

        this._ctx.arc(0, 0, this._outerRadius, 0, Math.PI * 1.25);

        this._ctx.stroke();
      }

      this._ctx.restore();

      this._ctx.save();

      this.scale();

      this._ctx.translate(100, 100);

      this._ctx.rotate(innerAngle); // Draw inner circle


      if (this._isDot) {
        this._ctx.fillStyle = this._innerColor;

        for (var _i = 0; _i < this._dots; _i++) {
          var _d = this._interval * _i;

          var _x = this._innerRadius * Math.cos(_d);

          var _y = this._innerRadius * Math.sin(_d);

          this._ctx.beginPath();

          this._ctx.arc(_x, _y, 3, 0, Math.PI * 2);

          this._ctx.closePath();

          this._ctx.fill();
        }
      } else {
        this._ctx.strokeStyle = this._innerColor;

        this._ctx.beginPath();

        this._ctx.lineWidth = this._lineWidth;

        this._ctx.arc(0, 0, this._innerRadius, 0, Math.PI * 1.25);

        this._ctx.stroke();
      }

      this._ctx.restore();
    }
  }, {
    key: "fontColor",
    set: function set(fontColor) {
      this._fontColor = fontColor;
    }
  }, {
    key: "text",
    set: function set(text) {
      this._text = text;
    }
  }]);

  return DoubleCircle;
}(_baseCanvas.default);

exports.default = DoubleCircle;
module.exports = exports["default"];

/***/ }),

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GLOBAL = void 0;
var GLOBAL = {
  requestAnimationFrameArray: []
};
exports.GLOBAL = GLOBAL;

/***/ }),

/***/ "./src/heartbeat.js":
/*!**************************!*\
  !*** ./src/heartbeat.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Heartbeat =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(Heartbeat, _BaseCanvas);

  function Heartbeat(baseDiv, options) {
    var _this;

    _classCallCheck(this, Heartbeat);

    _this = _possibleConstructorReturn(this, (Heartbeat.__proto__ || Object.getPrototypeOf(Heartbeat)).call(this, baseDiv, baseDiv.clientWidth, 100));
    _this._lineColor = _utility.default.has(options, 'lineColor') ? options.lineColor : _color.COLOR.green;
    _this._fontColor = _utility.default.has(options, 'fontColor') ? options.fontColor : _color.COLOR.black;
    _this._maxQueueCapacity = _utility.default.has(options, 'maxQueueCapacity') ? options.maxQueueCapacity : 30;
    _this._speed = 2;
    _this._queue = [];
    _this._lastSec = 0;
    _this._timer = null;
    return _this;
  }

  _createClass(Heartbeat, [{
    key: "postConstructor",
    value: function postConstructor() {
      _get(Heartbeat.prototype.__proto__ || Object.getPrototypeOf(Heartbeat.prototype), "postConstructor", this).call(this); // Start drawing the seconds


      this.drawSeconds();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._timer != null) {
        clearInterval(this._timer);
      }

      _get(Heartbeat.prototype.__proto__ || Object.getPrototypeOf(Heartbeat.prototype), "destroy", this).call(this);
    }
  }, {
    key: "beat",
    value: function beat() {
      if (this._queue.length >= this._maxQueueCapacity) {
        this._queue.shift();
      }

      this._queue.push({
        time: null,
        x: -30
      });
    }
  }, {
    key: "drawSeconds",
    value: function drawSeconds() {
      var _this2 = this;

      this._timer = setInterval(function () {
        if (_this2._queue.length >= _this2._maxQueueCapacity) {
          _this2._queue.shift();
        }

        var now = new Date();

        var currSec = _utility.default.leftPadZero(now.getMinutes()) + ':' + _utility.default.leftPadZero(now.getSeconds());

        if (currSec !== _this2._lastSec) {
          _this2._queue.push({
            time: currSec,
            x: -30
          });

          _this2._lastSec = currSec;
        }
      }, 1000);
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      this._ctx.textAlign = 'center';
      this._ctx.font = '12px Arial';
      this.clearAll();

      this._ctx.save();

      this.scale(); // Draw the pulse

      for (var i = 0; i < this._queue.length; i++) {
        var q = this._queue[i];

        if (q.time != null) {
          this._ctx.fillStyle = this._fontColor;

          this._ctx.fillText(q.time, q.x, 90);
        } else {
          this._ctx.fillStyle = this._lineColor;

          this._ctx.beginPath();

          this._ctx.moveTo(q.x - 10, 50);

          this._ctx.quadraticCurveTo(q.x - 5, -20, q.x, 50);

          this._ctx.quadraticCurveTo(q.x + 5, 100, q.x + 10, 50);

          this._ctx.closePath();

          this._ctx.fill();
        }

        q.x += this._speed;
      } // Draw the horizontal line


      this._ctx.fillStyle = this._lineColor;

      this._ctx.fillRect(0, 50, this._scaledWidth, 2);

      this._ctx.restore();
    }
  }, {
    key: "lineColor",
    set: function set(lineColor) {
      this._lineColor = lineColor;
    },
    get: function get() {
      return this._lineColor;
    }
  }, {
    key: "fontColor",
    set: function set(fontColor) {
      this._fontColor = fontColor;
    },
    get: function get() {
      return this._fontColor;
    }
  }, {
    key: "maxQueueCapacity",
    set: function set(maxQueueCapacity) {
      this._maxQueueCapacity = maxQueueCapacity;
    },
    get: function get() {
      return this._maxQueueCapacity;
    }
  }]);

  return Heartbeat;
}(_baseCanvas.default);

exports.default = Heartbeat;
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
Object.defineProperty(exports, "BarMeter", {
  enumerable: true,
  get: function get() {
    return _barMeter.default;
  }
});
Object.defineProperty(exports, "DigitalClcok", {
  enumerable: true,
  get: function get() {
    return _digitalClock.default;
  }
});
Object.defineProperty(exports, "RoundFan", {
  enumerable: true,
  get: function get() {
    return _roundFan.default;
  }
});
Object.defineProperty(exports, "VolumeMeter", {
  enumerable: true,
  get: function get() {
    return _volumeMeter.default;
  }
});
Object.defineProperty(exports, "Heartbeat", {
  enumerable: true,
  get: function get() {
    return _heartbeat.default;
  }
});
Object.defineProperty(exports, "WarningDialog", {
  enumerable: true,
  get: function get() {
    return _warningDialog.default;
  }
});
Object.defineProperty(exports, "BlinkText", {
  enumerable: true,
  get: function get() {
    return _blinkText.default;
  }
});
Object.defineProperty(exports, "ScrollPanel", {
  enumerable: true,
  get: function get() {
    return _scrollPanel.default;
  }
});
Object.defineProperty(exports, "MessageQueue", {
  enumerable: true,
  get: function get() {
    return _messageQueue.default;
  }
});
Object.defineProperty(exports, "DoubleCircle", {
  enumerable: true,
  get: function get() {
    return _doubleCircle.default;
  }
});
Object.defineProperty(exports, "RoundRadar", {
  enumerable: true,
  get: function get() {
    return _roundRadar.default;
  }
});
Object.defineProperty(exports, "RoundGauge", {
  enumerable: true,
  get: function get() {
    return _roundGauge.default;
  }
});
Object.defineProperty(exports, "StopWatch", {
  enumerable: true,
  get: function get() {
    return _stopWatch.default;
  }
});
Object.defineProperty(exports, "Settings", {
  enumerable: true,
  get: function get() {
    return _settings.default;
  }
});

var _barMeter = _interopRequireDefault(__webpack_require__(/*! ./bar-meter */ "./src/bar-meter.js"));

var _digitalClock = _interopRequireDefault(__webpack_require__(/*! ./digital-clock */ "./src/digital-clock.js"));

var _roundFan = _interopRequireDefault(__webpack_require__(/*! ./round-fan */ "./src/round-fan.js"));

var _volumeMeter = _interopRequireDefault(__webpack_require__(/*! ./volume-meter */ "./src/volume-meter.js"));

var _heartbeat = _interopRequireDefault(__webpack_require__(/*! ./heartbeat */ "./src/heartbeat.js"));

var _warningDialog = _interopRequireDefault(__webpack_require__(/*! ./warning-dialog */ "./src/warning-dialog.js"));

var _blinkText = _interopRequireDefault(__webpack_require__(/*! ./blink-text */ "./src/blink-text.js"));

var _scrollPanel = _interopRequireDefault(__webpack_require__(/*! ./scroll-panel */ "./src/scroll-panel.js"));

var _messageQueue = _interopRequireDefault(__webpack_require__(/*! ./message-queue */ "./src/message-queue.js"));

var _doubleCircle = _interopRequireDefault(__webpack_require__(/*! ./double-circle */ "./src/double-circle.js"));

var _roundRadar = _interopRequireDefault(__webpack_require__(/*! ./round-radar */ "./src/round-radar.js"));

var _roundGauge = _interopRequireDefault(__webpack_require__(/*! ./round-gauge */ "./src/round-gauge.js"));

var _stopWatch = _interopRequireDefault(__webpack_require__(/*! ./stop-watch */ "./src/stop-watch.js"));

var _animationTimer = _interopRequireDefault(__webpack_require__(/*! ./animation-timer */ "./src/animation-timer.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ./settings */ "./src/settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Fire up window.requestAnimationFrame()
_animationTimer.default.render();

/***/ }),

/***/ "./src/message-queue.js":
/*!******************************!*\
  !*** ./src/message-queue.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MessageQueue =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(MessageQueue, _BaseCanvas);

  function MessageQueue(baseDiv, options) {
    var _this;

    _classCallCheck(this, MessageQueue);

    _this = _possibleConstructorReturn(this, (MessageQueue.__proto__ || Object.getPrototypeOf(MessageQueue)).call(this, baseDiv, 100, 200)); // Options

    _this._barWidth = _utility.default.has(options, 'barWidth') ? options.barWidth : 80;
    _this._space = _utility.default.has(options, 'space') ? options.space : 5;
    _this._barColor = _utility.default.has(options, 'barColor') ? options.barColor : _color.COLOR.green;
    _this._maxQueueCapacity = _utility.default.has(options, 'maxQueueCapacity') ? options.maxQueueCapacity : 20;
    _this._queue = [];
    _this._vector = 5;
    _this._barHeight = 20;
    return _this;
  }

  _createClass(MessageQueue, [{
    key: "push",
    value: function push() {
      if (this._queue.length > this._maxQueueCapacity) {
        this.pop();
      }

      this._queue.push({
        x: (100 - this._barWidth) / 2,
        y: 220
      });
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this._queue.length > 0) {
        this._queue.shift();
      }
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      this.clearAll();

      this._ctx.save();

      this.scale();

      for (var i = 0; i < this._queue.length; i++) {
        var q = this._queue[i];
        var currY = (this._barHeight + this._space) * i + this._space; // Move up

        if (currY <= q.y) {
          // TODO: control the speed.
          q.y -= this._vector;
        }

        this._ctx.beginPath();

        this._ctx.fillStyle = this._barColor;

        this._ctx.fillRect(q.x, q.y, this._barWidth, this._barHeight);

        this._ctx.closePath();
      }

      this._ctx.restore();
    }
  }, {
    key: "barColor",
    set: function set(barColor) {
      this._barColor = barColor;
    },
    get: function get() {
      return this._barColor;
    }
  }, {
    key: "queueSize",
    get: function get() {
      return this._queue.length;
    }
  }]);

  return MessageQueue;
}(_baseCanvas.default);

exports.default = MessageQueue;
module.exports = exports["default"];

/***/ }),

/***/ "./src/round-fan.js":
/*!**************************!*\
  !*** ./src/round-fan.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RoundFan =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(RoundFan, _BaseCanvas);

  function RoundFan(baseDiv, options) {
    var _this;

    _classCallCheck(this, RoundFan);

    _this = _possibleConstructorReturn(this, (RoundFan.__proto__ || Object.getPrototypeOf(RoundFan)).call(this, baseDiv, 200, 200)); // Options

    _this._fanColor = _utility.default.has(options, 'fanColor') ? options.fanColor : _color.COLOR.green;
    _this._centerColor = _utility.default.has(options, 'centerColor') ? options.centerColor : '#FFFFFF';
    _this._speed = _utility.default.has(options, 'speed') ? options.speed : 1;
    return _this;
  }

  _createClass(RoundFan, [{
    key: "postConstructor",
    value: function postConstructor() {
      _get(RoundFan.prototype.__proto__ || Object.getPrototypeOf(RoundFan.prototype), "postConstructor", this).call(this);

      this._ctx.globalCompositeOperation = 'destination-over';
    }
  }, {
    key: "on",
    value: function on() {
      this.startAnimation();
    }
  }, {
    key: "off",
    value: function off() {
      this.stopAnimation();
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      var now = new Date();

      var angle = _utility.default.getAngleByDate(this._speed, now);

      this.clearAll();

      this._ctx.save();

      this.scale();

      this._ctx.translate(100, 100);

      this._ctx.rotate(angle);

      this._ctx.strokeStyle = this._centerColor;

      this._ctx.beginPath();

      this._ctx.arc(0, 0, 10, 0, 2 * Math.PI);

      this._ctx.fillStyle = this._centerColor;

      this._ctx.fill();

      this._ctx.beginPath();

      this._ctx.arc(0, 0, 30, 0, 2 * Math.PI);

      this._ctx.fillStyle = this._fanColor;

      this._ctx.fill();

      this._ctx.beginPath();

      this._ctx.arc(0, 0, 35, 0, 2 * Math.PI);

      this._ctx.fillStyle = this._centerColor;

      this._ctx.fill();

      this._ctx.beginPath();

      this._ctx.moveTo(0, 0); // Up


      this._ctx.quadraticCurveTo(-60, -80, 0, -90);

      this._ctx.quadraticCurveTo(80, -100, 0, 0); // Right


      this._ctx.quadraticCurveTo(80, -60, 90, 0);

      this._ctx.quadraticCurveTo(100, 80, 0, 0); // Down


      this._ctx.quadraticCurveTo(60, 80, 0, 90);

      this._ctx.quadraticCurveTo(-80, 100, 0, 0); // Left


      this._ctx.quadraticCurveTo(-80, 60, -90, 0);

      this._ctx.quadraticCurveTo(-100, -80, 0, 0);

      this._ctx.fillStyle = this._fanColor;

      this._ctx.fill();

      this._ctx.stroke();

      this._ctx.restore();
    }
  }, {
    key: "speed",
    set: function set(speed) {
      this._speed = speed;
    },
    get: function get() {
      return this._speed;
    }
  }, {
    key: "centerColor",
    set: function set(color) {
      this._centerColor = color;
    },
    get: function get() {
      this._centerColor;
    }
  }, {
    key: "fanColor",
    set: function set(color) {
      this._fanColor = color;
    },
    get: function get() {
      this._fanColor;
    }
  }]);

  return RoundFan;
}(_baseCanvas.default);

exports.default = RoundFan;
module.exports = exports["default"];

/***/ }),

/***/ "./src/round-gauge.js":
/*!****************************!*\
  !*** ./src/round-gauge.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RoundGauge =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(RoundGauge, _BaseCanvas);

  function RoundGauge(baseDiv, options) {
    var _this;

    _classCallCheck(this, RoundGauge);

    _this = _possibleConstructorReturn(this, (RoundGauge.__proto__ || Object.getPrototypeOf(RoundGauge)).call(this, baseDiv, 200, 200));
    _this._startValue = _utility.default.has(options, 'startValue') ? options.startValue : 0;
    _this._endValue = _utility.default.has(options, 'endValue') ? options.endValue : 100;
    _this._startDegree = _utility.default.has(options, 'startDegree') ? options.startDegree : 180;
    _this._endDegree = _utility.default.has(options, 'endDegree') ? options.endDegree : 360;
    _this._isHandArrow = _utility.default.has(options, 'isHandArrow') ? options.isHandArrow : false;
    _this._isPercentage = _utility.default.has(options, 'isPercentage') ? options.isPercentage : false;
    _this._value = _utility.default.has(options, 'value') ? options.value : 0;
    _this._lineColor = _utility.default.has(options, 'lineColor') ? options.lineColor : _color.COLOR.green;
    _this._handColor = _utility.default.has(options, 'handColor') ? options.handColor : _color.COLOR.red;
    _this._fontColor = _utility.default.has(options, 'fontColor') ? options.fontColor : _color.COLOR.balck;
    _this._valueFont = _utility.default.has(options, 'valueFont') ? options.valueFont : '20px Arial';
    _this._value = _this._isPercentage ? Math.floor(_this._value / (_this._endValue - _this._startValue)) + '%' : _this._value;
    _this._scaleFont = '12px Arial';
    _this._startAngle = _utility.default.getAngleByDegree(_this._startDegree);
    _this._endAngle = _utility.default.getAngleByDegree(_this._endDegree);
    _this._speed = 3;
    _this._currDegree = 0;
    _this._targetDegree = _this.valueToDegree(_this._value);
    return _this;
  }

  _createClass(RoundGauge, [{
    key: "valueToPct",
    value: function valueToPct(value) {
      return Math.floor(value / (this._endValue - this._startValue) * 100);
    }
  }, {
    key: "valueToDegree",
    value: function valueToDegree(value) {
      return value / (this._endValue - this._startValue) * (this._endDegree - this._startDegree) + this._startDegree;
    }
  }, {
    key: "degreeToValue",
    value: function degreeToValue(degree) {
      return Math.floor((degree - this._startDegree) / (this._endDegree - this._startDegree) * (this._endValue - this._startValue));
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      this._ctx.textAlign = 'center';

      if (this._speed > 0 && this._currDegree < this._targetDegree || this._speed < 0 && this._currDegree > this._targetDegree) {
        this._currDegree += this._speed;
      } else if (this._speed > 0 && this._currDegree >= this._targetDegree || this._speed < 0 && this._currDegree <= this._targetDegree) {
        this._currDegree = this._targetDegree;
      }

      var angle = _utility.default.getAngleByDegree(this._currDegree);

      this.clearAll();

      this._ctx.save();

      this.scale();
      this._ctx.fillStyle = this._fontColor;
      this._ctx.font = this._valueFont;

      this._ctx.fillText(this._value, 100, 100);

      this._ctx.translate(100, 100); // Draw scales


      this._ctx.strokeStyle = this._lineColor;
      this._ctx.lineWidth = 1;

      for (var i = this._startDegree; i <= this._endDegree; i = i + 6) {
        var a = _utility.default.getAngleByDegree(i);

        var r = 66;

        if (i % 30 === 0) {
          r = 61;
          var x = 90 * Math.cos(a);
          var y = 90 * Math.sin(a) + 3;
          var scaleValue = this._isPercentage ? this.valueToPct(this.degreeToValue(i)) : this.degreeToValue(i);
          this._ctx.fillStyle = this._lineColor;
          this._ctx.font = this._scaleFont;

          this._ctx.fillText(scaleValue, x, y);
        }

        var x1 = r * Math.cos(a);
        var y1 = r * Math.sin(a);
        var x2 = 78 * Math.cos(a);
        var y2 = 78 * Math.sin(a);

        this._ctx.beginPath();

        this._ctx.moveTo(x1, y1);

        this._ctx.lineTo(x2, y2);

        this._ctx.closePath();

        this._ctx.stroke();
      } // Draw the circle


      this._ctx.beginPath();

      this._ctx.lineWidth = 8;

      this._ctx.arc(0, 0, 75, this._startAngle, this._endAngle);

      this._ctx.stroke(); // Draw the hand


      this._ctx.rotate(angle);

      this._ctx.beginPath();

      this._ctx.fillStyle = this._handColor;

      if (this._isHandArrow) {
        this._ctx.moveTo(51, -10);

        this._ctx.lineTo(71, 0);

        this._ctx.lineTo(51, 10);

        this._ctx.fill();
      } else {
        this._ctx.fillRect(51, -4, 20, 6);
      }

      this._ctx.closePath();

      this._ctx.restore();
    }
  }, {
    key: "value",
    set: function set(value) {
      this._targetDegree = this.valueToDegree(value);
      var speed = Math.abs(this._speed);
      this._speed = this._targetDegree > this._currDegree ? speed : -speed;
      this._value = this._isPercentage ? this.valueToPct(value) + '%' : value;
    }
  }]);

  return RoundGauge;
}(_baseCanvas.default);

exports.default = RoundGauge;
module.exports = exports["default"];

/***/ }),

/***/ "./src/round-radar.js":
/*!****************************!*\
  !*** ./src/round-radar.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RoundRadar =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(RoundRadar, _BaseCanvas);

  function RoundRadar(baseDiv, options) {
    var _this;

    _classCallCheck(this, RoundRadar);

    _this = _possibleConstructorReturn(this, (RoundRadar.__proto__ || Object.getPrototypeOf(RoundRadar)).call(this, baseDiv, 200, 200));
    _this._speed = _utility.default.has(options, 'speed') ? options.speed : 2;
    _this._bgColor = _utility.default.has(options, 'bgColor') ? options.bgColor : 'rgba(0, 0, 0, 0.03)';
    _this._gridColor = _utility.default.has(options, 'gridColor') ? options.gridColor : 'rgba(0, 255, 0, 0.02)';
    _this._lineColor = _utility.default.has(options, 'lineColor') ? options.lineColor : 'rgba(0, 255, 0, 1)';
    _this._targetColor = _utility.default.has(options, 'targetColor') ? options.targetColor : 'rgba(255, 0, 0, 0.5)';
    _this._hasGrid = true;
    _this._lastTime = 0;
    _this._targets = [];
    return _this;
  }

  _createClass(RoundRadar, [{
    key: "addTarget",
    value: function addTarget(id, x, y, radius) {
      var t = {
        id: id,
        x: _utility.default.isDefined(x) ? x : _utility.default.getRandomInt(0, 50),
        y: _utility.default.isDefined(y) ? y : _utility.default.getRandomInt(0, 50),
        radius: _utility.default.isDefined(radius) ? radius : 5
      };

      this._targets.push(t);
    }
  }, {
    key: "removeTarget",
    value: function removeTarget(id) {
      var index = -1;

      for (var i = 0; i < this._targets.length; i++) {
        var t = this._targets[i];

        if (t.id === id) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        this._targets.splice(index, 1);
      }
    }
  }, {
    key: "clearAllTargets",
    value: function clearAllTargets() {
      this._targets = [];
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      var now = new Date();

      var angle = _utility.default.getAngleByDate(this._speed, now);

      this._ctx.fillStyle = this._bgColor;

      this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

      this._ctx.save();

      this.scale(); // Draw grid

      if (this._hasGrid) {
        this._ctx.strokeStyle = this._gridColor;
        this._ctx.lineWidth = 1;

        for (var i = 0; i <= 20; i++) {
          this._ctx.beginPath();

          this._ctx.moveTo(i * 10, 0);

          this._ctx.lineTo(i * 10, 200);

          this._ctx.closePath();

          this._ctx.stroke();
        }

        for (var _i = 0; _i <= 20; _i++) {
          this._ctx.beginPath();

          this._ctx.moveTo(0, _i * 10);

          this._ctx.lineTo(200, _i * 10);

          this._ctx.closePath();

          this._ctx.stroke();
        }
      }

      this._ctx.translate(100, 100); // Draw circles


      this._ctx.lineWidth = 1;
      this._ctx.strokeStyle = this._lineColor;

      for (var _i2 = 1; _i2 <= 4; _i2++) {
        if (_i2 === 4) {
          this._ctx.lineWidth = 2;
        }

        this._ctx.beginPath();

        this._ctx.arc(0, 0, _i2 * 20, 0, Math.PI * 2);

        this._ctx.closePath();

        this._ctx.stroke();
      } // Draw lines


      this._ctx.lineWidth = 1;

      this._ctx.beginPath();

      this._ctx.moveTo(-80, 0);

      this._ctx.lineTo(80, 0);

      this._ctx.closePath();

      this._ctx.stroke();

      this._ctx.beginPath();

      this._ctx.moveTo(0, -80);

      this._ctx.lineTo(0, 80);

      this._ctx.closePath();

      this._ctx.stroke(); // Draw scales


      this._ctx.lineWidth = 1;

      for (var _i3 = 0; _i3 < 360; _i3 = _i3 + 6) {
        var a = _utility.default.getAngleByDegree(_i3);

        var r = 77;

        if (_i3 % 30 === 0) {
          r = 74;
        }

        var x1 = r * Math.cos(a);
        var y1 = r * Math.sin(a);
        var x2 = 80 * Math.cos(a);
        var y2 = 80 * Math.sin(a);

        this._ctx.beginPath();

        this._ctx.moveTo(x1, y1);

        this._ctx.lineTo(x2, y2);

        this._ctx.closePath();

        this._ctx.stroke();
      } // Draw Targets


      if (now.getTime() - this._lastTime < 500) {
        this._ctx.fillStyle = this._targetColor;

        for (var _i4 = 0; _i4 < this._targets.length; _i4++) {
          var t = this._targets[_i4];

          this._ctx.beginPath();

          this._ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);

          this._ctx.closePath();

          this._ctx.fill();
        }
      } else if (now.getTime() - this._lastTime < 1000) {// Don't display
      } else {
        this._lastTime = now.getTime();
      } // Draw the radar wave


      this._ctx.rotate(angle);

      this._ctx.fillStyle = this._lineColor;

      this._ctx.beginPath();

      this._ctx.fillRect(0, -1, 80, 2);

      this._ctx.closePath();

      this._ctx.restore();
    }
  }]);

  return RoundRadar;
}(_baseCanvas.default);

exports.default = RoundRadar;
module.exports = exports["default"];

/***/ }),

/***/ "./src/scroll-panel.js":
/*!*****************************!*\
  !*** ./src/scroll-panel.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollPanel =
/*#__PURE__*/
function () {
  function ScrollPanel(baseDiv, options) {
    _classCallCheck(this, ScrollPanel);

    this._div = baseDiv;
    var defaultCss = 'margin: 3px; padding: 3px; color: white; background-color: ' + _color.COLOR.green + ';'; // Options

    this._defaultCss = _utility.default.has(options, 'defaultCss') ? options.defaultCss : defaultCss;
    this._isUp = _utility.default.has(options, 'isUp') ? options.isUp : true;
    ;
    this._maxQueueCapacity = _utility.default.has(options, 'maxQueueCapacity') ? options.maxQueueCapacity : 20;
    this._queue = [];
  }

  _createClass(ScrollPanel, [{
    key: "push",
    value: function push(boxDiv) {
      if (this._queue.length > this._maxQueueCapacity) {
        this.pop();
      }

      this._queue.push(boxDiv);

      if (this._isUp) {
        this._div.insertBefore(boxDiv, this._div.firstChild);

        this._div.scrollBottom = this._div.scrollHeight;
      } else {
        this._div.appendChild(boxDiv);

        this._div.scrollTop = this._div.scrollHeight;
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this._queue.length > 0) {
        var toBeRemoved = this._queue.shift();

        this._div.removeChild(toBeRemoved);
      }
    }
  }, {
    key: "pushText",
    value: function pushText(text, css) {
      var boxDiv = document.createElement('div');
      boxDiv.innerHTML = text;
      boxDiv.style.cssText = css != null ? css : this._defaultCss;
      this.push(boxDiv);
    }
  }, {
    key: "isUp",
    set: function set(isUp) {
      this._isUp = isUp;
    },
    get: function get() {
      return this._isUp;
    }
  }, {
    key: "maxQueueCapacity",
    set: function set(capacity) {
      this._maxQueueCapacity = capacity;
    },
    get: function get() {
      return this._maxQueueCapacity;
    }
  }]);

  return ScrollPanel;
}();

exports.default = ScrollPanel;
module.exports = exports["default"];

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _animationTimer = _interopRequireDefault(__webpack_require__(/*! ./animation-timer */ "./src/animation-timer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Settings =
/*#__PURE__*/
function () {
  function Settings() {
    _classCallCheck(this, Settings);

    this._fps = 60;
  }

  _createClass(Settings, [{
    key: "fps",
    set: function set(fps) {
      this._fps = fps;
      _animationTimer.default._fps = fps;
    }
  }]);

  return Settings;
}();

var _default = new Settings();

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/stop-watch.js":
/*!***************************!*\
  !*** ./src/stop-watch.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _digitalNumber = _interopRequireDefault(__webpack_require__(/*! ./digital-number */ "./src/digital-number.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StopWatch =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(StopWatch, _BaseCanvas);

  function StopWatch(baseDiv, options) {
    var _this;

    _classCallCheck(this, StopWatch);

    _this = _possibleConstructorReturn(this, (StopWatch.__proto__ || Object.getPrototypeOf(StopWatch)).call(this, baseDiv, 500, 100));
    _this._digitalNumber = new _digitalNumber.default(_this._ctx, 8, 50, 100, 'white', 'green');
    _this._millisNumber = new _digitalNumber.default(_this._ctx, 4, 25, 50, 'white', 'red');
    _this._lastTime = Date.now();
    _this._elapsedTime = 0;
    return _this;
  }

  _createClass(StopWatch, [{
    key: "postConstructor",
    value: function postConstructor() {}
  }, {
    key: "start",
    value: function start() {
      this._lastTime = Date.now();
      this._elapsedTime = 0;
      this._state = 'START';
      this.startAnimation();
    }
  }, {
    key: "stop",
    value: function stop() {
      this._state = 'STOP';
      this.stopAnimation();
    }
  }, {
    key: "resume",
    value: function resume() {
      this._state = 'RESUME';
      this.startAnimation();
    }
  }, {
    key: "reset",
    value: function reset() {
      this._state = 'RESET';
      this.stopAnimation(); // Draw one frame to reset everything to 0.

      this.drawFrame();
      this._lastTime = Date.now();
      this._elapsedTime = 0;
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      var now = Date.now();

      if (this._state === 'RESUME') {
        this._state = 'START';
      } else {
        this._elapsedTime += Date.now() - this._lastTime;
      }

      this._lastTime = now;
      var second = 0;
      var millis = 0;
      var sec = 0;
      var min = 0;
      var hour = 0;

      if (this._state !== 'RESET') {
        second = Math.floor(this._elapsedTime / 1000);
        millis = parseInt(this._elapsedTime.toString().slice(-2), 10);
        sec = Math.floor(second % 60);
        min = Math.floor(second % 3600 / 60);
        hour = Math.floor(second / 3600);
      }

      this.clearAll();

      this._ctx.save();

      this.scale();
      this.drawTwoDigits(this._digitalNumber, hour, 60);
      this.drawTwoDigits(this._digitalNumber, min, 60);
      this.drawTwoDigits(this._digitalNumber, sec, 60);

      this._ctx.translate(0, 50);

      this.drawTwoDigits(this._millisNumber, millis, 30);

      this._ctx.restore();
    }
  }, {
    key: "drawTwoDigits",
    value: function drawTwoDigits(digitalNumber, time, space) {
      if (time < 10) {
        digitalNumber.drawNumber(0);

        this._ctx.translate(space, 0);

        digitalNumber.drawNumber(time);

        this._ctx.translate(space, 0);
      } else {
        var left = Math.floor(time / 10);
        var right = time % 10;
        digitalNumber.drawNumber(left);

        this._ctx.translate(space, 0);

        digitalNumber.drawNumber(right);

        this._ctx.translate(space, 0);
      }
    }
  }]);

  return StopWatch;
}(_baseCanvas.default);

exports.default = StopWatch;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
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

var Utility =
/*#__PURE__*/
function () {
  function Utility() {
    _classCallCheck(this, Utility);
  }

  _createClass(Utility, null, [{
    key: "getRandomInt",
    value: function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, {
    key: "getRandomColor",
    value: function getRandomColor() {
      return '#' + ((1 << 24) * Math.random() | 0).toString(16);
    }
  }, {
    key: "has",
    value: function has(object, key) {
      return object ? hasOwnProperty.call(object, key) : false;
    }
  }, {
    key: "addHour",
    value: function addHour(h) {
      var now = new Date();
      now.setHours(now.getHours() + h);
      return now;
    }
  }, {
    key: "getAngleByDate",
    value: function getAngleByDate(speed, date) {
      return speed * Math.PI / 6 * date.getSeconds() + speed * Math.PI / 6000 * date.getMilliseconds();
    }
  }, {
    key: "getAngleByDegree",
    value: function getAngleByDegree(degree) {
      return degree * Math.PI / 180;
    }
  }, {
    key: "hexToRgba",
    value: function hexToRgba(hex, opacity) {
      hex = hex.replace('#', '');
      var r = parseInt(hex.substring(0, 2), 16);
      var g = parseInt(hex.substring(2, 4), 16);
      var b = parseInt(hex.substring(4, 6), 16);
      return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    }
  }, {
    key: "isDefined",
    value: function isDefined(o) {
      return o !== undefined && o !== null;
    }
  }, {
    key: "leftPadZero",
    value: function leftPadZero(n) {
      if (n < 10) {
        return '0' + n;
      }

      return n;
    }
  }]);

  return Utility;
}();

exports.default = Utility;
module.exports = exports["default"];

/***/ }),

/***/ "./src/volume-meter.js":
/*!*****************************!*\
  !*** ./src/volume-meter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VolumeMeter =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(VolumeMeter, _BaseCanvas);

  function VolumeMeter(baseDiv, options) {
    var _this;

    _classCallCheck(this, VolumeMeter);

    _this = _possibleConstructorReturn(this, (VolumeMeter.__proto__ || Object.getPrototypeOf(VolumeMeter)).call(this, baseDiv, 100, 200)); // Options

    _this._min = _utility.default.has(options, 'min') ? options.min : 0;
    _this._max = _utility.default.has(options, 'max') ? options.max : 100;
    _this._fillColor = _utility.default.has(options, 'fillColor') ? options.fillColor : _color.COLOR.green;
    _this._fontColor = _utility.default.has(options, 'fontColor') ? options.fontColor : _color.COLOR.black;
    _this._lineColor = _utility.default.has(options, 'lineColor') ? options.lineColor : _color.COLOR.black;
    _this._lineWidth = _utility.default.has(options, 'lineWidth') ? options.lineWidth : 5;
    _this._speed = 3;
    _this._value = 50;
    _this._margin = 40;
    _this._meterWidth = 50;
    _this._meterHeight = 180; // Ignore line width totally.

    _this._y = _this._meterHeight - _this._value / (_this._max - _this._min) * _this._meterHeight + 10;
    _this._nextY = _this._y;
    return _this;
  }

  _createClass(VolumeMeter, [{
    key: "postConstructor",
    value: function postConstructor() {
      _get(VolumeMeter.prototype.__proto__ || Object.getPrototypeOf(VolumeMeter.prototype), "postConstructor", this).call(this);

      this._ctx.font = '12px Arial';
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      this.clearAll();

      this._ctx.save();

      this.scale();

      this._ctx.moveTo(0, 0);

      this._ctx.fillStyle = this._fillColor;

      this._ctx.beginPath(); // Draw the filled part.


      this._ctx.fillRect(25, this._y, this._meterWidth, 190 - this._y);

      if (this._speed > 0 && this._y < this._nextY || this._speed < 0 && this._y > this._nextY) {
        this._y += this._speed;
      } else if (this._speed > 0 && this._y >= this._nextY || this._speed < 0 && this._y <= this._nextY) {
        this._y = this._nextY;
      } // Draw the border.


      this._ctx.rect(25, 10, this._meterWidth, this._meterHeight);

      this._ctx.lineWidth = this._lineWidth;
      this._ctx.strokeStyle = this._lineColor;
      this._ctx.fillStyle = this._fontColor; // Draw max number.

      this._ctx.textAlign = 'right';

      this._ctx.fillText(this._max, 20, 15); // Draw min number.


      this._ctx.fillText(this._min, 20, this._meterHeight + 15); // Draw value.


      this._ctx.textAlign = 'left';

      this._ctx.fillText(this._value, this._meterWidth + 30, this._y + 15 * 0.5);

      this._ctx.stroke();

      this._ctx.restore();
    }
  }, {
    key: "value",
    set: function set(n) {
      if (n >= this._min || n <= this._max) {
        if (n < this._value) {
          // Move down
          this._speed = Math.abs(this._speed);
        } else {
          // Move up
          this._speed = -Math.abs(this._speed);
        }

        this._nextY = this._meterHeight - n / (this._max - this._min) * this._meterHeight + 10;
        this._value = n;
      }
    },
    get: function get() {
      this._value;
    }
  }, {
    key: "fillColor",
    set: function set(fillColor) {
      this._fillColor = fillColor;
    },
    get: function get() {
      return this._fillColor;
    }
  }, {
    key: "fontColor",
    set: function set(fontColor) {
      this._fontColor = fontColor;
    },
    get: function get() {
      return this._fontColor;
    }
  }]);

  return VolumeMeter;
}(_baseCanvas.default);

exports.default = VolumeMeter;
module.exports = exports["default"];

/***/ }),

/***/ "./src/warning-dialog.js":
/*!*******************************!*\
  !*** ./src/warning-dialog.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WarningDialog =
/*#__PURE__*/
function () {
  function WarningDialog(options) {
    _classCallCheck(this, WarningDialog);

    this._reasonText = _utility.default.has(options, 'reason') ? options.reason : '';
    this._interval = _utility.default.has(options, 'interval') ? options.interval : 1000; // Dialog

    var dailog = document.createElement('div');
    dailog.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 100;\n      display: none;\n      background-color: rgb(220, 53, 69, 0.8);\n    ";
    var panel = document.createElement('div');
    panel.style.cssText = "\n      width: 600px;\n      height: 400px;\n      position: relative;\n      top: 50%;\n      left: 50%;\n      margin-top: -200px; \n      margin-left: -300px;\n      text-align: center;\n      padding: 20px;\n      border: 20px solid #dc3545;\n      box-sizing: border-box;\n      background-size: 80px 80px;\n      background-image: linear-gradient(\n        45deg, \n        #dc3545 25%, \n        #ffc107 25%, \n        #ffc107 50%, \n        #dc3545 50%, \n        #dc3545 75%, \n        #ffc107 75%, \n        #ffc107);\n      animation: zeu-pole 1s linear infinite;\n    ";
    var innerPanel = document.createElement('div');
    innerPanel.style.cssText = "\n      margin: 0 auto;\n    ";
    var warning = document.createElement('div');
    warning.innerHTML = 'WARNING';
    warning.style.cssText = "\n      height: 100px; \n      background-color: #dc3545;\n      line-height: 100px;\n      font-size: 50px;\n      font-weight: bold;\n      color: #fff;\n    ";
    this._reason = document.createElement('div');
    this._reason.innerHTML = this._reasonText;
    this._reason.style.cssText = "\n      height: 180px;\n      background-color: rgb(220, 53, 69, 0.9);\n      font-size: 30px;\n      color: #fff;\n      padding: 10px;\n      border-left: 20px solid #dc3545;\n      border-right: 20px solid #dc3545;\n      border-bottom: 20px solid #dc3545;\n    ";
    innerPanel.appendChild(warning);
    innerPanel.appendChild(this._reason);
    panel.appendChild(innerPanel);
    dailog.appendChild(panel);
    this._dialog = dailog; // Append dialog div to body

    var body = document.body || document.getElementsByTagName('body')[0];
    body.appendChild(this._dialog); // Append style to head

    var zeuPole = "\n    @keyframes zeu-pole {\n      from { background-position: 0 0; }\n      to { background-position: 160px 80px; }\n    }\n    ";
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = zeuPole;
    } else {
      style.appendChild(document.createTextNode(zeuPole));
    }

    head.appendChild(style);
    this._blinkTimer = null;
  }

  _createClass(WarningDialog, [{
    key: "blink",
    value: function blink() {
      var _this = this;

      this._dialog.style.display = 'block';

      if (this._blinkTimer == null) {
        this._blinkTimer = setInterval(function () {
          if (_this._dialog.style.display !== 'block') {
            _this._dialog.style.display = 'block';
          } else {
            _this._dialog.style.display = 'none';
          }
        }, this._interval);
      }
    }
  }, {
    key: "unblink",
    value: function unblink() {
      this._dialog.style.display = 'none';

      if (this._blinkTimer != null) {
        clearInterval(this._blinkTimer);
        this._blinkTimer = null;
      }
    }
  }, {
    key: "reason",
    set: function set(reason) {
      this._reasonText = reason;
      this._reason.innerHTML = this._reasonText;
    },
    get: function get() {
      return this._reason;
    }
  }, {
    key: "interval",
    set: function set(interval) {
      this._interval = interval;

      if (this._blinkTimer != null) {
        this.unblink();
        this.blink();
      }
    },
    get: function get() {
      return this._interval;
    }
  }]);

  return WarningDialog;
}();

exports.default = WarningDialog;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=zeu.js.map