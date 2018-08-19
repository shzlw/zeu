import { COLOR } from './color';
import Utility from './utility';
import BaseComponent from './base-component';

export default class BarMeter extends BaseComponent {

  constructor(canvas, options = {}) {
    const viewWidth = options.viewWidth || 100;

    super(canvas, options, 0, 0, viewWidth, 200);

    this._space = 20;
    this._barWidth = this._viewWidth - 2 * this._space;
    this._barHeight = 15;
    this._currBar = 0;
    this._numberOfBars = Math.floor((this._value - this._min) / (this._max - this._min) * 10);
    this._barMax = this._numberOfBars * 100;
  }

  setOptions(options = {}) {
    this._min = options.min || 0;
    this._max = options.max || 100;
    this._value = options.value || 0;
    this._dashColor = options.dashColor || COLOR.grey;
    this._barColor = options.barColor || COLOR.green;
    this._speed = options.speed || 5;
    this._isGradient = options.gradient || false;
  }

  drawObject() {
    this.clear();
    this._ctx.save();
    this.scale();

    // Draw the dash.
    this._ctx.fillStyle = this._dashColor;
    for (let i = 0; i < 10; i++) {
      let y = 5 + i * 20;

      this._ctx.beginPath();
      this._ctx.fillRect(this._space, y, this._barWidth, this._barHeight);
      this._ctx.closePath();
    }

    // Draw bars.
    if (this._currBar >= this._barMax) {
      this._currBar = -100;
    } else {
      let bar = this._currBar / 100;

      let colors = [];

      if (this._isGradient) {
        colors = Utility.generateGradientColor(COLOR.white, this._barColor, bar);
      } else {
        this._ctx.fillStyle = this._barColor;
      }

      for (let i = 0; i < bar; i++) {
        let y = this._viewHeight - (15 + i * 20);

        if (this._isGradient) {
          this._ctx.fillStyle = '#' + colors[i];
        }

        this._ctx.beginPath();
        this._ctx.fillRect(this._space, y, this._barWidth, this._barHeight);
        this._ctx.closePath();
      }

      this._currBar += this._speed;
    }

    this._ctx.restore();
  }

  set value(value) {
    this._value = value;
    this._numberOfBars = Math.floor((this._value - this._min) / (this._max - this._min) * 10);
    this._barMax = this._numberOfBars * 100;
  }

  get valuePct() {
    return Math.floor((this._value - this._min) / (this._max - this._min) * 100);
  }

  set dashColor(dashColor) {
    this._dashColor = dashColor;
  }

  set barColor(barColor) {
    this._barColor = barColor;
  }
}

