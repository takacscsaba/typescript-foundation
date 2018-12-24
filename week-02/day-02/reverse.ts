'use strict';

function reverse(str: string): string {
    let reversedString: string = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }
    return reversedString;
}

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
console.log(reverse(reversed));

export = reverse;