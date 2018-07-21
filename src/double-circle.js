import BaseCanvas from './base-canvas';
import Utility from './utility';
import { COLOR } from './color';

export default class DoubleCircle extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 200, 200);

    let outer = Utility.has(options, 'outer') ? options.outer : null;

    this._outerColor = Utility.has(outer, 'color') ? outer.color : COLOR.green;
    this._outerSpeed = Utility.has(outer, 'speed') ? outer.speed : 0.5;
    this._outerRadius = Utility.has(outer, 'radius') ? outer.radius : 90;

    let inner = Utility.has(options, 'inner') ? options.inner : null;

    this._innerColor = Utility.has(inner, 'color') ? inner.color : COLOR.red;
    this._innerSpeed = Utility.has(inner, 'speed') ? inner.speed : 0.2;
    this._innerRadius = Utility.has(inner, 'radius') ? inner.radius : 80;

    this._fontColor = Utility.has(options, 'fontColor') ? options.fontColor : COLOR.green;
    this._text = Utility.has(options, 'text') ? options.text : 'ON';

    this._isDot = Utility.has(options, 'isDot') ? options.isDot : true;
    this._dots = Utility.has(options, 'dots') ? options.dots : 30;
    this._lineWidth = 10;

    this._interval = (Math.PI * 2) / this._dots;
  }

  postConstructor() {
    super.postConstructor();
    this._ctx.font = '20px Arial';
    this._ctx.textAlign = 'center';
  }

  drawFrame() {
    this.clearAll();
    this._ctx.save();
    this.scale();

    let now = new Date();
    let outerAngle = Utility.getAngleByDate(this._outerSpeed, now);
    let innerAngle = -Utility.getAngleByDate(this._innerSpeed, now);

    this._ctx.fillStyle = this._fontColor;
    this._ctx.fillText(this._text, 100, 100);

    this._ctx.translate(100, 100);
    this._ctx.rotate(outerAngle);

    // Draw outer circle
    if (this._isDot) {
      this._ctx.fillStyle = this._outerColor;
      for (let i = 0; i < this._dots; i++) {
        let d = this._interval * i;
        let x = this._outerRadius * Math.cos(d);
        let y = this._outerRadius * Math.sin(d);

        this._ctx.beginPath();
        this._ctx.fillRect(x - 3, y - 3, 6, 6);
        this._ctx.closePath();
        this._ctx.fill();
      }
    } else {
      this._ctx.strokeStyle = this._outerColor;
      this._ctx.beginPath();
      this._ctx.lineWidth = this._lineWidth;
      this._ctx.arc(0, 0, this._outerRadius, 0, Math.PI * 1.25);
      this._ctx.stroke();
    }

    this._ctx.restore();

    this._ctx.save();
    this.scale();
    this._ctx.translate(100, 100);
    this._ctx.rotate(innerAngle);

    // Draw inner circle
    if (this._isDot) {
      this._ctx.fillStyle = this._innerColor;
      for (let i = 0; i < this._dots; i++) {
        let d = this._interval * i;
        let x = this._innerRadius * Math.cos(d);
        let y = this._innerRadius * Math.sin(d);

        this._ctx.beginPath();
        this._ctx.arc(x, y, 3, 0, Math.PI * 2);
        this._ctx.closePath();
        this._ctx.fill();
      }
    } else {
      this._ctx.strokeStyle = this._innerColor;
      this._ctx.beginPath();
      this._ctx.lineWidth = this._lineWidth;
      this._ctx.arc(0, 0, this._innerRadius, 0, Math.PI * 1.25);
      this._ctx.stroke();
    }

    this._ctx.restore();
  }
}
