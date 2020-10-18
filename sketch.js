
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1,ground2;
var box1;
var polygon;
var slingshot;
var score=0;
var bg ="bg.png";
var backgroundImg;

function preload()
{
	getBackgroundImg();
}

function setup() {
  createCanvas(800, 700);
  
 


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,500,300,20);
ground2=new Ground(600,200,300,20);
ground3=new Ground(400,650,800,100);


box1=new Box(280,480,30,40);
box2=new Box(320,480,30,40);
box3=new Box(360,480,30,40);
box4=new Box(400,480,30,40);
box5=new Box(440,480,30,40);
box6=new Box(480,480,30,40);
box7=new Box(520,480,30,40);
box8=new Box(280,440,30,40);
box9=new Box(320,440,30,40);
box10=new Box(360,440,30,40);
box11=new Box(400,440,30,40);
box12=new Box(440,440,30,40);
box13=new Box(480,440,30,40);
box14=new Box(520,440,30,40);
box15=new Box(320,400,30,40);
box16=new Box(360,400,30,40);
box17=new Box(400,400,30,40);
box18=new Box(440,400,30,40);
box19=new Box(480,400,30,40);
box20=new Box(360,360,30,40);
box21=new Box(400,360,30,40);
box22=new Box(440,360,30,40);
box23=new Box(400,320,30,40);

box24=new Box(500,180,50,40);
box25=new Box(570,180,50,40);
box26=new Box(640,180,50,40);
box27=new Box(710,180,50,40);
box28=new Box(520,140,50,40);
box29=new Box(560,140,50,40);
box30=new Box(660,140,50,40);
box31=new Box(700,140,50,40);
box32=new Box(700,100,40,40);
box33=new Box(560,100,40,40);
box34=new Box(640,60,200,10);
polygon=new Polygon(100,150);



slingshot=new Slingshot(polygon.body,{x:100,y:150});







}


function draw() {


  rectMode(CENTER);
  if(backgroundImg){
    background(backgroundImg);
  }
 
  Engine.update(engine);


 
  strokeWeight(4);
  stroke("white");
  textSize(30);
  text (" SCORE:  "+ score,100,50);
  
  ground1.display();
  ground2.display();
  ground3.display();
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
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
 box33.display();
 box34.display();


 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 box10.score();
 box11.score();
 box12.score();
 box13.score();
 box14.score();
 box15.score();
 box16.score();
 box17.score();
 box18.score();
 box19.score();
 box20.score();
 box21.score();
 box22.score();
 box23.score();
 
 box24.score();
 box25.score();
 box26.score();
 box27.score();
 box28.score();
 box29.score();
 box30.score();
 box31.score();
 box32.score();
 box33.score();
 box34.score();

 polygon.display();
 slingshot.display();


 

  drawSprites();
 
}

 function mouseDragged(){

  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed (){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:150});
    slingshot.attach(polygon.body);
  }
}

async function getBackgroundImg(){

  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();

 var datetime=responseJSON.datetime;
 var hour=datetime.slice(11,13);

 if(hour>=6 && hour<=19){
   bg="bg.png";
 }
 else{
   bg="bg2.png";
 }
 backgroundImg=loadImage(bg);
 console.log(backgroundImg);

}


 
  
