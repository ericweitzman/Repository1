class Ball{
    constructor(brain){
        this.radius = 20;
        this.x = width/2;
        this.y = height/3;
        this.velY = 0;
        this.velX = 0;
        this.friction = 0.5;
        this.force = 5.5;
        this.gravity = 0.8;
        //this.lift = -22;
        this.lift = -29;
        this.score = 0;
        this.fitness = 0;
        this.jumpCount = 0;
        this.direction = "right";
        this.rightCount = 0;
        this.leftCount = 0;
        
        if(brain){
            this.brain = brain.copy()
        }else{
            this.brain = new NeuralNetwork(8, 16, 3); //12,24,3
        }
    }
    
    think(floors) { 
        
        let inputs = [];
        
        inputs[0] = this.y/height;
        inputs[1] = this.x/width;
        if(floors[0] != null){
            inputs[2] = floors[0].x/width;
            inputs[3] = floors[0].y/height;
        } else {
            inputs[2] = 0.5;
            inputs[3] = 0.5;
        }
        
        if(floors[1] != null){
            inputs[4] = floors[1].x/width;
            inputs[5] = floors[1].y/height;
        } else {
            inputs[4] = 0.5;
            inputs[5] = 0.5;
        }
        
        if(this.direction == "right"){
            inputs[6] = 0;
        } else {
            inputs[6] = 1;
        }
        
        if(this.velY > 0){
            inputs[7] = 1;
        } else{
            inputs[7] = 0;
        }
        

        let output = this.brain.predict(inputs);
        if(output[0] > 0.5){ 
            this.up(floors);
            //console.log("think: UP");
        }
        if(output[1] > 0.5){
            this.right();
            //console.log("think: LEFT");
        }
        if(output[2] > 0.5){
            this.left();
            //console.log("think: RIGHT");
        }
    
    }

    
    mutate() {
        
        if(generation < 50){
            this.brain.mutate(x=>x*random(0.85,1.15));
        }
        
        if(generation >= 50 && generation <= 300){
            this.brain.mutate(x=>x*random(0.9,1.1));
        }
        
        if(generation > 300){
            this.brain.mutate(x=>x*random(0.95,1.05));
        }
    }
    
    show(){
        fill(200);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
        fill(255, 0, 0);
        textSize(36)
        text(floor(this.score/20), 400/2, 30);
    }
    
    offscreen(){
        if(this.y > (height - this.radius * 2) && this.score > 300){
            return true;
        }else{
            return false;
        }
    }
    
    update(floors){
        
        //jump fatigue
        this.jumpCount ++;
        
        //max speeds
        if(this.velX > 15){
            this.velX = 15;
        }
        if(this.velX < -15){
            this.velX = -15;
        }
        
        if(this.velY > 35){
            this.velY = 35;
        }
        if(this.velY < -35){
            this.velY = -35;
        }
        
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
            if(abs(this.y - floors[i].y) < 8  && abs(this.x - floors[i].x) < floors[i].length/2 && this.velY >= 0) {
                this.y = floors[i].y;
                this.velY = 0;
            }
        }
    }
    
    up(floors){
        let jump = false;
        
        if(this.y >= height - this.radius*2){
            jump = true;
        }
        for(let i=0; i<floors.length; i++){
            
            if(
                (abs(this.y - floors[i].y) < 8  && abs(this.x - floors[i].x) < floors[i].length/2)){
                jump = true;
            }else{

            }
        }
        if(jump){
            if(this.jumpCount > 25){
                this.velY += this.lift;
                this.jumpCount = 0;
            }
            
        }
    }
    
    left(){
        this.velX -= this.force;
        this.direction = "left";
        this.leftCount ++;
    }
    
    right(){
        this.velX += this.force;
        this.direction = "right";
        this.rightCount ++;
    }
}