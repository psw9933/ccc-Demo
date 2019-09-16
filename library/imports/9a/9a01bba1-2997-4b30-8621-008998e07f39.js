"use strict";
cc._RF.push(module, '9a01buhKZdLMIYhAImY4H85', 'ManagerWindow');
// Script/module/ManagerWindow.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ManagerWindow = /** @class */ (function () {
    function ManagerWindow() {
        this.managerNode = null;
        this.bg = null;
        this.children = [];
        this.managerNode = cc.find('Canvas/WindowManager');
        cc.game.addPersistRootNode(this.managerNode);
        this.bg = this.managerNode.getChildByName('bg');
        this.bg.active = false;
        this.initEvent();
    }
    /**
     * 注册事件
     */
    ManagerWindow.prototype.initEvent = function () {
    };
    /**
     * 注销事件
     */
    ManagerWindow.prototype.clearEvent = function () {
    };
    ManagerWindow.prototype.clear = function () {
        cc.game.removePersistRootNode(this.managerNode);
        this.clearEvent();
        ManagerWindow.m_instance = null;
    };
    ManagerWindow.getInstance = function () {
        if (!ManagerWindow.m_instance)
            ManagerWindow.m_instance = new ManagerWindow();
        return ManagerWindow.m_instance;
    };
    ManagerWindow.prototype.show = function (prefab, data) {
        this.bg.width = cc.find('Canvas').width;
        this.bg.height = cc.find('Canvas').height;
        // this.managerNode.x = cc.find('Canvas').width / 2
        // this.managerNode.y = cc.find('Canvas').height / 2
        this.bg.active = true;
        var node = cc.instantiate(prefab);
        if (data) {
            node.attr({
                customEventData: data
            });
        }
        this.children.push(node);
        //this.bg.zIndex = this.children.length
        node.parent = this.managerNode; //this.managerNode
        //node.zIndex = this.children.length
        //node.runAction(cc.scaleTo(0.1, 1))
        //node.runAction(cc.fadeTo(0.1, 255))
        node.runAction(cc.rotateTo(0.1, 0, 0).easing(cc.easeBackOut()));
        //node.runAction(cc.moveTo(0.2, 0,0).easing(cc.easeIn(1.2)));
        return node;
    };
    /**
     * 移除最上层
     */
    ManagerWindow.prototype.pop = function () {
        if (this.children.length == 0) {
            this.bg.active = false;
            return;
        }
        var node = this.children.pop();
        node.removeFromParent();
        this.bg.zIndex = this.children.length - 1;
        if (this.children.length == 0)
            this.bg.active = false;
        node.destroy();
        return;
    };
    /**
     * 清空弹窗
     */
    ManagerWindow.prototype.removeAll = function () {
        while (this.children.length) {
            this.pop();
        }
    };
    ManagerWindow.m_instance = null;
    return ManagerWindow;
}());
exports.ManagerWindow = ManagerWindow;

cc._RF.pop();