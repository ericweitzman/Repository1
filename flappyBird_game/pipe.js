let img1;
let img2;

class Pipe {
    constructor(){

        this.x = 400;
        this.w = 40;
        this.speed = 1.6;
        this.space = random(height/5, height/5);
        this.place = random(height/4, height - height/4);
        this.top = this.place;  
        this.bottom = height - (this.place + this.space);
        this.highlight = false;
        this.img_pipe_flipped = img_pipe_flipped;
        this.img_pipe = img_pipe;
        this.resizeOnce = true;
        this.pipe;
        this.pipe_flipped;
    }
    show() { 
        //fill(255);
        if(this.resizeOnce){
            this.img_pipe_flipped.resize(this.w, this.place, this.w, this.place);
            
            this.img_pipe.resize(this.w, height - this.place - this.space)
            
            
            this.pipe = this.img_pipe.get();
            this.pipe_flipped = this.img_pipe_flipped.get();
            
            this.resizeOnce = false;

        }
        
        //image(this.img_pipe_flipped, this.x, 0);
        image(this.pipe_flipped, this.x, 0);
        //rect(this.x, 0, this.w, this.place);
        
        //img_pipe.resize(this.w, 0);
        //image(this.img_pipe, this.x, this.place + this.space);
        image(this.pipe, this.x, this.place + this.space);
        //rect(this.x, this.place + this.space, this.w, height-this.place-this.space);
    }

    update() { 
        this.x -= this.speed;
    }
    
    offscreen() { 
        if(this.x < - this.w){ 
            this.highlight 
            return true;
        } else { 
            return false;
        }
    }
    
    hits(bird) {
        if(bird.y < this.top || bird.y > height - this.bottom){ 
            if(bird.x > this.x && bird.x <this.x + this.w){ 
                this.highlight = true;
                console.log("highlight");
                return true;
            }
        } else {  
            //console.log("moonlight");
            return false;
        }
    }
}