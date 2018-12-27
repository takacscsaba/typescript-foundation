export abstract class Plant {
  color: string;
  type: string;
  waterAmount: number = 0;
  needsWatering: boolean = true;

  abstract watering(waterAmount: number);
}