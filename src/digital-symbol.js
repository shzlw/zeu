
export default class DigitalNumber {

  constructor(canvasCtx, barWidth, numberWidth, numberHeight, dashColor, numberColor) {
    this._ctx = canvasCtx;
    this._barWidth = barWidth;
    this._verBarHeight = (numberHeight - 3 * barWidth) / 2;
    this._horBarHeight = numberWidth - 2 * barWidth;
    this._dashColor = dashColor;
    this._numberColor = numberColor;
  }

  drawEmpty() {
    this._ctx.beginPath();
    this._ctx.fillStyle = this._dashColor;
    this._ctx.moveTo(0, 0);
    this.topLeft();
    this.bottomLeft();
    this.topRight();
    this.bottomRight();
    this.top();
    this.middle();
    this.bottom();
    this._ctx.closePath();
  }

  // Vertical: top left
  topLeft() {
    this._ctx.fillRect(0, this._barWidth, this._barWidth, this._verBarHeight);
  }

  // Vertical: bottom left
  bottomLeft() {
    this._ctx.fillRect(0, this._barWidth * 2 + this._verBarHeight, this._barWidth, this._verBarHeight);
  }

  // Vertial: top right
  topRight() {
    this._ctx.fillRect(this._barWidth + this._horBarHeight, this._barWidth, this._barWidth, this._verBarHeight);
  }

  // Vertial: bottom right
  bottomRight() {
    this._ctx.fillRect(this._barWidth + this._horBarHeight, this._barWidth * 2 + this._verBarHeight,
      this._barWidth, this._verBarHeight);
  }

  // Horizontal: top
  top() {
    this._ctx.fillRect(this._barWidth, 0, this._horBarHeight, this._barWidth);
  }
  // Horizontal: middle
  middle() {
    this._ctx.fillRect(this._barWidth, this._barWidth + this._verBarHeight, this._horBarHeight, this._barWidth);
  }

  // Horizontal: bottom
  bottom() {
    this._ctx.fillRect(this._barWidth, this._barWidth * 2 + this._verBarHeight * 2, this._horBarHeight, this._barWidth);
  }

  drawNumber(number) {
    this.drawEmpty();
    this._ctx.beginPath();
    this._ctx.fillStyle = this._numberColor;

    switch (number) {
      case 0:
        this.top();
        this.bottom();
        this.topLeft();
        this.topRight();
        this.bottomLeft();
        this.bottomRight();
        break;
      case 1:
        this.topRight();
        this.bottomRight();
        break;
      case 2:
        this.top();
        this.topRight();
        this.middle();
        this.bottomLeft();
        this.bottom();
        break;
      case 3:
        this.top();
        this.middle();
        this.bottom();
        this.topRight();
        this.bottomRight();
        break;
      case 4:
        this.middle();
        this.topLeft();
        this.topRight();
        this.bottomRight();
        break;
      case 5:
        this.top();
        this.middle();
        this.bottom();
        this.topLeft();
        this.bottomRight();
        break;
      case 6:
        this.top();
        this.middle();
        this.bottom();
        this.topLeft();
        this.bottomLeft();
        this.bottomRight();
        break;
      case 7:
        this.top();
        this.topRight();
        this.bottomRight();
        break;
      case 8:
        this.topLeft();
        this.bottomLeft();
        this.topRight();
        this.bottomRight();
        this.top();
        this.middle();
        this.bottom();
        break;
      case 9:
        this.top();
        this.middle();
        this.topLeft();
        this.topRight();
        this.bottomRight();
        break;
    }
    this._ctx.closePath();
  }
}
