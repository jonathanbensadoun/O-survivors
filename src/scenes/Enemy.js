import { GameObjects } from "phaser";

export class Enemy extends GameObjects.Sprite {
  constructor(scene, x, y, texture, target) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.target = target;
  }

  update() {
    // Add any additional update logic here
    // Calculer la direction vers la cible
    let directionX = this.target.x - this.x;
    let directionY = this.target.y - this.y;
    // Normaliser la direction
    let length = Math.sqrt(directionX * directionX + directionY * directionY);
    directionX /= length;
    directionY /= length;
    // Définir la vitesse de l'ennemi pour qu'il se dirige vers la cible
    this.body.setVelocity(directionX * 50, directionY * 50);
  }
}
