let myPs = document.querySelectorAll('p');
if (myPs[3].classList.contains('dolphin')) {
  myPs[0].innerHTML = 'pear';
}

if (myPs[0].classList.contains('apple')) {
  myPs.forEach(p => p.innerHTML == 'cat' ? p.innerHTML = 'dog': 0);
}

myPs.forEach(p => p.classList.contains('apple') ? p.classList.add('red') : 0);

myPs.forEach(p => p.classList.contains('balloon') ? p.classList.remove('balloon') : 0);