class Chain{
    constructor(body1,body2,a,b){
        var chain_options = {
            bodyA: body1,
            bodyB:body2,
            pointA: {x:a,y:b},
            stiffness: 0.5,
            length:250
        }
        this.chain = Constraint.create(chain_options);
        this.a = a;
        this.b = b;
        World.add(world, this.chain)

    }

    display(){
        var posA = this.chain.bodyA.position
        var posB = this.chain.bodyB.position
        push()
        strokeWeight(7)
        // line(x1,y1,x2,y2)// point1 to point 2  x1,y1 are positions of point1
        line(posA.x+this.a,posA.y+this.b,posB.x,posB.y)
        pop()
    }
}