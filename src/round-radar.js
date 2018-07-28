import BaseCanvas from './base-canvas';
import Utility from './utility';

export default class RoundRadar extends BaseCanvas {

  constructor(baseDiv, options) {
    super(baseDiv, 200, 200);

    this._speed = Utility.has(options, 'speed') ? options.speed : 2;
    this._bgColor = Utility.has(options, 'bgColor') ? options.bgColor : 'rgba(0, 0, 0, 0.03)';
    this._gridColor = Utility.has(options, 'gridColor') ? options.gridColor : 'rgba(0, 255, 0, 0.02)';
    this._lineColor = Utility.has(options, 'lineColor') ? options.lineColor : 'rgba(0, 255, 0, 1)';
    this._targetColor = Utility.has(options, 'targetColor') ? options.targetColor : 'rgba(255, 0, 0, 0.5)';

    this._hasGrid = true;
    this._lastTime = 0;
    this._targets = [];
  }

  addTarget(id, x, y, radius) {
    let t = {
      id: id,
      x: Utility.isDefined(x) ? x : Utility.getRandomInt(0, 50),
      y: Utility.isDefined(y) ? y : Utility.getRandomInt(0, 50),
      radius: Utility.isDefined(radius) ? radius : 5
    };

    this._targets.push(t);
  }

  removeTarget(id) {
    let index = -1;

    for (let i = 0; i < this._targets.length; i++) {
      let t = this._targets[i];

      if (t.id === id) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      this._targets.splice(index, 1);
    }
  }

  clearAllTargets() {
    this._targets = [];
  }

  drawFrame() {
    let now = new Date();
    let angle = Utility.getAngleByDate(this._speed, now);

    this._ctx.fillStyle = this._bgColor;
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx.save();
    this.scale();

    // Draw grid
    if (this._hasGrid) {
      this._ctx.strokeStyle = this._gridColor;
      this._ctx.lineWidth = 1;
      for (let i = 0; i <= 20; i++) {
        this._ctx.beginPath();
        this._ctx.moveTo(i * 10, 0);
        this._ctx.lineTo(i * 10, 200);
        this._ctx.closePath();
        this._ctx.stroke();
      }

      for (let i = 0; i <= 20; i++) {
        this._ctx.beginPath();
        this._ctx.moveTo(0, i * 10);
        this._ctx.lineTo(200, i * 10);
        this._ctx.closePath();
        this._ctx.stroke();
      }
    }

    this._ctx.translate(100, 100);

    // Draw circles
    this._ctx.lineWidth = 1;
    this._ctx.strokeStyle = this._lineColor;
    for (let i = 1; i <= 4; i++) {
      if (i === 4) {
        this._ctx.lineWidth = 2;
      }
      this._ctx.beginPath();
      this._ctx.arc(0, 0, i * 20, 0, Math.PI * 2);
      this._ctx.closePath();
      this._ctx.stroke();
    }

    // Draw lines
    this._ctx.lineWidth = 1;
    this._ctx.beginPath();
    this._ctx.moveTo(-80, 0);
    this._ctx.lineTo(80, 0);
    this._ctx.closePath();
    this._ctx.stroke();

    this._ctx.beginPath();
    this._ctx.moveTo(0, -80);
    this._ctx.lineTo(0, 80);
    this._ctx.closePath();
    this._ctx.stroke();

    // Draw scales
    this._ctx.lineWidth = 1;
    for (let i = 0; i < 360; i = i + 6) {
      let a = Utility.getAngleByDegree(i);

      let r = 77;

      if (i % 30 === 0) {
        r = 74;
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

    // Draw Targets
    if (now.getTime() - this._lastTime < 500) {
      this._ctx.fillStyle = this._targetColor;
      for (let i = 0; i < this._targets.length; i++) {
        let t = this._targets[i];

        this._ctx.beginPath();
        this._ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        this._ctx.closePath();
        this._ctx.fill();
      }
    } else if (now.getTime() - this._lastTime < 1000) {
      // Don't display
    } else {
      this._lastTime = now.getTime();
    }

    // Draw the radar wave
    this._ctx.rotate(angle);
    this._ctx.fillStyle = this._lineColor;

    this._ctx.beginPath();
    this._ctx.fillRect(0, -1, 80, 2);
    this._ctx.closePath();

    this._ctx.restore();
  }
}

