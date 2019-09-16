import {httpServer} from "../module/HttpServer"
import {ManagerNotice } from "../module/ManagerNotice"
import {ManagerWindow} from "../module/ManagerWindow"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.EditBox)
    userIdEditBox: cc.EditBox = null;
    @property(cc.EditBox)
    passwordEditBox: cc.EditBox = null;
    @property(cc.EditBox)
    againEditBox: cc.EditBox = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    clickCanelBtn(){
        ManagerWindow.getInstance().pop()
    }
    clickSignUpBtn(){
        if(this.checkUpStr()){
            let requestData = {
                'userid': this.userIdEditBox.string,
                'password':this.passwordEditBox.string
            }
            let url="user/cocosAddUser";
            httpServer.getInstance().post(url, {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            }, requestData, (info) => {
                let dataInfo = JSON.parse(info)
                if (dataInfo.status == 200) {
                    cc.log(dataInfo.msg)
                    ManagerNotice.getInstance().show("Create an account success!")
                    ManagerWindow.getInstance().pop()
                } else {
                    cc.log(dataInfo.msg)
                    ManagerNotice.getInstance().show("Create an account fail!")
                }
            })
        }
    }

    checkUpStr(){
        if(this.passwordEditBox.string!=this.againEditBox.string){
            ManagerNotice.getInstance().show("Your confirmed password and new password do not match")
            return false
        }
        if(this.userIdEditBox.string.length<4){
            ManagerNotice.getInstance().show("less than 4 digits,please enter again.")
            return false
        }
        return true
    }
}
