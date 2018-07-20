import BaseCanvas from './base-canvas';
import Utility from './utility';
import { COLOR } from './color';

export default class Heartbeat extends BaseCanvas {

  constructor(canvas, options) {
    super(canvas, 300, 100);

    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : COLOR.green;
    this._fontColor = Utility.has(options, 'fontColor') ? options.fontColor : COLOR.black;
    this._queueMaxCapacity = Utility.has(options, 'queueMaxCapacity') ? options.queueMaxCapacity : 30;
    
    this._vector = 1;
    this._queue = [];
    this._lastSec = 0;

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
    this._ctx.fillRect(0, 50, 300, 2);

    this._ctx.restore();
  }

  appendZero(n) {
    if (n < 10) {
      return '0' + n;
    }
    return n;
  }
}
