let _ = require('lodash');

'use strict';

let user = {
    name: "John",
    surname: "Smith"
};
user.name = "Pete";
delete user.name;
console.log(user);
/*==================================
====================================*//*
function isEmpty(schedule) {
    for (let prop in schedule) {
        return false;
    }
    return true;
}
let schedule = {
    //"8 : 30": "get up",

};
alert( isEmpty(schedule) ); //true
schedule["8 : 30"] = "Time to get up";
alert( isEmpty(schedule) ); //false
/*==================================
====================================*//*
function sum(salaries) {
    let total = 0;
    for (let prop in salaries) {
        total = total + salaries[prop];
    }
    return total;
}
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
alert( sum(salaries) ); //390
/*==================================
====================================*//*
function multiplyNumeric(menu) {
    for (let prop in menu) {
        if (typeof menu[prop] === "number") {
            menu[prop] = menu[prop] * 2;
        }
        //console.log(prop);
        //console.log(menu[prop]);
    }
    //console.log(menu);
    return menu; //return object
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    body: "My body",
    radius: 30
};
let newMenu = multiplyNumeric(menu);
console.log(newMenu);
//{width: 400, height: 600, title: "My menu", body: "My body", radius: 60}*/