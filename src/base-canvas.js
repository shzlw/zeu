import { GLOBAL } from './global';

export default class BaseCanvas {

  constructor(baseDiv) {
    this._div = baseDiv;
    this._canvas = document.createElement('canvas');
    this._canvas.setAttribute('width', baseDiv.clientWidth);
    this._canvas.setAttribute('height', baseDiv.clientHeight);
    this._div.appendChild(this._canvas);
    this._ctx = this._canvas.getContext('2d');
    this._width = 200;
    this._height = 200;

    // this._canvas.style.transformOrigin = '0 0'; // scale from top left
    // this._canvas.style.transform = 'scale(' + this._heightScale + ')';

    // Bind the drawFrame function.
    this.drawFrame = this.drawFrame.bind(this);

    // Default color
    this._fontColor = '#181818';
    this._lineColor = '#F8F8FF';
    this._fillColor = '#00D7AF';

  }

  scale() {
    // Base scale on the height.
    let heightScale = this._canvas.height / this._height;

    this._ctx.scale(heightScale, heightScale);
  }

  clearAll() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  startAnimation() {
    let index = this.getAnimationFrameArrayPos();

    if (index === -1) {
      GLOBAL.requestAnimationFrameArray.push(this.drawFrameObj());
    }
  }

  stopAnimation() {
    let index = this.getAnimationFrameArrayPos();

    if (index !== -1) {
      GLOBAL.requestAnimationFrameArray.splice(index, 1);
    }
  }

  drawFrameObj() {
    return {
      func: this.drawFrame,
      self: this
    };
  }

  get isAnimationOn() {
    return this.getAnimationFrameArrayPos() !== -1;
  }

  getAnimationFrameArrayPos() {
    let index = -1;

    for (let i = 0; i < GLOBAL.requestAnimationFrameArray.length; i++) {
      let drawFrameObj = GLOBAL.requestAnimationFrameArray[i];

      if (drawFrameObj.self._div.id === this._div.id) {
        index = i;
        break;
      }

    }
    return index;
  }

  /*
  animate2() {
    this._animationTimer = setInterval(() => {
      this.drawFrame();
    }, 1000 / this._fps);
  }
  */

  drawFrame() {}

}

