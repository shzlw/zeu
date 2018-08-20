
import Utility from './utility';
import BaseComponent from './base-component';
import { COLOR } from './color';

/**
 * Allow override width
 * default view height 100
 */
export default class TextBox extends BaseComponent {

  constructor(canvas, options = {}) {
    const viewWidth = options.viewWidth || 200;

    super(canvas, options, 0, 0, viewWidth, 100);

    this._borderWidth = 8;
    this._borderHeight = 30;
    this._space = 10;
    this._waveY = 0;
    this._waveSpeed = 1;
    this._isWaveOn = false;
  }

  setOptions(options = {}) {
    const text = options.text || {};

    this._textValue = text.value || '';
    this._textColor = text.fontColor || COLOR.white;
    this._textBgColor = text.bgColor || COLOR.blue;

    this._bgColor = options.bgColor || 'rgba(0, 0, 0, 0.01)';
    this._borderColor = options.borderColor || COLOR.blue;
    this._waveColor = options.waveColor || COLOR.blue;
  }

  drawObject() {
    this._ctx.textAlign = 'center';

    this._ctx.fillStyle = this._bgColor;
    this._ctx.fillRect(0, 0, this._width, this._height);
    this._ctx.save();
    this.scale();

    // Draw wave line
    if (this._isWaveOn) {
      const waveWidth = 1;

      if (this._waveY >= ((this._viewHeight / 2) + waveWidth)) {
        this._waveY = 0;
        this._isWaveOn = false;
      } else {
        this._ctx.fillStyle = this._waveColor;
        this._ctx.beginPath();
        this._ctx.fillRect(0, this._waveY, this._viewWidth + waveWidth, waveWidth);
        this._ctx.closePath();

        this._ctx.beginPath();
        this._ctx.fillRect(0, this._viewHeight - this._waveY - waveWidth, this._viewWidth, waveWidth);
        this._ctx.closePath();
        this._waveY = Utility.getNextPos(this._waveY, this._viewHeight / 2 + waveWidth, this._waveSpeed);
      }
    }

    // Draw the border.
    // Top left
    this._ctx.fillStyle = this._borderColor;
    this._ctx.fillRect(0, 0, this._borderHeight, this._borderWidth);
    this._ctx.fillRect(0, 0, this._borderWidth, this._borderHeight);
    // Bottom left
    this._ctx.fillRect(0, this._viewHeight - this._borderHeight, this._borderWidth, this._borderHeight);
    this._ctx.fillRect(0, this._viewHeight - this._borderWidth, this._borderHeight, this._borderWidth);
    // Top right
    this._ctx.fillRect(this._viewWidth - this._borderHeight, 0, this._borderHeight, this._borderWidth);
    this._ctx.fillRect(this._viewWidth - this._borderWidth, 0, this._borderWidth, this._borderHeight);

    // Bottom right
    this._ctx.fillRect(this._viewWidth - this._borderHeight, this._viewHeight - this._borderWidth,
      this._borderHeight, this._borderWidth);
    this._ctx.fillRect(this._viewWidth - this._borderWidth, this._viewHeight - this._borderHeight,
      this._borderWidth, this._borderHeight);

    // Draw background rect.
    this._ctx.fillStyle = this._textBgColor;
    this._ctx.fillRect(this._borderWidth + this._space, this._borderWidth + this._space,
      this._viewWidth - 2 * (this._borderWidth + this._space),
      this._viewHeight - 2 * (this._borderWidth + this._space));

    // Draw text.
    this._ctx.fillStyle = this._textColor;
    this._ctx.beginPath();
    this._ctx.textAlign = 'center';
    this._ctx.font = '40px Arial';
    this._ctx.fillText(this._textValue, this._viewWidth / 2, this._viewHeight - 35);
    this._ctx.closePath();

    this._ctx.restore();
  }

  set value(s) {
    this._textValue = s;
    this._isWaveOn = true;
  }

  set textColor(s) {
    this._textColor = s;
  }

  set textBgColor(s) {
    this._textBgColor = s;
  }

  set bgColor(s) {
    this._bgColor = s;
  }

  set borderColor(s) {
    this._borderColor = s;
  }

  set waveColor(s) {
    this._waveColor = s;
  }
}
