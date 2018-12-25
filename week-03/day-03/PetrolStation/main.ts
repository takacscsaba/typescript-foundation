import { Station } from "./station";
import { Car } from "./car";

let トヨタ: Car = new Car();
let gasStation: Station = new Station(233);

gasStation.refill(トヨタ);
console.log(トヨタ.gasAmount);
console.log(gasStation.gasAmount);
トヨタ.gasAmount = 0;
console.log(トヨタ.gasAmount);
console.log('');

gasStation.refill(トヨタ);
console.log(トヨタ.gasAmount);
console.log(gasStation.gasAmount);
トヨタ.gasAmount = 0;
console.log(トヨタ.gasAmount);
console.log('');

gasStation.refill(トヨタ);
console.log(トヨタ.gasAmount);
console.log(gasStation.gasAmount);
console.log(トヨタ.gasAmount);
console.log('');