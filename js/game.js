var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Amputator;
(function (Amputator) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('background', 'assets/loading.png');
        };

        Boot.prototype.create = function () {
            console.log('boot');
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    Amputator.Boot = Boot;
})(Amputator || (Amputator = {}));
var Amputator;
(function (Amputator) {
    var Entity = (function (_super) {
        __extends(Entity, _super);
        function Entity(game, x, y) {
            _super.call(this, game, x, y, 'entity', 0);
        }
        return Entity;
    })(Phaser.Sprite);
    Amputator.Entity = Entity;
})(Amputator || (Amputator = {}));
var Amputator;
(function (Amputator) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Amputator.Boot, false);

            this.state.add('Preloader', Amputator.Preloader, false);

            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    Amputator.Game = Game;
})(Amputator || (Amputator = {}));

window.onload = function () {
    var game = new Amputator.Game();
};
var Amputator;
(function (Amputator) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(0, 0, 'background');
            this.load.setPreloadSprite(this.preloadBar);

            this.load.image('titlepage', 'assets/loading.png');
        };

        Preloader.prototype.create = function () {
        };
        return Preloader;
    })(Phaser.State);
    Amputator.Preloader = Preloader;
})(Amputator || (Amputator = {}));
var Amputator;
(function (Amputator) {
    (function (Entities) {
        var Player = (function (_super) {
            __extends(Player, _super);
            function Player(game, x, y) {
                _super.call(this, game, x, y);
            }
            return Player;
        })(Amputator.Entity);
    })(Amputator.Entities || (Amputator.Entities = {}));
    var Entities = Amputator.Entities;
})(Amputator || (Amputator = {}));
