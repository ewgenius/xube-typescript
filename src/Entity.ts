/**
 * Created by ewgenius on 24.08.14.
 */
/// <reference path="../bower_components/phaser/build/phaser.d.ts" />
module Amputator {

    export class Entity extends Phaser.Sprite {
        constructor(game:Phaser.Game, x:number, y:number) {
            super(game, x, y, 'entity', 0);
            //game.add.existing(this);
        }
    }
}