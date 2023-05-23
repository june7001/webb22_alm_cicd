class Calculator {
  static add(...values) {
    return values.reduce((acc, curr) => acc + curr, 0);
  }
}

module.exports = Calculator;
