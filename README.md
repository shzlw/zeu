# Zeu.js

![Build Status](https://travis-ci.org/shzlw/zeu.svg?branch=master)

## Demo

[My Command Center](https://shzlw.github.io/zeu/examples/my-command-center.html)

## Installation

```html
<script src="zeu.js"></script>
```

## Usage

#### Base Div

Use a div as the base to create the component. Each component has its own recommended size.

```html
<div id="component-id" style="width: 200px; height: 100px;"></div>
```

#### Bar Meter

```javascript
var barMeter = new zeu.BarMeter(document.getElementById('component-id'),
{
  min: 0,
  max: 100,
  value: 80,
  dashColor: '#000',
  barColor: '#FF0000',
  speed: 10
});
```

[Example](https://shzlw.github.io/zeu/examples/bar-meter.html)

#### Blink Text

```javascript
var binkText = new zeu.BlinkText(document.getElementById('component-id'),
{
  interval: 300,
  blinkCss: 'color: white; background-color: blue;'
});
binkText.blink('BLINK TEXT');
```

[Example](https://shzlw.github.io/zeu/examples/blink-text.html)

#### Digital Clock

```javascript
var canvas = document.getElementById('canvas-id');
var digitalClock1 = new zeu.DigitalClcok(
  canvas,
  {
    dashColor: '#DCDCDC',
    barWidth: 8,
    barHeight : 30,
    space: 10
  }
);
digitalClock1.draw();
```

#### Volume Meter

[Example](https://shzlw.github.io/zeu/examples/volume-meter.html)

#### Round Fan

[Example](https://shzlw.github.io/zeu/examples/round-fan.html)

#### Heatbeat

[Example](https://shzlw.github.io/zeu/examples/heartbeat.html)

#### Scroll Panel

[Example](https://shzlw.github.io/zeu/examples/scroll-panel.html)

#### Blink Dialog

## License

[MIT](http://opensource.org/licenses/MIT)