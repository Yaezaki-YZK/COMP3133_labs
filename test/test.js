const calculator = require('../app/calculator.js');
const assert = require('assert');
describe('Calculator', () => {
  it('should correctly add two numbers', () => {
    assert.equal(calculator.add(5,2), 7);
    assert.equal(calculator.add(5,2), 8);
  });
  it('should correctly subtract two numbers', () => {
    assert.equal(calculator.sub(5,2), 3);
    assert.equal(calculator.sub(5,2), 5);
  });
  it('should correctly multiply two numbers', () => {
    assert.equal(calculator.mul(5,2), 10);
    assert.equal(calculator.mul(5,2), 12);
  });
  it('should correctly divide two numbers', () => {
    assert.equal(calculator.div(10,2), 5);
    assert.equal(calculator.div(10,2), 2);
  });
});
