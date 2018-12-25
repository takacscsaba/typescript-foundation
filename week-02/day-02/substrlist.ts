'use strict';

function substrlist(str: string, arr: string[]): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      return i;
    }
  }
  return -1;
}

console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`