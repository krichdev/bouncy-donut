	var mainState = {
		preload: function(){
			game.load.image('donut', 'assets/img/donut.png');
			game.load.image('pipe', 'assets/img/pipe.png');
		},

		create: function() {
			game.stage.backgroundColor = '#71c5cf';

			game.physics.startSystem(Phaser.Physics.ARCADE);

			this.donut = game.add.sprite(100, 245, 'donut');

			game.physics.arcade.enable(this.donut);

			this.donut.body.gravity.y = 1000;

			var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

			game.input.onTap.add(this.jump, this);

			spaceKey.onDown.add(this.jump, this);

			this.pipes = game.add.group();

			this.timer = game.time.events.loop(1750, this.addPipeColumn, this);

			this.score = 0; 

			this.labelScore = game.add.text(20, 20, "0",
				{font: "30px Arial", fill: "#ffffff"});
		},

		update: function() {
			if (this.donut.y < 0 || this.donut.y > 600)
				this.restartGame();

			game.physics.arcade.overlap(this.donut, this.pipes, this.hitPipe, null, this);

			if (this.donut.angle < 15)
				this.donut.angle += 1;

		},

		jump: function(){
			this.donut.body.velocity.y = -350;

			game.add.tween(this.donut).to({angle: -15}, 100).start();

			if (this.donut.alive == false)
				return;
		},

		restartGame: function(){
			game.state.start('main')
		},

		addPipe: function(x, y) {
			var pipe = game.add.sprite(x, y, 'pipe');

			this.pipes.add(pipe);

			game.physics.arcade.enable(pipe);

			pipe.body.velocity.x = -200; //moving background right to left

			//removing pipes once the get to end of the canvas
			pipe.checkWorldBounds = true;
			pipe.outOfBoundsKill = true;
		},

		addPipeColumn: function() {
			var opening = Math.floor(Math.random()* 5) + 1;

			for (var i = 0; i < 6; i++)
				if (i != opening && i != opening + 1)
					this.addPipe(400, i * 100);

			this.score += 1;
			this.labelScore.text = this.score;
		},

		hitPipe: function(){
			if (this.donut.alive == false)
				return;

			this.donut.alive = false;

			game.time.events.remove(this.timer);

			this.pipes.forEach(function(p){
				p.body.velocity.x = 0;
			}, this);
		},

	};

	var game = new Phaser.Game(800, 600);

	game.state.add('main', mainState);

	game.state.add()

	game.state.start('main');

