import defaultDb from './defaultDb.js';

const gameState = {}

export class GameScene extends Phaser.Scene {
    constructor(){
        super({key : 'GameScene'});
    }

    preload(){

    }

    create(){
        console.log(this.scene.isPaused('GameScene'));
        gameState.circle = this.add.circle(200,200,30,0xff0000 );
        gameState.circle.setInteractive();
        console.log(this);
        gameState.circle.on('pointerdown', ()=>{
            console.log(this);
            this.scene.stop('GameScene');
            this.scene.start('Scene2');
            
        });
        this.scale.autoCenter = 1;
        this.add.text(0,0, 'Hello World', {font: '15px', fill : 'white'});
    }

    update(){
        
    }
}

export class Scene2 extends Phaser.Scene {
    constructor(){
        super({key : 'Scene2'})
    }

    preload(){

    }

    create(){
        console.log('you transitioned!!')
        this.scale.autoCenter = 1;
        this.add.text(0,0, 'scene 2', {font: '15px', fill : 'white'});
    }

    update(){

    }

}
