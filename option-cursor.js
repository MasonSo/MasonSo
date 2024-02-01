   const MAX_TRAIL_COUNT = 20;

var colorScheme = ["#EDE7DC", "#D5C6AF", "#B46005", "#586BA4", "#11162C"];
var trail = [];
var particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight * 10);
	canvas.canvas.oncontextmenu = () => false;  // Removes right-click menu.
	noCursor();
   
}

function draw() {
   clear();
    blendMode(BLEND);
   background(0,0,0,0);
  blendMode(SCREEN);

    


  
	
	// Trim end of trail.
	trail.push([mouseX, mouseY]);
	
	let removeCount = 1;
	if (mouseIsPressed && mouseButton == CENTER) {
		removeCount++;
	}
	
	for (let i = 0; i < removeCount; i++) {
		if (trail.length == 0) {
			break;
		}
		
		if (mouseIsPressed || trail.length > MAX_TRAIL_COUNT) {
			trail.splice(0, 1);
		}
	}
	
	// Spawn particles.
	if (trail.length > 1) {
		let mouse = new p5.Vector(mouseX, mouseY);
		mouse.sub(pmouseX, pmouseY);
		if (mouse.mag() > 5) {
			mouse.normalize();
			for (let i = 0; i < 3; i++) {
				particles.push(new Particle(pmouseX, pmouseY, mouse.x, mouse.y));
			}
		}
	}
	
	// Move and kill particles.
	for (let i = particles.length - 1; i > -1; i--) {
		particles[i].move();
		if (particles[i].vel.mag() < .1) {
			particles.splice(i, 1);
		}
	}
	
	// Draw trail.
	drawingContext.shadowColor = color(17,22,100);

	for (let i = 0; i < trail.length; i++) {
		let mass = i * .5;
		drawingContext.shadowBlur = mass;

		stroke(0);
		strokeWeight(mass);
		point(trail[i][0], trail[i][1]);
	}
	
	// Draw particles.
	for (let i = 0; i < particles.length; i++) {
		let p = particles[i];
		let mass = p.mass * p.vel.mag() * 0.5;

		drawingContext.shadowColor = color(colorScheme[p.colorIndex]);
		drawingContext.shadowBlur = mass;

		stroke(0);
		strokeWeight(mass);
		point(p.pos.x, p.pos.y);

		stroke(255);
		strokeWeight(mass * 0.05);
		point(p.pos.x, p.pos.y);
	}
}

function Particle(x, y, vx, vy) {
	
	this.pos = new p5.Vector(x, y);
	this.vel = new p5.Vector(vx, vy);
	this.vel.mult(random(5));
	this.vel.rotate(radians(random(-25, 25)));
	this.mass = random(1, 2);
	this.airDrag = random(0.92, 0.98);
	this.colorIndex = int(random(colorScheme.length));
	this.life = 0;
	this.lifeSteps = random(-1, 1);
	
	this.move = function() {
		this.pos.rotate(radians(this.life * 0.02));
		this.vel.mult(this.airDrag);
		this.pos.add(this.vel);
		this.life += this.lifeSteps;
	}
}