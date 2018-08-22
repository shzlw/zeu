import AnimationTimer from './animation-timer';
import Settings from './settings';
import BarMeter from './bar-meter';
import DigitalClcok from './digital-clock';
import RoundFan from './round-fan';
import VolumeMeter from './volume-meter';
import Heartbeat from './heartbeat';
import MessageQueue from './message-queue';
import TextMeter from './text-meter';
import SpeedCircle from './speed-circle';
import TextBox from './text-box';

export {
  Settings,
  BarMeter,
  DigitalClcok,
  VolumeMeter,
  Heartbeat,
  MessageQueue,
  SpeedCircle,
  TextMeter,
  RoundFan,
  TextBox
};

// Fire up window.requestAnimationFrame()
AnimationTimer.render();
