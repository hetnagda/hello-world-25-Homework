class Monty{
  constructor(cx,cy,cr){
    this.cx = cx;
    this.cy = cy;
    this.cr = cr;
  }
  
  display(health){
    // Have hardcoded the values as of now. Fix this later.
    noStroke();
    if(health=="healthy")
      fill('#F7F020');
    else
      fill('#3CD57B');
    circle(this.cx,this.cy,this.cr); //base
    
    fill('#ffffff');
    circle(this.cx-12,this.cy+10,this.cr/4); // left eye-ball
    circle(this.cx+12,this.cy+10,this.cr/4); // right eye-ball
    fill('#000000');
    circle(this.cx-11,this.cy+12,this.cr/6); // left inner-eye
    circle(this.cx+11,this.cy+12,this.cr/6); // right inner-eye
    
    if(health=="healthy")
      stroke('#F7F020');
    else
      stroke('#3CD57B');
    strokeWeight(6);
    line(this.cx-30,this.cy+40,this.cx-30,this.cy+70);
    line(this.cx-11,this.cy+40,this.cx-11,this.cy+70);
    line(this.cx+11,this.cy+40,this.cx+11,this.cy+70);
    line(this.cx+30,this.cy+40,this.cx+30,this.cy+70);
    
    rectMode(CENTER);
    if(health=="healthy")
      fill('#FF5B18');
    else
      fill('#075F2C');
    noStroke();
    rect(this.cx,this.cy+40,this.cr,15,15)
  }
}