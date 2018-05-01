//create bubble and bubble array.
let bubbles = []
let bubbleNum = 40
let firstBubble
let whiteValue
let space
let spaceMax
let bubbleColor
//setup, duh.
function setup() {
  //createCanvas(600, 600)
  createCanvas(600, 600)

  //create the bubble that all the other bubbles will respond to.
  firstBubble = new FirstBubble
  //create a for loop to generate 40 new bubbles.
  for (let i = 0; i < bubbleNum; i++) {
    bubbles.push(new Bubble(width * 0.5, height * 0.5));
  }
}

function draw() {
  spaceMax = dist(0, 0, 600, 600, );


  // calculate where the bubbles are in relation to the center bubble.
  for (let n = 0; n < bubbles.length; n++) {
    for (let i = 0; i < bubbleNum; i++) {
      let space = dist(bubbles[i].posX, bubbles[i].posY, firstBubble.x, firstBubble.y);
      bubblecolor = map(space, 0, spaceMax, 0, 100)
    }
  }



  background(0);
  //this function creates the bubbles in the array.
  for (let i = 0; i < bubbles.length; i++) {
    fill(HSL, 269, 71, 14, bubbleColor)
    bubbles[i].move();
    bubbles[i].show();
  }
  fill(HSL, 269, 71, 14, bubbleColor)
  firstBubble.move();
  firstBubble.show();


}

//bubble class!!
class Bubble {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  //doing some super basic, bubble type motions.
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  //just actually drawing the bubbles.
  show() {
    ellipse(this.x, this.y, 100);
  }
}


class FirstBubble {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  //doing some super basic, bubble type motions.
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  //just actually drawing the bubbles.
  show() {
    ellipse(this.x, this.y, 100);
  }
}
