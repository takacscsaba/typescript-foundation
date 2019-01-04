const button = document.querySelector('button');
let myBody = document.getElementsByTagName('body');

button.onclick = () => {
  if (myBody[0].classList.contains('party')) {
    myBody[0].classList.remove('party');
  } else {
    myBody[0].classList.add('party');
  }
};