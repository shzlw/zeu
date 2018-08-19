import BarMeter from './bar-meter';
import DigitalClcok from './digital-clock';
import RoundFan from './round-fan';
import VolumeMeter from './volume-meter';
import Heartbeat from './heartbeat';
import MessageQueue from './message-queue';
import RoundRadar from './round-radar';
import RoundGauge from './round-gauge';
import StopWatch from './stop-watch';
import TextMeter from './text-meter';
import AnimationTimer from './animation-timer';
import Settings from './settings';
import SpeedCircle from './speed-circle';
import TextBox from './text-box';

import WarningDialog from './div/warning-dialog';
import BlinkText from './div/blink-text';
import ScrollPanel from './div/scroll-panel';

export {
  BarMeter,
  DigitalClcok,
  VolumeMeter,
  Heartbeat,
  MessageQueue,
  WarningDialog,
  BlinkText,
  RoundRadar,
  RoundGauge,
  StopWatch,
  ScrollPanel,
  Settings,
  // v1.0.0
  SpeedCircle,
  TextMeter,
  RoundFan,
  TextBox
};

// Fire up window.requestAnimationFrame()
AnimationTimer.render();
