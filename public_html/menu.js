/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Menu = function (game) {
    this.game = game;
};

Menu.prototype = {
    create: function () {
        this.message = 'This game was made for Ludam Dare 38. The theme is small world.\n' +
                'I made a small planet--literally--which is a small world,\nso I think I adhered to the theme.' +
                '\n\nTo play the game, you need to keep the small world from touching the fire traps\nat the ' +
                "top and bottom of the screen for as long as you can.\n The small world's gravity increases " +
                'over time,\nmaking it harder to keep the small world afloat.\n\nPress the button in the corner ' +
                'to keep the small world afloat.\n\n\nCLICK TO PLAY';
        this.text = this.add.text(this.world.centerX, this.world.centerY, this.message, {font: '20px', fill: '#ffffff', align: 'center'});
        this.text.anchor.setTo(0.5, 0.5);
        
        // Start the game when the player taps or clicks the menu message
        this.text.inputEnabled = true;
        this.text.events.onInputDown.add(function () {
            this.state.start('Game');
        }, this);
    }
};