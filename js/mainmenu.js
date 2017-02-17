var mainMenu = function(game){}


mainMenu.prototype = {
	preload: function(){
		game.stage.backgroundColor = '#71c5cf';
		this.game.load.image('pipe', 'assets/img/pipe.png');
		this.game.load.image('donut', 'assets/img/donut.png');
		this.game.load.image('title', 'assets/img/title.png');
		this.game.load.image('gameover', 'assets/img/gameover.png');
		this.game.load.image('easybutton', 'assets/img/easybutton.png');
		this.game.load.image('hardbutton', 'assets/img/hardbutton.png');
	},

	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.title = game.add.sprite(250, -200, 'title');

		this.donut = game.add.sprite(375, -60, 'donut');

		game.physics.arcade.enable(this.donut);

		game.add.tween(this.title).to({y: 90}, 900).start();
		game.add.tween(this.donut).to({y: 245}, 600).start();

		//Setting easy button, display, and adding click event
		var easyButton;
 		easyButton = game.add.button(250, 325, 'easybutton');

 		easyButton.inputEnabled = true;
		easyButton.events.onInputDown.add(this.easyMode, this);

		var hardButton;
 		hardButton = game.add.button(450, 325, 'hardbutton');

 		hardButton.inputEnabled = true;
		hardButton.events.onInputDown.add(this.playGame, this);

	},

	playGame: function(){
		this.game.state.start('main');
	},

	easyMode: function(){
		this.game.state.start('easy');
	},
}	
