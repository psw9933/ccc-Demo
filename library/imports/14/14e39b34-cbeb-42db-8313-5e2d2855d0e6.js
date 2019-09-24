"use strict";
cc._RF.push(module, '14e39s0y+tC24MTXi0oVdDm', 'gameRes');
// Script/game/gameRes.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playerRes = {
    heroNames: ['thanus', 'walker', 'sand', 'tnt', 'captain'],
    thanus: {
        name: "thanus",
        price: 0,
        health: 5,
        aniPath: "Texture/anim/spine/contra"
    },
    walker: {
        name: "walker",
        price: 5000,
        health: 5,
        aniPath: "Texture/anim/spine/contra2"
    },
    sand: {
        name: "sand",
        price: 6000,
        health: 4,
        aniPath: "Texture/anim/spine/contra3"
    },
    tnt: {
        name: "tnt",
        price: 8000,
        health: 5,
        aniPath: "Texture/anim/spine/contra4"
    },
    captain: {
        name: "walker",
        price: 5000,
        health: 5,
        aniPath: "Texture/anim/spine/contra5"
    },
    contraAniName: ['attack', 'change', 'die1', 'die2', 'idle', 'roll2', 'run', 'run_attack'],
    contraGunName: ['gun0', 'gun0', 'gun1', 'gun2', 'gun3', 'gun4'],
};
exports.playerRes = playerRes;

cc._RF.pop();