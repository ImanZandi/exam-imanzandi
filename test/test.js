//var assert = require('assert'); //assert is for testing
const chai = require('chai');
let assert = chai.assert;
let _ = require('lodash');


// Define your functions outside of tests.

/**
 * Check string if contains spams
 * 
 * @param {string} str 
 * @return {boolean}
 */
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

describe('Check Spam', function() {
    it('returns true for alternate case viagra', function() {
        // Assert each tests in a separate it 
        assert.strictEqual(checkSpam('buy ViAgRA now'), true);
    });

    it('returns true for lowercase viagra', function() {
        // Assert each tests in a separate it 
        assert.strictEqual(checkSpam('buy viagra now'), true);
    });

    it('returns true for xxxx', () => {
        assert.strictEqual(checkSpam('free xxxxx'), true);
    });

    it('returns false for clean strings', () => {
        assert.strictEqual(checkSpam('innocent rabbit'), false);
    });
});

/**
 * Truncate given string to the given length concatenated with ...
 * 
 * @param {string} str 
 * @param {number} maxlength 
 * @return {string}
 */
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '...' : str;
}
describe('Truncate', function() {
    it('Truncate long strings and add ... at the end of it', function() {
        assert.strictEqual(truncate("What I'd like to tell on this topic is:", 20), "What I'd like to te...");
    });

    it('Doesn\'t change small strings', () => {
        assert.strictEqual(truncate("Hi everyone!", 20), "Hi everyone!");
    });
});

/**
 * Return a valid number from given currency string
 * 
 * @param {string} str 
 * @return {number}
 */
function extractCurrencyValue(str) {
    if (str.startsWith('$')) {
        return +str.slice(1); //change type to number manual , with +
    }
    return parseInt(str); //change type to number automatic, dont need +
}
describe('extractCurrencyValue', function() {
    it('returns 120 from $120', function() {
        assert.strictEqual(extractCurrencyValue('$120'), 120);
    });

    it('returns 120 from 120$', () => {
        assert.strictEqual(extractCurrencyValue('120$'), 120);
    });

    it('returns 120 from string 120', () => {
        assert.strictEqual(extractCurrencyValue('120'), 120);
    });

    it('returns 120 from number 120', () => {
        assert.strictEqual(extractCurrencyValue(120), 120);
    });
});


/**
 * A calculator for doing three main job. Reading value, adding and multiplying
 */
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
describe('Calculator', function() {
    let calculator = new Calculator();
    it('Checks if calculator read numbers', function() {
        calculator.read(4); 
        assert.strictEqual(calculator.value, 4);
    });

    it('checks calculator sum', () => {
        calculator.sum(4);
        assert.strictEqual(calculator.value, 8);
    });

    it('checks calculator mul', () => {
        calculator.mul(2);
        assert.strictEqual(calculator.value, 16);
    });
});

/**
 * Accumulator which only read values and sum them up.
 * 
 * @param {number} startingValue 
 */
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function(primary) {
        this.primary = primary;
        this.value = this.value + this.primary;
    };
} 
describe('Accumulator', function() {
    let accumulator = new Accumulator(1);
    it('checks the accumulator initializing', function() {
        assert.strictEqual(accumulator.value, 1);
    });

    it('returns 5 after reading 4', () => {
        accumulator.read(4);
        assert.strictEqual(accumulator.value, 5);
    });

    it('returns 9 after another read of 4', () => {
        accumulator.read(4);

        assert.strictEqual(accumulator.value, 9);
    });
});