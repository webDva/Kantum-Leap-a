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
        this.message = 'Your small planet lasted ' + this.game.state.states['Game'].timeElapsed + ' seconds long';
        this.displayText = this.add.text(this.world.centerX, this.world.centerY, this.message, {fill: '#ffffff'});
        this.displayText.anchor.setTo(0.5, 0.5);
    }
};