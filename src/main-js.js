"use strict";
/*
let numbers = [5, 10, 1, 3, 24, 51, 4, 2, 15];
console.log(numbers.reverse()); //[ 15, 2, 4, 51, 24, 3, 1, 10, 5 ]
*/
/*
let str = "John, Joe, Jack, Carl";
console.log(str.split(", ")); //[ 'John', 'Joe', 'Jack', 'Carl' ] , change string to array
*/
/*
let str = "John, Joe, Jack, Carl";
let arr = str.split(", "); //[ 'John', 'Joe', 'Jack', 'Carl' ] , change string to array
console.log(arr.join("****")); //John****Joe****Jack****Carl , change array to string
*/
/*
let str = "John, Joe, Jack, Carl";
let arr = str.split("");
console.log(arr);
//['J','o','h','n',',',' ','J','o','e',',',' ','J','a','c','k',',',' ','C','a','r','l']
console.log(str.split(",")); //[ 'John', ' Joe', ' Jack', ' Carl' ] , space can't remove
*/
/*
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(arr); // [ 'Bilbo', 'Gandalf' ]
*/
/*
let value = arr.reduce(function(previousValue, item, index, arr) {
    // ...
}, initial);
// or
let value = arr.reduce(function(previousValue, currentValue, currentIndex, array) {
  // ...
}, initial);
*/
/*
let numbers = [1, 2, 3, 4, 5];
let total;
total = numbers.reduce(function(sum, current, index) {
    // sum == 0 , initial
    // current == 1 , first array value
    return sum += current;
}, 0);
console.log(total); //15
*/
/*
let numbers = [1, 2, 3, 4, 5];
let total;
total = numbers.reduce(function(mul, current, index) {
    // mul == 1 , initial
    // current == 1 , first array value
    return mul *= current;
}, 1);
console.log(total); //120
*/
/*
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0); //Arrow func
console.log(result); // 15
*/
/*
let arr = [1, 2, 3, 4, 5];
let result = arr.reduceRight((sum, current) => sum + current, 0);
console.log(result); // 15
*/
/*
let arr = [1, 2, 3, 4, 5];
// removed initial value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current);
console.log( result ); // 15
*/
/*
let arr = [];
// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current);
*/
/*
arr.forEach(function(item, index, array) {
    // ... do something with item
});
*/
/*
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num); //1, 2, 3, 4, 5
});
*/
/*
let numbers = [1, 2, 3, 4, 5];
let all = numbers.forEach(function(num) {
    return num; // foreach can't return any
});
console.log(all); //undefined
*/
/*
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(function(num) {
    sum += num;
});
console.log(sum); // 15
*/
/*
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
    // Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
    // Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
    // Nazgul is at index 2 in Bilbo,Gandalf,Nazgul
});
*/
/*
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
*/
/*
arr.forEach(func, thisArg);
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// if this exist in func refer to what? , refer to thisArg
// thisArg is the optional last argument
*/
/*
//thisArg
let user = {
    age: 18,
    checkAge(otherAge) {
        //otherAge == {name: 'Iman', age: 12} , and ...
        //this refer to this object , user object
        console.log(otherAge.age < this.age); //true, true, false
    }
};
let users = [
    {name: 'Iman', age: 12},
    {name: 'John', age: 16},
    {name: 'David', age: 32}
];
users.forEach(function(userAge) {
    console.log(userAge.age); //12, 16, 32
    //this exist here and refer to thisArg
    console.log(this); //this refer to user object above
    //{age: 18, checkAge: [Function: checkAge]} ,run 3 times ,because users array have 3 items
}, user); // user == thisArg , refer to user object above

users.forEach(user.checkAge, user);//for 3 items in users array run user.checkAge and input param for checkAge func is items in users array , for example: otherAge == {name: 'Iman', age: 12}
//true, true, false
*/
/*
let user = {
    age: 18,
    younger(otherUser) {
      return otherUser.age < this.age;
    }
};
let users = [
    {age: 12},
    {age: 16},
    {age: 32}
];
// find all users younger than user
let youngerUsers = users.filter(user.younger, user);
console.log(youngerUsers); // [ { age: 12 }, { age: 16 } ]
console.log(youngerUsers.length); // 2
*/
/*
//Tasks
function camelize(str) {
    return str
    .split('-') // my-long-word -> ['my', 'long', 'word']
    .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
    .join(''); // ['my', 'Long', 'Word'] -> myLongWord
}
console.log(camelize("background-color")); //'backgroundColor'
console.log(camelize("list-style-image")); //'listStyleImage'
console.log(camelize("-webkit-transition")); //'WebkitTransition'
*/



