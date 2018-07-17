import BaseCanvas from './base-canvas';
import Utility from './utility';
import Color from './color';

export default class DigitalClock extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv);

    // Bar width
    this._bw = Utility.has(options, 'barWidth') ? options.barWidth : 4;

    // Bar height
    this._bh = Utility.has(options, 'barHeight') ? options.barHeight : 20;

    // Space between numbers
    this._space = Utility.has(options, 'space') ? options.space : 10;
    this._numberColor = Utility.has(options, 'numberColor') ? options.numberColor : new Color().fill;
    this._dashColor = Utility.has(options, 'dashColor') ? options.dashColor : new Color().border;
  }

  set numberColor(color) {
    this._numberColor = color;
  }

  get numberColor() {
    this._numberColor;
  }

  set dashColor(color) {
    this.dashColor = color;
  }

  get dashColor() {
    this.dashColor;
  }

  draw() {
    this._timer = setInterval(() => {
      let now = new Date();

      this.clearAll();
      this._ctx.save();

      this._ctx.translate(this._space, this._space);

      // Draw hour.
      this.drawTime(now.getHours());
      this.drawInterpoint();

      // Draw minute.
      this.drawTime(now.getMinutes());
      this.drawInterpoint();

      // Draw second.
      this.drawTime(now.getSeconds());

      this._ctx.restore();
    }, 1000);
  }

  drawInterpoint() {
    this._ctx.beginPath();
    this._ctx.fillStyle = this._numberColor;
    this._ctx.fillRect(0, (this._bh * 2 + this._bw) / 3, this._bw, this._bw);
    this._ctx.fillRect(0, (this._bh * 2 + this._bw) / 3 * 2 + this._bw, this._bw, this._bw);
    this._ctx.translate(this._bw + this._space, 0);
    this._ctx.closePath();
  }

  drawTime(t) {
    if (t < 10) {
      this.drawNumber(0);
      this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);
      this.drawNumber(t);
      this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);
    } else {
      let d = Math.floor(t / 10);
      let r = t % 10;

      this.drawNumber(d);
      this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);
      this.drawNumber(r);
      this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);
    }
  }

  drawEmpty() {
    this._ctx.beginPath();
    this._ctx.fillStyle = this._dashColor;
    this._ctx.moveTo(0, 0);
    this.vTopLeft();
    this.vBottomLeft();
    this.vTopLeft();
    this.vTopRight();
    this.hTop();
    this.hMiddle();
    this.hBottom();
    this._ctx.closePath();
  }

  // Vertical: top left
  vTopLeft() {
    this._ctx.fillRect(0, this._bw, this._bw, this._bh);
  }

  // Vertical: bottom left
  vBottomLeft() {
    this._ctx.fillRect(0, this._bw * 2 + this._bh, this._bw, this._bh);
  }

  // Vertial: top right
  vTopRight() {
    this._ctx.fillRect(this._bw + this._bh, this._bw, this._bw, this._bh);
  }

  // Vertial: bottom right
  vBottomRight() {
    this._ctx.fillRect(this._bw + this._bh, this._bw * 2 + this._bh, this._bw, this._bh);
  }

  // Horizontal: top
  hTop() {
    this._ctx.fillRect(this._bw, 0, this._bh, this._bw);
  }
  // Horizontal: middle
  hMiddle() {
    this._ctx.fillRect(this._bw, this._bw + this._bh, this._bh, this._bw);
  }

  // Horizontal: bottom
  hBottom() {
    this._ctx.fillRect(this._bw, this._bw * 2 + this._bh * 2, this._bh, this._bw);
  }

  drawNumber(n) {
    this.drawEmpty();
    this._ctx.beginPath();
    this._ctx.fillStyle = this._numberColor;

    switch (n) {
      case 0:
        this.hTop();
        this.hBottom();
        this.vTopLeft();
        this.vTopRight();
        this.vBottomLeft();
        this.vBottomRight();
        break;
      case 1:
        this.vTopRight();
        this.vBottomRight();
        break;
      case 2:
        this.hTop();
        this.vTopRight();
        this.hMiddle();
        this.vBottomLeft();
        this.hBottom();
        break;
      case 3:
        this.hTop();
        this.hMiddle();
        this.hBottom();
        this.vTopRight();
        this.vBottomRight();
        break;
      case 4:
        this.hMiddle();
        this.vTopLeft();
        this.vTopRight();
        this.vBottomRight();
        break;
      case 5:
        this.hTop();
        this.hMiddle();
        this.hBottom();
        this.vTopLeft();
        this.vBottomRight();
        break;
      case 6:
        this.hTop();
        this.hMiddle();
        this.hBottom();
        this.vTopLeft();
        this.vBottomLeft();
        this.vBottomRight();
        break;
      case 7:
        this.hTop();
        this.vTopRight();
        this.vBottomRight();
        break;
      case 8:
        this.vTopLeft();
        this.vBottomLeft();
        this.vTopRight();
        this.vBottomRight();
        this.hTop();
        this.hMiddle();
        this.hBottom();
        break;
      case 9:
        this.hTop();
        this.hMiddle();
        this.vTopLeft();
        this.vTopRight();
        this.vBottomRight();
        break;
    }
    this._ctx.closePath();
  }
}
