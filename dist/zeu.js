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
    _this = _possibleConstructorReturn(this, (BarMeter.__proto__ || Object.getPrototypeOf(BarMeter)).call(this, canvas, options, 0, 0, viewWidth, 200));
    _this._space = 20;
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
    set: function set(dashColor) {
      this._dashColor = dashColor;
    }
  }, {
    key: "barColor",
    set: function set(barColor) {
      this._barColor = barColor;
    }
  }]);

  return BarMeter;
}(_baseComponent.default);

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
    this._fillColor = _color.COLOR.green; // Base scale on the height.

    this._heightScale = this._div.clientHeight / this._defaultHeight; // Width after being scaled.

    this._scaledWidth = this._defaultWidth / this._heightScale;
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
      this._ctx.scale(this._heightScale, this._heightScale);
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
  function BaseComponent(canvas, options, viewX, viewY, viewWidth, viewHeight) {
    _classCallCheck(this, BaseComponent);

    // Canvas
    this._canvas = canvas; // Canvas 2d context

    this._ctx = this._canvas.getContext('2d'); // Scale parameters used in scale()

    this._scaleX = 1;
    this._scaleY = 1; // Current X value (Left 0 to right)

    this._x = viewX; // Current Y value (Top 0 to bottom)

    this._y = viewY; // The width and height used to draw the component.

    this._viewWidth = viewWidth;
    this._viewHeight = viewHeight; // Acutal width and height of the component based on scales.

    this._width = this._scaleX * this._viewWidth;
    this._height = this._scaleY * this._viewHeight;
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

      for (var i = this._eventQueue.length; i >= 0; i--) {
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
  lightGrey: '#F8F8FF',
  lighBlack: '343a42',
  black: '#000000',
  white: '#ffffff',
  red: '#dc3547',
  blue: '#007bfb',
  yellow: '#ffc108',
  cyan: '#17a2b9',
  grey: '#6c757e',
  green: '#28a748'
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

/***/ "./src/div/blink-text.js":
/*!*******************************!*\
  !*** ./src/div/blink-text.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = _interopRequireDefault(__webpack_require__(/*! ./../utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Div based
 */
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

/***/ "./src/div/scroll-panel.js":
/*!*********************************!*\
  !*** ./src/div/scroll-panel.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = _interopRequireDefault(__webpack_require__(/*! ./../utility */ "./src/utility.js"));

var _color = __webpack_require__(/*! ./../color */ "./src/color.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Div based
 */
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

/***/ "./src/div/warning-dialog.js":
/*!***********************************!*\
  !*** ./src/div/warning-dialog.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = _interopRequireDefault(__webpack_require__(/*! ./../utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Div based
 */
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
    _this = _possibleConstructorReturn(this, (Heartbeat.__proto__ || Object.getPrototypeOf(Heartbeat)).call(this, canvas, options, 0, 0, viewWidth, 100));
    _this._queue = [];
    _this._lastSec = 0;
    _this._timer = null;
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
  }, {
    key: "fontColor",
    set: function set(s) {
      this._fontColor = s;
    }
  }, {
    key: "maxQueueCapacity",
    set: function set(n) {
      this._maxQueueCapacity = n;
    },
    get: function get() {
      return this._maxQueueCapacity;
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
Object.defineProperty(exports, "MessageQueue", {
  enumerable: true,
  get: function get() {
    return _messageQueue.default;
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
Object.defineProperty(exports, "TextMeter", {
  enumerable: true,
  get: function get() {
    return _textMeter.default;
  }
});
Object.defineProperty(exports, "Settings", {
  enumerable: true,
  get: function get() {
    return _settings.default;
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

var _barMeter = _interopRequireDefault(__webpack_require__(/*! ./bar-meter */ "./src/bar-meter.js"));

var _digitalClock = _interopRequireDefault(__webpack_require__(/*! ./digital-clock */ "./src/digital-clock.js"));

var _roundFan = _interopRequireDefault(__webpack_require__(/*! ./round-fan */ "./src/round-fan.js"));

var _volumeMeter = _interopRequireDefault(__webpack_require__(/*! ./volume-meter */ "./src/volume-meter.js"));

var _heartbeat = _interopRequireDefault(__webpack_require__(/*! ./heartbeat */ "./src/heartbeat.js"));

var _messageQueue = _interopRequireDefault(__webpack_require__(/*! ./message-queue */ "./src/message-queue.js"));

var _roundRadar = _interopRequireDefault(__webpack_require__(/*! ./round-radar */ "./src/round-radar.js"));

var _roundGauge = _interopRequireDefault(__webpack_require__(/*! ./round-gauge */ "./src/round-gauge.js"));

var _stopWatch = _interopRequireDefault(__webpack_require__(/*! ./stop-watch */ "./src/stop-watch.js"));

var _textMeter = _interopRequireDefault(__webpack_require__(/*! ./text-meter */ "./src/text-meter.js"));

var _animationTimer = _interopRequireDefault(__webpack_require__(/*! ./animation-timer */ "./src/animation-timer.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ./settings */ "./src/settings.js"));

var _speedCircle = _interopRequireDefault(__webpack_require__(/*! ./speed-circle */ "./src/speed-circle.js"));

var _textBox = _interopRequireDefault(__webpack_require__(/*! ./text-box */ "./src/text-box.js"));

var _warningDialog = _interopRequireDefault(__webpack_require__(/*! ./div/warning-dialog */ "./src/div/warning-dialog.js"));

var _blinkText = _interopRequireDefault(__webpack_require__(/*! ./div/blink-text */ "./src/div/blink-text.js"));

var _scrollPanel = _interopRequireDefault(__webpack_require__(/*! ./div/scroll-panel */ "./src/div/scroll-panel.js"));

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
    _this = _possibleConstructorReturn(this, (MessageQueue.__proto__ || Object.getPrototypeOf(MessageQueue)).call(this, canvas, options, 0, 0, viewWidth, viewHeight));
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

    _this = _possibleConstructorReturn(this, (RoundFan.__proto__ || Object.getPrototypeOf(RoundFan)).call(this, canvas, options, 0, 0, 200, 200));
    _this._degree = 0;
    return _this;
  }

  _createClass(RoundFan, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var center = options.center || {};
      this._fanColor = options.fanColor || _color.COLOR.green;
      this._centerColor = center.color || _color.COLOR.blue;
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
  }]);

  return RoundFan;
}(_baseComponent.default);

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

    _this = _possibleConstructorReturn(this, (SpeedCircle.__proto__ || Object.getPrototypeOf(SpeedCircle)).call(this, canvas, options, 0, 0, 200, 200));
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
    key: "speed",
    set: function set(n) {
      this._speed = n;
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
    _this = _possibleConstructorReturn(this, (TextBox.__proto__ || Object.getPrototypeOf(TextBox)).call(this, canvas, options, 0, 0, viewWidth, 100));
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
    key: "textValue",
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
    _this = _possibleConstructorReturn(this, (TextMeter.__proto__ || Object.getPrototypeOf(TextMeter)).call(this, canvas, options, 0, 0, viewWidth, 100));
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
      this._percentageValue = marker.value || 0;
      this._displayValue = marker.displayValue || '';
      this._percentageBgColor = marker.bgColor || _color.COLOR.black;
      this._markerFontColor = marker.fontColor || _color.COLOR.white;
      this._speed = bar.speed || 5;
      this._fillColor = bar.fillColor || _color.COLOR.red;
      this._bgColor = bar.bgColor || _color.COLOR.lightGrey;
      this._lineColor = bar.borderColor || _color.COLOR.lightGreen;
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
      this._ctx.font = '50px Arial';

      this._ctx.fillText(this._displayValue, this._viewWidth / 2, 80);

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
      this._ctx.font = '50px Arial';

      this._ctx.fillText(this._displayValue, this._viewWidth / 2, 80);

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
    key: "percentageValue",
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
    key: "lineColor",
    set: function set(s) {
      this._lineColor = s;
    }
  }, {
    key: "arrowColor",
    set: function set(s) {
      this._arrowColor = s;
    }
  }, {
    key: "percentageBgColor",
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

    var viewHeight = options.viewWidth || 200;
    _this = _possibleConstructorReturn(this, (VolumeMeter.__proto__ || Object.getPrototypeOf(VolumeMeter)).call(this, canvas, options, 0, 0, 100, viewHeight));
    _this._lineWidth = 3;
    _this._numberHeight = 20;
    _this._minMax = 'min';
    _this._meterWidth = _this._viewWidth / 2;
    _this._meterHeight = _this._viewHeight - 2 * _this._numberHeight;
    _this._numberStart = (_this._viewWidth - _this._meterWidth - _this._lineWidth) / 2; // Used only if the value is out of range.

    _this._actualValue = 0;
    _this._barY = _this._viewHeight - (_this._value - _this._minValue) / (_this._maxValue - _this._minValue) * _this._meterHeight - _this._numberHeight;
    _this._nextBarY = _this._barY; // TODO: move this blink function to base component?

    _this._lastBlink = 0;
    _this.drawMarker = _this.drawMarker.bind(_this);
    _this.drawMin = _this.drawMin.bind(_this);
    _this.drawMax = _this.drawMax.bind(_this);
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
      var marker = options.markder || {};
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


      if (this._minMax === 'max') {
        this.drawMin();
        this.drawMarker();
        this._lastBlink = this.blink(this.drawMax, this._lastBlink, 500);
      } else if (this._minMax === 'min') {
        this.drawMax();
        this.drawMarker();
        this._lastBlink = this.blink(this.drawMin, this._lastBlink, 500);
      } else if (this._minMax === 'more' || this._minMax === 'less') {
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
      var text = this._minMax === 'more' || this._minMax === 'less' ? this._actualValue : this._value;

      this._ctx.fillText(text, (this._viewWidth - this._meterWidth) / 4 * 3 + this._meterWidth, this._barY + 4);

      this._ctx.stroke();

      this._ctx.closePath();
    }
  }, {
    key: "value",
    set: function set(value) {
      var n = value;
      this._actualValue = n;

      if (n > this._maxValue) {
        this._minMax = 'more';
        n = this._maxValue;
      } else if (n < this._minValue) {
        this._minMax = 'less';
        n = this._minValue;
      } else {
        if (n === this._minValue) {
          this._minMax = 'min';
        } else if (n === this._maxValue) {
          this._minMax = 'max';
        } else {
          this._minMax = 'normal';
        }
      }

      this._speed = n < this._value ? Math.abs(this._speed) : -Math.abs(this._speed);
      this._nextBarY = this._viewHeight - (n - this._minValue) / (this._maxValue - this._minValue) * this._meterHeight - this._numberHeight;
      this._value = n;
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