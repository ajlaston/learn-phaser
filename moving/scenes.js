const gameState = {};



export class LandingScene extends Phaser.Scene {
    
    constructor(){
        super({key : 'LandingScene'})
    }

    

    preload(){
        this.physics.world.fps = 60
        console.log('this works!');
        this.load.spritesheet({
            key : 'knight',
            url : 'sprites/knight.png',
            frameConfig : {
                frameWidth : 76,
                frameHeight : 90
            }
            
        });
        gameState.cursors = this.input.keyboard.createCursorKeys();
        
    }

    create(){
        
        gameState.active = true;;
       gameState.player = this.physics.add.sprite(50, 50, 'knight', 1).setScale(.5);
       gameState.player.body.setCollideWorldBounds(true)

       console.log(gameState.player.body)
       
       //gameState.player.body.

       this.anims.create({
           key: 'walkDown',
           frames: this.anims.generateFrameNumbers('knight', {frames : [0,1,2,1]}),
           frameRate: 8,
           repeat: -1
       });

       this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('knight', {frames : [1]}),
        frameRate: 8,
        repeat: -1
    })

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('knight', {frames : [15]}),
        frameRate: 8,
        repeat: -1
    })


       this.input.on('pointerdown', ()=>{
        this.scene.stop('LandingScene');
        this.scene.start('StartMenu');
       });
        gameState.action = 'idle'
        console.log(this)


       
    }



    update(time, delta){
        //this set delta fixed
        this.physics.world.fixedStep = false
        
        
        if(gameState.active){

        if (gameState.cursors.right.isDown) {
                gameState.player.body.setVelocityX(120);
                gameState.player.anims.play('right', true);
                gameState.player.flipX = false;
                
        }
        else if(gameState.cursors.down.isDown){
            
            //speed 
            gameState.player.body.setVelocityY(120);
            console.log(delta, this.physics.world.fps, this.time.timeScale)
            gameState.player.anims.play('walkDown', true);
            gameState.player.flipY = false;
            
        }
        else {
            gameState.player.setVelocity(0)
            gameState.player.anims.play('idle', true);
        }
    }
}
}

export class StartMenu extends Phaser.Scene {

    constructor(){
        super({key : 'StartMenu'})
    }

    preload(){

    }

    create(){
        this.add.circle(200,200,40,0x09144);
        console.log('scene 2');
    }

    update(){

    }
}

export const scene = [
    LandingScene,
    StartMenu
]
