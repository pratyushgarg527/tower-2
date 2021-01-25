const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;

function preload() {

}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    //level 1
    ground1 = new Ground(610, 330, 250, 10)
    box1 = new Box(520, 295, 30, 40)
    box2 = new Box(550, 295, 30, 40)
    box3 = new Box(580, 295, 30, 40)
    box4 = new Box(610, 295, 30, 40)
    box5 = new Box(640, 295, 30, 40)
    box6 = new Box(670, 295, 30, 40)
    box7 = new Box(700, 295, 30, 40)
    //level 2
    box8 = new Box(550, 255, 30, 40)
    box9 = new Box(580, 255, 30, 40)
    box10 = new Box(610, 255, 30, 40)
    box11 = new Box(640, 255, 30, 40)
    box12 = new Box(670, 255, 30, 40)
    //level 3
    box13 = new Box(580, 215, 30, 40)
    box14 = new Box(610, 215, 30, 40)
    box15 = new Box(640, 215, 30, 40)
    //level 4
    box16 = new Box(610,175,30,40)



    polygon = new Boxx(150,200,22,22)
    sling = new Slingshot(polygon.body,{x:200,y:200})

    
    



}

function draw() {
    background("#382C2C");
    Engine.update(engine);

    ground1.display();
    polygon.display();
    sling.display();
    fill("#87CEEA")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("#FFC0CB")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("#3FE0D0")
    box13.display();
    box14.display();
    box15.display();
    fill("#808080")
    box16.display();

    drawSprites;

    fill("#03F72E")
    textSize(30)
    text('"press space for one more chance"',350,50)
    

}


function mouseDragged() {

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased() {
    
    sling.fly();

}

function keyPressed(){

 
    if(keyCode === 32){

       sling.attach(polygon.body)


    }



  }