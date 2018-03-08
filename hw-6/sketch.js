//Global variables: Creating a circle that can be assigned a random x1 point
//I was just trying to come up with a better name for circle, these are not actual donuts.
let donut1 = {};
donut1.x = 0;
donut1.y = 0;
donut1.w = 50;

let donut2 = {};
donut2.x = 0;
donut2.y = 0;
donut2.w = 200;
donut2.h = 200;


//I want to be able to change the color and opacity though so here we go.
//These are my color variables
//fill color variables

var colR;
var colG;
var colB;
var afill;


//creating my canvas!
function setup() {

  createCanvas(windowWidth, windowHeight);

  background("0, 0, 100");


  //Stuff I want to do:
  //use division

}


//Time to draw some "donuts"
function draw() {

//sets the frame to reset at a 50% opacity every 30 frames
//when MouseX is a low value and at 90 frames when it's at a high value.

let refresh
refresh = map(mouseX, 0, width, 30, 90)

  if(frameCount % refresh < 5){
    background(255, 50);

  }


//defines variables that control color and opacity of randomly appearing circles
  colR = random(255/3);
  colG = random(255);
  colB = random(255);
  afill = random(100);
  constrain(afill, 0, 70);

// The code gives random locations to the circle's positions.
  donut1.x = random(width);
  donut1.y = random(height);
  donut1.w = random(10, 200);


  //This code forces the second donut to appear inside the confines of the first one.
  donut2.x = random(donut1.w) + donut1.x - (donut1.w * 0.5);
  donut2.y = random(donut1.w) + donut1.y - (donut1.w * 0.5);


  // This makes the width of the second donut 1/3 the width of the first one.
  donut2.w = 0.3 * donut1.w;


// this makes sets up the actual colors the donuts will be and draws them.
  noStroke()
  fill(colR, colG, colB, afill)
  ellipse(donut1.x, donut1.y, donut1.w)
  fill(colR, colG, colB);
  ellipse(donut2.x, donut2.y, donut2.w)






}
