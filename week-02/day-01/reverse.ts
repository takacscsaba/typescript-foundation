'use strict';

let numList2 = [3, 4, 5, 6, 7];

console.log(numList2.reverse());

let firstElement: number;
for (let i = 0; i < numList2.length / 2; i++) {
    firstElement = numList2[i];
    numList2[i] = numList2[numList2.length - 1 - i];
    numList2[numList2.length - 1 - i] = firstElement;
}

console.log(numList2);