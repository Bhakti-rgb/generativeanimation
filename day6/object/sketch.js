let flowers = [];
let myFlower, yourFlower;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  for (let i=0; i<flowers.length; i+=1) {
    flowers[i].drawFlower();
  }
}

function mousePressed() {
  // let randomColour = color(random(0,255), random(0,255), random(0,255))
  let newFlower = new Flower(mouseX, mouseY, random(50, 200), random(0,255), random(0,255), random(0,255));
  flowers.push(newFlower);
}

function mouseDragged() {
  sway = map(mouseX, 0, width, -2, 2);
  for(let i=0; i<flowers.length; i+=1) {
    //flowers[i].swayFlower (sway, mouseX);
  flowers[i].paintFlower (1)
  }
}