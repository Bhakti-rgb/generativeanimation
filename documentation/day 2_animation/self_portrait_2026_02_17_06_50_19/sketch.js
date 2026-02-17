let x;
function setup() {
  createCanvas(500, 500,);
  x=315
}

function draw() {
  background(253, 255, 150);
  noStroke();
  fill(0, 128, 128);
  rect(150, 145, 200, 177, 120, 120, 20, 20) //hair
  fill(222, 149, 149);
  triangle(250, 150+mouseY/20, 340, 315, 160, 315); //face
  fill(255, 255, 255);
  ellipse(225, 230+mouseY/20, 35, 50); //eye1
  ellipse(275, 230+mouseY/20, 35, 50); //eye2
  fill(0, 0, 0);
  ellipse(215+mouseX/20, 230+mouseY/15, 20, 20); //pupil1
  ellipse(265+mouseX/20, 230+mouseY/15, 20, 20); //pupil2
  strokeWeight(5);
  stroke(0, 0, 0);
  noFill();
  rect(177, 180+mouseY/20, 70, 100, 20, 20, 20, 20) //chashma1
  rect(255, 180+mouseY/20, 70, 100, 20, 20, 20, 20) //chashma
  
  
}