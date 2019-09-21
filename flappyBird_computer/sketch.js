const TOTAL = 400;

let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;
let slider;
  
function setup() {
    createCanvas(400, 600);
    slider = createSlider(1, 100, 1);
    for(let i = 0; i < TOTAL; i++){
        birds[i] = new Bird();
    }
}

function draw() {
    
    for(let n=0; n<slider.value(); n++){
    if(counter % 90 == 0){ 
        pipes.push(new Pipe());
    }

    counter ++;
    
    for(let i = pipes.length - 1; i >= 0; i--){ 
        //pipes[i].show();
        pipes[i].update();
        
        for(let j = birds.length - 1; j >= 0; j--){ 
            if(pipes[i].hits(birds[j])){ 
                savedBirds.push(birds[j]);
                birds.splice(j, 1);
            }
        }
        
        if(pipes[i].offscreen()){ 
            pipes.splice(i, 1);
        }
    }
    
    for(let i=0; i<birds.length; i++){
        if(birds[i].y > (height - 5) || birds[i].y < 5){
            savedBirds.push(birds[i]);
            birds.splice(i, 1)
        } 
    }
    
    for(let bird of birds){
        bird.think(pipes);
        bird.update();
        //bird.show();
    }
    
    if(birds.length == 0){ 
        nextGeneration();
        console.log('next generation');
        counter = 0;
        pipes = [];
    }
    }
    // all drawing
    
    background(0);
    
    for(let bird of birds){
        bird.show();
    }
    for(let i =0; i<birds.length; i++){
        let big = 0;
        if(birds[i].score > big){
            big = birds[i].score;
        }
        textSize(50);
        text(big, 100, 50);
    }
    for(let pipe of pipes){
        pipe.show();
    }
    
}

function keyPressed(){
    if(key === 'S'){
        let bird = birds[0];
        //let json = bird.brain.serialize();
        
        saveJSON(bird.brain, 'bird.json');
    }
}

// followed tutorial: https://www.youtube.com/watch?v=c6y21FkaUqw