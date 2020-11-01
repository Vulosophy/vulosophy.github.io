var car, wall, speed, weight;
function setup() {
  createCanvas(1600, 800);
  speed = random(45, 90);
  weight = random(500, 1600);
  car = createSprite(50, 100, 40, 10);
  car.shapeColor = ("white");
  car.velocityX = speed;
  wall = createSprite(1500, 100, 60, height);
  wall.shapeColor = ("white");

}

function draw() {
  background("black");

  if (car.isTouching(wall)) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
  }
  if (deformation > 180) {
    car.shapeColor = color(255, 0, 0);
  }
  if (deformation < 180 && deformation > 100) {
    car.shapeColor = color(230, 230, 0);
  }
  if (deformation < 100) {
    car.shapeColor = color(0, 255, 0);
  }

  drawSprites();
}
