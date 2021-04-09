var config = {
    type: Phaser.AUTO,
    width: 700,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Scene1, Scene2],
    pixelArt: true
};

var game = new Phaser.Game(config);