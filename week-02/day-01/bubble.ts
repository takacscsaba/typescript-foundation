'use strict';

function bubble(list: number[], desc?: boolean) {
    list.sort((a, b) => a - b);
    if (desc) {
        return list.reverse();
    }
    return list;
}

console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(bubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]