
export default class Color {

  constructor() {
    this._lineColor = '#00CED1';
  }

  set lineColor(color) {
    this._lineColor = color;
  }

  get lineColor() {
    return this._lineColor;
  }
}
