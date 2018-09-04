import BaseComponent from './base-component';
import Utility from './utility';
import { COLOR } from './color';

export default class NetworkGraph extends BaseComponent {

  constructor(canvas, options = {}) {
    const viewWidth = options.viewWidth || 200;
    const viewHeight = options.viewHeight || 200;

    super(canvas, options, viewWidth, viewHeight);

    this._signalQueues = [];
  }

  setOptions(options = {}) {
    this._nodes = options.nodes || [];
  }

  drawObject() {
    this.clear();
    this.save();

    // Draw edges
    this._nodes.forEach((node) => {
      // Neighbors
      const neighbors = node.neighbors || [];

      neighbors.forEach((neighbor) => {
        const destNode = this.getNodeById(neighbor.id);
        // Edge options
        const edge = neighbor.edge || {};
        const edgeWidth = edge.width || 1;
        const edgeColor = edge.color || COLOR.grey;
        const edgeDash = edge.dash || [];

        // Draw the neighbor and edge
        this._ctx.lineWidth = edgeWidth;
        this._ctx.strokeStyle = edgeColor;

        if (destNode !== null) {
          this._ctx.beginPath();
          if (edgeDash.length !== 0) {
            this._ctx.setLineDash(edgeDash);
          }
          this._ctx.moveTo(node.x, node.y);
          this._ctx.lineTo(destNode.x, destNode.y);
          this._ctx.stroke();
          this._ctx.closePath();
        }
      });
    });

    // Draw moving signals
    let toDelete = [];

    for (let i = 0; i < this._signalQueues.length; i++) {
      const signal = this._signalQueues[i];

      this._signalQueues[i].x = Utility.getNextPos(signal.x, signal.destX, signal.speedX);
      this._signalQueues[i].y = Utility.getNextPos(signal.y, signal.destY, signal.speedY);

      if (signal.x === signal.destX && signal.y === signal.destY) {
        // Append to the deletion queue.
        toDelete.push(i);
      } else {
        this._shape.fillCircle(signal.x, signal.y, signal.size, signal.color);
      }
    }

    // Delete from the signal queue
    for (let i = toDelete.length - 1; i >= 0; i--) {
      this._signalQueues.splice(toDelete[i], 1);
    }

    // Draw nodes
    this._nodes.forEach((node) => {
      const text = node.text || {};
      const textValue = text.value || '';
      const textColor = text.color || COLOR.black;
      const textFont = text.font || '12px Arial';
      const xTextOffset = text.xOffset || 0;
      const yTextOffset = text.yOffset || 0;

      // Draw the node and text
      this._shape.fillCircle(node.x, node.y, node.size, node.color);
      this._shape.fillText(textValue, node.x + xTextOffset, node.y + yTextOffset, textFont, 'center', textColor);
    });

    this._ctx.restore();
  }

  getNodeById(nodeId) {
    return this._nodes.find(n => n.id === nodeId);
  }

  /**
   * Add nodes
   * @param {array} nodes
   */
  addNodes(nodes = []) {
    this._nodes.push(...nodes);
  }

  /**
   * Add a neighbor to a node
   * @param {string} from
   * @param {object} neighbor
   */
  addNeighbor(from, neighbor = {}) {
    for (let i = 0; i < this._nodes.length; i++) {
      if (this._nodes[i].id === from) {
        this._nodes[i].neighbors = this._nodes[i].neighbors || [];
        this._nodes[i].neighbors.push(neighbor);
        break;
      }
    }
  }

  /**
   * Send a signal from source node to destination node
   * @param {object} params
   * @property {string} params.from
   * @property {string} params.to
   * @property {string} params.color
   * @property {number} params.duration
   * @property {number} params.size
   */
  signal(params = {}) {
    const color = params.color || COLOR.black;
    const duration = params.duration || 2000;
    const size = params.size || 3;

    const srcNode = this.getNodeById(params.from);
    const destNode = this.getNodeById(params.to);

    const sX = Math.abs(destNode.x - srcNode.x) / (duration / 60);
    const sY = Math.abs(destNode.y - srcNode.y) / (duration / 60);
    const speedX = destNode.x > srcNode.x ? sX : -sX;
    const speedY = destNode.y > srcNode.y ? sY : -sY;

    this._signalQueues.push({
      x: srcNode.x,
      y: srcNode.y,
      destX: destNode.x,
      destY: destNode.y,
      speedX: speedX,
      speedY: speedY,
      color: color,
      size: size
    });
  }

  get nodes() {
    return this._nodes;
  }
}

