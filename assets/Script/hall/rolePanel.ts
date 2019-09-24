import {playerRes} from "../game/gameRes"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    contraShow: sp.Skeleton = null;


    private showHeroIndex:any=null;
    onLoad () {

        this.showHeroIndex=0;
        this.initContraShow()
    }   

    initContraShow(){
        let path=playerRes.thanus.aniPath
       cc.loader.loadRes(path, sp.SkeletonData, function (err, SkeletonData) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            cc.log(SkeletonData)
        });
    }

    start () {

    }

    // update (dt) {}
}
