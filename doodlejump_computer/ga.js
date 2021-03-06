function nextGeneration() { 
    
    calculateFitness();
    
    for(let i = 0; i < savedBalls.length; i++){
        balls[i] = pickOne();
    }
    
   savedBalls = [];
    
}
function pickOne(){
    let index = 0;
    let r = random(1);
    
    while(r > 0){
        r = r-savedBalls[index].fitness;
        index++;
    }
    index--;
    
    
    let ball = savedBalls[index];
    let child = new Ball(ball.brain);
    child.mutate();
    
    return child;
}
    
function calculateFitness() { 
    
    let sum = 0;
    
    for(let ball of savedBalls){ 
          sum += ball.score;
    }
    
    avg = floor(sum/(TOTAL*20));
        
    for(let ball of savedBalls){ 
        
        ball.fitness = ball.score/sum;
    }
}


