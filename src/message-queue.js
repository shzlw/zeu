import BaseCanvas from './base-canvas';

export default class MessageQueue extends BaseCanvas {

  constructor(canvas, options) {
    super(canvas);

    this._ctx.globalCompositeOperation = 'source-over';
    this._queue = [];
    this._maxQueueCapacity = 20;
  }

  push(value) {
    if (this._queue.length >= this._maxQueueCapacity) {
      this._queue.shift();
    }

    this._queue.push({
      value: value,
      x: 20,
      y: 200,
      color: 'green',
      move: true
    });
  }

  pop() {
    if (this._queue.length >= 0) {
      this._queue.shift();
    }
  }

  drawFrame() {
    this.clearAll();
    this._ctx.save();
    this.scale();

    for (let i = 0; i < this._queue.length; i++) {
      let q = this._queue[i];
      // let currX = 20;
      let currY = 25 * i;

      // Move up
      if (currY <= q.y) {
        if (i === 0) {
          q.y -= 3;
        } else {
          if (!this._queue[i - 1].move) {
            q.y -= 3;
          }
        }
      } else {
        q.move = false;
      }
      // this._ctx.fillStyle = 'white';
      // this._ctx.fillText(q.val, q.x, q.y);
      this._ctx.fillStyle = q.color;
      this._ctx.fillRect(q.x, q.y, 100, 20);
    }

    this._ctx.restore();
  }
}

