import { gameProtocol } from "./gameProtocol"
import { playerControl } from "./playerControl"
const { ccclass, property } = cc._decorator;

@ccclass
export default class joyStickControl extends cc.Component {

  //摇杆操纵点
  @property(cc.Node)
  dot: cc.Node = null;
  //摇杆背景节点
  @property(cc.Node)
  ring: cc.Node = null;
  //摇杆所在位置
  @property(cc.Node)
  _stickPos: cc.Node = null;
  //触摸位置
  @property(cc.Node)
  _touchLocation: cc.Node = null;
  //操控角色
  @property(playerControl)
  playerControl: playerControl = null;

  public radius = null;
  public stickPos = null;
  onLoad() {
    this.radius = this.ring.width / 2;
    this._initTouchEvent();
  }

  _initTouchEvent() {
    // set the size of joystick node to control scale
    const self = this;
    self.node.on(cc.Node.EventType.TOUCH_START, self._touchStartEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_MOVE, self._touchMoveEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
    self.node.on(cc.Node.EventType.TOUCH_CANCEL, self._touchEndEvent, self);
  }

  _touchStartEvent(event) {
    const touchPos = this.node.convertToNodeSpaceAR(event.getLocation());

    this.stickPos = this.ring.getPosition();
    // 触摸点与圆圈中心的距离
    const distance = touchPos.sub(this.ring.getPosition()).mag();

    // 手指在圆圈内触摸,控杆跟随触摸点
    if (this.stickPos > distance) {
      this.dot.setPosition(touchPos);
    }

  }

  _touchMoveEvent(event) {
    // 以圆圈为锚点获取触摸坐标
    const touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
    const distance = touchPos.mag();

    // 由于摇杆的 postion 是以父节点为锚点，所以定位要加上 touch start 时的位置
    const posX = this.stickPos.x + touchPos.x;
    const posY = this.stickPos.y + touchPos.y;

    // 归一化
    const p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();

    if (this.radius > distance) {
      this.dot.setPosition(cc.v2(posX, posY));

      this.playerControl._speedType = gameProtocol.joystick.SpeedType.NORMAL;
    } else {
      // 控杆永远保持在圈内，并在圈内跟随触摸更新角度
      const x = this.stickPos.x + p.x * this.radius;
      const y = this.stickPos.y + p.y * this.radius;
      this.dot.setPosition(cc.v2(x, y));

      this.playerControl._speedType = gameProtocol.joystick.SpeedType.FAST;
    }

    //this.playerControl = this.playerControl.getComponent('playerControl');
    this.playerControl.moveDir = p;
  }

  _touchEndEvent() {
    this.dot.setPosition(this.ring.getPosition());
    this.playerControl._speedType = gameProtocol.joystick.SpeedType.STOP;
  }

  // // methods

  // setPlayerSpeed() {
  //   this.playerControl = this.playerControl.getComponent('Player');
  //   this.playerControl.moveDir = p;
  //   this.playerControl._speedType = gameProtocol.joystick.SpeedType.NORMAL;
  // }
}
