
export default class Shape {

  /**
   * @constructor
   * @param {object} ctx contect from canvas.getContext('2d')
   */
  constructor(ctx) {
    this._ctx = ctx;
  }

  /**
   * Create a filled rectangle
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @param {string} fillStyle
   */
  fillRect(x1, y1, x2, y2, fillStyle) {
    this._ctx.beginPath();
    this._ctx.fillStyle = fillStyle;
    this._ctx.fillRect(x1, y1, x2, y2);
    this._ctx.closePath();
  }

  /**
   * Create a filled triangle
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @param {number} x3
   * @param {number} y3
   * @param {string} fillStyle
   */
  fillTriangle(x1, y1, x2, y2, x3, y3, fillStyle) {
    this._ctx.beginPath();
    this._ctx.fillStyle = fillStyle;
    this._ctx.moveTo(x1, y1);
    this._ctx.lineTo(x2, y2);
    this._ctx.lineTo(x3, y3);
    this._ctx.fill();
    this._ctx.closePath();
  }

  /**
   * Create a filled text
   * @param {string} text
   * @param {number} x
   * @param {number} y
   * @param {string} font
   * @param {string} textAlign
   * @param {string} fillStyle
   */
  fillText(text, x, y, font, textAlign, fillStyle) {
    this._ctx.beginPath();
    this._ctx.font = font;
    this._ctx.textAlign = textAlign;
    this._ctx.fillStyle = fillStyle;
    this._ctx.fillText(text, x, y);
    this._ctx.closePath();
  }

  /**
   * Create a line
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @param {number} lineWidth
   * @param {string} strokeStyle
   */
  line(x1, y1, x2, y2, lineWidth, strokeStyle) {
    this._ctx.beginPath();
    this._ctx.lineWidth = lineWidth;
    this._ctx.strokeStyle = strokeStyle;
    this._ctx.moveTo(x1, y1);
    this._ctx.lineTo(x2, y2);
    this._ctx.stroke();
    this._ctx.closePath();
  }
}
