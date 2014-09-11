/**
 * Created by ewgenius on 24.08.14.
 */
/// <reference path="../bower_components/phaser/build/phaser.d.ts" />
module Amputator {
    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {
            this.preloadBar = this.add.sprite(0, 0, 'background');
            this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            this.load.image('titlepage', 'assets/loading.png');
        }

        create() {

            //var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            //tween.onComplete.add(this.startMainMenu, this);

        }

    }
}
