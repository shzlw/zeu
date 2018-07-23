import Utility from './utility';

export default class BlinkText {

  constructor(baseDiv, options) {
    this._div = baseDiv;
    this._defaultCss = baseDiv.style.cssText;
    this._blinkTimer = null;

    // Options
    this._interval = Utility.has(options, 'interval') ? options.interval : 500;
    this._blinkCss = Utility.has(options, 'blinkCss') ? options.blinkCss : 'color: white; background-color: red;';
  }

  blink(message) {
    if (message != null) {
      this._div.innerHTML = message;
    }

    if (this._blinkTimer == null) {
      this._blinkTimer = setInterval(() => {
        let currCss = this._div.style.cssText !== this._defaultCss ? this._defaultCss : this._blinkCss;

        this._div.style.cssText = currCss;
      }, this._interval);
    }
  }

  unblink() {
    if (this._blinkTimer != null) {
      clearInterval(this._blinkTimer);
      this._blinkTimer = null;
      this._div.style.cssText = this._defaultCss;
    }
  }

  set interval(interval) {
    this._interval = interval;
    if (this._blinkTimer != null) {
      this.unblink();
      this.blink();
    }
  }

  get interval() {
    return this._interval;
  }

  set blinkCss(blinkCss) {
    this._blinkCss = blinkCss;
  }

  get blinkCss() {
    return this._blinkCss;
  }
}
