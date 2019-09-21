class Pipe {
    constructor(){
        this.x = width;
        this.w = 40;
        this.speed = 2;
        this.space = random(height/5, height/5);
        this.place = random(height/4, height - height/4);
        this.top = this.place;  
        this.bottom = height - (this.place + this.space);
        this.highlight = false;
    }
    show() { 
        
        if(this.highlight){ 
            fill(255, 0, 0);
        } else { 
            fill(255);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    
         
    }

    update() { 
        this.x -= this.speed;
        
    }
    
    offscreen() { 
        if(this.x < - this.w){ 
            return true;
        } else { 
            return false;
        }
    }
    
    hits(bird) {
        if(bird.y < this.top || bird.y > height - this.bottom){ 
            if(bird.x > this.x && bird.x <this.x + this.w){ 
                this.highlight = true;
                return true;
            }
        } else { 
            return false;
        }
        
    }


}