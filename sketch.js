var bg1, snow1, snow_dsgn1, snow2, snow_dsgn2;

function preload(){
  bg1 = loadImage("snow3.jpg");
  bg2 = loadImage("snow1.jpg");
  snow_dsgn1 = loadImage("snow4.webp")
  snow_dsgn2 = loadImage("snow5.webp")
}

function setup(){
  createCanvas(800,800);
}

function draw(){
  background(bg1); 

  spawnSnow1();
  spawnSnow2();
  
  drawSprites();
}

function spawnSnow1(){
  if(frameCount%20 === 0) {
    snow1 = createSprite(Math.round(random(50, 750)), 0);
    snow1.addImage(snow_dsgn1);
    snow1.lifetime = 170;
    snow1.velocityY = 5;
    snow1.scale = 0.1;
  }
}

function spawnSnow2(){
  if(frameCount%20 === 0) {
    snow2 = createSprite(Math.round(random(50, 750)), 0);
    snow2.addImage(snow_dsgn2);
    snow2.lifetime = 170;
    snow2.velocityY = 5;
    snow2.scale = 0.1;
  }
}