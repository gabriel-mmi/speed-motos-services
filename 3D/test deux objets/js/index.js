let Casque;
let Clef;
let mouseX
let mouseY

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX - window.innerWidth / 2;
  mouseY = e.clientY - window.innerHeight / 2;
});

function preload() {
  Casque = loadModel('models/Casque.obj', true);
  Clef = loadModel('models/Clef.obj', true);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  noStroke()
}

function draw() {
  // background(1000)
  clear()
  scale(1);
  ambientLight(230);
  directionalLight(40, 40, 40, 1, 1, 0);
  push()
  translate(window.innerWidth / 4, 0)
  rotateY((mouseX - window.innerWidth / 4) / window.innerWidth * (Math.PI / 2));
  rotateX(-mouseY / window.innerHeight * (Math.PI / 2));
  fill(240, 240, 240);
  model(Casque);
  pop()
  push()
  translate(-window.innerWidth / 4, 0)
  rotateY((mouseX + window.innerWidth / 4) / window.innerWidth * (Math.PI / 2));
  rotateX(-mouseY / window.innerHeight * (Math.PI / 2));
  rotateZ(Math.PI / 2)
  fill(240, 240, 240);
  model(Clef);
  pop()
}
