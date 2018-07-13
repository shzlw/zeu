
export default class BaseCanvas {

  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
    this._width = 200;
    this._height = 200;

    // Base scale on the height.
    this._heightScale = this._canvas.height / this._height;

    // Animation parameters.
    this._fps = 60;
    this._fpsInterval = 1000 / this._fps;
    this._lastFrame = Date.now();

    this.animate = this.animate.bind(this);
  }

  scale() {
    this._ctx.scale(this._heightScale, this._heightScale);
  }

  clearAll() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  animate() {
    this._animationTimer = window.requestAnimationFrame(this.animate);
    let now = Date.now();
    let elapsed = now - this._lastFrame;

    if (elapsed > this._fpsInterval) {
      this._lastFrame = now - (elapsed % this._fpsInterval);

      // Draw
      this.draw();
    }
  }

  draw() {

  }

}

