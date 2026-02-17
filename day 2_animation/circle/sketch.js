let x;
let y;
function setup() {
  createCanvas(500, 500);
  x = 0
  y = 500
}

function draw() {
  background(mouseX, mouseY);
  noStroke();
  fill(200, 177, x, y)
  ellipse(x, y, x, x);
  x=x+5
   fill(x, x/2, 120, x)
  ellipse(y, y, y, y);
  y=y-5
  fill(20, 30, 40);
  ellipse(mouseX, mouseY, 30);
}
