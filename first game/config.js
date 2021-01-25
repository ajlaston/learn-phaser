import {GameScene, Scene2} from './GameScene.js'

const config = {
    width : 480,
    height : 320,
    backgroundColor : "black",
    scene : [GameScene, Scene2]
    
}

const game = new Phaser.Game(config);
