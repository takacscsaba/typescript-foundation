'use strict';

function subint(num: number, arr: number[]) {
  let indexArr: number[] = [];
  for (let i = 0; i <= arr.length; i++) {
    if ((arr[i] + '').indexOf(num.toString()) > -1) {
      indexArr.push(i);
    }
  }
  return indexArr;
}

console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'