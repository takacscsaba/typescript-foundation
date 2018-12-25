'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

function candyCalc(arr: any[]) {
  let candySum: number = 0;
  arr.forEach(x => candySum += x.candies);
  console.log(candySum);
}

function ageCalc(arr: any[]) {
  let ageSum: number = 0;
  arr.forEach(x => x.candies < 5 ? ageSum += x.age : 0);
  console.log(ageSum);
}

candyCalc(students);
ageCalc(students);
// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies