import BaseCanvas from './base-canvas';
import Color from './color';
import Utility from './utility';

export default class Fan extends BaseCanvas {

  constructor(canvas, options) {
    super(canvas);

    this._angle = 0;
    this._fanColor = Utility.has(options, 'fanColor') ? options.fanColor : new Color().fill;
    this._centerColor = Utility.has(options, 'centerColor') ? options.centerColor : '#FFFFFF';
    this._speed = Utility.has(options, 'speed') ? options.speed : 1;

    this._ctx.globalCompositeOperation = 'destination-over';
  }

  start() {
    super.startAnimation();
  }

  stop() {
    super.stopAnimation();
  }

  set speed(speed) {
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }

  set centerColor(color) {
    this._centerColor = color;
  }

  get centerColor() {
    this._centerColor;
  }

  set fanColor(color) {
    this._fanColor = color;
  }

  get fanColor() {
    this._fanColor;
  }

  drawFrame() {
    this.clearAll();
    this._ctx.save();
    this.scale();

    this._angle = (this._angle + this._speed) % 360;
    this._ctx.translate(100, 100);
    this._ctx.rotate(this._angle * Math.PI / 180);

    this._ctx.strokeStyle = this._centerColor;
    this._ctx.beginPath();
    this._ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    this._ctx.stroke();
    this._ctx.fillStyle = this._centerColor;
    this._ctx.fill();
    this._ctx.closePath();

    this._ctx.beginPath();
    this._ctx.arc(0, 0, 30, 0, 2 * Math.PI);
    this._ctx.stroke();
    this._ctx.fillStyle = this._fanColor;
    this._ctx.fill();
    this._ctx.closePath();

    this._ctx.beginPath();
    this._ctx.arc(0, 0, 35, 0, 2 * Math.PI);
    this._ctx.fillStyle = this._centerColor;
    this._ctx.fill();
    this._ctx.stroke();
    this._ctx.closePath();

    this._ctx.beginPath();
    this._ctx.moveTo(0, 0);

    // Up
    this._ctx.quadraticCurveTo(-60, -80, 0, -90);
    this._ctx.quadraticCurveTo(80, -100, 0, 0);

    // Right
    this._ctx.quadraticCurveTo(80, -60, 90, 0);
    this._ctx.quadraticCurveTo(100, 80, 0, 0);

    // Down
    this._ctx.quadraticCurveTo(60, 80, 0, 90);
    this._ctx.quadraticCurveTo(-80, 100, 0, 0);

    // Left
    this._ctx.quadraticCurveTo(-80, 60, -90, 0);
    this._ctx.quadraticCurveTo(-100, -80, 0, 0);

    this._ctx.fillStyle = this._fanColor;
    this._ctx.fill();
    this._ctx.stroke();
    this._ctx.closePath();

    this._ctx.restore();
  }
}
