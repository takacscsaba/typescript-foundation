'use strict';

let dailyWorkingHours = 6;
let weeklyDays = 5;
let semesterLength = 17;

function codingHourCalculator (dailyWorkingHours, weeklyDays, semesterLength) {
    let codingHours = dailyWorkingHours * weeklyDays * semesterLength;
    return codingHours;
}

let weeklyHours = 52;
let semesterHours = weeklyHours * semesterLength;

function codingPercentageCalculator () {
    let percentage = codingHourCalculator(dailyWorkingHours, weeklyDays, semesterLength) / semesterHours * 100;
    return percentage;
}

console.log(codingHourCalculator(dailyWorkingHours, weeklyDays, semesterLength));
console.log(codingPercentageCalculator());