'use strict';

let num = 0;

function updateCounter (n) {
  const counter = document.getElementById('counter');
  counter.textContent = n;
}

const plusOne = document.getElementById('plusone');
plusOne.addEventListener('click', function() {
    num++;
    // const counter = document.getElementById('counter');
    // counter.textContent = num;
    updateCounter(num);
}, false)

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
  num = 0;
  // const counter = document.getElementById('counter');
  // counter.textContent = num;
  updateCounter(num);
})
