/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../typings/threejs/three.d.ts" />
/// <reference path="../../typings/physijs/physijs.d.ts" />
/// <reference path="GameObject.ts" />
/// <reference path="DrawableGameObject.ts" />

module Xube {
    /**
     * Main game class
     */
    export class Game {
        private initialized:boolean;
        renderer:THREE.WebGLRenderer;
        scene:THREE.Scene;
        camera:THREE.Camera;
        container:Node;
        private objects:GameObject[];
        lastFrame:number;
        private physics:boolean;

        /**
         * initializes new Xube Game instance
         * @param parameters
         */
        constructor(parameters:{
            container:Node;
            physics:boolean;
        }) {
            this.initialized = false;
            this.physics = parameters.physics;
            this.container = parameters.container;

            // init dom container
            if (this.container === undefined) {
                this.container = document.body.appendChild(document.createElement('div'));
            }

            // init base game components
            this.renderer = new THREE.WebGLRenderer();
            this.container.appendChild(this.renderer.domElement);

            // init physijs scene
            if (this.physics) {
                this.scene = new Physijs.Scene();
                this.scene.addEventListener(
                    'update',
                    () => {
                        console.log('ph');
                        (<Physijs.Scene>this.scene).simulate(undefined, 1);
                    }
                );
            }
            else
                this.scene = new THREE.Scene();

            this.objects = [];

            this.lastFrame = 0;

            if (this.physics    )
                (<Physijs.Scene>this.scene).simulate();
        }

        /**
         * initialize handle for overriding
         */
        initialize() {
            this.camera = new THREE.Camera();
        }

        private doInitialize() {
            this.initialize();
        }

        /**
         * adding new GameObject instance in game
         * @param object - if drawable will be added into scene
         */
        add(object:GameObject) {
            this.objects.push(object);
            if (object instanceof Xube.DrawableGameObject) {
                this.scene.add((<Xube.DrawableGameObject>object).model);
            }
        }

        /**
         * removing recently added GameObject
         * @param object
         */
        remove(object:GameObject) {
            var i = this.objects.indexOf(object);
            if (this.objects.length > i) {
                var obj = this.objects[i];

                if (obj instanceof Xube.DrawableGameObject) {
                    this.scene.remove((<Xube.DrawableGameObject>obj).model);
                }

                this.objects.splice(i, 1);
            }
        }

        /**
         * game update handler
         * @param delta
         * @param game - reference for Game instance
         */
        update(delta:number, game:Game) {
            for (var i in this.objects) {
                this.objects[i].update(delta, game);
            }
        }

        /**
         * game render handler
         */
        render() {
            this.renderer.render(this.scene, this.camera);
        }

        /**
         * main game loop function
         */
        private loop() {
            var frame = new Date();
            var delta = 20;
            if (this.lastFrame != 0)
                delta = frame.getTime() - this.lastFrame;
            requestAnimationFrame(() => {
                this.loop();
            });
            this.update(delta, this);
            this.render();

            this.lastFrame = frame.getTime();
        }

        /**
         * Game runinig method
         */
        run() {
            if (!this.initialized) {
                this.doInitialize();
                this.initialized = true;

                this.loop();
            }
        }
    }
}