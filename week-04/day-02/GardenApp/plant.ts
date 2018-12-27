export abstract class Plant {
  color: string;
  waterAmount: number = 0;
  needsWatering: boolean = true;

  abstract watering(waterAmount: number);
}