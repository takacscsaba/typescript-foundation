let king = document.getElementById('b325');
console.log(king);

let businessLamp = document.getElementsByClassName('asteroid big');
console.log('businessLamp', businessLamp);

let container = document.getElementsByClassName('container');
let conceitedKing = container[0].querySelectorAll('section.container > div')
conceitedKing.forEach(element => alert(element.textContent));

let noBusiness = document.querySelectorAll("div")
noBusiness.forEach(element => console.log(element));