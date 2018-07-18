
export default class BlinkText {

  constructor(baseDiv) {
    this._div = baseDiv;
    this._defaultCss = baseDiv.style.cssText;
    this._interval = 500;
    this._blinkCss = 'color: white; background-color: red;';
    this._blinkTimer = null;
  }

  set interval(interval) {
    this._interval = interval;
  }

  get interval() {
    return this._interval;
  }

  set blinkCss(css) {
    this._blinkCss = css;
  }

  get blinkCss() {
    return this._blinkCss;
  }

  blink(message) {
    if (message != null) {
      this._div.innerHTML = message;
    }

    if (this._blinkTimer == null) {
      this._blinkTimer = setInterval(() => {
        let currCss = this._div.style.cssText === this._blinkCss ? this._defaultCss : this._blinkCss;

        this._div.style.cssText = currCss;
      }, this._interval);
    }
  }

  unblink() {
    if (this._blinkTimer != null) {
      clearInterval(this._blinkTimer);
      this._blinkTimer = null;
    }
  }
}
