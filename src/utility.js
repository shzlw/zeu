
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

  static getAngleByDegree(degree) {
    return degree * Math.PI / 180;
  }

  static hexToRgba(hex, opacity) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  }

  static isDefined(o) {
    return o !== undefined && o !== null;
  }
}

