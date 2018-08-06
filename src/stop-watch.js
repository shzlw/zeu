import BaseCanvas from './base-canvas';
import DigitalNumber from './digital-number';

export default class StopWatch extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 500, 100);

    this._digitalNumber = new DigitalNumber(this._ctx, 8, 50, 100, 'white', 'green');
    this._millisNumber = new DigitalNumber(this._ctx, 4, 25, 50, 'white', 'red');

    this._lastTime = Date.now();
    this._elapsedTime = 0;
  }

  postConstructor() {
  }

  start() {
    this._lastTime = Date.now();
    this._elapsedTime = 0;
    this._state = 'START';
    this.startAnimation();
  }

  stop() {
    this._state = 'STOP';
    this.stopAnimation();
  }

  resume() {
    this._state = 'RESUME';
    this.startAnimation();
  }

  reset() {
    this._state = 'RESET';
    this.stopAnimation();
    // Draw one frame to reset everything to 0.
    this.drawFrame();
    this._lastTime = Date.now();
    this._elapsedTime = 0;
  }

  drawFrame() {
    let now = Date.now();

    if (this._state === 'RESUME') {
      this._state = 'START';
    } else {
      this._elapsedTime += (Date.now() - this._lastTime);
    }
    this._lastTime = now;

    let second = 0;
    let millis = 0;
    let sec = 0;
    let min = 0;
    let hour = 0;

    if (this._state !== 'RESET') {
      second = Math.floor(this._elapsedTime / 1000);
      millis = parseInt(this._elapsedTime.toString().slice(-2), 10);
      sec = Math.floor(second % 60);
      min = Math.floor((second % 3600) / 60);
      hour = Math.floor(second / 3600);
    }

    this.clearAll();
    this._ctx.save();
    this.scale();

    this.drawTwoDigits(this._digitalNumber, hour, 60);
    this.drawTwoDigits(this._digitalNumber, min, 60);
    this.drawTwoDigits(this._digitalNumber, sec, 60);

    this._ctx.translate(0, 50);
    this.drawTwoDigits(this._millisNumber, millis, 30);

    this._ctx.restore();
  }

  drawTwoDigits(digitalNumber, time, space) {
    if (time < 10) {
      digitalNumber.drawNumber(0);
      this._ctx.translate(space, 0);
      digitalNumber.drawNumber(time);
      this._ctx.translate(space, 0);
    } else {
      let left = Math.floor(time / 10);
      let right = time % 10;

      digitalNumber.drawNumber(left);
      this._ctx.translate(space, 0);
      digitalNumber.drawNumber(right);
      this._ctx.translate(space, 0);
    }
  }
}
