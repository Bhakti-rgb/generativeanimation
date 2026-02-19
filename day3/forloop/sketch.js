let gsize = 50
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
}

function draw() {
  frameRate(5)
  for (let x = 0; x < width; x += gsize*2) {

    for (let y = 0; y < height; y += gsize) {

      noStroke();
      fill(random(255), random(255), 150)
      rect(x, y, gsize, gsize)
    }
  }
} 
