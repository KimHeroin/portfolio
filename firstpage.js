let angle=0;
let img;
function preload(){
  img = loadImage("images/me.jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
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
