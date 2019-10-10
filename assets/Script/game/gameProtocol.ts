
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
    },
    
    /**
     * player控制
     */
    playerControl: {
        /**
         * 移动类型
         */
        motionType: cc.Enum({
            LEFT: 0,
            RIGHT: 1,
            STOP: 2,
            JUMP:3
        }),
        /**
         * 位置类型
         */
        actionType: cc.Enum({
            onLand: 0,
            inTheAir: 1,
            jumpUp: 2,
        }),
        speedType: cc.Enum({
            STOP: 0,
            NORMAL: 1,
            FAST: 2
        }),
    }

}
export { gameProtocol }