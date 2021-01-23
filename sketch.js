var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redblock1sprite,redblock2sprite,redblock3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


redblock1sprite=createSprite(460,620,20,100)
redblock1sprite.shapeColor=color("red");

redblock2sprite=createSprite(350,660,200,20)
redblock2sprite.shapeColor=color("red");

redblock3sprite=createSprite(250,620,20,100)
redblock3sprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground)
	 
	 redblock1sprite = Bodies.rectangle(460, 620,20,100, {isStatic:true} );
	World.add(world,redblock3sprite)
	
	redblock2sprite = Bodies.rectangle(350, 660, 200, 20, {isStatic:true} );
	World.add(world,redblock3sprite)

	redblock3sprite = Bodies.rectangle(250, 620, 20 ,100, {isStatic:true} );
	World.add(world,redblock3sprite)
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  

  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody,false);
  }
}



