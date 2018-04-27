//create bubble and bubble array.
let bubbles = []
let bubbleNum = 40

//setup, duh.
function setup() {
  createCanvas(600, 600)

  //create a for loop to generate 40 new bubbles.
  for (let i = 0; i < bubbleNum; i++) {
    bubbles.push(new Bubble( width*0.5, height*0.5 ) );
  }
}

function draw() {
  background(0);
  //this function creates the bubbles in the array.
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

//bubble class!!
class Bubble {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.col = color(random(0, 255), random(0, 255), random(0, 255));
  }

//doing some super basic, bubble type motions.
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

//just actually drawing the bubbles.
  show() {
    fill(this.col);
    ellipse(this.x, this.y, 100);
  }
}
