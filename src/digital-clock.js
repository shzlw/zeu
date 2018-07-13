import BaseCanvas from './base-canvas';
import Color from './color';

export default class DigitalClock extends BaseCanvas {

  constructor(canvas) {
    super(canvas);
    this._bw = 4; // Bar width
    this._bh = 20; // Bar height
    this._space = 10;
  }

  draw() {
    this._timer = setInterval(() => {
      let now = new Date();

      this.clearAll();
      this._ctx.save();

      // Draw hour.
      this.drawTime(now.getHours());

      // Draw minute.
      this.drawTime(now.getMinutes());

      // Draw second.
      this.drawTime(now.getSeconds());

      this._ctx.restore();
    }, 1000);
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
    this._ctx.fillStyle = new Color().border;
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
    this._ctx.fillStyle = new Color().fill;

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
        this.vTopLeft();
        this.vTopRight();
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
