import { GLOBAL } from './global';
import Utility from './utility';

export default class BaseComponent {

  constructor(canvas, options, viewX, viewY, viewWidth, viewHeight) {
    // Canvas
    this._canvas = canvas;

    // Canvas 2d context
    this._ctx = this._canvas.getContext('2d');

    // Scale parameters used in scale()
    this._scaleX = 1;
    this._scaleY = 1;

    // The width and height used to draw the component.
    this._viewWidth = viewWidth !== null ? viewWidth : canvas.width;
    this._viewHeight = viewHeight !== null ? viewHeight : canvas.height;
    // Current X value (Left 0 to right)
    this._x = viewX;

    // Current Y value (Top 0 to bottom)
    this._y = viewY;

    // Acutal width and height of the component based on scales.
    this._width = this._scaleX * this._viewWidth;
    this._height = this._scaleY * this._viewHeight;

    this._display = true;

    // Queue that stores animation movements.
    this._movementQueue = [];

    // Bind the drawFrame function.
    this.drawFrame = this.drawFrame.bind(this);

    // Set options
    this.setOptions(options);

    // Post constructor.
    this.postConstructor();
  }

  // ********** INTERNAL API **********
  setOptions(options) {}

  postConstructor() {
    this.addToAnimationQueue();
  }

  drawFrame() {
    // Check movement
    if (this._movementQueue.length > 0) {
      const move = this._movementQueue[0];

      if (this._x === move.destX && this._y === move.destY) {
        this._movementQueue.shift();
      } else {
        this._x = Utility.getNextPos(this._x, move.destX, move.speedX);
        this._y = Utility.getNextPos(this._y, move.destY, move.speedY);
      }
    }

    // Check display or not.
    if (!this.isDisplay()) {
      return;
    }

    // Draw the component
    // this._ctx.save();
    // Scale the object.
    // this._ctx.scale(this._scaleX, this._scaleY);
    this.drawObject();
    // this._ctx.restore();
  }

  drawObject() {}

  clear() {
    this._ctx.clearRect(this._x, this._y, this._width, this._height);
  }

  scale() {
    this._ctx.scale(this._scaleX, this._scaleY);
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
    let index = -1;

    for (let i = 0; i < GLOBAL.requestAnimationFrameArray.length; i++) {
      let drawFrameObj = GLOBAL.requestAnimationFrameArray[i];

      if (drawFrameObj.self._canvas.id === this._canvas.id) {
        index = i;
        break;
      }
    }
    return index;
  }

  get isAnimationOn() {
    return this.getAnimationFrameArrayPos() !== -1;
  }

  // ********** EXTERNAL API **********
  startAnimation() {
    this.addToAnimationQueue();
  }

  stopAnimation() {
    this.removeFromAnimationQueue();
  }

  moveTo(destX, destY, duration) {
    let srcX = this._x;
    let srcY = this._y;

    if (this._movementQueue.length > 0) {
      srcX = this._movementQueue[this._movementQueue.length - 1].destX;
      srcY = this._movementQueue[this._movementQueue.length - 1].destY;
    }

    // Calculate the speed.
    const sX = Math.abs(destX - srcX) / (duration / 60);
    const sY = Math.abs(destY - srcY) / (duration / 60);
    const speedX = destX > srcX ? sX : -sX;
    const speedY = destY > srcY ? sY : -sY;

    // Push the movement to the queue.
    this._movementQueue.push({
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

  get movementQueue() {
    return this._movementQueue;
  }
}
