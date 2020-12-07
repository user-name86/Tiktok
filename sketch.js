var hr;
var min;
var sec;

function setup() {
  createCanvas(800,400);
  
  //createSprite(400, 200, 50, 50);
 
  //console.log('current second: \n'+sec)
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();
  
  secAngle = map(sec,0,60,0,360);
  stroke(255,100,150);
  strokeWeight(7);
  noFill();
  arc(0,0,300,300,0,secAngle);

  push();
  rotate(secAngle);
  stroke(255,100,150);
  strokeWeight(5);
  line(0,0,100,0);
  pop();


  minAngle = map(min,0,60,0,360);
  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,280,280,0,minAngle);

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(6);
  line(0,0,100,0);
  pop();


  hrAngle = map(hr%12,0,12,0,360);
  stroke(80,0,255);
  strokeWeight(7);
  noFill();
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  stroke(80,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke(255);
  point(0,0);

  
  drawSprites();


}