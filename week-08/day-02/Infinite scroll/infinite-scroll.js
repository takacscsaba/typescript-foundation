const scrollTreshold = 300;

const randomForColor = () => {
  return Math.floor(Math.random() * 255);
};

const randomColor = () => {
  return `rgb(${randomForColor()}, ${randomForColor()}, ${randomForColor()})`;
};

function addDiv() {
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = randomColor();
    document.body.appendChild(newDiv);
};

function addDivs() {
  for (let i = 0; i < Math.ceil(Math.random() * 4) + 4; i++) {
    addDiv();
  }
};

window.onload = addDivs();

window.addEventListener('scroll', () => {
  addDiv();
});