import { COLOR } from './color';
import BaseComponent from './base-component';

/**
 * flexiable width, height
 */
export default class MessageQueue extends BaseComponent {

  constructor(canvas, options = {}) {
    const viewWidth = options.viewWidth || 100;
    const viewHeight = options.viewHeight || 200;

    super(canvas, options, viewWidth, viewHeight);

    this._queue = [];
    this._arcWidth = 10;
  }

  setOptions(options = {}) {
    this._barHeight = options.barHeight || 20;
    this._speed = options.speed || 5;
    this._space = options.space || 5;
    this._maxQueueCapacity = options.maxQueueCapacity || 20;
  }

  drawObject() {
    this.clear();
    this._ctx.save();
    this.scale();

    // Bars can be seen in the view
    const bars = Math.floor(this._viewHeight / (this._barHeight + this._space));
    const drawQueueSize = Math.min(this._queue.length, bars);

    for (let i = 0; i < drawQueueSize; i++) {
      let q = this._queue[i];

      let currY = (this._barHeight + this._space) * i + this._space;

      // Move up
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
      this._ctx.quadraticCurveTo(this._viewWidth - q.space, q.y + this._barHeight / 2,
        this._viewWidth - this._arcWidth - q.space, q.y + this._barHeight);
      this._ctx.fill();
      this._ctx.closePath();
    }

    this._ctx.restore();
  }

  push(param = {}) {
    const barColor = param.color || COLOR.blue;
    const barSpace = param.space || 0;

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

  pop() {
    if (this._queue.length > 0) {
      this._queue.shift();
    }
  }

  get queueSize() {
    return this._queue.length;
  }
}

