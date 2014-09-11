/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../xube/Game.ts" />
/// <reference path="../xube/GameObject.ts" />
module DudeTest {
    export class DudeGame extends Xube.Game {
        initialize() {
            console.log('initialized');
            super.initialize();
            this.renderer.setSize(800, 600);
        }
    }
}

window.onload = () => {
    var container = document.getElementById('container');
    var game = new DudeTest.DudeGame(container);
    game.run();
};