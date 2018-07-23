
import BaseCanvas from './base-canvas';
import { COLOR } from './color';
import Utility from './utility';

export default class VolumeMeter extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 100, 200);

    // Options
    this._min = Utility.has(options, 'min') ? options.min : 0;
    this._max = Utility.has(options, 'max') ? options.max : 100;
    this._fillColor = Utility.has(options, 'fillColor') ? options.fillColor : COLOR.green;
    this._fontColor = Utility.has(options, 'fontColor') ? options.fontColor : COLOR.black;
    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : COLOR.black;
    this._lineWidth = Utility.has(options, 'lineWidth') ? options.lineWidth : 5;

    this._speed = 3;
    this._value = 50;
    this._margin = 40;
    this._meterWidth = 50;
    this._meterHeight = 180;

    // Ignore line width totally.
    this._y = this._meterHeight - ((this._value / (this._max - this._min)) * this._meterHeight) + 10;
    this._nextY = this._y;

  }

  postConstructor() {
    super.postConstructor();
    this._ctx.font = '12px Arial';
  }

  set value(n) {
    if (n >= this._min || n <= this._max) {
      if (n < this._value) {
        // Move down
        this._speed = Math.abs(this._speed);
      } else {
        // Move up
        this._speed = -Math.abs(this._speed);
      }
      this._nextY = this._meterHeight - ((n / (this._max - this._min)) * this._meterHeight) + 10;
      this._value = n;
    }
  }

  get value() {
    this._value;
  }

  drawFrame() {
    this.clearAll();
    this._ctx.save();
    this.scale();

    this._ctx.moveTo(0, 0);
    this._ctx.fillStyle = this._fillColor;
    this._ctx.beginPath();
    // Draw the filled part.
    this._ctx.fillRect(25, this._y, this._meterWidth, 190 - this._y);

    if ((this._speed > 0 && this._y <= this._nextY) || (this._speed <= 0 && this._y >= this._nextY)) {
      this._y += this._speed;
    }

    // Draw the border.
    this._ctx.rect(25, 10, this._meterWidth, this._meterHeight);
    this._ctx.lineWidth = this._lineWidth;
    this._ctx.strokeStyle = this._lineColor;

    this._ctx.fillStyle = this._fontColor;
    // Draw max number.
    this._ctx.textAlign = 'right';
    this._ctx.fillText(this._max, 20, 15);
    // Draw min number.
    this._ctx.fillText(this._min, 20, this._meterHeight + 15);
    // Draw value.
    this._ctx.textAlign = 'left';
    this._ctx.fillText(this._value, this._meterWidth + 30, this._y + 15 * 0.5);
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
