function setup(){
    createCanvas(600, 600);
    frameRate(100);
    r = random(255);
    g = random(255);
    b = random(255);
  }
  
  function draw(){
    background (50);
    
    let moveWidth = mouseY/1+15;
    let moveHeight = mouseX/1+15;
    let moveCorner = mouseX/1+2;
    //Draw a Face in Center
    fill(r,g,b);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, moveWidth, moveHeight, moveCorner);
    
    
    // Draw 2 eyes
    fill(50);
    // Make circle on the right side and responsive scale with Face
    ellipse(width/2 + moveWidth/3, height/2, moveWidth/8, moveHeight/8);
    
    fill(50);
    // Make circle on the left side and responsive scale with Face
    ellipse(width/2 - moveWidth/3, height/2, moveWidth/8, moveHeight/8);
    
    
    // Draw a mouth with random()
   let angle = 0.0;
   let c = random(0, 0.1);
    translate(width / 2, height / 2);
    rotate(c)
      arc(0, 100, moveWidth/15, moveHeight/15, 0, PI)
  }