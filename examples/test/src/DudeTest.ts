/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../../lib/three.d.ts" />
/// <reference path="../../../src/xube/Game.ts" />
/// <reference path="../../../src/xube/GameObject.ts" />
/// <reference path="entities/Cube.ts" />
/// <reference path="entities/Coords.ts" />
/// <reference path="entities/Plane.ts" />

var sc;

module DudeTest {
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


                this.add(new Entities.Coords(100));

                for (var i = 0; i < 200; i++) {
                    var cube = new Entities.Cube();
                    this.add(cube);
                }

                //var plane = new Entities.Plane();
                //plane.model.position.y = -2;
                //this.add(plane);
            })();
        }

        update(delta:number, game:Xube.Game) {
            this.camera.position.x = 200 * Math.cos(this.lastFrame / 10000.0);
            this.camera.position.z = 200 * Math.sin(this.lastFrame / 10000.0);
            this.camera.lookAt(new THREE.Vector3(-this.camera.position.x, -this.camera.position.y, -this.camera.position.z));

            super.update(delta, game);
        }
    }
}

window.onload = () => {
    var container = document.getElementById('container');
    var game = new DudeTest.DudeGame(container);
    game.run();
};