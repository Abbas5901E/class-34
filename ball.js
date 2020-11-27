class wrecker {
    constructor(x, y, angle){
        var options = {frictionAir:0.00000000000000000000001, density:1};
        this.radius = 60;
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        World.add(world, this.body);
    }
     display(){
         var pos = this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         imageMode(CENTER);
         rectMode(CENTER);
         fill("white");
         ellipse(0, 0, this.radius);
         pop();

     }
}