var gameOver = function(game){}

gameOver.prototype = {
	create: function(){

		this.overTitle = game.add.sprite(200, -200, 'gameover');

		game.input.onTap.add(this.restartMenu, this);

		game.add.tween(this.overTitle).to({y: 90}, 900).start();

		// game.add.text(20, 20, +score, {font: "30px Arial", fill: "#ffffff"});

	},

	restartMenu: function(){
		this.game.state.start('menu');
	},	

}