
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
    bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkeyImage=loadImage("monkey.png");
 
}



function setup() {
  monkey=
  monkey=createSprite(200,200,200,20,10);
  monkey.addAnimation("monkey,30,10");
  monkey.scale=0.08;
  
banana=
  banana=createSprite(200,134,39,23);
  banana.addAnimation("banana,48,67");
  banana.scale=0.08;
  
  obstacle=
 obstacle=createSprite(213,200,30,40);
  obstacle.addAnimation("obstacle",30,40);
  obstacle.scale=0.08;
  
}


function draw() {
  

  
}






