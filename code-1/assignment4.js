// Create a deep rabbit hole that moving

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
  }
  
  function draw() {
    background('black');
    noStroke();
    
    // Center the circle
    translate(width/2, height/2);
    
    // Change speed
    rotate(frameCount / 2);
        
     for (let i = 0; i < 80; ++i) {
      push();
      fill(255);
      stroke(1);
      rotate(360 /80 * i);
      translate(width / 2, 0);
      ellipse(0, 0, 300, 300);
      pop();     
    } 
  }