'use strict';

let matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

for (let i = 0; i < matrix.length; i++) {
    // matrix[i][matrix.length - i - 1] = 1;
    matrix[i][i] = 1;
}

for (let row = 0; row < matrix.length; row++) {
        let rowJoined = matrix[row].join(' ');
        console.log(rowJoined);
}