var config = {

    type: Phaser.AUTO,
    width: 700,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            fps: 60,
        },
        fps: {
            max: 60,
            min: 30,
            target: 60,
        }
    },
    scene: [Scene1, Scene2, Scene3, Scene4],
    pixelArt: true,
};

var game = new Phaser.Game(config);