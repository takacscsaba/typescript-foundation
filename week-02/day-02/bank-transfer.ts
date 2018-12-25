'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function getNameAndBalance(accountNumber: number){
  if (accounts.some(x => x.accountNumber === accountNumber)) {
    let nameAndBalanceArr: any[] = [];
    accounts.forEach(x => x.accountNumber === accountNumber ? nameAndBalanceArr.push(x.clientName, x.balance) : 0);
    return nameAndBalanceArr;
  }
}

let nameAndBalance: any[] = getNameAndBalance(11234543);
if (nameAndBalance != undefined)
  console.log(nameAndBalance);
else
  console.log("404 - account not found");

function transferAmount(arr: any[], accountNumberFrom: number, accountNumberTo: number, transferAmount: number) {
  if (arr.some(x => x.accountNumber === accountNumberFrom) && arr.some(x => x.accountNumber === accountNumberTo)) {
    arr.forEach(x => x.accountNumber === accountNumberFrom ? x.balance -= transferAmount : 0);
    arr.forEach(x => x.accountNumber === accountNumberTo ? x.balance += transferAmount : 0);
  } else {
    console.log("404 - account not found");
  }
}

transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};