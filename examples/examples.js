
function getRandomColor() {
  return '#' + ((1 << 24) * Math.random() | 0).toString(16);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var COLOR = {
  lightGreen: '#00d7af',
  lightGrey: '#F8F8FF',
  lightBlack: '#343a42',
  black: '#000000',
  white: '#ffffff',
  red: '#dc3547',
  blue: '#007bfb',
  yellow: '#ffc108',
  cyan: '#17a2b9',
  grey: '#6c757e',
  green: '#28a748'
};