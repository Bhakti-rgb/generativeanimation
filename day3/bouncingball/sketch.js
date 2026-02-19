let ySpeed = 5
let yPos = 40
let xPos = 50
let xSpeed = 10

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(220);
}

function draw() {
  background(220);
  noStroke();
  fill(100, 0, 200)
  ellipse(xPos, yPos, 50)
  yPos += ySpeed
  xPos += xSpeed

  //adding the condition
  if (yPos > height - 25 || yPos < 25) {
    ySpeed = -ySpeed
  }

  if (xPos > width - 25 || xPos < 0) {
    xSpeed = -xSpeed;
  }
}
