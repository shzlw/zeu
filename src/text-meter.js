
import { COLOR } from './color';
import Utility from './utility';
import BaseComponent from './base-component';

export default class TextMeter extends BaseComponent {

  constructor(canvas, options) {
    super(canvas, options, 0, 0, null, 100);

    this._displayValue = '';
    this._speed = 3;
    this._lineWidth = 5;
    this._arrowWidth = 40;
    this._pctHeight = 30;
    this._meterWidth = this._width - 2 * this._arrowWidth;
    this._meterHeight = 100 - this._pctHeight - this._lineWidth / 2;
    this._arrow = null;
    this._barX = (this._percentageValue / 100) * this._meterWidth + this._arrowWidth;
    this._nextBarX = this._barX;
  }

  setOptions(options) {
    this._percentageValue = Utility.has(options, 'percentageValue') ? options.percentageValue : 50;
    this._displayValue = Utility.has(options, 'displayValue') ? options.displayValue : '';
    this._fillColor = Utility.has(options, 'fillColor') ? options.fillColor : COLOR.red;
    this._bgColor = Utility.has(options, 'bgColor') ? options.bgColor : COLOR.grey;
    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : COLOR.black;
    this._arrowColor = Utility.has(options, 'arrowColor') ? options.arrowColor : COLOR.black;
  }

  setPercentageValue(value, displayValue) {
    if (value >= 0 || value <= 100) {
      if (value < this._percentageValue) {
        this._speed = -Math.abs(this._speed);
        this._arrow = 'left';
      } else if (value > this._percentageValue) {
        this._speed = Math.abs(this._speed);
        this._arrow = 'right';
      } else {
        this._arrow = null;
      }
      this._percentageValue = Math.floor(value);
      this._displayValue = displayValue;
      this._nextBarX = (this._percentageValue / 100) * this._meterWidth + this._arrowWidth;
    }
  }

  drawFrame() {
    this._ctx.textAlign = 'center';

    this.clear();
    this._ctx.save();
    this.scale();
    this._ctx.globalCompositeOperation = 'destination-over';

    // Draw left half text
    this._ctx.beginPath();
    this._ctx.rect(this._arrowWidth, this._pctHeight, this._barX - this._arrowWidth, this._meterHeight);
    this._ctx.clip();

    this._ctx.fillStyle = this._bgColor;
    this._ctx.font = '50px Arial';
    this._ctx.fillText(this._displayValue, this._width / 2, 80);

    this._ctx.fillStyle = this._fillColor;
    this._ctx.fillRect(this._arrowWidth, this._pctHeight, this._barX - this._arrowWidth, this._meterHeight);

    this._ctx.restore();
    this._ctx.save();
    this.scale();
    this._ctx.globalCompositeOperation = 'destination-over';

    // Draw right half text
    this._ctx.beginPath();
    this._ctx.rect(this._barX, this._pctHeight, this._width - this._barX - this._arrowWidth, this._meterHeight);
    this._ctx.clip();

    this._ctx.fillStyle = this._fillColor;
    this._ctx.font = '50px Arial';
    this._ctx.fillText(this._displayValue, this._width / 2, 80);

    this._ctx.fillStyle = this._bgColor;
    this._ctx.fillRect(this._barX, this._pctHeight, this._width - this._barX - this._arrowWidth, this._meterHeight);

    this._ctx.restore();
    this._ctx.save();
    this.scale();
    this._ctx.globalCompositeOperation = 'source-over';

    // Draw the border.
    this._ctx.lineWidth = this._lineWidth;
    this._ctx.strokeStyle = this._lineColor;
    this._ctx.beginPath();
    this._ctx.rect(this._arrowWidth, this._pctHeight, this._meterWidth, this._meterHeight);
    this._ctx.stroke();
    this._ctx.closePath();

    // Draw percentage value
    this._ctx.fillStyle = 'green';
    const actualPctHeight = this._pctHeight - this._lineWidth / 2;

    this._ctx.fillRect(this._barX - 25, 0, 50, actualPctHeight);
    this._ctx.fillStyle = 'white';
    this._ctx.font = '16px Arial';
    this._ctx.fillText(this._percentageValue + '%', this._barX, 20);

    this._ctx.beginPath();
    this._ctx.fillStyle = 'green';
    this._ctx.moveTo(this._barX - 8, actualPctHeight);
    this._ctx.lineTo(this._barX, this._pctHeight + this._lineWidth / 2);
    this._ctx.lineTo(this._barX + 8, actualPctHeight);
    this._ctx.fill();
    this._ctx.closePath();

    // Draw arrow.
    if (this._arrow !== null) {
      const middleHeight = (100 - this._pctHeight) / 2 + this._pctHeight;

      if (this._arrow === 'left') {
        this._ctx.beginPath();
        this._ctx.fillStyle = 'green';
        this._ctx.moveTo(this._arrowWidth - 10, actualPctHeight + 10);
        this._ctx.lineTo(0, middleHeight);
        this._ctx.lineTo(this._arrowWidth - 10, 90);
        this._ctx.fill();
        this._ctx.closePath();
      } else {
        // right
        this._ctx.beginPath();
        this._ctx.fillStyle = 'green';
        this._ctx.moveTo(this._arrowWidth + 10 + this._meterWidth, actualPctHeight + 10);
        this._ctx.lineTo(this._width, middleHeight);
        this._ctx.lineTo(this._arrowWidth + 10 + this._meterWidth, 90);
        this._ctx.fill();
        this._ctx.closePath();
      }
    }

    this._ctx.restore();

    // Calculate next position barX
    this._barX = Utility.getNextPos(this._barX, this._nextBarX, this._speed);
  }

  set fillColor(fillColor) {
    this._fillColor = fillColor;
  }

  set fontColor(fontColor) {
    this._bgColor = fontColor;
  }
}
