//Task 1:
function factorial(n){
    if(n==0) return 1;
    return n*factorial(n-1);
}
console.log("Factorial is :",factorial(5));

//Task 2:
function fibonacci(n){
    if(n<=1) return n;
    return fibonacci(n-1)+fibonacci(n-2);

}

console.log(fibonacci(10));

//Task 3:

function sumArray(arr){

    if(arr.length === 0){
        return 0;
    }

    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([10,20,30,40,50]));

//Task 4:
function findMax(arr){

    if(arr.length === 1){
        return arr[0];
    }
    const max = findMax(arr.slice(1));

    return arr[0]>max ? arr[0] : max;
}

console.log(findMax([1,2,3,4,5]));

//Task 5:

function reverseString(str){

    if(str === ""){
        return "";
    }

    return str[str.length - 1] + reverseString(str.slice(0,-1));
}

console.log(reverseString("Hello"));
console.log(reverseString("World"));

//Task 6
function isPalindrome(str){

    if(str.length <= 1){
        return true;
    }

    if(str[0] !== str[str.length-1]){
        return false;
    }

    return  isPalindrome(str.slice(1,-1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

//Task 7:

function binarySearch(arr , target,start = 0,end = arr.length-1){
   

    if(start>end){
        return -1;

    }

    const mid = Math.floor((start+end)/2);

    if(arr[mid] === target){
        return mid;
    }
   
    if(target < arr[mid]){
        return binarySearch(arr,target,start,mid-1);
    }
    else{
        return binarySearch(arr,target,mid+1,end);
    }
}

console.log(binarySearch([1,2,3,4,5],3));

//Task 8:

function countOccurence(arr,target,index = 0){

    if(index >= arr.length){
        return 0;
    }

    const count = arr[index] === target ? 1:0;

    return count + countOccurence(arr,target,index+1);
}

console.log(countOccurence([1,2,3,4,5,4,2,3,2],2));

//Task 9:
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(root){

    if(root === null){
        return;
    }

    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("In_order Traversal is :");
inOrderTraversal(root);

//Task 10 :
class node{
    
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(root){
    if(root == null){
        return 0;
    }

    const leftDepth = calculateDepth(root.left);
    const rightDepth = calculateDepth(root.right);
    return Math.max(leftDepth,rightDepth) + 1;
}

const root1 = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);

console.log(calculateDepth(root1));