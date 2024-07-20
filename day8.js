//Activity 1: Template literals
//task 1:
let name = "Divya";
let age = 19;
let proffesion = "Web Developer";


let message = `The person's name is ${name} and they are ${age} years old.`;

console.log(message);

//Task 2:
console.log(`Haan G!!! This is ${name},and i am a ${proffesion}`);

console.log("Activity 1✅");

//Activity 2 : Destructuring

//Task 3:

let numbers = [10,20,30,40,50];
let[first, second] = numbers;

console.log(`The first number is ${first}`);
console.log(`The second number is${second}`);

//Task 4:
const books ={
    title : "Atomic Habits",
    author: "James Clear",
    year : 2018,
    

    };
    let {title, author} = books;
    console.log(`The title of the book is ${title} and the author is ${author}`);
 
    console.log("Activity 2✅");

    //Activity 3 :Spread and Rest operators 
     
    //Task 5:
    let arr1 = [1,2,3,4,5];
    let arr2 = [...arr1,6,7,8];
    console.log(arr2);

   
    //Task 6:

    function sumAll(...number){
        return number.reduce((accumulator,currentValue) => accumulator + currentValue,0);
    }
    let result = (sumAll(1,2,3,4,5));
    console.log(`The sum of is ${result}.`);

    console.log("Activity 3✅");

    //Activity 4: Default parameters

    //Task 7:

    function multiply(a,b=1){
        return a*b;
    }
    let res1 = multiply(5,3);
    let res2 = multiply(9);

    console.log("Task 4✅");

    //Activity 5:
    
    //Task 8:
    let fName = "Divya";
    
    let pro  = "Web Developer";

    let person = {
        fName,
        pro,
        greet(){
            console.log(`Haan G!. Namaste.. This is ${fName} and i am a ${pro}.`);
        }

    } ;
    console.log(person);
    person.greet();

    //Task 9:

    let prop1 = 'FirstName';
    let prop2 = 'lastName';

    let property = {
        [prop1] : 'Divya',
        [prop2] : 'Kumari',
        age : 19,

    };
    console.log(property);





