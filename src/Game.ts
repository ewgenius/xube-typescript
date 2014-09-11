/**
 * Created by ewgenius on 23.08.14.
 */
/// <reference path="../bower_components/phaser/build/phaser.d.ts" />
module Amputator {
    export class Game extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);

            this.state.add('Preloader', Preloader, false);

            this.state.start('Boot');
        }
    }
}

window.onload = () => {
    var game = new Amputator.Game();
};