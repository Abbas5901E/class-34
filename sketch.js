const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1;
var rope1;
var ground1;
var box1, box2, box3, box4, box5, box6, box7, box8;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball1 = new wrecker(200, 200);
    rope1 = new slingShot(ball1.body, {x:500, y: 30});
    ground1 = new Ground(600, 390, 1200, 20);

    box1 = new Box(500, 380, 50, 50);
    box2 = new Box(550, 380, 50, 50);
    box3 = new Box(500, 330, 50, 50);
    box4 = new Box(550, 330, 50, 50);
    box5 = new Box(500, 280, 50, 50);
    box6 = new Box(550, 280, 50, 50);
    box7 = new Box(500, 230, 50, 50); 
    box8 = new Box(550, 230, 50, 50);

    box9 = new Box(750, 380, 50, 50);
    box10 = new Box(800, 380, 50, 50);
    box11 = new Box(750, 330, 50, 50);
    box12 = new Box(800, 330, 50, 50);
    box13 = new Box(750, 280, 50, 50);
    box14 = new Box(800, 280, 50, 50);
    box15 = new Box(750, 230, 50, 50);
    box16 = new Box(800, 230, 50, 50);
    
}

function draw(){
    background("lightblue");

    Engine.update(engine);

    
    ground1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    ball1.display();
    rope1.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});
}