var mainMenu = function(game){}


mainMenu.prototype = {
	preload: function(){
		game.stage.backgroundColor = '#71c5cf';
		this.game.load.image('donut', 'assets/img/donut.png');
		this.game.load.image('title', 'assets/img/title.png');
		this.game.load.image('gameover', 'assets/img/gameover.png');
		this.game.load.image('easymode', 'assets/img/easybutton.png');
	},

	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.title = game.add.sprite(200, -200, 'title');

		this.donut = game.add.sprite(325, -60, 'donut');

		this.easymode = game.add.sprite(145, -200, 'easymode');

		game.physics.arcade.enable(this.donut);

		game.input.onTap.add(this.playGame, this);
		// this.easymode.input.onTap.add(this.playEasy, this);

		game.add.tween(this.title).to({y: 90}, 900).start();
		game.add.tween(this.donut).to({y: 245}, 600).start();
		game.add.tween(this.easymode).to({y: 400}, 900).start();

		this.instructions = game.add.text(145, -250, "Click To Start", {font: "30px Press Start 2P", fill: "white"});
		game.add.tween(this.instructions).to({y: 325}, 900).start();


	},

	playGame: function(){
		this.game.state.start('main');
	},

	playEasy: function(){
		this.game.state.start('easy');
	},
}	
