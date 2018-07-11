
export default class Rect {

  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
  }

  update() {
    this._ctx.beginPath();
    this._ctx.moveTo(100, 100);
    this._ctx.lineTo(200, 100);
    this._ctx.lineTo(200, 300);
    this._ctx.lineTo(100, 300);
    this._ctx.closePath();
    this._ctx.fill();
  }
}
