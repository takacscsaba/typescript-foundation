import { Aircraft } from "./aircraft";

export class Carrier {
  aircrafts: Aircraft[] = [];
  ammoStore: number;
  healthPoint: number;
  
  constructor(ammoStore: number, healthPoint: number) {
    this.ammoStore = ammoStore;
    this.healthPoint = healthPoint;
  }

  public add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  public fill() {
    let neededAmmo = this.ammoStatCalculator();
    if (this.ammoStore == 0) {
      throw new Error('Ammo storage is empty.');
    } else if (this.ammoStore < neededAmmo) {
      this.aircrafts.forEach(x => x.isPriority() ? this.ammoStore = x.refill(this.ammoStore) : 0);
      if (this.ammoStore != 0 && neededAmmo != 0) {
        this.aircrafts.forEach(x => x.isPriority() ? 0 : this.ammoStore = x.refill(this.ammoStore));
      }
    } else if (this.ammoStore > neededAmmo) {
      this.aircrafts.forEach(x => this.ammoStore = x.refill(this.ammoStore));
    }
  }

  public fight(otherCarrier: Carrier) {
    this.aircrafts.forEach(x => otherCarrier.healthPoint -= x.fight());
    otherCarrier.aircrafts.forEach(x => this.healthPoint -= x.fight());
  }

  public getStatus() {
    if (this.healthPoint > 0) {
      let totalDamage = this.totalDamageCalculator();
      console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${totalDamage}`);
      console.log(`Aircrafts:`);
      this.aircrafts.forEach(x => console.log(x.getStatus()));
    } else {
      console.log(`It's dead Jim :(`);
    }
  }

  public ammoStatCalculator(): number {
    let neededAmmo: number = 0;
    this.aircrafts.forEach(x => x.ammo == 0 ? neededAmmo += x.maxAmmo : 0);
    return neededAmmo;
  }

  public totalDamageCalculator(): number {
    let totalDamage: number = 0;
    this.aircrafts.forEach(x =>  totalDamage += (x.baseDamage * x.ammo));
    return totalDamage;
  }
}