# Zeu.js

![Travis CI](https://travis-ci.org/shzlw/zeu.svg?branch=master)

[Demo](https://shzlw.github.io/zeu/examples/demo.html)

## Installation

## Usage

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

#### Round Fan

[Examples](https://shzlw.github.io/zeu/examples/examples.html)

## License

[MIT](http://opensource.org/licenses/MIT)