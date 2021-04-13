class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        //load all images we are using in the game
        this.load.image('road', './assets/images/road.png');
        this.load.image('car', './assets/images/car.png');
        this.load.image('car1', './assets/images/car1.png')
        this.load.image('police', './assets/images/police.png')
        this.load.image('truck', './assets/images/truck.png')
        this.load.image('van', './assets/images/van.png')
        this.load.image('petrolcan', './assets/images/bidon.png')
        this.load.bitmapFont("PixelFont", "./assets/font/font.png", "./assets/font/font.xml")
    }
    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}