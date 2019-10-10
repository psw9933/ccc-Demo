"use strict";
cc._RF.push(module, '46ed2q879RPtofb/OaSAQb+', 'signUp');
// Script/login/signUp.ts

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
var HttpServer_1 = require("../module/HttpServer");
var ManagerNotice_1 = require("../module/ManagerNotice");
var ManagerWindow_1 = require("../module/ManagerWindow");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userIdEditBox = null;
        _this.passwordEditBox = null;
        _this.againEditBox = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.clickCanelBtn = function () {
        ManagerWindow_1.ManagerWindow.getInstance().pop();
    };
    NewClass.prototype.clickSignUpBtn = function () {
        if (this.checkUpStr()) {
            var requestData = {
                'userid': this.userIdEditBox.string,
                'password': this.passwordEditBox.string
            };
            var url = "user/cocosAddUser";
            HttpServer_1.httpServer.getInstance().post(url, {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            }, requestData, function (info) {
                var dataInfo = JSON.parse(info);
                if (dataInfo.status == 200) {
                    cc.log(dataInfo.msg);
                    ManagerNotice_1.ManagerNotice.getInstance().show("Create an account success!");
                    ManagerWindow_1.ManagerWindow.getInstance().pop();
                }
                else {
                    cc.log(dataInfo.msg);
                    ManagerNotice_1.ManagerNotice.getInstance().show("Create an account fail!");
                }
            });
        }
    };
    NewClass.prototype.checkUpStr = function () {
        if (this.passwordEditBox.string != this.againEditBox.string) {
            ManagerNotice_1.ManagerNotice.getInstance().show("Your confirmed password and new password do not match");
            return false;
        }
        if (this.userIdEditBox.string.length < 4) {
            ManagerNotice_1.ManagerNotice.getInstance().show("less than 4 digits,please enter again.");
            return false;
        }
        return true;
    };
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "userIdEditBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "passwordEditBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "againEditBox", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();