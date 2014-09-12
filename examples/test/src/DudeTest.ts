/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../../src/xube/Game.ts" />
/// <reference path="../../../src/xube/GameObject.ts" />

/// <reference path="../../../lib/three.d.ts" />

var sc;

module DudeTest {
    class Coords extends Xube.DrawableGameObject {
        constructor(length: number) {
            super();

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
    }

    class Plane extends Xube.DrawableGameObject {
        constructor() {
            super();

            var geometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
            var material = new THREE.MeshLambertMaterial({color: 0x555555});

            var mesh = new THREE.Mesh(geometry, material);
            mesh.rotateX(-Math.PI / 2);

            this.model.add(mesh);
        }
    }

    class Cube extends Xube.DrawableGameObject {
        constructor() {
            super();
            var geometry = new THREE.BoxGeometry(5, 5, 5);
            var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});

            var mesh = new THREE.Mesh(geometry, material);


            this.model.add(mesh);

            this.model.position.x = Math.random() * 100;
            this.model.position.y = Math.random() * 100;
            this.model.position.z = Math.random() * 100;
        }

        update(delta) {
            this.model.rotation.x += 0.1 / delta;
            this.model.rotation.y += 0.1 / delta;
        }
    }

    export class DudeGame extends Xube.Game {
        initialize() {
            super.initialize();

            sc = this;

            this.renderer.setSize(1000, 600);
            this.camera = new THREE.PerspectiveCamera(45, 1000 / 600, 1, 5000);
            this.camera.lookAt(new THREE.Vector3(-200, -50, -200));
            this.camera.position.set(200, 50, 200);

            // init scene
            (() => {
                var light = new THREE.DirectionalLight(0xffffff, 2);
                light.position.set(1, 1, 1).normalize();
                this.scene.add(light);

                var light = new THREE.DirectionalLight(0xffffff);
                light.position.set(-1, -1, -1).normalize();
                this.scene.add(light);


                this.add(new Coords(100));

                for (var i = 0; i < 20; i++) {
                    var cube = new Cube();
                    this.add(cube);
                }

                var plane = new Plane();
                plane.model.position.y = -2;
                this.add(plane);
            })();
        }

        update(delta:number) {
            //console.log(this.lastFrame / 1000.0);

            this.camera.position.x = 200 * Math.cos(this.lastFrame / 10000.0);
            this.camera.position.z = 200 * Math.sin(this.lastFrame / 10000.0);
            this.camera.lookAt(new THREE.Vector3(-this.camera.position.x, -this.camera.position.y, -this.camera.position.z));

            super.update(delta);
        }
    }
}

window.onload = () => {
    var container = document.getElementById('container');
    var game = new DudeTest.DudeGame(container);
    game.run();
};