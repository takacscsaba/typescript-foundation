'use strict';

function makingMatches(arr1: string[], arr2: string[]): string[] {
  let matchArr: string[] = [];
  if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      matchArr.push(arr1[i]);
      if (arr2[i] != undefined) {
        matchArr.push(arr2[i]);
      }
    }
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] != undefined) {
        matchArr.push(arr1[i]);
      }
      matchArr.push(arr2[i]);
    }
  }
  return matchArr;
}

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

console.log(makingMatches(girls, boys));

export = makingMatches;