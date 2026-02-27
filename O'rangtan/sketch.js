let branches = [];
let branchSpeed = 3;
let rangu;

//GAME VARIABLES
let isGameOver = false;
let playerWon = false;
let hasGameStarted = false;

//endscreen variables
let ses = false;
let ses2 = false;

// Spritesheet variables
let sX = 5;
let sY = 1;
let spriteSheet;
let lhspriteSheet;
let rhspriteSheet;
let branchLeft;
let branchRight;

//cel variables
let celW, celH;
let cels = [];
let celsLhands = [];
let celsRhands = [];

//bg variables
let bgImg;
let bgImg2;
let bgY, bgY2;
let bgSpeed1 = 3.5;   // speed for background 1
let bgSpeed2 = 3;   // speed for background 2
let startscreen, endscreen1, endscreen2; //start &end screens
let tryagain, saybye;

let currEndScreen = "screen1";

function preload() {

  bgImg = loadImage("./assets/bg.png");
  bgImg2 = loadImage("./assets/bga.png");

  spriteSheet = loadImage("./assets/rangusprite.png");
  lhspriteSheet = loadImage("./assets/leftHand.png");
  rhspriteSheet = loadImage("./assets/rightHand.png");

  branchLeft = loadImage("./assets/branchleft.png");
  branchRight = loadImage("./assets/branchright.png");

  startscreen = loadImage("./assets/startscreen.png");
  endscreen1 = loadImage("./assets/endscreen1.png");
  endscreen2 = loadImage("./assets/endscreen2.png");

  tryagain = loadImage("./assets/tryagain.png");
  saybye = loadImage("./assets/saybye.png");

}

function setup() {

  rectMode(CENTER);
  imageMode(CENTER);

  createCanvas(700, 900);

  // start image from the top (imageMode is CENTER)
  bgY = bgImg.height / 2;
  bgY2 = bgImg2.height / 2;

  //calculating the cel width and height
  celW = spriteSheet.width / sX;
  celH = spriteSheet.height / sY;
  //breaking the spritesheet into cels and storing it in an array
  for (let i = 0; i < sY; i += 1) {
    for (let j = 0; j < sX; j += 1) {
      cels[i * sX + j] = spriteSheet.get(j * celW, i * celH, celW, celH);
      celsLhands[i * sX + j] = lhspriteSheet.get(j * celW, i * celH, celW, celH);
      celsRhands[i * sX + j] = rhspriteSheet.get(j * celW, i * celH, celW, celH);
    }
  }



  //create Rangu
  rangu = new Rangu(width / 2, height / 2, 350, cels, celsLhands, celsRhands);


  //create an initial set of branches

  for (let i = height; i < 10 * height; i += random(200 + frameCount * 0.8, 500 + frameCount * 1.5)) {
  let newBranch = new Branch(random(width * 0.15, width * 0.85), i, 100, branchLeft, branchRight);
  branches.push(newBranch)
  }
}

function draw() {

  //startscreen and game start
  if (hasGameStarted == false && isGameOver == false) {
    image(startscreen, width / 2, height / 2);
  } else if (hasGameStarted == true && isGameOver == false) {
    drawBackgrounds();
    changeSpeed();
    if (bgY > (height - bgImg.height / 2) || 
    bgY2 > (height - bgImg2.height / 2)){
    drawBranches()
    }
    
    //drawing the monkey
    rangu.move();
    rangu.drawRangu();
  }
  //gameover player lost
  else if (isGameOver == true && playerWon == false) {
    drawBackgrounds();
     rangu.move();
    //  rangu.fall();
     rangu.drawRangu();
     
    image(tryagain, width / 2 - 150, height / 2);
    image(saybye, width / 2 + 150, height / 2);
  }

 
  if (ses == true) {
    image(endscreen1, width / 2, height / 2);
  }
  if(ses2 == true) {
    image(endscreen2, width / 2, height / 2);
  } 
}

function mousePressed() {

  if(ses == true && ses2==false) {
    ses2 = true;
    
  } else if(ses2 == true) {
    window.location.reload();
  }

    //grabbing the branches
    if (hasGameStarted == true) {
      for (let i = 0; i < branches.length; i += 1) {
        rangu.grabBranch(branches[i]);

      }
    } else {
      hasGameStarted = true;
      //bg.loop();
    }

    // this is only on the last screen
    if (playerWon == false && isGameOver == true) {
     if (mouseX > width/2) {
        ses = true;
    } else{ 
      window.location.reload();
    }
  }

  
}

// function mouseReleased() {
//    rangu.isGrabbed = false;
//     rangu.holdingLeft = false;
//     rangu.holdingRight = false;
//     console.log("in else")
// }

function drawBackgrounds() {

  let minY1 = height - bgImg.height / 2;
  let minY2 = height - bgImg2.height / 2;

  if (bgY > minY1) {
    bgY -= bgSpeed1;
    if (bgY < minY1) bgY = minY1;
  }

  if (bgY2 > minY2) {
    bgY2 -= bgSpeed2;
    if (bgY2 < minY2) bgY2 = minY2;
  }

  // draw backgrounds
  image(bgImg, width / 2, bgY);
  image(bgImg2, width / 2, bgY2);

  //console.log(bgY)
  if(bgY < -2330 ) {
    isGameOver= true;
    playerWon = true;
    image(endscreen1, width/2, height/2);
    ses = true;
  }
}

function drawBranches() {
  //drawing the branches
  if (isGameOver == false) {
    for (let i = 0; i < branches.length; i += 1) {
      branches[i].draw();
      branches[i].move(branchSpeed);
      if ((branches[i].yPos < height / 4) && (branches[i].hasGrabbed == false)) {
        rangu.fall();
        isGameOver = true
      }
    } 
  } 
}

function changeSpeed() {
  //change speed based on grabbed state
  if (rangu.isGrabbed) {
    branchSpeed = 3;
  } else { branchSpeed = 5 }
}