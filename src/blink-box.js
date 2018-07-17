
export default class BlinkBox {

  constructor(baseDiv) {
    this._div = baseDiv;
    this._bgColor = baseDiv.style.backgroundColor;
    this._fontColor = baseDiv.style.color;
    this._interval = 500;
  }

  blink(message, fontColor, bgColor) {
    this._div.innerHTML = message;
    let currfontColor = this._div.style.color;
    let currbgColor = this._div.style.backgroundColor;

    this._blinkTimer = setInterval(() => {
      currfontColor = currfontColor === fontColor ? this._fontColor : fontColor;
      currbgColor = currbgColor === bgColor ? this._bgColor : bgColor;
      this._div.style.color = currfontColor;
      this._div.style.backgroundColor = currbgColor;
    }, this._interval);
  }

  hide() {
    if (this._blinkTimer !== null) {
      clearInterval(this._blinkTimer);
    }
  }
}
