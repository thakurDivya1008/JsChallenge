// Activity 1: Function Declaration

//Task 1:Write a function to check a number is even or odd 
function evenOdd(a){

    if(a%2==0){
        console.log(a + " is EVEN number.");
    }
    else{
        console.log(a + " is ODD number");
    }

}
evenOdd(2024);
evenOdd(2025);
console.log("Task 1 ✅");

//Task 2:Write a function to calculate square of a number

function square(num){
    console.log(`Square of ${num} is ${num*num}`);
}

square(89);
console.log("Task 2 ✅");

//Activity 2: Function expression
//Task 3: Write a function expression to find the maximum of two numbers

function maximum(num1,num2){
    if(num1>num2){
        console.log(num1 + " is greater than " + num2);
    }
    else{
        console.log(num2 + " is greater than " + num1);
    }
}

maximum(8,3);
maximum(67,98);
console.log("Task 3 ✅");

// Task 4:Write a function expression to concatenate two string
function concatenate(str1,str2) {
    return str1.concat(str2);
}

let str1 = "Hello ";
let str2 = "What's up";

console.log(concatenate(str1,str2));
console.log("Task 4 ✅");

// Activity 3: Arrow function
//Task 5: Write a arrow function to calculate the sum of two number

const Add = (num1,num2) => num1 + num2;
let num1 = 78, num2 = 76;

console.log(`${num1} + ${num2} = ${Add(num1,num2)}`);

console.log("Task 5✅");

// Task 6: Write an arrow function to check if a string contains a specific character

const specificChar = (str,char) => {
    return str.includes(char);
};

let s = "Darbhanga";

console.log(`Is D present ?  ${specificChar(s,"D")}`);
console.log("Task 6✅");

//Activity 4: Function parameters and default values

//Task 7 : Write a function that takes two parameters and return their product.Provide a default value for 2nd parameter

function product(a,b=5){
    return a*b;
}
console.log(product(5,3));
console.log(product(5));

console.log("Task 7 ✅");

//Task 8 : Write a function that takes a person name and age and return and return a greeting message

const person = (p_name,p_age = 20) => {
    console.log(`Hello ${p_name} !!! Are you now ${p_age}?`);
}
console.log(person("Ayushi"));
console.log(person("Tripta" , 45));

console.log("Task 8 ✅");

// Activity 5: Higher order functions

//Task 9: Write a Higher Order function to that takes a function and a number, and call the function that many times..

function repeatFunction(func,num){
    for(let i = 0; i<num; i++){
        func();
    }
}

    function sayHello(){
        console.log("Hello!");

    }

    repeatFunction(sayHello,5);
    console.log("Task 9✅");

    // Task 10 : Write a higher order function that takes two functions and a value, and then applies the seccond function to the result.

    function applyFunction(func1,func2,value){
        const result1 = func1(value);
        const result2 = func2(result1);

        return result2;
    }
    function func1(x){
        return x*x;
    }

    function func2(y){
        return y*y;
    }

    const inVal = 5;
    const fVal = applyFunction(func1,func2,inVal);

    console.log(fVal);

    console.log("Task 10 ✅");






