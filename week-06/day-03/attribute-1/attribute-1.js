let image = document.querySelector("img");
console.log(image.src);
image.src = "https://images4-e.ravelrycache.com/uploads/jeykinsn/98899435/kodama1_small2.jpg";

let myA = document.getElementsByTagName('a');
myA[0].href = 'https://www.greenfoxacademy.com/';

let myButton = document.getElementsByClassName('this-one');
myButton[0].setAttribute('disabled', 'true');
myButton[0].innerHTML = 'Don\'t click me';