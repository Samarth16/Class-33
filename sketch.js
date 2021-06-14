
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1;
var rope1;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,50,160,20);
	bob1 = new bob(320,575,40);
	rope1=new rope(bob1.body,roofObject.body,-40, 0);
	wall1=new Wall(520,575);
	wall2=new Wall(520,525);
	wall3=new Wall(520,475);
	wall4=new Wall(520,425);
	


	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  fill("cyan");
  roofObject.display();

  fill("white");
  rope1.display();
  bob1.display();

  fill("brown");
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();


   

 // keyPressed();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-45});
	}
}






