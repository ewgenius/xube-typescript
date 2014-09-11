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
                this.doInitialize();
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
