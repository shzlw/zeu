import { GLOBAL } from './global';

export default class AnimationTimer {

  constructor() {
    // Bind the render function.
    this.render = this.render.bind(this);

    // Animation parameters.
    this._fps = 30;
    this._fpsInterval = 1000 / this._fps;
    this._lastFrame = Date.now();
  }

  render() {
    window.requestAnimationFrame(this.render);

    // FPS control
    let now = Date.now();
    let elapsed = now - this._lastFrame;

    if (elapsed > this._fpsInterval) {
      this._lastFrame = now - (elapsed % this._fpsInterval);

      // Draw
      for (let i = 0; i < GLOBAL.requestAnimationFrameArray.length; i++) {
        let drawFrameObj = GLOBAL.requestAnimationFrameArray[i];

        // Buy me some time.
        /*
        setTimeout(() => {
          drawFrameObj.func.call(drawFrameObj.self);
        }, 0);
        */

        drawFrameObj.func.call(drawFrameObj.self);
      }

    }

  }

}
