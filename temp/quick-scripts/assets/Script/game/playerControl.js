(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game/playerControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9a2cbPQbxpG4qOT1vL4z4ns', 'playerControl', __filename);
// Script/game/playerControl.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
        /**跳跃方向 */
        _this.jumpDir = new cc.Vec2(0, 0);
        /**速度级别 */
        _this._speedType = gameProtocol_1.gameProtocol.playerControl.speedType.STOP;
        /**角色运动类型 */
        _this._motionType = gameProtocol_1.gameProtocol.playerControl.motionType.STOP;
        /**最快速度 */
        _this.fastSpeed = 200;
        /**正常速度 */
        _this.normalSpeed = 100;
        /**停止时速度 */
        _this.stopSpeed = 0;
        /**移动速度 */
        _this._moveSpeed = 0;
        _this.spine = null;
        _this.mixTime = 0.2;
        //正在播放动画状态
        /**人物朝向 true为右方false为左边 */
        _this.Orientation = true;
        _this.playerScale = null;
        _this.jumpForce = 100;
        _this.hasAniStop = false;
        _this.hasAniRun = false;
        _this.hasAniJump = false;
        return _this;
    }
    playerControl.prototype.onLoad = function () {
        this.playerScale = 0.6;
        this.initEvent();
        this.spine = this.node.getComponent(sp.Skeleton);
        this.node.scale = this.playerScale;
        this.setPlayerAnimation('idle', true);
        // this._setMix('walk', 'run');
        // this._setMix('run', 'jump');
        // this._setMix('walk', 'jump');
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
    playerControl.prototype.onMuzzlePos = function () {
        var size = this.node.getContentSize();
        var x = (size.width) * this.playerScale;
        var y = (size.height / 2) * this.playerScale;
        return new cc.Vec2(x, y);
    };
    // methods
    playerControl.prototype.move = function () {
        //人物面向转身
        if (this.Orientation) {
            this.node.scaleX = this.playerScale;
        }
        else {
            this.node.scaleX = -this.playerScale;
        }
        var newPos = this.node.position.add(this.moveDir.mul(this._moveSpeed / 60));
        this.node.setPosition(newPos);
    };
    // methods
    playerControl.prototype.jump = function () {
        var _this = this;
        if (this.hasAniJump)
            return;
        this.hasAniJump = true;
        var _x = this.node.getPosition().x;
        var _y = this.node.getPosition().y;
        if (this.Orientation) {
            _x += this.jumpForce;
        }
        else {
            _x -= this.jumpForce;
        }
        this.node.runAction(cc.sequence(cc.jumpTo(1, new cc.Vec2(_x, _y), this.jumpForce, 1), cc.callFunc(function () {
            _this._motionType = gameProtocol_1.gameProtocol.playerControl.motionType.STOP;
            _this.setPlayerAnimation('run', true);
            _this.hasAniJump = false;
        })));
    };
    playerControl.prototype.Shooting = function () {
        cc.log("Shooting");
        if (this.hasAniRun) {
            this.setPlayerAnimation('run_attack', false);
        }
        else {
            this.setPlayerAnimation('attack', false);
        }
        this._motionType = gameProtocol_1.gameProtocol.playerControl.motionType.STOP;
    };
    playerControl.prototype.update = function (dt) {
        switch (this._motionType) {
            case gameProtocol_1.gameProtocol.playerControl.motionType.STOP:
                this.setPlayerAnimation('idle', true);
                this._moveSpeed = this.stopSpeed;
                break;
            case gameProtocol_1.gameProtocol.playerControl.motionType.LEFT:
                this.Orientation = false;
                this.setPlayerAnimation('run', true);
                this._moveSpeed = this.normalSpeed;
                this.moveDir = cc.v2(-1, 0);
                this.move();
                break;
            case gameProtocol_1.gameProtocol.playerControl.motionType.RIGHT:
                this.Orientation = true;
                this.setPlayerAnimation('run', true);
                this._moveSpeed = this.normalSpeed;
                this.moveDir = cc.v2(1, 0);
                this.move();
                break;
            case gameProtocol_1.gameProtocol.playerControl.motionType.JUMP:
                this.setPlayerAnimation('idle', true);
                this.jump();
                break;
            case gameProtocol_1.gameProtocol.playerControl.motionType.SHOOT:
                this.Shooting();
                break;
        }
    };
    /**
     *
     * @param aniName 动画名
     * @param loop:是否循环播放动画
     */
    playerControl.prototype.setPlayerAnimation = function (aniName, loop) {
        if (this.hasAniRun && aniName == 'run')
            return;
        if (this.hasAniStop && aniName == 'idle')
            return;
        if (aniName == 'run') {
            this.hasAniRun = true;
            this.hasAniStop = false;
        }
        if (aniName == 'idle') {
            this.hasAniStop = true;
            this.hasAniRun = false;
        }
        this.spine.setAnimation(1, aniName, loop);
    };
    __decorate([
        property(battleView_1.default)
    ], playerControl.prototype, "battleView", void 0);
    __decorate([
        property(cc.v2)
    ], playerControl.prototype, "moveDir", void 0);
    __decorate([
        property(cc.v2)
    ], playerControl.prototype, "jumpDir", void 0);
    __decorate([
        property
    ], playerControl.prototype, "_speedType", void 0);
    __decorate([
        property
    ], playerControl.prototype, "_motionType", void 0);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=playerControl.js.map
        