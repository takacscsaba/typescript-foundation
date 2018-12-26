import { Pirate } from "./pirate";

export class PirateShip {
  name: string;
  pirateCrew: Pirate[];
  captain: Pirate;

  constructor(name: string) {
    this.name = name;
  }

  public fillShip() {
    this.captain = new Pirate(true);
    let randomNum = Math.floor(Math.random() * Math.floor(9)) + 1;

    for (let i = 0; i <= randomNum; i++) {
      this.pirateCrew.push(new Pirate(false));
    }
  }

  public shipInformations() {
    if (this.captain.isDead) {
      console.log(`The captain is dead, he consumed ${this.captain.intoxication} rum.`)
    } else if (this.captain.isPassedOut) {
      console.log(`The captain has passed out,  he consumed ${this.captain.intoxication} rum.`)
    } else {
      console.log(`The captain is alive, and he consumed ${this.captain.intoxication} rum.`)
    }

    let alivePirateNum: number = this.alivePirateCounter();
    this.pirateCrew.forEach(x => x.isDead ? 0 : alivePirateNum++);
    console.log(`Out of ${this.pirateCrew.length} pirates, ${alivePirateNum} are still alive.`)
  }

  public battle(otherShip: PirateShip): boolean {
    let scoreShip: number = this.alivePirateCounter() - this.captain.intoxication;
    let scoreOtherShip: number = otherShip.alivePirateCounter() - otherShip.captain.intoxication;

    if (scoreShip > scoreOtherShip) {
      otherShip.killingPirates();
      this.winningParty();
      return true;
    } else {
      this.killingPirates();
      otherShip.winningParty();
      return false;
    }
  }

  public alivePirateCounter(): number {
    let alivePirateNum: number = 0;
    this.pirateCrew.forEach(x => x.isDead ? 0 : alivePirateNum++);
    return alivePirateNum;
  }

  public killingPirates() {
    let randomNumDeath: number =  Math.floor(Math.random() * Math.floor(this.pirateCrew.length));
    for (let i = 0; i < randomNumDeath; i++) {
      this.pirateCrew[i].die();
    }
  }

  public winningParty() {
    let randomRumCap: number =  Math.floor(Math.random() * Math.floor(2));
    for (let i = 0; i <= randomRumCap; i++) {
      this.captain.drinkSomeRum();
    }

    let randomRumCrew: number =  Math.floor(Math.random() * Math.floor(3));
    for (let i = 0; i <= this.pirateCrew.length; i++) {
      for (let j = 0; j <= randomRumCrew; j++) {
        this.pirateCrew[i].drinkSomeRum();
      }
    }
  }
}