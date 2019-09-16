class Floor{
    constructor(){
        this.x = random(90, 310);
        //this.x = 100;
        //this.x = 300;
        this.y = 150;
        //this.length = random(120, 230);
        //this.length = random(150, 250);
        this.length = 160;
        this.thick = 30;
        this.del = false;
        this.blue = false;
        this.red = false;
        this.green = false;
    }
    
    show(){
        
        if(this.blue){
            fill(0, 0, 255);
        }
        if(this.green){
            fill(0, 255, 0);
        }
        if(this.red){
            fill(255, 0, 0);
        }
           
        fill(0, 255, 0);
        
        rect(this.x - this.length/2, this.y + this.thick/2, this.length, this.thick);
    }
    
    update(){
        this.y += 2.5;
        if(this.y > height){
            this.del = true;
        }
        
    }
    
    makeBlue(){
        this.blue = true;
        //console.log("blue is true");
    }
    
    makeRed(){
        this.red = true;
    }

    makeGreen(){
        this.green = true;
    }
}