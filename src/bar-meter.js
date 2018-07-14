import BaseCanvas from './base-canvas';
import Color from './color';

export default class VerticalGauge extends BaseCanvas {

  constructor(canvas) {
    super(canvas);
    this._a = 0;
  }

  drawRect(i) {
    const x = 10;
    let y = i * 15 + 10;

    this._ctx.fillStyle = new Color().fill;
    this._ctx.fillRect(x, y, 100, 10);
  }

  draw() {
    this._timer = setInterval(() => {
      this.drawRect(this._a);
      this._a += 1;
      if (this._a > 10) {
        this._a = 0;
        this.clearAll();
      }
    }, 100);
  }
}
