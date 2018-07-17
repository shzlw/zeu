
export default class AutoScrollPanel {

  constructor(baseDiv) {
    this._div = baseDiv;

    this._array = [];
    this._maxQueueCapacity = 50;

    this._isUp = true;
  }

  push(boxDiv) {
    if (this.isExceedCapacity()) {
      this.pop();
    } else {
      if (this._isUp) {
        this._div.prepend(boxDiv);
        this._div.scrollBottom = this._div.scrollHeight;
      } else {
        this._div.append(boxDiv);
        this._div.scrollTop = this._div.scrollHeight;
      }

    }
  }

  pop() {
    let f = this._array.shift();

    this._div.removeChild(f);
  }

  isExceedCapacity() {
    return this._array.length >= this._maxQueueCapacity;
  }
}
