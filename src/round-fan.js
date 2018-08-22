import { COLOR } from './color';
import Utility from './utility';
import BaseComponent from './base-component';

export default class RoundFan extends BaseComponent {

  constructor(canvas, options) {
    super(canvas, options, 200, 200);

    this._degree = 0;
  }

  setOptions(options = {}) {
    const center = options.center || {};

    this._fanColor = options.fanColor || COLOR.green;

    this._centerColor = center.color || COLOR.blue;
    this._centerBgColor = center.bgColor || COLOR.white;

    this._speed = options.speed || 1;
  }

  drawObject() {
    this._degree = Utility.getNextAngleByDegree(this._degree, this._speed);
    const angle = Utility.getAngleByDegree(this._degree);

    this.clear();
    this._ctx.save();
    this.scale();
    this._ctx.translate(100, 100);
    this._ctx.rotate(angle);

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
    this._ctx.closePath();

    this._ctx.beginPath();
    this._ctx.arc(0, 0, 35, 0, 2 * Math.PI);
    this._ctx.fillStyle = this._centerBgColor;
    this._ctx.fill();
    this._ctx.closePath();

    this._ctx.beginPath();
    this._ctx.arc(0, 0, 30, 0, 2 * Math.PI);
    this._ctx.fillStyle = this._centerColor;
    this._ctx.fill();
    this._ctx.closePath();

    this._ctx.strokeStyle = this._centerColor;
    this._ctx.beginPath();
    this._ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    this._ctx.fillStyle = this._centerBgColor;
    this._ctx.fill();
    this._ctx.closePath();

    this._ctx.restore();
  }

  set fanColor(s) {
    this._fanColor = s;
  }

  set centerColor(s) {
    this._centerColor = s;
  }

  set speed(n) {
    this._speed = n;
  }
}
