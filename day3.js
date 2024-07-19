// Activity 1 : If-Else Statement

// Task 1 : write a program to check if a number is positive , negative or zero.
let num = 22;

if(num>0){
    console.log(`Number is Positive`);
}
else if(num<0){
    console.log(`Number is negative`);
}
else{
    console.log(`Number is Zero`);
}

//Task 2 : Write a Program to check if a person is eligible to vote(age>=18) 

let age = 20;

if(age>=18){
    console.log("You are eligible to Vote");
}
else{
    console.log("You are not eligible to Vote");
}

//Activity 3 : nested If-Else statements
// Write a program to find the largest of three numbers

let num1 = 12, num2 = 15, num3 = 9;
let largest;

if(num1 >= num2 && num1 >= num3){
    largest = num1;

}
else if(num2>=num1 && num2 >= num3){
    largest = num2;
}
else{
    largest = num3;
}
console.log(`Largest number among all three numbers is :${largest}`);

//Activity 3: Switch case
// Write a program that uses a switch case to determine the day of the week based on the number (1-7)

let dayNo = 7;

switch(dayNo){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thrusday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday"); 
    break;

}


//Write  a program that uses a switch case to assign a grade (A,B,C,D,F) based on a score and log the grade.

let marks = 93;
let grade;

switch(true){
    case(marks >= 90): grade = 'A';
    break;
    case(marks >= 80 && marks<=90): grade = 'B';
    break;
    case(marks >= 70 && marks <= 80): grade = 'C';
    break;
    case(marks >= 60 && marks <= 70): grade = 'D';
    break;
    case(marks<60): grade = 'E';
    break;
}
console.log(grade);

//Activity 4 : Conditional (Ternary Operator)
// Write a program that uses the ternary operator to check if a number is even or odd
let a = 8;

let ans = (a%2 === 0)?"Even":"Odd";
console.log(ans);

//Activity 5 : Combining Conditions
//Write a program to check if a year is a leap year using multiple conditions(division by 4 but not 100 unless also divisible by 400)

let year = 2024;

if(year%4 == 0 && year%100 != 0){
    console.log("Leap year");
}
else if(year%400 == 0 && year%100 == 0){
    console.log("Leap year");
}else{
    console.log("Not a leap year");
}
