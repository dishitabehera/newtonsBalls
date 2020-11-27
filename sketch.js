const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint
function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new ground(400, 100, 800, 40);

  ball1 = new Ball(300, 350, 30);
  chain1 = new Chain(box1.body, ball1.body,-100,0);

  ball2 = new Ball(370, 350, 30);
  chain2 = new Chain(box1.body, ball2.body,-30,0);

  ball3 = new Ball(440, 350, 30);
  chain3 = new Chain(box1.body, ball3.body, 40, 0);

  ball4 = new Ball(510, 350, 30);
  chain4 = new Chain(box1.body, ball4.body, 110, 0);

  ball5 = new Ball(580, 350, 30);
  chain5 = new Chain(box1.body, ball5.body, 180, 0);

  myMouse = Mouse.create(canvas.elt)
  var options = {
    mouse:myMouse
  }
  Mconstraint= MouseConstraint.create(engine, options)
  World.add(world,Mconstraint)
}

function draw() {

  Engine.update(engine)
  background(255,255,255);  

  box1.display();
  ball1.display()
  chain1.display();

  ball2.display()
  chain2.display();

  ball3.display();
  chain3.display();

  ball4.display();
  chain4.display();

  ball5.display();
  chain5.display();

}
function keyPressed(){
if(keyCode === 38){
console.log("upArrow")
Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -100, y: -100});
}else if(keyCode === 40){
  Matter.Body.applyForce(ball5.body, ball5.body.position, {x: 50, y: 50});
}
}