let font;
let showText = 0;
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

function toggleText() {
  var textContainer = document.getElementById("textContainer");
  textContainer.classList.toggle("visible");
  var textContainer1 = document.getElementById("textContainer1");
 setTimeout(function() {
        textContainer1.classList.toggle("visible1");
    }, 1000);
    var textContainer2 = document.getElementById("textContainer2");
 setTimeout(function() {
        textContainer2.classList.toggle("visible2");
    }, 1000);
   var textContainer3 = document.getElementById("textContainer3");
 setTimeout(function() {
        textContainer3.classList.toggle("visible3");
    }, 1000);
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(237,231,220);
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

    mouseXDelay += (mouseX - mouseXDelay) * 0.3;
  mouseYDelay += (mouseY - mouseYDelay) * 0.3;
  stroke(r1, g1, b1);
  noFill();
  circle(mouseXDelay, mouseYDelay, windowWidth / 60);
  
    mouseXDelay2 += (mouseX - mouseXDelay2) * 0.15;
  mouseYDelay2 += (mouseY - mouseYDelay2) * 0.15;
  stroke(r1, g1, b1);
  noFill();
  circle(mouseXDelay2, mouseYDelay2, windowWidth / 45);
  
      mouseXDelay3 += (mouseX - mouseXDelay3) * 0.08;
  mouseYDelay3 += (mouseY - mouseYDelay3) * 0.08;
  stroke(r1, g1, b1);
  noFill();
  circle(mouseXDelay3, mouseYDelay3, windowWidth / 35);
  
  let d = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
  if (d < windowWidth / 25.6) {
    r1 = 88;
    g1 = 107;
    b1 = 164;
    r2 = 180;
    g2 = 96;
    b2 = 5;
  } else {
    r1 = 180;
    g1 = 96;
    b1 = 5;
    r2 = 237;
    g2 = 231;
    b2 = 220;
  }
}

function mousePressed() {
  // Check if the mouse is over the second circle
  let d = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
  if (d < windowWidth / 25.6) {
    showText = 1; // Toggle the boolean value
  }
}
