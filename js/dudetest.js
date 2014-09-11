var Xube;
(function (Xube) {
    var Game = (function () {
        function Game(container) {
            this.initialized = false;

            if (container === undefined) {
                container = document.body.appendChild(document.createElement('div'));
            }

            this.renderer = new THREE.WebGLRenderer();
            container.appendChild(this.renderer.domElement);

            this.scene = new THREE.Scene();
        }
        Game.prototype.initialize = function () {
            this.camera = new THREE.Camera();
        };

        Game.prototype.doInitialize = function () {
            this.initialize();
        };

        Game.prototype.update = function () {
        };

        Game.prototype.render = function () {
            this.renderer.render(this.scene, this.camera);
        };

        Game.prototype.loop = function () {
            var _this = this;
            requestAnimationFrame(function () {
                _this.loop();
            });
            this.update();
            this.render();
        };

        Game.prototype.run = function () {
            if (!this.initialized) {
                this.doInitialize();
                this.initialized = true;

                this.loop();
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
        DudeGame.prototype.initialize = function () {
            console.log('initialized');
            _super.prototype.initialize.call(this);
            this.renderer.setSize(800, 600);
        };
        return DudeGame;
    })(Xube.Game);
    DudeTest.DudeGame = DudeGame;
})(DudeTest || (DudeTest = {}));

window.onload = function () {
    var container = document.getElementById('container');
    var game = new DudeTest.DudeGame(container);
    game.run();
};
