import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {
  constructor (type: string = 'F16', maxAmmo: number = 8, baseDamage: number = 30) {
    super(type, maxAmmo, baseDamage);
  }

  public getType(): string {
      return "F16";
  }

  public isPriority(): boolean {
      return false;
  }
}