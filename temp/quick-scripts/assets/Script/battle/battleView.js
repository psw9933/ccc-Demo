(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/battle/battleView.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9e63d6AFe9A6pSY0+9KWE4l', 'battleView', __filename);
// Script/battle/battleView.ts

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
var gameProtocol_1 = require("../game/gameProtocol");
var gameRes_1 = require("../game/gameRes");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameInfo_1 = require("../module/GameInfo");
var battleView = /** @class */ (function (_super) {
    __extends(battleView, _super);
    function battleView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayerPre = null;
        /**角色运动类型 */
        _this.actionType = gameProtocol_1.gameProtocol.playerControl.actionType.inTheAir;
        // @property(cc.Prefab)
        // JoystickPre:cc.Prefab=null;
        _this.btnControlNode = null;
        _this.playerNode = null;
        _this.roleAniName = null;
        _this.roleHealthValue = null;
        _this.roleWeaponName = null;
        _this.landArea = null;
        _this._actionType = null;
        return _this;
    }
    battleView.prototype.onLoad = function () {
        //this.initEvent()
        this.initRoleInfo();
        this.initPlayer();
        this.playerNode.parent = this.node;
        this.initBtnControl();
        this.initCollisionArea();
    };
    battleView.prototype.initBtnControl = function () {
        cc.find('operationMenu', this.node).getComponent('gameKeyControl').playerControl = this.playerNode.getComponent('playerControl');
    };
    battleView.prototype.initCollisionArea = function () {
        this.landArea = cc.find('background/land', this.node).getComponent(cc.BoxCollider);
        cc.log(this.landArea);
    };
    battleView.prototype.initPlayer = function () {
        this.playerNode = cc.instantiate(this.PlayerPre);
        this.playerNode.getComponent(sp.SkeletonData);
        this.playerNode.parent = this.node;
        this.initPlayerPosition();
        var path = gameRes_1.playerRes[this.roleAniName].aniPath;
        var self = this;
        cc.loader.loadRes(path, sp.SkeletonData, function (err, _SkeletonData) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            else {
                self.playerNode.getComponent(sp.Skeleton).skeletonData = _SkeletonData;
                self.playerNode.getComponent(sp.Skeleton).setSkin(self.roleWeaponName);
            }
        });
    };
    battleView.prototype.initPlayerPosition = function () {
        var c_pos = cc.find('background/circle', this.node).getPosition();
        var _x = c_pos.x;
        var _y = c_pos.y + 3;
        this.playerNode.setPosition(_x, _y);
    };
    battleView.prototype.showHealthValue = function () {
        var healthNode = cc.find('background/health', this.node);
        var _iconItem = cc.find('lifeIcon', healthNode);
        for (var i = 0; i < this.roleHealthValue; i++) {
            var iconItem = cc.instantiate(_iconItem);
            iconItem.parent = healthNode;
            iconItem.active = true;
        }
    };
    battleView.prototype.initRoleInfo = function () {
        var roleInfo = GameInfo_1.default.getInstance().returnRoleInfo();
        this.roleAniName = roleInfo.roleAniName;
        this.roleWeaponName = roleInfo.roleWeaponName;
        this.roleHealthValue = GameInfo_1.default.getInstance().returnRoleInfo().roleMaxHealth;
        this.showHealthValue();
        console.log(roleInfo);
    };
    battleView.prototype.collisionDetection = function () {
        // @property(cc.PolygonCollider)
        // longarea: cc.PolygonCollider = null
        // @property(cc.PolygonCollider)
        // huarea: cc.PolygonCollider = null
        // @property(cc.PolygonCollider)
        // hearea: cc.PolygonCollider = null
        // let p_pos=this.playerNode.getPosition();
        //     var point = cc.find('background/land', this.node).convertToWorldSpaceAR(loaction);
        //     // var bool = cc.Intersection.pointInPolygon(point, this.hearea.points)
        //     let bool=cc.Intersection.rectRect(this.playerNode, this.landArea.node)
        //     return bool
    };
    battleView.prototype._onPlayerDropDown = function () {
        var p_pos = this.playerNode.getPosition();
        var _x = p_pos.x;
        var _y = p_pos.y - 1;
        this.playerNode.setPosition(_x, _y);
    };
    battleView.prototype.checkPlayerPosition = function () {
        cc.log(this.playerNode.getPosition().y);
        if (this.playerNode.getPosition().y > -280) {
            return false;
        }
        else {
            return true;
        }
    };
    battleView.prototype.update = function (dt) {
        if (this.checkPlayerPosition())
            return;
        this._onPlayerDropDown();
        cc.log('DropDown');
        //let bool=cc.Intersection.rectRect(this.playerNode, this.landArea.node)
        // var point = this.playerNode.getChildByName('foot').convertToWorldSpaceAR(cc.v2(0, 0));;
        // cc.log(point)
        // cc.log(this.playerNode.getPosition())
        // switch (this.actionType) {
        //     case gameProtocol.playerControl.actionType.onLand:
        //             return;
        //     case gameProtocol.playerControl.actionType.inTheAir:
        //             this._onPlayerDropDown();
        //             break;
        // }
    };
    __decorate([
        property(cc.Prefab)
    ], battleView.prototype, "PlayerPre", void 0);
    __decorate([
        property
    ], battleView.prototype, "actionType", void 0);
    battleView = __decorate([
        ccclass
    ], battleView);
    return battleView;
}(cc.Component));
exports.default = battleView;

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
        //# sourceMappingURL=battleView.js.map
        