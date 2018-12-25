import { Teacher } from "./teacher";

export class Student {
  iq: number;

  constructor (iq: number = 75) {
    this.iq = iq;
  }

  public learn() {
    this.iq++;
  }

  public question(teacher: Teacher) {
    this.iq++;
    teacher.knowledge--;
  }
}