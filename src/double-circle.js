import BaseCanvas from './base-canvas';
import Utility from './utility';
import { COLOR } from './color';

export default class DoubleCircle extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 200, 200);

    // TODO: pass in width, height for canvas.
    // circle color [] 4 color

    // Options
    let outer = Utility.has(options, 'circle') ? options.outer : null;

    this._outerColor = Utility.has(outer, 'color') ? outer.color : COLOR.green;
    this._outerSpeed = Utility.has(outer, 'speed') ? outer.speed : 0.5;
    this._outerRadius = Utility.has(outer, 'radius') ? outer.radius : 90;

    let inner = Utility.has(options, 'inner') ? options.inner : null;

    this._innerColor = Utility.has(inner, 'color') ? inner.color : COLOR.red;
    this._innerSpeed = Utility.has(inner, 'speed') ? inner.speed : 0.2;
    this._innerRadius = Utility.has(inner, 'radius') ? inner.radius : 70;

    this._fontColor = Utility.has(options, 'fontColor') ? options.fontColor : COLOR.green;
    this._text = Utility.has(options, 'text') ? options.text : 'ABCD';
    this._font = '28px Arial';
    this._degree = 0;
  }

  drawFrame() {
    this._degree = Utility.getNextAngleByDegree(this._degree, this._outerSpeed);

    const clockWiseAngle = Utility.getAngleByDegree(this._degree);

    this.clearAll();
    this._ctx.save();
    this.scale();
    this._ctx.translate(100, 100);
    this._ctx.rotate(clockWiseAngle);
    // Draw bar circle 1.
    this._ctx.strokeStyle = this._outerColor;
    this._ctx.lineWidth = 10;
    let space = 0.02;
    let len = 0.5;
    let start = 0;
    let end = len;

    for (let i = 0; i < 6; i++) {
      this._ctx.beginPath();
      this._ctx.arc(0, 0, 90, Math.PI * start, Math.PI * end);
      this._ctx.stroke();
      this._ctx.closePath();

      start = end + space;
      len /= 1.7;
      end = start + len;
    }

    // Draw line circle 2.
    this._ctx.fillStyle = this._innerColor;
    for (let i = 0; i < 360; i = i + 9) {
      let a = Utility.getAngleByDegree(i);

      let x = 60 * Math.cos(a);
      let y = 60 * Math.sin(a);

      this._ctx.beginPath();
      this._ctx.arc(x, y, 3, 0, Math.PI * 2);
      this._ctx.closePath();
      this._ctx.fill();
    }

    this._ctx.restore();
    this._ctx.save();
    this.scale();
    this._ctx.translate(100, 100);
    this._ctx.rotate(-clockWiseAngle);

    // Draw round dot circle 3.
    this._ctx.lineWidth = 6;
    this._ctx.fillStyle = this._innerColor;
    for (let i = 0; i < 360; i = i + 8) {
      let a = Utility.getAngleByDegree(i);

      const x1 = 66 * Math.cos(a);
      const y1 = 66 * Math.sin(a);

      let x2 = 81 * Math.cos(a);
      let y2 = 81 * Math.sin(a);

      this._ctx.beginPath();
      this._ctx.moveTo(x1, y1);
      this._ctx.lineTo(x2, y2);
      this._ctx.closePath();
      this._ctx.stroke();
    }

    // Draw bar circle 4.
    this._ctx.lineWidth = 5;
    len = (2 - (12 * space)) / 12;
    start = 0;
    end = len;
    for (let i = 0; i < 12; i++) {
      this._ctx.beginPath();
      this._ctx.arc(0, 0, 52, Math.PI * start, Math.PI * end);
      this._ctx.stroke();
      this._ctx.closePath();
      start = end + space;
      end = start + len;
    }

    this._ctx.restore();
    this._ctx.save();
    this.scale();
    // Draw the text in the middle.
    this._ctx.font = this._font;
    this._ctx.textAlign = 'center';
    this._ctx.fillStyle = this._fontColor;
    this._ctx.fillText(this._text, 100, 110);
    this._ctx.restore();
  }

  set fontColor(fontColor) {
    this._fontColor = fontColor;
  }

  set text(text) {
    this._text = text;
  }
}
