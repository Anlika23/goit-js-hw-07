'use strict';

   
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  const name = event.target.value.trim();
  
  if (name === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = name;
  }
});