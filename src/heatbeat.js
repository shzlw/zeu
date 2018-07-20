import BaseCanvas from './base-canvas';
// import Utility from './utility';
import { COLOR } from './color';

export default class Heartbeat extends BaseCanvas {

  constructor(canvas) {
    super(canvas, 200, 100);

    this._vector = 1;
    this._queue = [];
    this._queueMaxCapacity = 50;
    this._lastSec = 0;
    this._lineColor = COLOR.green;
    this._fontColor = COLOR.black;

    this.drawSeconds();
  }

  configCtx() {
    this._ctx.textAlign = 'center';
    this._ctx.font = '12px Arial';
  }

  beat() {
    this._queue.push({ time: null, x: -30});
  }

  drawSeconds() {
    setInterval(() => {
      if (this._queue.length >= this._queueMaxCapacity) {
        this._queue.shift();
      }

      let now = new Date();
      let currSec = this.appendZero(now.getMinutes()) + ':' + this.appendZero(now.getSeconds());

      if (currSec !== this._lastSec) {
        this._queue.push({ time: currSec, x: -30});
        this._lastSec = currSec;
      }
    }, 1000);
  }

  drawFrame() {
    this.clearAll();
    this._ctx.save();
    this.scale();

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
      q.x += this._vector;
    }
    this._ctx.fillStyle = this._lineColor;
    this._ctx.fillRect(0, 50, 200, 2);

    this._ctx.restore();
  }

  appendZero(n) {
    if (n < 10) {
      return '0' + n;
    }
    return n;
  }
}
