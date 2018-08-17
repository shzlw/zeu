
import { COLOR } from './color';
import Utility from './utility';
import BaseComponent from './base-component';

export default class TextMeter extends BaseComponent {

  constructor(canvas, options) {
    super(canvas, options, 0, 0, null, 100);

    this._lineWidth = 5;
    this._arrowWidth = 30;
    this._pctHeight = 30;
    this._actualPctHeight = this._pctHeight - this._lineWidth / 2;
    this._meterWidth = this._width - 2 * this._arrowWidth;
    this._meterHeight = 100 - this._pctHeight - this._lineWidth / 2;
    this._middleBarHeight = this._meterHeight / 2 + this._pctHeight;

    this._barX = (this._percentageValue / 100) * this._meterWidth + this._arrowWidth;
    this._nextBarX = this._barX;

    this._arrow = null;
    this._arrowSpeed = 0.6;
    this._leftArrowX = -5;
    this._rightArrowX = this._width + 5;
  }

  setOptions(options) {
    this._percentageValue = Utility.has(options, 'percentageValue') ? options.percentageValue : 0;
    this._displayValue = Utility.has(options, 'displayValue') ? options.displayValue : '';
    this._speed = Utility.has(options, 'speed') ? options.speed : 5;
    this._fillColor = Utility.has(options, 'fillColor') ? options.fillColor : COLOR.red;
    this._bgColor = Utility.has(options, 'bgColor') ? options.bgColor : COLOR.lightGrey;
    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : COLOR.lightGreen;
    this._arrowColor = Utility.has(options, 'arrowColor') ? options.arrowColor : COLOR.blue;
    this._percentageBgColor = Utility.has(options, 'percentageBgColor') ? options.percentageBgColor : COLOR.black;
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
    this._ctx.fillStyle = this._percentageBgColor;

    this._ctx.fillRect(this._barX - 25, 0, 50, this._actualPctHeight);
    this._ctx.fillStyle = 'white';
    this._ctx.font = '16px Arial';
    this._ctx.fillText(this._percentageValue + '%', this._barX, 20);

    this._ctx.beginPath();
    this._ctx.fillStyle = this._percentageBgColor;
    this._ctx.moveTo(this._barX - 8, this._actualPctHeight - this._lineWidth / 2);
    this._ctx.lineTo(this._barX, this._pctHeight + this._lineWidth / 2);
    this._ctx.lineTo(this._barX + 8, this._actualPctHeight - this._lineWidth / 2);
    this._ctx.fill();
    this._ctx.closePath();

    // Draw arrow.
    if (this._arrow === null) {
      this.drawLeftArrow();
      this.drawRightArrow();
    } else if (this._arrow === 'left') {
      this.drawLeftArrow();
    } else {
      // right
      this.drawRightArrow();
    }

    this._ctx.restore();

    // Calculate next position barX
    this._barX = Utility.getNextPos(this._barX, this._nextBarX, this._speed);
  }

  drawLeftArrow() {
    if (this._leftArrowX <= -3) {
      this._leftArrowX = this._arrowWidth - 3;
    } else {
      this._leftArrowX = Utility.getNextPos(this._leftArrowX, -3, -this._arrowSpeed);
    }

    this._ctx.beginPath();
    this._ctx.fillStyle = this._arrowColor;
    this._ctx.moveTo(this._leftArrowX, this._actualPctHeight + 10);
    this._ctx.lineTo(this._leftArrowX - 20, this._middleBarHeight);
    this._ctx.lineTo(this._leftArrowX, 90);
    this._ctx.fill();
    this._ctx.closePath();
  }

  drawRightArrow() {
    if (this._rightArrowX >= (this._width + 3)) {
      this._rightArrowX = this._arrowWidth + 3 + this._meterWidth;
    } else {
      this._rightArrowX = Utility.getNextPos(this._rightArrowX, this._width + 3, this._arrowSpeed);
    }
    this._ctx.beginPath();
    this._ctx.fillStyle = this._arrowColor;
    this._ctx.moveTo(this._rightArrowX, this._actualPctHeight + 10);
    this._ctx.lineTo(this._rightArrowX + 20, this._middleBarHeight);
    this._ctx.lineTo(this._rightArrowX, 90);
    this._ctx.fill();
    this._ctx.closePath();
  }

  set percentageValue(n) {
    this._percentageValue = n;
  }

  set displayValue(s) {
    this._displayValue = s;
  }

  set speed(n) {
    this._speed = n;
  }

  set fillColor(s) {
    this._fillColor = s;
  }

  set bgColor(s) {
    this._bgColor = s;
  }

  set lineColor(s) {
    this._lineColor = s;
  }

  set arrowColor(s) {
    this._arrowColor = s;
  }

  set percentageBgColor(s) {
    this._percentageBgColor = s;
  }
}
