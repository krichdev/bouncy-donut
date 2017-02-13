var mainMenu = function(game){}

mainMenu.prototype = {
	create: function(){
		game.stage.backgroundColor = '#71c5cf';
		this.donut = game.add.sprite(100, 245, 'donut');

		game.input.onTap.add(this.playGame, this);

	}

	playGame: function(){
		this.game.state.start("main");
	}
}
