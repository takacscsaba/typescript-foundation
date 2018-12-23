'use strict';

let typo: string = 'Chinchill';

function appendAFunc(str: string): string {
    // return str + 'a';
    return str.concat('a');
}

console.log(appendAFunc(typo));