let bird;
let pipes = [];

let img_bird;
let img_pipe;
let img_pipe_flipped;
let img_background;
let mode = "start";
let highscore = 0;

function preload(){
    img_bird = loadImage('images/bird_big.png');
    img_pipe = loadImage('images/pipe_big.png');
    img_pipe_flipped = loadImage('images/pipe_flipped_big.png');
    img_background = loadImage('images/background_big.png');
}

function setup() {
    createCanvas(400, 600);
    canvas.imageSmoothingEnabled = false;
    bird = new Bird;
    //pipes.push(new Pipe());
}

function draw() {
    
    if(mode == "start"){
        
        background(img_background);
        fill(0);
        textSize(34);
        textAlign(CENTER);
        text("Press space to play", 200, 50);
        img_bird.resize(100, 0);
        imageMode(CENTER);
        image(img_bird, 200, 300);
        imageMode(CORNER);
        
    }
    
    if(mode == "end"){
        background(0);
        fill(255);
        textSize(24);
        textAlign(CENTER);
        text("Game Over", 200, 50);
        text("Press space to play again", 200, 100);
        text("Highscore: " + highscore, 200, 200);
    }
    
    if(mode == "game"){
        background(img_background);

            for(let i = pipes.length - 1; i >= 0; i--){ 

                pipes[i].update();
                pipes[i].show();
                
                if(pipes[i].offscreen()){ 
                    pipes.splice(i, 1);
                }
                
                if(pipes[i].hits(bird)){
                    for(let i=0; i<pipes.length; i++){
                        pipes.splice(i, 1);
                    }
                    mode = "end";
                    if(bird.score > highscore){
                        highscore = bird.score;
                    }
                    bird.score = 0;
                    bird.frames = 0;
                    break;
                }
            }
    
        if(frameCount % 90 == 0){ 
            pipes.push(new Pipe());
        }

        bird.update();
        bird.show(); 

    }
}

function keyPressed(){
    if(mode == "game" && key == ' '){
        bird.up();
    }
    if(mode == "start" && key == ' '){
        mode = "game";
    }
    if(mode == "end" && key == ' '){
        mode = "game";
    }
}

// followed tutorial: https://www.youtube.com/watch?v=cXgA1d_E-jY&t=328s