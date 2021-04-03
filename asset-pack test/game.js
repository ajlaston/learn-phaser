import {scene} from './scenes.js';

const config = {
    width: 780,
    height: 400,
    pixelArt : true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug : false,
            fps: 60,
            enableBody : true
        }
    },
    fps: {
        target: 60,
        forceSetTimeOut: true
    },

    scene
}

const game = new Phaser.Game(config);