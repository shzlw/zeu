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

          drawFrameObj.func.call();
        }
      }
    }
  }, {
    key: "setFps",
    value: function setFps(fps) {
      this._fps = fps;
      this._fpsInterval = 1000 / this._fps;
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

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _baseComponent = _interopRequireDefault(__webpack_require__(/*! ./base-component */ "./src/base-component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BarMeter =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(BarMeter, _BaseComponent);

  function BarMeter(canvas) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BarMeter);

    var viewWidth = options.viewWidth || 100;
    _this = _possibleConstructorReturn(this, (BarMeter.__proto__ || Object.getPrototypeOf(BarMeter)).call(this, canvas, options, viewWidth, 200));
    _this._barWidth = _this._viewWidth - 2 * _this._space;
    _this._barHeight = 15;
    _this._currBar = 0;
    _this._numberOfBars = Math.floor((_this._value - _this._min) / (_this._max - _this._min) * 10);
    _this._barMax = _this._numberOfBars * 100;
    return _this;
  }

  _createClass(BarMeter, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._min = options.min || 0;
      this._max = options.max || 100;
      this._value = options.value || 0;
      this._dashColor = options.dashColor || _color.COLOR.grey;
      this._barColor = options.barColor || _color.COLOR.green;
      this._speed = options.speed || 5;
      this._isGradient = options.gradient || false;
      this._space = options.space || 20;
    }
  }, {
    key: "drawObject",
    value: function drawObject() {
      this.clear();

      this._ctx.save();

      this.scale(); // Draw the dash.

      this._ctx.fillStyle = this._dashColor;

      for (var i = 0; i < 10; i++) {
        var y = 5 + i * 20;

        this._ctx.beginPath();

        this._ctx.fillRect(this._space, y, this._barWidth, this._barHeight);

        this._ctx.closePath();
      } // Draw bars.


      if (this._currBar >= this._barMax) {
        this._currBar = -100;
      } else {
        var bar = this._currBar / 100;
        var colors = [];

        if (this._isGradient) {
          colors = _utility.default.generateGradientColor(_color.COLOR.white, this._barColor, bar);
        } else {
          this._ctx.fillStyle = this._barColor;
        }

        for (var _i = 0; _i < bar; _i++) {
          var _y = this._viewHeight - (15 + _i * 20);

          if (this._isGradient) {
            this._ctx.fillStyle = '#' + colors[_i];
          }

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
    }
  }, {
    key: "valuePct",
    get: function get() {
      return Math.floor((this._value - this._min) / (this._max - this._min) * 100);
    }
  }, {
    key: "dashColor",
    set: function set(s) {
      this._dashColor = s;
    }
  }, {
    key: "barColor",
    set: function set(s) {
      this._barColor = s;
    }
  }, {
    key: "speed",
    set: function set(n) {
      this._speed = n;
    }
  }]);

  return BarMeter;
}(_baseComponent.default);

exports.default = BarMeter;
module.exports = exports["default"];

/***/ }),

/***/ "./src/base-component.js":
/*!*******************************!*\
  !*** ./src/base-component.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = __webpack_require__(/*! ./global */ "./src/global.js");

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var viewWidth = arguments[2];
    var viewHeight = arguments[3];

    _classCallCheck(this, BaseComponent);

    // Canvas
    this._canvas = document.getElementById(canvas); // Canvas 2d context

    this._ctx = this._canvas.getContext('2d'); // Current X value (Left 0 to right)

    this._x = 0; // Current Y value (Top 0 to bottom)

    this._y = 0; // The width and height used to draw the component.

    this._viewWidth = viewWidth;
    this._viewHeight = viewHeight; // Scale parameters used in scale()

    this._scaleX = 1;
    this._scaleY = 1; // Get canvas height

    var canvasHeight = this._canvas.height || this._canvas.parentNode.clientHeight || viewHeight; // Set acutal width and height of the component based on scales.

    this.scaleByHeight(canvasHeight);
    this._display = true; // Event queue that stores animation movements like 'move', 'scale', 'display' and etc.

    this._eventQueue = []; // Bind the drawFrame function.

    this.drawFrame = this.drawFrame.bind(this); // Set options

    this.setOptions(options); // Post constructor.

    this.postConstructor();
  } // ********** INTERNAL API **********


  _createClass(BaseComponent, [{
    key: "setOptions",
    value: function setOptions(options) {}
  }, {
    key: "postConstructor",
    value: function postConstructor() {
      this.addToAnimationQueue();
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      // Check movement
      if (this._eventQueue.length > 0) {
        var event = this._eventQueue[0];

        if (event.type === 'move') {
          if (this._x === event.destX && this._y === event.destY) {
            this._eventQueue.shift();
          } else {
            this._x = _utility.default.getNextPos(this._x, event.destX, event.speedX);
            this._y = _utility.default.getNextPos(this._y, event.destY, event.speedY);
          }
        }
      } // Check display or not.


      if (!this.isDisplay()) {
        return;
      } // Draw the component
      // this._ctx.save();
      // Scale the object.
      // this._ctx.scale(this._scaleX, this._scaleY);


      this.drawObject(); // this._ctx.restore();
    }
  }, {
    key: "drawObject",
    value: function drawObject() {}
  }, {
    key: "clear",
    value: function clear() {
      this._ctx.clearRect(this._x, this._y, this._width, this._height);
    }
  }, {
    key: "scale",
    value: function scale() {
      this._ctx.scale(this._scaleX, this._scaleY);
    }
  }, {
    key: "addToAnimationQueue",
    value: function addToAnimationQueue() {
      var index = this.getAnimationFrameArrayPos();

      if (index === -1) {
        _global.GLOBAL.requestAnimationFrameArray.push(this.drawFrameObj());
      }
    }
  }, {
    key: "removeFromAnimationQueue",
    value: function removeFromAnimationQueue() {
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

        if (drawFrameObj.self._canvas.id === this._canvas.id) {
          index = i;
          break;
        }
      }

      return index;
    }
  }, {
    key: "startAnimation",
    // ********** EXTERNAL API **********
    value: function startAnimation() {
      this.addToAnimationQueue();
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      this.removeFromAnimationQueue();
    }
  }, {
    key: "moveTo",
    value: function moveTo(destX, destY, duration) {
      var srcX = this._x;
      var srcY = this._y; // Find last move event.

      for (var i = this._eventQueue.length - 1; i >= 0; i--) {
        var event = this._eventQueue[i];

        if (event.type === 'move') {
          srcX = event.destX;
          srcY = event.destY;
          break;
        }
      } // Calculate the speed.
      // TODO: use the fps intead of 60


      var speed = duration / 60;
      var sX = Math.abs(destX - srcX) / speed;
      var sY = Math.abs(destY - srcY) / speed;
      var speedX = destX > srcX ? sX : -sX;
      var speedY = destY > srcY ? sY : -sY; // Push the movement to the queue.

      this._eventQueue.push({
        type: 'move',
        destX: destX,
        destY: destY,
        speedX: speedX,
        speedY: speedY
      });

      return this;
    }
  }, {
    key: "scaleTo",
    value: function scaleTo(x, y) {
      this._scaleX = x;
      this._scaleY = y;
      this._width = this._scaleX * this._viewWidth;
      this._height = this._scaleY * this._viewHeight;
      return this;
    }
  }, {
    key: "scaleByHeight",
    value: function scaleByHeight(height) {
      this._scaleY = height / this._viewHeight;
      this._scaleX = this._scaleY;
      this._width = this._scaleX * this._viewWidth;
      this._height = this._scaleY * this._viewHeight;
      return this;
    }
  }, {
    key: "show",
    value: function show() {
      this._display = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._display = false;
    }
  }, {
    key: "isDisplay",
    value: function isDisplay() {
      return this._display;
    }
  }, {
    key: "isAnimationOn",
    get: function get() {
      return this.getAnimationFrameArrayPos() !== -1;
    }
  }, {
    key: "canvas",
    get: function get() {
      return this._canvas;
    }
  }, {
    key: "context",
    get: function get() {
      return this._ctx;
    }
  }, {
    key: "eventQueue",
    get: function get() {
      return this._eventQueue;
    }
  }, {
    key: "viewWidth",
    get: function get() {
      return this._viewWidth;
    }
  }, {
    key: "viewHeight",
    get: function get() {
      return this._viewHeight;
    }
  }]);

  return BaseComponent;
}();

exports.default = BaseComponent;
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
  lightGreen: '#00d7af',
  lightWhite: '#f8f8ff',
  lightGrey: '#e0e0e0',
  lightBlack: '#343a42',
  black: '#000000',
  white: '#ffffff',
  red: '#dc3547',
  blue: '#007bfb',
  yellow: '#ffc108',
  cyan: '#17a2b9',
  grey: '#6c757e',
  green: '#28a748',
  orange: '#ffa500',
  transparent: 'rgba(255, 255, 255, 0)'
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

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _baseComponent = _interopRequireDefault(__webpack_require__(/*! ./base-component */ "./src/base-component.js"));

var _digitalSymbol = _interopRequireDefault(__webpack_require__(/*! ./digital-symbol */ "./src/digital-symbol.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DigitalClock =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(DigitalClock, _BaseComponent);

  function DigitalClock(canavs) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, DigitalClock);

    _this = _possibleConstructorReturn(this, (DigitalClock.__proto__ || Object.getPrototypeOf(DigitalClock)).call(this, canavs, options, 400, 100));
    _this._barWidth = 8;
    _this._space = 12;
    _this._numberWidth = 50;
    _this._numberHeight = 100;
    _this._ds = new _digitalSymbol.default(_this._ctx, _this._barWidth, _this._numberWidth, _this._numberHeight, _this._dashColor, _this._numberColor);
    _this._timer = null;
    return _this;
  }

  _createClass(DigitalClock, [{
    key: "postConstructor",
    value: function postConstructor() {
      this.tick();
    }
  }, {
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._numberColor = options.numberColor || _color.COLOR.red;
      this._dashColor = options.dashColor || _color.COLOR.lightGrey;
      this._hourOffset = options.hourOffset || 0;
    }
  }, {
    key: "tick",
    value: function tick() {
      var _this2 = this;

      if (this._timer == null) {
        this._timer = setInterval(function () {
          _this2.drawTime();
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
    key: "drawTime",
    value: function drawTime() {
      var now = _utility.default.addHour(this._hourOffset);

      this.clear();

      this._ctx.save();

      this.scale();
      this.drawTwoDigits(this._ds, now.getHours(), this._numberWidth + this._space);

      this._ds.drawColon();

      this._ctx.translate(this._barWidth + this._space, 0);

      this.drawTwoDigits(this._ds, now.getMinutes(), this._numberWidth + this._space);

      this._ds.drawColon();

      this._ctx.translate(this._barWidth + this._space, 0);

      this.drawTwoDigits(this._ds, now.getSeconds(), this._numberWidth + this._space);

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

  return DigitalClock;
}(_baseComponent.default);

exports.default = DigitalClock;
module.exports = exports["default"];

/***/ }),

/***/ "./src/digital-symbol.js":
/*!*******************************!*\
  !*** ./src/digital-symbol.js ***!
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

var DigitalSymbol =
/*#__PURE__*/
function () {
  function DigitalSymbol(ctx, barWidth, numberWidth, numberHeight, dashColor, numberColor) {
    _classCallCheck(this, DigitalSymbol);

    this._ctx = ctx;
    this._barWidth = barWidth;
    this._verBarHeight = (numberHeight - 3 * barWidth) / 2;
    this._horBarHeight = numberWidth - 2 * barWidth;
    this._dashColor = dashColor;
    this._numberColor = numberColor;
  }

  _createClass(DigitalSymbol, [{
    key: "drawColon",
    value: function drawColon() {
      this._ctx.beginPath();

      this._ctx.fillStyle = this._numberColor;

      this._ctx.fillRect(0, (this._verBarHeight * 2 + this._barWidth) / 3, this._barWidth, this._barWidth);

      this._ctx.fillRect(0, (this._verBarHeight * 2 + this._barWidth) / 3 * 2 + this._barWidth, this._barWidth, this._barWidth);

      this._ctx.closePath();
    }
  }, {
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

  return DigitalSymbol;
}();

exports.default = DigitalSymbol;
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

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _baseComponent = _interopRequireDefault(__webpack_require__(/*! ./base-component */ "./src/base-component.js"));

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

/**
 * Allow override width
 * view height: 100
 */
var Heartbeat =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Heartbeat, _BaseComponent);

  function Heartbeat(canvas) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Heartbeat);

    var viewWidth = options.viewWidth || 200;
    _this = _possibleConstructorReturn(this, (Heartbeat.__proto__ || Object.getPrototypeOf(Heartbeat)).call(this, canvas, options, viewWidth, 100));
    _this._queue = [];
    _this._lastSec = 0;
    _this._timer = null;

    _this.drawSeconds();

    return _this;
  }

  _createClass(Heartbeat, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._speed = options.speed || 2;
      this._fontColor = options.fontColor || _color.COLOR.black;
      this._maxQueueCapacity = options.maxQueueCapacity || 30;
    }
  }, {
    key: "postConstructor",
    value: function postConstructor() {
      _get(Heartbeat.prototype.__proto__ || Object.getPrototypeOf(Heartbeat.prototype), "postConstructor", this).call(this); // Start drawing the seconds


      this.tick();
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
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var beatColor = params.color || _color.COLOR.green;
      var beatSpace = params.space || 0;

      if (this._queue.length >= this._maxQueueCapacity) {
        this._queue.shift();
      }

      this._queue.push({
        time: null,
        x: -30,
        color: beatColor,
        space: beatSpace
      });
    }
  }, {
    key: "tick",
    value: function tick() {
      var _this2 = this;

      if (this._timer == null) {
        this._timer = setInterval(function () {
          _this2.drawSeconds();
        }, 1000);
      }
    }
  }, {
    key: "drawSeconds",
    value: function drawSeconds() {
      if (this._queue.length >= this._maxQueueCapacity) {
        this._queue.shift();
      }

      var now = new Date();

      var currSec = _utility.default.leftPadZero(now.getMinutes()) + ':' + _utility.default.leftPadZero(now.getSeconds());

      if (currSec !== this._lastSec) {
        this._queue.push({
          time: currSec,
          x: -30
        });

        this._lastSec = currSec;
      }
    }
  }, {
    key: "drawObject",
    value: function drawObject() {
      this._ctx.textAlign = 'center';
      this._ctx.font = '12px Arial';
      this.clear();

      this._ctx.save();

      this.scale(); // Draw the horizontal line

      this._ctx.fillStyle = this._fontColor;

      this._ctx.fillRect(0, 50, this._viewWidth, 2); // Draw the pulse


      for (var i = 0; i < this._queue.length; i++) {
        var q = this._queue[i];

        if (q.time != null) {
          this._ctx.fillStyle = this._fontColor;

          this._ctx.fillText(q.time, q.x, 90);

          this._ctx.beginPath();

          this._ctx.fillStyle = this._fontColor;

          this._ctx.fillRect(q.x - 1, 45, 2, 12);

          this._ctx.closePath();
        } else {
          this._ctx.fillStyle = q.color;

          this._ctx.beginPath();

          this._ctx.moveTo(q.x - 10, 50);

          this._ctx.quadraticCurveTo(q.x - 5, -20 + q.space * 2, q.x, 50);

          this._ctx.quadraticCurveTo(q.x + 5, 100 - q.space * 1, q.x + 10, 50);

          this._ctx.closePath();

          this._ctx.fill();
        }

        q.x += this._speed;
      }

      this._ctx.restore();
    }
  }]);

  return Heartbeat;
}(_baseComponent.default);

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
Object.defineProperty(exports, "Settings", {
  enumerable: true,
  get: function get() {
    return _settings.default;
  }
});
Object.defineProperty(exports, "BarMeter", {
  enumerable: true,
  get: function get() {
    return _barMeter.default;
  }
});
Object.defineProperty(exports, "DigitalClock", {
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
Object.defineProperty(exports, "MessageQueue", {
  enumerable: true,
  get: function get() {
    return _messageQueue.default;
  }
});
Object.defineProperty(exports, "TextMeter", {
  enumerable: true,
  get: function get() {
    return _textMeter.default;
  }
});
Object.defineProperty(exports, "SpeedCircle", {
  enumerable: true,
  get: function get() {
    return _speedCircle.default;
  }
});
Object.defineProperty(exports, "TextBox", {
  enumerable: true,
  get: function get() {
    return _textBox.default;
  }
});

var _animationTimer = _interopRequireDefault(__webpack_require__(/*! ./animation-timer */ "./src/animation-timer.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ./settings */ "./src/settings.js"));

var _barMeter = _interopRequireDefault(__webpack_require__(/*! ./bar-meter */ "./src/bar-meter.js"));

var _digitalClock = _interopRequireDefault(__webpack_require__(/*! ./digital-clock */ "./src/digital-clock.js"));

var _roundFan = _interopRequireDefault(__webpack_require__(/*! ./round-fan */ "./src/round-fan.js"));

var _volumeMeter = _interopRequireDefault(__webpack_require__(/*! ./volume-meter */ "./src/volume-meter.js"));

var _heartbeat = _interopRequireDefault(__webpack_require__(/*! ./heartbeat */ "./src/heartbeat.js"));

var _messageQueue = _interopRequireDefault(__webpack_require__(/*! ./message-queue */ "./src/message-queue.js"));

var _textMeter = _interopRequireDefault(__webpack_require__(/*! ./text-meter */ "./src/text-meter.js"));

var _speedCircle = _interopRequireDefault(__webpack_require__(/*! ./speed-circle */ "./src/speed-circle.js"));

var _textBox = _interopRequireDefault(__webpack_require__(/*! ./text-box */ "./src/text-box.js"));

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

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _baseComponent = _interopRequireDefault(__webpack_require__(/*! ./base-component */ "./src/base-component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * flexiable width, height
 */
var MessageQueue =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(MessageQueue, _BaseComponent);

  function MessageQueue(canvas) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MessageQueue);

    var viewWidth = options.viewWidth || 100;
    var viewHeight = options.viewHeight || 200;
    _this = _possibleConstructorReturn(this, (MessageQueue.__proto__ || Object.getPrototypeOf(MessageQueue)).call(this, canvas, options, viewWidth, viewHeight));
    _this._queue = [];
    _this._arcWidth = 10;
    return _this;
  }

  _createClass(MessageQueue, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._barHeight = options.barHeight || 20;
      this._speed = options.speed || 5;
      this._space = options.space || 5;
      this._maxQueueCapacity = options.maxQueueCapacity || 20;
    }
  }, {
    key: "drawObject",
    value: function drawObject() {
      this.clear();

      this._ctx.save();

      this.scale(); // Bars can be seen in the view

      var bars = Math.floor(this._viewHeight / (this._barHeight + this._space));
      var drawQueueSize = Math.min(this._queue.length, bars);

      for (var i = 0; i < drawQueueSize; i++) {
        var q = this._queue[i];
        var currY = (this._barHeight + this._space) * i + this._space; // Move up

        if (currY < q.y) {
          q.y -= this._speed;
        } else {
          q.y = currY;
        }

        this._ctx.beginPath();

        this._ctx.fillStyle = q.color;

        this._ctx.fillRect(q.x, q.y, this._viewWidth - 2 * (this._arcWidth + q.space), this._barHeight);

        this._ctx.closePath();

        this._ctx.beginPath();

        this._ctx.moveTo(q.x, q.y);

        this._ctx.quadraticCurveTo(q.x - this._arcWidth, q.y + this._barHeight / 2, q.x, q.y + this._barHeight);

        this._ctx.fill();

        this._ctx.closePath();

        this._ctx.beginPath();

        this._ctx.moveTo(this._viewWidth - this._arcWidth - q.space, q.y);

        this._ctx.quadraticCurveTo(this._viewWidth - q.space, q.y + this._barHeight / 2, this._viewWidth - this._arcWidth - q.space, q.y + this._barHeight);

        this._ctx.fill();

        this._ctx.closePath();
      }

      this._ctx.restore();
    }
  }, {
    key: "push",
    value: function push() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var barColor = param.color || _color.COLOR.blue;
      var barSpace = param.space || 0;

      if (this._queue.length >= this._maxQueueCapacity) {
        this.pop();
      }

      this._queue.push({
        x: this._arcWidth + barSpace,
        y: this._viewHeight + this._barHeight,
        color: barColor,
        space: barSpace
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
    key: "queueSize",
    get: function get() {
      return this._queue.length;
    }
  }]);

  return MessageQueue;
}(_baseComponent.default);

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

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _baseComponent = _interopRequireDefault(__webpack_require__(/*! ./base-component */ "./src/base-component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RoundFan =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(RoundFan, _BaseComponent);

  function RoundFan(canvas, options) {
    var _this;

    _classCallCheck(this, RoundFan);

    _this = _possibleConstructorReturn(this, (RoundFan.__proto__ || Object.getPrototypeOf(RoundFan)).call(this, canvas, options, 200, 200));
    _this._degree = 0;
    return _this;
  }

  _createClass(RoundFan, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var center = options.center || {};
      this._fanColor = options.fanColor || _color.COLOR.green;
      this._centerColor = center.color || _color.COLOR.green;
      this._centerBgColor = center.bgColor || _color.COLOR.white;
      this._speed = options.speed || 1;
    }
  }, {
    key: "drawObject",
    value: function drawObject() {
      this._degree = _utility.default.getNextAngleByDegree(this._degree, this._speed);

      var angle = _utility.default.getAngleByDegree(this._degree);

      this.clear();

      this._ctx.save();

      this.scale();

      this._ctx.translate(100, 100);

      this._ctx.rotate(angle);

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

      this._ctx.closePath();

      this._ctx.beginPath();

      this._ctx.arc(0, 0, 35, 0, 2 * Math.PI);

      this._ctx.fillStyle = this._centerBgColor;

      this._ctx.fill();

      this._ctx.closePath();

      this._ctx.beginPath();

      this._ctx.arc(0, 0, 30, 0, 2 * Math.PI);

      this._ctx.fillStyle = this._centerColor;

      this._ctx.fill();

      this._ctx.closePath();

      this._ctx.strokeStyle = this._centerColor;

      this._ctx.beginPath();

      this._ctx.arc(0, 0, 10, 0, 2 * Math.PI);

      this._ctx.fillStyle = this._centerBgColor;

      this._ctx.fill();

      this._ctx.closePath();

      this._ctx.restore();
    }
  }, {
    key: "fanColor",
    set: function set(s) {
      this._fanColor = s;
    }
  }, {
    key: "centerColor",
    set: function set(s) {
      this._centerColor = s;
    }
  }, {
    key: "speed",
    set: function set(n) {
      this._speed = n;
    }
  }, {
    key: "centerBgColor",
    set: function set(s) {
      this._centerBgColor = s;
    }
  }]);

  return RoundFan;
}(_baseComponent.default);

exports.default = RoundFan;
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

      _animationTimer.default.setFps(fps);
    },
    get: function get() {
      return this._fps;
    }
  }]);

  return Settings;
}();

var _default = new Settings();

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/speed-circle.js":
/*!*****************************!*\
  !*** ./src/speed-circle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _baseComponent = _interopRequireDefault(__webpack_require__(/*! ./base-component */ "./src/base-component.js"));

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

var SpeedCircle =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(SpeedCircle, _BaseComponent);

  function SpeedCircle(canvas, options) {
    var _this;

    _classCallCheck(this, SpeedCircle);

    _this = _possibleConstructorReturn(this, (SpeedCircle.__proto__ || Object.getPrototypeOf(SpeedCircle)).call(this, canvas, options, 200, 200));
    _this._font = '25px Arial';
    _this._degree1 = 0;
    _this._degree2 = 0;
    _this._degree3 = 0;
    _this._degree4 = 0;
    return _this;
  }

  _createClass(SpeedCircle, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var c1 = options.circle1 || {};
      var c2 = options.circle2 || {};
      var c3 = options.circle3 || {};
      var c4 = options.circle4 || {};
      var text = options.text || {};
      this._speed1 = c1.speed || 0.5;
      this._color1 = c1.color || _color.COLOR.red;
      this._speed2 = c2.speed || -0.5;
      this._color2 = c2.color || _color.COLOR.yellow;
      this._speed3 = c3.speed || 0.5;
      this._color3 = c3.color || _color.COLOR.blue;
      this._speed4 = c4.speed || -0.5;
      this._color4 = c4.color || _color.COLOR.grey;
      this._textColor = text.color || _color.COLOR.green;
      this._textValue = text.value || '';
    }
  }, {
    key: "drawObject",
    value: function drawObject() {
      this._degree1 = _utility.default.getNextAngleByDegree(this._degree1, this._speed1);
      this._degree2 = _utility.default.getNextAngleByDegree(this._degree2, this._speed2);
      this._degree3 = _utility.default.getNextAngleByDegree(this._degree3, this._speed3);
      this._degree4 = _utility.default.getNextAngleByDegree(this._degree4, this._speed4);

      var a1 = _utility.default.getAngleByDegree(this._degree1);

      var a2 = _utility.default.getAngleByDegree(this._degree2);

      var a3 = _utility.default.getAngleByDegree(this._degree3);

      var a4 = _utility.default.getAngleByDegree(this._degree4);

      this.clear();

      this._ctx.save();

      this.scale();

      this._ctx.translate(100, 100);

      this._ctx.rotate(a1); // Draw bar circle 1.


      this._ctx.strokeStyle = this._color1;
      this._ctx.lineWidth = 8;
      var space = 0.02;
      var len = 0.5;
      var start = 0;
      var end = len;

      for (var i = 0; i < 6; i++) {
        this._ctx.beginPath();

        this._ctx.arc(0, 0, 90, Math.PI * start, Math.PI * end);

        this._ctx.stroke();

        this._ctx.closePath();

        start = end + space;
        len /= 1.7;
        end = start + len;
      }

      this._ctx.restore();

      this._ctx.save();

      this.scale();

      this._ctx.translate(100, 100);

      this._ctx.rotate(a3); // Draw dot circle 3.


      this._ctx.fillStyle = this._color3;

      for (var _i = 0; _i < 360; _i = _i + 9) {
        var a = _utility.default.getAngleByDegree(_i);

        var x = 64 * Math.cos(a);
        var y = 64 * Math.sin(a);

        this._ctx.beginPath();

        this._ctx.arc(x, y, 3, 0, Math.PI * 2);

        this._ctx.closePath();

        this._ctx.fill();
      }

      this._ctx.restore();

      this._ctx.save();

      this.scale();

      this._ctx.translate(100, 100);

      this._ctx.rotate(a2); // Draw bar circle 2.


      this._ctx.lineWidth = 6;
      this._ctx.strokeStyle = this._color2;

      for (var _i2 = 0; _i2 < 360; _i2 = _i2 + 8) {
        var _a = _utility.default.getAngleByDegree(_i2);

        var x1 = 70 * Math.cos(_a);
        var y1 = 70 * Math.sin(_a);
        var x2 = 83 * Math.cos(_a);
        var y2 = 83 * Math.sin(_a);

        this._ctx.beginPath();

        this._ctx.moveTo(x1, y1);

        this._ctx.lineTo(x2, y2);

        this._ctx.closePath();

        this._ctx.stroke();
      }

      this._ctx.restore();

      this._ctx.save();

      this.scale();

      this._ctx.translate(100, 100);

      this._ctx.rotate(a4); // Draw bar circle 4.


      this._ctx.lineWidth = 5;
      this._ctx.strokeStyle = this._color4;
      len = (2 - 12 * space) / 12;
      start = 0;
      end = len;

      for (var _i3 = 0; _i3 < 12; _i3++) {
        this._ctx.beginPath();

        this._ctx.arc(0, 0, 56, Math.PI * start, Math.PI * end);

        this._ctx.stroke();

        this._ctx.closePath();

        start = end + space;
        end = start + len;
      }

      this._ctx.restore();

      this._ctx.save();

      this.scale(); // Draw the text in the middle.

      this._ctx.font = this._font;
      this._ctx.textAlign = 'center';
      this._ctx.fillStyle = this._textColor;

      this._ctx.fillText(this._textValue, 100, 110);

      this._ctx.restore();
    }
  }, {
    key: "speed1",
    set: function set(n) {
      this._speed1 = n;
    }
  }, {
    key: "speed2",
    set: function set(n) {
      this._speed2 = n;
    }
  }, {
    key: "speed3",
    set: function set(n) {
      this._speed3 = n;
    }
  }, {
    key: "speed4",
    set: function set(n) {
      this._speed4 = n;
    }
  }, {
    key: "color1",
    set: function set(s) {
      this._color1 = s;
    }
  }, {
    key: "color2",
    set: function set(s) {
      this._color2 = s;
    }
  }, {
    key: "color3",
    set: function set(s) {
      this._color3 = s;
    }
  }, {
    key: "color4",
    set: function set(s) {
      this._color4 = s;
    }
  }, {
    key: "textColor",
    set: function set(s) {
      this._textColor = s;
    }
  }, {
    key: "textValue",
    set: function set(s) {
      this._textValue = s;
    }
  }]);

  return SpeedCircle;
}(_baseComponent.default);

exports.default = SpeedCircle;
module.exports = exports["default"];

/***/ }),

/***/ "./src/text-box.js":
/*!*************************!*\
  !*** ./src/text-box.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _baseComponent = _interopRequireDefault(__webpack_require__(/*! ./base-component */ "./src/base-component.js"));

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

/**
 * Allow override width
 * default view height 100
 */
var TextBox =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(TextBox, _BaseComponent);

  function TextBox(canvas) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, TextBox);

    var viewWidth = options.viewWidth || 200;
    _this = _possibleConstructorReturn(this, (TextBox.__proto__ || Object.getPrototypeOf(TextBox)).call(this, canvas, options, viewWidth, 100));
    _this._borderWidth = 8;
    _this._borderHeight = 30;
    _this._space = 10;
    _this._waveY = 0;
    _this._waveSpeed = 1;
    _this._isWaveOn = false;
    return _this;
  }

  _createClass(TextBox, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var text = options.text || {};
      this._textValue = text.value || '';
      this._textColor = text.fontColor || _color.COLOR.white;
      this._textBgColor = text.bgColor || _color.COLOR.blue;
      this._bgColor = options.bgColor || 'rgba(0, 0, 0, 0.01)';
      this._borderColor = options.borderColor || _color.COLOR.blue;
      this._waveColor = options.waveColor || _color.COLOR.blue;
    }
  }, {
    key: "drawObject",
    value: function drawObject() {
      this._ctx.textAlign = 'center';
      this._ctx.fillStyle = this._bgColor;

      this._ctx.fillRect(0, 0, this._width, this._height);

      this._ctx.save();

      this.scale(); // Draw wave line

      if (this._isWaveOn) {
        var waveWidth = 1;

        if (this._waveY >= this._viewHeight / 2 + waveWidth) {
          this._waveY = 0;
          this._isWaveOn = false;
        } else {
          this._ctx.fillStyle = this._waveColor;

          this._ctx.beginPath();

          this._ctx.fillRect(0, this._waveY, this._viewWidth + waveWidth, waveWidth);

          this._ctx.closePath();

          this._ctx.beginPath();

          this._ctx.fillRect(0, this._viewHeight - this._waveY - waveWidth, this._viewWidth, waveWidth);

          this._ctx.closePath();

          this._waveY = _utility.default.getNextPos(this._waveY, this._viewHeight / 2 + waveWidth, this._waveSpeed);
        }
      } // Draw the border.
      // Top left


      this._ctx.fillStyle = this._borderColor;

      this._ctx.fillRect(0, 0, this._borderHeight, this._borderWidth);

      this._ctx.fillRect(0, 0, this._borderWidth, this._borderHeight); // Bottom left


      this._ctx.fillRect(0, this._viewHeight - this._borderHeight, this._borderWidth, this._borderHeight);

      this._ctx.fillRect(0, this._viewHeight - this._borderWidth, this._borderHeight, this._borderWidth); // Top right


      this._ctx.fillRect(this._viewWidth - this._borderHeight, 0, this._borderHeight, this._borderWidth);

      this._ctx.fillRect(this._viewWidth - this._borderWidth, 0, this._borderWidth, this._borderHeight); // Bottom right


      this._ctx.fillRect(this._viewWidth - this._borderHeight, this._viewHeight - this._borderWidth, this._borderHeight, this._borderWidth);

      this._ctx.fillRect(this._viewWidth - this._borderWidth, this._viewHeight - this._borderHeight, this._borderWidth, this._borderHeight); // Draw background rect.


      this._ctx.fillStyle = this._textBgColor;

      this._ctx.fillRect(this._borderWidth + this._space, this._borderWidth + this._space, this._viewWidth - 2 * (this._borderWidth + this._space), this._viewHeight - 2 * (this._borderWidth + this._space)); // Draw text.


      this._ctx.fillStyle = this._textColor;

      this._ctx.beginPath();

      this._ctx.textAlign = 'center';
      this._ctx.font = '40px Arial';

      this._ctx.fillText(this._textValue, this._viewWidth / 2, this._viewHeight - 35);

      this._ctx.closePath();

      this._ctx.restore();
    }
  }, {
    key: "value",
    set: function set(s) {
      this._textValue = s;
      this._isWaveOn = true;
    }
  }, {
    key: "textColor",
    set: function set(s) {
      this._textColor = s;
    }
  }, {
    key: "textBgColor",
    set: function set(s) {
      this._textBgColor = s;
    }
  }, {
    key: "bgColor",
    set: function set(s) {
      this._bgColor = s;
    }
  }, {
    key: "borderColor",
    set: function set(s) {
      this._borderColor = s;
    }
  }, {
    key: "waveColor",
    set: function set(s) {
      this._waveColor = s;
    }
  }]);

  return TextBox;
}(_baseComponent.default);

exports.default = TextBox;
module.exports = exports["default"];

/***/ }),

/***/ "./src/text-meter.js":
/*!***************************!*\
  !*** ./src/text-meter.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = __webpack_require__(/*! ./color */ "./src/color.js");

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _baseComponent = _interopRequireDefault(__webpack_require__(/*! ./base-component */ "./src/base-component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Allow override width
 * default view height 100
 */
var TextMeter =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(TextMeter, _BaseComponent);

  function TextMeter(canvas) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, TextMeter);

    var viewWidth = options.viewWidth || 200;
    _this = _possibleConstructorReturn(this, (TextMeter.__proto__ || Object.getPrototypeOf(TextMeter)).call(this, canvas, options, viewWidth, 100));
    _this._lineWidth = 5;
    _this._arrowWidth = 30;
    _this._pctHeight = 30;
    _this._actualPctHeight = _this._pctHeight - _this._lineWidth / 2;
    _this._meterWidth = _this._viewWidth - 2 * _this._arrowWidth;
    _this._meterHeight = 100 - _this._pctHeight - _this._lineWidth / 2;
    _this._middleBarHeight = _this._meterHeight / 2 + _this._pctHeight;
    _this._barX = _this._percentageValue / 100 * _this._meterWidth + _this._arrowWidth;
    _this._nextBarX = _this._barX;
    _this._arrow = null;
    _this._arrowSpeed = 0.6;
    _this._leftArrowX = -5;
    _this._rightArrowX = _this._viewWidth + 5;
    return _this;
  }

  _createClass(TextMeter, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var bar = options.bar || {};
      var marker = options.marker || {};
      this._percentageBgColor = marker.bgColor || _color.COLOR.black;
      this._markerFontColor = marker.fontColor || _color.COLOR.white;
      this._speed = bar.speed || 5;
      this._fillColor = bar.fillColor || _color.COLOR.red;
      this._bgColor = bar.bgColor || _color.COLOR.lightWhite;
      this._lineColor = bar.borderColor || _color.COLOR.lightGreen;
      this._percentageValue = options.value || 0;
      this._displayValue = options.displayValue || '';
      this._arrowColor = options.arrowColor || _color.COLOR.blue;
    }
  }, {
    key: "drawObject",
    value: function drawObject() {
      this._ctx.textAlign = 'center';
      this.clear();

      this._ctx.save();

      this.scale();
      this._ctx.globalCompositeOperation = 'destination-over'; // Draw left half text

      this._ctx.beginPath();

      this._ctx.rect(this._arrowWidth, this._pctHeight, this._barX - this._arrowWidth, this._meterHeight);

      this._ctx.clip();

      this._ctx.fillStyle = this._bgColor;
      this._ctx.font = '30px Arial';

      this._ctx.fillText(this._displayValue, this._viewWidth / 2, 75);

      this._ctx.fillStyle = this._fillColor;

      this._ctx.fillRect(this._arrowWidth, this._pctHeight, this._barX - this._arrowWidth, this._meterHeight);

      this._ctx.restore();

      this._ctx.save();

      this.scale();
      this._ctx.globalCompositeOperation = 'destination-over'; // Draw right half text

      this._ctx.beginPath();

      this._ctx.rect(this._barX, this._pctHeight, this._viewWidth - this._barX - this._arrowWidth, this._meterHeight);

      this._ctx.clip();

      this._ctx.fillStyle = this._fillColor;
      this._ctx.font = '30px Arial';

      this._ctx.fillText(this._displayValue, this._viewWidth / 2, 75);

      this._ctx.fillStyle = this._bgColor;

      this._ctx.fillRect(this._barX, this._pctHeight, this._viewWidth - this._barX - this._arrowWidth, this._meterHeight);

      this._ctx.restore();

      this._ctx.save();

      this.scale();
      this._ctx.globalCompositeOperation = 'source-over'; // Draw the border.

      this._ctx.lineWidth = this._lineWidth;
      this._ctx.strokeStyle = this._lineColor;

      this._ctx.beginPath();

      this._ctx.rect(this._arrowWidth, this._pctHeight, this._meterWidth, this._meterHeight);

      this._ctx.stroke();

      this._ctx.closePath(); // Draw percentage value


      this._ctx.fillStyle = this._percentageBgColor;

      this._ctx.fillRect(this._barX - 25, 0, 50, this._actualPctHeight);

      this._ctx.fillStyle = this._markerFontColor;
      this._ctx.font = '16px Arial';

      this._ctx.fillText(this._percentageValue + '%', this._barX, 20);

      this._ctx.beginPath();

      this._ctx.fillStyle = this._percentageBgColor;

      this._ctx.moveTo(this._barX - 8, this._actualPctHeight - this._lineWidth / 2);

      this._ctx.lineTo(this._barX, this._pctHeight + this._lineWidth / 2);

      this._ctx.lineTo(this._barX + 8, this._actualPctHeight - this._lineWidth / 2);

      this._ctx.fill();

      this._ctx.closePath(); // Draw arrow.


      if (this._arrow === null) {
        this.drawLeftArrow();
        this.drawRightArrow();
      } else if (this._arrow === 'left') {
        this.drawLeftArrow();
      } else {
        // right
        this.drawRightArrow();
      }

      this._ctx.restore(); // Calculate next position barX


      this._barX = _utility.default.getNextPos(this._barX, this._nextBarX, this._speed);
    }
  }, {
    key: "drawLeftArrow",
    value: function drawLeftArrow() {
      if (this._leftArrowX <= 0) {
        this._leftArrowX = this._arrowWidth - 3;
      } else {
        this._leftArrowX = _utility.default.getNextPos(this._leftArrowX, 0, -this._arrowSpeed);
      }

      this._ctx.beginPath();

      this._ctx.fillStyle = this._arrowColor;

      this._ctx.moveTo(this._leftArrowX, this._actualPctHeight + 10);

      this._ctx.lineTo(this._leftArrowX - 20, this._middleBarHeight);

      this._ctx.lineTo(this._leftArrowX, 90);

      this._ctx.fill();

      this._ctx.closePath();
    }
  }, {
    key: "drawRightArrow",
    value: function drawRightArrow() {
      if (this._rightArrowX >= this._viewWidth) {
        this._rightArrowX = this._arrowWidth + 3 + this._meterWidth;
      } else {
        this._rightArrowX = _utility.default.getNextPos(this._rightArrowX, this._viewWidth, this._arrowSpeed);
      }

      this._ctx.beginPath();

      this._ctx.fillStyle = this._arrowColor;

      this._ctx.moveTo(this._rightArrowX, this._actualPctHeight + 10);

      this._ctx.lineTo(this._rightArrowX + 20, this._middleBarHeight);

      this._ctx.lineTo(this._rightArrowX, 90);

      this._ctx.fill();

      this._ctx.closePath();
    }
  }, {
    key: "value",
    set: function set(value) {
      if (value >= 0 || value <= 100) {
        if (value < this._percentageValue) {
          this._speed = -Math.abs(this._speed);
          this._arrow = 'left';
        } else if (value > this._percentageValue) {
          this._speed = Math.abs(this._speed);
          this._arrow = 'right';
        } else {
          this._arrow = null;
        }

        this._percentageValue = Math.floor(value);
        this._nextBarX = this._percentageValue / 100 * this._meterWidth + this._arrowWidth;
      }
    }
  }, {
    key: "displayValue",
    set: function set(s) {
      this._displayValue = s;
    }
  }, {
    key: "speed",
    set: function set(n) {
      this._speed = n;
    }
  }, {
    key: "fillColor",
    set: function set(s) {
      this._fillColor = s;
    }
  }, {
    key: "bgColor",
    set: function set(s) {
      this._bgColor = s;
    }
  }, {
    key: "arrowColor",
    set: function set(s) {
      this._arrowColor = s;
    }
  }, {
    key: "markerFontColor",
    set: function set(s) {
      this._markerFontColor = s;
    }
  }, {
    key: "markerBgColor",
    set: function set(s) {
      this._percentageBgColor = s;
    }
  }]);

  return TextMeter;
}(_baseComponent.default);

exports.default = TextMeter;
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
    key: "getNextAngleByDegree",
    value: function getNextAngleByDegree(degree, speed) {
      if (degree >= 360) {
        return 0;
      }

      return degree + speed;
    }
  }, {
    key: "getAngleByDegree",
    value: function getAngleByDegree(degree) {
      return degree * Math.PI / 180;
    }
  }, {
    key: "hexToRgba",
    value: function hexToRgba(hex, opacity) {
      var h = hex.replace('#', '');
      var r = parseInt(h.substring(0, 2), 16);
      var g = parseInt(h.substring(2, 4), 16);
      var b = parseInt(h.substring(4, 6), 16);
      return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var h = hex.replace('#', '');
      var color = [];
      color[0] = parseInt(h.substring(0, 2), 16);
      color[1] = parseInt(h.substring(2, 4), 16);
      color[2] = parseInt(h.substring(4, 6), 16);
      return color;
    }
  }, {
    key: "hex",
    value: function hex(c) {
      var s = '0123456789abcdef';
      var i = parseInt(c, 10);

      if (i === 0 || isNaN(c)) {
        return '00';
      }

      i = Math.round(Math.min(Math.max(0, i), 255));
      return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
    }
  }, {
    key: "convertToHex",
    value: function convertToHex(rgb) {
      return this.hex(rgb[0]) + this.hex(rgb[1]) + this.hex(rgb[2]);
    }
  }, {
    key: "generateGradientColor",
    value: function generateGradientColor(colorStart, colorEnd, colorCount) {
      var start = this.hexToRgb(colorStart);
      var end = this.hexToRgb(colorEnd);
      var len = colorCount;
      var alpha = 0.0;
      var rt = [];

      for (var i = 0; i < len; i++) {
        var c = [];
        alpha += 1.0 / len;
        c[0] = start[0] * alpha + (1 - alpha) * end[0];
        c[1] = start[1] * alpha + (1 - alpha) * end[1];
        c[2] = start[2] * alpha + (1 - alpha) * end[2];
        rt.push(this.convertToHex(c));
      }

      return rt;
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
  }, {
    key: "getNextPos",
    value: function getNextPos(curr, dest, speed) {
      if (speed > 0 && curr < dest || speed < 0 && curr > dest) {
        return curr + speed;
      }

      return dest;
    }
  }, {
    key: "shuffleArray",
    value: function shuffleArray(a) {
      var j = 0;
      var temp = 0;

      for (var i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }

      return a;
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

var _baseComponent = _interopRequireDefault(__webpack_require__(/*! ./base-component */ "./src/base-component.js"));

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

var VolumeMeter =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(VolumeMeter, _BaseComponent);

  function VolumeMeter(canvas) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, VolumeMeter);

    var viewHeight = options.viewHeight || 200;
    _this = _possibleConstructorReturn(this, (VolumeMeter.__proto__ || Object.getPrototypeOf(VolumeMeter)).call(this, canvas, options, 100, viewHeight));
    _this._lineWidth = 3;
    _this._numberHeight = 20;
    _this._minMax = 'min';
    _this._meterWidth = _this._viewWidth / 2;
    _this._meterHeight = _this._viewHeight - 2 * _this._numberHeight;
    _this._numberStart = (_this._viewWidth - _this._meterWidth - _this._lineWidth) / 2; // Used only if the value is out of range.

    _this._actualValue = _this._value;
    _this._barY = _this._viewHeight - (_this._value - _this._minValue) / (_this._maxValue - _this._minValue) * _this._meterHeight - _this._numberHeight;
    _this._nextBarY = _this._barY;
    _this._lastBlink = 0;
    _this.drawMarker = _this.drawMarker.bind(_this);
    return _this;
  }
  /**
   * @param {*} options
   */


  _createClass(VolumeMeter, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var min = options.min || {};
      var max = options.max || {};
      var bar = options.bar || {};
      var marker = options.marker || {};
      this._minFontColor = min.fontColor || _color.COLOR.white;
      this._minValue = min.value || 0;
      this._minBgColor = min.bgColor || _color.COLOR.red;
      this._maxFontColor = max.fontColor || _color.COLOR.white;
      this._maxValue = max.value || 100;
      this._maxBgColor = max.bgColor || _color.COLOR.blue;
      this._barBorderColor = bar.borderColor || _color.COLOR.black;
      this._barFillColor = bar.fillColor || _color.COLOR.green;
      this._isGraident = bar.graident || false;
      this._speed = bar.speed || 5;
      this._markerBgColor = marker.bgColor || _color.COLOR.yellow;
      this._markerFontColor = marker.fontColor || _color.COLOR.white;
      this._value = options.value || 0;
    }
  }, {
    key: "drawObject",
    value: function drawObject() {
      this.clear();

      this._ctx.save();

      this.scale(); // Handle graident fill color.

      if (this._isGraident) {
        var graident = this._ctx.createLinearGradient(this._viewWidth / 2, this._barY, this._viewWidth / 2, this._meterHeight + this._numberHeight);

        graident.addColorStop(0, this._barFillColor);
        graident.addColorStop(1, 'white');
        this._ctx.fillStyle = graident;
      } else {
        this._ctx.fillStyle = this._barFillColor;
      } // Draw the filled part.


      this._ctx.beginPath();

      this._ctx.fillRect((this._viewWidth - this._meterWidth) / 2, this._barY, this._meterWidth, this._viewHeight - this._barY - this._numberHeight); // this._ctx.fillRect(0, this._barY, 10, 10);


      this._ctx.closePath(); // Draw the border.


      this._ctx.beginPath();

      this._ctx.lineWidth = this._lineWidth;
      this._ctx.strokeStyle = this._barBorderColor;

      this._ctx.rect((this._viewWidth - this._meterWidth) / 2, this._numberHeight, this._meterWidth, this._meterHeight);

      this._ctx.stroke();

      this._ctx.closePath(); // Draw value.


      if (this._minMax === 'min' || this._minMax === 'max') {
        this.drawMin();
        this.drawMax();
        this._lastBlink = this.blink(this.drawMarker, this._lastBlink, 500);
      } else {
        this.drawMin();
        this.drawMax();
        this.drawMarker();
      }

      this._ctx.restore(); // Calculate the Y value.


      this._barY = _utility.default.getNextPos(this._barY, this._nextBarY, this._speed);
    }
  }, {
    key: "blink",
    value: function blink(blinkFunc, lastBlink, duration) {
      var now = Date.now();

      if (now - lastBlink < duration) {
        blinkFunc.call();
        return lastBlink;
      } else if (now - lastBlink < duration * 2) {
        return lastBlink;
      }

      return now;
    }
  }, {
    key: "drawMin",
    value: function drawMin() {
      this._ctx.textAlign = 'center';
      this._ctx.font = '15px Arial';

      this._ctx.beginPath();

      this._ctx.fillStyle = this._minBgColor;

      this._ctx.fillRect(this._numberStart, this._viewHeight - this._numberHeight - this._lineWidth / 2, this._meterWidth + this._lineWidth, this._numberHeight + this._lineWidth / 2);

      this._ctx.fillStyle = this._minFontColor;

      this._ctx.fillText(this._minValue, this._meterWidth, this._meterHeight + this._numberHeight + 15);

      this._ctx.closePath();
    }
  }, {
    key: "drawMax",
    value: function drawMax() {
      this._ctx.textAlign = 'center';
      this._ctx.font = '15px Arial';

      this._ctx.beginPath();

      this._ctx.fillStyle = this._maxBgColor;

      this._ctx.fillRect(this._numberStart, 0, this._meterWidth + this._lineWidth, this._numberHeight + this._lineWidth / 2);

      this._ctx.fillStyle = this._maxFontColor;

      this._ctx.fillText(this._maxValue, this._meterWidth, this._numberHeight - 4);

      this._ctx.closePath();
    }
  }, {
    key: "drawMarker",
    value: function drawMarker() {
      this._ctx.beginPath();

      this._ctx.font = '10px Arial';
      this._ctx.fillStyle = this._markerBgColor; // Draw value rect.

      this._ctx.fillRect(this._numberStart + this._meterWidth + this._lineWidth, this._barY - 8, this._viewWidth - (this._numberStart + this._meterWidth + this._lineWidth), 16); // Draw value line.


      this._ctx.fillRect(0, this._barY - this._lineWidth / 2, this._numberStart + this._meterWidth + this._lineWidth, this._lineWidth);

      this._ctx.fillStyle = this._markerFontColor;
      var text = this._minMax === 'max' || this._minMax === 'min' ? this._actualValue : this._value;

      this._ctx.fillText(text, (this._viewWidth - this._meterWidth) / 4 * 3 + this._meterWidth, this._barY + 4);

      this._ctx.stroke();

      this._ctx.closePath();
    }
  }, {
    key: "value",
    set: function set(value) {
      var n = value;
      this._actualValue = n;

      if (n >= this._maxValue) {
        this._minMax = 'max';
        n = this._maxValue;
      } else if (n <= this._minValue) {
        this._minMax = 'min';
        n = this._minValue;
      } else {
        this._minMax = 'normal';
      }

      this._speed = n < this._value ? Math.abs(this._speed) : -Math.abs(this._speed);
      this._nextBarY = this._viewHeight - (n - this._minValue) / (this._maxValue - this._minValue) * this._meterHeight - this._numberHeight;
      this._value = n;
    }
  }, {
    key: "barFillColor",
    set: function set(s) {
      this._barFillColor = s;
    }
  }, {
    key: "markerBgColor",
    set: function set(s) {
      this._markerBgColor = s;
    }
  }]);

  return VolumeMeter;
}(_baseComponent.default);

exports.default = VolumeMeter;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=zeu.js.map