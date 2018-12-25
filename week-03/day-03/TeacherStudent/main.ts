import { Student } from "./student";
import { Teacher } from "./teacher";

let 後輩: Student = new Student(90);
let 先生: Teacher = new Teacher();

後輩.learn();
後輩.question(先生);
console.log(後輩.iq);
console.log(先生.knowledge);

先生.teach();
先生.answer(後輩);
console.log(後輩.iq);
console.log(先生.knowledge);