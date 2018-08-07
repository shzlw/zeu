
import BaseCanvas from './base-canvas';
import { COLOR } from './color';
import Utility from './utility';

export default class TextMeter extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 200, 100);

    // Options
    this._min = Utility.has(options, 'min') ? options.min : 0;
    this._max = Utility.has(options, 'max') ? options.max : 100;
    this._fillColor = Utility.has(options, 'fillColor') ? options.fillColor : COLOR.red;
    this._fontColor = Utility.has(options, 'fontColor') ? options.fontColor : COLOR.grey;
    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : COLOR.black;

    this._lineWidth = 5;
    this._speed = 3;
    this._value = 50;
    this._space = 10;
    this._meterWidth = 200 - this._space * 2;
    this._meterHeight = 100 - this._space * 2;

    this._x = this._meterWidth - ((this._value / (this._max - this._min)) * this._meterWidth) + this._space;
    this._nextX = this._x;
  }

  set value(n) {
    if (n >= this._min || n <= this._max) {
      this._speed = n < this._value ? Math.abs(this._speed) : -Math.abs(this._speed);
      this._nextX = this._meterWidth - ((n / (this._max - this._min)) * this._meterWidth) + this._space;
      this._value = n;
    }
  }

  get value() {
    return this._value;
  }

  get valuePct() {
    return Math.floor(this._value / (this._max - this._min) * 100);
  }

  drawFrame() {
    this._ctx.globalCompositeOperation = 'destination-over';
    this._ctx.font = '40px Arial';
    this._ctx.textAlign = 'center';

    this.clearAll();
    this._ctx.save();
    this.scale();

    // Draw the border.
    this._ctx.beginPath();
    this._ctx.rect(this._space, this._space, this._meterWidth, this._meterHeight);
    this._ctx.lineWidth = this._lineWidth;
    this._ctx.strokeStyle = this._lineColor;

    this._ctx.fillStyle = this._fontColor;
    this._ctx.stroke();
    this._ctx.closePath();

    // Draw the filled part.
    /*
    this._ctx.fillStyle = this._fillColor;
    this._ctx.fillRect(10, 10, 190 - this._x, this._meterHeight);
    */

    const pct = Math.floor(this._value / (this._max - this._min) * 100) + '%';

    this._ctx.save();
    // Draw left half text
    this._ctx.beginPath();
    this._ctx.rect(this._space, this._space, 190 - this._x, this._meterHeight);
    this._ctx.clip();

    this._ctx.fillStyle = this._fontColor;
    this._ctx.fillText(pct, 100, 63);

    this._ctx.fillStyle = this._fillColor;
    this._ctx.fillRect(this._space, this._space, 190 - this._x, this._meterHeight);

    this._ctx.restore();
    this._ctx.save();

    // Draw right half text
    this._ctx.beginPath();
    this._ctx.rect(190 - this._x, this._space, this._x, this._meterHeight);
    this._ctx.clip();

    this._ctx.fillStyle = this._fillColor;
    this._ctx.fillText(pct, 100, 63);

    this._ctx.fillStyle = this._fontColor;
    this._ctx.fillRect(190 - this._x, this._space, this._x, this._meterHeight);

    // Calculate x.
    this._x = Utility.getNextPos(this._x, this._nextX, this._speed);

    this._ctx.restore();
  }

  set fillColor(fillColor) {
    this._fillColor = fillColor;
  }

  set fontColor(fontColor) {
    this._fontColor = fontColor;
  }
}
