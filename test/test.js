//var assert = require('assert'); //assert is for testing
const chai = require('chai');
let assert = chai.assert;
let _ = require('lodash');

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