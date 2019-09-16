class ManagerNotice {
    
    private static m_instance: ManagerNotice = null
    static getInstance(): ManagerNotice {
        if (!ManagerNotice.m_instance)
            ManagerNotice.m_instance = new ManagerNotice()
        return ManagerNotice.m_instance;
    }

    private item: cc.Node = null
    private childNode: cc.Node = null
    constructor() {
        
        
        cc.game.addPersistRootNode(cc.find('Canvas/noticeManager'))
        this.initEvent()

        this.childNode = cc.find('Canvas/noticeManager/child')
        let item = cc.find('Canvas/noticeManager/item')

        this.item = cc.instantiate(item)
        this.item.active = true
    }
    /** 
     * 注册事件
     */
    private initEvent() {
        
    }
    /**
     * 注销事件
     */
    private clearEvent() {
        
    }
    initNode(){
        
    }

    
    clear() {
        cc.game.removePersistRootNode(cc.find('Canvas/noticeManager'))
        this.clearEvent()
        ManagerNotice.m_instance = null
    }

    show(str: string, itemPrefab?: cc.Node)
    show(str: string, itemPrefab?: cc.Prefab)
    show(str: string, itemPrefab?: any) {

 

        let managerNode = cc.find('Canvas/noticeManager')
        // managerNode.width = cc.find('Canvas').width
        // managerNode.height =cc.find('Canvas').height
        managerNode.setPosition(0,cc.find('Canvas').height/4);
        // cc.log(managerNode.getPosition())
        if (itemPrefab == undefined) itemPrefab = this.item

        let indexcount = 0
        if (this.childNode.childrenCount > 3) {
            indexcount = this.childNode.childrenCount - 3;
            for (let childNode of this.childNode.children) {
                indexcount--;
                childNode.runAction(cc.fadeOut(0.25))
                if (indexcount <= 0) break;
            }
        }

        for (let childNode of this.childNode.children) {
            childNode.runAction(cc.moveBy(0.3, cc.v2(0, 80)));
        }
        let itemNode = null
        if (itemPrefab) itemNode = cc.instantiate(itemPrefab)
        else itemNode = cc.instantiate(this.item)
        itemNode.getChildByName('lb').on('size-changed', function () {
            if (this.width > this.parent.width)
                this.parent.width = this.width + 40
        }.bind(itemNode))
        itemNode.getChildByName('lb').getComponent(cc.Label).string = str
        itemNode.parent = this.childNode
        itemNode.opacity = 0;
        if (this.childNode.childrenCount == 1) {
            itemNode.runAction(cc.sequence(
                cc.fadeIn(0.2),
                cc.delayTime(1),
                cc.fadeOut(0.5),
                cc.callFunc((target) => {
                    target.destroy()
                })
            ))
        }
        else {
            itemNode.runAction(cc.sequence(
                cc.delayTime(0.3),
                cc.fadeIn(0.2),
                cc.delayTime(1),
                cc.fadeOut(0.5),
                cc.callFunc((target) => {
                    target.destroy()
                })
            ))
        }
    }
}

export { ManagerNotice }