var bullet,thickness,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed = random(223,321) 
  weight = random(30,52)
  bullet = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = color(80,80,80)
  thickness = random(22,83)
  bullet.velocityX = speed    
  var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  if(deformation>180) 
  {
    bullet.shapeColor = "red"
  }
  if(deformation<180 && deformation>100)
  {
    bullet.shapeColor = "yellow"
  }
  if(deformation<180)
  {
    bullet.shapeColor = "green"
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}