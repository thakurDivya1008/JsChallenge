

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

//Task 1 :

let key = 'myString';
let value = 'Hello, this is a stored string!';
localStorage.setItem(key, value);
let retrievedValue = localStorage.getItem(key);
console.log(retrievedValue);

console.log("Task 1 ✅");

//Task 2:
let myObject = {
    name: 'Divya Kumari',
    age: 20,
    city: 'Darbhanga'
};

let k = 'myObject';
localStorage.setItem(key, JSON.stringify(myObject));

let retrievedVal = localStorage.getItem(k);

let parsedObject = JSON.parse(retrievedVal);


console.log(parsedObject);
console.log("Task 2✅");


//Task 3:
document.addEventListener('DOMContentLoaded', function() {
    
    let savedName = localStorage.getItem('name');
    let savedEmail = localStorage.getItem('email');
    
    if (savedName && savedEmail) {
        document.getElementById('savedData').textContent = `Name: ${savedName}, Email: ${savedEmail}`;
    } else {
        document.getElementById('savedData').textContent = 'No user information saved.';
    }
    
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        

        document.getElementById('savedData').textContent = `Name: ${name}, Email: ${email}`;
    });
});

//Task 4:


function logLocalStorageContent() {
    console.log('Current localStorage content:');
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}


localStorage.setItem('name', 'John Doe');
localStorage.setItem('email', 'john.doe@example.com');


console.log('Before removal:');
logLocalStorageContent();


function removeItemAndLog() {
    
    localStorage.removeItem('name');

    
    console.log('After removal:');
    logLocalStorageContent();
}


removeItemAndLog();

//Task 5:

let keyis = 'myString';
let val = 'Hello, this is a stored string in sessionStorage!';
sessionStorage.setItem(keyis, val);

let retrieveValue = sessionStorage.getItem(keyis);

console.log(retrieveValue);


//Task 6:


let Object = {
    name: 'Divya Kumari',
    age: 20,
    city:'Bihar'
};

let key1 = 'myObject';
sessionStorage.setItem(key1, JSON.stringify(Object));
let retrieveVal = sessionStorage.getItem(key);
let parsedObj = JSON.parse(retrieveVal);
console.log(parsedObj);

//Task 7:

document.addEventListener('DOMContentLoaded', function() {
    
    let savedName = sessionStorage.getItem('name');
    let savedEmail = sessionStorage.getItem('email');
    
    if (savedName && savedEmail) {
        document.getElementById('savedData').textContent = `Name: ${savedName}, Email: ${savedEmail}`;
    } else {
        document.getElementById('savedData').textContent = 'No user information saved.';
    }
    
    
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        
        
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        
        
        document.getElementById('savedData').textContent = `Name: ${name}, Email: ${email}`;
    });
});

//Task 8:


function logSessionStorageContent() {
    console.log('Current sessionStorage content:');
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        console.log(`${key}: ${sessionStorage.getItem(key)}`);
    }
}

sessionStorage.setItem('name', 'Diya');
sessionStorage.setItem('email', 'Diya.thakur@example.com');

console.log('Before removal:');
logSessionStorageContent();

function removeItemAndLog(key) {
    sessionStorage.removeItem(key);
    console.log('After removal:');
    logSessionStorageContent();
}
removeItemAndLog('name');

//Task 9:
function saveAndLog(key, value) {
    
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    let localStorageValue = localStorage.getItem(key);
    let sessionStorageValue = sessionStorage.getItem(key);


    console.log(`Value in localStorage: ${localStorageValue}`);
    console.log(`Value in sessionStorage: ${sessionStorageValue}`);
}


saveAndLog('exampleKey', 'exampleValue');

//Task 10 :
function clearStorageAndVerify() {
    localStorage.clear();
    sessionStorage.clear();


    function logStorageContent(storageName, storage) {
        console.log(`${storageName} content:`);
        if (storage.length === 0) {
            console.log('Storage is empty.');
        } else {
            for (let i = 0; i < storage.length; i++) {
                let key = storage.key(i);
                console.log(`${key}: ${storage.getItem(key)}`);
            }
        }
    }

    logStorageContent('localStorage', localStorage);
    logStorageContent('sessionStorage', sessionStorage);
}

clearStorageAndVerify();




