/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Game = function (game) {
    this.game = game;
};

Game.prototype = {
    preload: function () {
        // Load placeholder sprites
        this.load.image('placeholder', 'assets/placeholder.png');
        this.load.image('greenplaceholder', 'assets/greenplaceholder.png');
    },

    create: function () {
        // Display the block in the corner
        this.block = this.add.sprite(this.world.centerX, 0, 'placeholder');

        // Scale the small world to be small
        this.block.scale.setTo(0.3, 0.3);

        // Enable Arcade physics
        this.physics.enable(this.block, Phaser.Physics.ARCADE);

        // Enable gravity for the block only
        this.planetGravity = 180; // Initial value for the planet's gravity; will increase over time
        this.block.body.gravity.set(0, this.planetGravity);

        // Make block collide with world bounds
        this.block.body.collideWorldBounds = true;

        // Enable bounce for testing
        this.block.body.bounce.set(1);

        // Button for adding an upward vector to the small world
        this.button = this.add.button(this.world.centerX + this.world.centerX / 2,
                this.world.centerY + this.world.centerY / 2,
                'greenplaceholder',
                this.addVector,
                this);

        // Timer to randomly increase the small planet's gravity over time
        this.time.events.loop(500, this.addGravity, this);
    },

    addVector: function () {
        this.block.body.velocity.setTo(0, -400);
    },

    addGravity: function () {
        this.planetGravity += this.rnd.integerInRange(1, 70);
        this.block.body.gravity.set(0, this.planetGravity);
    },

    update: function () {

    },

    render: function () {
        this.game.debug.text('Small world gravity: ' + this.block.body.gravity, 0, 32);
    }
};