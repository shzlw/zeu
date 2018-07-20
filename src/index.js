import BarMeter from './bar-meter';
import DigitalClcok from './digital-clock';
import RoundFan from './round-fan';
import VolumeMeter from './volume-meter';
import Heartbeat from './heartbeat';
import BlinkDialog from './blink-dialog';
import BlinkText from './blink-text';
import ScrollPanel from './scroll-panel';
import AnimationTimer from './animation-timer';

export {
  BarMeter,
  DigitalClcok,
  RoundFan,
  VolumeMeter,
  Heartbeat,
  BlinkDialog,
  BlinkText,
  ScrollPanel
};

// Fire up window.requestAnimationFrame()
new AnimationTimer().render();
