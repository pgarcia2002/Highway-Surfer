class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        this.load.image('road', './assets/road.png');
        this.load.image('car', './assets/car.png');
        this.load.image('car1', './assets/car1.png')
        this.load.image('police', './assets/police.png')
        this.load.image('truck', './assets/truck.png')
        this.load.image('van', './assets/van.png')
    }
    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}