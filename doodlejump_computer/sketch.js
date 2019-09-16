const TOTAL = 1000;

let balls = [];
let savedBalls = [];
let floors = [];
let counter;
let slider;
let highscore = 0;
let generation = 0;
let avg = 0;
let genHighscore = 0;

function setup() {
    createCanvas(400, 600);
    floors.push(new Floor);
    counter = 0;
    slider = createSlider(1, 500, 1);
    for(let i = 0; i < TOTAL; i++){
        balls[i] = new Ball();
    }
}

function draw() {
    
        for(let n=0; n<slider.value(); n++){
        //background(0);

        counter++;

        if(counter % 80 == 0){
            floors.push(new Floor);
        }



        for(let i = floors.length - 1; i >= 0; i--){
            floors[i].update();
            //floors[i].show();
            if(floors[i].del == true){
                    floors.splice(i, 1);
            }
        }


        for(let i = 0; i < balls.length; i++){
            balls[i].update(floors);
            if(counter % 3 == 0){
                balls[i].think(floors);
            }
            //balls[i].show();

            //delete ball if under height after x time
            if((balls[i].y > (height - balls[i].radius * 2) && balls[i].score > 400 ) || balls[i].x > width + 50 || balls[i].x < -50){
                //console.log("delete");
                savedBalls.push(balls[i]);
                balls.splice(i, 1);
            }

        }
            
        if(balls.length == 1){
            genHighscore = balls[0].score;
            if(highscore < balls[0].score){
                highscore = balls[0].score;
            }
        }
        
        if(balls.length == 0){
            nextGeneration();
            console.log("new generation: " + generation + " average: " + avg);
            generation++;
            console.log("highscore: " + floor(highscore/20));
            console.log("Gen highscore: " + floor(genHighscore/20));
            console.log(" ");
            floors = [];
            counter = 0;
        }
            
    }
    //drawing
    background(0);
    if(balls.length <= 50){
        for(let i = 0; i < balls.length; i++){
            balls[i].show();
        }
    }
    for(let i = floors.length - 1; i >= 0; i--){
         
        if(i <= 5){
            floors[i].show();
        }
    }
    //red rectangle
        if(balls[0].score > 400){
            fill(255, 0, 0);
            rect(0, height - 40, width, 40);
        }
    
}

function keyPressed(){
    if(key === 'W'){
        balls[0].up(floors);
        console.log("person: UP");
        console.log("leftCount: " + balls[0].leftCount);
        console.log("rightCount: " + balls[0].rightCount);
    }
    
    if(key === 'A'){
        balls[0].left();
    }
    
    if(key === 'D'){
        balls[0].right();
    }
}