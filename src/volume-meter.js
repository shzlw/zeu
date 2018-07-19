
import BaseCanvas from './base-canvas';

export default class VolumeMeter extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 100, 200);

    this._min = 0;
    this._max = 100;
    this._value = 50;
    this._speed = 3;

    this._lineWidth = 5;

    this._margin = 40;
    this._meterWidth = 50;
    this._meterHeight = 180;
    // Ignore line width totally.
    this._y = this._meterHeight - ((this._value / (this._max - this._min)) * this._meterHeight) + 10;
    this._nextY = this._y;
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
    } else {
      // TODO: out of range!
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
    this._ctx.strokeStyle = this._fontColor;

    this._ctx.fillStyle = this._fontColor;
    this._ctx.font = '12px Arial';
    // Draw max number.
    this._ctx.fillText(this._max, 0, 15);
    // Draw min number.
    this._ctx.fillText(this._min, 0, this._meterHeight + 15);
    // Draw value.
    this._ctx.fillText(this._value, this._meterWidth + 30, this._y + 15 * 0.5);
    this._ctx.stroke();

    this._ctx.restore();
  }
}
