import {ManagerWindow} from "../module/ManagerWindow"
const {ccclass, property} = cc._decorator;

@ccclass
export default class loginView extends cc.Component {

    @property(cc.Prefab)
    signInPanelPre: cc.Prefab = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
         ManagerWindow.getInstance().show(this.signInPanelPre)
    }

    start () {
        ManagerWindow.getInstance();
        //ManagerWindow.getInstance().init(this.windowManagerNode)
    }

    // update (dt) {}
}
