class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("mango.png");
        this.radius = 2;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30);
        pop();
    }
}