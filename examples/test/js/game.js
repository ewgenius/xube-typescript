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
            var obj = this.objects[i];

            if (obj instanceof Xube.DrawableGameObject) {
                this.scene.remove(obj.model);
            }

            this.objects.splice(i, 1);
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
var DudeTest;
(function (DudeTest) {
    (function (Entities) {
        var Cube = (function (_super) {
            __extends(Cube, _super);
            function Cube() {
                _super.call(this);

                this.radius = Math.random() * 50;
                this.speed = (Math.random() - 0.5) * 10;

                var geometry = new THREE.BoxGeometry(1, 1, 1);
                var material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });

                var mesh = new THREE.Mesh(geometry, material);

                this.model.add(mesh);

                this.model.position.x = Math.random() * 100 - 50;
                this.model.position.y = Math.random() * 100 - 50;
                this.model.position.z = Math.random() * 100 - 50;
            }
            Cube.prototype.update = function (delta, game) {
                this.model.position.x = this.radius * Math.cos(this.speed * game.lastFrame / 5000.0);
                this.model.position.z = this.radius * Math.sin(this.speed * game.lastFrame / 5000.0);
                this.model.position.y = this.radius * Math.sin(this.speed * game.lastFrame / 500.0);
                this.model.rotation.x += (Math.random() * 10 - 5) / delta;
                this.model.rotation.y += (Math.random() * 10 - 5) / delta;

                _super.prototype.update.call(this, delta, game);
            };
            return Cube;
        })(Xube.DrawableGameObject);
        Entities.Cube = Cube;
    })(DudeTest.Entities || (DudeTest.Entities = {}));
    var Entities = DudeTest.Entities;
})(DudeTest || (DudeTest = {}));
var DudeTest;
(function (DudeTest) {
    (function (Entities) {
        var Coords = (function (_super) {
            __extends(Coords, _super);
            function Coords(length) {
                _super.call(this);

                var geometryX = new THREE.Geometry();
                geometryX.vertices.push(new THREE.Vector3(0, 0, 0));
                geometryX.vertices.push(new THREE.Vector3(length, 0, 0));
                var axeX = new THREE.Line(geometryX, new THREE.LineBasicMaterial({
                    color: 0xff0000
                }));

                var geometryY = new THREE.Geometry();
                geometryY.vertices.push(new THREE.Vector3(0, 0, 0));
                geometryY.vertices.push(new THREE.Vector3(0, length, 0));
                var axeY = new THREE.Line(geometryY, new THREE.LineBasicMaterial({
                    color: 0x00ff00
                }));

                var geometryZ = new THREE.Geometry();
                geometryZ.vertices.push(new THREE.Vector3(0, 0, 0));
                geometryZ.vertices.push(new THREE.Vector3(0, 0, length));
                var axeZ = new THREE.Line(geometryZ, new THREE.LineBasicMaterial({
                    color: 0x0000ff
                }));

                this.model.add(axeX);
                this.model.add(axeY);
                this.model.add(axeZ);
            }
            return Coords;
        })(Xube.DrawableGameObject);
        Entities.Coords = Coords;
    })(DudeTest.Entities || (DudeTest.Entities = {}));
    var Entities = DudeTest.Entities;
})(DudeTest || (DudeTest = {}));
var DudeTest;
(function (DudeTest) {
    (function (Entities) {
        var Plane = (function (_super) {
            __extends(Plane, _super);
            function Plane() {
                _super.call(this);

                var geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
                var material = new THREE.MeshLambertMaterial({ color: 0x555555, wireframe: true });

                var mesh = new THREE.Mesh(geometry, material);
                mesh.rotateX(-Math.PI / 2);

                this.model.add(mesh);
            }
            return Plane;
        })(Xube.DrawableGameObject);
        Entities.Plane = Plane;
    })(DudeTest.Entities || (DudeTest.Entities = {}));
    var Entities = DudeTest.Entities;
})(DudeTest || (DudeTest = {}));
var DudeTest;
(function (DudeTest) {
    (function (Entities) {
        var Minion = (function (_super) {
            __extends(Minion, _super);
            function Minion() {
                var _this = this;
                _super.call(this);
                var loader = new THREE.JSONLoader();
                loader.load('assets/minion.js', function (geometry, materials) {
                    var mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
                    mesh.scale.x = 10;
                    mesh.scale.y = 10;
                    mesh.scale.z = 10;

                    _this.model.add(mesh);

                    console.log('loaded');
                });
            }
            Minion.prototype.update = function (delta, game) {
            };
            return Minion;
        })(Xube.DrawableGameObject);
        Entities.Minion = Minion;
    })(DudeTest.Entities || (DudeTest.Entities = {}));
    var Entities = DudeTest.Entities;
})(DudeTest || (DudeTest = {}));
var sc;

var DudeTest;
(function (DudeTest) {
    var DudeGame = (function (_super) {
        __extends(DudeGame, _super);
        function DudeGame() {
            _super.apply(this, arguments);
        }
        DudeGame.prototype.initialize = function () {
            var _this = this;
            _super.prototype.initialize.call(this);

            sc = this;

            this.renderer.setSize(1000, 600);
            this.camera = new THREE.PerspectiveCamera(45, 1000 / 600, 1, 5000);
            this.camera.lookAt(new THREE.Vector3(-200, -50, -200));
            this.camera.position.set(20, 5, 20);

            this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);
            this.controls.target.set(0, 0, 0);
            this.controls.rotateSpeed = 1.0;
            this.controls.zoomSpeed = 1.2;
            this.controls.panSpeed = 0.8;
            this.controls.noZoom = false;
            this.controls.noPan = false;
            this.controls.staticMoving = true;
            this.controls.dynamicDampingFactor = 0.3;
            this.controls.keys = [65, 83, 68];

            (function () {
                var light = new THREE.DirectionalLight(0xffffff, 2);
                light.position.set(1, 1, 1).normalize();
                _this.scene.add(light);

                var light = new THREE.DirectionalLight(0xffffff);
                light.position.set(-1, -1, -1).normalize();
                _this.scene.add(light);

                _this.add(new DudeTest.Entities.Coords(5));

                _this.add(new DudeTest.Entities.Minion());

                var plane = new DudeTest.Entities.Plane();
                _this.add(plane);
            })();
        };

        DudeGame.prototype.update = function (delta, game) {
            this.controls.update();
            _super.prototype.update.call(this, delta, game);
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
