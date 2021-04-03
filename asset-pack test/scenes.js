
class start extends Phaser.Scene {
    constructor(){
        super({key : 'start'});
    }

    preload(){
        this.load.pack('a1', 'assets/a1.json');
    }

    create(){
        this.add.text(0,0, ' Hello World', {font : 'arial', color: 'white', fontSize: '100px'});
    }

    update(){
        if(this.input.mousePointer.leftButtonDown()){
            this.scene.stop('start');
            this.scene.start('s1');
        }
    }
}

export const scene = [start];