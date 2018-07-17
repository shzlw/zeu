import Circle from './circle';
import BarMeter from './bar-meter';
import DigitalClcok from './digital-clock';
import RoundFan from './round-fan';
import VolumeMeter from './volume-meter';
import MessageQueue from './message-queue';
import Heatbeat from './heatbeat';
import BlinkDialog from './blink-dialog';
import BlinkBox from './blink-box';
import AutoScrollPanel from './auto-scroll-panel';
import AnimationTimer from './animation-timer';

export {
  Circle,
  BarMeter,
  DigitalClcok,
  RoundFan,
  VolumeMeter,
  MessageQueue,
  Heatbeat,
  BlinkDialog,
  BlinkBox,
  AutoScrollPanel
};

// Fire up window.requestAnimationFrame()
new AnimationTimer().animate();
