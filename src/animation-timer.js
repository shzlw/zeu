import { GLOBAL } from './global';

export default class AnimationTimer {

  constructor() {
    // Bind the animate function.
    this.animate = this.animate.bind(this);

    // Animation parameters.
    this._fps = 60;
    this._fpsInterval = 1000 / this._fps;
    this._lastFrame = Date.now();
  }

  animate() {
    window.requestAnimationFrame(this.animate);

    // FPS control
    let now = Date.now();
    let elapsed = now - this._lastFrame;

    if (elapsed > this._fpsInterval) {
      this._lastFrame = now - (elapsed % this._fpsInterval);

      // Draw
      for (let i = 0; i < GLOBAL.requestAnimationFrameArray.length; i++) {
        let drawFrameObj = GLOBAL.requestAnimationFrameArray[i];

        // Buy me some time.
        setTimeout(() => {
          drawFrameObj.func.call(drawFrameObj.self);
        }, 0);
      }

    }

  }

};