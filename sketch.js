var fixRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixRect=createSprite(200,200,50,80);
  fixRect.shapeColor="green";

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";

}

function draw() {
 background("white");

 movingRect.y=World.mouseY;
 movingRect.x=World.mouseX;

 console.log(fixRect.x-movingRect.x);

 if(movingRect.x-fixRect.x<(fixRect.width/2+movingRect.width/2) && fixRect.x-movingRect.x<(fixRect.width/2+movingRect.width/2)){
  movingRect.shapeColor="red";
  fixRect.shapeColor="red";
 }
 else{
   movingRect.shapeColor="green";
   fixRect.shapeColor="green";
 }












  drawSprites();
}
