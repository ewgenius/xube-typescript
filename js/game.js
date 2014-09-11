var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DudeTest;
(function (DudeTest) {
    var DudeGame = (function (_super) {
        __extends(DudeGame, _super);
        function DudeGame() {
            _super.apply(this, arguments);
        }
        return DudeGame;
    })(Xube.Game);
    DudeTest.DudeGame = DudeGame;
})(DudeTest || (DudeTest = {}));

window.onload = function () {
    var game = new DudeTest.DudeGame();
    game.run();
};
var Xube;
(function (Xube) {
    var Game = (function () {
        function Game() {
            this.initialized = false;
        }
        Game.prototype.initialize = function () {
        };

        Game.prototype.doInitialize = function () {
            this.initialize();
        };

        Game.prototype.update = function () {
        };

        Game.prototype.run = function () {
            if (!this.initialized) {
            }
        };
        return Game;
    })();
    Xube.Game = Game;
})(Xube || (Xube = {}));
var Xube;
(function (Xube) {
    var GameObject = (function () {
        function GameObject() {
        }
        return GameObject;
    })();
    Xube.GameObject = GameObject;
})(Xube || (Xube = {}));
