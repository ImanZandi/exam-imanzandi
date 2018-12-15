"use strict";

let user = {
    name: 'Iman',
    age: 24,
    [Symbol.toPrimitive](hint) {
        return hint; //hint ==> parameter of alert() func , alert(param)
        //return to alert() func
    }
};
//without Symbol func
alert(user); //[object Object]
//with Symbol func
alert(user); //string
alert(+user); //NaN
alert(user + 2); //default2
console.log(user); //Object { name: "Iman", age: 24, Symbol(Symbol.toPrimitive): user() }
/*=====================================
=======================================*/
let user = {
    name: "John",
    age: 24,
  
    [Symbol.toPrimitive](hint) {
      return (hint === 'string') ? `name: ${this.name}` : this.age;
    }
};
alert(user + 2); //26
alert(user); //name: John
alert(+user); //24
/*=====================================
=======================================*/
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
}; 
// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
/*=====================================
=======================================*/
//or old version
let user = {
    name: "John",
    money: 1000,
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
};
alert(user); //{name: "John"} , toString
alert(+user); //1000 , valueOf
alert(user + 500); //1500 , valueOf
console.log(user);
//Object { name: "John", money: 1000, toString: toString(), valueOf: valueOf() }
/*=====================================
=======================================*/
let user = {
    name: "John",
    toString() {
      return this.name;
    }
};
alert(user); // toString -> John
alert(user + 500); // toString -> John500
/*=====================================
=======================================*/
let obj = {
    toString() { // toString handles all conversions in the absence of other methods
      return "2";
    }
};
alert(obj * 2); // 4, ToPrimitive gives "2", then it becomes 2
/*=====================================
=======================================*/
let obj = {
    toString() {
      return "2";
    }
};
alert(obj + 2); // 22 (ToPrimitive returned string => concatenation)
/*=====================================
=======================================*/
let obj = {
    toString() {
      return true;
    }
};
alert(obj + 2); // 3 (ToPrimitive returned boolean, not string => ToNumber)
/*=====================================
=======================================*/
//constructor function
function User(name, age) {
    // this = {};
    this.name = name;
    // this = {name: 'john'}
    this.age = age;
    // this = {name: 'john', age: 18}
    // return this
}
let john = new User('Jhon', 18);
let jane = new User('Jane', 18);
let admin = new User('Admin', 18);

console.log(john, jane, admin);
//Object { name: "Jhon", age: 18 }
//Object { name: "Jane", age: 18 }
//Object { name: "Admin", age: 18 }
console.log(john); //Object { name: "Jhon", age: 18 }
console.log(john.name); //Jhon
/*=====================================
=======================================*/
function User() {
    alert(new.target);
} 
// without "new":
User(); // undefined
// with "new":
new User(); // function User { alert(this instanceof User ? this.constructor : void 0); }
/*=====================================
=======================================*/
function User(name) {
    if (!new.target) { // if you run me without new
        //!undefined == true
        return new User(name); // ...I will add new for you
    }
    this.name = name;
}
let john = User("John"); // redirects call to new User
alert(john.name); // John
console.log(john); //Object { name: "John" }
/*=====================================
=======================================*/
function BigUser() {
    this.name = "John";
    return {
        name: "Godzilla"
    }; //returns an object
    //dont return this = {} object
}
alert( new BigUser().name );  //Godzilla, got that object ^^
console.log( new BigUser() ); //Object { name: "Godzilla" }
/*=====================================
=======================================*/
function SmallUser() {
    this.name = "John";
    return; // finishes the execution, returns this
    // ...
}
alert( new SmallUser().name );  // John
/*=====================================
=======================================*/
function User(name, age) {
    this.name = name;
    this.age = age;
    return {
        fullname: this.name,
        userAge: this.age
    };
}
let obj = new User('iman', 24);
console.log(obj); //Object { fullname: "iman", userAge: 24 }
/*=====================================
=======================================*/
function User(name) {
    this.name = name;
    this.sayHi = function() {
        alert( "My name is: " + this.name );
    };
}
let john = new User("John");
john.sayHi(); // My name is: John
/*=====================================
=======================================*/
//Tasks
let obj = {};
function A() {
    return obj;
}
function B() {
    return obj;
}
alert( new A() == new B() ); // true
/*=====================================
=======================================*/
function A() {
    //return this;
}
function B() {
    //return this;
}
alert( new A() == new B() ); // false
/*=====================================
=======================================*/
function Calculator() {
    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
} 
let calculator = new Calculator();
calculator.read(); 
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
/*=====================================
=======================================*/
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('How much to add?', 0);
    };
} 
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
/*=====================================
=======================================*/
let name = "Rocky";
console.log(name.toUpperCase());
let num = 3.1445795432;
console.log(num.toFixed(2)); //3.14
let number = '0';
number = Number(number);
console.log(typeof number); //number
alert( typeof 1 ); // "number"
alert( typeof new Number(1) ); // "object"!
alert(null.test); // error
alert(undefined.test); // error
let numb = 1e9; //1000000000 , 1 * 10^9
console.log(numb);
let numbe = 1e-9; //0.0000000010 , 1 * 10^-9
console.log(numbe.toFixed(10));
console.log(typeof NaN); //number
let hex = 0xff;
console.log(hex); //255
let octal = 0o55;
console.log(octal); //45
let binary = 0b1001;
console.log(binary); //9
let radix = 0xff; //any number
console.log(radix.toString(10)); //255 , radix from 2-36
console.log(123456..toString(2)); //11110001001000000
let floor = 4.35;
console.log(Math.floor(floor)); //4
console.log(Math.ceil(floor)); //5
console.log(Math.round(floor)); //4
console.log(Math.trunc(floor)); //4 , remove decimal

