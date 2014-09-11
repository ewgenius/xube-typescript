var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DudeTest;
(function (DudeTest) {
    var DudeGame = (function (_super) {
        __extends(DudeGame, _super);
        function DudeGame() {
            _super.apply(this, arguments);
        }
        DudeGame.prototype.initialize = function () {
            console.log('initialised');
        };
        return DudeGame;
    })(Xube.Game);
    DudeTest.DudeGame = DudeGame;
})(DudeTest || (DudeTest = {}));

window.onload = function () {
    var game = new DudeTest.DudeGame();
    game.run();
};
