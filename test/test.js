//var assert = require('assert'); //assert is for testing
const chai = require('chai');
let assert = chai.assert;

describe('Check user input', function() {
    it('3 pow 2', function() {
        assert.equal(pow(3, 2), 9);
    });
    it('4 pow 2', function() {
        assert.equal(pow(4, 2), 16);
    });
    it('3 pow 0', function() {
        assert.equal(pow(3, 0), 1);
    });
    it('3 pow -1', function() {
        assert.isNull(pow(3, -1));
    });
    it('compare null and undefined with == or ===', function() {
        assert.notStrictEqual(null, undefined);
    });
});

function pow(base, power) {
    if (power < 0) {
        return null;
    }
    return base ** power;
}