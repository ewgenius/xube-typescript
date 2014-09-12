/**
 * Created by ewgenius on 12.09.14.
 */
/// <reference path="../../../../lib/three.d.ts" />
/// <reference path="../../../../src/xube/GameObject.ts" />
module DudeTest.Entities {
    export class Cube extends Xube.DrawableGameObject {
        private radius:number;
        private speed:number;

        constructor() {
            super();

            this.radius = Math.random() * 50;
            this.speed = (Math.random() - 0.5) * 10;

            var geometry = new THREE.BoxGeometry(
                1, 1, 1//Math.random() * 10,
                //Math.random() * 10,
                //Math.random() * 10);
            );
            var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});

            var mesh = new THREE.Mesh(geometry, material);

            this.model.add(mesh);

            this.model.position.x = Math.random() * 100 - 50;
            this.model.position.y = Math.random() * 100 - 50;
            this.model.position.z = Math.random() * 100 - 50;
        }

        update(delta:number, game:Xube.Game) {
            this.model.position.x = this.radius * Math.cos(this.speed * game.lastFrame / 5000.0);
            this.model.position.z = this.radius * Math.sin(this.speed * game.lastFrame / 5000.0);
            this.model.position.y = this.radius * Math.sin(this.speed * game.lastFrame / 500.0);
            this.model.rotation.x += (Math.random() * 10 - 5) / delta;
            this.model.rotation.y += (Math.random() * 10 - 5) / delta;

            super.update(delta, game);
        }
    }
}
