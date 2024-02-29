
let letFont;
let showText = 1;
let r1 = 180;
let g1 = 96;
let b1 = 5;
let r2 = 237;
let g2 = 231;
let b2 = 230;
let mouseXDelay = 0;
let mouseYDelay = 0;
let mouseXDelay2 = 0;
let mouseYDelay2 = 0;
let mouseXDelay3 = 0;
let mouseYDelay3 = 0;
let myFrameCount = 0;
let opacity = 0;
let fadeInSpeed = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(237, 231, 220);
  textAlign(CENTER);
  textSize(36);
  noCursor();
  noStroke();
  
   if (showText == 1) {
         if (opacity < 255) {
    opacity += fadeInSpeed;
  }
    drawRectangle();
      }
  

  // circles following the mouse
  fill(r1, g1, b1);
  circle(mouseX, mouseY, windowWidth / 96);

  mouseXDelay += 2 * (mouseX - mouseXDelay) * 0.15;
  mouseYDelay += 2 * (mouseY - mouseYDelay) * 0.15;
  stroke(r1, g1, b1);
  noFill();
  circle(mouseXDelay, mouseYDelay, windowWidth / 60);

  mouseXDelay2 += 2 * (mouseX - mouseXDelay2) * 0.08;
  mouseYDelay2 += 2 * (mouseY - mouseYDelay2) * 0.08;
  stroke(r1, g1, b1);
  noFill();
  circle(mouseXDelay2, mouseYDelay2, windowWidth / 45);

  mouseXDelay3 += 2 * (mouseX - mouseXDelay3) * 0.04;
  mouseYDelay3 += 2 * (mouseY - mouseYDelay3) * 0.04;
  stroke(r1, g1, b1);
  noFill();
  circle(mouseXDelay3, mouseYDelay3, windowWidth / 35);

  myFrameCount++;
}


function drawRectangle() {
  fill(213,198,175,opacity);
  noStroke();
  rect(0, 0, width, height / 9);
}