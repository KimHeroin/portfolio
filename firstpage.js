let angle=1;
let img;
function preload(){
  img=loadImage("images/me.jpg");
}
function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  pointLight(230, 230, 230, mouseX-400, mouseY-400, 0 );
  background(255);
  normalMaterial();
  texture(img);
  box(200);
  rotate(angle, angle, angle);
  angle+=1;
}
