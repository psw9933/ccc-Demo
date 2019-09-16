(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/hall/joystick/script/Joystick.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cbf49BjvVtNz5E6vqiAkw/f', 'Joystick', __filename);
// Script/hall/joystick/script/Joystick.js

'use strict';

var _JoystickCommon = require('JoystickCommon');

var _JoystickCommon2 = _interopRequireDefault(_JoystickCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
  extends: cc.Component,

  properties: {
    dot: {
      default: null,
      type: cc.Node,
      displayName: 'Dot',
      tooltip: '摇杆操纵点'
    },
    ring: {
      default: null,
      type: cc.Node,
      displayName: 'Ring',
      tooltip: '摇杆背景节点'
    },

    player: {
      default: null,
      type: cc.Node,
      displayName: 'Player',
      tooltip: '操控角色'
    },

    joystickType: {
      default: _JoystickCommon2.default.JoystickType.FIXED,
      type: _JoystickCommon2.default.JoystickType,
      displayName: 'Touch Type',
      tooltip: '触摸类型'
    },
    directionType: {
      default: _JoystickCommon2.default.DirectionType.ALL,
      type: _JoystickCommon2.default.DirectionType,
      displayName: 'Direction Type',
      tooltip: '方向类型'
    },

    _stickPos: {
      default: null,
      type: cc.Node,
      tooltip: '摇杆所在位置'
    },
    _touchLocation: {
      default: null,
      type: cc.Node,
      tooltip: '触摸位置'
    }
  },

  onLoad: function onLoad() {
    this._radius = this.ring.width / 2;
    this._initTouchEvent();
    // hide joystick when follow
    if (this.joystickType == _JoystickCommon2.default.JoystickType.FOLLOW) {
      this.node.opacity = 0;
    }
  },
  _initTouchEvent: function _initTouchEvent() {
    // set the size of joystick node to control scale
    var self = this;
    self.node.on(cc.Node.EventType.TOUCH_START, self._touchStartEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_MOVE, self._touchMoveEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_CANCEL, self._touchEndEvent, self);
  },
  _touchStartEvent: function _touchStartEvent(event) {
    var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());

    if (this.joystickType === _JoystickCommon2.default.JoystickType.FIXED) {
      this._stickPos = this.ring.getPosition();

      // 触摸点与圆圈中心的距离
      var distance = touchPos.sub(this.ring.getPosition()).mag();

      // 手指在圆圈内触摸,控杆跟随触摸点
      if (this._radius > distance) {
        this.dot.setPosition(touchPos);
      }
    } else if (this.joystickType === _JoystickCommon2.default.JoystickType.FOLLOW) {

      // 记录摇杆位置，给 touch move 使用
      this._stickPos = touchPos;
      this.node.opacity = 255;
      this._touchLocation = event.getLocation();

      // 更改摇杆的位置
      this.ring.setPosition(touchPos);
      this.dot.setPosition(touchPos);
    }
  },
  _touchMoveEvent: function _touchMoveEvent(event) {
    if (this.joystickType === _JoystickCommon2.default.JoystickType.FOLLOW) {
      // 如果 touch start 位置和 touch move 相同，禁止移动
      if (this._touchLocation === event.getLocation()) {
        return false;
      }
    }

    // 以圆圈为锚点获取触摸坐标
    var touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
    var distance = touchPos.mag();

    // 由于摇杆的 postion 是以父节点为锚点，所以定位要加上 touch start 时的位置
    var posX = this._stickPos.x + touchPos.x;
    var posY = this._stickPos.y + touchPos.y;

    // 归一化
    var p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();

    if (this._radius > distance) {
      this.dot.setPosition(cc.v2(posX, posY));

      this.player._speedType = _JoystickCommon2.default.SpeedType.NORMAL;
    } else {
      // 控杆永远保持在圈内，并在圈内跟随触摸更新角度
      var x = this._stickPos.x + p.x * this._radius;
      var y = this._stickPos.y + p.y * this._radius;
      this.dot.setPosition(cc.v2(x, y));

      this.player._speedType = _JoystickCommon2.default.SpeedType.FAST;
    }

    this.player = this.player.getComponent('Player');
    this.player.moveDir = p;
  },
  _touchEndEvent: function _touchEndEvent() {
    this.dot.setPosition(this.ring.getPosition());
    if (this.joystickType == _JoystickCommon2.default.JoystickType.FOLLOW) {
      this.node.opacity = 0;
    }
    this.player._speedType = _JoystickCommon2.default.SpeedType.STOP;
  },


  // methods

  setPlayerSpeed: function setPlayerSpeed() {
    this.player = this.player.getComponent('Player');
    this.player.moveDir = p;
    this.player.speedType = _JoystickCommon2.default.SpeedType.NORMAL;
  }
});

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
        //# sourceMappingURL=Joystick.js.map
        