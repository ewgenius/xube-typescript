/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../xube/Game.ts" />
/// <reference path="../xube/GameObject.ts" />

/// <reference path="../../lib/three.d.ts" />

var sc;

module DudeTest {
    export class Cube extends Xube.DrawableGameObject {
        constructor() {
            super();
            var geometry = new THREE.BoxGeometry(200, 200, 200);
            var material = new THREE.MeshBasicMaterial();
            this.mesh = new THREE.Mesh(geometry, material);
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

            this.camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 2000);
            this.camera.position.set(0, 200, 800);

            // init scene
            (() => {
                this.scene.add(new THREE.AmbientLight(0x404040));

                var light = new THREE.DirectionalLight(0xffffff);
                light.position.set(0, 1, 0);
                this.scene.add(light);

                var cube = new Cube();

                this.add(cube);
            })();
        }
    }
}

window.onload = () => {
    var container = document.getElementById('container');
    var game = new DudeTest.DudeGame(container);
    game.run();
};