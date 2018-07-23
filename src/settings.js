import AnimationTimer from './animation-timer';

class Settings {
  constructor() {
    this._fps = 60;
  }

  set fps(fps) {
    this._fps = fps;
    AnimationTimer._fps = fps;
  }
}

export default new Settings();
