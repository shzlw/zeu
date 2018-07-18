
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
}
