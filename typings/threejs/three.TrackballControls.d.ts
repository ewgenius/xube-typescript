/**
 * Created by ewgenius on 12.09.14.
 */
/// <reference path="./three.d.ts" />
declare module THREE {
    export class TrackballControls {
        target:THREE.Vector3;
        rotateSpeed:number;
        zoomSpeed:number;
        panSpeed:number;
        noZoom:boolean;
        noPan:boolean;
        staticMoving:boolean;
        dynamicDampingFactor:number;
        keys;

        constructor(camera:THREE.Camera, element);

        update();
    }
}