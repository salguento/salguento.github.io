let t = 0;
let date = new Date().getSeconds();
let NUM_LINES = date * 5;

let year = new Date().getFullYear();

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0)
  canvas.style("z-index: -1");
  canvas.style("position: fixed")
}

function draw() {
  background(33, 37, 41);
  strokeWeight(1);
  translate(width / 2, height / 2);
  stroke(sin(t/12) * height/8, sin(t/24) * width/4, 255, 75);

  for (var i = 0; i < NUM_LINES; i++) {
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
  }

  t += 0.05;
}

function x1(t) {
  return sin(-t / 10) * NUM_LINES + sin(t / 15) * width/2;
}

function y1(t) {
  return cos(t / 10) * 500 + -cos(t / 25) * height/2;
}

function x2(t) {
  return -cos(t / 15) * NUM_LINES + cos(t / 250) * width/3;
}

function y2(t) {
  return sin(t / 10) * 500 + sin(-t / NUM_LINES) * height/3;
}
