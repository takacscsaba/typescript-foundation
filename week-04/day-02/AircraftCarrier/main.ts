import { F16 } from "./f16";
import { F35 } from "./f35";
import { Carrier } from "./carrier";

// const a = new F16();
// const s = new F35();
// let ammo = 500;

// console.log(a.getType());
// console.log(s.getType());
// console.log('');
// console.log(a.getStatus());
// console.log(s.getStatus());
// console.log('');
// console.log(a.refill(ammo));
// console.log(s.refill(ammo));
// console.log(a.getStatus());
// console.log(s.getStatus());

const c1 = new Carrier(54, 1000);
const c2 = new Carrier(63, 2000);

c1.add(new F16());
c1.add(new F16());
c1.add(new F35());
c2.add(new F16());
c2.add(new F35());
c2.add(new F35());
c1.fill();
c2.fill();

c1.getStatus();
console.log('');
c2.getStatus();
console.log('');

c1.fight(c2);
c1.fill();
c2.fill();

c1.getStatus();
console.log('');
c2.getStatus();
console.log('');