var bullet, wall, speed, weight, thickness;
function setup() {
  createCanvas(1600, 800);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(32,100);
  bullet = createSprite(50, 100, 40, 10);
  bullet.shapeColor = ("white");
  bullet.velocityX = speed;
  wall = createSprite(1500, 100, thickness, height/2);
  wall.shapeColor =  color(80,80,80);

}

function draw() {
  background("black");

  if (bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    bullet.x = bullet.x-30;
    var damage = 0.5 * weight * speed * speed / thickness*thickness*thickness;
  }
  if (damage > 10) {
    bullet.shapeColor = color(255, 0, 0);
  }
  
  if (damage < 10) {
    bullet.shapeColor = color(0, 255, 0);
  }

  drawSprites();
}
