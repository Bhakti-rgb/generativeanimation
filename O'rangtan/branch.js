    class Branch {
    constructor(xBranchEnd, yPos, h, branchLeft, branchRight) {
        this.xBranchEnd = xBranchEnd;
        this.yPos = yPos;
        // this.w = w;
        this.h = h;
        this.branchLeft = branchLeft;
        this.branchRight = branchRight;
        this.hasGrabbed = false;
        this.leftBranch = false;

        if(this.xBranchEnd <width/2) {
            this.w = this.xBranchEnd;
            this.xPos = this.xBranchEnd/2;
            this.leftBranch = true
            
            
        } else {
            this.w = width - this.xBranchEnd;
            this.xPos = this.xBranchEnd +this.w/ 2;
        }
    }


    draw() {

        // if (this.hasGrabbed == false) {
        //     fill("red");
        // } else {
        //     fill("blue");
        // } 
        //     rect(this.xPos, this.yPos, this.w, 20);

        if (this.leftBranch == true){
            image(this.branchLeft, this.xPos, this.yPos, this.w, 100);
        } else {
            image(this.branchRight, this.xPos, this.yPos, this.w, 100);
        }

      
    }

    move(branchSpeed) {
        this.yPos -= branchSpeed; //move up
    }
}