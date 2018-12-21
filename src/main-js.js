"use strict";

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