class Scene3 extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }
    create() {
        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.fillPath();
        this.gameover = this.add.bitmapText(30, 15, "PixelFont", "Game Over " + highscore, 300);
    }
    update() {
        this.gameover.text = "Game Over " + highscore, 300
    }
}