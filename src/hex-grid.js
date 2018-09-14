import BaseComponent from './base-component';
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

      this.drawHex(xOffset + (2 * w + s) * h.y, y, r, h.bgColor, h.borderColor, h.text, h.text.xOffset, h.text.yOffset);

      if (h.blink.on) {
        const interval = h.blink.interval;
        const lastCall = h.blink.lastCall;

        if (now - lastCall < interval) {
          this.drawHex(xOffset + (2 * w + s) * h.y, y, r, h.blink.bgColor, h.blink.borderColor, h.blink.text,
            h.text.xOffset, h.text.yOffset);
        } else if (now - lastCall < (interval * 2)) {
        } else {
          h.blink.lastCall = now;
        }
      }
    });
  }

  drawHex(x, y, r, bgColor, lineColor, text, xOffset, yOffset) {
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

    this._shape.fillText(text.value, x + xOffset, y + yOffset, text.font, 'center', text.color);
  }

  /**
   * Create or update a hex
   * @param {object} params
   */
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
        text: {
          value: '',
          color: COLOR.black
        },
        borderColor: params.borderColor || COLOR.white,
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

  /**
   * Blink on
   * @param {object} params
   */
  blinkOn(params = {}) {
    const text = params.text || {};

    for (let i = 0; i < this._nodes.length; i++) {
      if (this._nodes[i].id === params.id) {
        this._nodes[i].blink.text.value = text.value || '';
        this._nodes[i].blink.text.color = text.color || COLOR.black;
        this._nodes[i].blink.borderColor = params.borderColor || COLOR.white;
        this._nodes[i].blink.bgColor = params.bgColor || COLOR.red;
        this._nodes[i].blink.interval = params.interval || 1000;
        this._nodes[i].blink.on = true;
        break;
      }
    }
  }

  /**
   * Blink off
   * @param {string} id
   */
  blinkOff(id) {
    for (let i = 0; i < this._nodes.length; i++) {
      if (this._nodes[i].id === id) {
        this._nodes[i].blink.on = false;
        break;
      }
    }
  }
}

