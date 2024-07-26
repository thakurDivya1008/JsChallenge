//Task 1:

function add (a,b){
    return a+b;
}
module.exports = add;

//Task 2
import person from "./activity1.js";

console.log(person.name);
person.greet();