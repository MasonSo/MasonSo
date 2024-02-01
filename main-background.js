function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(237, 231, 230);

  noCursor();
  // Draw first circle
  noStroke();
  fill(180, 96, 5);
  circle(windowWidth / 2, windowHeight / 2, windowWidth / 12);
  
  // Draw second circle
  fill(237, 231, 230);
  circle(windowWidth / 2, windowHeight / 2, windowWidth / 12.8);
  
  // Draw third circle following the mouse
  fill(180, 96, 5);
  circle(mouseX, mouseY,windowWidth / 64);
}
