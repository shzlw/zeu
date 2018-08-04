import BaseCanvas from './base-canvas';
import { COLOR } from './color';
import Utility from './utility';

export default class RoundGauge extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 200, 200);

    this._startValue = Utility.has(options, 'startValue') ? options.startValue : 0;
    this._endValue = Utility.has(options, 'endValue') ? options.endValue : 100;
    this._startDegree = Utility.has(options, 'startDegree') ? options.startDegree : 180;
    this._endDegree = Utility.has(options, 'endDegree') ? options.endDegree : 360;
    this._isHandArrow = Utility.has(options, 'isHandArrow') ? options.isHandArrow : false;
    this._isPercentage = Utility.has(options, 'isPercentage') ? options.isPercentage : false;
    this._value = Utility.has(options, 'value') ? options.value : 0;
    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : COLOR.green;
    this._handColor = Utility.has(options, 'handColor') ? options.handColor : COLOR.red;
    this._fontColor = Utility.has(options, 'fontColor') ? options.fontColor : COLOR.balck;
    this._valueFont = Utility.has(options, 'valueFont') ? options.valueFont : '20px Arial';

    this._value = this._isPercentage ? Math.floor(this._value / (this._endValue - this._startValue)) +
      '%' : this._value;
    this._scaleFont = '12px Arial';
    this._startAngle = Utility.getAngleByDegree(this._startDegree);
    this._endAngle = Utility.getAngleByDegree(this._endDegree);
    this._speed = 3;
    this._currDegree = 0;
    this._targetDegree = this.valueToDegree(this._value);
  }

  set value(value) {
    this._targetDegree = this.valueToDegree(value);
    let speed = Math.abs(this._speed);

    this._speed = this._targetDegree > this._currDegree ? speed : -speed;
    this._value = this._isPercentage ? this.valueToPct(value) + '%' : value;
  }

  valueToPct(value) {
    return Math.floor(value / (this._endValue - this._startValue) * 100);
  }

  valueToDegree(value) {
    return (value / (this._endValue - this._startValue) * (this._endDegree - this._startDegree)) + this._startDegree;
  }

  degreeToValue(degree) {
    return Math.floor((degree - this._startDegree) / (this._endDegree - this._startDegree) *
      (this._endValue - this._startValue));
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
    this._ctx.font = this._valueFont;
    this._ctx.fillText(this._value, 100, 100);

    this._ctx.translate(100, 100);

    // Draw scales
    this._ctx.strokeStyle = this._lineColor;
    this._ctx.lineWidth = 1;
    for (let i = this._startDegree; i <= this._endDegree; i = i + 6) {
      let a = Utility.getAngleByDegree(i);

      let r = 66;

      if (i % 30 === 0) {
        r = 61;
        let x = 90 * Math.cos(a);
        let y = 90 * Math.sin(a) + 3;
        let scaleValue = this._isPercentage ? this.valueToPct(this.degreeToValue(i)) : this.degreeToValue(i);

        this._ctx.fillStyle = this._lineColor;
        this._ctx.font = this._scaleFont;
        this._ctx.fillText(scaleValue, x, y);
      }

      let x1 = r * Math.cos(a);
      let y1 = r * Math.sin(a);

      let x2 = 78 * Math.cos(a);
      let y2 = 78 * Math.sin(a);

      this._ctx.beginPath();
      this._ctx.moveTo(x1, y1);
      this._ctx.lineTo(x2, y2);
      this._ctx.closePath();
      this._ctx.stroke();
    }

    // Draw the circle
    this._ctx.beginPath();
    this._ctx.lineWidth = 8;
    this._ctx.arc(0, 0, 75, this._startAngle, this._endAngle);
    this._ctx.stroke();

    // Draw the hand
    this._ctx.rotate(angle);

    this._ctx.beginPath();
    this._ctx.fillStyle = this._handColor;
    if (this._isHandArrow) {
      this._ctx.moveTo(51, -10);
      this._ctx.lineTo(71, 0);
      this._ctx.lineTo(51, 10);
      this._ctx.fill();
    } else {
      this._ctx.fillRect(51, -4, 20, 6);
    }

    this._ctx.closePath();

    this._ctx.restore();
  }
}

