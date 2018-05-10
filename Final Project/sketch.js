//variable for pictures in array
let pics = [];
//variables for array that contains all cards
let cards = [];
//variable that tells us what set of cards we're on/using
let cardIdx = 0;
//Variable that creates wiggly lines
let squiggles;
//variable that creates bubble
let bubble;
//variable that creates fill wall
//let wall;


//preloading pictures
function preload() {
  pics.push(loadImage("./Pics/DGS-01.png"));
  pics.push(loadImage("./Pics/DGS-02.png"));
  pics.push(loadImage("./Pics/DGS-03.png"));
  pics.push(loadImage("./Pics/DGS-04.png"));
}

//setting up workspace
function setup() {
  createCanvas(800, 600);


  //this creates all of the cards in the array, one by one according to the number of images in each set, the amount of time they're visible, how many times the visual repearts and the backgound ID number.
  cards.push(new Card(
    pics[0], // image ref
    [1000, 2000], // timing array
    2, // number of reps
    0 // background function id num
  ));
  cards.push(new Card(
    pics[1], // image ref
    [1000, 2000, ], // timing array
    2, // number of reps
    1 // background function id num
  ));
  cards.push(new Card(
    pics[2], // image ref
    [750, 750, 750, 750, 2000], // timing array
    3, // number of reps
    3 // background function id num
  ));
  cards.push(new Card(
    pics[3], // image ref
    [750, 750, 750, 750], // timing array
    2, // number of reps
    2 // background function id num
  ));


  //pics[0] = new Pic(0, 0, pic, 0);

  //this creates the other classes of objects that will be in the drawing. they're pretty simple, just a squiggly line, a circle and a rectangle.
  squiggles = new Squiggle();
  bubble = new Bubble();
wall = new Wall();
}



function draw() {
  background(0);

  //this does a check to see which card we are on, and updates the card index number if the current card has finished it's cycle of displaying things.If all the cards have gone through the cycle, modulo restarts the cycle at the beginning.
  let nextCard;
  do {
    nextCard = cards[cardIdx].cardUpdate();

    if (nextCard) {
      cardIdx++;
      cardIdx %= cards.length
    }
  } while (nextCard);



  //This is what controls what's happening in the background based on the index number assigned to the cards.
  switch (cardIdx) {
    case 0:
      // code block

      break;

    case 1:
      squiggles.frame();
      break;

    case 2:
      blendMode(EXCLUSION);
      bubble.grow();
      break;

    case 3:
      blendMode(SCREEN);
      wall.grow();
      break;

    default:

  }




  //this just displays the cards.
  cards[cardIdx].display();

}

/////////////////CLASSES//////////////////
class Card {
  constructor(image, time_array, repetitions, background_id) {
    this.pos = {
      x: width / 2,
      y: height / 2
    };
    this.image = image;
    this.size = {
      w: 800,
      h: 600,
    };
    this.times = time_array;
    this.num_of_cards = this.times.length;
    this.curr_card = 0;
    this.num_of_reps = repetitions;
    // this.bg_id = background_id;
    this.rep_num = 0;
    this.timestamp = 0;
    this.active = false;
  }

  //updates which card is showing by "turning on" the card by switching this.active to true and connects the amount of time the card has been active to how many milliseconds have passed.
  cardUpdate() {
    if (!this.active) {
      this.active = true;
      this.timestamp = millis();
      this.curr_card = 0;
      this.rep_num = 0;
    }

    let time_elapsed = millis() - this.timestamp;

    //If the time that's passed is greater than the timing of the current card's array, it swithces to the next card.
    if (time_elapsed >= this.times[this.curr_card]) {
      this.curr_card++;

      //If the card number it wants to switch to at the end of the allowed amount of time is greater than the number of cards in the array, go back to the beginning of the array and start over.
      this.timestamp = millis();
      if (this.curr_card >= this.num_of_cards) {
        this.rep_num++;
        this.curr_card = 0;

        //If the number of times the sequence has repeated is greater or equal to the set number of repetitions, return false and display the next card.
        if (this.rep_num >= this.num_of_reps) {
          this.active = false;

          return true;
        }
      }
    }

    return false;
  }


  display() {
    push();

    image(
      // reference to image in memory
      this.image,
      // placement of image on canvas
      0, 0,
      // The display size of the image
      this.size.w, this.size.h,
      // The top left corner of the sub rectangle
      this.curr_card * this.size.w, 0,
      // the size of the subrectangle
      this.size.w, this.size.h
    );

    pop();
  }
}

//this is the class that makes the wavy lines.
class Squiggle {
  //Still not 100 percent sure why I have all of these variables, I'm trying bro.
  constructor(spacing, width, theta, amplitude, period) {
    this.spacing = 2;
    this.size = 20;
    this.width = 800;
    this.theta = 0;
    this.amplitude = 175;
    this.period = 600;
    this.objs = [];
  }

  frame() {
    this.calcWave();
    this.display();
  }


  calcWave() {

    for (var i = 0; i < 5; i++) {
      let xPos = this.spacing * this.objs.length + 9;
      let yPos = sin(width / this.spacing * (this.objs.length + .5)) * this.amplitude + height / 2;
      this.objs.push({
        x: xPos,
        y: yPos
      });
    }

  }

  display() {
    for (let i = 0; i < this.objs.length; i++) {
      push();
      noStroke();
      ellipse(this.objs[i].x, this.objs[i].y, this.size);
      pop();
    }
  }
};

class Bubble {
  constructor(x, y, diameteter) {
    this.x = width / 2;
    this.y = height / 2;
    this.across = 0;
  };

  grow() {
    this.across = (this.across+10) % 600;
      fill('green')
      ellipse(this.x, this.y, this.across)

  };
};


class Wall {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = width
    this.height = 0
  }
  grow() {
    this.height = (this.height+10) % 600;
      fill('blue')
      rect(this.x, this.y, this.width, this.height)

  }
}
