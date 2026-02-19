function setup() {
  createCanvas(innerWidth, innerHeight);
    background(50, 30, 10);
}

function draw() {

  noStroke();

  if (mouseX < width / 2 && mouseY < height / 2) {
    fill(10, 100, 200)
    ellipse(mouseX, mouseY, 100)

  } else if (mouseX > width / 2 && mouseY < height / 2) {
    fill(255, 30, 100)
    ellipse(mouseX, mouseY, 80)

  } else if (mouseX < width / 2 && mouseY > height / 2) {
    fill(30, 50, 60)
    ellipse(mouseX, mouseY, 30)
  } else {
    fill(70, 200, 60)
    ellipse(mouseX, mouseY, 50)
  }

}

