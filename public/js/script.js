class GameManager {
  constructor() {
    this.setup = this.setup.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.mainLoop = this.mainLoop.bind(this);
  }

  setup() {

  }

  update() {

  }

  render() {
    // Render background
    Graphics.drawRect(0, 0, canvas.width, canvas.height, 'black');
  }

  mainLoop() {
    this.update();
    this.render();
  }
}

const gm = new GameManager();

class Graphics {
  static drawLine(startX, startY, endX, endY, color) {
    canvasContext.strokeStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(startX, startY);
    canvasContext.lineTo(endX, endY);
    canvasContext.stroke();
  }

  static drawRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
  }

  static drawCircle(centerX, centerY, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
  }

  static drawText(string, x, y, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillText(string, x, y);
  }
}

const canvas = document.getElementById('GameCanvas');
const canvasContext = canvas.getContext('2d');

window.onload = () => {
  const FPS = 60;

  gm.setup();
  setInterval(gm.mainLoop, 1000/FPS);
}


class Player {

}
