import BaseCanvas from './base-canvas';
import Utility from './utility';

export default class RoundGauge extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 200, 200);

    // 360, 180 or 270?
    this._min = 0;
    this._max = 360;
    this._startDegree = -240;
    this._endDegree = 60;
    this._value = 100;
    this._isHandArrow = false;
    this._lineColor = 'blue';
    this._handColor = 'green';
    this._numberColor = 'red';

    this._speed = 3;
    this._currDegree = 0;
    this._targetDegree = 90;
  }

  set value(value) {
    this._value = value;
  }

  drawFrame() {
    this._ctx.textAlign = 'center';

    if (this._currDegree < this._targetDegree) {
      this._currDegree += this._speed;
    } else {
      this._currDegree = this._targetDegree;
    }

    let angle = Utility.getAngleByDegree(this._currDegree);

    this.clearAll();
    this._ctx.save();
    this.scale();

    this._ctx.fillStyle = this._numberColor;
    this._ctx.fillText('100', 100, 100);

    this._ctx.translate(100, 100);

    // Draw scales
    this._ctx.strokeStyle = this._lineColor;
    this._ctx.lineWidth = 1;
    for (let i = this._startDegree; i <= this._endDegree; i = i + 6) {
      let a = Utility.getAngleByDegree(i);

      let r = 77;

      if (i % 30 === 0) {
        r = 74;
        let x = 92 * Math.cos(a);
        let y = 92 * Math.sin(a) + 3;

        this._ctx.fillStyle = this._lineColor;
        this._ctx.fillText(i, x, y);
      }

      let x1 = r * Math.cos(a);
      let y1 = r * Math.sin(a);

      let x2 = 80 * Math.cos(a);
      let y2 = 80 * Math.sin(a);

      this._ctx.beginPath();
      this._ctx.moveTo(x1, y1);
      this._ctx.lineTo(x2, y2);
      this._ctx.closePath();
      this._ctx.stroke();
    }

    // Draw the radar wave
    this._ctx.rotate(angle);

    this._ctx.beginPath();
    this._ctx.fillStyle = this._handColor;
    if (this._isHandArrow) {
      this._ctx.moveTo(55, -10);
      this._ctx.lineTo(70, 0);
      this._ctx.lineTo(55, 10);
      this._ctx.fill();
    } else {
      this._ctx.fillRect(50, -2, 20, 4);
    }

    this._ctx.closePath();

    this._ctx.restore();
  }
}

