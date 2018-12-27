import { Plant } from "./plant";
import { Flower } from "./flower";
import { Tree } from "./tree";

export class Garden {
  plants: Plant[];

  constructor() {
  }

  public wateringGarden(waterAmount: number) {
    console.log(`Watering with ${waterAmount}`)
    let plantsToWaterNum: number = 0;
    this.plants.forEach(plant => plant.needsWatering ? plantsToWaterNum++ : 0);
    this.plants.forEach(plant => plant.needsWatering ? plant.watering(waterAmount / plantsToWaterNum) : 0);
  }

  public infoGarden() {
    this.plants.forEach(plant => plant.needsWatering ? console.log(`The ${plant.color} ${plant.type} needs water`) : console.log(`The ${plant.color} ${plant.type} doesn't need water`));
  }

  public fillGarden() {
    this.plants = [];
    this.plants.push(new Flower('yellow'), new Flower('blue'), new Tree('purple'), new Tree('orange'));
  }
}

const garden = new Garden();

garden.fillGarden();
garden.infoGarden();
console.log('');

garden.wateringGarden(40);
garden.infoGarden();
console.log('');

garden.wateringGarden(70);
garden.infoGarden();