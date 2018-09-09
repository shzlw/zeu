
import BaseComponent from './base-component';
import { COLOR } from './color';
import Utility from './utility';

export default class VolumeMeter extends BaseComponent {

  constructor(canvas, options = {}) {
    const viewHeight = options.viewHeight || 200;

    super(canvas, options, 100, viewHeight);

    this._lineWidth = 3;
    this._numberHeight = 20;
    this._minMax = 'min';
    this._meterWidth = this._viewWidth / 2;
    this._meterHeight = this._viewHeight - 2 * this._numberHeight;
    this._numberStart = (this._viewWidth - this._meterWidth - this._lineWidth) / 2;
    // Used only if the value is out of range.
    this._actualValue = this._value;

    this._barY = this._viewHeight - (((this._value - this._minValue) /
      (this._maxValue - this._minValue)) * this._meterHeight) - this._numberHeight;
    this._nextBarY = this._barY;

    this._lastBlink = 0;
    this.drawMarker = this.drawMarker.bind(this);
  }

  /**
   * @param {*} options
   */
  setOptions(options = {}) {
    const min = options.min || {};
    const max = options.max || {};
    const bar = options.bar || {};
    const marker = options.marker || {};

    this._minFontColor = min.fontColor || COLOR.white;
    this._minValue = min.value || 0;
    this._minBgColor = min.bgColor || COLOR.red;

    this._maxFontColor = max.fontColor || COLOR.white;
    this._maxValue = max.value || 100;
    this._maxBgColor = max.bgColor || COLOR.blue;

    this._barBorderColor = bar.borderColor || COLOR.black;
    this.barFillColor = bar.fillColor || COLOR.green;
    this._isGraident = bar.graident || false;
    this._speed = bar.speed || 5;

    this.markerBgColor = marker.bgColor || COLOR.yellow;
    this._markerFontColor = marker.fontColor || COLOR.white;

    this._value = options.value || 0;
  }

  drawObject() {
    // Handle graident fill color.
    let barFillStyle = this.barFillColor;

    if (this._isGraident) {
      const graident = this._ctx.createLinearGradient(this._viewWidth / 2, this._barY,
        this._viewWidth / 2, this._meterHeight + this._numberHeight);

      graident.addColorStop(0, this.barFillColor);
      graident.addColorStop(1, 'white');
      barFillStyle = graident;
    }

    // Draw the filled part.
    this._shape.fillRect((this._viewWidth - this._meterWidth) / 2, this._barY, this._meterWidth,
      this._viewHeight - this._barY - this._numberHeight, barFillStyle);

    // Draw the border.
    this._ctx.beginPath();
    this._ctx.lineWidth = this._lineWidth;
    this._ctx.strokeStyle = this._barBorderColor;
    this._ctx.rect((this._viewWidth - this._meterWidth) / 2, this._numberHeight, this._meterWidth, this._meterHeight);
    this._ctx.stroke();
    this._ctx.closePath();

    // Draw value.
    if (this._minMax === 'min' || this._minMax === 'max') {
      this.drawMin();
      this.drawMax();
      this._lastBlink = this.blink(this.drawMarker, this._lastBlink, 500);
    } else {
      this.drawMin();
      this.drawMax();
      this.drawMarker();
    }
    // Calculate the Y value.
    this._barY = Utility.getNextPos(this._barY, this._nextBarY, this._speed);
  }

  blink(blinkFunc, lastBlink, duration) {
    const now = Date.now();

    if (now - lastBlink < duration) {
      blinkFunc.call();
      return lastBlink;
    } else if (now - lastBlink < (duration * 2)) {
      return lastBlink;
    }
    return now;
  }

  drawMin() {
    this._shape.fillRect(this._numberStart, this._viewHeight - this._numberHeight - this._lineWidth / 2,
      this._meterWidth + this._lineWidth, this._numberHeight + this._lineWidth / 2, this._minBgColor);
    this._shape.fillText(this._minValue, this._meterWidth, this._meterHeight + this._numberHeight + 15,
      '15px Arial', 'center', this._minFontColor);
  }

  drawMax() {
    this._shape.fillRect(this._numberStart, 0, this._meterWidth + this._lineWidth,
      this._numberHeight + this._lineWidth / 2, this._maxBgColor);
    this._shape.fillText(this._maxValue, this._meterWidth, this._numberHeight - 4,
      '15px Arial', 'center', this._maxFontColor);
  }

  drawMarker() {
    const text = (this._minMax === 'max' || this._minMax === 'min') ? this._actualValue : this._value;

    this._shape.fillRect(this._numberStart + this._meterWidth + this._lineWidth,
      this._barY - 8, (this._viewWidth - (this._numberStart + this._meterWidth + this._lineWidth)), 16,
      this.markerBgColor);

    this._shape.fillRect(0, this._barY - this._lineWidth / 2,
      this._numberStart + this._meterWidth + this._lineWidth, this._lineWidth, this.markerBgColor);

    this._shape.fillText(text, (this._viewWidth - this._meterWidth) / 4 * 3 + this._meterWidth, this._barY + 4,
      '10px Arial', 'center', this._markerFontColor);
  }

  set value(value) {
    let n = value;

    this._actualValue = n;

    if (n >= this._maxValue) {
      this._minMax = 'max';
      n = this._maxValue;
    } else if (n <= this._minValue) {
      this._minMax = 'min';
      n = this._minValue;
    } else {
      this._minMax = 'normal';
    }

    this._speed = n < this._value ? Math.abs(this._speed) : -Math.abs(this._speed);
    this._nextBarY = this._viewHeight - (((n - this._minValue) /
      (this._maxValue - this._minValue)) * this._meterHeight) - this._numberHeight;
    this._value = n;
  }
}
