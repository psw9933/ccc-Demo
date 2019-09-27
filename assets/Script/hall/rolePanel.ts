import { playerRes } from "../game/gameRes"
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    contraShow: sp.Skeleton = null;
    @property(cc.Node)
    contraNode: cc.Node = null
    @property(cc.Node)
    heroItem: cc.Node = null
    @property(cc.Node)
    weaponItem: cc.Node = null
    @property(cc.SpriteAtlas)
    heroSPA: cc.SpriteAtlas = null


    private showHeroIndex: any = null;
    private heros: any[] = null;
    private weapons: any[] = null;
    onLoad() {
        this.showHeroIndex = 0;
        this.heros=playerRes.heroNames
        this.weapons=playerRes.contraGunName

        this.initHerosList()
        this.initWeaponList()
        this.initContraShow(this.heros[0])
    }

    /**
     * 初始化英雄列表
     */
    initHerosList(){
        cc.find("choiceHero/view/content",this.node).active=true

        for(let index=0;index<this.heros.length;index++){
            let _item=cc.instantiate(this.heroItem)

            if(index==0){
                _item.getComponent(cc.Toggle).isChecked=true
            } 

            _item.getChildByName('headAltar').getComponent(cc.Sprite).spriteFrame=this.heroSPA.getSpriteFrame('head_'+this.heros[index])
            _item.getChildByName('name').getComponent(cc.Label).string=this.heros[index]
            _item.active=true
            _item.getComponent(cc.Button).clickEvents[0].customEventData=this.heros[index]
            //cc.log(_item.getComponent(cc.Button))
            _item.parent=cc.find("choiceHero/view/content",this.node)
        }
        
    }

     /**
     * 初始化武器列表
     */
    initWeaponList(){
        cc.find("choiceWeapon/view/content",this.node).active=true

        for(let index=0;index<this.weapons.length;index++){
            let _item=cc.instantiate(this.weaponItem)
            
            if(index==0){
                _item.getChildByName('default').active=true
                _item.getComponent(cc.Toggle).isChecked=true
            } 

            _item.getChildByName('weaponAltar').getComponent(cc.Sprite).spriteFrame=this.heroSPA.getSpriteFrame('gun_'+index)
            _item.getChildByName('gunLevel').getComponent(cc.Sprite).spriteFrame=this.heroSPA.getSpriteFrame('gunLevel1')
            _item.active=true
            cc.log(_item.getComponent(cc.Button))
            _item.getComponent(cc.Button).clickEvents[0].customEventData=index.toString()
            
            _item.parent=cc.find("choiceWeapon/view/content",this.node)
        }
        
    }

    /**
     * 初始化英雄展示 默认第一个英雄
     * @name 英雄名
     */
    initContraShow(name) {
        let path = playerRes[name].aniPath
        let self = this;
        cc.loader.loadRes(path, sp.SkeletonData, function (err, _SkeletonData) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            else {
                //cc.log(_SkeletonData)
                self.contraShow.skeletonData = _SkeletonData
                self.playApproachAni()
            }
        });
    }

    /**
     * 英雄入场动画 从上方旋转一身后站着变成等候动画
     */

    playApproachAni() {
        

        this.contraNode.setPosition(0, 100)
        this.contraNode.setRotation(0)

        let approachTime=1;
        this.contraShow.setMix('idle', 'roll2', 0.2);
        this.node.getChildByName('light').active=false

        this.scheduleOnce(()=>{
            this.node.getChildByName('light').active=true
            this.isClickedApproachAni=true
        },approachTime)

        this.contraShow.setAnimation(0, 'roll2', true)
        this.contraShow.addAnimation(0, 'idle', true, approachTime)
        
        
        this.contraNode.runAction(cc.spawn(cc.rotateBy(approachTime, 360), cc.moveTo(approachTime, cc.v2(0, -290)).easing(cc.easeIn(approachTime))))
        this.contraShow.setSkin('gun0')
    }
    
    private isClickedApproachAni:boolean=true
    clickSwithcHero(event,customEventData){
        //防止短时间多次点击
        if(!this.isClickedApproachAni) return;
        this.isClickedApproachAni=false

        this.initContraShow(customEventData)
    }

    clickSwithcWeapon(event,customEventData){
        let gunName='gun'+customEventData
        this.contraShow.setSkin(gunName)
    }
    start() {

    }
    // update (dt) {}
}
