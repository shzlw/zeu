
export default class BaseCanvas {

  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
    this._width = 200;
    this._height = 200;

    // Base scale on the height.
    this._scale = this._canvas.height / this._height;
    this.scale(this._scale, this._scale);
  }

  scale(x, y) {
    this._ctx.scale(x, y);
  }

  clearAll() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

}

