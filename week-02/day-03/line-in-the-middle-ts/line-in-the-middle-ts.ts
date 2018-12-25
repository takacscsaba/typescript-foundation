'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw a line
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(canvas.width/2,canvas.height/2);
ctx.lineTo(0,200);
ctx.stroke();

ctx.strokeStyle="green";
ctx.beginPath();
ctx.moveTo(canvas.width/2,canvas.height/2);
ctx.lineTo(300, 0);
ctx.stroke();