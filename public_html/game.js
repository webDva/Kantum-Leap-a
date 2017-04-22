/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Game = function (game) {};

Game.prototype = {
    preload: function () {
        // Load placeholder sprite
        this.load.image('placeholder', 'assets/placeholder.png');
    },

    create: function () {
        // Display the block in the corner
        this.block = this.add.sprite(0, 0, 'placeholder');
        
        // Enable Arcade physics
        this.physics.enable(this.block, Phaser.Physics.ARCADE);
        
        // Enable gravity for the block only
        this.block.body.gravity.set(0, 180);
        
        // Make block collide with world bounds
        this.block.body.collideWorldBounds = true;
        
        // Enable bounce for testing
        this.block.body.bounce.set(1);
    },

    update: function () {

    },

    render: function () {

    }
};