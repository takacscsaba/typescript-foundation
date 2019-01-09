let pageCounter = 1;
const btn = document.getElementById('btn');
const animalContainer = document.getElementById('animal-info');

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

  ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
    renderHTML(ourData);
  }
  ourRequest.send();
  pageCounter++;
  // pageCounter > 3 ? btn.classList.add("hide-me") : 0;
});

function renderHTML(data) {
  let HTMLString = '';

  data.forEach(data => HTMLString += "<p>" + data.name + ' ' + data.species);

  animalContainer.insertAdjacentHTML('beforeend', HTMLString);
}