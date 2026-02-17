function setup() {
  createCanvas(400, 400);
  background(220);
}

function drawhouse(x,y, r, g, b) {
noStroke();
fill(r,g,b)
rect(x,y, 80, 50)
triangle(x+40, y-30, x+80, y, x, y)
}

function mouseClicked() {
  drawhouse(mouseX, mouseY);
  fill(20,40,120)
  
}

function mouseDragged() {
  drawhouse(mouseX, mouseY);
   fill(20,140,120)
  
}