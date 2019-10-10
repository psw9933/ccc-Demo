import { playerControl } from "./playerControl"
import { gameProtocol } from "./gameProtocol"
const {ccclass, property} = cc._decorator;

@ccclass
export default class gameKeyControl extends cc.Component {

    @property(playerControl)
    playerControl: playerControl = null;

    @property(cc.Node)
    leftMoveBtnNode: cc.Node = null;

    @property(cc.Node)
    rightMoveBtnNode: cc.Node = null;

    @property(cc.Node)
    jumpBtnNode: cc.Node = null;


    onLoad () {
        this._initTouchEvent()
    }

    _initTouchEvent() {
        const self = this;
        self.leftMoveBtnNode.on(cc.Node.EventType.TOUCH_START, self.leftMove, self);
        self.rightMoveBtnNode.on(cc.Node.EventType.TOUCH_START, self.rightMove, self);
        self.jumpBtnNode.on(cc.Node.EventType.TOUCH_START, self.jump, self);

        self.leftMoveBtnNode.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        self.rightMoveBtnNode.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        self.jumpBtnNode.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        //self.node.on(cc.Node.EventType.TOUCH_MOVE, self._touchMoveEvent, self);
        // self.node.on(cc.Node.EventType.TOUCH_END, self._touchEndEvent, self);
        // self.node.on(cc.Node.EventType.TOUCH_CANCEL, self._touchEndEvent, self);
      }
    // LIFE-CYCLE CALLBACKS:

    
    leftMove(){
        cc.log('leftMove')
        this.playerControl._motionType=gameProtocol.playerControl.motionType.LEFT;
    }

    rightMove(){
        cc.log('rightMove')
        this.playerControl._motionType=gameProtocol.playerControl.motionType.RIGHT;
    }

    jump(){
        cc.log('jump')
        this.playerControl._motionType=gameProtocol.playerControl.motionType.JUMP;
    }

    _touchEndEvent(){
        cc.log('stop')
        this.playerControl._motionType=gameProtocol.playerControl.motionType.STOP;
    }

    start () {

    }

    // update (dt) {}
}
