let angle=0;
let img;

var sketchWidth;
var sketchHeight;

function preload(){
  img = loadImage("images/me.jpg")
}
function setup() {
  sketchWidth=document.getElementById("facecube").offsetWidth;
  sketchHeight=document.getElementById("facecube").offsetHeight;
  createCanvas(sketchWidth, sketchHeight, WEBGL);
  textureWrap(CLAMP);
}
function draw() {
  pointLight(255, 255, 255, mouseX-width, mouseY-height, 500);
  background(255);
  normalMaterial();
  texture(img);
  rotateX(angle+(mouseX)*0.0008);
  rotateY(angle+(mouseY)*0.0008);
  rotateZ(angle+(mouseX+mouseY)*0.0008);
  noStroke();
  box(300);
  sphere()
  angle+=0.005;
}

function windowResized(){
  sketchWidth = document.getElementById("facecube").offsetWidth;
  sketchheight = document.getElementById("facecube").offsetHeight;
  resizeCanvas(sketchWidth, sketchHeight);
}
