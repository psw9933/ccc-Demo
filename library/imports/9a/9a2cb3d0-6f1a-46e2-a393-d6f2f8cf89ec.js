"use strict";
cc._RF.push(module, '9a2cbPQbxpG4qOT1vL4z4ns', 'playerControl');
// Script/game/playerControl.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameProtocol_1 = require("./gameProtocol");
var battleView_1 = require("../battle/battleView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var playerControl = /** @class */ (function (_super) {
    __extends(playerControl, _super);
    function playerControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.battleView = null;
        /**移动方向 */
        _this.moveDir = new cc.Vec2(0, 1);
        /**速度级别 */
        _this._speedType = gameProtocol_1.gameProtocol.joystick.SpeedType.STOP;
        /**最快速度 */
        _this.fastSpeed = 200;
        /**正常速度 */
        _this.normalSpeed = 100;
        /**停止时速度 */
        _this.stopSpeed = 0;
        /**移动速度 */
        _this._moveSpeed = 0;
        _this.spine = null;
        _this.movableArea = null;
        _this.mixTime = 0.2;
        //正在播放动画状态
        _this.hasAniRun = false;
        _this.hasAniWalk = false;
        return _this;
    }
    playerControl.prototype.onLoad = function () {
        this.initEvent();
        this.spine = this.node.getComponent(sp.Skeleton);
        this._setMix('walk', 'run');
        this._setMix('run', 'jump');
        this._setMix('walk', 'jump');
    };
    playerControl.prototype.initEvent = function () {
        cc.systemEvent.on(gameProtocol_1.gameProtocol.event.playerShooting, this.Shooting, this);
    };
    playerControl.prototype.clearEvent = function () {
        cc.systemEvent.off(gameProtocol_1.gameProtocol.event.playerShooting, this.Shooting, this);
    };
    playerControl.prototype.onDestroy = function () {
        this.clearEvent();
    };
    playerControl.prototype._setMix = function (anim1, anim2) {
        this.spine.setMix(anim1, anim2, this.mixTime);
        this.spine.setMix(anim2, anim1, this.mixTime);
    };
    // methods
    playerControl.prototype.move = function () {
        //人物面向转身
        if (this.moveDir.x > 0) {
            this.node.scaleX = 0.2;
        }
        if (this.moveDir.x < 0) {
            this.node.scaleX = -0.2;
        }
        var newPos = this.node.position.add(this.moveDir.mul(this._moveSpeed / 60));
        //碰撞体检查newPos在可移动区域范围内
        if (this.battleView.checkInMovableArea(newPos)) {
            this.node.setPosition(newPos);
        }
    };
    playerControl.prototype.Shooting = function () {
        cc.log("Shooting");
        this.spine.setAnimation(1, 'shoot', false);
    };
    playerControl.prototype.update = function (dt) {
        switch (this._speedType) {
            case gameProtocol_1.gameProtocol.joystick.SpeedType.STOP:
                this._moveSpeed = this.stopSpeed;
                this.hasAniRun = false;
                this.hasAniWalk = false;
                this.spine.setAnimation(0, 'idle', true);
                break;
            case gameProtocol_1.gameProtocol.joystick.SpeedType.NORMAL:
                this._moveSpeed = this.normalSpeed;
                //this.spine.setAnimation(0, 'walk', true);
                this.setPlayerAnimation('walk', true);
                this.move();
                break;
            case gameProtocol_1.gameProtocol.joystick.SpeedType.FAST:
                this._moveSpeed = this.fastSpeed;
                //this.spine.setAnimation(0, 'run', true);
                this.setPlayerAnimation('run', true);
                this.move();
                break;
            default:
                break;
        }
    };
    /**
     *
     * @param aniName 动画名
     * @param loop 是否循环播放
     */
    playerControl.prototype.setPlayerAnimation = function (aniName, loop) {
        if (this.hasAniRun && aniName == 'run')
            return;
        if (this.hasAniWalk && aniName == 'walk')
            return;
        if (aniName == 'run') {
            this.hasAniRun = true;
        }
        if (aniName == 'walk') {
            this.hasAniWalk = true;
        }
        this.spine.setAnimation(0, aniName, loop);
    };
    __decorate([
        property(battleView_1.default)
    ], playerControl.prototype, "battleView", void 0);
    __decorate([
        property(cc.v2)
    ], playerControl.prototype, "moveDir", void 0);
    __decorate([
        property
    ], playerControl.prototype, "_speedType", void 0);
    __decorate([
        property(cc.Integer)
    ], playerControl.prototype, "fastSpeed", void 0);
    __decorate([
        property(cc.Integer)
    ], playerControl.prototype, "normalSpeed", void 0);
    __decorate([
        property(cc.Integer)
    ], playerControl.prototype, "stopSpeed", void 0);
    __decorate([
        property
    ], playerControl.prototype, "_moveSpeed", void 0);
    playerControl = __decorate([
        ccclass
    ], playerControl);
    return playerControl;
}(cc.Component));
exports.playerControl = playerControl;
exports.default = playerControl;

cc._RF.pop();