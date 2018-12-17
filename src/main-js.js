"use strict";

let arr = [
    'john',
    'jane',
    true,
    function() {
        console.log('func');
    },
    {
        name: 'Iman',
        age: 24
    }
];
console.log(arr); //[ 'john', 'jane', true, [Function], { name: 'Iman', age: 24 } ]
console.log(arr[1]); //jane
console.log(arr[3]); //[Function]
console.log(arr[3]()); //func , undefined , console.log(undefined)
arr[3](); //func
console.log(arr[4]); //{ name: 'Iman', age: 24 }
console.log(arr[4].age); //24

arr[5] = 'bye'; //add
console.log(arr[5]); //bye
arr[2] = 'David'; //change
console.log(arr[2]); //David
console.log(arr.length); //6
/*========================================
=========================================*/
let names = [
    "Iman",
    "Rocky",
    "Arnold",
    "Lee",
    "Vin",
    "Poul"
];
names.push("Katy"); //push to end of array
names.shift(); //pop first value, and shift
//this is a queue
console.log(names); //[ 'Rocky', 'Arnold', 'Lee', 'Vin', 'Poul', 'Katy' ]

names.push("David");
names.pop(); //pop from end of array
//this is a stack
console.log(names); //[ 'Rocky', 'Arnold', 'Lee', 'Vin', 'Poul', 'Katy' ]

names.unshift("John"); //push to first position , and shift
console.log(names); //[ 'John', 'Rocky', 'Arnold', 'Lee', 'Vin', 'Poul', 'Katy' ]
/*========================================
=========================================*/
let array = [
    'john',
    'mary'
];
let arrayLike = {
    0: 'john',
    1: 'jane',
    length: 2
}
console.log(typeof array); //object
console.log(typeof arrayLike); //object
console.log(arrayLike.length); //2
console.log(array.length); //2
/*========================================
=========================================*/
let arr = [
    'john',
    'katy',
    'david'
];
//use simple (for) for array if we need index
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); //john,katy,david
}
//use (for of) for array if we dont need index
for (let key of arr) {
    console.log(key); //john,katy,david
}
//dont use (for in) for array , because it is for object
for (let value in arr) {
    console.log(arr[value]); //john,katy,david
    console.log(value); //0,1,2
}
/*========================================
=========================================*/
let arr = [
    'name',
    'age'
];
arr[1000] = 'address';
console.log(arr.length); //1001
console.log(arr); //[ 'name', 'age', <998 empty items>, 'address' ]
/*========================================
=========================================*/
let arr = new Array(3); //create an array with 3 values
console.log(arr); //[ <3 empty items> ]
console.log(arr[0]); //undefined
/*========================================
=========================================*/
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0]); //[ 1, 2, 3 ]
console.log(matrix[0][1]); //2
console.log(matrix.toString()); //1,2,3,4,5,6,7,8,9
/*========================================
=========================================*/
//Tasks
let fruits = ["Apples", "Pear", "Orange"];
// push a new value into the "copy"
let shoppingCart = fruits; //copy by references
shoppingCart.push("Banana"); //push to both array
// what's in fruits?
console.log( fruits.length ); //4
/*========================================
=========================================*/
let styles = [
    "Jazz",
    "Blues"
];
styles.push("Rock-n-Roll"); //['Jazz', 'Blues', 'Rock-n-Roll']
styles[Math.floor((styles.length - 1) / 2)] = "Classics"; //['Jazz', 'Classics', 'Rock-n-Roll']
styles.shift(); //['Classics', 'Rock-n-Roll']
styles.unshift("Rap", "Reggie"); //['Rap', 'Reggie', 'Classics', 'Rock-n-Roll']
console.log(styles);
//Your code for finding the middle value should work for any arrays with odd length.
/*========================================
=========================================*/
let arr = [
    "a",
    "b"
];
arr.push(function() {
  console.log( this ); //this refere to arr
});
arr[2](); //[ 'a', 'b', [Function] ]
/*========================================
=========================================*/
console.log(isFinite('iman')); //false
/*========================================
=========================================*/
//Tasks
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("A number please?", 0); //typeof value is string
        // should we cancel?
        // value == null for cancel button
        // value == "" for empty ok
        // value == !isFinite(value) for string type ok
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
        //we have to change type of value to number by + , because for sum += number;
        //if type of value was string => 4 + 5 == 45!
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}  
alert( sumInput() );
/*=======================================*/
function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
}  
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
/*
Help
For instance, for [-1, 2, 3, -9, 11] == 11 why?
Starting from -1
-1
-1 + 2 = 1
-1 + 2 + 3 = 4
-1 + 2 + 3 + (-9) = -5
-1 + 2 + 3 + (-9) + 11 = 6
Starting from 2
2
2 + 3 = 5
2 + 3 + (-9) = -4
2 + 3 + (-9) + 11 = 7
Starting from 3
3
3 + (-9) = -6
3 + (-9) + 11 = 5
Starting from -9
-9
-9 + 11 = 2
Starting from 11
11

11 > 7 > 6 > 5 > 2
result is 11
*/
//or
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }  
    return maxSum;
}  
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
/*========================================
=========================================*/
let arr = [
    "I",
    "go",
    "home"
];
delete arr[1]; // remove "go"
alert( arr[1] ); // undefined
// now arr = ["I",  , "home"];
alert( arr.length ); // 3
/*========================================
=========================================*/
let arr = [
    "I",
    "study",
    "JavaScript"
];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]
/*========================================
=========================================*/
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // now ["Let's", "dance", "right", "now"]
/*========================================
=========================================*/
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr.splice(0, 2);
console.log( removed ); //Array [ "I", "study" ]
/*========================================
=========================================*/
let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
console.log( arr ); // "I", "study", "complex", "language", "JavaScript"
/*========================================
=========================================*/
let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
alert( arr ); // 1,2,3,4,5
/*========================================
=========================================*/
let arr = ['apple', 'banana', 'peach', 'blueberry'];
console.log(arr.splice(0)); //[ 'apple', 'banana', 'peach', 'blueberry' ]
console.log(arr); //[]
/*========================================
=========================================*/
let str = "test";
let arr = ["t", "e", "s", "t"];
alert( str.slice(1, 3) ); // es
alert( arr.slice(1, 3) ); // e,s
alert( str.slice(-2) ); // st
alert( arr.slice(-2) ); // s,t
/*========================================
=========================================*/
let arr = [
    "banana",
    "apple",
    "blueberry",
    "orange"
];
let basket = arr.concat('olive', 'strawberry');
console.log(basket); //[ 'banana', 'apple', 'blueberry', 'orange', 'olive', 'strawberry' ]
/*========================================
=========================================*/
let arr = [
    "banana",
    "apple",
    "blueberry",
    "orange"
];
let arraylike = {
    0: "iman",
    1: "age"
};
let store = arr.concat(arraylike);
console.log(store);//['banana', 'apple', 'blueberry', 'orange', { '0': 'iman', '1': 'age' }]
/*========================================
=========================================*/
let arr = [
    "banana",
    "apple",
    "blueberry",
    "orange"
];
let arraylike = {
    0: "iman",
    1: "age",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};
let store = arr.concat(arraylike);
console.log(store); //[ 'banana', 'apple', 'blueberry', 'orange', 'iman', 'age' ]
/*========================================
=========================================*/
let arr = [1, 2];
console.log( arr.concat([3, 4])); // 1,2,3,4
console.log( arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
console.log( arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
console.log( arr.concat([[3, 4], 10], 5, 6)); //[ 1, 2, [ 3, 4 ], 10, 5, 6 ]
/*========================================
=========================================*/
let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true
/*========================================
=========================================*/
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
alert( arr.includes(NaN) );// true (correct)
/*========================================
=========================================*/
let result = arr.find(function(item, index, array) {
    // should return true if the item is what we are looking for
});
/*========================================
=========================================*/
let users = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Pete"
    },
    {
        id: 3,
        name: "Mary"
    }
];
let user = users.find(item => item.id == 1);
alert(user.name); // John
/*========================================
=========================================*/
let users = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Pete"
    },
    {
        id: 3,
        name: "Mary"
    }
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2
/*========================================
=========================================*/
let fruits = [
    "apple",
    "blueberry",
    "strawberry",
    "olive",
    "banana"
];
console.log(fruits.find(function(value) {
    return value.length > 6; //blueberry
}));
//or
console.log(fruits.find(value => value.length > 6)); //blueberry

console.log(fruits.findIndex(value => value.length > 6)); //1
console.log(fruits.filter(value => value.length > 6)); //[ 'blueberry', 'strawberry' ]
console.log(fruits.map(value => value.length)); //[ 5, 9, 10, 5, 6 ]
console.log(fruits.map(value => value.toUpperCase())); //[ 'APPLE', 'BLUEBERRY', 'STRAWBERRY', 'OLIVE', 'BANANA' ]
console.log(fruits.sort());//['apple', 'banana', 'blueberry', 'olive', 'strawberry']
/*========================================
=========================================*/
let numbers = [5, 4, 10, 82, 15, 1, 3, 6];
console.log(numbers.sort()); //[ 1, 10, 15, 3, 4, 5, 6, 82 ]
console.log(numbers.sort(compare));
//[ 1, 3, 4, 5, 6, 10, 15, 82 ]
//[ 82, 15, 10, 6, 5, 4, 3, 1 ]
function compare(a, b) {
    //console.log(`${a} <> ${b}`); //compare
    return a - b; //small to big
    //return b - a; //big to small
    //or
    /*small to big
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
    */
    /*big to small
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
    */
}
//or
console.log(numbers.sort((a, b) => a - b)); //[ 1, 3, 4, 5, 6, 10, 15, 82 ]
//or
console.log(numbers.sort(function(a, b) {
    return a - b;
}));
/*========================================
=========================================*/




