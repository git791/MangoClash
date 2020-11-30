
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Stone1, Boy1, Mango1, Mango2, Mango3, Mango4, Mango5;

var gameState = "onSling";
var stones = [];
var mangoes = [];

function preload(){

	boy = loadImage("PluckMango/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();

	Boy1 = addImage("a boy", boy);

	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Boy1 = createSprite(200 ,200 ,50 ,50);
  Stone1 = new Stone(190, 200, 50, 50);
  stones.push(Stone1);
  Tree1 = new Tree(300, 200, 50, 50);
  slingshot = new SlingShot(Stone.body, {x: 200, y:200});

  Mango1 = new Mango(285, 250, 50, 50);
  Mango2 = new Mango(315, 240, 50, 50);
  Mango3 = new Mango(300, 230, 50, 50);
  Mango4 = new Mango(310, 235, 50, 50);
  Mango5 = new Mango(295, 245, 50, 50);
  mangoes.push(Mango1);
  mangoes.push(Mango2);
  mangoes.push(Mango3);
  mangoes.push(Mango4);
  mangoes.push(Mango5);

  detectCollision(stone, Mango1);
  detectCollision(stone, Mango2);
  detectCollision(stone, Mango3);
  detectCollision(stone, Mango4);
  detectCollision(stone, Mango5);

  Boy1.display();
  Stone1.display();
  Tree1.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  drawSprites();
 
}


function mouseReleased(){
  slingshot.fly();
  stones.pop();
  gameState = "launched";
  return false;
}

function keyPressed(){
  if((keyCode === 32) && gameState === "launched"){
      if(stones.length >= 0){
     Matter.body.setPosition(stones[stones.length-1].body,{x:200,y:50});
     slingshot.attach(stones[stones.length-1].body);
     gameState = "onSling";
  }
  }
}

function detectCollision(stones, mangoes){
     MangoBodyPosition = mangoes.body.position
     StoneBodyPosition = stones.body.position

     var distance = dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
     if(distance<= mangoes.r + stones.r){
       Matter.body.setStatic(mangoes.body, false);
     }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.body.setPosition(stone.body, {x:235, y:420})
    slingshot.attach(stone.body);
  }
}