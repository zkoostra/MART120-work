let rockMotionX
rockMotionX=30
let planeMotionMouse

//here I'm setting up my variables
//I want one that will make my rock move across the bottom of the screen
//and I want one that will make my paper airplane be controlled by the mouse

function setup() {
  createCanvas(1300, 600)
  background("turquoise")
}
//setting up a canvas, basic shit, ya girl has got this.

function draw() {
  background("turquoise")
  noCursor() 


  fill ("white")
  triangle (mouseX, mouseY, mouseX +50, mouseY +10,  mouseX+20, mouseY+40)
  stroke("black")
  line(mouseX, mouseY, mouseX +40 ,mouseY +20)
  line(mouseX, mouseY, mouseX +30 ,mouseY +30)

//the body of my paper airplane!

rockMotionX=rockMotionX+1
fill("gray")
arc(rockMotionX, 600, 400, 300, PI, 0, PI)
ellipse()
//I originally drew my rock really small just to get it figured out
//and moving, but now it like breaks whenever I change the size.


}
