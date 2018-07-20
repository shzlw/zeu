
function getRandomColor() {
  return '#' + ((1 << 24) * Math.random() | 0).toString(16);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}