class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.4
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        fill("white");
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}