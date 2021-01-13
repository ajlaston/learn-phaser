const gameState = {};

const config = {
  type: Phaser.AUTO,
  width : 430,
  height: 320,
  backgroundColor : "purple",
  scene : {
    preload,
    create,
    update
  }
};

function preload(){
  this.load.image('codey','https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create(){
  gameState.cursors = this.input.keyboard.createCursorKeys();
  gameState.codey = this.add.sprite(40,40,'codey');
  
  this.add.rectangle(100,100,100,100,0xFF0000);
}

function update(){

  if(gameState.cursors.down.isDown){
    gameState.codey.y += 1;
  }
  
}
