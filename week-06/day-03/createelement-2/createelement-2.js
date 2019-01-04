const asteroidList = document.querySelector('ul.asteroids');

asteroidList.removeChild(document.querySelector('li'));

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

planetData.forEach(element => {
  let newAsteroid = document.createElement('li');
  newAsteroid.innerHTML = element.content;
  newAsteroid.setAttribute('class', element.category);

  element.asteroid ? asteroidList.appendChild(newAsteroid) : 0;
});