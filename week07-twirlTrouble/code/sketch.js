let score = 0;
let speed = -0.03;
let angle = 0;
let obstaclesX = [];
let obstaclesY = [];
let xspeed = 3;
let yspeed = 3;
let stage = 0;
let highScore = 0;
let heading;
let directionChange, backgroundMusic, levelUp, loseMusic, newObstacle, scorePlus;
let probability = 0.001;
let paused = false;


function setup() {
  createCanvas(400, 400);
  backgroundMusic.play();
}

function draw() {
  
  if(stage==0){
    splash();
  }
  
  if(stage==1){
    game();
  }
  
  if(stage==2){
    lose();
  }
}



function keyPressed(){
  if (stage == 0 && key == ' '){
    angle = 0;
    stage = 1;
  }
  
  if (stage == 1 && key == ' '){
    directionChange.play();
    speed = -speed;
  }
  
  if (stage == 2 && key == ' '){
    obstaclesX = [];
    obstaclesY = [];
    score = 0;
    angle = 0;
    easyLevel = 5;
    speed = 0.03;
    xspeed = 3;
    yspeed = 3;
    counter = 5;
    stage = 1;
    probability = 0.001;
    if (paused) {
      backgroundMusic.loop();
      paused = false;
    }
    loop();
  }  
}

function preload() {
  heading = loadFont('assets/fonts/retroGaming.ttf');
  directionChange = loadSound('assets/music/directionChange.wav');
  backgroundMusic = loadSound('assets/music/background.wav');
  loseMusic = loadSound('assets/music/lose.wav');
  levelUp = loadSound('assets/music/levelUp.wav');
  newObstacle = loadSound('assets/music/newObstacle.wav');
  scorePlus = loadSound('assets/music/scorePlus.wav');
}





