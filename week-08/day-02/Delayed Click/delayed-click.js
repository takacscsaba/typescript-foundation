const btn = document.querySelector('button');
const myBody = document.querySelector('body');
let counter = 2; 

btn.addEventListener('click', () => {
  setInterval(() => {
    let myP = document.createElement('p');
    myP.textContent = `${counter} seconds ellapsed`;

    myBody.appendChild(myP);
    counter += 2;
  }, 2000);
});