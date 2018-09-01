
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

    super(canvas, options, viewWidth, 100);

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
    this.textColor = text.fontColor || COLOR.white;
    this.textBgColor = text.bgColor || COLOR.blue;

    this.bgColor = options.bgColor || 'rgba(0, 0, 0, 0.01)';
    this.borderColor = options.borderColor || COLOR.blue;
    this.waveColor = options.waveColor || COLOR.blue;
  }

  drawObject() {
    this._ctx.textAlign = 'center';

    this._ctx.fillStyle = this.bgColor;
    this._ctx.fillRect(0, 0, this._width, this._height);
    this.save();

    // Draw wave line
    if (this._isWaveOn) {
      const waveWidth = 1;

      if (this._waveY >= ((this._viewHeight / 2) + waveWidth)) {
        this._waveY = 0;
        this._isWaveOn = false;
      } else {
        this._ctx.fillStyle = this.waveColor;
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
    this._ctx.fillStyle = this.borderColor;
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
    this._ctx.fillStyle = this.textBgColor;
    this._ctx.fillRect(this._borderWidth + this._space, this._borderWidth + this._space,
      this._viewWidth - 2 * (this._borderWidth + this._space),
      this._viewHeight - 2 * (this._borderWidth + this._space));

    // Draw text.
    this._shape.fillText(this._textValue, this._viewWidth / 2, this._viewHeight - 35,
      '40px Arial', 'center', this.textColor);

    this._ctx.restore();
  }

  set value(s) {
    this._textValue = s;
    this._isWaveOn = true;
  }
}
