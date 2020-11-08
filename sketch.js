const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball1, ball2;
var color1, color2;
var v1,v2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options = {
        restitution: 1.5
    }
    ball1 = Bodies.circle (50, 50, 5, ball_options);
    World.add(world, ball1); 
    ball2 = Bodies.circle (350, 350, 5, ball_options);
    World.add(world, ball2);    
    color1 = color(random(0,360), random(0,360), random(0,360));
    v1 = random(1, 10);
    v2 = random(1, 10);
}
function draw(){
    background(0)
    Engine.update(engine);
    ellipseMode (RADIUS);
    ellipse (ball1.position.x , ball1.position.y, 20, 20);
    ellipse (ball2.position.x , ball2.position.y, 20, 20);
    var collision = Matter.SAT.collides(ball1.body, ball2.body);
    background(0);
    if (collsion.collided){
        color2 = color(random(0,360),random(0,360),random(0,360));
        ball1.shapeColor = color2;
        ball2.shapeColor = color2;
    }


drawSprites();
}