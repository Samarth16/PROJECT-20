//variables
var canvas,bg,bgImg;
var tom,tomImg;
var tomRun,tomImgRun;
var tomFall,tomImgFall;
var jerry,jerryImg;
var jerryRun,jerryImgRun;
var jerryFall,jerryImgFall; 

  
function preload(){
  //perloading images 
  bgImg = loadImage("images/garden.png");
  tomImg= loadImage("images/cat1.png");
  tomImgRun=loadAnimation("images/cat2.png","images/cat3.png"); 
  tomImgFall= loadAnimation("images/cat4.png"); 
  jerryImg=loadImage("images/mouse1.png"); 
  jerryImgRun= loadAnimation("images/mouse2.png","images/mouse3.png"); 
  jerryImgFall=loadAnimation("images/mouse4.png"); 
}

function setup(){

 createCanvas(1000,800);

 //tom sprite
 tom = createSprite(870,670);
 tom.addImage("cat1",tomImg);
 tom.scale = 0.13;

 //jerry sprite
 jerry = createSprite(110,670);
 jerry.addImage("mouse1",jerryImg);
 jerry.scale = 0.13;

}

      
function draw(){
 
 background(bgImg);
 drawSprites();

 keyPressed();
 collision();

 //if codition for collision 
 if(collision()){
   tom.velocityX = 0;
   tom.x = tom.x + 40;
   tom.addAnimation("fall1",tomImgFall);
   tom.changeAnimation("fall1");

   jerry.addAnimation("fall2",jerryImgFall);
   jerry.changeAnimation("fall2");
   jerry.x = tom.x - 40;
  }

}

//function collision
function collision(){
  if ( (tom.x - jerry.x) - 10 < (tom.width - jerry.width)/2){
   return true;
 }
 else 
 {
   return false;
 }
}

//function key pressed
function keyPressed(){
  if(keyDown(LEFT_ARROW)){
    tom.velocityX = -3;
    tom.addAnimation("running1",tomImgRun);
    tom.changeAnimation("running1");

    jerry.addAnimation("teasing",jerryImgRun);
    jerry.changeAnimation("teasing");
  }
}


