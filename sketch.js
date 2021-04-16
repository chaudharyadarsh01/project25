
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);

	paper1 = new Paper(100,305,50);
   
	box1 = new Box(480,640,120,10);
	box2 = new Box(480,580,10,80);
	box3 = new Box(600,580,10,80);

	ground = new Ground(0,650,1800,10);
}


function draw() {
  //rectMode(CENTER);
  background("lightblue");

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper1.display();

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-100});
	}
}



