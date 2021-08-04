let angle=1;
let img;
function preload(){
  img=loadImage("images/me.jpg");
}
function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(255);
  texture(img);
  box(200);
  rotate(angle, angle, angle);
  angle+=1;
}
