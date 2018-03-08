Man, this sketch was HARD for me.

So first, I made myself some variables. I wanted to have two different size circles interact with each other so I created two different object variables and assigned them their values.

Then I created color variables so the colors could be randomized as well. I wound up actually editing the random values of some of the parameters later on in the code.

This was kind of the point where I was like okay, what the fuck do I do? I was really overwhelmed by how many different math functions we were required to use and what I had thought of for my sketch didn't really encompass all of them. I went to office hours though and that helped a lot because I sometimes forget that this is supposed to be fun lol.

So then I made the first circle appear at a random location with a somewhat randomized size between the values of 10 and 200. Then I made the first circle's size and position dependent on that of the first circle by making it's position equal to the first donut's width times a random number, plus the value of the first cicle's x or y values but minus it's x or y value times point 5. This means that it always will be inside the other circle.

Then I used constrain to make the large circle's opacity value always be between 0 and 70, so it would be a little bit transparent.

It wasn't that cute after I did that, because the circles would just go over the top of each other until everything turned sort of greenish brown, and I also hadn't used all the required code pieces yet, so I used modulo to make the screen refresh every 30 frames in order to give the background a cleaner look. But then I also had to use the map function.

I mapped the value of mouseX to the values of 30-90 and then had to adjust my modulo (which previously was == 0 to be < 5 ) because making it come out completely even made the points too precise to interact with. But now, at a low mouseX value, the background redraws every 30 frames, in the middle it redraws every 60 frames and at the right end, or a high mouseX value, it redraws every 90 frames. I had lots of help from Michael and from one of my graders who I forgot her name because I'm terrible but if you're reading this, hey, it's me Zoie, thanks for your help!

Finally, I wound up dividing by variable for red color by 3 because I needed to divide something and making the red parameters smaller made the color pallette all these pretty purples, greens and blues. 

I barely know what I'm doing, so I never go on that forum to help anyone. I need to go to more office hours though because everytime I do it makes a huge difference.
