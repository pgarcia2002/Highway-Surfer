class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    create() {
        this.road = this.add.image(0, 0, 'road');
        this.road.setOrigin(0, 0);
        this.road.setScale(0.3, 0.275)
        car = this.physics.add.image(300, 880, 'car');
        car.body.collideWorldBounds = true;
        car.setScale(0.7)

        this.truck = this.add.image(config.width / 2 - 45, config.height / 10, "car1")
        this.van = this.add.image(config.width / 1.5 + 60, config.height / 10, "van")
        this.car1 = this.add.image(config.width / 3.5, config.height / 10, "truck");
        this.police = this.add.image(config.width / 2 + 60, config.height / 10, "police");
        this.car1.setScale(0.7)
        this.truck.setScale(0.7)
        this.police.setScale(0.7)
        this.van.setScale(0.7)

        cursors = this.input.keyboard.createCursorKeys()
        console.log(cursors);

        this.add.text(0, 40, "Score:", {
            font: "20px Arial",
            fill: "white"
        });
    }
    update() {
        car.setVelocityX(0)
        car.setVelocityY(0)

        if (cursors.left.isDown) {
            car.setVelocity(-200, 0)
        }
        if (cursors.right.isDown) {
            car.setVelocity(200, 0)
        }
        //call a function to move the cars vertically
        this.moveCars(this.car1, 3);
        this.moveCars(this.truck, 2);
        this.moveCars(this.police, 4);
        this.moveCars(this.van, 2);

        //scroll the background
        this.road.tilePositionY -= 0.5;

    }

    //create the function to move the carss
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
        // put the cars on a random position on the x axis
        var randomX = Phaser.Math.Between(0, config.width);
        cars.x = randomX;
    }
}


let car
let cursors