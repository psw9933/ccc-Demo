(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game/gameKeyControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '264c0D1zZVJR50H6381xehN', 'gameKeyControl', __filename);
// Script/game/gameKeyControl.ts

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
var playerControl_1 = require("./playerControl");
var gameProtocol_1 = require("./gameProtocol");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var gameKeyControl = /** @class */ (function (_super) {
    __extends(gameKeyControl, _super);
    function gameKeyControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playerControl = null;
        _this.leftMoveBtnNode = null;
        _this.rightMoveBtnNode = null;
        _this.jumpBtnNode = null;
        _this.shootBtnNode = null;
        return _this;
        // update (dt) {}
    }
    gameKeyControl.prototype.onLoad = function () {
        this._initTouchEvent();
    };
    gameKeyControl.prototype._initTouchEvent = function () {
        var self = this;
        self.leftMoveBtnNode.on(cc.Node.EventType.TOUCH_START, self.leftMove, self);
        self.rightMoveBtnNode.on(cc.Node.EventType.TOUCH_START, self.rightMove, self);
        self.jumpBtnNode.on(cc.Node.EventType.TOUCH_START, self.jump, self);
        self.shootBtnNode.on(cc.Node.EventType.TOUCH_START, self.shoot, self);
        self.leftMoveBtnNode.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        self.rightMoveBtnNode.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        self.jumpBtnNode.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        self.shootBtnNode.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        //self.node.on(cc.Node.EventType.TOUCH_MOVE, self._touchMoveEvent, self);
        // self.node.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        // self.node.on(cc.Node.EventType.TOUCH_CANCEL, self._touchEndEvent, self);
    };
    // LIFE-CYCLE CALLBACKS:
    gameKeyControl.prototype.leftMove = function () {
        cc.log('leftMove');
        this.playerControl._motionType = gameProtocol_1.gameProtocol.playerControl.motionType.LEFT;
    };
    gameKeyControl.prototype.rightMove = function () {
        cc.log('rightMove');
        this.playerControl._motionType = gameProtocol_1.gameProtocol.playerControl.motionType.RIGHT;
    };
    gameKeyControl.prototype.jump = function () {
        cc.log('jump');
        this.playerControl._motionType = gameProtocol_1.gameProtocol.playerControl.motionType.JUMP;
    };
    gameKeyControl.prototype.shoot = function () {
        cc.log('jump');
        this.playerControl._motionType = gameProtocol_1.gameProtocol.playerControl.motionType.SHOOT;
    };
    gameKeyControl.prototype._touchEndEvent = function () {
        cc.log('stop');
        this.playerControl._motionType = gameProtocol_1.gameProtocol.playerControl.motionType.STOP;
    };
    gameKeyControl.prototype.start = function () {
    };
    __decorate([
        property(playerControl_1.playerControl)
    ], gameKeyControl.prototype, "playerControl", void 0);
    __decorate([
        property(cc.Node)
    ], gameKeyControl.prototype, "leftMoveBtnNode", void 0);
    __decorate([
        property(cc.Node)
    ], gameKeyControl.prototype, "rightMoveBtnNode", void 0);
    __decorate([
        property(cc.Node)
    ], gameKeyControl.prototype, "jumpBtnNode", void 0);
    __decorate([
        property(cc.Node)
    ], gameKeyControl.prototype, "shootBtnNode", void 0);
    gameKeyControl = __decorate([
        ccclass
    ], gameKeyControl);
    return gameKeyControl;
}(cc.Component));
exports.default = gameKeyControl;

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
        //# sourceMappingURL=gameKeyControl.js.map
        