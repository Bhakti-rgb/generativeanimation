let divisions = 12

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  background(15);

}

/*
//first one
function draw() {
  background(0, 0, 0, 10);

  push();
  translate(width / 2, height / 2);
  rotate(-frameCount);

  for (let i = 0; i < divisions; i += 1) {
    fill(100, 10, 200)
    triangle(180*sin(frameCount), -60*sin(frameCount), 250*sin(frameCount), 20, 130, -10)
    rotate(360 / divisions)
  }

  rotate(2 * frameCount)
  for (let i = 0; i < divisions; i += 1) {

    fill(200, 50, 100)
    ellipse(30*sin(frameCount), 0, 80*sin(frameCount))
    rotate(360 / divisions)
  }
  pop();
}
*/

function mouseDragged() {
  stroke(mouseX, mouseY, 10*sin(frameCount));
  strokeWeight(5);

  push();

  translate(width / 2, height / 2);
   

  for (let i = 0; i < divisions; i += 1) {

    rotate(360/divisions)

    line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2)
    
  }

  pop()
}



