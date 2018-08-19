
export default class Utility {

  constructor() {}

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getRandomColor() {
    return '#' + ((1 << 24) * Math.random() | 0).toString(16);
  }

  static has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
  }

  static addHour(h) {
    let now = new Date();

    now.setHours(now.getHours() + h);
    return now;
  }

  static getAngleByDate(speed, date) {
    return ((speed * Math.PI) / 6) * date.getSeconds() + ((speed * Math.PI) / 6000) * date.getMilliseconds();
  }

  static getNextAngleByDegree(degree, speed) {
    if (degree >= 360) {
      return 0;
    }
    return degree + speed;
  }

  static getAngleByDegree(degree) {
    return degree * Math.PI / 180;
  }

  static hexToRgba(hex, opacity) {
    let h = hex.replace('#', '');
    let r = parseInt(h.substring(0, 2), 16);
    let g = parseInt(h.substring(2, 4), 16);
    let b = parseInt(h.substring(4, 6), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  }

  static hexToRgb(hex) {
    let h = hex.replace('#', '');
    let color = [];

    color[0] = parseInt(h.substring(0, 2), 16);
    color[1] = parseInt(h.substring(2, 4), 16);
    color[2] = parseInt(h.substring(4, 6), 16);
    return color;
  }

  static hex(c) {
    let s = '0123456789abcdef';
    let i = parseInt(c, 10);

    if (i === 0 || isNaN(c)) {
      return '00';
    }
    i = Math.round(Math.min(Math.max(0, i), 255));
    return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
  }

  static convertToHex(rgb) {
    return this.hex(rgb[0]) + this.hex(rgb[1]) + this.hex(rgb[2]);
  }

  static generateGradientColor(colorStart, colorEnd, colorCount) {
    const start = this.hexToRgb(colorStart);
    const end = this.hexToRgb(colorEnd);
    const len = colorCount;
    let alpha = 0.0;
    let rt = [];

    for (let i = 0; i < len; i++) {
      const c = [];

      alpha += (1.0 / len);
      c[0] = start[0] * alpha + (1 - alpha) * end[0];
      c[1] = start[1] * alpha + (1 - alpha) * end[1];
      c[2] = start[2] * alpha + (1 - alpha) * end[2];
      rt.push(this.convertToHex(c));
    }
    return rt;
  }

  static isDefined(o) {
    return o !== undefined && o !== null;
  }

  static leftPadZero(n) {
    if (n < 10) {
      return '0' + n;
    }
    return n;
  }

  static getNextPos(curr, dest, speed) {
    if ((speed > 0 && curr < dest) || (speed < 0 && curr > dest)) {
      return curr + speed;
    }
    return dest;
  }

  static shuffleArray(a) {
    let j = 0;
    let temp = 0;

    for (let i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }
}

