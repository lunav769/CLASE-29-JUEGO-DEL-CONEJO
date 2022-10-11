const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit_con;
var bgImg, food, rabbit;

function peloud(){
  bgImg=loadImage("background.png")
  food=loadImage("sandia.png")
  rabbit=loadImage("Rabbit-01.png")
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope= new Rope(6,{x:245,y:30})

  var fruit_options={
    density:0.001
  }
  fruit=Bodies.circle(300,300,15,fruit_options);
  Matter.Composite.add(rope.body,fruit)
  fruit_con=new Link(rope, fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //imageMode(CENTER)
  textSize(50)
  
}

function draw() 
{
  background(51);
  //image(bgImg, 50, height/2,490,690)
  
  
  image(food, fruit.position.x, fruit.position.y, 70, 70);
  rope.show()
  Engine.update(engine);
  ground.show();

 
   
}
