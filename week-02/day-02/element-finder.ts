'use strict';

function containsSeven(arr: number[]): string {
  if (arr.some(x => x === 7)) {
    return "Hoorray";
  }
  return "Noooooo";
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
// The output should be: "Noooooo"

export = containsSeven;