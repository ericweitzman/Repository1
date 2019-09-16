class Floor{
    constructor(){
        this.x = random(50, 350);
        this.y = 0;
        //this.length = random(120, 230);
        this.length = 200;
        this.thick = 30;
        this.del = false;
        img_floor.resize(this.length, 0);
    }
    
    show(){
        fill(0, 255, 0);
        //rect(this.x - this.length/2, this.y + this.thick/2, this.length, this.thick);
        //img_floor.resize(this.length, 0);
        imageMode(CENTER);
        image(img_floor, this.x, this.y + 15);
        imageMode(CORNER);
    }
    
    update(){
        this.y += 2;
        if(this.y > height){
            this.del = true;
        }
    } 
}