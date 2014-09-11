/**
 * Created by ewgenius on 23.08.14.
 */
/// <reference path="../../bower_components/phaser/build/phaser.d.ts" />
/// <reference path="../../bower_components/phaser/build/phaser.d.ts" />
module Amputator.Entities {
    class Player extends Amputator.Entity {
        constructor(game:Phaser.Game, x:number, y:number) {
            super(game, x, y);
            //game.add.existing(this);
        }
    }
}