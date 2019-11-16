import Phaser from "phaser";

export default class Scene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("bg", "assets/bg.png");
    this.load.spritesheet("ship", "assets/ship.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.image("ship2", "assets/ship2.png");
    this.load.image("ship3", "assets/ship3.png");
  }

  create() {
    this.background = this.add.image(256 / 2, 272 / 2, "bg");
    this.ship = this.physics.add.sprite(256 / 2, 250, "ship");
    this.ship2 = this.physics.add.image(19, 110, "ship2");
    this.ship3 = this.physics.add.image(110, 19, "ship3");

    this.anims.create({
      key: "ship_anim",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 10,
      repeat: -1
    });
    this.ship.play("ship_anim");

    this.keys = this.input.keyboard.createCursorKeys();
    this.KDown2 = 1;
    this.KDown3 = 1;
    this.physics.add.overlap(this.ship, this.ship2, this.endGame, null, this);
  }

  update() {
    let speed = 3;
    if (this.keys.left.isDown) {
      this.ship.x = this.ship.x - speed;
      if (this.ship.x < 0) {
        this.ship.x = 0;
      }
    }
    if (this.keys.right.isDown) {
      this.ship.x = this.ship.x + speed;
      if (this.ship.x > 256) {
        this.ship.x = 256;
      }
    }
    if (this.keys.up.isDown) {
      this.ship.y = this.ship.y - speed;
      this.ship.flipY = false;
      if (this.ship.y < 10) {
        this.ship.y = 10;
      }
    }
    if (this.keys.down.isDown) {
      this.ship.y = this.ship.y + speed;
      this.ship.flipY = true;
      if (this.ship.y > 260) {
        this.ship.y = 260;
      }
    }

    if (this.KDown2 === 1) {
      this.ship2.flipY = false;
      this.ship2.y = this.ship2.y + 1;
      if (this.ship2.y > 272) {
        this.KDown2 = 0;
      }
    } else {
      this.ship2.flipY = true;
      this.ship2.y = this.ship2.y - 1;
      if (this.ship2.y < 0) {
        this.KDown2 = 1;
        this.ship2.x = Math.random() * 256;
      }
    }
    if (this.KDown3 === 1) {
      this.ship3.flipY = false;
      this.ship3.y = this.ship3.y + 2;
      if (this.ship3.y > 272) {
        this.KDown3 = 0;
      }
    } else {
      this.ship3.flipY = true;
      this.ship3.y = this.ship3.y - 2;
      if (this.ship3.y < 0) {
        this.KDown3 = 1;
        this.ship3.x = Math.random() * 256;
      }
    }
  }

  endGame() {
    this.scene.start("koniecgry");
  }
}
