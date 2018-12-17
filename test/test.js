//var assert = require('assert'); //assert is for testing
const chai = require('chai');
let assert = chai.assert;
let _ = require('lodash');

describe('styles', function() {
    it('test', function() {
        let styles = [
            "Jazz",
            "Blues"
        ];
        styles.push("Rock-n-Roll"); //['Jazz', 'Blues', 'Rock-n-Roll']
        styles[Math.floor((styles.length - 1) / 2)] = "Classics"; //['Jazz', 'Classics', 'Rock-n-Roll']
        styles.shift(); //['Classics', 'Rock-n-Roll']
        styles.unshift("Rap", "Reggie"); //['Rap', 'Reggie', 'Classics', 'Rock-n-Roll']
        _.isEqual(styles, ['Rap', 'Reggie', 'Classics', 'Rock-n-Roll']); //true
        //console.log(styles);
    });
});
describe('Random', function() {
    it('test', function() {
        function random(min, max) {
            return min + Math.random() * (max - min);
        }
        let result = random(1, 5)
        assert.isTrue(result <= 5 && result >= 1); //true
    });
});
describe('checkSpam', function() {
    it('test', function() {
        function checkSpam(str) {
            let lowerStr = str.toLowerCase();
            return lowerStr.includes('viagra') || lowerStr.includes('xxx');
        }
        assert.strictEqual(checkSpam('buy ViAgRA now'), true);
        assert.strictEqual(checkSpam('free xxxxx'), true);
        assert.strictEqual(checkSpam('innocent rabbit'), false);
    });
});
describe('truncate', function() {
    it('test', function() {
        function truncate(str, maxlength) {
            return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '...' : str;
        }
        assert.strictEqual(truncate("What I'd like to tell on this topic is:", 20), "What I'd like to te...");
        assert.strictEqual(truncate("Hi everyone!", 20), "Hi everyone!");
    });
});
describe('extractCurrencyValue', function() {
    it('test', function() {
        function extractCurrencyValue(str) {
            if (str.startsWith('$')) {
                return +str.slice(1); //change type to number manual , with +
            }
            return parseInt(str); //change type to number automatic, dont need +
        }
        assert.strictEqual(extractCurrencyValue('$120'), 120);
        assert.strictEqual(extractCurrencyValue('120$'), 120);
    });
});
describe('Calculator', function() {
    it('test', function() {
        function Calculator() {
            this.read = function(primary = 0) {
                this.primary = primary;
            };
            this.sum = function(sumOperator = 0) {
                this.sumOperator = sumOperator;
                this.sumResult = this.primary + this.sumOperator;
                return this.sumResult;
            };
            this.mul = function(mulOperator = 0) {
                this.mulOperator = mulOperator;
                this.mulResult = this.sumResult * this.mulOperator;
                return this.mulResult;
            };
        } 
        let calculator = new Calculator();
        calculator.read(4); 
        assert.strictEqual(calculator.sum(4), 8);
        assert.strictEqual(calculator.mul(2), 16);
        //console.log(calculator.sum(4)); //8
        //console.log(calculator.mul(2)); //16
    });
});
describe('Accumulator', function() {
    it('test', function() {
        function Accumulator(startingValue) {
            this.value = startingValue;
            this.read = function(primary) {
                this.primary = primary;
                this.value = this.value + this.primary;
                //this.value += +prompt('How much to add?', 0);
            };
        } 
        let accumulator = new Accumulator(1);
        accumulator.read(4);
        accumulator.read(4);
        assert.strictEqual(accumulator.value, 9);
        //console.log(accumulator.value); //9
    });
});