//Task 1 :

const str = "JavaScript is great. I love JavaScript! javascript is versatile.";
const regex = /javascript/gi; 

const matches = str.match(regex);
console.log(matches);

//Task 2:

const str1 = "My phone number is 123-456-7890 and my zip code is 98765.";
const regex1 = /\d+/g; 

const matches1 = str1.match(regex1);
console.log(matches1);