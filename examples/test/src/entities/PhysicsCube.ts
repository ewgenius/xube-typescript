/**
 * Created by ewgenius on 12.09.14.
 */
/// <reference path="../../../../typings/threejs/three.d.ts" />
/// <reference path="../../../../typings/physijs/physijs.d.ts" />
/// <reference path="../../../../src/xube/GameObject.ts" />
module DudeTest.Entities {
    export class PhysicsCube extends Xube.DrawableGameObject {
        constructor(y) {
            super();

            var material = Physijs.createMaterial(
                new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff}),
                0.6,
                0.3
            );

            var box = new Physijs.BoxMesh(new THREE.BoxGeometry( 1, 1, 1 ), material);
            box.addEventListener('collision', (e) => {
                console.log(e);
            });
            this.model.add(box);

            this.model.position.y = y;
        }

        private handleCollision(collided_with, linearVelocity, angularVelocity){

        }

        update(delta:number, game:Xube.Game) {
            super.update(delta, game);
        }
    }
}
