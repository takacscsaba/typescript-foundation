import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {
  constructor (maxAmmo: number = 8, baseDamage: number = 30) {
    super(maxAmmo, baseDamage);
  }
}