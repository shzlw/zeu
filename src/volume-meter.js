
import BaseCanvas from './base-canvas';
// import Utility from './utility';
// import Color from './color';

export default class VolumeMeter extends BaseCanvas {

  constructor(canvas, options) {
    super(canvas);

    this._min = 0;
    this._max = 100;
    this._value = 50;
    this._speed = 1;

    this._margin = 10;
    this._meterWidth = 150;
    this._meterHeight = 180;
    this._y = this._meterHeight - ((this._value / (this._max - this._min)) * this._meterHeight);
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
      this._nextY = this._meterHeight - ((n / (this._max - this._min)) * this._meterHeight);
      // console.log('pre: ' + this._value + ' next: ' + n);
      this._value = n;
      // console.log('pre Y: ' + this._y + ' next Y: ' + this._nextY + ' Speed: ' + this._speed);
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
    this._ctx.fillStyle = 'green';
    this._ctx.fillRect(10, this._y, this._meterWidth, 190 - this._y);

    if ((this._speed > 0 && this._y <= this._nextY) || (this._speed <= 0 && this._y >= this._nextY)) {
      this._y += this._speed;
    }

    this._ctx.rect(10, 10, this._meterWidth, this._meterHeight);
    this._ctx.lineWidth = 5;
    this._ctx.stroke();

    this._ctx.restore();
  }
}
