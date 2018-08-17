
import BaseCanvas from './base-canvas';
import { COLOR } from './color';
import Utility from './utility';

// TODO: MinMaxMeter?
export default class VolumeMeter extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 100, 200);

    // Options
    this._min = Utility.has(options, 'min') ? options.min : 0;
    this._max = Utility.has(options, 'max') ? options.max : 100;
    this._fillColor = Utility.has(options, 'fillColor') ? options.fillColor : COLOR.green;
    this._fontColor = Utility.has(options, 'fontColor') ? options.fontColor : COLOR.black;
    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : COLOR.black;
    this._lineWidth = 3;

    this._isGraident = true;

    this._speed = 3;
    this._value = 50;
    this._meterWidth = 50;
    this._meterHeight = 160;

    // Ignore line width totally.
    this._y = this._meterHeight - ((this._value / (this._max - this._min)) * this._meterHeight) + 10;
    this._nextY = this._y;
  }

  set value(n) {
    if (n >= this._min || n <= this._max) {
      this._speed = n < this._value ? Math.abs(this._speed) : -Math.abs(this._speed);
      this._nextY = this._meterHeight - ((n / (this._max - this._min)) * this._meterHeight) + 10;
      this._value = n;
    }
  }

  get value() {
    return this._value;
  }

  drawFrame() {
    this.clearAll();
    this._ctx.save();
    this.scale();

    this._ctx.moveTo(0, 0);
    this._ctx.beginPath();

    if (this._isGraident) {
      const graident = this._ctx.createLinearGradient(100, this._y, 10, 190);

      graident.addColorStop(0, this._fillColor);
      graident.addColorStop(1, 'white');
      this._ctx.fillStyle = graident;
    } else {
      this._ctx.fillStyle = this._fillColor;
    }

    // Draw the filled part.
    this._ctx.fillRect(25, this._y, this._meterWidth, 190 - this._y);

    this._y = Utility.getNextPos(this._y, this._nextY, this._speed);

    // Draw the border.
    this._ctx.rect(25, 10, this._meterWidth, this._meterHeight);
    this._ctx.lineWidth = this._lineWidth;
    this._ctx.strokeStyle = this._lineColor;

    this._ctx.textAlign = 'center';
    // Draw max number.
    this._ctx.fillStyle = 'red';
    this._ctx.fillRect(20, 0, 60, 20);
    this._ctx.fillStyle = 'white';
    this._ctx.fillText(this._max, 50, 15);

    // Draw min number.
    this._ctx.fillStyle = 'green';
    this._ctx.fillRect(20, this._meterHeight + 15, 60, 20);
    this._ctx.fillStyle = 'white';
    this._ctx.fillText(this._min, 50, this._meterHeight + 30);
    // Draw value.
    this._ctx.fillStyle = 'pink';
    this._ctx.fillRect(this._meterWidth + 30, this._y - 10, 20, 20);
    this._ctx.fillRect(0, this._y, 80, 3);
    this._ctx.fillStyle = 'white';
    this._ctx.fillText(this._value, this._meterWidth + 35, this._y);
    this._ctx.stroke();
    this._ctx.restore();
  }

  set fillColor(fillColor) {
    this._fillColor = fillColor;
  }

  get fillColor() {
    return this._fillColor;
  }

  set fontColor(fontColor) {
    this._fontColor = fontColor;
  }

  get fontColor() {
    return this._fontColor;
  }
}
