import { Plant } from "./plant";

export class Tree extends Plant {
  constructor(color: string) {
    super();
    this.color = color;
    this.type = "Tree";
  }

  watering(waterAmount: number) {
    if (this.needsWatering) {
      this.waterAmount += (waterAmount * 0.4);
      this.waterAmount >= 10 ? this.needsWatering = false : 0;
    }
  }
}