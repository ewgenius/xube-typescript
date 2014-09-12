/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../lib/three.d.ts" />
/// <reference path="GameObject.ts" />

module Xube {
    export class DrawableGameObject extends GameObject {
        mesh:THREE.Mesh;

        setPosition(position:THREE.Vector3) {
            this.mesh.position.set(position.x, position.y, position.z);
        }
    }
}