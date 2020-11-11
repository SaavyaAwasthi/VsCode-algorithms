var fixedRectangle,movingRectangle

function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 50, 50);
  movingRectangle = createSprite(300,200,50,50)
  
}

function draw() {
  background("black"); 
  
  
  movingRectangle.x = mouseX
  movingRectangle.y = mouseY

  if(fixedRectangle.x - movingRectangle.x <= fixedRectangle.width/2 + movingRectangle.width/2  && 
    movingRectangle.x - fixedRectangle.x <= fixedRectangle.width/2+ movingRectangle.width/2 &&
    fixedRectangle.y - movingRectangle.y <= fixedRectangle.height/2 + movingRectangle.height/2&&
    movingRectangle.y - fixedRectangle.y <= movingRectangle.height/2 + fixedRectangle. height/2){
    fixedRectangle.shapeColor = "red"
    movingRectangle.shapeColor = "green"

  }
  else{

    fixedRectangle.shapeColor = "white"
    movingRectangle.shapeColor = "pink"
  }


  drawSprites();
}