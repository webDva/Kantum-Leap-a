/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Game = function (game) {};

Game.prototype = {
    preload: function () {
        // Load placeholder sprites
        this.load.image('placeholder', 'assets/placeholder.png');
        this.load.image('greenplaceholder', 'assets/greenplaceholder.png');
    },

    create: function () {
        // Display the block in the corner
        this.block = this.add.sprite(0, 0, 'placeholder');

        // Scale the small world to be small
        this.block.scale.setTo(0.3, 0.3);

        // Enable Arcade physics
        this.physics.enable(this.block, Phaser.Physics.ARCADE);

        // Enable gravity for the block only
        this.block.body.gravity.set(0, 180);

        // Make block collide with world bounds
        this.block.body.collideWorldBounds = true;

        // Enable bounce for testing
        this.block.body.bounce.set(1);

        // Create an object pool of green blocks to represent larger planets
        this.largePlanetsGroup = this.add.group();

        var LARGE_PLANETS_POOL = 4; // For how many planets exist in the large planets pool (duh)
        for (var i = 0; i < LARGE_PLANETS_POOL; i++) {
            this.largePlanetsGroup.create(this.world.randomX, this.world.randomY, 'greenplaceholder');
        }

        // Add left-direction gravity to the large planets
        this.largePlanetsGroup.forEach(function (child) { // Remember that each child of this group is a sprite
            this.physics.enable(child, Phaser.Physics.ARCADE);
            child.body.gravity.set(-100, 0);
        }, this);

        // Remove all the large planets to take them off the screen initially
        for (var i = 0; i < LARGE_PLANETS_POOL; i++) {
            //this.killPlanet();
        }

        // Add keys for creating and destroying planets for testing
        this.createKey = this.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.destroyKey = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.createKey.onDown.add(this.createPlanet, this);
        this.destroyKey.onDown.add(this.killPlanet, this);
    },

    /*
     * Makes the oldest large planet disappear.
     */
    killPlanet: function () {
        var planet = this.largePlanetsGroup.getFirstAlive();

        if (planet) {
            planet.kill();
        }
    },

    /*
     * Recycles the large planets group
     */
    createPlanet: function () {
        var planet = this.largePlanetsGroup.getFirstExists(false);

        if (planet) {
            planet.revive();
        }
    },

    update: function () {

    },

    render: function () {

    }
};