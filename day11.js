
//Promises and async/await

//Activity 1 : Understanding Promises

//Task 1:
const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("This is the resolved message after 2 seconds");
    },2000);
});
myPromise.then((message) => {
    console.log(message);
});

//Task 2:
const firstPromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        reject(new Error("This is the error message after 2 seconds"));
    },2000);
});
firstPromise.catch((error) => {
    console.error(error.message);
});

//Activity 2 : Chaining Promises

//Task 3:
const fetchData1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Fetching data from server 1..");

        resolve("Data from server 1");
    },1000);
});

const fetchData2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Fetching data from server 2..");

        resolve("Data from server 2");
    },2000);
});

const fetchData3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Fetching data from server 3..");

        resolve("Data from server 3");
    },3000);
});

fetchData1.then((data1)=> {
    console.log(data1);
    return fetchData2;
})
.then((data2) => {
    console.log(data2);
    return fetchData3;
})
.then((data3) => {
    console.log(data3);
})
.catch((error) => {
    console.error("An error occurred",error);
});

//Activity 3 : Using Async/Await

//Task 4:
async function logResolvedValue(){
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is the resolved message");
        },2000);
    });

    try{
        const resolvedValue = await prom;
        console.log(resolvedValue);
    }
    catch(error){
        console.error("An error occurred :",error);
    }
}
logResolvedValue();

//Task 5 :
async function rejectedPromises(){
    const mis = new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject(new Error("This is the error message after 2 seconds"));
        },2000);
    });

    try{
        const resolvedValue = await mis;
        console.log(resolvedValue);
    }catch(error){
        console.error("An error occurred :",error.message);
    }
}

rejectedPromises();

// Activity 4 : Fetching data from an API

//Task 6 :
const url = 'https://api.github.com/users/thakurDivya1008';
fetch(url).then (response => {

    if(!response.ok){
        throw new error (`HTTP error! Status: ${response.status}`);
    }
    return response.json();

}).then(data => {
    console.log(data);
}).catch(error => {
    console.error('An error occured:',error.message);
});

//Task 7 :
 async function fetchData(){
    const url = 'https://api.github.com/users/thakurDivya1008';

    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new error (`HTTP error! Status: ${reponse.status}`);
        }

        const data  = await response.json();
        console.log(data);
    }catch(error){
        console.error('An error occurred :',error.message);
    }
 }

 fetchData();

 //Activity 5 : COncurrent Promises

 //Task 8:
 
 const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("result from promise 1"),1000);
 }); 

 const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("result from promise 2"),2000);
 });
 const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("result from promise 3"),3000);
 });

 Promise.all([promise1, promise2,promise3]).then((results) => {
    console.log("All promises resolved:");

    results.forEach((result,index) => {
        console.log(`Promise ${index + 1}: ${result}`);
    });
 }).catch((error) => {
    console.error("An error occured :",error.message);
 });

 //Task 9 :

 const promise4 = new Promise((resolve) => {
    setTimeout(() => resolve("Result from promise 3"),3000);
 });

 const promise5 = new Promise((resolve) => {
    setTimeout(() => resolve("Result from promise 5"),2000);
 });

 const promise6 = new Promise((resolve) => {
    setTimeout(() => resolve("Result from promise 6"),4000);
 });

 Promise.race([promise4,promise5,promise6]).then((result) => {
    console.log("First promise resolved with :",result);
 })
 .catch((error) => {
    console.error("An error occured",error.message);
 });
