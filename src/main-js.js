"use strict";

let obj = {
    name: "john",
    age: 24,
    0: "hello",
    true: 'yes'
};
//change all props to string , sort
console.log(obj); //{ '0': 'hello', name: 'john', age: 24, true: 'yes' }
let object = {
    name: "iman",
    age: 25,
    obj: "true" //obj prop is simple string , not obj var above , we can't use var for props
};
console.log(object.obj.name); // undefined
let objct = {
    name: "iman",
    age: 25,
    [obj]: "true"
};
console.log(objct); //{ name: 'iman', age: 25, '[object Object]': 'true' }
console.log(objct[obj]); //true
console.log(objct[obj].name); // undefined
/*=============================
===============================*/
/*
//Learn
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
*/
/*============================
==============================*/
let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log( map.size ); // 3
console.log(map); // Map { '1' => 'str1', 1 => 'num1', true => 'bool1' }
/*============================
==============================*/
let map = new Map();
map.set('name', 'John');
map.set('age', '18');
map.set('name', 'David'); // Replace , keep one key
console.log(map); // Map { 'name' => 'David', 'age' => '18' }
map.set('name', 'David'); // Replace , keep one key
console.log(map); // Map { 'name' => 'David', 'age' => '18' }

function getAge() {
    console.log(18);
}
map.set(getAge, 10);
console.log(map); // Map { 'name' => 'David', 'age' => '18', [Function: getAge] => 10 }
console.log(map.get(getAge)); // 10
console.log(map.has(getAge)); // true
map.delete('age');
console.log(map); // Map { 'name' => 'David', [Function: getAge] => 10 }
console.log(map.size); // 2
map.clear();
console.log(map); // Map {}
/*============================
==============================*/
let john = { name: "John" };
// for every user, let's store their visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123); // Map can also use objects as keys
console.log( visitsCountMap.get(john) ); // 123
console.log(visitsCountMap); // Map { { name: 'John' } => 123 }
/*============================
==============================*/
// we add the id field
let john = { name: "John", id: 1 };
let visitsCounts = {};
// now store the value by id
visitsCounts[john.id] = 123;
console.log(visitsCounts); // { '1': 123 }
console.log( visitsCounts[john.id] ); // 123
console.log(visitsCounts['1']); // 123
console.log(visitsCounts[1]); // 123
/*============================
==============================*/
// we can use chaining
let map = new Map();
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

console.log(map); //Map { '1' => 'str1', 1 => 'num1', true => 'bool1' }
/*============================
==============================*/
// array of [key, value] pairs
let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);
console.log(map); // Map { '1' => 'str1', 1 => 'num1', true => 'bool1' }
/*============================
==============================*/
let user = {
    name: "John",
    age: 26
}
let map = new Map(Object.entries(user));
console.log(map); // Map { 'name' => 'John', 'age' => 26 }
/*============================
==============================*/
//Learn Object.entries()
const object1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object1)); // [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]
console.log(Object.entries(object1)[1]); // [ 'baz', 42 ]

const object2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object2)); // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
console.log(Object.entries(object2)[2]); // [ '2', 'c' ]

const result = Object.entries(object2).sort((a, b) => a - b);
console.log(result); // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
console.log(Object.entries(result)); // result is array
// [ [ '0', [ '0', 'a' ] ], [ '1', [ '1', 'b' ] ], [ '2', [ '2', 'c' ] ] ]
console.log(Object.entries(result)[1]); // [ '1', [ '1', 'b' ] ]
/*============================
==============================*/
//Examples:
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type, since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
/*============================
==============================*/
let obj = {
    cucumber: 500,
    tomatoes: 350,
    onion: 50
};
let recipeMap = new Map(Object.entries(obj));
// or
/*
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);
*/
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}  
// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}  
// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // [ 'cucumber', 500 ], [ 'tomatoes', 350 ], [ 'onion', 50 ]
}
// or
for (let entry of recipeMap.entries()) {
    console.log(entry); // [ 'cucumber', 500 ], [ 'tomatoes', 350 ], [ 'onion', 50 ]
}

recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500, tomatoes: 350, onion: 50
});
/*
//Learn
new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/
/*============================
==============================*/
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set keeps only unique values
console.log( set.size ); // 3
console.log(set); // Set { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }
for (let user of set) {
    console.log(user); // { name: 'John' }, { name: 'Pete' }, { name: 'Mary' }
    console.log(user.name); // John, Pete, Mary
}
/*============================
==============================*/
let set = new Set();
let user = { id: 46 };
set.add(10);
set.add(user);
set.add({ id: 4 });
set.add(function() { console.log('Hello') });
console.log(set.has(10)); // true
console.log(set); // Set { 10, { id: 46 }, { id: 4 }, [Function] }
set.delete(10);
console.log(set); // Set { { id: 46 }, { id: 4 }, [Function] }
set.delete({ id: 4 }); // can not delete
console.log(set); // Set { { id: 46 }, { id: 4 }, [Function] }
set.delete(user);
console.log(set); // Set { { id: 4 }, [Function] }
console.log(set.size); //2
set.clear();
console.log(set); // Set {}
/*============================
==============================*/
let set = new Set(["oranges", "apples", "bananas"]); // direct insert values
for (let value of set) {
    console.log(value); // oranges, apples, bananas
}
// the same with forEach:
set.forEach((value, valueAgain, set) => {
    console.log(value); // oranges, apples, bananas
});
for (let value of set.keys()) {
    console.log(value); // oranges, apples, bananas
}
for (let value of set.values()) {
    console.log(value); // oranges, apples, bananas
}
for (let value of set.entries()) {
    console.log(value);
    // [ 'oranges', 'oranges' ], [ 'apples', 'apples' ], [ 'bananas', 'bananas' ]
}
/*============================
==============================*/
// WeakMap and WeakSet :
// input just object
// Garbage collection
// no foreach , no values , no keys , no iterate
let user = {
    name: "John",
    age: 43
};
let map = new Map();
map.set(user, "hello")
    .set(10, "blue");
user = null;
console.log(map); // Map { { name: 'John', age: 43 } => 'hello', 10 => 'blue' }
// can't delete in map
/*============================
==============================*/
let user = {
    name: "John",
    age: 43
};
let map = new WeakMap();
map.set(user, "hello");
//map.set(10, "blue"); // we can't use number for WeakMap() , just object
console.log(map); // WeakMap { [items unknown] }
/*============================
==============================*/
let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; // overwrite the reference
// john is removed from memory!
console.log(weakMap); // WeakMap { [items unknown] }
/*
//Learn
weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key, value)
weakMap.has(key)
*/
/*============================
==============================*/
weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically
/*============================
==============================*/
let john = { name: "John" };
// map: user => visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);
// now john leaves us, we don't need him anymore
john = null;
// but it's still in the map, we need to clean it!
console.log( visitsCountMap.size ); // 1
// and john is also in the memory, because Map uses it as the key
/*============================
==============================*/
let john = { name: "John" };
let visitsCountMap = new WeakMap();
visitsCountMap.set(john, 123);
// now john leaves us, we don't need him anymore
john = null;
// there are no references except WeakMap,
// so the object is removed both from the memory and from visitsCountMap automatically
console.log(visitsCountMap.has(john)); // false
/*============================
==============================*/
// Weakset() :
// Like Set, it supports add, has and delete, but not size, keys() and no iterations.
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
// fill it with array elements (3 items)
let unreadSet = new WeakSet(messages);
// use unreadSet to see whether a message is unread
console.log(unreadSet.has(messages[1])); // true
// remove it from the set after reading
unreadSet.delete(messages[1]); // true
// and when we shift our messages history, the set is cleaned up automatically
messages.shift();
// no need to clean unreadSet, it now has 2 items
// (though technically we don't know for sure when the JS engine clears it)
/*============================
==============================*/
//Tasks
function unique(arr) {
    return Array.from(new Set(arr));
}  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(values) ); // [ 'Hare', 'Krishna', ':-O' ]
/*============================
==============================*/
//Filter anagrams
function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        // split the word by letters, sort them and join back
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }  
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( aclean(arr) ); // [ 'PAN', 'hectares', 'era' ]
/*============================
==============================*/
//Iterable keys
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys); // [ 'name', 'more' ]
/*============================
==============================*/
//Store "unread" flags
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let readMessages = new WeakSet();
// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements
// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements
// answer: was the message[0] read?
console.log("Read message 0: " + readMessages.has(messages[0])); // true
messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)
/*============================
==============================*/
//Store read dates
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));
// Date object we'll study later
/*============================
==============================*/
let user = {
    name: "John",
    age: 30
};  
console.log(Object.keys(user)); // [ 'name', 'age' ]
console.log(Object.values(user)); // [ 'John', 30 ]
console.log(Object.entries(user)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]
// loop over values
for (let value of Object.values(user)) {
    console.log(value); // John, 30
}
/*============================
==============================*/
let id = Symbol('id');
let user = {
    name: "John",
    age: 30,
    [id]: "Hello"
};
// Object.keys/values/entries ignore symbolic properties
console.log(Object.entries(user)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]
console.log(Object.values(user)); // [ 'John', 30 ]
console.log(Object.keys(user)); // [ 'name', 'age' ]
/*============================
==============================*/
let id = Symbol('id');
let user = {
    name: 'iman',
    age: 24,
    [id]: "i am symbole"
};
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]
console.log(Reflect.ownKeys(user)); // [ 'name', 'age', Symbol(id) ]
/*============================
==============================*/
const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');
object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';
console.log(object1); // { [Symbol(a)]: 'localSymbol', [Symbol(b)]: 'globalSymbol' }
const objectSymbols = Object.getOwnPropertySymbols(object1);
console.log(objectSymbols); // [ Symbol(a), Symbol(b) ]
console.log(objectSymbols.length); // 2
/*============================
==============================*/
//Examples
var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');
obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';
console.log(obj); // { [Symbol(a)]: 'localSymbol', [Symbol(b)]: 'globalSymbol' }
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols.length); // 2
console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);     // Symbol(a)
/*============================
==============================*/
const object1 = {
    property1: 42,
    property2: 13
};  
var array1 = [];  
console.log(Reflect.ownKeys(object1)); // [ 'property1', 'property2' ]  
console.log(Reflect.ownKeys(array1)); // [ 'length' ]
console.log(Reflect.ownKeys({})); // []
/*============================
==============================*/
//Examples
Reflect.ownKeys({z: 3, y: 2, x: 1}); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]
var sym = Symbol.for('comet');
var sym2 = Symbol.for('meteor');
var obj = {
    [sym]: 0,
    'str': 0,
    '773': 0,
    '0': 0,
    [sym2]: 0,
    '-1': 0,
    '8': 0,
    'second str': 0
};
console.log(Reflect.ownKeys(obj));
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order, 
// strings in insertion order, 
// symbols in insertion order
/*============================
==============================*/
//Tasks
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }  
    return sum;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};  
console.log( sumSalaries(salaries) ); // 650
/*============================
==============================*/
function count(obj) { 
    return Object.keys(obj).length;
}
let user = {
    name: 'John',
    age: 30
};  
console.log( count(user) ); // 2
