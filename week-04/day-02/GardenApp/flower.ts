import { Plant } from "./plant";

export class Flower extends Plant {
  constructor() {
    super();
  }

  watering() {
    throw new Error("Method not implemented.");
  }
}