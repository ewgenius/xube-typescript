var Xube;
(function (Xube) {
    var GameObject = (function () {
        function GameObject() {
        }
        GameObject.prototype.update = function (delta) {
        };
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
var Xube;
(function (Xube) {
    var DrawableGameObject = (function (_super) {
        __extends(DrawableGameObject, _super);
        function DrawableGameObject() {
            _super.apply(this, arguments);
        }
        return DrawableGameObject;
    })(Xube.GameObject);
    Xube.DrawableGameObject = DrawableGameObject;
})(Xube || (Xube = {}));
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

            this.objects = [];

            this.lastFrame = 0;
        }
        Game.prototype.initialize = function () {
            this.camera = new THREE.Camera();
        };

        Game.prototype.doInitialize = function () {
            this.initialize();
        };

        Game.prototype.add = function (object) {
            this.objects.push(object);
            if (object instanceof Xube.DrawableGameObject) {
                this.scene.add(object.mesh);
            }
        };

        Game.prototype.remove = function (object) {
            var i = this.objects.indexOf(object);
            var obj = this.objects[i];

            if (obj instanceof Xube.DrawableGameObject) {
                this.scene.remove(obj.mesh);
            }

            this.objects.splice(i, 1);
        };

        Game.prototype.update = function (delta) {
            for (var i in this.objects) {
                this.objects[i].update(delta);
            }
        };

        Game.prototype.render = function () {
            this.renderer.render(this.scene, this.camera);
        };

        Game.prototype.loop = function () {
            var _this = this;
            var frame = new Date();
            var delta = 20;
            if (this.lastFrame != 0)
                delta = frame.getTime() - this.lastFrame;
            requestAnimationFrame(function () {
                _this.loop();
            });
            this.update(delta);
            this.render();

            this.lastFrame = frame.getTime();
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
var sc;

var DudeTest;
(function (DudeTest) {
    var Cube = (function (_super) {
        __extends(Cube, _super);
        function Cube() {
            _super.call(this);
            var geometry = new THREE.BoxGeometry(200, 200, 200);
            var material = new THREE.MeshBasicMaterial();
            this.mesh = new THREE.Mesh(geometry, material);
        }
        Cube.prototype.update = function (delta) {
            this.mesh.rotation.x += 0.1 / delta;
            this.mesh.rotation.y += 0.1 / delta;
        };
        return Cube;
    })(Xube.DrawableGameObject);
    DudeTest.Cube = Cube;

    var DudeGame = (function (_super) {
        __extends(DudeGame, _super);
        function DudeGame() {
            _super.apply(this, arguments);
        }
        DudeGame.prototype.initialize = function () {
            var _this = this;
            _super.prototype.initialize.call(this);

            sc = this.scene;

            this.renderer.setSize(800, 600);

            this.camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 2000);
            this.camera.position.set(0, 200, 800);

            (function () {
                _this.scene.add(new THREE.AmbientLight(0x404040));

                var light = new THREE.DirectionalLight(0xffffff);
                light.position.set(0, 1, 0);
                _this.scene.add(light);

                var cube = new Cube();

                _this.add(cube);
            })();
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
