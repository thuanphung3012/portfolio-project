let width = 800;
let height = 600;
var circles = [];

function setup() {
  createCanvas(width, height);

  // Array how many circles
  for (var i = 0; i < 60; i++) {	// i = number of circles 
    var x = random(width);
    var y = random(height/3);
    var d = random(5,30);
    var c = color(255);
    var s = random(0.4, 2);
  	circles[i] = new DrawCircle(x, y, d, c, s);
  }
} 


function draw() {
  background(51);
  for (var i = 0; i < circles.length; i++) {
  	circles[i].move();
    circles[i].display();
  }
  
  // keep the number of circles on the canvas under 60
  if (circles.length > 60) {
  	circles.shift();
  }
  
 // create snowman 
  fill(255);
  noStroke();
  ellipse(width/2, 450, 200 ,200);
  ellipse(width/2, 325, 150 ,150);
  ellipse(width/2, 225, 120 ,120);
  strokeWeight(0);
  
  push()
  fill(0);
  ellipse(width/2-20, 225, 15, 15);
  ellipse(width/2+20, 225, 15, 15);
  x = map(mouseX, 300, 600, 378, 385, true);
  x1 = map(mouseX, 300, 600, 418, 425, true);
  y = map(mouseY, 300, 600, 223, 227, true);
  y1 = map(mouseY, 300, 600, 223, 227, true);
  fill(255)
  ellipse(x, y, 10, 10);
  ellipse(x1 , y1, 10, 10);
  color(255);
  pop()
  
//hat
  fill(0);
  rect(width/2-35, 77, 70, 100);
  ellipse(width/2, 180, 150, 10);

//mouth and button
  fill(0);
  ellipse(width/2-23,264,7);
  ellipse(width/2-12,268,7);
  ellipse(width/2,270,7);
  ellipse(width/2+23,264,7);
  ellipse(width/2+12,268,7);
  ellipse(400, 340, 10);
  ellipse(400, 370, 10);
  ellipse(400, 400, 10);

//carrot
  fill(255, 165, 0);
  triangle(350, 245, 404, 245, 412, 255);
  

//arms
  stroke(139, 69, 19);
  strokeWeight(5);
  line(340, 300, 250, 275);
  line(560, 275, 450, 300);
  
  
//scarf
  strokeWeight(0);
  fill(0, 0, 255);
  rect(340,275, 120, 15);
  stroke(0, 0, 255);
  strokeWeight(20);
  line(380,290,350,320);
}



function DrawCircle( x, y, d, c, s ) {
  // declare the properties
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
  this.color = c;
  this.speed = s;
}

DrawCircle.prototype = {
	constructor: DrawCircle,
  // display the circle on the canvas 
  display: function() {
    fill(this.color);
    noStroke();
    ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
    
  },
  
  // *** move the circle downwards ***
  move: function() {

		this.yPos += this.speed;
    // the circle is outside the canvas, retset its position at the top
    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
    }
	}
}