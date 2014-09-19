var Xube;
(function (Xube) {
    var GameObject = (function () {
        function GameObject() {
        }
        GameObject.prototype.update = function (delta, game) {
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
            _super.call(this);
            this.model = new THREE.Object3D();
        }
        DrawableGameObject.prototype.setPosition = function (position) {
            this.model.position.set(position.x, position.y, position.z);
        };
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
                this.scene.add(object.model);
            }
        };

        Game.prototype.remove = function (object) {
            var i = this.objects.indexOf(object);
            if (this.objects.length > i) {
                var obj = this.objects[i];

                if (obj instanceof Xube.DrawableGameObject) {
                    this.scene.remove(obj.model);
                }

                this.objects.splice(i, 1);
            }
        };

        Game.prototype.update = function (delta, game) {
            for (var i in this.objects) {
                this.objects[i].update(delta, game);
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
            this.update(delta, this);
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
