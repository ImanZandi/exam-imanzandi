"use strict";

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );
/*=================================*/
function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;
    return +num;
}
alert(`Read: ${readNumber()}`);
/*============================================*/
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("A number please?", 0);
        // should we cancel?
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}  
alert( sumInput() );
/*=======================================*/
function random(min, max) {
    return min + Math.random() * (max - min);
}
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
