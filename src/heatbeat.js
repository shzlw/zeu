import BaseCanvas from './base-canvas';
import Utility from './utility';

export default class Heartbeat extends BaseCanvas {

  constructor(canvas) {
    super(canvas);
    this._a = 0;
  }

  beat() {
    this._timer = setInterval(() => {
      let y = Utility.getRandomInt(1, 100);

      this._ctx.lineTo(this._a, y);
      this._a += 3;
      if (this._a > 200) {
        this._a = 0;
        this._ctx.closePath();
        this.clearAll();
        this._ctx.beginPath();
      }
      this._ctx.stroke();
    }, 100);
  }

  drawFrame() {
    this.clearAll();
    this._ctx.save();

    this._ctx.beginPath();
    this._ctx.moveTo(-50, 100);

    this._ctx.lineTo(this._a - 20, 100);
    this._ctx.lineTo(this._a, 50);
    this._ctx.lineTo(this._a + 20, 100);
    this._ctx.lineTo(this._a + 260, 100);
    this._a += 1;
    if (this._a > 260) {
      this._a = -40;
    }
    this._ctx.stroke();

    this._ctx.restore();
  }
}
