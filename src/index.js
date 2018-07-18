import Circle from './circle';
import BarMeter from './bar-meter';
import DigitalClcok from './digital-clock';
import RoundFan from './round-fan';
import VolumeMeter from './volume-meter';
import Heatbeat from './heatbeat';
import BlinkDialog from './blink-dialog';
import BlinkText from './blink-text';
import ScrollPanel from './scroll-panel';
import AnimationTimer from './animation-timer';

export {
  Circle,
  BarMeter,
  DigitalClcok,
  RoundFan,
  VolumeMeter,
  Heatbeat,
  BlinkDialog,
  BlinkText,
  ScrollPanel
};

// Fire up window.requestAnimationFrame()
new AnimationTimer().render();
