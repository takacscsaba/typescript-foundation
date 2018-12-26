import { Person } from "./person";

export class Mentor extends Person {
  level: string;

  constructor (name?: string, age?: number, gender?: string, level: string = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  public introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  public getGoal() {
    console.log("Educate brilliant junior software developers.");
  }
}