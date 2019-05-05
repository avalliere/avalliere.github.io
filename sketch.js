let canvas
// Constants
const Y_AXIS = 1;
const X_AXIS = 2;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function setup() { 
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0)
  canvas.style('z-index', '-1') 

  colorArray = [color(105, 221, 255), color(150, 205, 255), color(216, 225, 255), color(219, 186, 221), color(190, 146, 162)]
  // darkColors = [color(62, 147, 173), color(103, 147, 191), color(183, 192, 229), color(192, 155, 196), color(165, 119, 136)]
  darkColors = [color(62, 147, 173, 50), color(203, 147, 191, 50), color(183, 192, 229, 50), color(192, 155, 196, 50), color(165, 119, 136, 50)]


  noLoop();
} 

function setGradient(x, y, w, h, c1, c2) {
  noFill();

  for (let j = x; j <= x+w; j++) {
    var inter2 = map(j, x, x+w, 0, 1);
    var d = lerpColor(c1, c2, inter2);
    stroke(d);
    line(j, y, j, y+h);
  }
}

function randomVal(axis) {
  if (axis === 'X') {
    return random(windowWidth-windowWidth-200, windowWidth+200)
  }
  if (axis === 'Y') {
    return random(windowHeight-windowWidth-200, windowHeight+200)
  }
}

function addObjects() {
  for (var i = 0; i < 10; i++) {
    noStroke();
    fill(random(darkColors));
    triangle(randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'))
    // triangle(randomVal(1500), randomVal(1500), randomVal(1500), randomVal(1500), randomVal(1500), randomVal(1500))
    // quad(randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'))
    ellipse(randomVal('X'), randomVal('Y'), random(1500), random(1500));
  }
}
  
function draw() {
  setGradient(0, 0, windowWidth, windowHeight, random(colorArray), random(colorArray));
  addObjects()
  // background('#fae')
}