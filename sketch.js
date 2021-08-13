const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con, con2,con3,con4,con5,con6,con7,con8;
var ball2;
var b3;
let b4;
let b5;
let b6;
let b7, b8;
let roof, roofOpt;
//var backGround, back;
function preload()
{
  //back=loadImage("gradient_20_1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  /*backGround=createSprite(width/2,height/2);
  backGround.scale=2;
  backGround.addImage("back",back);*/
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.2,
    frictionAir:0.03
  }
  roofOpt={
    isStatic:true,
  }
  roof=Bodies.rectangle(width/2,20,width,40,roofOpt);
  
  ball2=Bodies.circle((width/2)-20,100,10,ball_options);
  ball = Bodies.circle(width/2,100,10,ball_options);
  b3=Bodies.circle((width/2)-10,100,10,ball_options);
  b4=Bodies.circle((width/2)-30,100,10,ball_options);
  b5=Bodies.circle((width/2)-40,100,10,ball_options);
  b6=Bodies.circle((width/2)-50,100,10,ball_options);
  b7=Bodies.circle((width/2)-70,100,10,ball_options);
  b8=Bodies.circle((width/2)-80,100,10,ball_options);

  World.add(world,ball);
  World.add(world,b3);
  World.add(world,b4);
  World.add(world,ball2);
  World.add(world,b5);
  World.add(world,b6);
  World.add(world,b7);
  World.add(world,b8);
  World.add(world,roof);
  
  con = Matter.Constraint.create({
          pointA:{x:width/2,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
        var w=(width/2)-20;
  con2= Matter.Constraint.create
  ( 
    {
      pointA:{x:w,y:20},
      bodyB:b3,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.1
    }
  )
  con3=Matter.Constraint.create
  (
    {
      pointA:{x:w-20,y:20},
      bodyB:ball2,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.1
    }
  )
  con4=Matter.Constraint.create
  (
    {
      pointA:{x:w-40,y:20},
      bodyB:b4,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.1
    }
  )
  con5=Matter.Constraint.create(
    {
      pointA:{x:w-60,y:20},
      bodyB:b5,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.1
    }
  )
  con6=Matter.Constraint.create(
    {
      pointA:{x:w-80,y:20},
      bodyB:b6,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.2
    }
  )
  con7=Matter.Constraint.create(
   {
    pointA:{x:w-100,y:20},
    bodyB:b7,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.2
   }
  )  
  con8=Matter.Constraint.create(
    {
     pointA:{x:w-120,y:20},
     bodyB:b8,
     pointB:{x:0,y:0},
     length:100,
     stiffness:0.2
    }
   )  
   World.add(world,con);
    World.add(world,con2);
    World.add(world,con3);
      World.add(world,con4);
      World.add(world,con5);
      World.add(world,con6);
      World.add(world,con7);
      World.add(world,con8);

      rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  push();
  background("deepPink");
  //drawSprites();
  Engine.update(engine);
  
  fill("blue");
  ellipse(ball.position.x,ball.position.y,10);
  fill("black");
  stroke("black");
  ellipse(b3.position.x,b3.position.y,10);
  stroke("navy")
  fill("navy");
  ellipse(ball2.position.x,ball2.position.y,10);
  stroke("magenta");
  fill("magenta");
  ellipse(b4.position.x,b4.position.y,10);
  stroke("deepSkyBlue");
  fill("deepSkyBlue");
  ellipse(b5.position.x,b5.position.y,10);
  stroke("brown");
  fill("brown");
  ellipse(b6.position.x,b6.position.y,10);
   stroke("green");
  fill("green");
  ellipse(b7.position.x,b7.position.y,10);
  stroke("yellow");
  fill("yellow");
  ellipse(b8.position.x,b8.position.y,10);
  stroke("red");
  fill("red");
  rect(roof.position.x,roof.position.y,width,40);

  strokeWeight(2);
  stroke("crimson");
  line(con2.pointA.x,con2.pointA.y,b3.position.x,b3.position.y);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con3.pointA.x,con3.pointA.y,ball2.position.x,ball2.position.y);
  line(con4.pointA.x,con4.pointA.y,b4.position.x,b4.position.y);
  line(con5.pointA.x,con5.pointA.y,b5.position.x,b5.position.y);
  line(con6.pointA.x,con6.pointA.y,b6.position.x,b6.position.y);
  line(con7.pointA.x,con7.pointA.y,b7.position.x,b7.position.y);
  line(con8.pointA.x,con8.pointA.y,b8.position.x,b8.position.y);
  
  pop();
  
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0});
    }
    if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.02,y:0});
    }
  }


