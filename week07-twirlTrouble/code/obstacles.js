class ObstaclesX{
  constructor(){
    this.w = random(50,100);
    this.h = 15;
    this.x = random([0-this.w,width]);
    this.y = random(40,height-this.h);
    if(this.x == (0-this.w))
      this.pos = 'left';
    else
      this.pos = 'right';
  }
  show(i){
    if(this.pos == 'left'){
      this.x = this.x+xspeed;
      if(this.x > width)
        obstaclesX.splice(i,1);
    }
    if(this.pos == 'right'){
      this.x = this.x-xspeed;
      if(this.x < 0-this.w)
        obstaclesX.splice(i,1);
    }
    fill('#379392');
    rect(this.x,this.y,this.w,this.h);
  }
}


class ObstaclesY{
  constructor(){
    this.w = 15;
    this.h = random(50,100);
    this.x = random(50,width-this.w);
    this.y = random([0-this.h,height]);
    if(this.y == (0-this.h))
      this.pos = 'top';
    else
      this.pos='bottom';
  }
  show(i){
    if(this.pos=='top'){
      this.y = this.y+yspeed;
      if(this.y > height)
        obstaclesY.splice(i,1);
    }
    if(this.pos == 'bottom'){
      this.y = this.y-yspeed;
      if(this.y < 0-this.h)
        obstaclesY.splice(i,1);
    }
    fill('#379392');
    rect(this.x,this.y,this.w,this.h);
  }
}