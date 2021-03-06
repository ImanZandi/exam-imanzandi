const chai = require('chai');
let assert = chai.assert;
let _ = require('lodash');

function strReverse (str) {
  let arr = str.split('');
  return arr.reverse().join('');
}
describe('strReverse', function () {
  it('reverses coderbyte', function () {
    assert.strictEqual(strReverse('coderbyte'), 'etybredoc');
  });
  it('reverses I Love Code', function () {
    assert.strictEqual(strReverse('I Love Code'), 'edoC evoL I');
  });
  it('reverses h4', () => {
    assert.strictEqual(strReverse('h4'), '4h');
  });
});

function LetterChanges (str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newStr = '';
  let loc;
  for (let i = 0; i < str.length; i++) {
    loc = alphabet.indexOf(str[i]);
    if (loc === 25) {
      newStr = newStr + 'a';
    } else if (loc === -1) {
      newStr = newStr + str[i];
    } else {
      newStr = newStr + alphabet[loc + 1];
    }
  }
  return newStr.replace(/[aeiou]/g, function (letter) {
    return letter.toUpperCase();
  });
}
describe('LetterChanges', function () {
  it('checks letter changes hello*3', function () {
    assert.strictEqual(LetterChanges('hello*3'), 'Ifmmp*3');
  });
  it('checks letter changes: fun times!', function () {
    assert.strictEqual(LetterChanges('fun times!'), 'gvO Ujnft!');
  });
  it('checks letter changes', () => {
    assert.strictEqual(LetterChanges('I Love New York'), 'G Mpw Zpsl');
  });
});
