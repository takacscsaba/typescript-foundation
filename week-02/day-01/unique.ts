'use strict';

function unique(arr: number[]) {
    return arr.filter((v, i, a) => a.indexOf(v) === i);
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`