var mainMenu = function(game){}

mainMenu.prototype = {
	preload: function(){
		game.stage.backgroundColor = '#71c5cf';
		this.game.load.image('donut', 'assets/img/donut.png');
		this.game.load.image('title', 'assets/img/title.png');
		this.game.load.image('gameover', 'assets/img/gameover.png');
	},

	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.title = game.add.sprite(200, -200, 'title');

		this.donut = game.add.sprite(325, -60, 'donut');

		game.physics.arcade.enable(this.donut);

		game.input.onTap.add(this.playGame, this);

		game.add.tween(this.title).to({y: 90}, 900).start();
		game.add.tween(this.donut).to({y: 245}, 600).start();
	},

	playGame: function(){
		this.game.state.start('main');
	}
}	