"use strict";
cc._RF.push(module, '9e63d6AFe9A6pSY0+9KWE4l', 'hallView');
// Script/hall/hallView.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var hallView = /** @class */ (function (_super) {
    __extends(hallView, _super);
    function hallView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayerPre = null;
        _this.JoystickPre = null;
        _this.JoystickNode = null;
        _this.playerNode = null;
        return _this;
    }
    hallView.prototype.onLoad = function () {
        this.initPlayer();
        this.initJoystick();
    };
    hallView.prototype.initJoystick = function () {
        this.JoystickNode = cc.instantiate(this.JoystickPre);
        this.JoystickNode.getComponent('joyStickControl').playerControl = this.playerNode.getComponent('playerControl');
        this.JoystickNode.parent = this.node;
        this.JoystickNode.active = false;
    };
    hallView.prototype.initPlayer = function () {
        this.playerNode = cc.instantiate(this.PlayerPre);
        this.playerNode.getComponent('playerControl').hallView = this;
        this.playerNode.parent = this.node;
        this.playerNode.setPosition(-554, -255);
    };
    hallView.prototype.clickShowJoystick = function (event) {
        this.JoystickNode.active = true;
        this.JoystickNode.setPosition(-485, -258);
    };
    hallView.prototype.checkInMovableArea = function (loaction) {
        // var point =this.node.convertToNodeSpaceAR(loaction);
        // cc.log(point)
        var bool = cc.Intersection.pointInPolygon(loaction, this.node.getComponent(cc.PolygonCollider).points);
        return bool;
    };
    __decorate([
        property(cc.Prefab)
    ], hallView.prototype, "PlayerPre", void 0);
    __decorate([
        property(cc.Prefab)
    ], hallView.prototype, "JoystickPre", void 0);
    hallView = __decorate([
        ccclass
    ], hallView);
    return hallView;
}(cc.Component));
exports.default = hallView;

cc._RF.pop();