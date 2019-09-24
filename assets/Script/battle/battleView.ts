import {gameProtocol} from "../game/gameProtocol"
const {ccclass, property} = cc._decorator;

@ccclass
export default class battleView extends cc.Component {
    @property(cc.Prefab)
    PlayerPre:cc.Prefab=null;

    @property(cc.Prefab)
    JoystickPre:cc.Prefab=null;

    private JoystickNode=null
    private playerNode=null
    onLoad () {
        this.initEvent()
        this.initPlayer();
        this.initJoystick()
    }

    private initEvent() {
        cc.systemEvent.on(gameProtocol.event.displayJoyStick, this.onDisplayJoystick, this);
    }
    private clearEvent() {
        cc.systemEvent.off(gameProtocol.event.displayJoyStick, this.onDisplayJoystick, this);
    }
    onDestroy() {
        this.clearEvent()
    }

    initJoystick(){
        this.JoystickNode=cc.instantiate(this.JoystickPre);
        this.JoystickNode.getComponent('joyStickControl').playerControl=this.playerNode.getComponent('playerControl');
        this.JoystickNode.parent=this.node;
        this.JoystickNode.active=false
    }

    initPlayer(){
        this.playerNode=cc.instantiate(this.PlayerPre);
        this.playerNode.getComponent('playerControl').hallView=this;
        this.playerNode.parent=this.node;
        this.playerNode.setPosition(-554,-255)
    }

    clickShowJoystick(event){
        this.JoystickNode.active=true
        this.JoystickNode.setPosition(-485,-258)
    }

    onDisplayJoystick(){
        this.JoystickNode.active=false
    }

    clickShootingBtn(){
        cc.systemEvent.emit(gameProtocol.event.playerShooting);
    }

    checkInMovableArea(loaction){
        var bool = cc.Intersection.pointInPolygon(loaction, this.node.getComponent(cc.PolygonCollider).points)
        return bool
    }
}
