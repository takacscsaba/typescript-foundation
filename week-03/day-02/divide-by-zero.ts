'use strict';

function divider(num: number) {
  if (num === 0) {
    throw new TypeError('fail')
  } 
  console.log(10 / num);
}

try {
    console.log(divider(0));
} catch (err) {
    console.log(err.message);
}