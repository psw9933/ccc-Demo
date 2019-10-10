"use strict";
cc._RF.push(module, '5dc2b6i7oJBEJEdOjSYSZer', 'GameInfo');
// Script/module/GameInfo.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameInfo = /** @class */ (function (_super) {
    __extends(GameInfo, _super);
    function GameInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.roleAniName = null;
        _this.roleWeaponName = null;
        _this.roleMaxHealth = null;
        return _this;
    }
    GameInfo_1 = GameInfo;
    GameInfo.getInstance = function () {
        if (!GameInfo_1.m_GameInfo)
            GameInfo_1.m_GameInfo = new GameInfo_1();
        return GameInfo_1.m_GameInfo;
    };
    // update (dt) {}
    GameInfo.prototype.initRoleInfo = function (_roleAniName, _roleWeaponName, _roleMaxHealth) {
        this.roleAniName = _roleAniName;
        this.roleWeaponName = _roleWeaponName;
        this.roleMaxHealth = _roleMaxHealth;
    };
    GameInfo.prototype.returnRoleInfo = function () {
        var roleInfo = {
            roleAniName: this.roleAniName,
            roleWeaponName: this.roleWeaponName,
            roleMaxHealth: this.roleMaxHealth
        };
        return roleInfo;
    };
    var GameInfo_1;
    GameInfo.m_GameInfo = null;
    GameInfo = GameInfo_1 = __decorate([
        ccclass
    ], GameInfo);
    return GameInfo;
}(cc.Component));
exports.default = GameInfo;

cc._RF.pop();