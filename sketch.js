const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionheight=300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(240,795,480,10);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionheight/2,10,divisionheight));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(50,450),30));
  }  
  for(var k=0;k<particles.length;k++){
    particles[k].display();
  }
  for(var l=0;l<divisions.length;l++){
    divisions[l].display();
  }
  ground.display();
}