
export default class BlinkDialog {

  constructor() {
    let d = document.createElement('div');

    d.style.width = '100%';
    d.style.height = '100%';
    d.style.position = 'absolute';
    d.style.top = 0;
    d.style.left = 0;
    d.style.zIndex = 100;
    d.style.display = 'none';
    d.style.backgroundColor = '#181818';
    d.style.opacity = 0.5;
    d.innerHTML = 'test';

    this._dialog = d;
    document.getElementsByTagName('body')[0].appendChild(this._dialog);
  }

  blink(message) {
    this._dialog.innerHTML = message;
    this._dialog.style.display = 'block';

    if (this._blinkTimer == null) {
      this._blinkTimer = setInterval(() => {
        if (this._dialog.style.display !== 'block') {
          this._dialog.style.display = 'block';
        } else {
          this._dialog.style.display = 'none';
        }
      }, 1000);
    }
  }

  unblink() {
    this._dialog.style.display = 'none';
    if (this._blinkTimer != null) {
      clearInterval(this._blinkTimer);
    }
  }
}
