'use strict';

const numList = [1, 2, 3, 8, 5, 6];

const newNumList = numList.map(x => x == 8 ? 4 : x);

console.log(newNumList);
console.log(newNumList[3]);