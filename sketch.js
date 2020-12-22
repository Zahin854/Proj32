const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9
 var box10,box11,box12,box13,box14,box15,box16
var box1A,box2A,box3A,box4A,box5A,box6A,box7A,box8A,box9A
var stand,standA
var polygon,polygonImg
var slingShot
var bg
var backgroundImg="sprites/bg1.jpg"
var score=0

function preload() {
   polygonImg=loadImage("polygon.png")
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
world=engine.world
ground=  new Ground(450,height,900,20)
    stand = new Ground(390,300,250,10);
    standA = new Ground(700,200,200,10);
 polygon= Bodies.circle(50,200,20);
 World.add(world,polygon)
slingShot= new Slingshot(this.polygon,{x:100,y:200});
//imageMode(CENTER)
//image(polygonImg,polygon.position.x,polygon.position.y,40,40)

    box1= new Box(300,275,30,40);
    box2= new Box(330,275,30,40);
    box3= new Box(360,275,30,40);
    box4= new Box(390,275,30,40);
    box5= new Box(420,275,30,40);
    box6= new Box(450,275,30,40);
    box7= new Box(480,275,30,40);
    //new row
    box8= new Box(330,235,30,40);
    box9= new Box(360,235,30,40);;
    box10= new Box(390,235,30,40);;
    box11= new Box(420,235,30,40);;
    box12= new Box(450,235,30,40);;
    //new row
    box13= new Box(360,195,30,40);
    box14= new Box(390,195,30,40);;
    box15= new Box(420,195,30,40);
    //final row
    box16= new Box(390,155,30,40);
    //sector  2
 box1A= new Box(640,175,30,40);
 box2A= new Box(670,175,30,40);
 box3A= new Box(700,175,30,40);
 box4A= new Box(730,175,30,40);
 box5A= new Box(760,175,30,40);

 //new row
 box6A= new Box(670,135,30,40);
 box7A= new Box(700,135,30,40);
 box8A= new Box(730,135,30,40);
 //ne rown
 box9A= new Box(700,95,30,40);
        


    


}

function draw(){
if(backgroundImg)
     background(backgroundImg);
     noStroke();
     textSize(35)
     fill("black")
     text("SCORE :" +score, width-300, 50)
    Engine.update(engine);
    strokeWeight(4)
    ground.display();
    stand.display();
    standA.display();
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
    box1A.display();
    box2A.display();
    box3A.display();
    box4A.display();
    box5A.display();
    box6A.display();
    box7A.display();
    box8A.display();
    box9A.display();
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
    //A
    box1A.score();
    box2A.score();
    box3A.score();
    box4A.score();
    box5A.score();
    box6A.score();
    box7A.score();
    box8A.score();
    box9A.score();
    
imageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    slingShot.display();

    

    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode==32){
      Matter.Body.setPosition(this.polygon,{x:50,y:200})
        slingShot.attach(this.polygon)
    }}
    async function getBackgroundImg(){
        var response = await fetch(" http://worldclockapi.com/api/json/est/now");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour =datetime.slice(11,13);
        
        if(hour>=06 && hour<=18){
            bg = "sprites/bg1.jpg";
        }
        else{
            bg = "sprites/bg2.jpg";
        }
    
        backgroundImg = loadImage(bg);
    }

    
