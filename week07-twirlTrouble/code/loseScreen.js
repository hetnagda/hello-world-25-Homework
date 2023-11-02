function lose(){
  background(29,35,42,200);
  loseMusic.play();
  backgroundMusic.stop();
  
  textAlign(CENTER);
  textFont(heading);
  fill('#d1d18d');
  
  textSize(48);
  text('GAME OVER',200,185);
  
  textSize(16);
  text('PRESS SPACE TO RESTART',200,215);
  paused = true;
  noLoop();
}