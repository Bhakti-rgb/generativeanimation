let gsize = 120
let colors = ["#6258b0", "#71e3ce", "#e3717b", "#ffffff"]
let gridImages = [];
let gridImages2 = [];
let gridImages3 = [];



function preload() {
  gridImages[0] = loadImage("./assets/bhoot0.png")
  gridImages[1] = loadImage("./assets/bhoot1.png")
  gridImages[2] = loadImage("./assets/bhoot2.png")
  gridImages[3] = loadImage("./assets/bhoot3.png")

}

function preload() {
  gridImages2[0] = loadImage("./assets/bhoot0a.png")
  gridImages2[1] = loadImage("./assets/bhoot1a.png")
  gridImages2[2] = loadImage("./assets/bhoot2a.png")
  gridImages2[3] = loadImage("./assets/bhoot3a.png")
}

function preload() {
  gridImages3[0] = loadImage("./assets/bhootnew0.png")
  gridImages3[1] = loadImage("./assets/bhootnew1.png")
  gridImages3[2] = loadImage("./assets/bhootnew2.png")
  gridImages3[3] = loadImage("./assets/bhootnew3.png")
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  
  frameRate(8)
  console.log(gridImages)
}



// ATTEMPT 1
function mousePressed() {

background(0);

 tint(random(0, 255))

  for (let i = 0; i < width; i += gsize) {
    for (let j = 0; j < height; j += gsize) {

      let choice = floor(random(0, gridImages.length))
  
      image(gridImages[choice], i, j, gsize, gsize)
    }
  }

}
  

/*
// ATTEMPT 2

function mousePressed() {

background(0);

 tint(random(0, 255))

  for (let i = 0; i < width; i += gsize) {
    for (let j = 0; j < height; j += gsize) {

      let choice = floor(random(0, gridImages2.length))
  
      image(gridImages2[choice], i, j, gsize, gsize)
    }
  }

}
  

/*
//ATTEMPT 3

function mousePressed() {

background(0);


  for (let i = 0; i < width; i += gsize) {
    for (let j = 0; j < height; j += gsize) {

      let choice = floor(random(0, gridImages3.length))
  
      image(gridImages3[choice], i, j, gsize, gsize)
    }
  }

}
*/