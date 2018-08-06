import BaseCanvas from './base-canvas';
import Utility from './utility';
import { COLOR } from './color';

export default class Heartbeat extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, baseDiv.clientWidth, 100);

    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : COLOR.green;
    this._fontColor = Utility.has(options, 'fontColor') ? options.fontColor : COLOR.black;
    this._maxQueueCapacity = Utility.has(options, 'maxQueueCapacity') ? options.maxQueueCapacity : 30;

    this._speed = 2;
    this._queue = [];
    this._lastSec = 0;
    this._timer = null;
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

  beat() {
    if (this._queue.length >= this._maxQueueCapacity) {
      this._queue.shift();
    }
    this._queue.push({ time: null, x: -30});
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

  drawFrame() {
    this._ctx.textAlign = 'center';
    this._ctx.font = '12px Arial';

    this.clearAll();
    this._ctx.save();
    this.scale();

    // Draw the pulse
    for (let i = 0; i < this._queue.length; i++) {
      let q = this._queue[i];

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
    }

    // Draw the horizontal line
    this._ctx.fillStyle = this._lineColor;
    this._ctx.fillRect(0, 50, this._scaledWidth, 2);

    this._ctx.restore();
  }

  set lineColor(lineColor) {
    this._lineColor = lineColor;
  }

  get lineColor() {
    return this._lineColor;
  }

  set fontColor(fontColor) {
    this._fontColor = fontColor;
  }

  get fontColor() {
    return this._fontColor;
  }

  set maxQueueCapacity(maxQueueCapacity) {
    this._maxQueueCapacity = maxQueueCapacity;
  }

  get maxQueueCapacity() {
    return this._maxQueueCapacity;
  }
}

