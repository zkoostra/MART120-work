Zoie Koostra, Section 50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing
 
<!--
I'm just going to go in order of what the code actually is
instead of trying to explain it all at once.
The first thing the code does is set up the variables.
It sets up variables that tell you the size of the ball,
the location of the ball, and then the "change" (i.e. delta)
the ball should make each time frame redraws. It also sets up
the variable for what the ball should do when the mouse is clicked.

Then it sets up the canvas. Alright!

Inside the draw function, the first lines of code are basically saying,
assign a new value to the ball.x and ball.y variables that is equal
to ball.delta times the value of ball.scale plus the value of ball.x or ball.y.
At this point, the starting variable is equal to 10, and the other variables are all 1.
So the equation is really 1*1+10, making the new value of the x and y coordinates for the ball 11, but because this will keep repeating, it will increase by 1 each time the function runs.

Then we have an if statement that's basically what will help create the "bounce" effect of the ball. So, if the ball's x location is greater than OR the same as the width of the canvas AND if the ball's x value is less than or the same as 0, the value of ball.delta_x should be reassigned as ball.delta_x +ball.delta_x * -1. Since the (I'm gonna abbreviate here) BDX variable was equal to 1, it becomes equal to -1 and then in the frame immediately after *should* cycle back to being positive 1, since the x-value of the ball will no longer be greater than or equal to the width of the canvas.

Then there is an if statement that does the exact same thing for the y value of the ball in relation to the height of the canvas. Easy peasy.


Then we actually draw the ellipse. A 255 fill indicates the ball will be white.
Then, the variables for the ball's x and y locations and the variable for the ball's width actually draw the ellipse. By giving the ellipse variables in the place where we would typically put the x and y values of the shape, we have created an ellipse that will respond to that earlier equation that set up the movement of the ellipse, so that each time it re-draws, the updated value of the ellipse's x and y location will have changed.

Moving out of the draw function, the last line of code is one that sets up a way for the ball to respond to the mouse being clicked by the user. So when the mouse is pressed, the current value of mouseX between 0 and the width of the canvas is then mapped to a value between 0.5 and 10. This means that the position of the mouse when it is clicked has the power to alter the value of ball.scale_x, which is one of the variables that controls the distance the ball moves in each frame cycle and therefore, how "fast" the ball appears to move across the screen. If the mouseX value is low, then it will be mapped to a much smaller number.

If you remember in the equation above, the ball.scale_x value was multiplied with ball.delta_x and then added to the ball's current x position in order to change it's value. So if the ball.delta_x (which is still equal to 1) is multiplied by a super small number (like .5) and added to the balls current x location, that means the ball will appear to move very slowly, because each frame, it's only able to increase the value of the ball's x location by .5. Conversely, if the area of the canvas where the mouse is clicked has a high x value, then the ball will start to move a large distance each frame, making the spaces between each ball look further apart and making the ball appear to move more quickly.

The same for all of this is true for the command below it which is all the same stuff but with variables as they relate to y values.


-->


## How did you alter the sketch?

<!--
I altered the sketch in some really simple ways but I feel like I really created something super different.

First, I made the function that tells the ball what to do when the mouse is clicked also control what color the background was, so now when you click the mouse, the background changes to a random color.

Then I used the if statements that dictate what the ball should do when it hits the boundary to make the ball change color everytime it hits the boundary. Then I took away the stroke so the ball would appear to be sort of a continuous line, which makes the sketch turn into a creation of sort of like crazy plaid.
-->
