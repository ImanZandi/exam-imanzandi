"use strict";

console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false
console.log((0.1 * 10 + 0.2 * 10) / 10); //0.3
console.log((0.1 + 0.2).toFixed(1)); //0.3 string
console.log(+(0.1 + 0.2).toFixed(1)); //0.3 integer
console.log(9999999999999999); //10000000000000000
console.log(-0 === 0); //true
console.log(NaN === NaN); //false
console.log(isNaN(NaN)); //true
console.log(isFinite(10/0)); //false
console.log(Object.is(NaN, NaN)); //true , compare
console.log(Object.is(NaN, 6)); //false
console.log(parseInt(45.68)); //45
console.log(parseFloat(45.68)); //45.68
let number = '3$'; //or '$3'
console.log(Number(number)); //NaN
console.log(+number); //NaN
let num = '$3';
console.log(parseInt(num)); //NaN
console.log(parseInt(number)); //3
let numb = 'ff';
console.log(parseInt(numb, 16)); //255 , radix=16
console.log(parseInt(1001, 2)); //9
console.log(Math.random()); //0.9481971670262845 , between 0-1
console.log(Math.max(3, 8, 6)); //8
console.log(Math.min(4, 2, 1)); //1
console.log(Math.pow(2, 3)); //8
//Tasks
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );
/*=================================*/
alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3
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
/*=======================================*/
function random(min, max) {
    return min + Math.random() * (max - min);
}
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
/*======================================*/
let message = `lkdfgjahg
kajdhaflkafl
kjdflkalkasjflkasjdflk
asdkfadfasfklasd`;
console.log(message); //Enter work in ``
let msg = "sasgsgafg\nasdgagaga\nadsgagd"; //or ''
console.log(msg); //Enter dont work in "" , we have to use \n
let meseg = 'It\'s my first time to';
console.log(meseg); //skip ' with \
let mseg = 'C:\\windows';
console.log(mseg); //C:\windows
/*=======================================*/
let str = "Hi buddy";
console.log(str.length); //8
console.log(str[3]); //b
console.log(str.charAt(3)); //b
let ms = '';
for (let char of str) {
    //console.log(char);
    ms += `${char}, `;
}
console.log(ms); //H, i,  , b, u, d, d, y,
/*==================================*/
let string = "hello john";
console.log(string.indexOf('o')); //4
console.log(string.indexOf('l')); //2
console.log(string.indexOf('l', 3)); //3 , 3 param is start position
console.log(string.indexOf('ll')); //2
console.log(string.indexOf('ll', 3)); //-1 , not found , -1 is true!
console.log(string.lastIndexOf('h')); //8
console.log(string.includes('e')); //true , e is exist
console.log(string.startsWith('h')); //true
console.log(string.startsWith('hello')); //true
console.log(string.endsWith('n')); //true
if (string.indexOf('z')) {
    //-1 is true
    console.log("z doesn't exist");
}
console.log(~0); //-1
console.log(~56); //-57
console.log(~-1); //0
console.log(~1); //-2
if (~string.indexOf('z')) {
    //0 is false
    console.log("exist");
}
/*==================================*/
let strg = "Hi Blazer";
console.log(strg.slice()); //Hi Blazer
console.log(strg.slice(0)); //Hi Blazer
console.log(strg.slice(1)); //i Blazer
console.log(strg.slice(0, 4)); //Hi B , (start, end) , first four character
console.log(strg.slice(1, 4)); //i B
console.log(strg.slice(1, -2)); //i Blaz , -2 is last index of
console.log(strg.slice(1, 0)); //nothing

console.log(strg.substring(1, 5)); //i Bl, (start, end)
console.log(strg.substring(1, -3)); //H , -3 == 0
console.log(strg.substring(1, 0)); //H
console.log(strg.substring(-3, 5)); //Hi Bl , -3 == 0
console.log(strg.substring(0, 5)); //Hi Bl

console.log(strg.substr(0, 6)); //Hi Bla , (start, length) , allow negative start
console.log(strg.substr(0, 10)); //Hi Blazer
console.log(strg.substr(-8, 10)); //i Blazer , -8 is last index of
console.log(strg.substr(-8, 8)); //i Blazer

console.log('a' > 'A'); //true , ASCII code
console.log('A'.codePointAt()); //65
console.log('A'.codePointAt(0)); //65
console.log('a'.codePointAt(0)); //97
console.log(String.fromCodePoint(65)); //A
console.log(String.fromCodePoint(97)); //a

let strChar = '';
for (let i = 65; i <= 220; i++) {
    strChar += String.fromCodePoint(i);
}
console.log(strChar);

console.log('Ö' > 'z'); //true
console.log('a' < 'z'); //true
console.log('z'.localeCompare('a')); //1
console.log('Ö'.localeCompare('z')); //-1
/*=====================================================*/
//Tasks
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert( checkSpam('buy ViAgRA now') ); //true
alert( checkSpam('free xxxxx') ); //true
alert( checkSpam("innocent rabbit") ); //false
/*===================================*/
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '...' : str;
}
alert( truncate("What I'd like to tell on this topic is:", 20) ); //What I'd like to te...
alert( truncate("Hi everyone!", 20) ); //Hi everyone!
/*======================================*/
function extractCurrencyValue(str) {
    if (str.startsWith('$')) {
        return +str.slice(1); //change type to number manual , with +
    }
    return parseInt(str); //change type to number automatic, dont need +
}
alert( extractCurrencyValue('$120') === 120 ); // true
alert( extractCurrencyValue('120$') === 120 ); // true
/*==========================================*/
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
    //return J + ohn
}
alert( ucFirst("john") ); // John


