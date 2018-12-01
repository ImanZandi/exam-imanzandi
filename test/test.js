//var assert = require('assert'); //assert is for testing
const chai = require('chai');
let assert = chai.assert;
let _ = require('lodash');

describe('Check user input', function() {
    it('change and delete property of user obj', function() {
        let user = {
            name: "John",
            surname: "Smith"
        };
        user.name = "Pete";
        delete user.name;
        console.log(user);
    });
    it('check is empty obj?', function() {
        function isEmpty(schedule) {
            for (let prop in schedule) {
                return false;
            }
            return true;
        }
        let schedule = {
            //"8 : 30": "get up",
        
        };
        console.log( isEmpty(schedule) ); //true
        //alert( isEmpty(schedule) ); //true
        schedule["8 : 30"] = "Time to get up";
        //alert( isEmpty(schedule) ); //false
        console.log( isEmpty(schedule) ); //false      
    });
    it('sum of object properties', function() {
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
        console.log( sum(salaries) ); //390
        //alert( sum(salaries) ); //390
    });
    it('multiplication properties of object that is only a number', function() {
        function multiplyNumeric(menu) {
            for (let prop in menu) {
                if (typeof menu[prop] === "number") {
                    menu[prop] = menu[prop] * 2;
                }
            }
            return menu;
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
    });
});