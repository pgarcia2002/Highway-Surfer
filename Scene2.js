class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        // set road image and setup size
        this.road = this.add.image(0, 0, 'road');
        this.road.setOrigin(0, 0);
        this.road.setScale(0.3, 0.275)
        // set cars image and setup size
        car = this.physics.add.image(300, 880, 'car');
        truck = this.physics.add.image(config.width / 2 - 45, config.height / 10, "truck")
        van = this.physics.add.image(config.width / 1.5 + 60, config.height / 10, "van")
        car1 = this.physics.add.image(config.width / 3.5, config.height / 10, "car1");
        police = this.physics.add.image(config.width / 2 + 65, config.height / 10, "police");
        petrolcan = this.physics.add.image(config.width / 2 + 65, config.height / 10, "petrolcan");

        car.setScale(0.7)
        car1.setScale(0.7)
        truck.setScale(0.7)
        police.setScale(0.7)
        van.setScale(0.7)
        petrolcan.setScale(0.05)
        //main car can't go out of the background
        car.body.collideWorldBounds = true;
        //have keys input for movement
        cursors = this.input.keyboard.createCursorKeys()
        console.log(cursors)
        // to dodge cars group
        toDodgeCars = this.physics.add.group();
        toDodgeCars.add(truck)
        toDodgeCars.add(van)
        toDodgeCars.add(car1)
        toDodgeCars.add(police)
        //add black bar for score 
        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.beginPath();
        graphics.moveTo(0, 0);
        graphics.lineTo(config.width, 0);
        graphics.lineTo(config.width, 40);
        graphics.lineTo(0, 40);
        graphics.lineTo(0, 0);
        graphics.closePath();
        graphics.fillPath();
        //score setup

        //random road for cars array with setup
        line = config.width / 2 - 45
        line1 = config.width / 1.5 + 60
        line2 = config.width / 3.5
        line3 = config.width / 2 + 65
        randomroad = [line, line1, line2, line3]


        highScoreText = this.add.bitmapText(500, 15, "PixelFont", "Highscore " + highscore, 30);


        this.score = 0;
        scoreText = this.add.bitmapText(10, 15, "PixelFont", "Score:" + score, 30);
        fps = this.add.bitmapText(10, 50, "PixelFont", "Fps:", 30)
    }
    update() {
        //the car doesn’t move when game is starting
        car.setVelocityX(0)
        car.setVelocityY(0)
        //car movement left 
        if (cursors.left.isDown) {
            car.setVelocity(-300, 0)
        }
        //car movement right
        if (cursors.right.isDown) {
            car.setVelocity(300, 0)
        }

        if (cursors.up.isDown) {
            car.setVelocity(0, -300)
        }
        if (cursors.down.isDown) {
            car.setVelocity(0, 300)
        }
        //call a function to move the cars vertically and update the speed of cars for difficulty

        this.moveCars(car1, 2);
        this.moveCars(truck, 1);
        this.moveCars(police, 3);
        this.moveCars(van, 1);
        this.moveCars(petrolcan, 4)

        //scroll the background
        this.road.tilePositionY -= 0.5
        //when petrol can collide with car call pickPetrolCan function
        this.physics.add.overlap(car, petrolcan, this.pickPetrolCan, null, this);
        this.physics.add.overlap(car, toDodgeCars, this.gameover, null, this);

        highScoreText.text = 'Highscore: ' + localStorage.getItem("highscore"); {
            if (score > localStorage.getItem("highscore")) {
                localStorage.setItem("highscore", score);
            }
        }
        scoreText.text = 'Your score: ' + localStorage.getItem("score"); {
            localStorage.setItem("score", score);
        }
        fps.text = 'Fps: ' + this.physics.world.fps
        //to clear highscore
        // localStorage.clear()
        console.log(this.physics.world.fps)
        console.log(score)
    }
    gameover() {
        this.scene.start("gameOver");
    }

    //create the function to pick the petrolcan
    pickPetrolCan(car, petrolcan) {
        //add +1 to the score
        score += 1;
        //update text score
        scoreText.text = "Score: " + score;
        //reset the position of the petrolcan
        this.resetCarsPos(petrolcan)
    }
    //create the function to move the cars
    moveCars(cars, speed) {
        // increase the position of the cars on the vertical axis
        cars.y += speed;
        // if the cars hits the bottom of the screen call the reset function
        if (cars.y > config.height) {
            //call a reset position function
            this.resetCarsPos(cars);
        }
    }

    //create the reset position function
    resetCarsPos(cars) {
        // put the cars on the top
        cars.y = 0;
        // pick a random position between all roads in randomroad on x 
        var randomX = Phaser.Math.RND.pick(randomroad);
        cars.x = randomX;
    }
}
// all variables used
let car
let petrolcan
let car1
let truck
let police
let van
let toDodgeCars
let cursors
let line
let line1
let line2
let line3
let randomroad
var score = 0;
var highscore = 0;
var highScoreText;
var scoreText;
var fps;