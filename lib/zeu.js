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

    this._fps = 60;
    this._fpsInterval = 1000 / this._fps;
    this._lastFrame = Date.now();
  }

  _createClass(AnimationTimer, [{
    key: "render",
    value: function render() {
      window.requestAnimationFrame(this.render); // FPS control

      var now = Date.now();
      var elapsed = now - this._lastFrame;

      if (elapsed > this._fpsInterval) {
        this._lastFrame = now - elapsed % this._fpsInterval; // Draw

        var _loop = function _loop(i) {
          var drawFrameObj = _global.GLOBAL.requestAnimationFrameArray[i]; // Buy me some time.

          setTimeout(function () {
            drawFrameObj.func.call(drawFrameObj.self);
          }, 0);
        };

        for (var i = 0; i < _global.GLOBAL.requestAnimationFrameArray.length; i++) {
          _loop(i);
        }
      }
    }
  }]);

  return AnimationTimer;
}();

exports.default = AnimationTimer;
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

var _color = _interopRequireDefault(__webpack_require__(/*! ./color */ "./src/color.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VerticalGauge =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(VerticalGauge, _BaseCanvas);

  function VerticalGauge(canvas) {
    var _this;

    _classCallCheck(this, VerticalGauge);

    _this = _possibleConstructorReturn(this, (VerticalGauge.__proto__ || Object.getPrototypeOf(VerticalGauge)).call(this, canvas));
    _this._a = 0;
    return _this;
  }

  _createClass(VerticalGauge, [{
    key: "drawRect",
    value: function drawRect(i) {
      var x = 10;
      var y = i * 15 + 10;
      this._ctx.fillStyle = new _color.default().fill;

      this._ctx.fillRect(x, y, 100, 10);
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      this._timer = setInterval(function () {
        _this2.drawRect(_this2._a);

        _this2._a += 1;

        if (_this2._a > 10) {
          _this2._a = 0;

          _this2.clearAll();
        }
      }, 100);
    }
  }]);

  return VerticalGauge;
}(_baseCanvas.default);

exports.default = VerticalGauge;
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
    this.configCtx();
  }

  _createClass(BaseCanvas, [{
    key: "configCtx",
    value: function configCtx() {}
  }, {
    key: "scale",
    value: function scale() {
      // Base scale on the height.
      var heightScale = this._div.clientHeight / this._defaultHeight;

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
    /*
    animate2() {
      this._animationTimer = setInterval(() => {
        this.drawFrame();
      }, 1000 / this._fps);
    }
    */

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

/***/ "./src/blink-dialog.js":
/*!*****************************!*\
  !*** ./src/blink-dialog.js ***!
  \*****************************/
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

var BlinkDialog =
/*#__PURE__*/
function () {
  function BlinkDialog() {
    _classCallCheck(this, BlinkDialog);

    var d = document.createElement('div');
    var dialogCss = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 10;\n      border: 30px solid #dc3545;\n      box-sizing: border-box;\n      background-size: 100px 100px;\n      background-image: linear-gradient(\n        45deg, \n        #dc3545 25%, \n        #ffc107 25%, \n        #ffc107 50%, \n        #dc3545 50%, \n        #dc3545 75%, \n        #ffc107 75%, \n        #ffc107);\n      animation: zeu-pole 1s linear infinite;\n    ";
    d.style.cssText = dialogCss;
    this._dialog = d; // Append dialog div to body

    var body = document.body || document.getElementsByTagName('body')[0];
    body.appendChild(this._dialog); // Append style to head

    var zeuPole = "\n    @keyframes zeu-pole {\n      from { background-position: 0 0; }\n      to { background-position: 200px 100px; }\n    }\n    ";
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

  _createClass(BlinkDialog, [{
    key: "blink",
    value: function blink(message) {
      var _this = this;

      if (message != null) {
        this._div.innerHTML = message;
      }

      this._dialog.style.display = 'block';

      if (this._blinkTimer == null) {
        this._blinkTimer = setInterval(function () {
          if (_this._dialog.style.display !== 'block') {
            _this._dialog.style.display = 'block';
          } else {
            _this._dialog.style.display = 'none';
          }
        }, 1000);
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
  }]);

  return BlinkDialog;
}();

exports.default = BlinkDialog;
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlinkText =
/*#__PURE__*/
function () {
  function BlinkText(baseDiv) {
    _classCallCheck(this, BlinkText);

    this._div = baseDiv;
    this._defaultCss = baseDiv.style.cssText;
    this._interval = 500;
    this._blinkCss = 'color: white; background-color: red;';
    this._blinkTimer = null;
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
    },
    get: function get() {
      return this._interval;
    }
  }, {
    key: "blinkCss",
    set: function set(css) {
      this._blinkCss = css;
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
  black: '#181818',
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DigitalClock =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(DigitalClock, _BaseCanvas);

  function DigitalClock(baseDiv, options) {
    var _this;

    _classCallCheck(this, DigitalClock);

    _this = _possibleConstructorReturn(this, (DigitalClock.__proto__ || Object.getPrototypeOf(DigitalClock)).call(this, baseDiv, 370, 100)); // Bar width

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
      this.vTopLeft();
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
    set: function set(color) {
      this._numberColor = color;
    },
    get: function get() {
      return this._numberColor;
    }
  }, {
    key: "dashColor",
    set: function set(color) {
      this.dashColor = color;
    },
    get: function get() {
      return this.dashColor;
    }
  }, {
    key: "hourOffset",
    set: function set(hourOffset) {
      this._hourOffset = hourOffset;
    },
    get: function get() {
      return this._hourOffset;
    }
  }]);

  return DigitalClock;
}(_baseCanvas.default);

exports.default = DigitalClock;
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Heartbeat =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(Heartbeat, _BaseCanvas);

  function Heartbeat(canvas, options) {
    var _this;

    _classCallCheck(this, Heartbeat);

    _this = _possibleConstructorReturn(this, (Heartbeat.__proto__ || Object.getPrototypeOf(Heartbeat)).call(this, canvas, 300, 100));
    _this._lineColor = _utility.default.has(options, 'lineColor') ? options.lineColor : _color.COLOR.green;
    _this._fontColor = _utility.default.has(options, 'fontColor') ? options.fontColor : _color.COLOR.black;
    _this._queueMaxCapacity = 30;
    _this._vector = 1;
    _this._queue = [];
    _this._lastSec = 0;

    _this.drawSeconds();

    return _this;
  }

  _createClass(Heartbeat, [{
    key: "configCtx",
    value: function configCtx() {
      this._ctx.textAlign = 'center';
      this._ctx.font = '12px Arial';
    }
  }, {
    key: "beat",
    value: function beat() {
      this._queue.push({
        time: null,
        x: -30
      });
    }
  }, {
    key: "drawSeconds",
    value: function drawSeconds() {
      var _this2 = this;

      setInterval(function () {
        if (_this2._queue.length >= _this2._queueMaxCapacity) {
          _this2._queue.shift();
        }

        var now = new Date();

        var currSec = _this2.appendZero(now.getMinutes()) + ':' + _this2.appendZero(now.getSeconds());

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
      this.clearAll();

      this._ctx.save();

      this.scale();

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

        q.x += this._vector;
      }

      this._ctx.fillStyle = this._lineColor;

      this._ctx.fillRect(0, 50, 300, 2);

      this._ctx.restore();
    }
  }, {
    key: "appendZero",
    value: function appendZero(n) {
      if (n < 10) {
        return '0' + n;
      }

      return n;
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
Object.defineProperty(exports, "BlinkDialog", {
  enumerable: true,
  get: function get() {
    return _blinkDialog.default;
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

var _blinkDialog = _interopRequireDefault(__webpack_require__(/*! ./blink-dialog */ "./src/blink-dialog.js"));

var _blinkText = _interopRequireDefault(__webpack_require__(/*! ./blink-text */ "./src/blink-text.js"));

var _scrollPanel = _interopRequireDefault(__webpack_require__(/*! ./scroll-panel */ "./src/scroll-panel.js"));

var _animationTimer = _interopRequireDefault(__webpack_require__(/*! ./animation-timer */ "./src/animation-timer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Fire up window.requestAnimationFrame()
new _animationTimer.default().render();

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RoundFan =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(RoundFan, _BaseCanvas);

  function RoundFan(baseDiv, options) {
    var _this;

    _classCallCheck(this, RoundFan);

    _this = _possibleConstructorReturn(this, (RoundFan.__proto__ || Object.getPrototypeOf(RoundFan)).call(this, baseDiv, 200, 200));
    _this._fanColor = _utility.default.has(options, 'fanColor') ? options.fanColor : _color.COLOR.green;
    _this._centerColor = _utility.default.has(options, 'centerColor') ? options.centerColor : '#FFFFFF';
    _this._speed = _utility.default.has(options, 'speed') ? options.speed : 1;
    _this._ctx.globalCompositeOperation = 'destination-over';
    return _this;
  }

  _createClass(RoundFan, [{
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
      this.clearAll();

      this._ctx.save();

      this.scale();

      this._ctx.translate(100, 100);

      var now = new Date();

      this._ctx.rotate(this._speed * Math.PI / 6 * now.getSeconds() + this._speed * Math.PI / 6000 * now.getMilliseconds());

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
    this._array = [];
    var defaultCss = 'margin: 3px; padding: 3px; color: white; background-color: ' + _color.COLOR.green + ';';
    this._defaultCss = _utility.default.has(options, 'defaultCss') ? options.defaultCss : defaultCss;
    this._isUp = _utility.default.has(options, 'isUp') ? options.isUp : true;
    ;
    this._maxQueueCapacity = _utility.default.has(options, 'maxQueueCapacity') ? options.maxQueueCapacity : 50;
  }

  _createClass(ScrollPanel, [{
    key: "push",
    value: function push(boxDiv) {
      if (this.isExceedCapacity()) {
        this.pop();
      } else {
        if (this._isUp) {
          this._div.prepend(boxDiv);

          this._div.scrollBottom = this._div.scrollHeight;
        } else {
          this._div.append(boxDiv);

          this._div.scrollTop = this._div.scrollHeight;
        }
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      var f = this._array.shift();

      this._div.removeChild(f);
    }
  }, {
    key: "isExceedCapacity",
    value: function isExceedCapacity() {
      return this._array.length >= this._maxQueueCapacity;
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
function (_BaseCanvas) {
  _inherits(VolumeMeter, _BaseCanvas);

  function VolumeMeter(baseDiv, options) {
    var _this;

    _classCallCheck(this, VolumeMeter);

    _this = _possibleConstructorReturn(this, (VolumeMeter.__proto__ || Object.getPrototypeOf(VolumeMeter)).call(this, baseDiv, 100, 200));
    _this._min = 0;
    _this._max = 100;
    _this._value = 50;
    _this._speed = 3;
    _this._lineWidth = 5;
    _this._margin = 40;
    _this._meterWidth = 50;
    _this._meterHeight = 180; // Ignore line width totally.

    _this._y = _this._meterHeight - _this._value / (_this._max - _this._min) * _this._meterHeight + 10;
    _this._nextY = _this._y;
    return _this;
  }

  _createClass(VolumeMeter, [{
    key: "configCtx",
    value: function configCtx() {
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

      if (this._speed > 0 && this._y <= this._nextY || this._speed <= 0 && this._y >= this._nextY) {
        this._y += this._speed;
      } // Draw the border.


      this._ctx.rect(25, 10, this._meterWidth, this._meterHeight);

      this._ctx.lineWidth = this._lineWidth;
      this._ctx.strokeStyle = this._fontColor;
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
      } else {// TODO: out of range!
      }
    },
    get: function get() {
      this._value;
    }
  }]);

  return VolumeMeter;
}(_baseCanvas.default);

exports.default = VolumeMeter;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=zeu.js.map