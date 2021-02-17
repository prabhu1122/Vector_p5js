class particale {
    constructor() {
        //particles radius
        this.radius = 5;
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0.1);
        //display the sketch
        this.show = function() {
            fill(250);
            noStroke();
            ellipse(this.pos.x, this.pos.y, 2 * this.radius, 2 * this.radius);
        };
        //update the sketch
        this.update = function() {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.setBoundry();
        };
        // set the bounderies so that particales remains in display
        this.setBoundry = function() {
            if (this.pos.x >= innerWidth - this.radius) {
                this.pos.x = innerWidth - this.radius;
                this.vel.x *= -1;
            }
            if (this.pos.x <= this.radius) {
                this.pos.x = this.radius;
                this.vel.x *= -1;
            }
            if (this.pos.y >= innerHeight - this.radius) {
                this.pos.y = innerHeight - this.radius;
                this.vel.y *= -.5;
            }
            if (this.pos.y <= this.radius) {
                this.pos.y = this.radius;
                this.vel.y *= -1;
            }
        };
    }
}