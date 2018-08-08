
import BaseCanvas from './base-canvas';
import { COLOR } from './color';
import Utility from './utility';

export default class TextMeter extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, baseDiv.clientWidth, 100);

    // Options
    this._percentageValue = Utility.has(options, 'percentageValue') ? options.percentageValue : 50;
    this._fillColor = Utility.has(options, 'fillColor') ? options.fillColor : COLOR.red;
    this._bgColor = Utility.has(options, 'bgColor') ? options.bgColor : COLOR.grey;
    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : COLOR.black;
    this._lineWidth = Utility.has(options, 'lineWidth') ? options.lineWidth : 10;

    this._speed = 3;
    this._space = 0;
    this._meterWidth = this._scaledWidth - this._space * 2;
    this._meterHeight = 100 - this._space * 2;

    this._x = this._meterWidth - ((this._percentageValue / 100) * this._meterWidth) + this._space;
    this._nextX = this._x;
    this._barX = this._scaledWidth - this._space - this._x;
  }

  set percentageValue(n) {
    if (n >= 0 || n <= 100) {
      this._speed = n < this._percentageValue ? Math.abs(this._speed) : -Math.abs(this._speed);
      this._nextX = this._meterWidth - ((n / 100) * this._meterWidth) + this._space;
      this._percentageValue = n;
    }
  }

  get percentageValue() {
    return this._percentageValue;
  }

  drawFrame() {
    this._ctx.globalCompositeOperation = 'destination-over';
    this._ctx.font = '50px Arial';
    this._ctx.textAlign = 'center';

    this.clearAll();
    this._ctx.save();
    this.scale();

    // Draw the border.
    this._ctx.beginPath();
    this._ctx.rect(this._space, this._space, this._meterWidth, this._meterHeight);
    this._ctx.lineWidth = this._lineWidth;
    this._ctx.strokeStyle = this._lineColor;

    this._ctx.stroke();
    this._ctx.closePath();

    const pct = this._percentageValue + '%';

    this._ctx.restore();
    this._ctx.save();
    this.scale();
    // Draw left half text
    this._ctx.beginPath();
    this._ctx.rect(this._space, this._space, this._barX, this._meterHeight);
    this._ctx.clip();

    this._ctx.fillStyle = this._bgColor;
    this._ctx.fillText(pct, this._scaledWidth / 2, 67);

    this._ctx.fillStyle = this._fillColor;
    this._ctx.fillRect(this._space, this._space, this._barX, this._meterHeight);

    this._ctx.restore();
    this._ctx.save();
    this.scale();

    // Draw right half text
    this._ctx.beginPath();
    this._ctx.rect(this._barX, this._space, this._x, this._meterHeight);
    this._ctx.clip();

    this._ctx.fillStyle = this._fillColor;
    this._ctx.fillText(pct, this._scaledWidth / 2, 67);

    this._ctx.fillStyle = this._bgColor;
    this._ctx.fillRect(this._barX, this._space, this._x, this._meterHeight);

    this._ctx.restore();

    // Calculate x and barX.
    this._x = Utility.getNextPos(this._x, this._nextX, this._speed);
    this._barX = this._scaledWidth - this._space - this._x;
  }

  set fillColor(fillColor) {
    this._fillColor = fillColor;
  }

  set fontColor(fontColor) {
    this._bgColor = fontColor;
  }
}
