
export default class BaseCanvas {

  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
  }

  scale(x, y) {
    this._ctx.scale(x, y);
  }

  clearAll() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

}

