'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

function remainingSecondsCalculator(currentHours: number, currentMinutes: number, currentSeconds: number) {
    let currentAllSeconds: number = (currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds;
    let allSeconds: number = 24 * 60 * 60;
    let remainingSeconds: number = allSeconds - currentAllSeconds;

    return remainingSeconds;
}

console.log(remainingSecondsCalculator(currentHours, currentMinutes, currentSeconds));