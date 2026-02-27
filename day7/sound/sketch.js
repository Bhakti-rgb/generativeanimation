//sound variables
let mySound = [];
let bgSound = [];

//ball variables
let ySpeed = 5
let yPos = 40
let xPos = 50
let xSpeed = 10

// sound array
function preload() {
  soundFormats('mp3');
  bgSound[1] = loadSound('./assets/loop/1.mp3');
  bgSound[2] = loadSound('./assets/loop/2.mp3');
  bgSound[3] = loadSound('./assets/loop/3.mp3');
  bgSound[4] = loadSound('./assets/loop/4.mp3');
  bgSound[0] = loadSound('./assets/loop/0.mp3');

  soundFormats('mp3');
  mySound[0] = loadSound('./assets/sound/0.mp3');
  mySound[1] = loadSound('./assets/sound/1.mp3');
  mySound[2] = loadSound('./assets/sound/2.mp3');
  mySound[3] = loadSound('./assets/sound/3.mp3');
  mySound[4] = loadSound('./assets/sound/4.mp3');
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  //bgSound[3].loop();
}

function draw() {
  background(220);
  
  ellipse(xPos, yPos, 50)
  yPos += ySpeed
  xPos += xSpeed

  //adding the condition
  if (yPos > height - 25 || yPos < 25) {
    ySpeed = -ySpeed;
    mySound[2].play();
  }

  if (xPos > width - 25 || xPos < 0) {
    xSpeed = -xSpeed;
     mySound[4].play();
  }
  
  
}

function mousePressed() {
  mySound[2].play();

}


