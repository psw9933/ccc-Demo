class ManagerWindow {
    private managerNode: cc.Node = null
    private bg: cc.Node = null
    private children: cc.Node[] = []
    private static m_instance: ManagerWindow = null
    constructor() {
        this.managerNode = cc.find('Canvas/WindowManager')
        cc.game.addPersistRootNode(this.managerNode)
        this.bg = this.managerNode.getChildByName('bg')
        this.bg.active = false
        this.initEvent()
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

    clear() {
        cc.game.removePersistRootNode(this.managerNode)
        this.clearEvent()
        ManagerWindow.m_instance = null
    }

    static getInstance(): ManagerWindow {
        if (!ManagerWindow.m_instance)
            ManagerWindow.m_instance = new ManagerWindow()
        return ManagerWindow.m_instance;
    }

    /**
     * ManagerWindow show
     * @param prefab 预制或者节点
     */
    show(prefab: cc.Prefab, data?): cc.Node
    show(prefab: cc.Node, data?): cc.Node
    show(prefab, data?): cc.Node {
        this.bg.width = cc.find('Canvas').width
        this.bg.height = cc.find('Canvas').height
        // this.managerNode.x = cc.find('Canvas').width / 2
        // this.managerNode.y = cc.find('Canvas').height / 2
        this.bg.active = true;
        let node = cc.instantiate(prefab)

        if (data) {
            node.attr({
                customEventData: data
            })
        }
        this.children.push(node)
        //this.bg.zIndex = this.children.length
        node.parent = this.managerNode//this.managerNode
        //node.zIndex = this.children.length

        //node.runAction(cc.scaleTo(0.1, 1))
        //node.runAction(cc.fadeTo(0.1, 255))
        node.runAction(cc.rotateTo(0.1, 0,0).easing(cc.easeBackOut()));
        //node.runAction(cc.moveTo(0.2, 0,0).easing(cc.easeIn(1.2)));

        return node
    }
    /**
     * 移除最上层
     */
    pop() {
        if (this.children.length == 0) {
            this.bg.active = false
            return
        }
        let node = this.children.pop()
        node.removeFromParent()
        this.bg.zIndex = this.children.length - 1
        if (this.children.length == 0) this.bg.active = false
        node.destroy()
        return
    }

    /**
     * 清空弹窗
     */
    removeAll() {
        while (this.children.length) {
            this.pop();
        }
      
    }
}


export { ManagerWindow }