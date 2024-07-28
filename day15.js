
//Task 1:
function outerFunction(){

    let outer = "I'm from the outer function";

    function innerFunc(){
        return outer;
    }

    return innerFunc;
}

const myInnerFunction = outerFunction();

console.log(myInnerFunction());

//Task 2:
function createCounter(){
    let cnt = 0;
    return function(){
        return cnt++;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


//Task 3:
function idGenerator(){
    let lastId = 0;
   return function (){
        lastId++;
        return lastId;
    };
    
}
const uniqueId = idGenerator();

console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());

//Task 4:

function greet(name){
    return function (){
        return `Hello, ${name}!`;
    };
}

const user = greet('Divya');

console.log(user());

//Task 5:
function functionArray(){

    const functions = [];

    for(let i = 0;i<5;i++){
        functions[i] = (function(index){
            return function(){
                console.log(index);
            };
        })(i);
    }

    return functions;

}

const array = functionArray();

array[0]();
array[1]();
array[2]();
array[3]();
array[4]();

//Task 6:

function itemManager(){

    let items = [];
    function addItem(item){
        items.push(item);
        console.log(`Item "${item}" added.`);
    }

    function removeItem(item){

        const index = items.indexOf(item);

        if(index !== -1){
            items.splice(index,1);
            console.log(`Item "${item}" removed.`);
        }
        else{
            console.log(`Item "${item}" not found.`);
        }
    }

    function listItems(){
        console.log('Items:',items);
    }

    return {
        addItem,
        removeItem,
        listItems
    };
}

const it = itemManager();

it.addItem('Apple');
it.addItem('Banana');
it.listItems();
it.removeItem('Apple');

//Task 7:
function memoize(fn){
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args);

        if(cache[key]){
            console.log(`Fetching result from cache for args: ${key}`);

            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;

        console.log(`computing result for args: ${key}`);

        return result;
    };
}

function slowFunction(x,y){
    return x+y;
}

const memoizeFunc = memoize(slowFunction);
console.log(memoizeFunc(3,4));
console.log(memoizeFunc(5,4));

//Task 8:

function factorial(n){
    let ans = 1;
    if(n==0) return 1;

    for(let i = 2;i<=n;i++) ans = ans*i;
    return ans;
}

const memoizedFact = memoize(factorial);
console.log(memoizedFact(5));
console.log(memoizedFact(5));
