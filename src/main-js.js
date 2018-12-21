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
/*===========================================
============================================*/
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
