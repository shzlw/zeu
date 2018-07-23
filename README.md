# Zeu.js

![Build Status](https://travis-ci.org/shzlw/zeu.svg?branch=master)

Zeu.js is JavaScript library featuring a collection of prebuilt visualization components for building real-time TV dashboard, monitoring UI and IoT web interface.

## Demo

[My Command Center](https://shzlw.github.io/zeu/examples/my-command-center.html)

## Installation

```html
<script src="zeu.min.js"></script>
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

#### Bar Meter

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

[Example](https://shzlw.github.io/zeu/examples/bar-meter.html)

#### Blink Text

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

[Example](https://shzlw.github.io/zeu/examples/blink-text.html)

#### Digital Clock

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

[Example](https://shzlw.github.io/zeu/examples/digital-clock.html)

#### Double Circle

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
var doubleCircle2 = new zeu.DoubleCircle(
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

[Example](https://shzlw.github.io/zeu/examples/double-circle.html)

#### Heatbeat

```javascript
var heartbeat = new zeu.Heartbeat(
  document.getElementById('component-id'), {
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

[Example](https://shzlw.github.io/zeu/examples/heartbeat.html)

#### Message Queue

```javascript
```

[Example](https://shzlw.github.io/zeu/examples/message-queue.html)

#### Round Fan

```javascript
```

[Example](https://shzlw.github.io/zeu/examples/round-fan.html)

#### Scroll Panel

```javascript
```

[Example](https://shzlw.github.io/zeu/examples/scroll-panel.html)

#### Volume Meter

```javascript
```

[Example](https://shzlw.github.io/zeu/examples/volume-meter.html)

#### Warning Dialog

```javascript
```

[Example](https://shzlw.github.io/zeu/examples/warning-dialog.html)

## License

[MIT](http://opensource.org/licenses/MIT)