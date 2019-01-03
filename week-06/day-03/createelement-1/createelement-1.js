const asteroidList = document.querySelector('ul.asteroids');

const newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

const lamplighter = document.createElement('li');
lamplighter.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid);

let myContainer = document.querySelector('.container');

let heading = document.createElement('heading');
heading.innerText = 'I can add elements to the DOM!';
myContainer.appendChild(heading);

let image = document.createElement('img');
image.setAttribute('src', "https://images4-e.ravelrycache.com/uploads/jeykinsn/98899435/kodama1_small2.jpg")
myContainer.appendChild(image);