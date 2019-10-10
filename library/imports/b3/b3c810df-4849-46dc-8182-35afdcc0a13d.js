"use strict";
cc._RF.push(module, 'b3c81DfSElG3IGCNa/cwKE9', 'rolePanel');
// Script/hall/rolePanel.ts

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
var gameRes_1 = require("../game/gameRes");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rolePanel = /** @class */ (function (_super) {
    __extends(rolePanel, _super);
    function rolePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contraShow = null;
        _this.contraNode = null;
        _this.roleInfoNode = null;
        _this.heroItem = null;
        _this.weaponItem = null;
        _this.heroSPA = null;
        _this.roleAniName = null;
        _this.roleHealthValue = null;
        _this.roleWeaponName = null;
        _this.heros = null;
        _this.weapons = null;
        _this.isClickedApproachAni = true;
        return _this;
        // update (dt) {}
    }
    rolePanel.prototype.onLoad = function () {
        this.heros = gameRes_1.playerRes.heroNames;
        this.weapons = gameRes_1.playerRes.contraGunName;
        this.roleAniName = this.heros[0];
        this.roleWeaponName = this.weapons[0];
        this.initHerosList();
        this.initWeaponList();
        this.initRoleShow(this.roleAniName);
    };
    /**
     * 初始化英雄列表
     */
    rolePanel.prototype.initHerosList = function () {
        var choiceHeroNode = this.node.getChildByName('choiceHero');
        cc.find("view/content", choiceHeroNode).active = true;
        var from_pos = cc.v2(cc.winSize.width / 2, choiceHeroNode.getPosition().y);
        var to_pos = cc.v2(0, choiceHeroNode.getPosition().y);
        choiceHeroNode.position = from_pos;
        choiceHeroNode.stopAllActions();
        choiceHeroNode.runAction(cc.moveTo(0.5, to_pos));
        for (var index = 0; index < this.heros.length; index++) {
            var _item = cc.instantiate(this.heroItem);
            if (index == 0) {
                _item.getComponent(cc.Toggle).isChecked = true;
            }
            _item.getChildByName('headAltar').getComponent(cc.Sprite).spriteFrame = this.heroSPA.getSpriteFrame('head_' + this.heros[index]);
            _item.getChildByName('name').getComponent(cc.Label).string = this.heros[index];
            _item.active = true;
            _item.getComponent(cc.Button).clickEvents[0].customEventData = this.heros[index];
            //cc.log(_item.getComponent(cc.Button))
            _item.parent = cc.find("choiceHero/view/content", this.node);
        }
    };
    /**
    * 初始化武器列表
    */
    rolePanel.prototype.initWeaponList = function () {
        var choiceWeaponNode = this.node.getChildByName('choiceWeapon');
        cc.find("view/content", choiceWeaponNode).active = true;
        var from_pos = cc.v2(-cc.winSize.width / 2, choiceWeaponNode.getPosition().y);
        var to_pos = cc.v2(0, choiceWeaponNode.getPosition().y);
        choiceWeaponNode.position = from_pos;
        choiceWeaponNode.stopAllActions();
        choiceWeaponNode.runAction(cc.moveTo(0.5, to_pos));
        for (var index = 0; index < this.weapons.length; index++) {
            var _item = cc.instantiate(this.weaponItem);
            if (index == 0) {
                _item.getChildByName('default').active = true;
                _item.getComponent(cc.Toggle).isChecked = true;
            }
            _item.getChildByName('weaponAltar').getComponent(cc.Sprite).spriteFrame = this.heroSPA.getSpriteFrame('gun_' + index);
            _item.getChildByName('gunLevel').getComponent(cc.Sprite).spriteFrame = this.heroSPA.getSpriteFrame('gunLevel1');
            _item.active = true;
            _item.getComponent(cc.Button).clickEvents[0].customEventData = index.toString();
            _item.parent = cc.find("choiceWeapon/view/content", this.node);
        }
    };
    /**
     * 初始化英雄展示 默认第一个英雄
     * @name 英雄名
     */
    rolePanel.prototype.initRoleShow = function (name) {
        var path = gameRes_1.playerRes[name].aniPath;
        var self = this;
        cc.loader.loadRes(path, sp.SkeletonData, function (err, _SkeletonData) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            else {
                //cc.log(_SkeletonData)
                self.roleAniName = name;
                self.contraShow.skeletonData = _SkeletonData;
                self.playApproachAni();
            }
        });
    };
    /**
     * 英雄入场动画 从上方旋转一身后站着变成等候动画
     */
    rolePanel.prototype.playApproachAni = function () {
        var _this = this;
        this.contraNode.setPosition(0, 0);
        this.contraNode.setRotation(0);
        this.contraNode.setScale(0.6);
        var approachTime = 1;
        this.contraShow.setMix('idle', 'roll2', 0.2);
        this.node.getChildByName('light').active = false;
        this.scheduleOnce(function () {
            _this.node.getChildByName('light').active = true;
            _this.isClickedApproachAni = true;
            _this.contraNode.setScale(1);
        }, approachTime);
        this.contraShow.setAnimation(0, 'roll2', true);
        this.contraShow.addAnimation(0, 'idle', true, approachTime);
        this.contraNode.runAction(cc.spawn(cc.rotateBy(approachTime, 360), cc.moveTo(approachTime, cc.v2(0, -290)).easing(cc.easeIn(approachTime))));
        this.contraShow.setSkin(this.roleWeaponName);
        this.updateRoleInfo();
    };
    rolePanel.prototype.updateRoleInfo = function () {
        this.roleHealthValue = gameRes_1.playerRes[this.roleAniName].health;
        //cc.log(this.roleHealthValue)
        this.roleInfoNode.getChildByName('name').getComponent(cc.Label).string = 'hero:' + this.roleAniName;
        this.roleInfoNode.getChildByName('weapon').getComponent(cc.Label).string = 'weapon:' + this.roleWeaponName;
        this.roleInfoNode.getChildByName('health').getComponent(cc.Label).string = 'health:' + this.roleHealthValue;
    };
    rolePanel.prototype.clickSwithcHero = function (event, customEventData) {
        //防止短时间多次点击
        if (!this.isClickedApproachAni)
            return;
        this.isClickedApproachAni = false;
        this.initRoleShow(customEventData);
    };
    rolePanel.prototype.clickSwithcWeapon = function (event, customEventData) {
        var gunName = 'gun' + customEventData;
        this.contraShow.setSkin(gunName);
        this.roleWeaponName = gunName;
        this.updateRoleInfo();
    };
    rolePanel.prototype.start = function () {
    };
    __decorate([
        property(sp.Skeleton)
    ], rolePanel.prototype, "contraShow", void 0);
    __decorate([
        property(cc.Node)
    ], rolePanel.prototype, "contraNode", void 0);
    __decorate([
        property(cc.Node)
    ], rolePanel.prototype, "roleInfoNode", void 0);
    __decorate([
        property(cc.Node)
    ], rolePanel.prototype, "heroItem", void 0);
    __decorate([
        property(cc.Node)
    ], rolePanel.prototype, "weaponItem", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], rolePanel.prototype, "heroSPA", void 0);
    rolePanel = __decorate([
        ccclass
    ], rolePanel);
    return rolePanel;
}(cc.Component));
exports.default = rolePanel;

cc._RF.pop();