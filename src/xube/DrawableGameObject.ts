/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../lib/three.d.ts" />
/// <reference path="GameObject.ts" />

module Xube {
    export class DrawableGameObject extends GameObject {
        model: THREE.Object3D;

        constructor() {
            super();
            this.model = new THREE.Object3D();
        }

        setPosition(position:THREE.Vector3) {
            this.model.position.set(position.x, position.y, position.z);
        }
    }
}