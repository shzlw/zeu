import Utility from './utility';
import { COLOR } from './color';
import BaseComponent from './base-component';
import DigitalSymbol from './digital-symbol';

export default class DigitalClock extends BaseComponent {

  constructor(canavs, options = {}) {
    super(canavs, options, 400, 100);

    this._barWidth = 8;
    this._space = 12;
    this._numberWidth = 50;
    this._numberHeight = 100;

    this._ds = new DigitalSymbol(this._ctx, this._barWidth, this._numberWidth,
      this._numberHeight, this._dashColor, this._numberColor);
    this._timer = null;

    // Draw it immediately.
    this.drawTime();
  }

  postConstructor() {
    this.tick();
  }

  setOptions(options = {}) {
    this._numberColor = options.numberColor || COLOR.red;
    this._dashColor = options.dashColor || COLOR.lightGrey;
    this._hourOffset = options.hourOffset || 0;
  }

  tick() {
    if (this._timer == null) {
      this._timer = setInterval(() => {
        this.drawTime();
      }, 1000);
    }
  }

  stopTick() {
    if (this._timer != null) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  drawTime() {
    let now = Utility.addHour(this._hourOffset);

    this.clear();
    this._ctx.save();
    this.scale();

    this.drawTwoDigits(this._ds, now.getHours(), this._numberWidth + this._space);
    this._ds.drawColon();
    this._ctx.translate(this._barWidth + this._space, 0);
    this.drawTwoDigits(this._ds, now.getMinutes(), this._numberWidth + this._space);
    this._ds.drawColon();
    this._ctx.translate(this._barWidth + this._space, 0);
    this.drawTwoDigits(this._ds, now.getSeconds(), this._numberWidth + this._space);

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
