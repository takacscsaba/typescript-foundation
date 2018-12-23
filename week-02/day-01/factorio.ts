'use strict';

let myNumber = 5;

function factorio(num: number): number {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log(factorio(myNumber));