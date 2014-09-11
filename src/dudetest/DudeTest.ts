/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../xube/Game.ts" />
/// <reference path="../xube/GameObject.ts" />

/// <reference path="../../lib/three.d.ts" />
module DudeTest {
    export class DudeGame extends Xube.Game {
        initialize() {
            super.initialize();

            this.renderer.setSize(800, 600);

            this.camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 2000);
            this.camera.position.set(0, 200, 800);

            // init scene
            (() => {
                this.scene.add(new THREE.AmbientLight(0x404040));

                var light = new THREE.DirectionalLight(0xffffff);
                light.position.set(0, 1, 0);
                this.scene.add(light);

                var geometry = new THREE.BoxGeometry( 200, 200, 200 );
                var material = new THREE.MeshBasicMaterial();
                var mesh = new THREE.Mesh( geometry, material );
                this.scene.add( mesh );
            })();
        }
    }
}

window.onload = () => {
    var container = document.getElementById('container');
    var game = new DudeTest.DudeGame(container);
    game.run();
};