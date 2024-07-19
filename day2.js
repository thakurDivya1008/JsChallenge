// Day 2 :- Operators

//Activity 1: Arithmetic Operators

let num1 = 10;
let num2 = 20;


console.log(`Addition : ${num1 + num2}`);
console.log(`Subtract : ${num1 - num2}`);
console.log(`Multiply : ${num1*num2}`);
console.log(`Divide : ${num1/num2}`);
console.log(`Remainder : ${num1%num2}`);

//Activity 2: Assignment Operators

let a = 98;
a += 10;
console.log(`Add Numbers : ${a}`);

let b = 118;
b -= 10;
console.log(`Subtract Number :${a}`);

// Activity 3 : Comparision Operators

let x = 45;
let y = 72;
let z = 45;

console.log(x>y);
console.log(x<y);

console.log(x>=y);
console.log(x<=z);

console.log(x==y);
console.log(x===z);

//Activity 4 :Logical Operators

let l = 11;
let m = 6;
// '&&' Operator
if(l > 10 && b < 10){
    console.log("Both conditions are true: l is greater than a and b is less than 10");
}
else{
    console.log("One or both conditions are false.")
}

// '||' Operator 

if(l%2 == 0 || m%2 == 0){
    console.log("One of them is Even no.");
}
else{
    console.log("Both of them is odd number.")
}

// '!' Operator

if(!(l===10) && !(b===20)){
    console.log("Both conditions are true: l is not 10 and m is not 20");
}
else{
    console.log("one or both Conditions are false");
}




// Activity 5: Ternary Operator
const result = (l>m)? "l is greater than m": "l is not greater than m";

console.log(result);





