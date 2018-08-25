# Zeu.js

![Build Status](https://travis-ci.org/shzlw/zeu.svg?branch=master)

Zeu.js is JavaScript library featuring a collection of prebuilt visualization components for building real-time TV dashboard, monitoring UI and IoT web interface.

## Quick Start

```html
<!-- Include zeu.js. -->
<script src="zeu.min.js"></script>
<!-- Create a canvas. -->
<canvas id="text-meter" width="200" height="100"></canvas>
<script>
  // Create a Zeu component.
  var textMeter = new zeu.TextMeter('text-meter');
  // Update values.
  textMeter.displayValue = 'ZEU';
  textMeter.value = 50;
</script>
```

## v1.0.0-rc1

![Components](https://github.com/shzlw/zeu/blob/master/examples/components.v1.0.0.gif)

## Installation

Build from source
```
npm run build
```

From dist
```html
<script src="zeu.min.js"></script>
```

## Documentation

[Introduction](https://shzlw.github.io/zeu/docs/introduction.html)

## v0.9.4

The previous release can be found at [v0.9.4](https://github.com/shzlw/zeu/tree/v0.9.4)

![My Command Center](https://github.com/shzlw/zeu/blob/master/examples/my-command-center.v0.9.1.gif)

[My Command Center](https://shzlw.github.io/zeu/examples/my-command-center.html)

## License

[MIT](http://opensource.org/licenses/MIT)