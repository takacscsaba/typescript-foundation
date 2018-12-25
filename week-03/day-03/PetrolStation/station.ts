import { Car } from "./car";

export class Station {
  gasAmount: number;

  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }

  public refill(car: Car) {
    let refilledAmount = car.capacity - car.gasAmount;

    if (refilledAmount < this.gasAmount) {
      this.gasAmount -= refilledAmount;
      car.gasAmount = car.capacity;
    } else {
      car.gasAmount += this.gasAmount;
      this.gasAmount = 0;
    }
  }
}