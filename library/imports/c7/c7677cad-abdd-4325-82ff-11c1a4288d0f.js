"use strict";
cc._RF.push(module, 'c7677ytq91DJYL/EcGkKI0P', 'joyStickControl');
// Script/game/joystick/joyStickControl.ts

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
var gameProtocol_1 = require("../gameProtocol");
var playerControl_1 = require("../playerControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var joyStickControl = /** @class */ (function (_super) {
    __extends(joyStickControl, _super);
    function joyStickControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //摇杆操纵点
        _this.dot = null;
        //摇杆背景节点
        _this.ring = null;
        //摇杆所在位置
        _this._stickPos = null;
        //触摸位置
        _this._touchLocation = null;
        //操控角色
        _this.playerControl = null;
        _this.radius = null;
        _this.stickPos = null;
        return _this;
        // // methods
        // setPlayerSpeed() {
        //   this.playerControl = this.playerControl.getComponent('Player');
        //   this.playerControl.moveDir = p;
        //   this.playerControl._speedType = gameProtocol.joystick.SpeedType.NORMAL;
        // }
    }
    joyStickControl.prototype.onLoad = function () {
        this.radius = this.ring.width / 2;
        this._initTouchEvent();
    };
    joyStickControl.prototype._initTouchEvent = function () {
        // set the size of joystick node to control scale
        var self = this;
        self.node.on(cc.Node.EventType.TOUCH_START, self._touchStartEvent, self);
        self.node.on(cc.Node.EventType.TOUCH_MOVE, self._touchMoveEvent, self);
        self.node.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        self.node.on(cc.Node.EventType.TOUCH_CANCEL, self._touchEndEvent, self);
    };
    joyStickControl.prototype._touchStartEvent = function (event) {
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.stickPos = this.ring.getPosition();
        // 触摸点与圆圈中心的距离
        var distance = touchPos.sub(this.ring.getPosition()).mag();
        // 手指在圆圈内触摸,控杆跟随触摸点
        if (this.stickPos > distance) {
            this.dot.setPosition(touchPos);
        }
    };
    joyStickControl.prototype._touchMoveEvent = function (event) {
        // 以圆圈为锚点获取触摸坐标
        var touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
        var distance = touchPos.mag();
        // 由于摇杆的 postion 是以父节点为锚点，所以定位要加上 touch start 时的位置
        var posX = this.stickPos.x + touchPos.x;
        var posY = this.stickPos.y + touchPos.y;
        // 归一化
        var p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();
        if (this.radius > distance) {
            this.dot.setPosition(cc.v2(posX, posY));
            this.playerControl._speedType = gameProtocol_1.gameProtocol.joystick.SpeedType.NORMAL;
        }
        else {
            // 控杆永远保持在圈内，并在圈内跟随触摸更新角度
            var x = this.stickPos.x + p.x * this.radius;
            var y = this.stickPos.y + p.y * this.radius;
            this.dot.setPosition(cc.v2(x, y));
            this.playerControl._speedType = gameProtocol_1.gameProtocol.joystick.SpeedType.FAST;
        }
        //this.playerControl = this.playerControl.getComponent('playerControl');
        this.playerControl.moveDir = p;
    };
    joyStickControl.prototype._touchEndEvent = function () {
        this.dot.setPosition(this.ring.getPosition());
        this.playerControl._speedType = gameProtocol_1.gameProtocol.joystick.SpeedType.STOP;
        cc.systemEvent.emit(gameProtocol_1.gameProtocol.event.displayJoyStick);
    };
    __decorate([
        property(cc.Node)
    ], joyStickControl.prototype, "dot", void 0);
    __decorate([
        property(cc.Node)
    ], joyStickControl.prototype, "ring", void 0);
    __decorate([
        property(cc.Node)
    ], joyStickControl.prototype, "_stickPos", void 0);
    __decorate([
        property(cc.Node)
    ], joyStickControl.prototype, "_touchLocation", void 0);
    __decorate([
        property(playerControl_1.playerControl)
    ], joyStickControl.prototype, "playerControl", void 0);
    joyStickControl = __decorate([
        ccclass
    ], joyStickControl);
    return joyStickControl;
}(cc.Component));
exports.default = joyStickControl;

cc._RF.pop();