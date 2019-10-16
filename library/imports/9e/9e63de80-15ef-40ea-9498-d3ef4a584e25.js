"use strict";
cc._RF.push(module, '9e63d6AFe9A6pSY0+9KWE4l', 'battleView');
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
        _this.bulletPre = null;
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
        _this.bulletPool = null;
        _this.maxBulletCount = 3;
        return _this;
    }
    battleView.prototype.onLoad = function () {
        this.initEvent();
        this.initRoleInfo();
        this.initPlayer();
        this.playerNode.parent = this.node;
        this.initBtnControl();
        this.initCollisionArea();
        this.initBulletPool();
    };
    battleView.prototype.initEvent = function () {
        cc.systemEvent.on(gameProtocol_1.gameProtocol.event.playerShooting, this.shoot, this);
    };
    battleView.prototype.clearEvent = function () {
        cc.systemEvent.off(gameProtocol_1.gameProtocol.event.playerShooting, this.shoot, this);
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
        //this._roleHealth.init(GameInfo.getInstance().returnRoleInfo().roleMaxHealth)
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
    battleView.prototype.update = function (dt) {
    };
    battleView.prototype.test = function () {
        var area = cc.find('background/frameObstaclePre', this.node).getComponent(cc.PolygonCollider);
        cc.log(area);
    };
    battleView.prototype.initBulletPool = function () {
        this.bulletPool = new cc.NodePool();
        for (var i = 0; i < this.maxBulletCount; ++i) {
            var bullet = cc.instantiate(this.bulletPre); // 创建节点
            this.bulletPool.put(bullet); // 通过 put 接口放入对象池
        }
    };
    battleView.prototype.shoot = function () {
        var bullet = this.createBulletNode();
        var pos = this.LaunchPosition();
        this.playBulletAni(bullet, pos);
    };
    battleView.prototype.createBulletNode = function () {
        var bullet = null;
        if (this.bulletPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            bullet = this.bulletPool.get();
        }
        else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            cc.log('子弹数不够');
            //或者可以改变最大子弹数
            // bullet = cc.instantiate(this.bulletPre);
            // this.maxBulletCount++
            //this.bulletPool.put(bullet);
        }
        return bullet;
    };
    battleView.prototype.LaunchPosition = function () {
        var _pos = this.playerNode.getComponent('playerControl').onMuzzlePos();
        var playerPos = this.playerNode.getPosition();
        var _x = playerPos.x + _pos.x;
        var _y = playerPos.y + _pos.y;
        if (!this.playerNode.getComponent('playerControl').Orientation) {
            _x = playerPos.x - _pos.x;
        }
        return new cc.Vec2(_x, _y);
    };
    battleView.prototype.playBulletAni = function (bullet, pos) {
        var _this = this;
        bullet.parent = cc.find('bulletLayer', this.node);
        bullet.setPosition(pos);
        var to_pos = new cc.Vec2(pos.x + 200, pos.y);
        if (!this.playerNode.getComponent('playerControl').Orientation) {
            to_pos = new cc.Vec2(pos.x - 200, pos.y);
            bullet.scaleX = -1;
        }
        //到达最大射程后回收进pool
        bullet.runAction(cc.sequence(cc.moveTo(1, to_pos).easing(cc.easeIn(1.0)), cc.callFunc(function () {
            _this.bulletPool.put(bullet);
        })));
    };
    __decorate([
        property(cc.Prefab)
    ], battleView.prototype, "PlayerPre", void 0);
    __decorate([
        property(cc.Prefab)
    ], battleView.prototype, "bulletPre", void 0);
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