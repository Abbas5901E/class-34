class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.12,
            length: 250
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

display(){ 
    if(this.sling.bodyA) { 
        var pointA = this.sling.bodyA.position; 
        var pointB = this.sling.pointB; 
        stroke("black"); 
        line(pointA.x,pointA.y,pointB.x,pointB.y); 
    } 
}
}