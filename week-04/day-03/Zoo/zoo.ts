import { Reptile } from "./reptile";
import { Mammal } from "./mammal";
import { Bird } from "./bird";

const reptile = new Reptile("Crocodile", true);
const mammal = new Mammal("Koala", true);
const bird = new Bird("Parrot", false);

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed() + ", and its voice sounds like this: " + reptile.sound() + ".");
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed() + ", and its voice sounds like this: " + mammal.sound() + ".");
console.log("A " + bird.getName() + " is breeding by " + bird.breed() + ", and its voice sounds like this: " + bird.sound() + ".");