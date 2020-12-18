function setup() {
    canvasWidth = 600;
    canvasHeight = 400;
    createCanvas(canvasWidth, canvasHeight);
    fill(0);
    snake = new snakeGame();
    snake.foodCrd();
  
  }
  
  function draw() {
    background(0);
    fill(51);
    rect(100, 50, 400, 300);
    fill(255);
    textSize(20);
    text("Snake Game", canvasWidth/2.5, canvasHeight - 365);
    fill(255);
    textSize(20);
    text("Your score", canvasWidth/2.5, 385);
    fill(255);
    textSize(20);
    text((snake.length)*10, canvasWidth/2.5 + 100, 385);
    snake.draw();
    snake.dead();
    snake.check();
    snake.move();
    snake.food();
    
    
    frameRate(8);
  }
  
  function snakeGame(){
   this.x = 200;
    this.y = 200;
    this.tailx = [];
    this.taily = [];
    this.length = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.move = function(){
      
      for(i = this.length-1; i > 0; i--)
      {
         this.tailx[i] = this.tailx[i-1];  
         this.taily[i] = this.taily[i-1];   
      }
      this.tailx[0] = this.x;
      this.taily[0] = this.y;
      
        this.x += this.xspeed*10;
        this.y += this.yspeed*10;
        if(this.x > 490)
          this.x = 100;
        else if(this.x < 100)
          this.x = 490;
        if(this.y < 50)
          this.y = 340;
        else if(this.y > 340)
          this.y = 50;
      
    }
    
    
    this.draw = function(){
      rect(this.x,this.y,12,12);
      
      for(i=0; i < this.length; i++)
        rect(this.tailx[i], this.taily[i], 12, 12);
      
      
    }
    
    this.change = function(x,y){
      this.xspeed = x;
      this.yspeed = y;
    }
    
    this.food = function(){
      fill(150,250,150);
      rect(this.r,this.p,12,12);
      fill(255);
    }
    
    this.foodCrd = function(){
      this.r = int(random(100,500)/10)*10;
      this.p = int(random(50,300)/10)*10; 
      
    }
    
    this.check = function(){
       if(this.x == this.r && this.y == this.p)
       {
         this.foodCrd(); 
         this.length+=1;
       }
         
    }
    
    this.dead = function(){
       for(i=0; i<this.length; i++)
         if(this.x == this.tailx[i] && this.y == this.taily[i])
         {
            this.length = 0;
             this.tailx = [];
           this.taily = [];
             
         }
    }
  }
  
  function keyPressed(){
     
      if(keyCode === UP_ARROW)
        snake.change(0,-1);
      else if(keyCode === DOWN_ARROW)
        snake.change(0,1);
      else if(keyCode === LEFT_ARROW)
        snake.change(-1,0);
      else if(keyCode === RIGHT_ARROW)
        snake.change(1,0); 
    }