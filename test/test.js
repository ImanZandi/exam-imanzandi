const chai = require('chai');
let assert = chai.assert;
let _ = require('lodash');

function camelize(str) {
    return str
    .split('-') // my-long-word -> ['my', 'long', 'word']
    .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
    .join(''); // ['my', 'Long', 'Word'] -> myLongWord
}
describe('camelize', function() {
    it('test', function() {
        assert.strictEqual(camelize("background-color"), 'backgroundColor');
    });
    it('test', function() {
        assert.strictEqual(camelize("list-style-image"), 'listStyleImage');
    });
    it('test', function() {
        assert.strictEqual(camelize("-webkit-transition"), 'WebkitTransition');
    });
});


function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
}
describe('filterRange', function() {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);
    it('test', function() {
        _.isEqual(filtered, [3, 1]);
    });
    it('test', function() {
        _.isEqual(arr, [5, 3, 8, 1]);
    });
});


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    } 
}
describe('filterRangeInPlace', function() {
    let arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
    it('test', function() {
        _.isEqual(arr, [3, 1]);
    });
});

describe('sort array large to small', function() {
    let arr = [5, 2, 1, -10, 8];
    arr.sort((a, b) => b - a);
    it('test', function() {
        _.isEqual(arr, [8, 5, 2, 1, -10]);
    });
});


function copySorted(arr) {
    return arr.slice().sort();
}
describe('copySorted', function() {
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);
    it('test', function() {
        _.isEqual(sorted, ['CSS', 'HTML', 'JavaScript']);
    });
    it('test', function() {
        _.isEqual(arr, ['HTML', 'JavaScript', 'CSS']); //(no changes)
    });
});


function Calculator() {
    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let split = str.split(' ');
        let a = +split[0];
        let op = split[1];
        let b = +split[2];
        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}
describe('Calculator', function() {
    let calc = new Calculator;
    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);
    it('test', function() {
        assert.strictEqual(calc.calculate("3 + 7"), 10);
    });
    it('test', function() {
        assert.strictEqual(powerCalc.calculate("2 ** 3"), 8);
    });
});


describe('map for access obj props', function() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let users = [ john, pete, mary ]; //var items
    let names = users.map(item => item.name);
    it('test', function() {
        _.isEqual(names, ['John', 'Pete', 'Mary']);
    });
});


function sortByName(arr) {
    arr.sort((a, b) => b.name > a.name ? 1 : -1);
}
describe('sortByName', function() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 }; 
    let arr = [ john, pete, mary ]; 
    sortByName(arr); 
    it('test', function() {
        assert.strictEqual(arr[1].name, "Mary");
    });
});


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}  
describe('shuffle', function() {
    let arr = [1, 2, 3];
    shuffle(arr);
    let cond =
    _.isEqual(arr, [1, 2, 3]) ||
    _.isEqual(arr, [1, 3, 2]) ||
    _.isEqual(arr, [2, 1, 3]) ||
    _.isEqual(arr, [2, 3, 1]) ||
    _.isEqual(arr, [3, 1, 2]) ||
    _.isEqual(arr, [3, 2, 1]);
    it('test', function() {
        assert.isTrue(cond);
    });
});


function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
describe('getAverageAge', function() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };
    let arr = [ john, pete, mary ];
    it('test', function() {
        assert.strictEqual(getAverageAge(arr), 28);
    });
});


function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }  
    return result;
}
describe('give unique items', function() {
    let strings = [
        "Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];  
    it('test', function() {
        _.isEqual(unique(strings), ['Hare', 'Krishna', ':-O']);
    });
});

describe('styles', function() {
    let styles = [
            "Jazz",
            "Blues"
        ];
    styles.push("Rock-n-Roll"); //['Jazz', 'Blues', 'Rock-n-Roll']
    styles[Math.floor((styles.length - 1) / 2)] = "Classics"; //['Jazz', 'Classics', 'Rock-n-Roll']
    styles.shift(); //['Classics', 'Rock-n-Roll']
    styles.unshift("Rap", "Reggie"); //['Rap', 'Reggie', 'Classics', 'Rock-n-Roll']
    it('test', function() {
        _.isEqual(styles, ['Rap', 'Reggie', 'Classics', 'Rock-n-Roll']); //true
    });
});


function random(min, max) {
    return min + Math.random() * (max - min);
}
describe('Random', function() {
    let result = random(1, 5);
    it('test', function() {
        assert.isTrue(result <= 5 && result >= 1); //true
    });
});


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
describe('getMaxSubSum', function() {
    it('max of [-1, 2, 3, -9]', function() {
        assert.strictEqual(getMaxSubSum([-1, 2, 3, -9]), 5); //true
    });
    it('max of [-1, 2, 3, -9, 11]', function() {
        assert.strictEqual(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
    });
    it('max of [-2, -1, 1, 2]', function() {
        assert.strictEqual(getMaxSubSum([-2, -1, 1, 2]), 3);
    });
    it('max of [100, -9, 2, -3, 5]', function() {
        assert.strictEqual(getMaxSubSum([100, -9, 2, -3, 5]), 100);
    });
    it('max of [1, 2, 3]', function() {
        assert.strictEqual(getMaxSubSum([1, 2, 3]), 6);
    });
    it('max of [-1, -2, -3]', function() {
        assert.strictEqual(getMaxSubSum([-1, -2, -3]), 0);
    });
});