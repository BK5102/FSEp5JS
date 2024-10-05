var x;
var y;

function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();
  textOutput();

  x = 0;
  speedX = 3;
   
  y = 0;
  speedY = 3;

}

function shapeBorder(){
  stroke(0);
  strokeWeight(2);

}

function draw() {
 background(247,198,142);

  //circle
  shapeBorder();
  fill(167,199,63);

  x = x + speedX;
  if (x > width){
    speedX *= -1;
    }
  if (x == 0){
    speedX *= -1 ;
    }
  circle(x,0,40);

  //rectangle
  shapeBorder();
  fill(242,135,64);

  y = y + speedY;
  if (y > width){
    speedY *= -1;
    }
  if (y == 0){
    speedY *= -1 ;
    }
  rect(40,y,100,40);

  //triangle
  shapeBorder();
  fill(98,160,215);

  orbitControl();
  let angleX = frameCount * 0.01;
  let angleY = frameCount * 0.03;
  rotateX(angleX);
  rotateY(angleY);

  triangle(30, 75, 58, 20, 86, 75);
  
  //cylinder
  shapeBorder();
  fill(103,11,149);

  cylinder(30, 50, 24, 2);




}
