// spritesheet variables
let sX = 8
let sY = 4
let spriteSheet;

//cel variables
let celW, celH;
let cels = [];

let x = 0


function preload() {
  spriteSheet = loadImage("./assets/explosionFull.png")
}

function setup() {
  createCanvas(400, 400);

  //calculating the cel height and width
  celW = spriteSheet.width / sX
  celH = spriteSheet.height / sY


  // getting only parts of the image and storing it in array
  for (let i = 0; i < sY; i += 1) {
    for (let j = 0; j< sX; j+=1) {
      cels[i * sX + j] = spriteSheet.get(j * celW, i * celH, celW, celH)
    }
  }


}

function mouseDragged() {
  background(0);
  x += 1
  image(cels[x % 32], 0, 0)
}


/*
function draw() {
  background(0);
  image(cels[frameCount % 32], 0, 0)

}
*/