	var mainState = function(game){
		
	}
	mainState.prototype = {
		create: function() {
			
			// game.physics.startSystem(Phaser.Physics.ARCADE);
			game.paused = true

			this.donut = game.add.sprite(150, 245, 'donut');

			game.physics.arcade.enable(this.donut);

			this.donut.body.gravity.y = 1300;

			var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

			game.input.onTap.add(this.jump, this);

			spaceKey.onDown.add(this.jump, this);

			this.pipes = game.add.group();

			this.timer = game.time.events.loop(1500, this.addPipeColumn, this); 

			score = 0;
			this.labelScore = game.add.text(20, 20, "0",
				{font: "30px Press Start 2P", fill: "#ffffff"});

			this.instructions = game.add.text(275, 250, "Click or Hit Spacebar to BOUNCE", {font: "14px Press Start 2P", fill: "white"});
		},

		update: function() {
			if (this.donut.y < 0 || this.donut.y > 600)
				this.game.state.start('over', true, false, score);

			game.physics.arcade.overlap(this.donut, this.pipes, this.hitPipe, null, this);

			if (this.donut.angle < 15)
				this.donut.angle += 1;
		},

		// unpause: function(){
		// 	game.paused = false;
		// }

		jump: function(){
			if (this.donut.alive == false)
				return;

			this.donut.body.velocity.y = -350;

			game.add.tween(this.donut).to({angle: -15}, 100).start();

			game.paused = false;

			this.instructions.destroy();

		},

		addPipe: function(x, y) {
			var pipe = game.add.sprite(x, y, 'pipe');

			this.pipes.add(pipe);

			game.physics.arcade.enable(pipe);

			pipe.body.velocity.x = -300; //moving background right to left

			//removing pipes once the get to end of the canvas
			pipe.checkWorldBounds = true;
			pipe.outOfBoundsKill = true;

		},

		addPipeColumn: function() {
			var opening = Math.floor(Math.random()* 12) + 1;

			for (var i = 0; i < 24; i++){
				if (i != opening && i != opening + 1 && i != opening + 2 && i != opening + 3)
					this.addPipe(730, i * 25);
			}

			score ++
			this.labelScore.text = score;
		
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

