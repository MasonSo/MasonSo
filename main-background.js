function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(237, 231, 230);
  let secondCircleRadius = windowWidth / 16.8;
  let thirdCircleRadius = windowWidth / 64;
  let boundaryDistance = 2.5;
  let yOffset = windowHeight / 16; // Amount to move down
  
  fill(180, 96, 5);
  circle(windowWidth / 2, windowHeight / 16 + yOffset, secondCircleRadius + windowWidth / 24);
  
  fill(237, 231, 230);
  circle(windowWidth / 2, windowHeight / 16 + yOffset, secondCircleRadius - windowWidth / 6.4);
  
  let distance = dist(windowWidth / 2, windowHeight / 16 + yOffset, mouseX, mouseY);
  let maxAllowedDistance = secondCircleRadius - thirdCircleRadius - boundaryDistance;
  
  if (distance <= maxAllowedDistance) {
    noStroke();
    fill(180, 96, 5);
    // Centering the circle
    circle(mouseX, mouseY, thirdCircleRadius);
  } else {
    let angle = atan2(mouseY - (windowHeight / 16 + yOffset), mouseX - windowWidth / 2);
    let maxX = windowWidth / 2 + maxAllowedDistance * cos(angle);
    let maxY = (windowHeight / 16 + yOffset) + maxAllowedDistance * sin(angle);
    
    noStroke();
    fill(180, 96, 5);
    // Centering the circle
    circle(maxX, maxY, thirdCircleRadius);
  }
}
