
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
}
export { gameProtocol }