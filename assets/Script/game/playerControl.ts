import { gameProtocol } from "./gameProtocol"
import battleView from "../battle/battleView"
const { ccclass, property } = cc._decorator;


@ccclass
export default class playerControl extends cc.Component {
    @property(battleView)
    battleView: battleView = null;

    /**移动方向 */
    @property(cc.v2)
    moveDir = new cc.Vec2(0, 1);

    /**速度级别 */
    @property
    _speedType = gameProtocol.playerControl.speedType.STOP;

    /**角色运动类型 */
    @property
    _motionType = gameProtocol.playerControl.motionType.STOP;

    /**最快速度 */
    @property(cc.Integer)
    fastSpeed = 200;

    /**正常速度 */
    @property(cc.Integer)
    normalSpeed = 100;

    /**停止时速度 */
    @property(cc.Integer)
    stopSpeed = 0;

    /**移动速度 */
    @property
    _moveSpeed = 0;


    private spine: sp.Skeleton = null
    private movableArea = null
    private mixTime: number = 0.2
    //正在播放动画状态
    /**人物朝向 true为右方false为左边 */
    private Orientation: boolean = true
    private playerScale:any=null;
    onLoad() {
        this.playerScale=0.6
        this.initEvent()
        this.spine = this.node.getComponent(sp.Skeleton);
        this.node.scale = this.playerScale;
        this._motionType = gameProtocol.playerControl.motionType.STOP;
    
        // this._setMix('walk', 'run');
        // this._setMix('run', 'jump');
        // this._setMix('walk', 'jump');
    }

    private initEvent() {
        cc.systemEvent.on(gameProtocol.event.playerShooting, this.Shooting, this);
    }
    private clearEvent() {
        cc.systemEvent.off(gameProtocol.event.playerShooting, this.Shooting, this);
    }
    onDestroy() {
        this.clearEvent()
    }

    _setMix(anim1, anim2) {
        this.spine.setMix(anim1, anim2, this.mixTime);
        this.spine.setMix(anim2, anim1, this.mixTime);
    }
    // methods
    move() {
        //人物面向转身
        if (this.Orientation) {
            this.node.scaleX = this.playerScale
        }
        else{
            this.node.scaleX = -this.playerScale
        }
        
        let newPos = this.node.position.add(this.moveDir.mul(this._moveSpeed / 60));
        this.node.setPosition(newPos);
        // //碰撞体检查newPos在可移动区域范围内
        // if (this.battleView.checkInMovableArea(newPos)) {
        //     this.node.setPosition(newPos);
        // }
        //cc.log(this.node.getPosition())

    }

    Shooting() {
        cc.log("Shooting")
        this.spine.setAnimation(1, 'shoot', false);
    }
    private hasAniStop: boolean = false
    private hasAniRun: boolean = false
    private hasAniJump: boolean = false
    update(dt) {
        //cc.log(this._motionType)
        switch (this._motionType) {
            case gameProtocol.playerControl.motionType.STOP:
                this.setPlayerAnimation('idle',true);
                this._moveSpeed = this.stopSpeed;
                break;
            case gameProtocol.playerControl.motionType.LEFT:
                this.Orientation = false;
                this.setPlayerAnimation('run',true);
                this._moveSpeed = this.normalSpeed;
                this.moveDir=cc.v2(-1, 0);
                this.move()
                break;
            case gameProtocol.playerControl.motionType.RIGHT:
                this.Orientation = true;
                this.setPlayerAnimation('run',true);
                this._moveSpeed = this.normalSpeed;
                this.moveDir=cc.v2(1, 0);
                this.move()
                break;
            case gameProtocol.playerControl.motionType.JUMP:
                this.spine.setAnimation(1, "roll2", true);
                this.moveDir=cc.v2(10, 10);
                this.schedule(()=>{
                    this._motionType=gameProtocol.playerControl.motionType.STOP
                },1)
                this._moveSpeed = this.normalSpeed;
                this.move()
                break;
        }
    }
    
    /**
     * 
     * @param aniName 动画名
     * @param loop:是否循环播放动画
     */
    setPlayerAnimation(aniName: string,loop:boolean) {
        if (this.hasAniRun && aniName == 'run') return;
        if (this.hasAniStop && aniName == 'idle') return;

        if (aniName == 'run') {
            this.hasAniRun = true;
            this.hasAniStop = false
        }

        if (aniName == 'idle') {
            this.hasAniStop = true;
            this.hasAniRun = false
        }
        this.spine.setAnimation(1, aniName, true);
    }
}
export { playerControl }