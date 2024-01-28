'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorButton = document.querySelector('.change-color');
const bodyElement = document.querySelector('body');
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', function() {
  const randomHexColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomHexColor;
  colorSpan.textContent = randomHexColor;
});