/**
 * Created by ewgenius on 11.09.14.
 */
/// <reference path="../../lib/three.d.ts" />
module Xube {
    export interface Initializeable {
        initialize();
    }
    export class Game {
        private initialized:boolean;

        constructor() {
            this.initialized = false;
        }

        initialize() {

        }

        private doInitialize() {
            this.initialize();
        }

        update() {

        }

        run() {
            if (!this.initialized) {
                this.doInitialize();
            }
        }
    }
}