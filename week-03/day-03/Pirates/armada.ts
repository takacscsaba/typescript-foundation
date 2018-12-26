import { PirateShip } from "./pirate-ship";

export class Armada {
  name: string;
  fleet: PirateShip[];
  warWon: number;

  constructor(name: string) {
    this.name = name;
  }

  public shipInformations() {
    if (this.fleet == undefined) {
      console.log(`${this.name} armada hasn\'t recruited ships yet into its fleet.`)
    } else {
      let fleetStats: number[] = this.pirateStatCounter();
      console.log(`${this.name} armada contains ${this.fleet,length}, and won ${this.warWon} wars.`);
      console.log(`Crew: ${fleetStats[0]}, Can work: ${fleetStats[1]}, Drunk: ${fleetStats[2]}, Dead: ${fleetStats[3]}`);
    }
  }

  public fillArmada() {
    //let randomNum = Math.floor(Math.random() * Math.floor(9)) + 1;
    this.fleet = [];
    for (let i = 0; i <= 5; i++) {
      this.fleet.push(new PirateShip(`${this.name} Ship #${i + 1}`));
    }
  }

  public war(otherArmada: Armada): boolean {
    let winningNum: number = 0;
    let winningOtherNum: number = 0;

    let otherShipCounter: number = 0;
    for (let i = 0; i < this.fleet.length; i++) {
      for (let j = otherShipCounter; j < otherArmada.fleet.length; j++) {
        let isWinner: boolean = this.fleet[i].battle(otherArmada.fleet[j]);
        if (isWinner) {
          winningNum++;
          otherShipCounter++;
        } else {
          winningOtherNum++;
          break;
        }
      }
    }

    if (winningNum > winningOtherNum) {
      this.warWon++;
      return true;
    }
    otherArmada.warWon++;
    return false;
  }

  public pirateStatCounter(): number[] {
    let fleetStats: number[] = [];
    let wholeCrewNum: number = 0;
    let alivePirates: number = 0;
    let drunkPirates: number = 0;
    let deadPirates: number = 0;
    
    this.fleet.forEach(ship => {
      wholeCrewNum += ship.pirateCrew.length;
      alivePirates += ship.alivePirateCounter();
      drunkPirates += ship.drunkPirateCounter();
      deadPirates += ship.deadPirateCounter();
    })

    fleetStats.push(wholeCrewNum, alivePirates, drunkPirates, deadPirates);
    return fleetStats;
  }
}