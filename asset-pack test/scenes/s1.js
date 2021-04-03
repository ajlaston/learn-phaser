
class s1 extends Phaser.Scene {
    constructor(){
        super({key : 's1'})
    }

    create(){
        console.log('hiii')
        this.add.text(0,0, 'This scene 1', {});
    }
}