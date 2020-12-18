let fontsize = 40;
let c = [255,255,255];
let b= [0,0,0];

function setup() {
createCanvas(600, 600);
background(255);
textSize(fontsize);
textAlign(CENTER, CENTER);

}

/*
Every Saturday to-do list
1/ Go laundry
2/ Go to market
3/ Go back home
4/ Cook
5/ Take a shower
6/ Go to cofee shop

*/

function draw() {
line(200, 0, 200, 600);
stroke(50);
line(400,0,400,600);
stroke(50);
line(0,200,600,200);
stroke(50);
line(0,400,600,400);
stroke(50);

rect(0,200,600,200);



  
noStroke();
fill(b);
text('Step 1', 100, 100);

noStroke();
fill(157,255,33);
text('Step 2', 300, 100);

noStroke();  
fill(254, 239, 10); 
text('Step 3', 500, 100);
  
  
noStroke();  
fill(173, 154, 252); 
text('Step 4', 100, 500);
  
noStroke();  
fill(255, 153, 51); 
text('Step 5', 300, 500);
  
noStroke();  
fill(240, 66, 196); 
text('Step 6', 500, 500);

  
  
let h = hour();
let mn = minute();
let sc = second();
  
strokeWeight(2);
fill(255);

noStroke();
text( h + ':' + mn + ':' + sc, 300,350);

  
  
if (mouseX < width/3 && mouseY< height/3){
  fill(255);
  text('Go Laundry', 300, 300);
  fill(0);

} else if (mouseX > width/3 && mouseX < width/3 + width/3 && mouseY < height/3){
  fill(0);
  text('Go to Market',300, 300);
  fill(157,255,33);
}
  else if ( (mouseX > width/3 + width/3) && mouseY< height/3){
  fill(255);
  text('Go back home', 300, 300);
  fill(254, 239, 10);
}
  else if(mouseX < width/3 && (mouseY > height/3 + height/3)) {
  fill(255);
  text('Cook', 300, 300);
  fill(173, 154, 252);   
  }
  
  else if((mouseX > width/3 && mouseX < width/3 + width/3) && (mouseY > height/3 && mouseY > height/3 + height/3)) {
  fill(0);
  text('Take a shower', 300, 300);
  fill(255, 153, 51);   
  }
  
  else if (mouseX > width/3 + width/3 && mouseY > height/3 + height/3) {
  fill(255);
  text('Watch Netflix', 300, 300);
  fill(240, 66, 196);
  }

  else if(mouseY > height/3 && mouseY < height - height/3){
  fill(0);
  text('Saturday To-Do list', 300, 300);
  fill(255);
}
 
}