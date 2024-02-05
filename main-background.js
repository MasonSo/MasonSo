let font;
let showText = 0;
let r1 = 180;
let g1 = 96;
let b1 = 5;
let r2 = 237;
let g2 = 231;
let b2 = 230;

function toggleText() {
  var textContainer = document.getElementById("textContainer");
  textContainer.classList.toggle("visible");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(237, 231, 230);
  textAlign(CENTER);
  textSize(36);
  noCursor();
  noStroke();

  // Draw first circle
  if (showText == 0) {
    fill(180, 96, 5);
    circle(windowWidth / 2, windowHeight / 2, windowWidth / 12);
  }

  // Draw second circle
  if (showText == 0) {
    fill(r2, g2, b2);
    circle(windowWidth / 2, windowHeight / 2, windowWidth / 12.8);
  }

  // Draw third circle following the mouse
  fill(r1, g1, b1);
  circle(mouseX, mouseY, windowWidth / 96);

  // Show text if the second circle is pressed
  // if (showText) {
  //   fill(180, 96, 5);
  //   text("mason so", windowWidth / 2, windowHeight / 2);
  // }

  // Change color of third circle when mouse is over the second circle
  let d = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
  if (d < windowWidth / 25.6) {
    r1 = 17;
    g1 = 22;
    b1 = 44;
    r2 = 180;
    g2 = 96;
    b2 = 5;
  } else {
    r1 = 180;
    g1 = 96;
    b1 = 5;
    r2 = 237;
    g2 = 231;
    b2 = 230;
  }
}

function mousePressed() {
  // Check if the mouse is over the second circle
  let d = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
  if (d < windowWidth / 25.6) {
    showText = 1; // Toggle the boolean value
  }
}
