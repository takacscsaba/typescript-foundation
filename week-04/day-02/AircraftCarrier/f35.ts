import { Aircraft } from "./aircraft";

export class F35 extends Aircraft {
  constructor (type: string = 'F35', maxAmmo: number = 12, baseDamage: number = 50) {
    super(type, maxAmmo, baseDamage);
  }

  public getType(): string {
      return "F35";
  }

  public isPriority(): boolean {
      return true;
  }
}