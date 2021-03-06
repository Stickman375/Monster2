
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var superhero,rope,ground,monster;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26;

function preload()
{
	backgroundImage = loadImage("background.png");
}

function setup() {
	createCanvas(3000,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (600, 600, 1200, 20);
  superhero= new Superhero(400,800,250);
  rope=new Throw(superhero.body,{x:500,y:50});
  block1 = new Block(600,100,70,70);  
  block2 = new Block(900,100,70,70);  
  block3 = new Block(900,100,70,70);  
  block4 = new Block(900,100,70,70);
  block5 = new Block(900,100,70,70);  
  block6 = new Block(900,100,70,70);
  block7 = new Block(800,100,70,70);  
  block8 = new Block(800,100,70,70);
  block9 = new Block(800,100,70,70);  
  block10 = new Block(800,100,70,70);
  block11 = new Block(800,100,70,70);  
  block12 = new Block(800,100,70,70);
  block13 = new Block(800,100,70,70);
  block14 = new Block(700,100,70,70);  
  block15 = new Block(700,100,70,70);  
  block16 = new Block(700,100,70,70);  
  block17 = new Block(700,100,70,70);
  block18 = new Block(700,100,70,70);  
  block19 = new Block(700,100,70,70);
  block20 = new Block(700,100,70,70);  
  block21 = new Block(600,100,70,70);
  block22 = new Block(600,100,70,70);  
  block23 = new Block(600,100,70,70);
  block24 = new Block(600,100,70,70);  
  block25 = new Block(600,100,70,70);
  block26 = new Block(600,100,70,70);
  monster = new Monster(1100,550,300);
  
  

	//Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(backgroundImage);

  
   superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block22.display();
  monster.display();
  rope.display();
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}


