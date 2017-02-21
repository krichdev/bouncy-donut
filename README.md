# Bouncy Donut
![Screenshot of Game Menu]
(https://raw.githubusercontent.com/krichdev/krichdev.github.io/master/bouncy-donut-screenshot.png)

## A clone of the popular game Flappy Bird. 

### Languages used to produce this project:
* HTML
* CSS
* JavaScript
* JQuery
* Phaser.js

### Play this game [here](http://www.helloimkyle.com/bouncy-donut)

## Challenges

### Score Tracking
In the original game score is added as soon as you fly the bird through the pipe opening. In my clone, I had a hard time replicating this feature. In my project score is increased when the pipes are generated. This is a bug that I will come back to and try to fix.

### Pipe Opening
```javascript
addPipeColumn: function() {
			var opening = Math.floor(Math.random()* 12) + 1;

			for (var i = 0; i < 24; i++){
				if (i != opening && i != opening + 1 && i != opening + 2 && i != opening + 3)
					this.addPipe(730, i * 25);
			}

			score ++
			this.labelScore.text = score;
		
		}
 ```
 Creating the holes to "bounce" through was a difficult challenge. To solve this challenge, I split the canvas vertically into 25px blocks. Using a For Loop, I iterated through the 24 blocks of the "pipe" and then created an "opening" variable that would then get skipped in the loop when printing the pipe images.
 
 ## Features to add
 Moving forward with the project I would like to fix the scoring issue, as well as add an option so select different donut characters to play the game with.
