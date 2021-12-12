function setup() {
  createCanvas(400, 400,WEBGL);
  
}

function draw() {
  background(200,255,1);
  stroke(255,255,255);
  fill(255,255,0);
  strokeWeight(5);
  circle(0,0,150);
  stroke(0,0,156); 
  strokeWeight(8);
  line(0,0,150,150);
  rotateZ(millis() / 1000);
  box();
  
 
  
}