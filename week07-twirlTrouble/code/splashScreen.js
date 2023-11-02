function splash(){
  background('#f0f0be');
  stroke('#f5f5d0');
  strokeWeight(30);
  noFill();
  ellipse(200,200,370);
  noStroke();
  fill('#f0f0be');
  let x = 200 - sin(angle) * 185;
  let y = 200 - cos(angle) * 185;
  ellipse(x,y,30);
  angle += (speed+0.018);
  
  textAlign(CENTER);
  textFont(heading);
  textSize(44);
  
  fill('#d1d18d');
  text('TWIRL',203,107);
  text('TROUBLE',203,152);
  
  fill('#1d232a');
  text('TWIRL',200,105);
  text('TROUBLE',200,150);
  
  textAlign(LEFT);
  textFont('Montserrat');
  textSize(12);
  text('- Use the SPACE bar to  switch the circle\'s direction.\n\n- Score 1 point for each completed clockwise rotation.\n\n- Avoid the rectangles or it\'s game over!',50,200);
  
  textAlign(CENTER);
  textFont(heading);
  textSize(17);
  
  fill('#d1d18d');
  text('PRESS SPACE TO START',202,312);
  
  fill('#1d232a');
  text('PRESS SPACE TO START',200,310);
  
}