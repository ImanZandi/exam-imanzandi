"use strict";

let numbers = [5, 10, 1, 3, 24, 51, 4, 2, 15];
console.log(numbers.reverse()); //[ 15, 2, 4, 51, 24, 3, 1, 10, 5 ]
/*====================================
======================================*/
let str = "John, Joe, Jack, Carl";
console.log(str.split(", ")); //[ 'John', 'Joe', 'Jack', 'Carl' ] , change string to array
/*====================================
======================================*/
let str = "John, Joe, Jack, Carl";
let arr = str.split(", "); //[ 'John', 'Joe', 'Jack', 'Carl' ] , change string to array
console.log(arr.join("****")); //John****Joe****Jack****Carl , change array to string
/*====================================
======================================*/
let str = "John, Joe, Jack, Carl";
let arr = str.split("");
console.log(arr);
//['J','o','h','n',',',' ','J','o','e',',',' ','J','a','c','k',',',' ','C','a','r','l']
console.log(str.split(",")); //[ 'John', ' Joe', ' Jack', ' Carl' ] , space can't remove
/*====================================
======================================*/
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(arr); // [ 'Bilbo', 'Gandalf' ]
/*====================================
======================================*/
let value = arr.reduce(function(previousValue, item, index, arr) {
    // ...
}, initial);
// or
let value = arr.reduce(function(previousValue, currentValue, currentIndex, array) {
  // ...
}, initial);
/*====================================
======================================*/
let numbers = [1, 2, 3, 4, 5];
let total;
total = numbers.reduce(function(sum, current, index) {
    // sum == 0 , initial
    // current == 1 , first array value
    return sum += current;
}, 0);
console.log(total); //15
/*====================================
======================================*/
let numbers = [1, 2, 3, 4, 5];
let total;
total = numbers.reduce(function(mul, current, index) {
    // mul == 1 , initial
    // current == 1 , first array value
    return mul *= current;
}, 1);
console.log(total); //120
/*====================================
======================================*/
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0); //Arrow func
console.log(result); // 15
/*====================================
======================================*/
let arr = [1, 2, 3, 4, 5];
let result = arr.reduceRight((sum, current) => sum + current, 0);
console.log(result); // 15
/*====================================
======================================*/
let arr = [1, 2, 3, 4, 5];
// removed initial value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current);
console.log( result ); // 15
/*====================================
======================================*/
let arr = [];
// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current);
/*====================================
======================================*/
arr.forEach(function(item, index, array) {
    // ... do something with item
});
/*====================================
======================================*/
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num); //1, 2, 3, 4, 5
});
/*====================================
======================================*/
let numbers = [1, 2, 3, 4, 5];
let all = numbers.forEach(function(num) {
    return num; // foreach can't return any
});
console.log(all); //undefined
/*====================================
======================================*/
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(function(num) {
    sum += num;
});
console.log(sum); // 15
/*====================================
======================================*/
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
    // Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
    // Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
    // Nazgul is at index 2 in Bilbo,Gandalf,Nazgul
});
/*====================================
======================================*/
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
/*====================================
======================================*/
arr.forEach(func, thisArg);
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// if this exist in func refer to what? , refer to thisArg
// thisArg is the optional last argument
/*====================================
======================================*/
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
/*====================================
======================================*/
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
/*====================================
======================================*/
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
/*====================================
======================================*/
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); //[ 3, 1 ]
console.log( arr ); //[ 5, 3, 8, 1 ]
/*====================================
======================================*/
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    } 
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log( arr ); // [ 3, 1 ]
/*====================================
======================================*/
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log( arr ); //[ 8, 5, 2, 1, -10 ]
/*====================================
======================================*/
function copySorted(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log( sorted ); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log( arr ); // [ 'HTML', 'JavaScript', 'CSS' ] (no changes)
/*====================================
======================================*/
function Calculator() {
    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let split = str.split(' ');
        let a = +split[0];
        let op = split[1];
        let b = +split[2];
        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}
let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
/*====================================
======================================*/
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
console.log( names ); // [ 'John', 'Pete', 'Mary' ]
/*====================================
======================================*/
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName ); // John Smith
/*====================================
======================================*/
function sortByName(arr) {
    arr.sort((a, b) => b.name > a.name ? 1 : -1);
}  
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 }; 
let arr = [ john, pete, mary ]; 
sortByName(arr); 
console.log(arr[1].name); // Mary
console.log(arr[0]); // { name: 'Pete', age: 30 }
console.log(arr);
// [ { name: 'Pete', age: 30 }, { name: 'Mary', age: 28 }, { name: 'John', age: 25 } ]
/*====================================
======================================*/
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}  
let arr = [1, 2, 3];
shuffle(arr); // [ 3, 2, 1 ]
shuffle(arr); // [ 1, 2, 3 ]
shuffle(arr); // [ 1, 3, 2 ]
console.log(arr);
//or
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}  
// counts of appearances for all possible permutations
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};  
for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}  
// show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
//result:
//123: 249924
//132: 125054
//213: 249792
//231: 125115
//312: 125073
//321: 125042

//or
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
}
// counts of appearances for all possible permutations
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};  
for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}  
// show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
//result:
//123: 166516
//132: 166722
//213: 166674
//231: 166914
//312: 166718
//321: 166456
/*====================================
======================================*/
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
/*====================================
======================================*/
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }  
    return result;
}  
let strings = [
    "Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"
];  
console.log( unique(strings) ); // [ 'Hare', 'Krishna', ':-O' ]
/*====================================
======================================*/
let range = {
    from: 1,
    to: 5
};
for (let value of range) {
    console.log(value); // Error , range is not iterable
}
/*====================================
======================================*/
//change object to iterable , change object to counter
let range = {
    from: 0,
    to: 5
};
range[Symbol.iterator] = function() {
    return {
        //this refer to range object , this.from == range.from
        current: this.from, //0
        last: this.to, //5
        next() {
            //this in here can't refer to range , refer to return {} object , refer to properties
            if (this.current <= this.last) return { done: false, value: this.current++ };
            else return { done: true };
        }
    }
};
console.log(range); //{ from: 0, to: 5, [Symbol(Symbol.iterator)]: [Function] }
for (let value of range) {
    console.log(value); //0, 1, 2, 3, 4, 5
}
//or
let range = {
    from: 0,
    to: 5, //or Infinity
    [Symbol.iterator]() {
        this.current = this.from;
        return this; //for next()
    },
    next() {
        if (this.current <= this.to) return { done: false, value: this.current++ };
        else return { done: true };
    }
};
for (let value of range) {
    console.log(value); //0, 1, 2, 3, 4, 5
}
/*====================================
======================================*/
for (let char of "test") {
    // String is iterable
    console.log( char ); // t, e, s, t
}
/*====================================
======================================*/
let str = "Hello";
let iterator = str[Symbol.iterator]();
console.log(iterator); //Object [String Iterator] {}
console.log(iterator.next()); //{ value: 'H', done: false }
console.log(iterator.next().value); //e
console.log(iterator.next().done); //false
console.log(iterator.next()); //{ value: 'l', done: false }
console.log(iterator.next()); //{ value: 'o', done: false }
console.log(iterator.next()); //{ value: undefined, done: true }
/*====================================
======================================*/
let str = "Hello";
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // H, e, l, l, o
}
/*====================================
======================================*/
let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
};  
// Error (no Symbol.iterator)
for (let item of arrayLike) {} // arrayLike is not iterable
/*====================================
======================================*/
//change object to array
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};  
let arr = Array.from(arrayLike); // (*)
console.log(arr); //[ 'Hello', 'World' ] , array
console.log(arr.pop()); // World (method works)
/*====================================
======================================*/
let str = "name";
let arr = Array.from(str);
console.log(arr); //[ 'n', 'a', 'm', 'e' ]
arr.push("y");
console.log(arr); //[ 'n', 'a', 'm', 'e', 'y' ]
/*====================================
======================================*/
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};
let arr = Array.from(range, num => num * num);
console.log(arr); // [ 1, 4, 9, 16, 25 ]

