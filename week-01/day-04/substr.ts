'use strict';

function substr(str: string, keyword: string) : number {
    if (str.includes(keyword)) {
        return str.indexOf(keyword);
    } else {
        return -1;
    }
}

console.log(substr("this is what I'm searching in", "searching"));
// should print: `17`
console.log(substr("this is what I'm searching in", "not"));
// should print: `-1`