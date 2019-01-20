const myList = document.querySelector('ul');
const btn = document.querySelector('button');
const myResult = document.getElementsByClassName('result');

btn.addEventListener('click', (e) => {
  myResult[0].textContent = myList.childElementCount;
});