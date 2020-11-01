var bullet, wall, speed, weight, thickness;
function setup() {
  console.log("setup called");
  createCanvas(1600, 800);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);
  bullet = createSprite(50, 100, 40, 10);
  bullet.shapeColor = ("white");
  bullet.velocityX = speed;
  wall = createSprite(1500, 100, thickness, height/2);
  wall.shapeColor =  color(80,80,80);

}

function draw() {
  console.log("draw called");
  background("black");

  if (bullet.isTouching(wall)) {
    bullet.x = 1180;
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
