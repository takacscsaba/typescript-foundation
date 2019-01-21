const btn = document.querySelector('button');
const myBody = document.querySelector('body');
let counter = 0; 

btn.addEventListener('click', () => {
  if (counter == 0) {
    setTimeout(() => {
      let myP = document.createElement('p');
      myP.textContent = `5 seconds elapsed and clicked ${counter} times`;

      myBody.appendChild(myP);
    }, 5000);
  }
  counter ++;
});