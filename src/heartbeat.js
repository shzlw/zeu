import Utility from './utility';
import { COLOR } from './color';
import BaseComponent from './base-component';

/**
 * Allow override width
 * view height: 100
 */
export default class Heartbeat extends BaseComponent {

  constructor(canvas, options = {}) {
    const viewWidth = options.viewWidth || 200;

    super(canvas, options, viewWidth, 100);

    this._queue = [];
    this._lastSec = 0;
    this._timer = null;
  }

  setOptions(options = {}) {
    this._speed = options.speed || 2;
    this._fontColor = options.fontColor || COLOR.black;
    this._maxQueueCapacity = options.maxQueueCapacity || 30;
  }

  postConstructor() {
    super.postConstructor();
    // Start drawing the seconds
    this.drawSeconds();
  }

  destroy() {
    if (this._timer != null) {
      clearInterval(this._timer);
    }
    super.destroy();
  }

  beat(params = {}) {
    const beatColor = params.color || COLOR.green;
    const beatSpace = params.space || 0;

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

  drawSeconds() {
    this._timer = setInterval(() => {
      if (this._queue.length >= this._maxQueueCapacity) {
        this._queue.shift();
      }

      let now = new Date();
      let currSec = Utility.leftPadZero(now.getMinutes()) + ':' + Utility.leftPadZero(now.getSeconds());

      if (currSec !== this._lastSec) {
        this._queue.push({ time: currSec, x: -30});
        this._lastSec = currSec;
      }
    }, 1000);
  }

  drawObject() {
    this._ctx.textAlign = 'center';
    this._ctx.font = '12px Arial';

    this.clear();
    this._ctx.save();
    this.scale();

    // Draw the horizontal line
    this._ctx.fillStyle = this._fontColor;
    this._ctx.fillRect(0, 50, this._viewWidth, 2);

    // Draw the pulse
    for (let i = 0; i < this._queue.length; i++) {
      let q = this._queue[i];

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

  set fontColor(s) {
    this._fontColor = s;
  }

  set maxQueueCapacity(n) {
    this._maxQueueCapacity = n;
  }

  get maxQueueCapacity() {
    return this._maxQueueCapacity;
  }
}

