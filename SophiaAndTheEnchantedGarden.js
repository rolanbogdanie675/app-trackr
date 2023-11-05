/*
Filename: SophiaAndTheEnchantedGarden.js
Description: A complex simulation of Sophia's enchanted garden, where flowers grow and butterflies fly.
*/

// Constants
const GARDEN_SIZE = 10;
const MAX_FLOWER_COUNT = 3;
const BUTTERFLY_SPEED = 200;
const MAX_BUTTERFLY_COUNT = 5;

// Garden Class
class Garden {
  constructor(name) {
    this.name = name;
    this.flowers = [];
    this.butterflies = [];
  }

  addFlower(flower) {
    if (this.flowers.length < MAX_FLOWER_COUNT) {
      this.flowers.push(flower);
      console.log(`A ${flower.color} flower was planted in ${this.name}.`);
    } else {
      console.log(`No more flowers can be planted in ${this.name}.`);
    }
  }

  removeFlower() {
    if (this.flowers.length > 0) {
      const removedFlower = this.flowers.pop();
      console.log(`A ${removedFlower.color} flower was removed from ${this.name}.`);
    } else {
      console.log(`There are no flowers to remove from ${this.name}.`);
    }
  }

  addButterfly(butterfly) {
    if (this.butterflies.length < MAX_BUTTERFLY_COUNT) {
      this.butterflies.push(butterfly);
      console.log(`A ${butterfly.color} butterfly started flying in ${this.name}.`);
    } else {
      console.log(`No more butterflies can fly in ${this.name}.`);
    }
  }

  removeButterfly() {
    if (this.butterflies.length > 0) {
      const removedButterfly = this.butterflies.pop();
      console.log(`A ${removedButterfly.color} butterfly stopped flying in ${this.name}.`);
    } else {
      console.log(`There are no butterflies flying in ${this.name}.`);
    }
  }

  printStatus() {
    console.log(`Garden: ${this.name}`);
    console.log(`Flower count: ${this.flowers.length}`);
    console.log(`Butterfly count: ${this.butterflies.length}`);
  }
}

// Flower Class
class Flower {
  constructor(color) {
    this.color = color;
  }
}

// Butterfly Class
class Butterfly {
  constructor(color) {
    this.color = color;
    this.flyInterval = null;
  }

  startFlying() {
    console.log(`The ${this.color} butterfly started flying.`);
    this.flyInterval = setInterval(() => {
      console.log(`The ${this.color} butterfly is flying.`);
    }, BUTTERFLY_SPEED);
  }

  stopFlying() {
    console.log(`The ${this.color} butterfly stopped flying.`);
    clearInterval(this.flyInterval);
  }
}

// Create Gardens
const garden1 = new Garden("Magical Garden");
const garden2 = new Garden("Enchanted Meadow");

// Add Flowers
garden1.addFlower(new Flower("Red"));
garden1.addFlower(new Flower("Blue"));
garden1.addFlower(new Flower("Yellow"));
garden2.addFlower(new Flower("Purple"));

// Remove Flower
garden1.removeFlower();

// Add Butterflies
garden1.addButterfly(new Butterfly("Orange"));
garden1.addButterfly(new Butterfly("Green"));
garden1.addButterfly(new Butterfly("Pink"));

// Remove Butterfly
garden1.removeButterfly();

// Garden Status
garden1.printStatus();
garden2.printStatus();
