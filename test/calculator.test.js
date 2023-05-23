const assert = require('assert');
const request = require('supertest');
const Calculator = require('../routes/calculator');
const app = require('../app');

describe('Calculator', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      const result = Calculator.add(1, 1);
      assert.strictEqual(result, 2);
    });
  });
});

describe('GET /add', function () {
  it('should respond with the sum of query parameters', function (done) {
    request(app)
      .get('/calc/add')
      .query({ val: [1, 1] })
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .expect(200, '2', done);
  });
});
