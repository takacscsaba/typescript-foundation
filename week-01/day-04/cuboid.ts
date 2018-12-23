'use strict';

const cubeHeight: number = 3;
const cubeLength: number = 11;
const cubeDepth: number = 2;

const cubeSurface = ((cubeHeight * cubeLength) + (cubeHeight * cubeDepth) + (cubeLength * cubeDepth)) * 2;
const cubeVolume = cubeHeight * cubeLength * cubeDepth;

console.log(`Surface Area: ${cubeSurface}`);
console.log(`Volume: ${cubeVolume}`);