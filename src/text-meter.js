
import { COLOR } from './color';
import Utility from './utility';
import BaseComponent from './base-component';

/**
 * Allow override width
 * default view height 100
 */
export default class TextMeter extends BaseComponent {

  constructor(canvas, options = {}) {
    const viewWidth = options.viewWidth || 200;

    super(canvas, options, viewWidth, 100);

    this._lineWidth = 5;
    this._arrowWidth = 30;
    this._pctHeight = 30;
    this._actualPctHeight = this._pctHeight - this._lineWidth / 2;
    this._meterWidth = this._viewWidth - 2 * this._arrowWidth;
    this._meterHeight = 100 - this._pctHeight - this._lineWidth / 2;
    this._middleBarHeight = this._meterHeight / 2 + this._pctHeight;

    this._barX = (this._percentageValue / 100) * this._meterWidth + this._arrowWidth;
    this._nextBarX = this._barX;

    this._arrow = null;
    this._arrowSpeed = 0.6;
    this._leftArrowX = -5;
    this._rightArrowX = this._viewWidth + 5;
  }

  setOptions(options = {}) {
    const bar = options.bar || {};
    const marker = options.marker || {};

    this.markerBgColor = marker.bgColor || COLOR.black;
    this.markerFontColor = marker.fontColor || COLOR.white;

    this.speed = bar.speed || 5;
    this.fillColor = bar.fillColor || COLOR.red;
    this.bgColor = bar.bgColor || COLOR.lightWhite;
    this._lineColor = bar.borderColor || COLOR.lightGreen;

    this._percentageValue = options.value || 0;
    this.displayValue = options.displayValue || '';
    this.arrowColor = options.arrowColor || COLOR.blue;
  }

  drawObject() {
    this._ctx.textAlign = 'center';

    this.save();
    this._ctx.globalCompositeOperation = 'destination-over';

    // Draw left half text
    this._ctx.beginPath();
    this._ctx.rect(this._arrowWidth, this._pctHeight, this._barX - this._arrowWidth, this._meterHeight);
    this._ctx.clip();

    this._ctx.fillStyle = this.bgColor;
    this._ctx.font = '30px Arial';
    this._ctx.fillText(this.displayValue, this._viewWidth / 2, 75);

    this._ctx.fillStyle = this.fillColor;
    this._ctx.fillRect(this._arrowWidth, this._pctHeight, this._barX - this._arrowWidth, this._meterHeight);

    this._ctx.restore();
    this.save();
    this._ctx.globalCompositeOperation = 'destination-over';

    // Draw right half text
    this._ctx.beginPath();
    this._ctx.rect(this._barX, this._pctHeight, this._viewWidth - this._barX - this._arrowWidth, this._meterHeight);
    this._ctx.clip();

    this._ctx.fillStyle = this.fillColor;
    this._ctx.font = '30px Arial';
    this._ctx.fillText(this.displayValue, this._viewWidth / 2, 75);

    this._shape.fillRect(this._barX, this._pctHeight, this._viewWidth - this._barX - this._arrowWidth,
      this._meterHeight, this.bgColor);

    this._ctx.restore();
    this.save();
    this._ctx.globalCompositeOperation = 'source-over';

    // Draw the border.
    this._ctx.lineWidth = this._lineWidth;
    this._ctx.strokeStyle = this._lineColor;
    this._ctx.beginPath();
    this._ctx.rect(this._arrowWidth, this._pctHeight, this._meterWidth, this._meterHeight);
    this._ctx.stroke();
    this._ctx.closePath();

    // Draw percentage value
    this._ctx.fillStyle = this.markerBgColor;

    this._ctx.fillRect(this._barX - 25, 0, 50, this._actualPctHeight);
    this._ctx.fillStyle = this.markerFontColor;
    this._ctx.font = '16px Arial';
    this._ctx.fillText(this._percentageValue + '%', this._barX, 20);

    this._ctx.beginPath();
    this._ctx.fillStyle = this.markerBgColor;
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
    this._barX = Utility.getNextPos(this._barX, this._nextBarX, this.speed);
  }

  drawLeftArrow() {
    if (this._leftArrowX <= 0) {
      this._leftArrowX = this._arrowWidth - 3;
    } else {
      this._leftArrowX = Utility.getNextPos(this._leftArrowX, 0, -this._arrowSpeed);
    }
    this._shape.fillTriangle(this._leftArrowX, this._actualPctHeight + 10, this._leftArrowX - 20, this._middleBarHeight,
      this._leftArrowX, 90, this.arrowColor);
  }

  drawRightArrow() {
    if (this._rightArrowX >= this._viewWidth) {
      this._rightArrowX = this._arrowWidth + 3 + this._meterWidth;
    } else {
      this._rightArrowX = Utility.getNextPos(this._rightArrowX, this._viewWidth, this._arrowSpeed);
    }
    this._shape.fillTriangle(this._rightArrowX, this._actualPctHeight + 10, this._rightArrowX + 20,
      this._middleBarHeight, this._rightArrowX, 90, this.arrowColor);
  }

  set value(value) {
    if (value >= 0 || value <= 100) {
      if (value < this._percentageValue) {
        this.speed = -Math.abs(this.speed);
        this._arrow = 'left';
      } else if (value > this._percentageValue) {
        this.speed = Math.abs(this.speed);
        this._arrow = 'right';
      } else {
        this._arrow = null;
      }
      this._percentageValue = Math.floor(value);
      this._nextBarX = (this._percentageValue / 100) * this._meterWidth + this._arrowWidth;
    }
  }
}
