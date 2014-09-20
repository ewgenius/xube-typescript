/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../../typings/threejs/three.d.ts" />
/// <reference path="../../../typings/threejs/stats.d.ts" />
/// <reference path="../../../typings/threejs/three.TrackballControls.d.ts" />

/// <reference path="../../../src/xube/Game.ts" />
/// <reference path="../../../src/xube/GameObject.ts" />
/// <reference path="entities/Cube.ts" />
/// <reference path="entities/PhysicsCube.ts" />
/// <reference path="entities/Coords.ts" />
/// <reference path="entities/Plane.ts" />
/// <reference path="entities/Minion.ts" />

var sc;

module DudeTest {
    export class DudeGame extends Xube.Game {
        controls:THREE.TrackballControls;
        stats;

        initialize() {
            super.initialize();

            (()=> {
                this.stats = new Stats();
                this.stats.domElement.style.position = 'absolute'
                this.stats.domElement.style.top = '0px';
                this.stats.domElement.style.zIndex = 100;
                this.container.appendChild(this.stats.domElement);
            })();

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
            this.controls.keys = [ 65, 83, 68 ];

            // init scene
            (() => {
                (<Physijs.Scene>this.scene).setGravity(new THREE.Vector3(0, -30, 0));

                var light = new THREE.DirectionalLight(0xffffff, 2);
                light.position.set(1, 1, 1).normalize();
                this.scene.add(light);

                var light = new THREE.DirectionalLight(0xffffff);
                light.position.set(-1, -1, -1).normalize();
                this.scene.add(light);

                this.add(new Entities.Coords(5));

                //this.add(new Entities.Minion());
                this.add(new Entities.PhysicsCube(4));
                this.add(new Entities.PhysicsCube(10));
                this.add(new Entities.PhysicsCube(12));


                var plane = new Entities.Plane();
                this.add(plane);
            })();


        }

        update(delta:number, game:Xube.Game) {
            this.controls.update();
            super.update(delta, game);
        }

        render() {
            super.render();
            this.stats.update();
        }
    }
}

window.onload = () => {
    Physijs.scripts.worker = '../../js/physijs_worker.js';
    Physijs.scripts.ammo = '../../js/ammo.js';

    var container = document.getElementById('container');
    var game = new DudeTest.DudeGame({
        container: container,
        physics: true
    });
    game.run();
};