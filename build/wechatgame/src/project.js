window.__require=function t(e,o,n){function i(c,a){if(!o[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+c+"'")}}var p=o[c]={exports:{}};e[c][0].call(p.exports,function(t){return i(e[c][1][t]||t)},p,p.exports,t,e,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({GameInfo:[function(t,e,o){"use strict";cc._RF.push(e,"5dc2b6i7oJBEJEdOjSYSZer","GameInfo");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,a=(r.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.roleAniName=null,e.roleWeaponName=null,e.roleMaxHealth=null,e}var o;return n(e,t),o=e,e.getInstance=function(){return o.m_GameInfo||(o.m_GameInfo=new o),o.m_GameInfo},e.prototype.initRoleInfo=function(t,e,o){this.roleAniName=t,this.roleWeaponName=e,this.roleMaxHealth=o},e.prototype.returnRoleInfo=function(){return{roleAniName:this.roleAniName,roleWeaponName:this.roleWeaponName,roleMaxHealth:this.roleMaxHealth}},e.m_GameInfo=null,e=o=i([c],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],HttpServer:[function(t,e,o){"use strict";cc._RF.push(e,"39d1fkOx0hNJ6HZ48YTSQGP","HttpServer"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this.URL="http://localhost:3000/"}return t.getInstance=function(){return t._httpServer||(t._httpServer=new t),t._httpServer},t.prototype._on=function(t,e,o,n){t.onreadystatechange=function(){if(4===t.readyState&&t.status>=200&&t.status<300){var e=decodeURI(t.responseText.replace(/%/g,"%25"));n&&n(e)}}},t.prototype.get=function(t,e,o){e instanceof Function&&(o=e,e=null);var n=this.URL+t,i=cc.loader.getXMLHttpRequest();if(this._on(i,"GET",n,o),i.open("GET",n,!0),e)for(var r in e)i.setRequestHeader(r,encodeURI(e[r]));i.timeout=1e4,i.send()},t.prototype.post=function(t,e,o,n){var i=cc.loader.getXMLHttpRequest(),r=this.URL+t;if(this._on(i,"POST",r,n),i.open("POST",r),e)for(var c in e)i.setRequestHeader(c,encodeURI(e[c]));if(i.timeout=1e4,null==o)i.send(null);else{var a="";for(var s in o)a+=encodeURI(s)+"="+encodeURI(o[s])+"&";i.send(a)}},t._httpServer=null,t}();o.httpServer=n,cc._RF.pop()},{}],ManagerNotice:[function(t,e,o){"use strict";cc._RF.push(e,"0173ea4X3dGYYZNGBjxy2f/","ManagerNotice"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this.item=null,this.childNode=null,cc.game.addPersistRootNode(cc.find("Canvas/noticeManager")),this.initEvent(),this.childNode=cc.find("Canvas/noticeManager/child");var t=cc.find("Canvas/noticeManager/item");this.item=cc.instantiate(t),this.item.active=!0}return t.getInstance=function(){return t.m_instance||(t.m_instance=new t),t.m_instance},t.prototype.initEvent=function(){},t.prototype.clearEvent=function(){},t.prototype.initNode=function(){},t.prototype.clear=function(){cc.game.removePersistRootNode(cc.find("Canvas/noticeManager")),this.clearEvent(),t.m_instance=null},t.prototype.show=function(t,e){cc.find("Canvas/noticeManager").setPosition(0,cc.find("Canvas").height/4),void 0==e&&(e=this.item);var o=0;if(this.childNode.childrenCount>3){o=this.childNode.childrenCount-3;for(var n=0,i=this.childNode.children;n<i.length;n++){if(o--,i[n].runAction(cc.fadeOut(.25)),o<=0)break}}for(var r=0,c=this.childNode.children;r<c.length;r++){c[r].runAction(cc.moveBy(.3,cc.v2(0,80)))}var a=null;(a=e?cc.instantiate(e):cc.instantiate(this.item)).getChildByName("lb").on("size-changed",function(){this.width>this.parent.width&&(this.parent.width=this.width+40)}.bind(a)),a.getChildByName("lb").getComponent(cc.Label).string=t,a.parent=this.childNode,a.opacity=0,1==this.childNode.childrenCount?a.runAction(cc.sequence(cc.fadeIn(.2),cc.delayTime(1),cc.fadeOut(.5),cc.callFunc(function(t){t.destroy()}))):a.runAction(cc.sequence(cc.delayTime(.3),cc.fadeIn(.2),cc.delayTime(1),cc.fadeOut(.5),cc.callFunc(function(t){t.destroy()})))},t.m_instance=null,t}();o.ManagerNotice=n,cc._RF.pop()},{}],ManagerWindow:[function(t,e,o){"use strict";cc._RF.push(e,"9a01buhKZdLMIYhAImY4H85","ManagerWindow"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this.managerNode=null,this.bg=null,this.children=[],this.managerNode=cc.find("Canvas/WindowManager"),cc.game.addPersistRootNode(this.managerNode),this.bg=this.managerNode.getChildByName("bg"),this.bg.active=!1,this.initEvent()}return t.prototype.initEvent=function(){},t.prototype.clearEvent=function(){},t.prototype.clear=function(){cc.game.removePersistRootNode(this.managerNode),this.clearEvent(),t.m_instance=null},t.getInstance=function(){return t.m_instance||(t.m_instance=new t),t.m_instance},t.prototype.show=function(t,e){this.bg.width=cc.find("Canvas").width,this.bg.height=cc.find("Canvas").height,this.bg.active=!0;var o=cc.instantiate(t);return e&&o.attr({customEventData:e}),this.children.push(o),o.parent=this.managerNode,o.runAction(cc.rotateTo(.1,0,0).easing(cc.easeBackOut())),o},t.prototype.pop=function(){if(0!=this.children.length){var t=this.children.pop();t.removeFromParent(),this.bg.zIndex=this.children.length-1,0==this.children.length&&(this.bg.active=!1),t.destroy()}else this.bg.active=!1},t.prototype.removeAll=function(){for(;this.children.length;)this.pop()},t.m_instance=null,t}();o.ManagerWindow=n,cc._RF.pop()},{}],battleView:[function(t,e,o){"use strict";cc._RF.push(e,"9e63d6AFe9A6pSY0+9KWE4l","battleView");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../game/gameProtocol"),c=t("../game/gameRes"),a=cc._decorator,s=a.ccclass,l=a.property,p=t("../module/GameInfo"),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.PlayerPre=null,e.actionType=r.gameProtocol.playerControl.actionType.inTheAir,e.btnControlNode=null,e.playerNode=null,e.roleAniName=null,e.roleHealthValue=null,e.roleWeaponName=null,e.landArea=null,e._actionType=null,e}return n(e,t),e.prototype.onLoad=function(){this.initRoleInfo(),this.initPlayer(),this.playerNode.parent=this.node,this.initBtnControl(),this.initCollisionArea()},e.prototype.initBtnControl=function(){cc.find("operationMenu",this.node).getComponent("gameKeyControl").playerControl=this.playerNode.getComponent("playerControl")},e.prototype.initCollisionArea=function(){this.landArea=cc.find("background/land",this.node).getComponent(cc.BoxCollider),cc.log(this.landArea)},e.prototype.initPlayer=function(){this.playerNode=cc.instantiate(this.PlayerPre),this.playerNode.getComponent(sp.SkeletonData),this.playerNode.parent=this.node,this.initPlayerPosition();var t=c.playerRes[this.roleAniName].aniPath,e=this;cc.loader.loadRes(t,sp.SkeletonData,function(t,o){t?cc.error(t.message||t):(e.playerNode.getComponent(sp.Skeleton).skeletonData=o,e.playerNode.getComponent(sp.Skeleton).setSkin(e.roleWeaponName))})},e.prototype.initPlayerPosition=function(){var t=cc.find("background/circle",this.node).getPosition(),e=t.x,o=t.y+3;this.playerNode.setPosition(e,o)},e.prototype.showHealthValue=function(){for(var t=cc.find("background/health",this.node),e=cc.find("lifeIcon",t),o=0;o<this.roleHealthValue;o++){var n=cc.instantiate(e);n.parent=t,n.active=!0}},e.prototype.initRoleInfo=function(){var t=p.default.getInstance().returnRoleInfo();this.roleAniName=t.roleAniName,this.roleWeaponName=t.roleWeaponName,this.roleHealthValue=p.default.getInstance().returnRoleInfo().roleMaxHealth,this.showHealthValue(),console.log(t)},e.prototype.collisionDetection=function(){},e.prototype._onPlayerDropDown=function(){var t=this.playerNode.getPosition(),e=t.x,o=t.y-1;this.playerNode.setPosition(e,o)},e.prototype.checkPlayerPosition=function(){return cc.log(this.playerNode.getPosition().y),!(this.playerNode.getPosition().y>-280)},e.prototype.update=function(t){this.checkPlayerPosition()||(this._onPlayerDropDown(),cc.log("DropDown"))},i([l(cc.Prefab)],e.prototype,"PlayerPre",void 0),i([l],e.prototype,"actionType",void 0),e=i([s],e)}(cc.Component);o.default=h,cc._RF.pop()},{"../game/gameProtocol":"gameProtocol","../game/gameRes":"gameRes","../module/GameInfo":"GameInfo"}],gameKeyControl:[function(t,e,o){"use strict";cc._RF.push(e,"264c0D1zZVJR50H6381xehN","gameKeyControl");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./playerControl"),c=t("./gameProtocol"),a=cc._decorator,s=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.playerControl=null,e.leftMoveBtnNode=null,e.rightMoveBtnNode=null,e.jumpBtnNode=null,e.shootBtnNode=null,e}return n(e,t),e.prototype.onLoad=function(){this._initTouchEvent()},e.prototype._initTouchEvent=function(){this.leftMoveBtnNode.on(cc.Node.EventType.TOUCH_START,this.leftMove,this),this.rightMoveBtnNode.on(cc.Node.EventType.TOUCH_START,this.rightMove,this),this.jumpBtnNode.on(cc.Node.EventType.TOUCH_START,this.jump,this),this.shootBtnNode.on(cc.Node.EventType.TOUCH_START,this.shoot,this),this.leftMoveBtnNode.on(cc.Node.EventType.TOUCH_END,this._touchEndEvent,this),this.rightMoveBtnNode.on(cc.Node.EventType.TOUCH_END,this._touchEndEvent,this),this.jumpBtnNode.on(cc.Node.EventType.TOUCH_END,this._touchEndEvent,this),this.shootBtnNode.on(cc.Node.EventType.TOUCH_END,this._touchEndEvent,this)},e.prototype.leftMove=function(){cc.log("leftMove"),this.playerControl._motionType=c.gameProtocol.playerControl.motionType.LEFT},e.prototype.rightMove=function(){cc.log("rightMove"),this.playerControl._motionType=c.gameProtocol.playerControl.motionType.RIGHT},e.prototype.jump=function(){cc.log("jump"),this.playerControl._motionType=c.gameProtocol.playerControl.motionType.JUMP},e.prototype.shoot=function(){cc.log("jump"),this.playerControl._motionType=c.gameProtocol.playerControl.motionType.SHOOT},e.prototype._touchEndEvent=function(){cc.log("stop"),this.playerControl._motionType=c.gameProtocol.playerControl.motionType.STOP},e.prototype.start=function(){},i([l(r.playerControl)],e.prototype,"playerControl",void 0),i([l(cc.Node)],e.prototype,"leftMoveBtnNode",void 0),i([l(cc.Node)],e.prototype,"rightMoveBtnNode",void 0),i([l(cc.Node)],e.prototype,"jumpBtnNode",void 0),i([l(cc.Node)],e.prototype,"shootBtnNode",void 0),e=i([s],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./gameProtocol":"gameProtocol","./playerControl":"playerControl"}],gameProtocol:[function(t,e,o){"use strict";cc._RF.push(e,"2f7acsA18lEpqHV0eePgS+A","gameProtocol"),Object.defineProperty(o,"__esModule",{value:!0});var n={event:{displayJoyStick:"\u9690\u85cf\u865a\u62df\u6447\u6746",playerShooting:"player\u5c04\u51fb"},joystick:{JoystickType:cc.Enum({FIXED:0,FOLLOW:1}),DirectionType:cc.Enum({FOUR:4,EIGHT:8,ALL:0}),SpeedType:cc.Enum({STOP:0,NORMAL:1,FAST:2})},playerControl:{motionType:cc.Enum({LEFT:0,RIGHT:1,STOP:2,JUMP:3,SHOOT:4}),actionType:cc.Enum({onLand:0,inTheAir:1,jumpUp:2}),speedType:cc.Enum({STOP:0,NORMAL:1,FAST:2})}};o.gameProtocol=n,cc._RF.pop()},{}],gameRes:[function(t,e,o){"use strict";cc._RF.push(e,"14e39s0y+tC24MTXi0oVdDm","gameRes"),Object.defineProperty(o,"__esModule",{value:!0});o.playerRes={heroNames:["thanus","walker","sand","tnt","captain"],thanus:{name:"thanus",price:0,health:5,aniPath:"spine/heros/contra"},walker:{name:"walker",price:5e3,health:5,aniPath:"spine/heros/contra2"},sand:{name:"sand",price:6e3,health:4,aniPath:"spine/heros/contra3"},tnt:{name:"tnt",price:8e3,health:5,aniPath:"spine/heros/contra4"},captain:{name:"walker",price:5e3,health:5,aniPath:"spine/heros/contra5"},contraAniName:["attack","change","die1","die2","idle","roll2","run","run_attack"],contraGunName:["gun0","gun1","gun2","gun3","gun4"]},cc._RF.pop()},{}],hallView:[function(t,e,o){"use strict";cc._RF.push(e,"49cddjhR3ZCxIlwFDavBgF7","hallView");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../module/GameInfo"),c=cc._decorator,a=c.ccclass,s=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.rolePanel=null,e.rolePanelNode=null,e}return n(e,t),e.prototype.onLoad=function(){this.rolePanelNode=cc.instantiate(this.rolePanel),this.rolePanelNode.parent=this.node},e.prototype.start=function(){},e.prototype.clickBackBtn=function(){},e.prototype.clickPlayBtn=function(){var t=this.rolePanelNode.getComponent("rolePanel").roleAniName,e=this.rolePanelNode.getComponent("rolePanel").roleWeaponName,o=this.rolePanelNode.getComponent("rolePanel").roleHealthValue;r.default.getInstance().initRoleInfo(t,e,o),cc.director.loadScene("battle")},i([s(cc.Prefab)],e.prototype,"rolePanel",void 0),e=i([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"../module/GameInfo":"GameInfo"}],joyStickControl:[function(t,e,o){"use strict";cc._RF.push(e,"c7677ytq91DJYL/EcGkKI0P","joyStickControl");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../gameProtocol"),c=t("../playerControl"),a=cc._decorator,s=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dot=null,e.ring=null,e._stickPos=null,e._touchLocation=null,e.playerControl=null,e.radius=null,e.stickPos=null,e}return n(e,t),e.prototype.onLoad=function(){this.radius=this.ring.width/2,this._initTouchEvent()},e.prototype._initTouchEvent=function(){this.node.on(cc.Node.EventType.TOUCH_START,this._touchStartEvent,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this._touchMoveEvent,this),this.node.on(cc.Node.EventType.TOUCH_END,this._touchEndEvent,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this._touchEndEvent,this)},e.prototype._touchStartEvent=function(t){var e=this.node.convertToNodeSpaceAR(t.getLocation());this.stickPos=this.ring.getPosition();var o=e.sub(this.ring.getPosition()).mag();this.stickPos>o&&this.dot.setPosition(e)},e.prototype._touchMoveEvent=function(t){var e=this.ring.convertToNodeSpaceAR(t.getLocation()),o=e.mag(),n=this.stickPos.x+e.x,i=this.stickPos.y+e.y,c=cc.v2(n,i).sub(this.ring.getPosition()).normalize();if(this.radius>o)this.dot.setPosition(cc.v2(n,i)),this.playerControl._speedType=r.gameProtocol.joystick.SpeedType.NORMAL;else{var a=this.stickPos.x+c.x*this.radius,s=this.stickPos.y+c.y*this.radius;this.dot.setPosition(cc.v2(a,s)),this.playerControl._speedType=r.gameProtocol.joystick.SpeedType.FAST}this.playerControl.moveDir=c},e.prototype._touchEndEvent=function(){this.dot.setPosition(this.ring.getPosition()),this.playerControl._speedType=r.gameProtocol.joystick.SpeedType.STOP,cc.systemEvent.emit(r.gameProtocol.event.displayJoyStick)},i([l(cc.Node)],e.prototype,"dot",void 0),i([l(cc.Node)],e.prototype,"ring",void 0),i([l(cc.Node)],e.prototype,"_stickPos",void 0),i([l(cc.Node)],e.prototype,"_touchLocation",void 0),i([l(c.playerControl)],e.prototype,"playerControl",void 0),e=i([s],e)}(cc.Component);o.default=p,cc._RF.pop()},{"../gameProtocol":"gameProtocol","../playerControl":"playerControl"}],loginView:[function(t,e,o){"use strict";cc._RF.push(e,"853875cjQBCNoV9oA9tPj1m","loginView");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../module/ManagerWindow"),c=cc._decorator,a=c.ccclass,s=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.signInPanelPre=null,e}return n(e,t),e.prototype.onLoad=function(){r.ManagerWindow.getInstance().show(this.signInPanelPre)},e.prototype.start=function(){r.ManagerWindow.getInstance()},i([s(cc.Prefab)],e.prototype,"signInPanelPre",void 0),e=i([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"../module/ManagerWindow":"ManagerWindow"}],playerControl:[function(t,e,o){"use strict";cc._RF.push(e,"9a2cbPQbxpG4qOT1vL4z4ns","playerControl");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./gameProtocol"),c=t("../battle/battleView"),a=cc._decorator,s=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.battleView=null,e.moveDir=new cc.Vec2(0,1),e.jumpDir=new cc.Vec2(0,0),e._speedType=r.gameProtocol.playerControl.speedType.STOP,e._motionType=r.gameProtocol.playerControl.motionType.STOP,e.fastSpeed=200,e.normalSpeed=100,e.stopSpeed=0,e._moveSpeed=0,e.spine=null,e.movableArea=null,e.mixTime=.2,e.Orientation=!0,e.playerScale=null,e.hasAniStop=!1,e.hasAniRun=!1,e.hasAniJump=!1,e}return n(e,t),e.prototype.onLoad=function(){this.playerScale=.6,this.initEvent(),this.spine=this.node.getComponent(sp.Skeleton),this.node.scale=this.playerScale,this.setPlayerAnimation("idle",!0)},e.prototype.initEvent=function(){cc.systemEvent.on(r.gameProtocol.event.playerShooting,this.Shooting,this)},e.prototype.clearEvent=function(){cc.systemEvent.off(r.gameProtocol.event.playerShooting,this.Shooting,this)},e.prototype.onDestroy=function(){this.clearEvent()},e.prototype._setMix=function(t,e){this.spine.setMix(t,e,this.mixTime),this.spine.setMix(e,t,this.mixTime)},e.prototype.move=function(){this.Orientation?this.node.scaleX=this.playerScale:this.node.scaleX=-this.playerScale;var t=this.node.position.add(this.moveDir.mul(this._moveSpeed/60));this.node.setPosition(t)},e.prototype.jump=function(){var t=this,e=null;e=this.Orientation?new cc.Vec2(5,5):new cc.Vec2(-5,5);var o=this.node.position.add(e);this.node.runAction(cc.sequence(cc.moveTo(1,o),cc.callFunc(function(){t._motionType=r.gameProtocol.playerControl.motionType.STOP,t.setPlayerAnimation("run",!0)})))},e.prototype.Shooting=function(){cc.log("Shooting"),this.hasAniRun?this.setPlayerAnimation("run_attack",!1):this.setPlayerAnimation("attack",!1),this._motionType=r.gameProtocol.playerControl.motionType.STOP},e.prototype.update=function(t){switch(this._motionType){case r.gameProtocol.playerControl.motionType.STOP:this.setPlayerAnimation("idle",!0),this._moveSpeed=this.stopSpeed;break;case r.gameProtocol.playerControl.motionType.LEFT:this.Orientation=!1,this.setPlayerAnimation("run",!0),this._moveSpeed=this.normalSpeed,this.moveDir=cc.v2(-1,0),this.move();break;case r.gameProtocol.playerControl.motionType.RIGHT:this.Orientation=!0,this.setPlayerAnimation("run",!0),this._moveSpeed=this.normalSpeed,this.moveDir=cc.v2(1,0),this.move();break;case r.gameProtocol.playerControl.motionType.JUMP:this.setPlayerAnimation("idle",!0),this.jump();break;case r.gameProtocol.playerControl.motionType.SHOOT:this.Shooting()}},e.prototype.setPlayerAnimation=function(t,e){this.hasAniRun&&"run"==t||this.hasAniStop&&"idle"==t||("run"==t&&(this.hasAniRun=!0,this.hasAniStop=!1),"idle"==t&&(this.hasAniStop=!0,this.hasAniRun=!1),this.spine.setAnimation(1,t,e))},i([l(c.default)],e.prototype,"battleView",void 0),i([l(cc.v2)],e.prototype,"moveDir",void 0),i([l(cc.v2)],e.prototype,"jumpDir",void 0),i([l],e.prototype,"_speedType",void 0),i([l],e.prototype,"_motionType",void 0),i([l(cc.Integer)],e.prototype,"fastSpeed",void 0),i([l(cc.Integer)],e.prototype,"normalSpeed",void 0),i([l(cc.Integer)],e.prototype,"stopSpeed",void 0),i([l],e.prototype,"_moveSpeed",void 0),e=i([s],e)}(cc.Component);o.playerControl=p,o.default=p,cc._RF.pop()},{"../battle/battleView":"battleView","./gameProtocol":"gameProtocol"}],rolePanel:[function(t,e,o){"use strict";cc._RF.push(e,"b3c81DfSElG3IGCNa/cwKE9","rolePanel");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../game/gameRes"),c=cc._decorator,a=c.ccclass,s=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.contraShow=null,e.contraNode=null,e.roleInfoNode=null,e.heroItem=null,e.weaponItem=null,e.heroSPA=null,e.roleAniName=null,e.roleHealthValue=null,e.roleWeaponName=null,e.heros=null,e.weapons=null,e.isClickedApproachAni=!0,e}return n(e,t),e.prototype.onLoad=function(){this.heros=r.playerRes.heroNames,this.weapons=r.playerRes.contraGunName,this.roleAniName=this.heros[0],this.roleWeaponName=this.weapons[0],this.initHerosList(),this.initWeaponList(),this.initRoleShow(this.roleAniName)},e.prototype.initHerosList=function(){var t=this.node.getChildByName("choiceHero");cc.find("view/content",t).active=!0;var e=cc.v2(cc.winSize.width/2,t.getPosition().y),o=cc.v2(0,t.getPosition().y);t.position=e,t.stopAllActions(),t.runAction(cc.moveTo(.5,o));for(var n=0;n<this.heros.length;n++){var i=cc.instantiate(this.heroItem);0==n&&(i.getComponent(cc.Toggle).isChecked=!0),i.getChildByName("headAltar").getComponent(cc.Sprite).spriteFrame=this.heroSPA.getSpriteFrame("head_"+this.heros[n]),i.getChildByName("name").getComponent(cc.Label).string=this.heros[n],i.active=!0,i.getComponent(cc.Button).clickEvents[0].customEventData=this.heros[n],i.parent=cc.find("choiceHero/view/content",this.node)}},e.prototype.initWeaponList=function(){var t=this.node.getChildByName("choiceWeapon");cc.find("view/content",t).active=!0;var e=cc.v2(-cc.winSize.width/2,t.getPosition().y),o=cc.v2(0,t.getPosition().y);t.position=e,t.stopAllActions(),t.runAction(cc.moveTo(.5,o));for(var n=0;n<this.weapons.length;n++){var i=cc.instantiate(this.weaponItem);0==n&&(i.getChildByName("default").active=!0,i.getComponent(cc.Toggle).isChecked=!0),i.getChildByName("weaponAltar").getComponent(cc.Sprite).spriteFrame=this.heroSPA.getSpriteFrame("gun_"+n),i.getChildByName("gunLevel").getComponent(cc.Sprite).spriteFrame=this.heroSPA.getSpriteFrame("gunLevel1"),i.active=!0,i.getComponent(cc.Button).clickEvents[0].customEventData=n.toString(),i.parent=cc.find("choiceWeapon/view/content",this.node)}},e.prototype.initRoleShow=function(t){var e=r.playerRes[t].aniPath,o=this;cc.loader.loadRes(e,sp.SkeletonData,function(e,n){e?cc.error(e.message||e):(o.roleAniName=t,o.contraShow.skeletonData=n,o.playApproachAni())})},e.prototype.playApproachAni=function(){var t=this;this.contraNode.setPosition(0,0),this.contraNode.setRotation(0),this.contraNode.setScale(.6);this.contraShow.setMix("idle","roll2",.2),this.node.getChildByName("light").active=!1,this.scheduleOnce(function(){t.node.getChildByName("light").active=!0,t.isClickedApproachAni=!0,t.contraNode.setScale(1)},1),this.contraShow.setAnimation(0,"roll2",!0),this.contraShow.addAnimation(0,"idle",!0,1),this.contraNode.runAction(cc.spawn(cc.rotateBy(1,360),cc.moveTo(1,cc.v2(0,-290)).easing(cc.easeIn(1)))),this.contraShow.setSkin(this.roleWeaponName),this.updateRoleInfo()},e.prototype.updateRoleInfo=function(){this.roleHealthValue=r.playerRes[this.roleAniName].health,this.roleInfoNode.getChildByName("name").getComponent(cc.Label).string="hero:"+this.roleAniName,this.roleInfoNode.getChildByName("weapon").getComponent(cc.Label).string="weapon:"+this.roleWeaponName,this.roleInfoNode.getChildByName("health").getComponent(cc.Label).string="health:"+this.roleHealthValue},e.prototype.clickSwithcHero=function(t,e){this.isClickedApproachAni&&(this.isClickedApproachAni=!1,this.initRoleShow(e))},e.prototype.clickSwithcWeapon=function(t,e){var o="gun"+e;this.contraShow.setSkin(o),this.roleWeaponName=o,this.updateRoleInfo()},e.prototype.start=function(){},i([s(sp.Skeleton)],e.prototype,"contraShow",void 0),i([s(cc.Node)],e.prototype,"contraNode",void 0),i([s(cc.Node)],e.prototype,"roleInfoNode",void 0),i([s(cc.Node)],e.prototype,"heroItem",void 0),i([s(cc.Node)],e.prototype,"weaponItem",void 0),i([s(cc.SpriteAtlas)],e.prototype,"heroSPA",void 0),e=i([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"../game/gameRes":"gameRes"}],signIn:[function(t,e,o){"use strict";cc._RF.push(e,"e47b26auaNM7phiH1ZEDYyQ","signIn");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../module/ManagerWindow"),c=cc._decorator,a=c.ccclass,s=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.userId=null,e.password=null,e.signUpPanelPre=null,e}return n(e,t),e.prototype.onLoad=function(){},e.prototype.start=function(){},e.prototype.clickLoginBtn=function(){cc.director.loadScene("hall")},e.prototype.clickSignUpBtn=function(){r.ManagerWindow.getInstance().show(this.signUpPanelPre)},i([s(cc.EditBox)],e.prototype,"userId",void 0),i([s(cc.EditBox)],e.prototype,"password",void 0),i([s(cc.Prefab)],e.prototype,"signUpPanelPre",void 0),e=i([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"../module/ManagerWindow":"ManagerWindow"}],signUp:[function(t,e,o){"use strict";cc._RF.push(e,"46ed2q879RPtofb/OaSAQb+","signUp");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../module/HttpServer"),c=t("../module/ManagerNotice"),a=t("../module/ManagerWindow"),s=cc._decorator,l=s.ccclass,p=s.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.userIdEditBox=null,e.passwordEditBox=null,e.againEditBox=null,e}return n(e,t),e.prototype.start=function(){},e.prototype.clickCanelBtn=function(){a.ManagerWindow.getInstance().pop()},e.prototype.clickSignUpBtn=function(){if(this.checkUpStr()){var t={userid:this.userIdEditBox.string,password:this.passwordEditBox.string};r.httpServer.getInstance().post("user/cocosAddUser",{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},t,function(t){var e=JSON.parse(t);200==e.status?(cc.log(e.msg),c.ManagerNotice.getInstance().show("Create an account success!"),a.ManagerWindow.getInstance().pop()):(cc.log(e.msg),c.ManagerNotice.getInstance().show("Create an account fail!"))})}},e.prototype.checkUpStr=function(){return this.passwordEditBox.string!=this.againEditBox.string?(c.ManagerNotice.getInstance().show("Your confirmed password and new password do not match"),!1):!(this.userIdEditBox.string.length<4)||(c.ManagerNotice.getInstance().show("less than 4 digits,please enter again."),!1)},i([p(cc.EditBox)],e.prototype,"userIdEditBox",void 0),i([p(cc.EditBox)],e.prototype,"passwordEditBox",void 0),i([p(cc.EditBox)],e.prototype,"againEditBox",void 0),e=i([l],e)}(cc.Component);o.default=h,cc._RF.pop()},{"../module/HttpServer":"HttpServer","../module/ManagerNotice":"ManagerNotice","../module/ManagerWindow":"ManagerWindow"}]},{},["battleView","gameKeyControl","gameProtocol","gameRes","joyStickControl","playerControl","hallView","rolePanel","loginView","signIn","signUp","GameInfo","HttpServer","ManagerNotice","ManagerWindow"]);