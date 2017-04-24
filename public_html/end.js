/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var End = function (game) {
    this.game = game;
};

End.prototype = {
    create: function () {
        // Display score
        this.message = 'Your small planet lasted ' + this.game.state.states['Game'].timeElapsed + ' seconds' +
                '\n\nCLICK TO PLAY AGAIN';
        this.displayText = this.add.text(this.world.centerX, this.world.centerY, this.message, {fill: '#ffffff'});
        this.displayText.anchor.setTo(0.5, 0.5);

        // Go back to the menu screen on click or tap
        this.displayText.inputEnabled = true;
        this.displayText.events.onInputDown.add(function () {
            this.state.start('Menu');
        }, this);
    }
};