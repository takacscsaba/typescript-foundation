import { Student } from "./student";

export class Teacher {
  knowledge: number;

  constructor (knowledge: number = 200) {
    this.knowledge = knowledge;
  }

  public teach() {
    this.knowledge--;
  }

  public answer(student: Student) {
    this.knowledge--;
    student.iq++;
  }
}