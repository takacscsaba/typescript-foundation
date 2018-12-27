import { Plant } from "./plant";

export class Tree extends Plant {
  constructor() {
    super();
  }

  watering() {
    throw new Error("Method not implemented.");
  }
}