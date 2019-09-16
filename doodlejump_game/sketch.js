let ball;
let floors = [];
let counter;

let img_player;
let img_background;
let img_floor;
let img_fire;
let img_fire2;
function preload(){
    img_player = loadImage('doodlejump_player2.png');
    img_background = loadImage('doodlejump_background.png');
    img_floor = loadImage('doodlejump_floor.png');
    img_fire = loadImage('doodlejump_fire.png');
    img_fire2 = loadImage('doodlejump_fire2.png');
}

function setup() {
    createCanvas(400, 600);
    ball = new Ball;
    floors.push(new Floor);
    counter = 0;
    img_fire.resize(400, 0);
    img_fire2.resize(400, 0);
}

function draw() {
    background(0);
    img_background.resize(400, 600);
    image(img_background, 0, 0);
    
    counter++;
    
    if(counter % 100 == 0){
        floors.push(new Floor);
    }
    
    for(let i = floors.length - 1; i >= 0; i--){
        floors[i].update();
        floors[i].show();
        if(floors[i].del == true){
                floors.splice(i, 1);
        }
    }
    
    ball.update(floors);
    ball.show();
    
    if(ball.score > 300){
        //fill(255, 0, 0);
        //rect(0, height - ball.radius*2, width, ball.radius*2);
        
        if(counter % 10 > 5){
            image(img_fire, 0, height - ball.radius*2 - 90);
            imageMode(CORNER);
        } else{
            image(img_fire2, 0, height - ball.radius*2 - 90);
            imageMode(CORNER); 
        }
    }
    
    if(ball.y > (height - ball.radius * 2) && ball.score > 300 ){
        console.log("delete");
        noLoop();
    }
}

function keyPressed(){
    if(key === 'W'){
        ball.up(floors);
    }
    
    if(key === 'A'){
        ball.left();
    }
    
    if(key === 'D'){
        ball.right();
    }
}




