"use strict";

let id = Symbol(); //id is a new symbol
/*================================*/
let id = Symbol("id"); //id is a symbol with the description "id"
/*================================*/
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false
/*================================*/
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string
/*================================*/
let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works
/*================================*/
let user = {
    name: "John"
    //Symbol("id"): "ID Value"
};
let id = Symbol("id");
user[id] = "ID Value";
console.log(user); // Object { name: "John", Symbol(id): "ID Value" }
alert( user[id] ); // ID Value
/*================================*/
let user = {
    name: "John",
    age: 24
};
let id1 = Symbol("id");
let id2 = Symbol("id");
user[id1] = 10;
user[id2] = 10;
console.log(user); //Object { name: "John", age: 24, Symbol(id): 10, Symbol(id): 10 }
/*=================================*/
let id = Symbol("id");
let user = {
    name: "Iman",
    [id]: 20
};
console.log(user); //Object { name: "Iman", Symbol(id): 20 }
/*================================*/
let id = Symbol("id");
let user = {
    name: "Iman",
    age: 20,
    [id]: 20
};
for (let key in user) alert(key); //name, age, no symbol
/*=================================*/
let id = Symbol("id");
let user = {
  [id]: 123
};
let clone = Object.assign({}, user); //copy user to clone obj
console.log(user); //Object { Symbol(id): 123 }
console.log(clone); //Object { Symbol(id): 123 }
alert( clone[id] ); // 123
/*==================================*/
let obj = {
    0: "test", // same as "0": "test"
    age: 24
};
// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property) , correct
alert(obj["age"]); //24
alert(obj[age]); // incorrect
/*====================================*/
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created
// read it again
let idAgain = Symbol.for("id");
// the same symbol
alert( id === idAgain ); // true
let user = {
    [id]: 10
};
console.log(user[id]); // 10
console.log(user[idAgain]); // 10
/*===================================*/
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// get name from symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
/*====================================*/
alert( Symbol.keyFor(Symbol.for("name")) ); // name, global symbol
alert( Symbol.keyFor(Symbol("name2")) ); // undefined, the argument isn't a global symbol
/*====================================*/
let user = {
    name: "John",
    age: 30
};
user.sayHi = function() {
alert("Hello!");
};
user.sayHi(); // Hello!
/*====================================*/
let user = {
    // ...
};
// first, declare
function sayHi() {
    alert("Hello!");
};
// then add as a method
user.sayHi = sayHi;
user.sayHi(); // Hello!
/*=====================================*/
// these objects do the same
let user = {
    sayHi: function() {
        alert("Hello");
    }
};
//or
// method shorthand looks better, right?
let user = {
    sayHi() { // same as "sayHi: function()"
        alert("Hello");
    }
};
/*==============================*/
let user = {
    name: "John",
    age: 30,
    sayHi() {
      alert(this.name); // this or user
    }
};
user.sayHi(); // John
/*================================*/
let user = {
    name: "John",
    age: 30,
    sayHi() {
      alert(this.name); // this or user , this refer to sayHi() call
    }
};
let admin = user;
user = null;
admin.sayHi(); // John , admin == this , this hint
/*===============================*/
console.log(this); //Object {  }
/*===============================*/
function sayHi() {
    console.log(this);
}
sayHi(); // undefined , because we dont have any object before call sayHi();
//if we dont type "use strict" on line 1 :
sayHi(); // Window file:///C:/Users/Iman94/Desktop/js/index.html
/*========================================*/
let obj = {
    name: "iman",
    sayHi() {
        console.log(this);
    }
};
obj.sayHi(); //Object { name: "iman", sayHi: sayHi() jump to definition }
/*===========================================*/
let user = {
    name: "John"
};
let admin = {
    name: "Admin"
};
function sayHi() {
  alert( this.name );
}
// use the same functions in two objects
user.f = sayHi;
admin.f = sayHi;
console.log(user); //Object { name: "John", f: sayHi() jump to }
console.log(admin); //Object { name: "Admin", f: sayHi() tump to }
// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
/*====================================*/
let user = {
    name: "john",
    age: 25,
    sayHi() {
        function welcome() {
            console.log(this.name); //this is undefined
            //this refer to parent , parent is welcome()
            //for scope
        }
        welcome(); //this hint , we dont have obj before call welcome()
    }
};
user.sayHi();
/*=========================================*/
let user = {
    name: "john",
    age: 25,
    sayHi() {
        let welcome = () => {
            console.log(this.name); //john
            //this refer to parent , parent is sayHi()
            //arrow func is good for scope
        }
        welcome();
    }
};
user.sayHi(); //this hint , user == this
/*===============================================*/
let user = {
    name: "John",
    hi() {
        alert(this.name);
    },
    bye() {
        alert("Bye");
    }
};
user.hi(); // John
(user.name == "John" ? user.hi : user.bye)(); // this is undefined
(user.name == "John" ? user.hi() : user.bye()); // Correct
/*==========================================*/
let user = {
    name: "John",
    hi() {
        alert(this.name);
    }
}
// split getting and calling the method in two lines
let hi = user.hi;
hi(); // Error, because this is undefined
/*===============================================*/
