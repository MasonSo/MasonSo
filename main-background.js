let font;
let showText = 0;
let r1 = 180;
let g1 = 96;
let b1 = 5;

function toggleText() {
  var textContainer = document.getElementById("textContainer");
  textContainer.classList.toggle("hidden");
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
  if (showText = 0) {
    fill(180, 96, 5);
    circle(windowWidth / 2, windowHeight / 2, windowWidth / 12);
  }
  
  // Draw second circle
  if (showText = 0) {
    fill(237, 231, 230);
    circle(windowWidth / 2, windowHeight / 2, windowWidth / 12.8);
  }
  
  // Draw third circle following the mouse
  fill(r1, g1, b1);
  circle(mouseX, mouseY, windowWidth / 64);

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
  } else {
    r1 = 180;
    g1 = 96;
    b1 = 5;
  }
}

function mousePressed() {
  // Check if the mouse is over the second circle
  let d = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
  if (d < windowWidth / 25.6) {
    showText = !showText; // Toggle the boolean value
  }
}

