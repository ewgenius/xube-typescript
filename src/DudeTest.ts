/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../lib/three.d.ts" />

module DudeTest {
    export class DudeGame extends Xube.Game {
        initialize() {
            console.log('initialised');
        }
    }
}

window.onload = () => {
    var game = new DudeTest.DudeGame();
    game.run();
};