import { PirateShip } from "./pirate-ship";

const 朝日: PirateShip = new PirateShip('朝日');
const 大和: PirateShip = new PirateShip('大和');

朝日.shipInformations();
大和.shipInformations();
console.log('');

朝日.fillShip();
大和.fillShip();
朝日.shipInformations();
大和.shipInformations();
console.log('');

朝日.battle(大和);
朝日.shipInformations();
大和.shipInformations();