
export default class BlinkDialog {

  constructor() {
    let d = document.createElement('div');

    let dialogCss = `
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      border: 30px solid #dc3545;
      box-sizing: border-box;
      background-size: 100px 100px;
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

    d.style.cssText = dialogCss;

    let panel = document.createElement('div');
    let panelCss = `
      width: 300px;
      height: 200px;
      position: relative;
      top: 50%;
      left: 50%;
      margin-top: -120px; 
      margin-left: -170px;
      border: 10px dashed black;
      background-color: white;
      text-align: center;
      padding: 10px;
    `;

    panel.style.cssText = panelCss;

    let warning = document.createElement('div');

    warning.innerHTML = 'WARNING';
    warning.style.cssText = 'height: 50px; border: 10px solid #dc3545;';

    this._reason = document.createElement('div');
    this._reason.innerHTML = this._reasonText;
    this._reason.style.cssText = '';

    panel.appendChild(warning);
    panel.appendChild(this._reason);

    d.appendChild(panel);

    this._dialog = d;
    // Append dialog div to body
    let body = document.body || document.getElementsByTagName('body')[0];

    body.appendChild(this._dialog);

    // Append style to head
    let zeuPole = `
    @keyframes zeu-pole {
      from { background-position: 0 0; }
      to { background-position: 200px 100px; }
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

  blink(message) {
    if (message != null) {
      this._dialog.innerHTML = message;
    }

    this._dialog.style.display = 'block';

    if (this._blinkTimer == null) {
      this._blinkTimer = setInterval(() => {
        if (this._dialog.style.display !== 'block') {
          this._dialog.style.display = 'block';
        } else {
          this._dialog.style.display = 'none';
        }
      }, 10000000);
    }
  }

  unblink() {
    this._dialog.style.display = 'none';
    if (this._blinkTimer != null) {
      clearInterval(this._blinkTimer);
      this._blinkTimer = null;
    }
  }
}
