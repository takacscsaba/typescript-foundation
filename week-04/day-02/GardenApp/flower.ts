import { Plant } from "./plant";

export class Flower extends Plant {
  constructor(color: string) {
    super();
    this.color = color;
  }

  watering(waterAmount: number) {
    if (this.needsWatering) {
      this.waterAmount += (waterAmount * 0.75);
      this.waterAmount >= 5 ? this.needsWatering = false : 0;
    }
  }
}