//Time to set up.

function setup() {

  // I feel like these days it's just easier to use canvas dimensions that can also be variables.
  createCanvas(windowWidth, windowHeight);
}

//setting up some initial variables
let initialX = 50
let initialY = 50
let currentX = initialX
let circleSize = 50
let pad // I had to change where this was because of the order of the functions.


// time to draw

function draw() {
  background("black")
//this function makes the circles in the correct spots at the correct sizes.
  makeCircles();

  //slow down the frames so you can see the color changes
  if (frameCount % 2 == 0) {
    moveCircles();

  }
  //this resets the circles so they move across the screen continuously and go back to the beginning when they reach the right side.
  if (currentX > width) {
    currentX = initialX;
  }
}

//MY FUNCTIONS
//this function changes the color of the current circle as X value changes
function moveCircles() {
  currentX += pad;
}


//this function gives the circles the correct spacing and size
function makeCircles() {
  let numPerRow = 10;
  let circleSize = 50;
  pad = floor(width / numPerRow);

  for (let y = circleSize; y < height; y += pad) {
    for (let x = circleSize; x < width; x += pad) {
      drawCircles(x, y);
    }
  }
}

//this function draws the circles
function drawCircles(x, y) {
  if (currentX == x) {
    fill(255, 0, 0)
  } else {
    fill(255, 255, 255);
  }
  noStroke()
  ellipse(x, y, circleSize, circleSize);
}
