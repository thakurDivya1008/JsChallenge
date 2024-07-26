const constants = require('./constants.js');

const radius = 5;
const num1 = 8;

console.log(`Pi value is ${constants.PI}.`);
console.log(`Square of ${num1} is ${constants.square(num1)}.`);
console.log(`The area of a circle with radius ${radius} is ${constants.circle(radius)}.`)