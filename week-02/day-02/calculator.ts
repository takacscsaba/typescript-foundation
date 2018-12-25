'use strict';

function calculate(args: string[]): number {
  if (inputChecker(args)) {
    let operator: string = args[0];
    let operand1: number = parseFloat(args[1]);
    let operand2: number = parseFloat(args[2]);

    let solution: number = 0;
    if (operator == '+') {
      solution = operand1 + operand2;
    } else if (operator == '-') {
      solution = operand1 - operand2;
    }  else if (operator == '*') {
      solution = operand1 * operand2;
    }  else if (operator == '/') {
      solution = operand1 / operand2;
    }  else if (operator == '%') {
      solution = operand1 % operand2;
    } 

    return solution;
  } else {
    console.error('Wrong input!!');
    return;
  }
}

function inputChecker(args: string[]): boolean {
  if (args.length == 3 && (args[0] == '+' || args[0] == '-' || args[0] == '*' || args[0] == '/' || args[0] == '%') && !isNaN(args[1] as any) && !isNaN(args[2] as any)) {
    return true;
  }
  return false;
}

const args = process.argv.splice(2); // Just a helper for you to get started
console.log('Input params are', args);

let calcSolution = calculate(args);
if (calcSolution != undefined) {
  console.log(calcSolution + "\nThank you, goodbye!");
}