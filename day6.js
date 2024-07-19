// Activity 1 : Array Creation and Access

//Task 1: 
const num = [1,2,3,4,5]
console.log(num);
//Task 2:
const firstElement = num[0];
const lastElement = num[num.length - 1];

console.log(`Fist element and last element of the array is : ${firstElement} , ${lastElement}`);

console.log("Activity 1 ✅");

// Activity 2 : Array methods


const arr = [1,2,3,4,5,6,7];

arr.push(18);
console.log(`Array after push : ${arr}`);

arr.pop(5);
console.log(`Array after pop ${arr}`);

arr.shift(0);
console.log(arr);

arr.unshift(50);
console.log(arr);
console.log("Activity 2 ✅")

//Activity 3 :  Array Methods(Intermediate)

const originalArray = [1,2,3,4,5];
let doubleArray = originalArray.map(function(num){
    return num*2;
});
console.log(doubleArray);

let evenArr = originalArray.filter(function(num){
    return num % 2 == 0;
});
console.log(evenArr);

let sum = originalArray.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
},0);

console.log(sum);

console.log("ACtivity 3 ✅");

//Activity 4 : Array itration

let array = [1,2,3,4,5,6,7,8,9,10];

console.log("The elements of array is as :-");

for(let i = 0;i<array.length;i++){
    console.log(array[i]);
}

const language = ["HTML","CSS","JS","React Js"];

language.forEach(function(item){
    console.log(item);
});

console.log("Activity 4 ✅");

// Activity 5 : Multi-dimensional Array

const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9]
            ];
     console.log(matrix);
     
     let ele = matrix[2][1];
     console.log(ele);

     console.log("Activity 5 ✅");

