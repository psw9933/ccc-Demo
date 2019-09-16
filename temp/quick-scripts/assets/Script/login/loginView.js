(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/login/loginView.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '853875cjQBCNoV9oA9tPj1m', 'loginView', __filename);
// Script/login/loginView.ts

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
var loginView = /** @class */ (function (_super) {
    __extends(loginView, _super);
    function loginView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signInPanelPre = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    loginView.prototype.onLoad = function () {
        ManagerWindow_1.ManagerWindow.getInstance().show(this.signInPanelPre);
    };
    loginView.prototype.start = function () {
        ManagerWindow_1.ManagerWindow.getInstance();
        //ManagerWindow.getInstance().init(this.windowManagerNode)
    };
    __decorate([
        property(cc.Prefab)
    ], loginView.prototype, "signInPanelPre", void 0);
    loginView = __decorate([
        ccclass
    ], loginView);
    return loginView;
}(cc.Component));
exports.default = loginView;

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
        //# sourceMappingURL=loginView.js.map
        