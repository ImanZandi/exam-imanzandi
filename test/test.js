//var assert = require('assert'); //assert is for testing
const chai = require('chai');
let assert = chai.assert;
let _ = require('lodash');

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