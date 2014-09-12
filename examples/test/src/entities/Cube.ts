/**
 * Created by ewgenius on 12.09.14.
 */
/// <reference path="../../../../lib/three.d.ts" />
/// <reference path="../../../../src/xube/GameObject.ts" />
module DudeTest.Entities {
    export class Cube extends Xube.DrawableGameObject {
        constructor() {
            super();
            var geometry = new THREE.BoxGeometry(5, 5, 5);
            var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});

            var mesh = new THREE.Mesh(geometry, material);


            this.model.add(mesh);

            this.model.position.x = Math.random() * 100 - 50;
            this.model.position.y = Math.random() * 100 - 50;
            this.model.position.z = Math.random() * 100 - 50;
        }

        update(delta) {
            this.model.rotation.x += 0.1 / delta;
            this.model.rotation.y += 0.1 / delta;
        }
    }
}
