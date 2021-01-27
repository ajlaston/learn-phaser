import { scene } from './scenes.js';

const config = {
    width: 480,
    height: 700,
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

const getNpcDb = function(){
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        const res = JSON.parse(this.response);
        res.map(item=>{
            console.log(item.name, "Level: ", item.level);
        })
    }
}
xhr.open("GET", "db/npc.json");
xhr.send();
}

getNpcDb();

const game = new Phaser.Game(config);
