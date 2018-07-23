# Zeu.js

![Build Status](https://travis-ci.org/shzlw/zeu.svg?branch=master)

Zeu.js is JavaScript library featuring a collection of prebuilt visualization components for building real-time TV dashboard, monitoring UI and IoT web interface.

## Demo

[My Command Center](https://shzlw.github.io/zeu/examples/my-command-center.html)

## Installation

From lib
```html
<script src="zeu.min.js"></script>
```

From npm
```
npm install zeu
```

From CDN
```
https://unpkg.com/zeu/lib/zeu.min.js
```

## Usage

#### General

Use a div as the base to create the component. Each component has its own recommended size.

```html
<div id="component-id" style="width: 200px; height: 100px;"></div>
```

#### FPS

Default fps is 30 for components using canvas.

```javascript
zeu.Settings.fps = 30;
```

#### Bar Meter ([Example](https://shzlw.github.io/zeu/examples/bar-meter.html))

```html
<div id="bar-meter" style="width: 100px; height: 200px;"></div>
```
```javascript
var barMeter = new zeu.BarMeter(
  document.getElementById('bar-meter'), {
    min: 0,
    max: 100,
    value: 80,
    dashColor: 'white',
    barColor: 'red',
    speed: 10
  });

barMeter.value = 60;
barMeter.dashColor = 'green';
barMeter.barColor = 'blue';
```

#### Blink Text ([Example](https://shzlw.github.io/zeu/examples/blink-text.html))

```html
<div id="blink-text"></div>
```
```javascript
var binkText = new zeu.BlinkText(
  document.getElementById('blink-text'), {
    interval: 300,
    blinkCss: 'color: white; background-color: blue;'
  });

// Turn on the blink
binkText.blink();

binkText.blinkCss = 'color: white; background-color: green;';
binkText.interval = 2000;
binkText.blink('NEW BLINK TEXT');  

// Turn off the blink
binkText.unblink();
```

#### Digital Clock ([Example](https://shzlw.github.io/zeu/examples/digital-clock.html))

```html
<div id="digital-clock" style="width: 370px; height: 100px;"></div>
```
```javascript
var digitalClock = new zeu.DigitalClcok(
  document.getElementById('digital-clock'), {
    barWidth: 8,
    barHeight : 30,
    space: 8,
    hourOffset: 5,
    dashColor: '#000',
    numberColor: 'blue'
  }
);

digitalClock.numberColor = '#ff0000';
digitalClock.dashColor = '#000';
```

#### Double Circle ([Example](https://shzlw.github.io/zeu/examples/double-circle.html))

```html
<div id="double-circle" style="width: 200px; height: 200px;"></div>
```
```javascript
// Circle in dots
var doubleCircleWithDots = new zeu.DoubleCircle(
  document.getElementById('double-circle-in-dots'), {
    isDot: true,
    dots: 30,
    outer: {
      color: 'red',
      radius: 80,
      speed: 5
    },
    inner: {
      color: 'blue',
      radius: 70,
      speed: 3
    },
    fontColor: 'green',
    text: 'MIDDLE',
  });

// Circle in line
var doubleCircleInLine = new zeu.DoubleCircle(
  document.getElementById('double-circle-in-line'), {
    isDot: false,
    lineWidth: 10,
    outer: {
      color: 'red',
      radius: 90,
      speed: 0.5
    },
    inner: {
      color: 'blue',
      radius: 70,
      speed: 0.2
    },
    fontColor: 'green',
    text: 'MIDDLE',
  });
```

#### Heatbeat ([Example](https://shzlw.github.io/zeu/examples/heartbeat.html))

```html
<div id="heartbeat" style="width: 370px; height: 100px;"></div>
```
```javascript
var heartbeat = new zeu.Heartbeat(
  document.getElementById('heartbeat'), {
    lineColor: 'red',
    fontColor: 'grey'
  });

heartbeat.lineColor = 'blue';
heartbeat.fontColor = 'green';

// Start a beat
heartbeat.beat();

// Start a beat every one second
setInterval(function() {
  heartbeat.beat();
}, 1000);
```

#### Message Queue ([Example](https://shzlw.github.io/zeu/examples/message-queue.html))

```html
<div id="message-queue" style="width: 100px; height: 200px;"></div>
```
```javascript
var messageQueue = new zeu.MessageQueue(
  document.getElementById('message-queue'), {
    barWidth: 60,
    space: 20,
    barColor: 'red',
    maxQueueCapacity: 10
  });

messageQueue.barColor = '#008000';

// Push a message
messageQueue.push();

// Pop a message
messageQueue.pop();
```

#### Round Fan ([Example](https://shzlw.github.io/zeu/examples/round-fan.html))

```html
<div id="round-fan" style="width: 200px; height: 200px;"></div>
```
```javascript
var roundFan = new zeu.RoundFan(
  document.getElementById('round-fan'), {
    fanColor: 'blue',
    centerColor: 'blue',
    speed: 1
  });
roundFan.speed = 5;
roundFan.fanColor = 'red';
roundFan.centerColor = 'green';

// Turn off the fan
roundFan.off();

// Turn on the fan
roundFan.on();
```

#### Scroll Panel ([Example](https://shzlw.github.io/zeu/examples/scroll-panel.html))

```html
<div id="scroll-panel"></div>
```
```javascript
var scrollPanel1 = new zeu.ScrollPanel(
  document.getElementById('scroll-panel'), {
    isUp: true
  });

// Push a html element
var message = document.createElement('div');
message.innerHTML = 'value';
message.style.cssText = 'margin: 10px; padding: 10px; color: white; background-color: green;';
scrollPanel1.push(message);

// Push a simple text
var css = 'margin: 3px; padding: 3px; color: white; background-color: green;';
scrollPanel2.pushText('value', css);
```

#### Volume Meter ([Example](https://shzlw.github.io/zeu/examples/volume-meter.html))

```html
<div id="volume-meter" style="width: 100px; height: 200px;"></div>
```
```javascript
var volumeMeter = new zeu.VolumeMeter(
  document.getElementById('volume-meter'), {
    min: 0,
    max: 200,
    fillColor: 'green',
    fontColor: 'black',
    lineColor: 'black',
    lineWidth: 5
  });

volumeMeter.fillColor = 'red';
volumeMeter.fontColor = 'green';
volumeMeter.value = 100;
```

#### Warning Dialog ([Example](https://shzlw.github.io/zeu/examples/warning-dialog.html))

```javascript
var warningDialog = new zeu.WarningDialog({ 
  interval: 5000,
  reason: 'TEST'
});

warningDialog.reason = 'NEW WARNING MESSAGE';
warningDialog.interval = 2000;

// Display the dialog
warningDialog.blink();

// Hide the dialog
warningDialog.unblink();
```

## License

[MIT](http://opensource.org/licenses/MIT)