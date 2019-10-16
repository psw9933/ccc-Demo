import {gameProtocol} from "../game/gameProtocol"
import { playerRes } from "../game/gameRes"
const {ccclass, property} = cc._decorator;
import GameInfo from "../module/GameInfo"

@ccclass
export default class battleView extends cc.Component {


    @property(cc.Prefab)
    PlayerPre:cc.Prefab=null;

    @property(cc.Prefab)
    bulletPre:cc.Prefab=null;

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

     bulletPool:any=null;
    onLoad () {
        this.initEvent()
        this.initRoleInfo();
        this.initPlayer();
        this.playerNode.parent=this.node;
        this.initBtnControl();
        this.initCollisionArea();
        
        this.initBulletPool()
    }
    private initEvent() {
        cc.systemEvent.on(gameProtocol.event.playerShooting, this.shoot, this);
    }
    private clearEvent() {
        cc.systemEvent.off(gameProtocol.event.playerShooting, this.shoot, this);
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
        //this._roleHealth.init(GameInfo.getInstance().returnRoleInfo().roleMaxHealth)
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


    update(dt) {
        
    }

    test(){
        let area=cc.find('background/frameObstaclePre',this.node).getComponent(cc.PolygonCollider)
        cc.log(area)
    }

    private maxBulletCount = 3;
    initBulletPool(){
        this.bulletPool = new cc.NodePool();
        for (let i = 0; i < this.maxBulletCount; ++i) {
            let bullet = cc.instantiate(this.bulletPre); // 创建节点
            this.bulletPool.put(bullet); // 通过 put 接口放入对象池
        }
    }

    shoot(){
        let bullet=this.createBulletNode();
        let pos=this.LaunchPosition();
        this.playBulletAni(bullet,pos)
    }

    createBulletNode(){
        let bullet = null;
        if (this.bulletPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            bullet = this.bulletPool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            cc.log('子弹数不够')
            //或者可以改变最大子弹数
            // bullet = cc.instantiate(this.bulletPre);
            // this.maxBulletCount++
            //this.bulletPool.put(bullet);
        }
        return bullet
    }

    LaunchPosition(){
        let _pos=this.playerNode.getComponent('playerControl').onMuzzlePos()
        let playerPos=this.playerNode.getPosition();
        let _x=playerPos.x+_pos.x;
        let _y=playerPos.y+_pos.y;

        if(!this.playerNode.getComponent('playerControl').Orientation){
            _x=playerPos.x-_pos.x;
        }

        return new cc.Vec2(_x,_y)
    }

    playBulletAni(bullet,pos){
        bullet.parent=cc.find('bulletLayer',this.node);
        bullet.setPosition(pos);
        
        let to_pos=new cc.Vec2(pos.x+200,pos.y)
        if(!this.playerNode.getComponent('playerControl').Orientation){
            to_pos=new cc.Vec2(pos.x-200,pos.y);
            bullet.scaleX=-1
        }

        //到达最大射程后回收进pool
        bullet.runAction(cc.sequence(cc.moveTo(1,to_pos).easing(cc.easeIn(1.0)),cc.callFunc(()=>{
            this.bulletPool.put(bullet);
        })))
    }
}
