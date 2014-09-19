/**
 * Created by ewgenius on 12.09.14.
 */
/// <reference path="../../../../typings/threejs/three.d.ts" />
/// <reference path="../../../../src/xube/GameObject.ts" />
module DudeTest.Entities {
    export class Plane extends Xube.DrawableGameObject {
        constructor() {
            super();

            var geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
            var material = new THREE.MeshLambertMaterial({color: 0x555555, wireframe: true });

            var mesh = new THREE.Mesh(geometry, material);
            mesh.rotateX(-Math.PI / 2);

            this.model.add(mesh);
        }
    }
}
