(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game/gameProtocol.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2f7acsA18lEpqHV0eePgS+A', 'gameProtocol', __filename);
// Script/game/gameProtocol.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameProtocol = {
    /**
     * 客户端之间的通信协议
     */
    event: {
        /**
         * 角色跑动
         */
        playerRunAction: '角色跑动',
    },
    /**
     * 虚拟摇杆
     */
    joystick: {
        /**
         * 摇杆类型
         */
        JoystickType: cc.Enum({
            FIXED: 0,
            FOLLOW: 1,
        }),
        /**
         * 操作类型
         */
        DirectionType: cc.Enum({
            FOUR: 4,
            EIGHT: 8,
            ALL: 0,
        }),
        /**
         * 速度类型
         */
        SpeedType: cc.Enum({
            STOP: 0,
            NORMAL: 1,
            FAST: 2
        }),
    }
};
exports.gameProtocol = gameProtocol;

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
        //# sourceMappingURL=gameProtocol.js.map
        