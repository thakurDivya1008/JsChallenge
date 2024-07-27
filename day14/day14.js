

//Task 1:
class person {
    constructor(firstName,lastName, age){
        this.firstName =firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet(){
        return`Hello!! Myself ${this.firstName} ${this.lastName}`;
    }

    //Task 2:
    updateAge(newAge){
        this.age = newAge;
        console.log(`Updated age is ${this.age}`);
    }

    //Task 5:
    static genericMessage(){
        return "This is a generic message from the person class.";
    }

    //Task 7:
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    //Task 8:

    set fullName(name){
        const [firstName,lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }


}
const personInstance = new person('Divya','Kumari',19);
console.log(personInstance.greet());

//Task 2:
personInstance.updateAge(20);

//Task 3:
 class student extends person{

    static studentCount = 0;
    constructor(firstName,lastName,age,studentID){
        super(firstName,lastName,age);
        this.studentID = studentID;
        student.studentCount++;
    }
    getstudentID(){
        return `Student ID is ${this.studentID}`;
    }

    //Task 4:
    greet(){
        return `Hello👋, my name is ${this.firstName} ${this.lastName},I am ${this.age} years old, and my student ID is ${this.studentID}`;
    }
    static getStudentCount(){
        return `Total nuumber of students: ${student.studentCount}`;
    }
 }

const studentInstance = new student('Divya','Kumari',20,'cs-15');

console.log(studentInstance.getstudentID());

//Task 4:
console.log(studentInstance.greet());

//Task 5:
console.log(person.genericMessage());

//Task 6:
const student1 = new student('Divya',20,'cs-15');
const student2 = new student('Sweety',20,'com-67');

console.log(student.getStudentCount());

//Task 7:
console.log(personInstance.fullName);

//Task 8:
personInstance.fullName = 'Diya Thakur';

console.log(personInstance.fullName);

//Task 9 & 10:

class Account {
    #balance;

    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`Deposited: $${amount}.new balanace: $${this.#balance}`);
        }
        else{
            console.log('Deposit amount must be positive.')
        }
    }

    withDraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance -= amount;
            console.log(`WithDraw:$${amount}. new balanace: $${this.#balance}`);
        }

        else{
            console.log('Invalid withdrawal amount or insufficient funds.');
        }
    }

    getBalance(){
        return this.#balance;
    }

}
const myAccount = new Account(100000);
myAccount.deposit(5000);

myAccount.withDraw(2000);

console.log(`Current balance :$${myAccount.getBalance()}`);









