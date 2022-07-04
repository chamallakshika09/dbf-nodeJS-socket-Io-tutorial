let socket;

function setup() {
  createCanvas(800, 800);
  background(51);

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
}

function newDrawing(data) {
  const { mouseX, mouseY } = data;
  noStroke();
  fill(255, 0, 100);
  ellipse(mouseX, mouseY, 36, 36);
}

function Draw() {
  // noStroke();
  // fill(255);
  // ellipse(mouseX, mouseY, 36, 36);
}

function mouseDragged() {
  const data = {
    mouseX,
    mouseY,
  };
  socket.emit('mouse', data);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);
}
