/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../lib/three.d.ts" />
/// <reference path="GameObject.ts" />
/// <reference path="DrawableGameObject.ts" />

module Xube {
    export interface Initializeable {
        initialize();
    }
    export class Game {
        private initialized:boolean;
        renderer:THREE.WebGLRenderer;
        scene:THREE.Scene;
        camera:THREE.Camera;
        private objects:GameObject[];

        constructor(container) {
            this.initialized = false;

            // init dom container
            if (container === undefined) {
                container = document.body.appendChild(document.createElement('div'));
            }

            // init base game components
            this.renderer = new THREE.WebGLRenderer();
            container.appendChild(this.renderer.domElement);

            this.scene = new THREE.Scene();

            this.objects = [];
        }

        initialize() {
            this.camera = new THREE.Camera();
        }

        private doInitialize() {
            this.initialize();
        }

        add(object:GameObject) {
            this.objects.push(object);
            if (object instanceof Xube.DrawableGameObject) {
                this.scene.add((<Xube.DrawableGameObject>object).mesh);
            }
        }

        remove(object:GameObject) {
            var i = this.objects.indexOf(object);
            var obj = this.objects[i];

            if (obj instanceof Xube.DrawableGameObject) {
                this.scene.remove((<Xube.DrawableGameObject>obj).mesh);
            }

            this.objects.splice(i, 1);
        }

        update(delta) {
            for (var i in this.objects) {
                this.objects[i].update(delta);
            }
        }

        render() {
            this.renderer.render(this.scene, this.camera);
        }

        private loop() {
            requestAnimationFrame(() => {
                this.loop();
            });
            this.update(1);
            this.render();
        }

        run() {
            if (!this.initialized) {
                this.doInitialize();
                this.initialized = true;

                this.loop();
            }
        }
    }
}