import { GLOBAL } from './global';

export default class BaseCanvas {

  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
    this._width = 200;
    this._height = 200;

    // Base scale on the height.
    this._heightScale = this._canvas.height / this._height;

    // Bind the drawFrame function.
    this.drawFrame = this.drawFrame.bind(this);

    // Default color
    this._fontColor = '#181818';
    this._lineColor = '#F8F8FF';
    this._fillColor = '#00D7AF';

  }

  scale() {
    this._ctx.scale(this._heightScale, this._heightScale);
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

      if (drawFrameObj.self._canvas.id === this._canvas.id) {
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

