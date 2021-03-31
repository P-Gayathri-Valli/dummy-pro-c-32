const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating variables for engine & world
var engine, world;

//creating objects for game objects
var bg;
var test_tube_Image 

var ground

var stand_1,stand_2
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s20,s21,s22,s23,s24;

var tube1,tube2,tube3,tube4,tube5,tube6,tube7,tube8;

var ball1,ball2,ball3,ball4
var ball5,ball6,ball7,ball8
var ball9,ball10,ball11,ball12
var ball13,ball14,ball15,ball16
var ball17,ball18,ball19,ball20

function preload(){
  bg=loadImage("bg.jpg")
  test_tube_Image=loadImage("test tube.png")
}

function setup() {
//creating canvas
  createCanvas(800,600); 

//storing Engine and world in variables(engine & world)  
  engine = Engine.create();
  world = engine.world;
  
//creating ground  
  ground=new Ground(400,600,800,5)

//creating stands, on which the test tubes are placed
  stand_1=new Stand(400,305,800,5)
  stand_2=new Ground(400,555,800,5)

  s1=new S(180,200,10,200)
  s2=new S(120,200,10,200)
  s3=new S(150,300,70,10)

  s4=new S(300,200,10,200)
  s5=new S(240,200,10,200)
  s6=new S(270,300,70,10)

  s7=new S(420,200,10,200)
  s8=new S(360,200,10,200)
  s9=new S(390,300,70,10)

  s10=new S(540,200,10,200)
  s11=new S(480,200,10,200)
  s12=new S(510,300,70,10)

  s13=new S(180,450,10,200)
  s14=new S(120,450,10,200)
  s15=new S(150,550,70,10)

  s16=new S(300,450,10,200)
  s17=new S(240,450,10,200)
  s18=new S(270,550,70,10)

  s19=new S(420,450,10,200)
  s20=new S(360,450,10,200)
  s21=new S(390,550,70,10)

  s22=new S(540,450,10,200)
  s23=new S(480,450,10,200)
  s24=new S(510,550,70,10)

//creating tubes using Test_tube class, 
//inside which the colored balls will be transferred

//first line
  tube1= createSprite(150,200,5,5)
  tube1.addImage(test_tube_Image)
  
  tube2= createSprite(270,200)
  tube2.addImage(test_tube_Image)

  tube3= createSprite(390,200)
  tube3.addImage(test_tube_Image)

  tube4= createSprite(510,200)
  tube4.addImage(test_tube_Image)


//second line
  tube5= createSprite(150,450)
  tube5.addImage(test_tube_Image)

  tube6= createSprite(270,450)
  tube6.addImage(test_tube_Image)

  tube7= createSprite(390,450)
  tube7.addImage(test_tube_Image)

  tube8= createSprite(510,450)
  tube8.addImage(test_tube_Image)


//creating balls
  ball1=new Pink_ball(150,250)
  ball2=new Pink_ball(150,200)
  ball3=new Pink_ball(150,150)
  ball4=new Pink_ball(150,100)

  ball5=new Purple_ball(270,250)
  ball6=new Purple_ball(270,200)
  ball7=new Purple_ball(270,150)
  ball8=new Purple_ball(270,100)

  ball9=new Brown_ball(390,250)
  ball10=new Brown_ball(390,200)
  ball11=new Brown_ball(390,150)
  ball12=new Brown_ball(390,100)

  ball13=new Yellow_ball(510,250)
  ball14=new Yellow_ball(510,200)
  ball15=new Yellow_ball(510,150)
  ball16=new Yellow_ball(510,100)

  ball17=new White_ball(150,450)
  ball18=new White_ball(150,400)
  ball19=new White_ball(150,350)
  ball20=new White_ball(150,320)



}

function draw() {
//drawing sprites  
drawSprites()

//giving background image  
  background(bg);  

//updating the engine  
  Engine.update(engine); 

//dispaying ground
  ground.display()  

//displaying the bodies  
  tube1.display()   
  tube2.display()   
  tube3.display()   
  tube4.display()   
  tube5.display()   
  tube6.display()   
  tube7.display()   
  tube8.display()   

  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ball6.display()
  ball7.display()
  ball8.display()
  ball9.display()
  ball10.display()
  ball11.display()
  ball12.display()
  ball13.display()
  ball14.display()
  ball15.display()
  ball16.display()
  ball17.display()
  ball18.display()
  ball19.display()
  ball20.display()


  stand_1.display()
  stand_2.display()

  s1.display()
  s2.display()
  s3.display()
  s4.display()
  s5.display()  
  s6.display()
  s7.display()
  s8.display()
  s9.display()
  s10.display()
  s11.display()
  s12.display()
  s13.display()
  s14.display()
  s15.display()
  s16.display()
  s17.display()
  s18.display()
  s19.display()
  s20.display()
  s21.display()
  s22.display()
  s23.display()
  s24.display()

    
}

/*function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x: mouseX, y: mouseY})
  Matter.Body.setPosition(ball2.body,{x: mouseX, y: mouseY})
  Matter.Body.setPosition(ball8.body,{x: mouseX, y: mouseY})

} */

function mousePressed(){
  Matter.Body.setPosition(ball1.body,{x: 200, y: 200})

}