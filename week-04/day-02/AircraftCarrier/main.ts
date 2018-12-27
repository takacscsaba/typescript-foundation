import { F16 } from "./f16";
import { F35 } from "./f35";


const a = new F16();
const s = new F35();
let ammo = 500;

console.log(a.getType());
console.log(s.getType());
console.log('');
console.log(a.getStatus());
console.log(s.getStatus());
console.log('');
console.log(a.refill(ammo));
console.log(s.refill(ammo));
console.log(a.getStatus());
console.log(s.getStatus());