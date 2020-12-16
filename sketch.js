//name spacing is used to write code easily
//We cannot change value of constant but we can change value of variable
const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine, world;

var box;

function setup() 
{
  createCanvas(800,400);

  //create the physics engine
  engine = Engine.create();
  //create world inside engine
  world = engine.world;

  //Javascript Object Notation
  //JSON is a way of storing information in javascript in the form of key value pairs
  //key is the name of the property and value is the value of the property
  var options = {
    isStatic: true
  }

  //create rectangular shape 
  box = Bodies.rectangle(200,100,50,50, options);
  // box = Bodies.rectangle(200,100,50,50, {isStataic: true});
  
  //we will add shape or body inside the world
  World.add(world, box);

  console.log(box);
  console.log(box.position.x);
  
}

function draw() 
{
  background(45,25,25); 

  //update engine so that the objects can follow the physics rules
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(box.position.x, box.position.y, 50, 50);
  
}