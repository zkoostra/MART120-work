function setup() {
translate(1000, 1000)
  createCanvas (2000,2000)
}
// I created a workspace that's 2000 pixels tall and 2000 pixels wide
// I moved the origin point to the middle of the canvas.
//I used the push function so everything is translated to the origin.
function draw() {
push()
  translate(1000, 1000)
  fill('purple')
  ellipse(0, 300, 200, 500)
  fill ('yellow')
//this is the monster's body and his yellow tummy.
  ellipse(0, 300, 150, 400)
  fill('purple')
  ellipse( 0, 0, 300, 400 );
  stroke('purple')
  fill('purple')
  ellipse(20, 200, 100, 100);
//I drew the monster's head and a weird chin for him.
  fill('white')
  ellipse (60, -100, 70, 70)
  fill('red')
  ellipse(80, -120, 30, 30)
  fill('white')
  ellipse (-70, -70, 60, 60)
  fill('red')
  ellipse(-70, -60, 10, 10)
  fill ('white')
  //these are the monster's 2 eyeballs
  triangle (-60, 100, -40, 100, -50, 60)
  fill ('white')
  triangle (0, 100, 20, 100, 10, 40)
  fill ('white')
  triangle (60, 100, 80, 100, 70, 60)
  //these are the monster's creepy teeth

  fill ('orange')
  triangle (70, -170, 120, -110, 165, -250)
  fill ('orange')
  triangle (-70, -170, -120, -110, -165, -250)
  //horns! I stopped coding here for awhile and it took me awhile to get focused and back on track but flipping the horns around was surprisingly easy once I got one finished.
  fill ('purple')
  rotate(1/8)
  rect(120, 250, 170, 20)
  fill ('purple')
  rotate(1/5)
  rect(-10, 250, -170, 20)
  //His arms took a lot of experimenting to make. I'm feeling like I'm just guessing and then checking what it looks like right here.
  ellipse(-170, 260, 40, 40)
  ellipse(350, 200, 40, 40)
  //These are his hands. I wanted to do triangles for fingers or claws but this is a lot of freaking work lol.
  
}
