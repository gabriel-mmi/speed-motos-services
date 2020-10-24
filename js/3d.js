// Gestion de la 3D

let Casque;
let Clef;
let mouseX
let mouseY

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX - window.innerWidth / 2;
  mouseY = e.clientY - window.innerHeight / 2;
});

function preload() {
  Casque = loadModel('../assets/models/Casque.obj', true);
  Clef = loadModel('../assets/models/Clef.obj', true);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  noStroke()
}

function draw() {
  clear()
  scale(2);
  ambientLight(230);
  directionalLight(40, 40, 40, 1, 1, 0);
  push()
  translate(window.innerWidth / 7, 0)
  rotateY((mouseX - window.innerWidth / 4) / window.innerWidth * (Math.PI / 1.5));
  rotateX(-mouseY / window.innerHeight * (Math.PI / 1.5));
  fill(240, 240, 240);
  model(Casque);
  pop()
  push()
  translate(-window.innerWidth / 9, 0)
  rotateY((mouseX + window.innerWidth / 4) / window.innerWidth * (Math.PI / 1.5));
  rotateX(-mouseY / window.innerHeight * (Math.PI / 1.5));
  rotateZ(Math.PI / 2)
  fill(240, 240, 240);
  model(Clef);
  pop()
}