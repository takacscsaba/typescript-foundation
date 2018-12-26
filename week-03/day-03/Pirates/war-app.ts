import { Armada } from "./armada";

const 海上自衛隊: Armada = new Armada('海上自衛隊');
const 大韓民国海軍: Armada = new Armada('大韓民国海軍');

海上自衛隊.armadaInformations();
大韓民国海軍.armadaInformations();
console.log('');

海上自衛隊.fillArmada();
大韓民国海軍.fillArmada();
海上自衛隊.armadaInformations();
大韓民国海軍.armadaInformations();
console.log('');

海上自衛隊.war(大韓民国海軍);
海上自衛隊.armadaInformations();
大韓民国海軍.armadaInformations();
console.log('');

海上自衛隊.war(大韓民国海軍);
海上自衛隊.armadaInformations();
大韓民国海軍.armadaInformations();
console.log('');

海上自衛隊.war(大韓民国海軍);
海上自衛隊.armadaInformations();
大韓民国海軍.armadaInformations();
console.log('');

海上自衛隊.war(大韓民国海軍);
海上自衛隊.armadaInformations();
大韓民国海軍.armadaInformations();