class Calculator {
  static add(...values) {
    return values.reduce((acc, curr) => acc + curr, 0);
  }
  static subtract(...values) {
    return values.reduce((acc, curr) => acc - curr);
  }
}

module.exports = Calculator;
