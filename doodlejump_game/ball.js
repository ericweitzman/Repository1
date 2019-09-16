class Ball{
    constructor(){
        this.radius = 20;
        this.x = width/2;
        this.y = height/3;
        this.velY = 0;
        this.velX = 0;
        this.friction = 0.5;
        this.force = 7;
        this.gravity = 0.8;
        this.lift = -24;
        this.score = 0;
        this.direction = "right";
        this.onGround = true;
        this.onFloor = false;
    }
    
    show(){
        fill(255);
        //ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
        img_player.resize(90, 0);
        imageMode(CENTER);
        image(img_player, this.x, this.y - 25);
        imageMode(CORNER);
        
        fill(255, 0, 0);
        textSize(36)
        text(floor(this.score/20), 400/2, 30);
    }
    
    update(floors){
        
        //update score
        this.score ++;
        
        //update position
        this.y += this.velY;
        this.x += this.velX;
        this.velY *= 0.95;
        this.velX *= 0.95;
        
        //gravity
        this.velY += this.gravity;
        
        //friction 
        if(this.velX > 0 ){
            this.velX -= this.friction;
        }
        if(this.velX < 0){
            this.velX += this.friction;
        }
        
        //keep from falling off screen
        if(this.y > height - this.radius){
            this.y = height - this.radius;
            this.velY = 0;
        }
        
        //keep moving left or right
        if(this.direction == "right"){
            this.x += 3;
        }
        
        if(this.direction == "left"){
            this.x -= 3;
        }
        
        //bounce off walls
        if(this.x > width - this.radius){
            this.velX = -this.velX;
            this.direction = "left";
        }
        
        if(this.x < this.radius){
            this.velX = -this.velX;
            this.direction = "right";
        }
        
        //keep on floors or gravity
        for(let i=0; i<floors.length; i++){
            if(abs(this.y - floors[i].y) < 8  && abs(ball.x - floors[i].x) < floors[i].length/2 && this.velY >= 0) {
                this.y = floors[i].y;
                this.velY = 0;
            }
        }
    }
    
    up(floors){
        let jump = false;
        for(let i=0; i<floors.length; i++){
            if((abs(this.y - floors[i].y) < 8  && abs(ball.x - floors[i].x) < floors[i].length/2)|| this.y >= (height - this.radius)){
                jump = true;
            }else{

            }
        }
        if(jump){
            this.velY += this.lift;
        }
    }
    
    left(){
        this.velX -= this.force;
        this.direction = "left";
    }
    
    right(){
        this.velX += this.force;
        this.direction = "right";
    }
    
    
}