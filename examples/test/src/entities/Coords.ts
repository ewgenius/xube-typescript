/**
 * Created by ewgenius on 12.09.14.
 */
/// <reference path="../../../../typings/threejs/three.d.ts" />
/// <reference path="../../../../src/xube/GameObject.ts" />
module DudeTest.Entities {
    export class Coords extends Xube.DrawableGameObject {
        constructor(length:number) {
            super();

            var geometryX = new THREE.Geometry();
            geometryX.vertices.push(new THREE.Vector3(0, 0, 0));
            geometryX.vertices.push(new THREE.Vector3(length, 0, 0));
            var axeX = new THREE.Line(geometryX, new THREE.LineBasicMaterial({
                color: 0xff0000
            }));

            var geometryY = new THREE.Geometry();
            geometryY.vertices.push(new THREE.Vector3(0, 0, 0));
            geometryY.vertices.push(new THREE.Vector3(0, length, 0));
            var axeY = new THREE.Line(geometryY, new THREE.LineBasicMaterial({
                color: 0x00ff00
            }));

            var geometryZ = new THREE.Geometry();
            geometryZ.vertices.push(new THREE.Vector3(0, 0, 0));
            geometryZ.vertices.push(new THREE.Vector3(0, 0, length));
            var axeZ = new THREE.Line(geometryZ, new THREE.LineBasicMaterial({
                color: 0x0000ff
            }));


            this.model.add(axeX);
            this.model.add(axeY);
            this.model.add(axeZ);
        }
    }
}
