
import BaseCanvas from './base-canvas';

export default class Circle extends BaseCanvas {

  constructor(canvas) {
    super(canvas);
    this._dotsPerCircle = 30;
    this._interval = (Math.PI * 2) / this._dotsPerCircle;
    this._centerX = 100;
    this._centerY = 100;
    this._radius = 50;
    this._angle = 0;
    this._speed = 15;
  }

  set speed(n) {
    clearInterval(this._timer);
    this._speed = n;
    this.draw();
  }

  get speed() {
    return this._speed;
  }

  draw() {
    this._timer = setInterval(() => {
      this._angle = (this._angle + 1) % 360;
      this.clearAll();
      this._ctx.save();
      this._ctx.translate(100, 100);
      this._ctx.rotate(this._angle * Math.PI / 180);
      for (let i = 0; i < this._dotsPerCircle; i++) {
        let desiredRadianAngleOnCircle = this._interval * i;
        let x = this._centerX + this._radius * Math.cos(desiredRadianAngleOnCircle) - 100;
        let y = this._centerY + this._radius * Math.sin(desiredRadianAngleOnCircle) - 100;

        this._ctx.beginPath();
        this._ctx.arc(x, y, 3, 0, Math.PI * 2);
        this._ctx.closePath();
        this._ctx.fill();
      }
      this._ctx.restore();
    }, this._speed);
  }
}
