declare module Xube {
    export class Game {
        private initialized:boolean;

        constructor();

        initialize():void;

        private doInitialize():void;

        update():void;

        run():void;
    }
}