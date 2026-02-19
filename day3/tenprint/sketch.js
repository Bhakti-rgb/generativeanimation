let gSize = 40;
let xPos = 0;
let yPos = 0;
function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {

  fill(xPos, yPos, 100);
  noStroke();
  ellipse(xPos, yPos, gSize)

  strokeWeight(10);
  stroke(gSize, xPos, 100)
  let choice = random(0, 1)
  if (choice > 0.5) {
    line(xPos, yPos, xPos + gSize, yPos + gSize)
  } else {
    line(xPos + gSize, yPos, xPos, yPos + gSize)
  }


  xPos += gSize
  if (xPos > width) {
    xPos = 0
    yPos += gSize

    if (yPos > height) {
      yPos = 0;
      background(255)
    }
  }
}
