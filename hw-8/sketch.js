//Time to set up.

function setup() {

  // I feel like these days it's just easier to use canvas dimensions that can also be variables.
  createCanvas(windowWidth, windowHeight);
}

//setting up some initial variables
let initialX = 50
let initialY = 50
let currentX = initialX


// time to draw

function draw() {
  background("black")

  //setting up variables for the for loop
  let numPerRow = 10;
  let circleSize = 50;
  let pad = floor(width / numPerRow);


  // draws a grid of circles based on x and y values
  for (let y = circleSize; y < height; y += pad) {
    for (let x = circleSize; x < width; x += pad) {
      // Drawing the actual circles.
      if (currentX == x) {
        fill(255, 0, 0)
      } else {
        fill(255, 255, 255);
      }
      noStroke()
      ellipse(x, y, circleSize, circleSize);

    } // first for loop <-- I've been having to mark which curly brackets go with what.
  } // second for loop

//slow down the frames so you can see the color changes
  if (frameCount % 2 == 0) {

//increase the value of currentX to move the circles over.
    currentX += pad;
  }

//tell the circles to go back to the beginning and start over.
  if (currentX > width) {
    currentX = initialX;
  }
} // draw
