const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine;
var myWorld;

var ground,ball;
var box1,box2;

function setup() {
  createCanvas(400,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

 //console.log(ground);
   
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);

  ground = new Ground(200,350,400,20);
}

function draw() {
  background(0);
   
  Engine.update(myEngine);
   
  box1.display();
  box2.display();

  ground.display();
  /*rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  circle(ball.position.x,ball.position.y,50);*/
}