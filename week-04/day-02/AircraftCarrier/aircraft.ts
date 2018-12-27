export class Aircraft {
  maxAmmo: number;
  baseDamage: number;
  ammo: number = 0;

  constructor(maxAmmo: number, baseDamage: number) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }
}