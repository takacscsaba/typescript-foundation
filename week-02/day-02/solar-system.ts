'use strict';

function putSaturn(arr: string[]): string[] {
  arr.splice(5, 0, 'Saturn');
  return arr;
}

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

console.log(putSaturn(planetList));

export = putSaturn;