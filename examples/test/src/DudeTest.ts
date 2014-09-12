/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../../src/xube/Game.ts" />
/// <reference path="../../../src/xube/GameObject.ts" />

/// <reference path="../../../lib/three.d.ts" />

var sc;

module DudeTest {
    class Cube extends Xube.DrawableGameObject {
        constructor() {
            super();
            var geometry = new THREE.BoxGeometry(20, 20, 20);
            var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});

            this.mesh = new THREE.Mesh(geometry, material);

            this.mesh.position.x = Math.random() * 100;
            this.mesh.position.y = Math.random() * 100;
            this.mesh.position.z = Math.random() * 100;

        }

        update(delta) {
            this.mesh.rotation.x += 0.1 / delta;
            this.mesh.rotation.y += 0.1 / delta;
        }
    }

    export class DudeGame extends Xube.Game {
        initialize() {
            super.initialize();

            sc = this.scene;

            this.renderer.setSize(800, 600);
            this.camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 5000);
            this.camera.lookAt(new THREE.Vector3(-1, -1, -1));
            this.camera.position.set(200, 200, 200);

            // init scene
            (() => {
                var light = new THREE.DirectionalLight(0xffffff, 2);
                light.position.set(1, 1, 1).normalize();
                this.scene.add(light);

                var light = new THREE.DirectionalLight(0xffffff);
                light.position.set(-1, -1, -1).normalize();
                this.scene.add(light);


                for (var i = 0; i < 20; i++) {
                    var cube = new Cube();
                    this.add(cube);
                }
            })();
        }
    }
}

window.onload = () => {
    var container = document.getElementById('container');
    var game = new DudeTest.DudeGame(container);
    game.run();
};