class Scene3 extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }
    create() {
        // black background 
        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        //gameover text
        this.gameover = this.add.bitmapText(10, 300, "PixelFont", "Game Over", 180);
        this.space = this.add.bitmapText(40, 600, "PixelFont", "Press Space to play again", 70);
        // score and highscore text
        this.labelScore = this.add.bitmapText(50, 420, "PixelFont", "Your score:", 100);
        highScoreText = this.add.bitmapText(50, 500, "PixelFont", "Highscore " + highscore, 100);

        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        // text
        this.gameover.text = "Game Over"
        this.labelScore.text = "Your score: " + score;
        highScoreText.text = 'Highscore: ' + localStorage.getItem("highscore"); {
            if (score > localStorage.getItem("highscore")) {
                localStorage.setItem("highscore", score);
            }
        }
        scoreText.text = 'Your score: ' + localStorage.getItem("score"); {
            localStorage.setItem("score", score);
        }
        // play again
        if (cursors.space.isDown) {
            this.scene.start("bootGame");
            score = 0
        }
    }
}