import { gameProtocol } from "./gameProtocol"
import hallView from "../hall/hallView"
const { ccclass, property } = cc._decorator;


@ccclass
export default class playerControl extends cc.Component {
    @property(hallView)
    hallView: hallView = null;

    /**移动方向 */
    @property(cc.v2)
    moveDir = new cc.Vec2(0, 1);

    /**速度级别 */
    @property
    _speedType = gameProtocol.joystick.SpeedType.STOP;

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
    private hasAniRun: boolean = false
    private hasAniWalk: boolean = false
    onLoad() {
        this.spine = this.node.getComponent(sp.Skeleton)
        this._setMix('walk', 'run');
        this._setMix('run', 'jump');
        this._setMix('walk', 'jump');
    }
    _setMix(anim1, anim2) {
        this.spine.setMix(anim1, anim2, this.mixTime);
        this.spine.setMix(anim2, anim1, this.mixTime);
    }
    // methods
    move() {
        //人物面向转身
        if (this.moveDir.x > 0) {
            this.node.scaleX = 0.2
        }
        if (this.moveDir.x < 0) {
            this.node.scaleX = -0.2
        }
        let newPos = this.node.position.add(this.moveDir.mul(this._moveSpeed / 60));
        //碰撞体检查newPos在可移动区域范围内
        if (this.hallView.checkInMovableArea(newPos)) {
            this.node.setPosition(newPos);
        }
    }

    update(dt) {
        switch (this._speedType) {
            case gameProtocol.joystick.SpeedType.STOP:
                this._moveSpeed = this.stopSpeed;
                this.hasAniRun = false
                this.hasAniWalk = false
                this.spine.setAnimation(0, 'idle', true);
                break;
            case gameProtocol.joystick.SpeedType.NORMAL:
                this._moveSpeed = this.normalSpeed;
                //this.spine.setAnimation(0, 'walk', true);
                this.setPlayerAnimation('walk', true);
                this.move();
                break;
            case gameProtocol.joystick.SpeedType.FAST:
                this._moveSpeed = this.fastSpeed;
                //this.spine.setAnimation(0, 'run', true);
                this.setPlayerAnimation('run', true);
                this.move();
                break;
            default:
                break;
        }
    }
    /**
     * 
     * @param aniName 动画名
     * @param loop 是否循环播放
     */
    setPlayerAnimation(aniName: string, loop: boolean) {
        if (this.hasAniRun && aniName == 'run') return;
        if (this.hasAniWalk && aniName == 'walk') return;

        if (aniName == 'run') {
            this.hasAniRun = true
        }

        if (aniName == 'walk') {
            this.hasAniWalk = true
        }
        this.spine.setAnimation(0, aniName, loop);
    }
}
export { playerControl }