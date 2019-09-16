// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    spine: sp.Skeleton = null;

    @property(cc.Node)
    joystick: cc.Node = null;

    private mixTime: 0.2
    private _hasStop:boolean

    onLoad () {
        this._setMix('walk', 'run');
        this._setMix('run', 'jump');
        this._setMix('walk', 'jump');
    }

    clickStart(){
            this.spine.setAnimation(0, 'run', true);
            this._hasStop = false;
    }
    start () {

    }
    _setMix (anim1, anim2) {
        this.spine.setMix(anim1, anim2, this.mixTime);
        this.spine.setMix(anim2, anim1, this.mixTime);
    }
    // update (dt) {}
}
