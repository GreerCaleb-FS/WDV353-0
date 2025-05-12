// math.js

//Test logic
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

//divide test with error catch
const divide = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};

//sqrt test with error catch
const sqrt = (n) => {
  if (n < 0) throw new Error("Cannot take square root of negative number");
  return Math.sqrt(n);
};

const max = (a, b) => Math.max(a, b);

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sqrt,
  max,
};
