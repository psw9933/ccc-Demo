(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/hall/hallView.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '49cddjhR3ZCxIlwFDavBgF7', 'hallView', __filename);
// Script/hall/hallView.ts

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
var GameInfo_1 = require("../module/GameInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var hallView = /** @class */ (function (_super) {
    __extends(hallView, _super);
    function hallView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rolePanel = null;
        // LIFE-CYCLE CALLBACKS:
        _this.rolePanelNode = null;
        return _this;
        // update (dt) {}
    }
    hallView.prototype.onLoad = function () {
        this.rolePanelNode = cc.instantiate(this.rolePanel);
        this.rolePanelNode.parent = this.node;
    };
    hallView.prototype.start = function () {
    };
    hallView.prototype.clickBackBtn = function () {
    };
    hallView.prototype.clickPlayBtn = function () {
        var _roleAniName = this.rolePanelNode.getComponent('rolePanel').roleAniName;
        var _roleWeaponName = this.rolePanelNode.getComponent('rolePanel').roleWeaponName;
        var _roleHealthValue = this.rolePanelNode.getComponent('rolePanel').roleHealthValue;
        GameInfo_1.default.getInstance().initRoleInfo(_roleAniName, _roleWeaponName, _roleHealthValue);
        cc.director.loadScene('battle');
    };
    __decorate([
        property(cc.Prefab)
    ], hallView.prototype, "rolePanel", void 0);
    hallView = __decorate([
        ccclass
    ], hallView);
    return hallView;
}(cc.Component));
exports.default = hallView;

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
        //# sourceMappingURL=hallView.js.map
        