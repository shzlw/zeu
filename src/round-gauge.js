import BaseCanvas from './base-canvas';
import Utility from './utility';

export default class RoundGauge extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 200, 200);

    // 360, 180 or 270?
    this._startValue = 0;
    this._endValue = 270;
    this._startDegree = 0;
    this._endDegree = 270;
    this._value = 100;
    this._isHandArrow = false;
    this._lineColor = 'grey';
    this._handColor = 'red';
    this._fontColor = 'black';

    this._startAngle = Utility.getAngleByDegree(this._startDegree);
    this._endAngle = Utility.getAngleByDegree(this._endDegree);
    this._speed = 3;
    this._currDegree = 0;
    this._targetDegree = this._value / (this._endValue - this._startValue) * (this._endDegree - this._startDegree);
  }

  set value(value) {
    this._value = value;
    this._targetDegree = this._value / (this._endValue - this._startValue) * (this._endDegree - this._startDegree);
    let speed = Math.abs(this._speed);

    this._speed = this._targetDegree > this._currDegree ? speed : -speed;
  }

  drawFrame() {
    this._ctx.textAlign = 'center';

    if ((this._speed > 0 && this._currDegree < this._targetDegree) ||
        (this._speed < 0 && this._currDegree > this._targetDegree)) {
      this._currDegree += this._speed;
    } else if ((this._speed > 0 && this._currDegree >= this._targetDegree) ||
        (this._speed < 0 && this._currDegree <= this._targetDegree)) {
      this._currDegree = this._targetDegree;
    }

    let angle = Utility.getAngleByDegree(this._currDegree);

    this.clearAll();
    this._ctx.save();
    this.scale();

    this._ctx.fillStyle = this._fontColor;
    this._ctx.fillText(this._value, 100, 100);

    this._ctx.translate(100, 100);

    // Draw scales
    this._ctx.strokeStyle = this._lineColor;
    this._ctx.lineWidth = 1;
    for (let i = this._startDegree; i <= this._endDegree; i = i + 6) {
      let a = Utility.getAngleByDegree(i);

      let r = 68;

      if (i % 30 === 0) {
        r = 63;
        let x = 92 * Math.cos(a);
        let y = 92 * Math.sin(a) + 3;

        this._ctx.fillStyle = this._lineColor;
        this._ctx.fillText(i, x, y);
      }

      let x1 = r * Math.cos(a);
      let y1 = r * Math.sin(a);

      let x2 = 80 * Math.cos(a);
      let y2 = 80 * Math.sin(a);

      this._ctx.beginPath();
      this._ctx.moveTo(x1, y1);
      this._ctx.lineTo(x2, y2);
      this._ctx.closePath();
      this._ctx.stroke();
    }

    // Draw the circle
    this._ctx.beginPath();
    this._ctx.lineWidth = 8;
    this._ctx.arc(0, 0, 77, this._startAngle, this._endAngle);
    this._ctx.stroke();

    // Draw the radar wave
    this._ctx.rotate(angle);

    this._ctx.beginPath();
    this._ctx.fillStyle = this._handColor;
    if (this._isHandArrow) {
      this._ctx.moveTo(53, -10);
      this._ctx.lineTo(73, 0);
      this._ctx.lineTo(53, 10);
      this._ctx.fill();
    } else {
      this._ctx.fillRect(50, -4, 23, 6);
    }

    this._ctx.closePath();

    this._ctx.restore();
  }
}

