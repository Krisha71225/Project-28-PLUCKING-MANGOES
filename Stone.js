class Stone {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.image = loadImage("stone.png");
        this.radius = 50;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate (this.body.angle);
        imageMode(CENTER);
        
        image(this.image , 0, 0, this.radius, this.radius);
        pop();
    }
}