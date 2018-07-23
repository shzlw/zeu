import Utility from './utility';

export default class WarningDialog {

  constructor(options) {
    this._reasonText = Utility.has(options, 'reason') ? options.reason : '';
    this._interval = Utility.has(options, 'interval') ? options.interval : 1000;

    // Dialog
    let dailog = document.createElement('div');

    dailog.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      display: none;
      background-color: rgb(220, 53, 69, 0.8);
    `;

    let panel = document.createElement('div');

    panel.style.cssText = `
      width: 600px;
      height: 400px;
      position: relative;
      top: 50%;
      left: 50%;
      margin-top: -200px; 
      margin-left: -300px;
      text-align: center;
      padding: 20px;
      border: 20px solid #dc3545;
      box-sizing: border-box;
      background-size: 80px 80px;
      background-image: linear-gradient(
        45deg, 
        #dc3545 25%, 
        #ffc107 25%, 
        #ffc107 50%, 
        #dc3545 50%, 
        #dc3545 75%, 
        #ffc107 75%, 
        #ffc107);
      animation: zeu-pole 1s linear infinite;
    `;

    let innerPanel = document.createElement('div');

    innerPanel.style.cssText = `
      margin: 0 auto;
    `;
    let warning = document.createElement('div');

    warning.innerHTML = 'WARNING';
    warning.style.cssText = `
      height: 100px; 
      background-color: #dc3545;
      line-height: 100px;
      font-size: 50px;
      font-weight: bold;
      color: #fff;
    `;

    this._reason = document.createElement('div');
    this._reason.innerHTML = this._reasonText;
    this._reason.style.cssText = `
      height: 180px;
      background-color: rgb(220, 53, 69, 0.9);
      font-size: 30px;
      color: #fff;
      padding: 10px;
      border-left: 20px solid #dc3545;
      border-right: 20px solid #dc3545;
      border-bottom: 20px solid #dc3545;
    `;

    innerPanel.appendChild(warning);
    innerPanel.appendChild(this._reason);

    panel.appendChild(innerPanel);

    dailog.appendChild(panel);

    this._dialog = dailog;

    // Append dialog div to body
    let body = document.body || document.getElementsByTagName('body')[0];

    body.appendChild(this._dialog);

    // Append style to head
    let zeuPole = `
    @keyframes zeu-pole {
      from { background-position: 0 0; }
      to { background-position: 160px 80px; }
    }
    `;

    let head = document.head || document.getElementsByTagName('head')[0];

    let style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = zeuPole;
    } else {
      style.appendChild(document.createTextNode(zeuPole));
    }

    head.appendChild(style);

    this._blinkTimer = null;
  }

  blink() {
    this._dialog.style.display = 'block';

    if (this._blinkTimer == null) {
      this._blinkTimer = setInterval(() => {
        if (this._dialog.style.display !== 'block') {
          this._dialog.style.display = 'block';
        } else {
          this._dialog.style.display = 'none';
        }
      }, this._interval);
    }
  }

  unblink() {
    this._dialog.style.display = 'none';
    if (this._blinkTimer != null) {
      clearInterval(this._blinkTimer);
      this._blinkTimer = null;
    }
  }

  set reason(reason) {
    this._reasonText = reason;
    this._reason.innerHTML = this._reasonText;
  }

  get reason() {
    return this._reason;
  }

  set interval(interval) {
    this._interval = interval;
    if (this._blinkTimer != null) {
      this.unblink();
      this.blink();
    }
  }

  get interval() {
    return this._interval;
  }
}
