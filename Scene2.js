class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    create() {
        this.road = this.add.image(0, 0, 'road');
        this.road.setOrigin(0, 0);
        this.road.setScale(0.3, 0.275)

        car = this.physics.add.image(300, 880, 'car');
        truck = this.physics.add.image(config.width / 2 - 45, config.height / 10, "truck")
        van = this.physics.add.image(config.width / 1.5 + 60, config.height / 10, "van")
        car1 = this.physics.add.image(config.width / 3.5, config.height / 10, "car1");
        police = this.physics.add.image(config.width / 2 + 60, config.height / 10, "police");
        petrolcan = this.physics.add.image(config.width / 2 + 60, config.height / 10, "petrolcan");

        car.setScale(0.7)
        car1.setScale(0.7)
        truck.setScale(0.7)
        police.setScale(0.7)
        van.setScale(0.7)
        petrolcan.setScale(0.05)

        car.body.collideWorldBounds = true;

        cursors = this.input.keyboard.createCursorKeys()
        console.log(cursors);

        toDodgeCars = this.physics.add.group();
        toDodgeCars.add(truck)
        toDodgeCars.add(van)
        toDodgeCars.add(car1)
        toDodgeCars.add(police)

        var graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.beginPath();
    graphics.moveTo(0, 0);
    graphics.lineTo(config.width, 0);
    graphics.lineTo(config.width, 40);
    graphics.lineTo(0, 40);
    graphics.lineTo(0, 0);
    //
    graphics.closePath();
    graphics.fillPath();

    this.scoreLabel = this.add.bitmapText(10, 15, "PixelFont", "SCORE ", 30);
        this.score = 0

    }
    update() {
        car.setVelocityX(0)
        car.setVelocityY(0)

        if (cursors.left.isDown) {
            car.setVelocity(-300, 0)
        }
        if (cursors.right.isDown) {
            car.setVelocity(300, 0)
        }
        //call a function to move the cars vertically
        if (this.score >= 0 && this.score<= 1000){
            this.moveCars(car1, 2);
            this.moveCars(truck, 1);
            this.moveCars(police, 3);
            this.moveCars(van, 1);
            }
        if (this.score >= 1000 && this.score<= 10000){
            this.moveCars(car1, 5);
            this.moveCars(truck, 3);
            this.moveCars(police, 6);
            this.moveCars(van, 3);
            }
        if (this.score >=10000){
            this.moveCars(car1, 8);
            this.moveCars(truck, 6);
            this.moveCars(police, 9);
            this.moveCars(van, 6);
            }
        this.moveCars(petrolcan, 4)

        //scroll the background
        this.road.tilePositionY -= 0.5

        this.physics.add.overlap(car, petrolcan, this.pickPetrolCan, null, this);

    }

    pickPetrolCan(car, petrolcan) {
        this.score += 1;
        this.scoreLabel.text = "SCORE " + this.score;
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
        // put the cars on a random position on the x axis
        var randomX = Phaser.Math.Between(150, 500);
        cars.x = randomX;
    }
}


let car
let petrolcan
let car1
let truck
let police
let van
let toDodgeCars
let cursors