# Zeu.js

![Build Status](https://travis-ci.org/shzlw/zeu.svg?branch=master)

Zeu.js is JavaScript library featuring a collection of prebuilt visualization components for building real-time TV dashboard, monitoring UI and IoT web interface.

## Installation

From dist
```html
<script src="zeu.min.js"></script>
```

## Quick Start

Let's build our first Zeu component!

```html
<!-- Include zeu.js. -->
<script src="zeu.min.js"></script>
<!-- Create a canvas. -->
<canvas id="text-meter" width="200" height="100"></canvas>
<script>
  // Create a Zeu TextMeter.
  var textMeter = new zeu.TextMeter('text-meter');
  // Update display and percentage value.
  textMeter.displayValue = 'ZEU';
  textMeter.value = 50;
</script>
```

![text-meter](https://github.com/shzlw/zeu/blob/master/examples/text-meter.gif)

Done! Explore the [Introduction](https://shzlw.github.io/zeu/docs/introduction.html) page to get started.

## v1.0.0

![Components](https://github.com/shzlw/zeu/blob/master/examples/my-command-center.v1.0.0.gif)

[My Command Center](https://shzlw.github.io/zeu/examples/my-command-center.html)

## [Documentation](https://shzlw.github.io/zeu/docs/introduction.html)

## Build

From source
```
npm run build
```

## v0.9.4

The previous release can be found at [v0.9.4](https://github.com/shzlw/zeu/tree/v0.9.4)

## License

[MIT](http://opensource.org/licenses/MIT)