const h1LastPressedKey = document.querySelector('h1');

document.onkeyup = function(e) {
  console.log(e);
  h1LastPressedKey.textContent = `Last pressed key code is: ${e.key}.`
}