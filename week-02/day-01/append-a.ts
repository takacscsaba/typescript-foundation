'use strict';

let animals = ["koal", "pand", "zebr"];

for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i].concat("a");
}

console.log(animals);