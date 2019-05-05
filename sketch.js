let canvas
let things
// Constants
const Y_AXIS = 1;
const X_AXIS = 2;

let faveImgs = []
let faveThings = []
let pressed = 'start'

let gradient1, gradient2


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function preload() {
  for (let i = 0; i < 2; i++) {
    faveImgs[i] = loadImage(`./img${i}.png`);
  }
}

function setup() { 
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0)
  canvas.style('z-index', '-1') 

  things = createGraphics(windowWidth-200, windowHeight-200)

  for (let i = 0; i < faveImgs.length; i++) {
    let x = random(windowWidth-200);
    let y = random(windowHeight-200);
    let r = random(50, 150);
    let fave = new FavoriteThings(x, y, r, faveImgs[i]);
    faveThings.push(fave);
}

  colorArray = [color(105, 221, 255), color(150, 205, 255), color(216, 225, 255), color(219, 186, 221), color(190, 146, 162)]
  darkColors = [color(62, 147, 173), color(103, 147, 191), color(183, 192, 229), color(192, 155, 196), color(165, 119, 136)]

  gradient1 = random(colorArray)
  gradient2 = random(colorArray)


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
    return random(windowWidth)
  }
  if (axis === 'Y') {
    return random(windowHeight)
  }
}

function addObjects() {
  for (var i = 0; i < 50; i++) {

    noStroke();
    fill(random(darkColors));
    triangle(randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'))
    quad(randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'), randomVal('X'), randomVal('Y'))
    ellipse(randomVal('X'), randomVal('Y'), random(15), random(15));
  }
}

class FavoriteThings {
  constructor (x, y, r, img) {
    this.x = x
    this.y = y
    this.r = r
    this.img = img
  }

  show() {
    things.image(this.img, this.x, this.y, this.r, this.r);
  }
}

function showThings() {
  for (let i = 0; i < faveThings.length; i++) {
    faveThings[i].show();
  } 
  image(things, 150, 75)
}

function mousePressed() {
  if (pressed === 'start') {
    showThings()
    return pressed = false
  }
  if (pressed === false || pressed === 'start') {
    redraw()
    return pressed = true
  }

  if (pressed === true) {
    redraw()
    return pressed = false
  }
}

function draw() {
  setGradient(0, 0, windowWidth, windowHeight, gradient1, gradient2);

  fill(0)
  // ellipse(25, 25, 50, 50)

  if (pressed === true) {
    showThings()
  }

  // addObjects()
  // background('#fae')
}
