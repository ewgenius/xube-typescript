/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../lib/three.d.ts" />
module Xube {
    export interface Initializeable {
        initialize();
    }
    export class Game {
        private initialized:boolean;
        renderer:THREE.WebGLRenderer;
        scene:THREE.Scene;
        camera:THREE.Camera;

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
        }

        initialize() {
            this.camera = new THREE.Camera();

        }

        private doInitialize() {
            this.initialize();
        }

        update() {
        }

        render() {
            this.renderer.render(this.scene, this.camera);
        }

        private loop() {
            requestAnimationFrame(() => {
                this.loop();
            });
            this.update();
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