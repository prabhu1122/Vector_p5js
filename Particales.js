////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class particale {
    constructor() {
        //particles radius
        this.radius = 5;
        this.pos = createVector(0,0);
        this.vel = createVector(0, 0);
        
        //this.vel = p5.Vector.random2D();
        //this.vel.mult(.3);
        //this.acc.setMag(.01);
        //this.acc.normalize();
        //this.acc.mult(.1);
        //this.acc.setMag(.1);   // same as above line 8,9.
        //this.acc.setMag(random(0, 0));
        
        //display the sketch
        this.show = function() {
            fill(250);
            noStroke();
            ellipse(this.pos.x, this.pos.y, 2 * this.radius, 2 * this.radius);
        };
        //update the sketch
        this.update = function() {
            let mouse = createVector(mouseX, mouseY);
            this.acc = p5.Vector.sub(mouse,this.pos);
            this.acc.setMag(0.1);
            /*this.acc = p5.Vector.random2D();
            this.acc.normalize();
            this.vel.limit(3);      //it set the value of velocity to a limit 
            this.acc.mult(0.03);     //it will stop the mover to zero
            //this.vel.mult(0);*/
            //this.vel.limit(2);
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
