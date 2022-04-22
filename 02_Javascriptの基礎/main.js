'use strict';
console.log('Hello World!');

let myName = 'Naka';
let num = 123;
let dec = 123.456;

console.log(myName);
console.log(num);
console.log(dec);

let ans = 1 + 2;
console.log(ans);

let i = 2;
let j = 3;
let ans1 = Math.pow(i, j);
console.log(ans1);

let firstName = 'An';
let message2 = `Hi ${firstName}
welcome`;
console.log(message2);

let temperature = 20;
if (temperature > 28) {
  console.log ('cold wind!');
} else {
  console.log('no wind.')
}

let x = 100;

if (x > 90) {
  console.log ('>90, A')
} else if (x >80) {
  console.log ('>80, B')
} else if (x >60) {
  console.log ('>60, C')
} else {
  console.log ('<60, D')
}

let weight = 60;
let height = 1.7;
let BMI = weight / (height * height);
console.log(BMI);

if (BMI >= 25){
  console.log ('fat');
} else if (BMI >= 18.5) {
  console.log ('normal');
} else {
  console.log ('slim');
}

console.log (3 / 1);
console.log (3 % 1);
