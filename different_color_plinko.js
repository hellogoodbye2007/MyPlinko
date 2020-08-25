class Particle{
    constructor(x,y){
        var options={
            restitution:0.4
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        this.color=color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        fill(this.color);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}