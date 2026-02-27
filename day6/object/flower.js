class Flower {
    constructor(x, y, size, r,g,b, stem) {
        this.x = x
        this.y = y
        this.size = size
        this.r = r;
        this.g = g;
        this.b = b;
        this.floorx = x
    }

    drawFlower() {
        fill(this.r, this.g, this.b);
        line(this.x, this.y + this.size / 1.2, this.floorx, height)
        triangle(this.x, this.y, this.x - this.size / 1.2, this.y + this.size / 1.2, this.x + this.size / 1.2, this.y + this.size / 1.2)

    }

    swayFlower(sway) {
        this.x += sway;

    }

    paintFlower(paint) {
        this.r += paint;
    }
}