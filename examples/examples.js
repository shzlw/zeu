
function getRandomColor() {
  return '#' + ((1 << 24) * Math.random() | 0).toString(16);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var red = '#ff000';
var green = '#008000';
var blue = '#0000ff';
var grey = '#c0c0c0';
var white = '#fff';
var black = '#000';