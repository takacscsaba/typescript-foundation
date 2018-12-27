import { Aircraft } from "./aircraft";

export class F32 extends Aircraft {
  constructor (maxAmmo: number = 12, baseDamage: number = 50) {
    super(maxAmmo, baseDamage);
  }
}