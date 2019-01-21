const myNav = document.querySelector('nav');
const imgSelector = document.querySelector('.img-inspector');
let moveYNum = 0;
let moveXNum = 0;
let zoomNum = 100;

myNav.addEventListener('click', (e) => {
  const eventDirection = e.target.dataset.direction;
  const eventAction = e.target.dataset.action;

  if (eventDirection === "up" && eventAction == "move") {
    moveYNum += 10;
    imgSelector.style.backgroundPositionY = `${moveYNum}px`;
  }
  else if (eventDirection === "down" && eventAction == "move") {
    moveYNum -= 10;
    imgSelector.style.backgroundPositionY = `${moveYNum}px`;
  }
  else if (eventDirection === "left" && eventAction == "move") {
    moveXNum += 10;
    imgSelector.style.backgroundPositionX = `${moveXNum}px`;
  }
  else if (eventDirection === "right" && eventAction == "move") {
    moveXNum -= 10;
    imgSelector.style.backgroundPositionX = `${moveXNum}px`;
  }
  else if (eventDirection === "in" && eventAction == "zoom") {
    zoomNum += 20;
    imgSelector.style.backgroundSize = `${zoomNum}%`;
  }
  else if (eventDirection === "out" && eventAction == "zoom") {
    zoomNum -= 20;
    imgSelector.style.backgroundSize = `${zoomNum}%`;
  }
});
