import BaseComponent from './base-component';
// import Utility from './utility';
import { COLOR } from './color';

export default class HexGrid extends BaseComponent {

  constructor(canvas, options = {}) {
    const viewWidth = options.viewWidth || 200;
    const viewHeight = options.viewHeight || 200;

    super(canvas, options, viewWidth, viewHeight);

    this._nodes = [];
  }

  setOptions(options = {}) {
    this._space = options.space || 5;
    this._radius = options.radius || 20;
    this._border = options.border || 3;
  }

  drawObject() {
    const s = this._space;
    const r = this._radius;
    const w = Math.pow(3, 0.5) * r / 2;

    this._ctx.lineWidth = this._border;
    const now = Date.now();

    this._nodes.forEach((h) => {
      const xOffset = h.x % 2 === 0 ? s + w : s * 3 / 2 + 2 * w;
      const y = (s + r) + (w + s / 2) * Math.pow(3, 0.5) * h.x;

      this.drawHex(xOffset + (2 * w + s) * h.y, y, r, h.bgColor, h.borderColor, h.text);

      if (h.blink.on) {
        const interval = h.blink.interval;
        const lastCall = h.blink.lastCall;

        if (now - lastCall < interval) {
          this.drawHex(xOffset + (2 * w + s) * h.y, y, r, h.blink.bgColor, h.borderColor, h.text);
        } else if (now - lastCall < (interval * 2)) {
        } else {
          h.blink.lastCall = now;
        }
      }
    });
  }

  drawHex(x, y, r, bgColor, lineColor, text) {
    const w = Math.pow(3, 0.5) * r / 2;

    this._ctx.strokeStyle = lineColor;
    this._ctx.beginPath();
    this._ctx.moveTo(x, y - r);
    this._ctx.lineTo(x + w, y - r / 2);
    this._ctx.lineTo(x + w, y + r / 2);
    this._ctx.lineTo(x, y + r);
    this._ctx.lineTo(x - w, y + r / 2);
    this._ctx.lineTo(x - w, y - r / 2);
    this._ctx.lineTo(x, y - r);
    this._ctx.closePath();
    this._ctx.stroke();
    this._ctx.fillStyle = bgColor;
    this._ctx.fill();

    this._shape.fillText(text.value, x + text.xOffset, y + text.yOffset, text.font, 'center', text.color);
  }

  saveHex(params = {}) {
    const text = params.text || {};
    const node = {
      id: params.id,
      x: params.x,
      y: params.y,
      bgColor: params.bgColor || COLOR.white,
      borderColor: params.borderColor || COLOR.white,
      text: {
        value: text.value || '',
        color: text.color || COLOR.black,
        font: text.font || '12px Arial',
        xOffset: text.xOffset || 0,
        yOffset: text.yOffset || 0
      },
      blink: {
        bgColor: COLOR.red,
        interval: 1000,
        on: false,
        lastCall: 0
      }
    };

    let isExist = false;

    for (let i = 0; i < this._nodes.length; i++) {
      if (this._nodes[i].id === node.id) {
        this._nodes[i] = node;
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      this._nodes.push(node);
    }
  }

  blink(params = {}) {
    const id = params.id;
    const bgColor = params.bgColor || COLOR.red;
    const interval = params.interval || 1000;

    for (let i = 0; i < this._nodes.length; i++) {
      if (this._nodes[i].id === id) {
        this._nodes[i].blink.bgColor = bgColor;
        this._nodes[i].blink.interval = interval;
        this._nodes[i].blink.on = true;
        break;
      }
    }
  }

  unblink(id) {
    for (let i = 0; i < this._nodes.length; i++) {
      if (this._nodes[i].id === id) {
        this._nodes[i].blink.on = false;
        break;
      }
    }
  }
}

