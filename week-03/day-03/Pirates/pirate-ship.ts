import { Pirate } from "./pirate";

export class PirateShip {
  name: string;
  pirateCrew: Pirate[];
  captain: Pirate;

  constructor(name: string) {
    this.name = name;
  }

  public fillShip() {
    this.captain = new Pirate(`Captain ${this.name}`, true);
    let randomNum = Math.floor(Math.random() * Math.floor(9)) + 1;
    this.pirateCrew = [];
    for (let i = 0; i <= randomNum; i++) {
      this.pirateCrew.push(new Pirate(`${this.name} Pirate number #${i + 1}`, false));
    }
  }

  public shipInformations() {
    if (this.captain == undefined) {
      console.log(`The ${this.name} ship has no captain nor crew.`)
    } else {
        if (this.captain.isDead) {
          console.log(`${this.captain.name} is dead, he consumed ${this.captain.intoxication} rum.`)
        } else if (this.captain.isPassedOut) {
          console.log(`${this.captain.name} has passed out, he consumed ${this.captain.intoxication} rum.`)
        } else {
          console.log(`${this.captain.name} is alive, and he consumed ${this.captain.intoxication} rum.`)
        }
  
        let alivePirateNum: number = this.alivePirateCounter();
        console.log(`Out of ${this.pirateCrew.length} pirates, ${alivePirateNum} are still alive.`)
    }
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
    for (let i = 0; i < randomNumDeath + 1; i++) {
      this.pirateCrew[i].die();
    }
  }

  public winningParty() {
    let randomRumCap: number =  Math.floor(Math.random() * Math.floor(2));
    for (let i = 0; i <= randomRumCap; i++) {
      this.captain.drinkSomeRum();
    }

    let alivePirates: number = this.alivePirateCounter();
    for (let i = 0; i < alivePirates; i++) {
      for (let j = 0; j <= Math.floor(Math.random() * Math.floor(2)); j++) {
        this.pirateCrew[i].drinkSomeRum();
      }
    }
  }
}