const btn = document.querySelector('button');

btn.addEventListener('click', logDate);

function logDate() {
  console.log(Date());
  btn.removeEventListener('click', logDate);
}