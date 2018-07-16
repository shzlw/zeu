import Circle from './circle.js';
import Color from './color.js';
import BarMeter from './bar-meter.js';
import DigitalClcok from './digital-clock.js';
import RoundFan from './round-fan.js';
import VolumeMeter from './volume-meter';
import MessageQueue from './message-queue';
import Heatbeat from './heatbeat';
import AnimationTimer from './global';

export {
  Circle,
  Color,
  BarMeter,
  DigitalClcok,
  RoundFan,
  VolumeMeter,
  MessageQueue,
  Heatbeat
};

// Fire up window.requestAnimationFrame()
new AnimationTimer().animate();
