"use strict";
cc._RF.push(module, '9e63d6AFe9A6pSY0+9KWE4l', 'battleView');
// Script/battle/battleView.ts

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
var gameProtocol_1 = require("../game/gameProtocol");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var battleView = /** @class */ (function (_super) {
    __extends(battleView, _super);
    function battleView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayerPre = null;
        _this.JoystickPre = null;
        _this.JoystickNode = null;
        _this.playerNode = null;
        return _this;
    }
    battleView.prototype.onLoad = function () {
        this.initEvent();
        this.initPlayer();
        this.initJoystick();
    };
    battleView.prototype.initEvent = function () {
        cc.systemEvent.on(gameProtocol_1.gameProtocol.event.displayJoyStick, this.onDisplayJoystick, this);
    };
    battleView.prototype.clearEvent = function () {
        cc.systemEvent.off(gameProtocol_1.gameProtocol.event.displayJoyStick, this.onDisplayJoystick, this);
    };
    battleView.prototype.onDestroy = function () {
        this.clearEvent();
    };
    battleView.prototype.initJoystick = function () {
        this.JoystickNode = cc.instantiate(this.JoystickPre);
        this.JoystickNode.getComponent('joyStickControl').playerControl = this.playerNode.getComponent('playerControl');
        this.JoystickNode.parent = this.node;
        this.JoystickNode.active = false;
    };
    battleView.prototype.initPlayer = function () {
        this.playerNode = cc.instantiate(this.PlayerPre);
        this.playerNode.getComponent('playerControl').hallView = this;
        this.playerNode.parent = this.node;
        this.playerNode.setPosition(-554, -255);
    };
    battleView.prototype.clickShowJoystick = function (event) {
        this.JoystickNode.active = true;
        this.JoystickNode.setPosition(-485, -258);
    };
    battleView.prototype.onDisplayJoystick = function () {
        this.JoystickNode.active = false;
    };
    battleView.prototype.clickShootingBtn = function () {
        cc.systemEvent.emit(gameProtocol_1.gameProtocol.event.playerShooting);
    };
    battleView.prototype.checkInMovableArea = function (loaction) {
        var bool = cc.Intersection.pointInPolygon(loaction, this.node.getComponent(cc.PolygonCollider).points);
        return bool;
    };
    __decorate([
        property(cc.Prefab)
    ], battleView.prototype, "PlayerPre", void 0);
    __decorate([
        property(cc.Prefab)
    ], battleView.prototype, "JoystickPre", void 0);
    battleView = __decorate([
        ccclass
    ], battleView);
    return battleView;
}(cc.Component));
exports.default = battleView;

cc._RF.pop();