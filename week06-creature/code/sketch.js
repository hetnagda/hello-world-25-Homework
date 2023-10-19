let health = 10;
let counter;
let time = 10;
let food = [];
let hit=false;
function setup() {
  createCanvas(500, 500);
  monty = new Monty (width/2,400,75);  
}

function mousePressed(){
  let f = new Food (mouseX, mouseY,15);
  food.push(f);
}

function draw() {
  background('#559BDB');
  counter = millis()/1000;
  if(counter>time){
    health--;
    time+=10;
  }
  
  instructions();
  healthBar();
  
  if(health>3)
    monty.display('healthy');
  else
    monty.display('sick');
  
  for(let i=0;i<food.length;i++){
    food[i].drop();
    food[i].intersects(i);
  }
}