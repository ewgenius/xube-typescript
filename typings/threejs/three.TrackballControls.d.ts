/**
 * Created by ewgenius on 12.09.14.
 */
/// <reference path="./three.d.ts" />
declare module THREE {
    export class TrackballControls extends THREE.EventDispatcher {
        target:THREE.Vector3;

        rotateSpeed:number;
        zoomSpeed:number;
        panSpeed:number;

        staticMoving:boolean;
        dynamicDampingFactor:number;
        screen:{
            left:number;
            top:number;
            width:number;
            height:number
        };
        noRotate:boolean;
        noRoll:boolean;
        noZoom:boolean;
        noPan:boolean;
        minDistance:number;
        maxDistance:number;

        keys:number[];

        constructor(object:THREE.Object3D, element:HTMLElement);

        update();
    }
}