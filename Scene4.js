class Scene4 extends Phaser.Scene {
    constructor() {
        super("pauseGame");
    }
    create() {
        // pause text
        this.gameover = this.add.bitmapText(170, 300, "PixelFont", "Pause", 180);
        this.space = this.add.bitmapText(90, 600, "PixelFont", "Press Shift to resume", 70);

        cursors = this.input.keyboard.createCursorKeys()

    }

    update() {
        // resume game 
        if (cursors.shift.isDown) {
            this.scene.resume("playGame");
            this.scene.stop();
        }
    }
}