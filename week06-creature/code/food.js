class Food{
  constructor(fx,fy,fr){
    this.fx = fx;
    this.fy = fy;
    this.fr = fr;
  }
  
  drop(){
    fill('#123456');
    ellipse(this.fx,this.fy,this.fr);
    this.fy += 4;
  }
  
  intersects(i){
    let distance = dist(this.fx, this.fy, monty.cx, monty.cy);
    if (distance < (this.fr+monty.cr)/2){
      health++;
      food.splice(i,1);
    }
  }
  
}