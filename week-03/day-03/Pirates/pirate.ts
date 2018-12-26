export class Pirate {
  name: string;
  intoxication: number = 0;
  isPassedOut: boolean = false;
  isDead: boolean = false;
  isCaptain: boolean;

  constructor(name: string, isCaptain: boolean) {
    this.name = name;
    this.isCaptain = isCaptain;
  }

  public drinkSomeRum() {
    if (!this.isDead && this.intoxication <= 2) {
      this.intoxication++;
      //console.log(`${this.name} has drunk some rum.`);
    } else if (this.intoxication > 2) {
      this.isPassedOut = true;
      //console.log(`${this.name} has passed out, therefore he can't drink any more.`);
    } else {
      //console.log(`${this.name} is dead, therefore he can't drink any more.`);
    }
  }

  public howsItGoingMate() {
    if (!this.isDead) {
      if (this.intoxication < 2) {
        console.log("Pour me anudder!");
      } else {
        console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
        this.isPassedOut = true;
      }
    } else {
      console.log(`${this.name} is dead.`);
    }
  }

  public die() {
    this.isDead = true;
  }

  public wakeUpPirate() {
    this.isPassedOut == false;
    this.intoxication = 0;
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