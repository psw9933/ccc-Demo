(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/module/ManagerNotice.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0173ea4X3dGYYZNGBjxy2f/', 'ManagerNotice', __filename);
// Script/module/ManagerNotice.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ManagerNotice = /** @class */ (function () {
    function ManagerNotice() {
        this.item = null;
        this.childNode = null;
        cc.game.addPersistRootNode(cc.find('Canvas/noticeManager'));
        this.initEvent();
        this.childNode = cc.find('Canvas/noticeManager/child');
        var item = cc.find('Canvas/noticeManager/item');
        this.item = cc.instantiate(item);
        this.item.active = true;
    }
    ManagerNotice.getInstance = function () {
        if (!ManagerNotice.m_instance)
            ManagerNotice.m_instance = new ManagerNotice();
        return ManagerNotice.m_instance;
    };
    /**
     * 注册事件
     */
    ManagerNotice.prototype.initEvent = function () {
    };
    /**
     * 注销事件
     */
    ManagerNotice.prototype.clearEvent = function () {
    };
    ManagerNotice.prototype.initNode = function () {
    };
    ManagerNotice.prototype.clear = function () {
        cc.game.removePersistRootNode(cc.find('Canvas/noticeManager'));
        this.clearEvent();
        ManagerNotice.m_instance = null;
    };
    ManagerNotice.prototype.show = function (str, itemPrefab) {
        var managerNode = cc.find('Canvas/noticeManager');
        // managerNode.width = cc.find('Canvas').width
        // managerNode.height =cc.find('Canvas').height
        managerNode.setPosition(0, cc.find('Canvas').height / 4);
        // cc.log(managerNode.getPosition())
        if (itemPrefab == undefined)
            itemPrefab = this.item;
        var indexcount = 0;
        if (this.childNode.childrenCount > 3) {
            indexcount = this.childNode.childrenCount - 3;
            for (var _i = 0, _a = this.childNode.children; _i < _a.length; _i++) {
                var childNode = _a[_i];
                indexcount--;
                childNode.runAction(cc.fadeOut(0.25));
                if (indexcount <= 0)
                    break;
            }
        }
        for (var _b = 0, _c = this.childNode.children; _b < _c.length; _b++) {
            var childNode = _c[_b];
            childNode.runAction(cc.moveBy(0.3, cc.v2(0, 80)));
        }
        var itemNode = null;
        if (itemPrefab)
            itemNode = cc.instantiate(itemPrefab);
        else
            itemNode = cc.instantiate(this.item);
        itemNode.getChildByName('lb').on('size-changed', function () {
            if (this.width > this.parent.width)
                this.parent.width = this.width + 40;
        }.bind(itemNode));
        itemNode.getChildByName('lb').getComponent(cc.Label).string = str;
        itemNode.parent = this.childNode;
        itemNode.opacity = 0;
        if (this.childNode.childrenCount == 1) {
            itemNode.runAction(cc.sequence(cc.fadeIn(0.2), cc.delayTime(1), cc.fadeOut(0.5), cc.callFunc(function (target) {
                target.destroy();
            })));
        }
        else {
            itemNode.runAction(cc.sequence(cc.delayTime(0.3), cc.fadeIn(0.2), cc.delayTime(1), cc.fadeOut(0.5), cc.callFunc(function (target) {
                target.destroy();
            })));
        }
    };
    ManagerNotice.m_instance = null;
    return ManagerNotice;
}());
exports.ManagerNotice = ManagerNotice;

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
        //# sourceMappingURL=ManagerNotice.js.map
        