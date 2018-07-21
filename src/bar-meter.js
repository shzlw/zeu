import BaseCanvas from './base-canvas';
import { COLOR } from './color';
import Utility from './utility';

export default class BarMeter extends BaseCanvas {

  constructor(canvas, options) {
    super(canvas, 100, 200);

    this._min = Utility.has(options, 'min') ? options.min : 0;
    this._max = Utility.has(options, 'max') ? options.max : 100;
    this._value = Utility.has(options, 'value') ? options.value : 50;
    this._dashColor = Utility.has(options, 'dashColor') ? options.dashColor : COLOR.grey;
    this._barColor = Utility.has(options, 'barColor') ? options.barColor : COLOR.green;

    this._barWidth = 80;
    this._barHeight = 15;
    this._space = (100 - this._barWidth) / 2;
    this._speed = 5;
    this._currBar = 0;
    this._numberOfBars = Math.floor(this._value / (this._max - this._min) * 10);
    this._barMax = this._numberOfBars * 100;
  }

  set value(value) {
    this._value = value;
    this._numberOfBars = Math.floor(this._value / (this._max - this._min) * 10);
    this._barMax = this._numberOfBars * 100;
  }

  get valuePct() {
    return Math.floor(this._value / (this._max - this._min) * 100);
  }

  postConstructor() {
    super.postConstructor();
    this._ctx.globalCompositeOperation = 'source-over';
  }

  drawFrame() {
    this.clearAll();
    this._ctx.save();
    this.scale();

    this._ctx.fillStyle = this._dashColor;
    for (let i = 0; i < 10; i++) {
      let y = 5 + i * 20;

      this._ctx.beginPath();
      this._ctx.fillRect(this._space, y, this._barWidth, this._barHeight);
      this._ctx.closePath();
    }

    this._ctx.fillStyle = this._barColor;

    if (this._currBar >= this._barMax) {
      this._currBar = -100;
    } else {
      let bar = this._currBar / 100;

      for (let i = 0; i < bar; i++) {
        let y = 200 - (15 + i * 20);

        this._ctx.beginPath();
        this._ctx.fillRect(this._space, y, this._barWidth, this._barHeight);
        this._ctx.closePath();
      }

      this._currBar += this._speed;
    }

    this._ctx.restore();
  }
}
