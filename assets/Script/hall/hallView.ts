// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import GameInfo from "../module/GameInfo"
const {ccclass, property} = cc._decorator;

@ccclass
export default class hallView extends cc.Component {

    @property(cc.Prefab)
    rolePanel: cc.Prefab = null;


    // LIFE-CYCLE CALLBACKS:
    
    private rolePanelNode:cc.Node=null
    onLoad () {
        this.rolePanelNode=cc.instantiate(this.rolePanel)
        this.rolePanelNode.parent=this.node
    }

    start () {

    }

    clickBackBtn(){

    }

    clickPlayBtn(){
        let _roleAniName=this.rolePanelNode.getComponent('rolePanel').roleAniName
        let _roleWeaponName=this.rolePanelNode.getComponent('rolePanel').roleWeaponName
        let _roleHealthValue=this.rolePanelNode.getComponent('rolePanel').roleHealthValue
        GameInfo.getInstance().initRoleInfo(_roleAniName,_roleWeaponName,_roleHealthValue)
        
        cc.director.loadScene('battle')
    }
    // update (dt) {}
}
