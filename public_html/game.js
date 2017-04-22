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
        this.block = this.add.sprite(0, 0, 'placeholder');
    },

    update: function () {

    },

    render: function () {

    }
};