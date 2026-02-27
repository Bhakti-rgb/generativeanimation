class Rangu {

    constructor(x, y, size, swingingImages, lhImages, rhImages) {

        this.x = x;
        this.y = y;
        this.size = size;

        //action variables
        this.isGrabbed = false;
        this.isFalling = false;
        this.grabStart = 0;
        this.tempCount=0;

        //branch variables
        this.holdingLeft =false;
        this.holdingRight = false;
       
        // Spritesheet variables
        this.swingingImages = swingingImages;
        this.lhImages = lhImages;
        this.rhImages = rhImages;

    }



    drawRangu() {
        if((frameCount - this.grabStart)>40){
            rangu.isGrabbed = false;
            rangu.holdingLeft = false;
            rangu.holdingRight = false;
            this.grabStart = 0;
        }
        //left hand holding branch
        if (this.holdingLeft == true) {
            this.tempCount+=branchSpeed;
            image(this.lhImages[0], this.x+30, this.y+205-this.tempCount, this.size)
            image(this.rhImages[0], this.x, this.y, this.size)
            image(this.swingingImages[0], this.x, this.y, this.size)
        } 
        //right hand holding
        else if (this.holdingRight == true) {
            this.tempCount+=branchSpeed;
            image(this.lhImages[4], this.x, this.y, this.size)
            image(this.rhImages[4], this.x, this.y+205-this.tempCount, this.size)
            image(this.swingingImages[4], this.x, this.y, this.size)
        } 
        //npt holding anything
        else {
            this.tempCount = 0;
            image(this.lhImages[2], this.x, this.y, this.size)
            image(this.rhImages[2], this.x, this.y, this.size)
            image(this.swingingImages[2], this.x, this.y, this.size)
        }

    }

    move(branch) {
        if (this.isFalling == true) {
            this.y += 5;
        } else {
            this.x = mouseX;
        }
    }

    //grabbing with limits not in negative
    grabBranch(branch) {
        if (
            ((branch.yPos - this.y) < 300 && (branch.yPos - this.yPos) > 0) ||
            ((this.y - branch.yPos) < 90 && (this.y - branch.yPos) > 0) &&
            (abs(this.x - branch.xPos) < 200)
        ) {

            this.grabStart = frameCount;
            this.isGrabbed = true;
            branch.hasGrabbed = true;

            if(branch.leftBranch == true) {
                this.holdingLeft = true;
            } else {
                this.holdingRight =  true;
            }
           
        } 
        // else {
        //      this.isGrabbed = false;
        //      this.holdingLeft = false;
        //      this.holdingRight = false;
        //       console.log("in else")

        // }
        // return false;
    }

    fall() {
        //console.log("in here");
        this.isFalling = true;


        // fall(branch) {
        //     if((this.isGrabbed == false) && (branch.yPos<0)) {
        //         this.isFalling = true
        //         this.y += 1
        //     }

        // }
    }

    
}