class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:1.2,
            length: 450
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    fly(){
        this.throw.bodyA=null;
    }

    attach(bodyA){
        this.throw.bodyA=bodyA;
    }

    display(){
       if(this.throw.bodyA){
           var pointA=this.throw.bodyA.position;
           var pointB=this.pointB;
           push();
           stroke(42,22,8);
           strokeWeight(0);
           line(pointB.x,pointB.y,pointA.x,pointB.y);
           pop();
       }
    }
    
}