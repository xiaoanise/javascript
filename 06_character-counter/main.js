'use strict';

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', function () {
  console.log('keyUp');
  console.log(inputText.value);
  console.log(inputText.value.length); 
  
  let str = inputText.value;
  let num = 10 - str.length;
  console.log(num);
  
  const characterCount = document.getElementById('characterCount');
  characterCount.textContent = num;
}, false);
