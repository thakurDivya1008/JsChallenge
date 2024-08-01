// Task 1:

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: ", array);

let sortedArray = bubbleSort(array);
console.log("Sorted array: ", sortedArray);

//Task 2:
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
       
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
let arr = [100, 20, 36, 25, 67, 34, 70];
console.log("Original array: ", arr);

let sortedarr = selectionSort(arr);
console.log("Sorted array: ", sortedarr);

//Task 3:
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let num = [1,89, 32, 41,5,26,17];
console.log("Original array: ", num);

let sorted = quickSort(num);
console.log("Sorted array: ", sorted);

//Task 4:
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; 
}

// Example usage:
let number = [46, 34, 87, 12, 22, 56, 90];
let target = 22;
let index = linearSearch(number, target);

if (index !== -1) {
    console.log(`Target value ${target} found at index: ${index}`);
} else {
    console.log(`Target value ${target} not found in the array.`);
}

//Task 5:

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; 
}


let binaryArr = [11, 12, 22, 25, 34, 64, 90];
let tar = 22;
let i = binarySearch(binaryArr, tar);

if (index !== -1) {
    console.log(`Target value ${tar} found at index: ${i}`);
} else {
    console.log(`Target value ${tar} not found in the array.`);
}

//Task 6:
function countOccurrences(str) {
    let charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

let string = "hello world";
let charCounts = countOccurrences(string);

console.log("Character counts:");
for (let char in charCounts) {
    console.log(`${char}: ${charCounts[char]}`);
}

//Task 7:

function longestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    let maxSubstring = "";
    let charIndexMap = {};

    for (let end = 0; end < str.length; end++) {
        let char = str[end];

        if (char in charIndexMap && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        charIndexMap[char] = end;

        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxSubstring = str.substring(start, end + 1);
        }
    }

    return maxSubstring;
}


let str = "abcabcbb";
let longestSubstr = longestSubstring(str);

console.log("Longest substring without repeating characters:", longestSubstr);

// Task 8:
function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; 

    let rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));
    return rotatedArray;
}


let rotatearr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotatedArray = rotateArray(rotatearr, k);

console.log("Rotated array:", rotatedArray);

//Task 9:

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
let mergedArray = mergeSortedArrays(array1, array2);

console.log("Merged sorted array:", mergedArray);

//Task 10 :
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function FibonacciSequence(length) {
    for (let i = 0; i < length; i++) {
        console.log(fibonacci(i));
    }
}


FibonacciSequence(10);











