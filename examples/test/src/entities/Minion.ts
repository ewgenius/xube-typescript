/**
 * Created by ewgenius on 12.09.14.
 */
/// <reference path="../../../../typings/threejs/three.d.ts" />
/// <reference path="../../../../src/xube/GameObject.ts" />
module DudeTest.Entities {
    export class Minion extends Xube.DrawableGameObject {
        constructor() {
            super();
            var loader = new THREE.JSONLoader();
            loader.load('assets/minion.js', (geometry, materials) => {
                var mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
                mesh.scale.x = 10;
                mesh.scale.y = 10;
                mesh.scale.z = 10;

                this.model.add(mesh);

                console.log('loaded');
            });
        }

        update(delta:number, game:DudeGame) {
        }
    }

}
