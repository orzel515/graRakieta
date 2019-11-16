import Phaser from "phaser";

export default class EndGameScene extends Phaser.Scene {
  constructor() {
    super("koniecgry");
  }

  create() {
    this.textLabel = this.add.text(10, 272 / 2, " >--('-')--< -[destroyed]");
  }
}
