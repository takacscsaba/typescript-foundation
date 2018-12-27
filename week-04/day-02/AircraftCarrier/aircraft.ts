export class Aircraft {
  type: string;
  maxAmmo: number;
  baseDamage: number;
  ammo: number = 0;

  constructor(type: string, maxAmmo: number, baseDamage: number) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }

  public fight(): number {
    let damage: number = this.baseDamage * this.ammo;
    this.ammo = 0;
    return damage;
  }

  public refill(refillAmmo: number): number {
    let remainingAmmo = 0;
    if (refillAmmo < this.maxAmmo) {
      this.ammo = refillAmmo;
    } else {
      this.ammo = this.maxAmmo;
      remainingAmmo = refillAmmo - this.maxAmmo;
    }
    return remainingAmmo;
  }

  public getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage},  All Damage: ${this.baseDamage * this.ammo}, Priority: ${this.isPriority()}`;
  }

  public getType(): string {
    return null;
  }

  public isPriority(): boolean {
    return null;
  }
}