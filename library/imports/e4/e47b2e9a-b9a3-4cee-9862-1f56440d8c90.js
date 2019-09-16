"use strict";
cc._RF.push(module, 'e47b26auaNM7phiH1ZEDYyQ', 'signIn');
// Script/login/signIn.ts

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
var ManagerWindow_1 = require("../module/ManagerWindow");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userId = null;
        _this.password = null;
        _this.signUpPanelPre = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.clickLoginBtn = function () {
        cc.director.loadScene('hall');
        // let requestData = {
        //     'userid': this.userId.string,
        //     'password':this.password.string
        // }
        // let url="user/cocosDoLogin";
        // httpServer.getInstance().post(url, {
        //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        // }, requestData, (info) => {
        //     let dataInfo = JSON.parse(info)
        //     if (dataInfo.status == 200) {
        //         cc.log(dataInfo.msg)
        //         cc.director.loadScene('hall')
        //     } else {
        //         cc.log(dataInfo.msg)
        //     }
        // })
    };
    NewClass.prototype.clickSignUpBtn = function () {
        ManagerWindow_1.ManagerWindow.getInstance().show(this.signUpPanelPre);
    };
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "userId", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "password", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "signUpPanelPre", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();