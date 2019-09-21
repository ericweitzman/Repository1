class Bird {
    
    constructor() {
        this.y = height/2;
        this.x = 55;
        this.gravity = 0.55;
        this.lift = -16.5;
        this.velocity = 0;
        this.score = 0;
        this.frames = 0;
    }
    
    show() { 
        stroke(255);
        fill(255, 0, 0);
        textSize(36)
        text(bird.score, 400/2, 30);
        //ellipse(this.x, this.y, 32, 32);
        img_bird.resize(40, 0);
        image(img_bird, this.x-20, this.y-15);
    }
    
    update() { 
        this.frames++;
        this.score = floor(this.frames/90);
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.92;
        
        if(this.y > height - 20 ){ 
            this.y = height - 20;
            this.velocity = 0;
        
        }
        
        if(this.y < 20){ 
            this.y = 20;
            this.velocity = 0;
        }
    }

    up() { 
        this.velocity += this.lift;
        //console.log("UP!!!!!!!!")
    }

}