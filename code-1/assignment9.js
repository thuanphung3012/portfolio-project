//Mouse click to see the art

const rectangles = [];
let img;
var bgColor;

// Create a new canvas to the browser size
  function setup() {
    createCanvas(600, 800);
    background('#CDC4B8');
  
  // Disable loop 
    noLoop();
}

// On window resize, update the canvas size
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

  function draw() {
    rectMode(CENTER);
    fill('#D8D6D6');
    stroke(255);
    strokeWeight(1);
    rect(300, 275, 500, 500);
    stroke(0);
    strokeWeight(5);
    textSize(82);
    fill('#FBCF33');
    strokeWeight(0);
    text('MONDRIAAN', 50, 650);
    textSize(30);
    textStyle(BOLD);
    fill('#ED3521');
    strokeWeight(0);
    text('HAAGS GEMEENTE MUSEUM', 90, 700);
}

function mousePressed() {
  r = random(254, 255); // random number between 0 - 255
  g = random(0, 255); // random number betwen 100 - 200
  b = random(100); // random number between 0 - 100
  a = random(200, 255); // random number between 200 - 255

  // Create a quanity of rectangles
    const rectangleCount = 10;
    for (let i = 0; i < rectangleCount; i++) {
    // Randomly place some rectangles within -1..1 space
    const shrink = 0.5;
    const position = [
      random(-1, 1) * shrink,
      random(-1, 1) * shrink
    ];
    const color = fill(r, g, b,a);
    // Scale, sizing and random color
    const scale = random(0.5, 1.5);
    const size = [
      random(0.25, 1.5) * scale,
      random(0.5, 1.5) * scale
    ];
    rectangles.push({
      position,
      size,
      color,
    });
  }
  
  // Style 
    strokeJoin(MITER);
    rectMode(CENTER);

    stroke(0);

  // Sorting the size to hold rectangles inside the square
    const minDim = Math.min(width, height);

  // Draw each rect
    rectangles.forEach(rectangle => {
    const {
      position,
      size,
    } = rectangle;

  // Position arange from -1..1
    let [x, y] = position;
    let [w, h] = size;

    // Map -1..1 to screen pixels
    // Push
    push();

    // Translate 
    translate(width / 2, height / 3);

    // And scale the context by quarter the size of the screen
    scale(minDim / 4, minDim / 4);

    // The stroke weight is specified in 0..1 normalized space
    strokeWeight(0.05);

    // Draw the rectangle
    rect(x, y, w, h);

    // Restore the transform for the next rectangle
    pop();
  });
}