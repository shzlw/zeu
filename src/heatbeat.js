import BaseCanvas from './base-canvas';
import Utility from './utility';

export default class Heartbeat extends BaseCanvas {

  constructor(canvas) {
    super(canvas);
    this._a = 0;

    this._ctx.moveTo(0, 0);
    this._ctx.beginPath();
    this._ctx.lineCap = 'round';
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
}
