//var assert = require('assert'); //assert is for testing
const chai = require('chai');
let assert = chai.assert;
let _ = require('lodash');

describe('Calculator', function() {
    it('Calculator', function() {
        let calculator = { // Don't define the calculator inside it
            num: null,
            //a: "",
            //b: "",
            sum(num = 0) { 
                // this.b = num2;
                // return this.a + this.b;
                return this.num += num;
            },
            mul(num = 0) {
                // return num3 * (this.a + this.b);
                return this.num *= num;
                //return this.a * this.b;
            },
            read(num1 = 0) {
                // this.a = num1;
                return this.num;
                //this.a = +prompt('a?', 0);
                //this.b = +prompt('b?', 0);
            }
        };
        calculator.read(4); // Test read function
        assert.strictEqual(calculator.sum(4), 8);
        assert.strictEqual(calculator.mul(2), 16);
        //console.log(calculator.sum(4));
        //console.log(calculator.mul(2));
    });
    it('Counter', function() { // You should place ladder inside another describe
        let ladder = {
            step: 0,

            up() {
                this.step++;

                return this; //return an object
            },

            down() {
                this.step--;

                return this;
            },

            showStep: function() { // shows the current step
                //console.log(this.step);
                assert.strictEqual(this.step, 1);  // It's not a good way to write asserts inside functions
                // return this;
                return this.step;
            }
        };
        ladder.up().up().down().showStep(); // 1 // You should test this.
        /*ladder.up();
        ladder.up();
        ladder.down();
        ladder.showStep(); // 1*/
    });
});