
export default class Color {

  constructor() {
    this._line = '#00CED1';
    this._fill = '#00d7af';
    this._border = '#DCDCDC';
  }

  set line(color) {
    this._line = color;
  }

  get line() {
    return this._line;
  }

  set fill(color) {
    this._fill = color;
  }

  get fill() {
    return this._fill;
  }

  get border() {
    return this._border;
  }
}
