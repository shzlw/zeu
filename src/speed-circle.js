
import Utility from './utility';
import BaseComponent from './base-component';
import { COLOR } from './color';

export default class SpeedCircle extends BaseComponent {

  constructor(canvas, options) {
    super(canvas, options, 0, 0, 200, 200);

    this._font = '28px Arial';
    this._degree = 0;
  }

  setOptions(options) {
    this._speed = Utility.has(options, 'speed') ? options.speed : 0.5;
    this._color1 = Utility.has(options, 'color1') ? options.color1 : COLOR.black;
    this._color2 = Utility.has(options, 'color2') ? options.color2 : COLOR.black;
    this._color3 = Utility.has(options, 'color3') ? options.color3 : COLOR.black;
    this._color4 = Utility.has(options, 'color4') ? options.color4 : COLOR.black;
    this._textColor = Utility.has(options, 'textColor') ? options.textColor : COLOR.black;
    this._textValue = Utility.has(options, 'textValue') ? options.textValue : 'ABCD';
  }

  drawObject() {
    this._degree = Utility.getNextAngleByDegree(this._degree, this._speed);

    const clockWiseAngle = Utility.getAngleByDegree(this._degree);

    this.clear();
    this._ctx.save();
    this.scale();
    this._ctx.translate(100, 100);
    this._ctx.rotate(clockWiseAngle);
    // Draw bar circle 1.
    this._ctx.strokeStyle = this._color1;
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

    // Draw dot circle 3.
    this._ctx.fillStyle = this._color3;
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

    // Draw bar circle 2.
    this._ctx.lineWidth = 6;
    this._ctx.strokeStyle = this._color2;
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
    this._ctx.strokeStyle = this._color4;
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
    this._ctx.fillStyle = this._textColor;
    this._ctx.fillText(this._textValue, 100, 110);
    this._ctx.restore();
  }
}
