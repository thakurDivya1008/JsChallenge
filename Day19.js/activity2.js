//Task 3:
const str = "Javascript is a programming language.Many  developers use Javascript.";
const regex = /\b[A-Z][a-z]*\b/g; 

const matches = str.match(regex);
console.log(matches);

//Task 4:
const string = "My phone number is 123-456-7890 and my zip code is 98765.";
const regex1 = /\d+/g; // '\d' for digit, '+' for one or more digits, 'g' for global match

const matches1 = string.match(regex1);
console.log(matches1);


