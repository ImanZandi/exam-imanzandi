"use strict";


function strReverse(str) {
    let arr = str.split('');
    return arr.reverse().join('');
}
let result = strReverse('I Love Code');
console.log(result); // edoC evoL I
/*====================================
======================================*/
function LetterChanges(str) { 
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";
    let loc;
    for (let i = 0; i < str.length; i++) {
        loc = alphabet.indexOf(str[i]);
        if (loc === 25) {
            newStr = newStr + "a";
        } else if (loc === -1) {
            newStr = newStr + str[i];
        } else {          
            newStr = newStr + alphabet[loc + 1];
        }
    } 
    return newStr.replace(/[aeiou]/g, function(letter) {
        return letter.toUpperCase();
    });         
}
console.log(LetterChanges('hello*3')); //Ifmmp*3
console.log(LetterChanges('fun times!')); //gvO Ujnft!
