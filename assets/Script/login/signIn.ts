import { httpServer } from "../module/HttpServer"
import { ManagerNotice } from "../module/ManagerNotice"
import { ManagerWindow } from "../module/ManagerWindow"
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.EditBox)
    userId: cc.EditBox = null;
    @property(cc.EditBox)
    password: cc.EditBox = null;
    @property(cc.Prefab)
    signUpPanelPre: cc.Prefab = null;

    onLoad() {
        
    }

    start() {

    }

    clickLoginBtn(){
        cc.director.loadScene('hall')
        // let requestData = {
        //     'userid': this.userId.string,
        //     'password':this.password.string
        // }
        // let url="user/cocosDoLogin";
        // httpServer.getInstance().post(url, {
        //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        // }, requestData, (info) => {
        //     let dataInfo = JSON.parse(info)
        //     if (dataInfo.status == 200) {
        //         cc.log(dataInfo.msg)
        //         cc.director.loadScene('hall')
        //     } else {
        //         cc.log(dataInfo.msg)
        //     }
        // })
    }

    clickSignUpBtn(){
        ManagerWindow.getInstance().show(this.signUpPanelPre)
    }
}
