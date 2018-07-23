import Utility from './utility';
import { COLOR } from './color';

export default class ScrollPanel {

  constructor(baseDiv, options) {
    this._div = baseDiv;

    let defaultCss = 'margin: 3px; padding: 3px; color: white; background-color: ' + COLOR.green + ';';

    // Options
    this._defaultCss = Utility.has(options, 'defaultCss') ? options.defaultCss : defaultCss;
    this._isUp = Utility.has(options, 'isUp') ? options.isUp : true;;
    this._maxQueueCapacity = Utility.has(options, 'maxQueueCapacity') ? options.maxQueueCapacity : 20;

    this._queue = [];
  }

  push(boxDiv) {
    if (this._queue.length > this._maxQueueCapacity) {
      this.pop();
    }

    this._queue.push(boxDiv);

    if (this._isUp) {
      this._div.insertBefore(boxDiv, this._div.firstChild);
      this._div.scrollBottom = this._div.scrollHeight;
    } else {
      this._div.appendChild(boxDiv);
      this._div.scrollTop = this._div.scrollHeight;
    }
  }

  pop() {
    if (this._queue.length > 0) {
      let toBeRemoved = this._queue.shift();

      this._div.removeChild(toBeRemoved);
    }
  }

  pushText(text, css) {
    let boxDiv = document.createElement('div');

    boxDiv.innerHTML = text;
    boxDiv.style.cssText = css != null ? css : this._defaultCss;
    this.push(boxDiv);
  }

  set isUp(isUp) {
    this._isUp = isUp;
  }

  get isUp() {
    return this._isUp;
  }

  set maxQueueCapacity(capacity) {
    this._maxQueueCapacity = capacity;
  }

  get maxQueueCapacity() {
    return this._maxQueueCapacity;
  }
}
