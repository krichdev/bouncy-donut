var gameOver = function(game){
}

gameOver.prototype = {
	init: function(score){

	},

	create: function(){

		this.overTitle = game.add.sprite(200, -200, 'gameover');

		game.input.onTap.add(this.restartMenu, this);

		game.add.tween(this.overTitle).to({y: 90}, 900).start();

		this.finalScore = game.add.text(325, -250, +score, {font: "30px Arial", fill: "#ffffff"});

		game.add.tween(this.finalScore).to({y: 250}, 900).start();

	},

	restartMenu: function(){
		this.game.state.start('menu');
	},	

}