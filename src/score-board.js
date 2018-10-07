import BaseComponent from './base-component';
import Utility from './utility';
import { COLOR } from './color';

export default class ScoreBoard extends BaseComponent {

  constructor(canvas, options = {}) {
    const viewWidth = options.viewWidth || 200;
    const viewHeight = options.viewHeight || 200;

    super(canvas, options, viewWidth, viewHeight);

    this._rows = [];
  }

  setOptions(options = {}) {
    this._rowHeight = options.rowHeight || 20;
    this._space = options.space || 0;
    this._font = options.font || '10px Arial';
    this._speed = options.speed || 5;
    this._order = options.order || 'asc';
  }

  sort() {
    if (this._order === 'asc') {
      this._rows.sort((a, b) => a.score - b.score);
    } else {
      this._rows.sort((a, b) => b.score - a.score);
    }
  }

  drawObject() {
    for (let i = 0; i < this._rows.length; i++) {
      const row = this._rows[i];

      this._shape.fillRect(row.x, row.y, this._viewWidth, this._rowHeight, row.bgColor);
      this._shape.fillText(row.text.value, row.x + row.text.xOffset, row.y + row.text.yOffset,
        this._font, 'left', row.text.fontColor);

      if (row.moveType === 'move') {
        const destY = i * (this._rowHeight + this._space);
        const speedY = destY > row.y ? this._speed : -this._speed;

        this._rows[i].y = Utility.getNextPos(row.y, destY, speedY);
      } else if (row.moveType === 'remove') {
        if (row.destX < 0 && row.x === row.destX) {
          this._rows[i].speedX = this._speed * 2;
          this._rows[i].destX = this._viewWidth + 10;
        }
        this._rows[i].x = Utility.getNextPos(row.x, this._rows[i].destX, this._rows[i].speedX);
      }
    }

    // Delete the row.
    for (let i = this._rows.length - 1; i >= 0; i--) {
      const row = this._rows[i];

      if (row.moveType === 'remove' && row.destX > 0 && row.x === row.destX) {
        this._rows.splice(i, 1);
      }
    }
  }

  update(params = {}) {
    const id = params.id;
    const text = params.text || {};

    let isSort = false;

    for (let i = 0; i < this._rows.length; i++) {
      if (this._rows[i].id === id) {
        if (this._rows[i].score !== params.score) {
          isSort = true;
        }
        this._rows[i].moveType = 'move';
        this._rows[i].score = params.score || this._rows[i].score;
        this._rows[i].bgColor = params.bgColor || this._rows[i].bgColor;
        this._rows[i].text.value = text.value || this._rows[i].text.value;
        this._rows[i].text.fontColor = text.fontColor || this._rows[i].text.fontColor;
        break;
      }
    }

    if (isSort) {
      this.sort();
    }
  }

  remove(id) {
    let isFound = false;

    for (let i = 0; i < this._rows.length; i++) {
      if (this._rows[i].id === id && this._rows[i].moveType !== 'remove') {
        this._rows[i].moveType = 'remove';
        this._rows[i].speedX = -this._speed;
        this._rows[i].destX = -40;
        isFound = true;
        break;
      }
    }

    if (isFound) {
      this.sort();
    }
  }

  add(params = {}) {
    for (let i = 0; i < this._rows.length; i++) {
      if (this._rows.id === params.id) {
        return;
      }
    }

    let text = params.text || {};
    let row = {
      id: params.id,
      score: params.score || 0,
      bgColor: params.bgColor || COLOR.blue,
      text: {
        value: text.value || '',
        fontColor: text.fontColor || COLOR.white,
        xOffset: text.xOffset || 0,
        yOffset: text.yOffset || 0
      }
    };

    row.x = 0;
    row.y = 0;
    row.destX = 0;
    row.destY = 0;
    row.speedX = 0;
    row.speedY = 0;
    row.moveType = 'move';

    this._rows.push(row);
    this.sort();
  }

  get rows() {
    return this._rows;
  }
}
