const _ = require('lodash');
const array =  [1,2,3,4,5,6,7];

const shuffledArray = _.shuffle(array);
console.log(`Original array : ${array}`);
console.log(`Shuffled array :${shuffledArray}`);