let branches = [];
let branchSpeed = 3;
let rangu;
let isGameOver = false;


// Spritesheet variables
let sX = 5;
let sY = 1;
let spriteSheet;
let branchLeft;
let branchright;

//cel variables
let celW, celH;
let cels = [];
let celsLhands = [];
let celsRhands = [];

function preload() {

  spriteSheet = loadImage("./assets/rangusprite.png");
  lhspriteSheet = loadImage("./assets/leftHand.png");
  rhspriteSheet = loadImage("./assets/rightHand.png");

  branchLeft = loadImage("./assets/branchleft.png");
  branchRight = loadImage("./assets/branchright.png");
}

function setup() {

  rectMode(CENTER); 
  imageMode(CENTER); 

  createCanvas(700, innerHeight);

  //calculating the cel width and height
  celW = spriteSheet.width/sX;
  celH = spriteSheet.height/sY;
  //breaking the spritesheet into cels and storing it in an array
  for(let i =0;i<sY;i+=1) {
    for(let j =0;j<sX;j+=1) {
      cels[i*sX + j] = spriteSheet.get(j*celW, i*celH, celW, celH);
      celsLhands[i*sX + j] = lhspriteSheet.get(j*celW, i*celH, celW, celH);
      celsRhands[i*sX + j] = rhspriteSheet.get(j*celW, i*celH, celW, celH);
    }
  }



  //create Rangu
  rangu = new Rangu(width / 2, height / 2, 350 ,cels,celsLhands,celsRhands);


  //create an initial set of branches

  for (let i = height ; i < 4 * height; i += random(300, 500)) {
    let newBranch = new Branch(random(width*0.25, width*0.75), i, 20, branchLeft, branchRight);
    branches.push(newBranch)
  }
}

function draw() {
  background(220);

    //added by mathura
  if(rangu.isGrabbed) {
    branchSpeed=3;
  } else { branchSpeed =5}

  //drawing the branches
  if (isGameOver == false) {
    for (let i = 0; i < branches.length; i += 1) {
      branches[i].draw();
      branches[i].move(branchSpeed);

      if ((branches[i].yPos < height / 4) && (branches[i].hasGrabbed == false)) {
        rangu.fall();
        isGameOver=true
      }
    }

  }

  //drawing the monkey
  rangu.move();
  rangu.drawRangu();








}



function mousePressed() {
 //grabbing the branches
    for (let i = 0; i < branches.length; i += 1) {
      rangu.grabBranch(branches[i]);
      
    }
}
   
// function mouseReleased() {
//    rangu.isGrabbed = false;
//     rangu.holdingLeft = false;
//     rangu.holdingRight = false;
//     console.log("in else")
// }

