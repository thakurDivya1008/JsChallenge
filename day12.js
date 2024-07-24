// Day 12 Error Handling

// Basic error handling with try catch

//Task 1:
function throwError(){
    throw new Error("This is an intentionally error!");

}

try{
    throwError();
    }catch(error){
        console.log("An error occured" + error.message);
    }
    console.log("Task 1✅")

//Task 2:

function divideNumbers(num,denom){

    if(denom === 0){
        throw new error("Division by zero is not allowed.");
    }
    return num / denom;
}
try{
    let result = divideNumbers(10,0);
    console.log("result:" + result);
}catch(error){
    console.log("An error occured:" + error.message);
}
console.log("Task 2 ✅");

//Finally Block

//Task 3:
function finallyFunc(){
    try{
        console.log("Inside the try block.");
    
    throw new Error("An error occurred!");
    console.log("This message will not be logged.")
    }catch(error){
        console.log("Inside the catch block.");
        console.log("Caught an error :" + error.message);
    }finally{
        console.log("Inside the finally block.");
    }
}
finallyFunc();
console.log("Task 3✅");

//Custom Error Objects

//Task 4:

class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError(){

    throw new CustomError("This is a custom error message.");
}
try{
    throwCustomError();

}catch(error){
    if(error instanceof CustomError){
        console.log("caught a custom error:" + error.message);
    }else{
        console.log("Caught an unexpected error:" + error.message);
    }
}

console.log("Task 4✅");

//Task 5:

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function ValidationInput(input){

    if(input.trim() === ""){
        throw new ValidationError("Input cannot be empty.");
    }
    return true;
}

try{
    let userInput = "";
    ValidationInput(userInput);
    console.log("User input is valid.");
}catch(error){
    if(error instanceof ValidationError){
        console.log("Validation Error:" + error.message);
    }
    else{
        console.log("Unexpected Error:" + error.message);
    }
}
console.log("Task 5✅");

//Error Handling in promises

//Task 6:
function randomRR(){
    return new Promise((resolve,reject) =>{
        const randomNumber = Math.random();
        if(randomNumber>0.5){
        resolve("Promise resolved successfully!");
        }
        else{
            reject("Promise rejected!");
        }
    });

}

randomRR().then((message) => {
    console.log(message);
}).catch((error)=>{
    console.log("An error Occured:" + error);
});

console.log("Task 6✅");

//Task 7:
function Random(){
    return new Promise ((resolve,reject) =>{
        const randomNumber = Math.random();

        if(randomNumber < 0.5){
            resolve("Promise resolved successfully!");
        }
        else{
            reject("Promise rejected!");
        }
    });

}

async function handlePromise(){
    try{
        const message = await Random();
        console.log(message);
    }catch(error){
        console.log("An error occured:" + error);
    }
}

handlePromise();

console.log("Task 7✅")

//Graceful Error Handling in fetch 
fetch('https://invalid-url.com/data')
.then(response =>{

    if(!response.ok){
    throw new Error('network reponse was not ok');
}
return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log('There has been a problem with your fetch operation:',error);
});
console.log("Task 8✅");

//Task 9:
async function fetchData(){
    try{
        const respoe = await fetch('https://invalid-url.com/data');
        if(response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error('There has been a problem with your fetch operation:',error);
    }
}
fetchData();
console.log("Task 9✅");







