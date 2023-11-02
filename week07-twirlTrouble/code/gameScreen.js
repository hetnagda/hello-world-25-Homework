function game(){
  clear();
  backgroundMusic.setVolume(0.3);
  
  background('#1d232a');


  if(random(1) < probability){
    obstaclesX.push(new ObstaclesX());
  }
  
  if(random(1) < probability){
    obstaclesY.push(new ObstaclesY());
  }
  
  fill('#d1d18d');
  textAlign(LEFT);
  textSize(12);
  textFont(heading);
  text('SCORE: '+score,10,25);
  text('BEST: '+highScore,10,45);
  stroke('#242b34');
  strokeWeight(20);
  noFill();
  ellipse(200,200,200);
  noStroke();
  fill('#f0f0be');
  let x = 200 - sin(angle) * 100;
  let y = 200 - cos(angle) * 100;
  ellipse(x,y,20);
  angle -= speed;
  if(angle<-6.28){
    scorePlus.play();
    probability += 0.002
    speed += 0.002;
    xspeed += 0.25;
    yspeed += 0.25;
    score++;
    if(score >= highScore)
      highScore = score;
    angle = angle % 6.28;
  }
  
  
  
  for(let i in obstaclesX){
    obstaclesX[i].show(i);
    if(obstaclesX[i]){
      hit = collideRectCircle(obstaclesX[i].x, obstaclesX[i].y, obstaclesX[i].w, obstaclesX[i].h, x, y, 20);
      if(hit == true){
        stage = 2;
      }
    }
  }
  
  
  for(let i in obstaclesY){
    obstaclesY[i].show(i);
    if(obstaclesY[i]){
      hit = collideRectCircle(obstaclesY[i].x, obstaclesY[i].y, obstaclesY[i].w, obstaclesY[i].h, x, y, 20);
      if(hit == true){
        stage = 2; 
      }
    }
  }
  
}