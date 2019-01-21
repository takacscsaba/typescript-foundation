const myCandies = document.getElementsByClassName('candies');
const myLollypop = document.getElementsByClassName('lollypops');
const mySpeed = document.getElementsByClassName('speed');
const createCandyBtn = document.getElementsByClassName('create-candies');
const buyLollypopsBtn = document.getElementsByClassName('buy-lollypops');
const candyMachineBtn = document.getElementsByClassName('candy-machine');
const speedResetBtn = document.getElementsByClassName('speed-resetter');

let candyCounter = 0;
let lollypopCounter = 3;
let speed = 0;

let speedAcc = setInterval(() => {
    candyCounter += speed;
    myCandies[0].textContent = candyCounter;
  }, 1000);

createCandyBtn[0].addEventListener('click', () => {
  candyCounter += 100;
  myCandies[0].textContent = candyCounter;
});

buyLollypopsBtn[0].addEventListener('click', () => {
  if (candyCounter >= 100) {
    lollypopCounter++;
    candyCounter -= 100;
    isFirst = true;

    myCandies[0].textContent = candyCounter;
    myLollypop[0].textContent += '🍭';

    lollypopCounter == 10 ? speedAcc : 0;
    lollypopCounter % 10 == 0 ? speed++ : 0;
    mySpeed[0].textContent = speed;
  }
});

candyMachineBtn[0].addEventListener('click', () => {
  speed *= 10;
  mySpeed[0].textContent = speed;
  myCandies[0].textContent = candyCounter;
});

speedResetBtn[0].addEventListener('click', () => {
  speed = parseInt(lollypopCounter / 10);
  mySpeed[0].textContent = speed;
});