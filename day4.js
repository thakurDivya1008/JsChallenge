//Activity 1: For loop

//task 1: Write a program to print a number from 1 to 10.
console.log("Numbers From 1 to 10 is as:- ")
for(let i = 1;i<=10;i++){
    console.log(i);
}
console.log("Task 1 ✅ ");

//Task 2: Write a program to print the multiplication table of 5 using a for loop

console.log("The multiplication table of 5 is as: ")
for(let i = 1;i<=10;i++){
    console.log(i*5);
}
console.log("Task 2 ✅");

//Activity 2: While loop
//Task 3: write a program to calculate the sum of numbers from 1 to 10 using a while loop

let sum = 0;
let i = 1;
while(i<=10){
    sum += i;
    i++;
}
console.log(`The sum of number from 1 to 10 is as :- ${sum}`);

console.log("Task 3 ✅");

//Task 4: Write a program to print 10 to 1 using a while loop
console.log("Numbers from 10 to 1 is as :-");
let num = 10;
while(num>0){
    console.log(num);
    num--;
}
console.log("Task 4 ✅");

//Activity 5 : Do... While

// Task 5 : Write a program to print from 1 to 5 using Do While loop

console.log("Numbers from 1 to 5 is as:-")
let a = 1;
do{
    console.log(a);
    a++;
}while(a<=5);

console.log("Task 5✅");

// Task 6 :Write a program to calculate factorial of a number using do while loop
console.log("Factorial of 10 is as :")
let b = 10;
let fact = 1;
do{
    fact = fact*b;
    b--;
}
while(b>0);

console.log(fact);
console.log("Task 6 ✅");

//Write a program to print a pattern using nested for loop

console.log("Printing pattern :")
let c = "";
for(let i= 0;i<=4;i++){

    for(let j = 0;j<=i;j++){

        c +="* ";
    }
    c += "\n"
}
console.log(c);

console.log("Task 7✅");

// Activity 5 : Loop control statements
//Task 8 : Write a program to print numbers from 1 to 10,but skip number 5 using continue statement

for(let i = 1;i<=10;i++){
    if(i === 5) continue;

    console.log(i);
}
console.log("Task 8 ✅");

//Task 9: Write a program to print numbers from 1 to 10 ,but stop the loop when the number is 7 using break statement.

for(let i = 1;i<=10;i++){
    if(i===7) break;
    console.log(i);
}
console.log("Task 9 ✅");


console.log("END(❁´◡`❁)");






