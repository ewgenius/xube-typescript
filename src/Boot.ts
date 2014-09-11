/**
 * Created by ewgenius on 24.08.14.
 */
/// <reference path="../bower_components/phaser/build/phaser.d.ts" />
module Amputator {
    export class Boot extends Phaser.State {

        preload() {
            this.load.image('background', 'assets/loading.png');
        }

        create() {
            console.log('boot');
            this.game.state.start('Preloader', true, false);
        }

    }
}
