
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


var ground;
var ball;


function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(400,390,1500,20);
  ground1 =new Ground1(800,390,20,200);
  ground2 =new Ground2(700,390,20,200);
  
 
  var Option={
    restitution:1
  }
  ball=Bodies.circle(100,200,10,Option)
  World.add(world,ball)

 

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  ground1.show()
  ground2.show()
  if(keyDown("up")){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:-0.01})
  }
  


  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10)
}



