import Phaser from "phaser";
import EndGameScene from "./EndGameScene.js";
import Scene from "./scene.js";

let config = {
  width: 256,
  height: 272,
  backgroundColor: 0x000000,
  scene: [Scene, EndGameScene],
  pixelArt: true,
  physics: {
    default: "arcade",
    adcade: {
      debug: false
    }
  }
};

let game = new Phaser.Game(config);
