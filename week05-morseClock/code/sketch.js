const timer = {
  delay: 150,
  start: null,
  stop: null,
  running: false
};


let env, triOsc;

let hrLine1, hrLine2, minLine1, minLine2, secLine1, secLine2;
let timeHrs1=0, timeHrs2=0, timeMins1=0, timeMins2=0, timeSecs1=0, timeSecs2=0;

function setup() {
  createCanvas(600, 600);
  env = new p5.Envelope();
  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.freq(220);
  triOsc.start();
  delay = new p5.Delay();
}



function draw() {
  
  // Setting background
  
  background(30);
  noStroke();
  fill(100);
  square(300,300,440,60);
  stroke(0);
  noFill();
  strokeWeight(0.8);
  circle(300,300,410);
  fill(0)
  circle(300,300,380);
  rectMode(CENTER);
  fill('#509736');
  stroke(40);
  strokeWeight(3);
  square(300,300,250,30);
  
  // Aesthetics
  noStroke();
  fill(10,20);
  rect(300,380,130,10);
  noStroke();
  fill(10,30);
  rect(190,380,10,30);
  rect(200,380,10,20);
  rect(210,380,10,10);
  
  rect(300,370,150,10);
  rect(300,390,150,10);
  
  rect(230,380,10,10)
  rect(370,380,10,10)
  
  rect(390,380,10,10);
  rect(400,380,10,20);
  rect(410,380,10,30);
 
  noStroke();
  fill(10);
  
  // Getting time & breaking them in units and tens position
  
  timeHrs1 = Math.floor(hour()/10);
  timeHrs2 = hour()%10;
  timeMins1 = Math.floor(minute()/10);
  timeMins2 = minute()%10;
  timeSecs1 = Math.floor(second()/10);
  timeSecs2 = second()%10;
  
//console.log(timeHrs1+timeHrs2+" "+timeMins1+timeMins2+" "+timeSecs1+timeSecs2);
  
  // Time will be displayed as Hours/Minutes/Seconds
  // We will need to break down each of them in 2 lines
  
  hrLine1 = 210;  // Y co-ordinate for hour line 1
  hrLine2 = 230;  // Y co-ordinate for hour line 2
  minLine1 = 260;  // Y co-ordinate for minute line 1
  minLine2 = 280;  // Y co-ordinate for minute line 2
  secLine1 = 310;  // Y co-ordinate for seconds line 1
  secLine2 = 330;  // Y co-ordinate for seconds line 2
  
  if(timeHrs1==0) morseZero(hrLine1);
  if(timeHrs1==1) morseOne(hrLine1);
  if(timeHrs1==2) morseTwo(hrLine1);
  if(timeHrs1==3) morseThree(hrLine1);
  if(timeHrs1==4) morseFour(hrLine1);
  if(timeHrs1==5) morseFive(hrLine1);
  if(timeHrs1==6) morseSix(hrLine1);
  if(timeHrs1==7) morseSeven(hrLine1);
  if(timeHrs1==8) morseEight(hrLine1);
  if(timeHrs1==9) morseNine(hrLine1);
  
  if(timeHrs2==0) morseZero(hrLine2);
  if(timeHrs2==1) morseOne(hrLine2);
  if(timeHrs2==2) morseTwo(hrLine2);
  if(timeHrs2==3) morseThree(hrLine2);
  if(timeHrs2==4) morseFour(hrLine2);
  if(timeHrs2==5) morseFive(hrLine2);
  if(timeHrs2==6) morseSix(hrLine2);
  if(timeHrs2==7) morseSeven(hrLine2);
  if(timeHrs2==8) morseEight(hrLine2);
  if(timeHrs2==9) morseNine(hrLine2);

  if(timeMins1==0) morseZero(minLine1);
  if(timeMins1==1) morseOne(minLine1);
  if(timeMins1==2) morseTwo(minLine1);
  if(timeMins1==3) morseThree(minLine1);
  if(timeMins1==4) morseFour(minLine1);
  if(timeMins1==5) morseFive(minLine1);
  
  if(timeMins2==0) morseZero(minLine2);
  if(timeMins2==1) morseOne(minLine2);
  if(timeMins2==2) morseTwo(minLine2);
  if(timeMins2==3) morseThree(minLine2);
  if(timeMins2==4) morseFour(minLine2);
  if(timeMins2==5) morseFive(minLine2);
  if(timeMins2==6) morseSix(minLine2);
  if(timeMins2==7) morseSeven(minLine2);
  if(timeMins2==8) morseEight(minLine2);
  if(timeMins2==9) morseNine(minLine2);
  
  if(timeSecs1==0) morseZero(secLine1);
  if(timeSecs1==1) morseOne(secLine1);
  if(timeSecs1==2) morseTwo(secLine1);
  if(timeSecs1==3) morseThree(secLine1);
  if(timeSecs1==4) morseFour(secLine1);
  if(timeSecs1==5) morseFive(secLine1);
 
  if(timeSecs2==0) morseZero(secLine2);
  if(timeSecs2==1) morseOne(secLine2);
  if(timeSecs2==2) morseTwo(secLine2);
  if(timeSecs2==3) morseThree(secLine2);
  if(timeSecs2==4) morseFour(secLine2);
  if(timeSecs2==5) morseFive(secLine2);
  if(timeSecs2==6) morseSix(secLine2);
  if(timeSecs2==7) morseSeven(secLine2);
  if(timeSecs2==8) morseEight(secLine2);
  if(timeSecs2==9) morseNine(secLine2); 
}

function mousePressed(){
}


function morseOne(y){
  rect(190,y,10,10);
  rect(220,y,30,10);
  rect(260,y,30,10);
  rect(300,y,30,10);
  rect(340,y,30,10);
}

function morseTwo(y){
  rect(190,y,10,10);
  rect(210,y,10,10);
  rect(240,y,30,10);
  rect(280,y,30,10);
  rect(320,y,30,10);
}

function morseThree(y){
  rect(190,y,10,10);
  rect(210,y,10,10);
  rect(230,y,10,10);
  rect(260,y,30,10);
  rect(300,y,30,10);
}

function morseFour(y){
  rect(190,y,10,10);
  rect(210,y,10,10);
  rect(230,y,10,10);
  rect(250,y,10,10);
  rect(280,y,30,10);

}

function morseFive(y){
  rect(190,y,10,10);
  rect(210,y,10,10);
  rect(230,y,10,10);
  rect(250,y,10,10);
  rect(270,y,10,10);
}

function morseSix(y){
  rect(200,y,30,10);
  rect(230,y,10,10);
  rect(250,y,10,10);
  rect(270,y,10,10);
  rect(290,y,10,10);
  
}

function morseSeven(y){
  rect(200,y,30,10);
  rect(240,y,30,10);
  rect(270,y,10,10);
  rect(290,y,10,10);
  rect(310,y,10,10);
}

function morseEight(y){
  rect(200,y,30,10);
  rect(240,y,30,10);
  rect(280,y,30,10);
  rect(310,y,10,10);
  rect(330,y,10,10);
}

function morseNine(y){
  rect(200,y,30,10);
  rect(240,y,30,10);
  rect(280,y,30,10);
  rect(320,y,30,10);
  rect(350,y,10,10);
}

function morseZero(y){
  rect(200,y,30,10);
  rect(240,y,30,10);
  rect(280,y,30,10);
  rect(320,y,30,10);
  rect(360,y,30,10);
}

function audioDot() {
  env.setADSR(0.025, 0.04, 0.1, 0.1);
  env.play();
}

function audioDash() {
  env.setADSR(0.025, 0.04, 0.3, 0.3);
  env.play();
}





