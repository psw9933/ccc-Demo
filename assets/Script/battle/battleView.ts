import {gameProtocol} from "../game/gameProtocol"
import { playerRes } from "../game/gameRes"
const {ccclass, property} = cc._decorator;
import GameInfo from "../module/GameInfo"

@ccclass
export default class battleView extends cc.Component {


    @property(cc.Prefab)
    PlayerPre:cc.Prefab=null;

    /**角色运动类型 */
    @property
    actionType = gameProtocol.playerControl.actionType.inTheAir;

    // @property(cc.Prefab)
    // JoystickPre:cc.Prefab=null;

     btnControlNode=null
     playerNode:any=null
     roleAniName:any=null;
     roleHealthValue:any=null;
     roleWeaponName:any=null;

     landArea:any=null;
     _actionType:any=null;
    onLoad () {
        //this.initEvent()
        this.initRoleInfo();
        this.initPlayer();
        this.playerNode.parent=this.node;
        this.initBtnControl();
        this.initCollisionArea()
    }

    initBtnControl(){
        cc.find('operationMenu',this.node).getComponent('gameKeyControl').playerControl=this.playerNode.getComponent('playerControl');
    }
    initCollisionArea(){
        this.landArea=cc.find('background/land',this.node).getComponent(cc.BoxCollider)
        cc.log(this.landArea)
    }
    initPlayer(){
        this.playerNode=cc.instantiate(this.PlayerPre);
        this.playerNode.getComponent(sp.SkeletonData);
        this.playerNode.parent=this.node
        this.initPlayerPosition();

        let path = playerRes[this.roleAniName].aniPath;
        let self = this;
        cc.loader.loadRes(path, sp.SkeletonData, function (err, _SkeletonData) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            else {
                
                self.playerNode.getComponent(sp.Skeleton).skeletonData = _SkeletonData;
                self.playerNode.getComponent(sp.Skeleton).setSkin(self.roleWeaponName)
            }
        });
    }

    initPlayerPosition(){
        let c_pos=cc.find('background/circle',this.node).getPosition();
        let _x=c_pos.x;
        let _y=c_pos.y+3;
        this.playerNode.setPosition(_x,_y)
    }

    showHealthValue(){
        let healthNode=cc.find('background/health',this.node);
        let _iconItem=cc.find('lifeIcon',healthNode);

        for(let i=0;i<this.roleHealthValue;i++){
            let iconItem=cc.instantiate(_iconItem);
            iconItem.parent=healthNode;
            iconItem.active=true
        }
    }

    initRoleInfo(){
        let roleInfo=GameInfo.getInstance().returnRoleInfo()
        this.roleAniName=roleInfo.roleAniName;
        this.roleWeaponName=roleInfo.roleWeaponName;
        this.roleHealthValue=GameInfo.getInstance().returnRoleInfo().roleMaxHealth;
        this.showHealthValue()
        console.log(roleInfo)
    }

    collisionDetection(){
    // @property(cc.PolygonCollider)
    // longarea: cc.PolygonCollider = null

    // @property(cc.PolygonCollider)
    // huarea: cc.PolygonCollider = null

    // @property(cc.PolygonCollider)
    // hearea: cc.PolygonCollider = null
    // let p_pos=this.playerNode.getPosition();
    //     var point = cc.find('background/land', this.node).convertToWorldSpaceAR(loaction);
    //     // var bool = cc.Intersection.pointInPolygon(point, this.hearea.points)
    //     let bool=cc.Intersection.rectRect(this.playerNode, this.landArea.node)
    //     return bool
    }

    _onPlayerDropDown(){
        let p_pos=this.playerNode.getPosition();
        let _x=p_pos.x;
        let _y=p_pos.y-1;
        this.playerNode.setPosition(_x,_y)
    }

    checkPlayerPosition(){
        if(this.playerNode.getPosition().y>-280){
            return true
        }
        else{
            return false
        }
    }
    update(dt) {
        if(this.checkPlayerPosition()) return;
        this._onPlayerDropDown()
        cc.log('DropDown')
        //let bool=cc.Intersection.rectRect(this.playerNode, this.landArea.node)
        // var point = this.playerNode.getChildByName('foot').convertToWorldSpaceAR(cc.v2(0, 0));;
        // cc.log(point)
        // cc.log(this.playerNode.getPosition())
        // switch (this.actionType) {
        //     case gameProtocol.playerControl.actionType.onLand:
        //             return;
        //     case gameProtocol.playerControl.actionType.inTheAir:
        //             this._onPlayerDropDown();
        //             break;
        // }
    }
}
