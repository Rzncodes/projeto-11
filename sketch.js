var sea
var ship
var seaimage
var shipimage

function preload(){
seaimage = loadImage("sea.png");
shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(seaimage);
  ship=createSprite(130,300,30,30);
  ship.addAnimation("navegacao",shipimage);
  ship.scale=0.25


}

function draw() {
  background("blue");
    drawSprites();

 
}
