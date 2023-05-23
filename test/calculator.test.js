const assert = require('assert');
const Calculator = require('../routes/calculator');

describe('Calculator', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      const result = Calculator.add(1, 1);
      assert.strictEqual(result, 2);
    });
  });
});
