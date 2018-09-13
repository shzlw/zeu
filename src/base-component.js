import { GLOBAL } from './global';
import Utility from './utility';
import Shape from './shape';
import { COLOR } from './color';

export default class BaseComponent {

  constructor(canvas, options = {}, viewWidth, viewHeight) {
    // Canvas
    this._canvas = document.getElementById(canvas);

    // Canvas 2d context
    this._ctx = this._canvas.getContext('2d');

    // Current X value (Left 0 to right)
    this._x = 0;

    // Current Y value (Top 0 to bottom)
    this._y = 0;

    // The width and height used to draw the component.
    this._viewWidth = viewWidth;
    this._viewHeight = viewHeight;

    // Scale parameters used in scale()
    this._scaleX = 1;
    this._scaleY = 1;

    // Get canvas height
    const canvasHeight = this._canvas.height || this._canvas.parentNode.clientHeight || viewHeight;

    // Set acutal width and height of the component based on scales.
    this.scaleByHeight(canvasHeight);

    this._display = true;

    // Event queue that stores animation movements like 'move', 'scale', 'display' and etc.
    this._eventQueue = [];

    // Bind the drawFrame function.
    this.drawFrame = this.drawFrame.bind(this);

    // Init Shape instance.
    this._shape = new Shape(this._ctx);

    let alert = {
      on: false,
      lastCall: 0,
      dashOffSet: 0,
      text: '',
      duration: 1500,
      lineColor: COLOR.red,
      fontColor: COLOR.red,
      bgColor: COLOR.yellow
    };

    this._alert = alert;
    this.alertFunc = this.alertFunc.bind(this);

    // Set options
    this.setOptions(options);

    // Post constructor.
    this.postConstructor();
  }

  // ********** INTERNAL API **********
  setOptions(options) {}

  postConstructor() {
    this.removeFromAnimationQueue();
    this.addToAnimationQueue();
  }

  drawFrame() {
    // Check movement
    if (this._eventQueue.length > 0) {
      const event = this._eventQueue[0];

      if (event.type === 'move') {
        if (this._x === event.destX && this._y === event.destY) {
          this._eventQueue.shift();
        } else {
          this._x = Utility.getNextPos(this._x, event.destX, event.speedX);
          this._y = Utility.getNextPos(this._y, event.destY, event.speedY);
        }
      }
    }

    // Check display or not.
    if (!this.isDisplay()) {
      return;
    }

    this.clear();

    this.save();
    this.drawObject();
    this._ctx.restore();

    if (this.isAlert()) {
      this.save();
      this._alert.lastCall = this.nextAlert(this.alertFunc, this._alert.lastCall, this._alert.duration);
      this._ctx.restore();
    }
  }

  drawObject() {}

  clear() {
    this._ctx.clearRect(this._x, this._y, this._width, this._height);
  }

  scale() {
    this._ctx.scale(this._scaleX, this._scaleY);
  }

  save() {
    this._ctx.save();
    this.scale();
  }

  addToAnimationQueue() {
    let index = this.getAnimationFrameArrayPos();

    if (index === -1) {
      GLOBAL.requestAnimationFrameArray.push(this.drawFrameObj());
    }
  }

  removeFromAnimationQueue() {
    let index = this.getAnimationFrameArrayPos();

    if (index !== -1) {
      GLOBAL.requestAnimationFrameArray.splice(index, 1);
    }
  }

  drawFrameObj() {
    return {
      func: this.drawFrame,
      self: this
    };
  }

  getAnimationFrameArrayPos() {
    return GLOBAL.requestAnimationFrameArray.findIndex(obj => obj.self._canvas.id === this._canvas.id);
  }

  get isAnimationOn() {
    return this.getAnimationFrameArrayPos() !== -1;
  }

  nextAlert(alertFunc, lastAlert, interval) {
    const now = Date.now();

    if (now - lastAlert < interval) {
      alertFunc.call();
      return lastAlert;
    } else if (now - lastAlert < (interval * 2)) {
      return lastAlert;
    }
    return now;
  }

  alertFunc() {
    const w = 20;

    this._shape.fillRect(this._x, this._y, this._width, this._height, this._alert.bgColor);

    this._ctx.setLineDash([w, w * 3 / 4]);
    this._ctx.lineDashOffset = this._alert.dashOffSet;
    this._shape.line(this._x, this._y, this._x + this._width, this._y, 2 * w, this._alert.lineColor);
    this._shape.line(this._x + this._width, this._y + this._height, this._x,
      this._y + this._height, 2 * w, this._alert.lineColor);

    this._alert.dashOffSet--;
    if (this._alert.dashOffSet > w) {
      this._alert.dashOffSet = 0;
    }

    this._shape.fillText(this._alert.text, (this._width - this._x) / 2, (this._height - this._y) / 2 + 10,
      'Bold 30px Arial', 'center', this._alert.fontColor);
  }

  // ********** EXTERNAL API **********
  /**
   * Destroy.
   */
  destroy() {
    this.removeFromAnimationQueue();
    this.clear();
    this._canvas = null;
    this._ctx = null;
    this._alert = null;
  }

  /**
   * Turn on alert.
   */
  alertOn(params = {}) {
    this._alert.text = params.text || 'ALERT';
    this._alert.interval = params.interval || 1500;
    this._alert.bgColor = params.bgColor || COLOR.yellow;
    this._alert.fontColor = params.fontColor || COLOR.red;
    this._alert.lineColor = params.lineColor || COLOR.red;
    this._alert.on = true;
  }

  /**
   * Turn off alert.
   */
  alertOff() {
    this._alert.on = false;
  }

  isAlert() {
    return this._alert.on;
  }

  moveTo(destX, destY, duration) {
    let srcX = this._x;
    let srcY = this._y;

    // Find last move event.
    for (let i = (this._eventQueue.length - 1); i >= 0; i--) {
      const event = this._eventQueue[i];

      if (event.type === 'move') {
        srcX = event.destX;
        srcY = event.destY;
        break;
      }
    }

    // Calculate the speed.
    const speed = duration / 60;
    const sX = Math.abs(destX - srcX) / speed;
    const sY = Math.abs(destY - srcY) / speed;
    const speedX = destX > srcX ? sX : -sX;
    const speedY = destY > srcY ? sY : -sY;

    // Push the movement to the queue.
    this._eventQueue.push({
      type: 'move',
      destX: destX,
      destY: destY,
      speedX: speedX,
      speedY: speedY
    });

    return this;
  }

  scaleTo(x, y) {
    this._scaleX = x;
    this._scaleY = y;
    this._width = this._scaleX * this._viewWidth;
    this._height = this._scaleY * this._viewHeight;
    return this;
  }

  scaleByHeight(height) {
    this._scaleY = height / this._viewHeight;
    this._scaleX = this._scaleY;
    this._width = this._scaleX * this._viewWidth;
    this._height = this._scaleY * this._viewHeight;
    return this;
  }

  show() {
    this._display = true;
  }

  hide() {
    this._display = false;
  }

  isDisplay() {
    return this._display;
  }

  get canvas() {
    return this._canvas;
  }

  get context() {
    return this._ctx;
  }

  get eventQueue() {
    return this._eventQueue;
  }

  get viewWidth() {
    return this._viewWidth;
  }

  get viewHeight() {
    return this._viewHeight;
  }
}
