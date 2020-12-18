// Create a new canvas to the browser size
function setup () {
    createCanvas(600, 800);
    obstacle = new Obstacle();
    obstacle2 = new Obstacle2();
    floatrect = new Floatrect();
    frameRate(90);
    
   
  }
  
  // On window resize, update the canvas size
  function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  
  var obstacle;
  var obstacle2;
  var floatrect;
  
  
  function draw() {
    background('#ECDDBE');
    
    let lines = 'B\nA\nU\nH\nA\nU\nS'; // "\n" is a "new line" character
    textSize(50);
    textLeading(50);
    textStyle(BOLD);
    text(lines, 530, 80);
    
    textSize(30);
    textStyle(BOLD);
    fill(0);
    strokeWeight(0);
    text('JULY 23, 1923', 360, 670);
    
    textSize(30);
    textStyle(BOLD);
    fill(0);
    strokeWeight(0);
    text('EXHIBITION', 390, 570);
    // For consistent sizing regardless of portrait/landscape
    const dim = Math.min(width, height);
    
   
    
    
    // Stroke only with a specific join style and thickness
    fill('#F1BB00');
    stroke(255);
    strokeWeight(0);
  
    // Get time in seconds
    const time = millis() / 1000;
    
    // Loop duration
    const duration = 4;
  
    // Get a 'playhead' from 0..1
    // We use modulo to keep it within 0..1
    const playhead = time / duration % 1;
  
    // A "start" position as XY coordinate
    const start = [ width * 0.25, height / 4 ];
    
    // An "end" position as XY coordinate
    const end = [ width * 0.53, height / 4 ];
    
    // Get a value that goes from -1..1 based on playhead
    // We use 2PI to create a seamless loop
    let t0 = sin(playhead * PI * 2);
    
    // Now we map the -1..1 to 0..1 values
    t0 = t0 * 0.5 + 0.5;
  
    // Now interpolate X and Y positions separately from
    // 'start' to 'end' coordinates
    const x = lerp(start[0], end[0], t0);
    const y = lerp(start[1], end[1], t0);
  
    // As an exercise, you could also try animating the
    // circle radius and stroke weight
    const r = dim * 0.5;
    ellipse(x, y, r, r);
    
    obstacle.display();
    obstacle.update();
    obstacle2.display();
    obstacle2.update();
    floatrect.display();
    floatrect.update();
  }
  
  function Obstacle() {
    this.x = 50;
    this.y = height/2;
    this.w = 20;
    this.h = 650;
  
    this.display = function() {
      fill(0);
      noStroke();
      rect(this.x, this.y, this.w, this.h);
    }
    
    
    this.update = function() {
      this.y++;
      
      if (this.y > height + this.w /2) {
         this.y = -this.w;
      }
    }
  }
  
  function Obstacle2() {
    this.x = 30;
    this.y = height/2;
    this.w = 350;
    this.h = 20;
  
    this.display = function() {
      fill('#0066BB');
      noStroke();
      rect(this.x, this.y, this.w, this.h);
      fill(0);
      rect(this.x , this.y + 200, this.w + 150, this.h);
    }
    
    
    this.update = function() {
      this.x++;
      
      if (this.x > height + this.w /2) {
         this.x = -this.w;
      }
    }
  }
  
  function Floatrect() {
    this.x = 30;
    this.y = height/2;
    this.w = 220;
    this.h = 120;
  
    this.display = function() {
      fill('#C1322C');
      noStroke();
      rect(this.x, this.y, this.w, this.h);
    }
    
    
    this.update = function() {
      this.y--;
      
      if (this.y < height - 801) {
         this.y = 1 + height;
      }
    }
  }
  
  
  
  
  
  