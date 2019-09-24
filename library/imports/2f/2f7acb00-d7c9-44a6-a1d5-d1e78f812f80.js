"use strict";
cc._RF.push(module, '2f7acsA18lEpqHV0eePgS+A', 'gameProtocol');
// Script/game/gameProtocol.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameProtocol = {
    /**
     * 客户端之间的通信协议
     */
    event: {
        /**
         * 隐藏虚拟摇杆
         */
        displayJoyStick: "隐藏虚拟摇杆",
        /**
         * player射击
         */
        playerShooting: "player射击",
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