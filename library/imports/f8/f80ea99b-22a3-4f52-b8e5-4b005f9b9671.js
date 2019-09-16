"use strict";
cc._RF.push(module, 'f80eambIqNPUrjlSwBfm5Zx', 'JoystickCommon');
// Script/hall/joystick/script/JoystickCommon.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  JoystickType: cc.Enum({
    FIXED: 0,
    FOLLOW: 1
  }),

  DirectionType: cc.Enum({
    FOUR: 4,
    EIGHT: 8,
    ALL: 0
  }),

  SpeedType: cc.Enum({
    STOP: 0,
    NORMAL: 1,
    FAST: 2
  })
};
module.exports = exports["default"];

cc._RF.pop();