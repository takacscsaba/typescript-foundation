export class Pirate {
  intoxication: number = 0;
  isPassedOut: boolean = false;
  isDead: boolean = false;
  isCaptain: boolean;

  constructor(isCaptain: boolean) {
    this.isCaptain = isCaptain;
  }

  public drinkSomeRum() {
    if (this.isDead = false) {
      this.intoxication++;
    } else {
      console.log("He's dead");
    }
  }

  public howsItGoingMate() {
    if (this.isDead = false) {
      if (this.intoxication < 5) {
        console.log("Pour me anudder!");
      } else {
        console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
        this.isPassedOut = true;
      }
    } else {
      console.log("He's dead");
    }
  }

  public die() {
    this.isDead = true;
  }

  public brawl(otherPirate: Pirate) {
    if (this.isDead == false && otherPirate.isDead == false) {
      let chance: number = Math.floor(Math.random() * Math.floor(2));

      if (chance === 0) {
        this.isDead = true;
      } else if (chance === 1) {
        otherPirate.isDead = true;
      } else if (chance === 2) {
        this.isPassedOut = true;
        otherPirate.isPassedOut = true;
      }
    }
  }
}