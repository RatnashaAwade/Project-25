class Paper{
    constructor(x,y,radius){
        var options ={
            restitution:0.5,
            friction:0.5,
            density:0.7
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("red");
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }
} 