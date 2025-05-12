// math.test.js
const { add, subtract, multiply, divide, sqrt, max } = require("./math");

describe("Math Module", () => {
  test("add: should return the sum of two numbers", () => {
    expect(add(3, 4)).toBe(7);
    expect(add(-1, 1)).toBe(0);
  });

  test("subtract: should return the difference of two numbers", () => {
    expect(subtract(10, 5)).toBe(5);
    expect(subtract(5, 10)).toBe(-5);
  });

  test("multiply: should return the product of two numbers", () => {
    expect(multiply(6, 7)).toBe(42);
    expect(multiply(3, 0)).toBe(0);
  });

  test("divide: should return the quotient of two numbers", () => {
    expect(divide(20, 5)).toBe(4);
    expect(divide(-6, 2)).toBe(-3);
  });

  test("divide: should throw when dividing by zero", () => {
    expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
  });

  test("sqrt: should return the square root of a non-negative number", () => {
    expect(sqrt(9)).toBe(3);
    expect(sqrt(2.25)).toBeCloseTo(1.5);
  });

  test("sqrt: should throw when input is negative", () => {
    expect(() => sqrt(-1)).toThrow(
      "Cannot take square root of negative number"
    );
  });

  test("max: should return the larger of two numbers", () => {
    expect(max(5, 8)).toBe(8);
    expect(max(-3, -7)).toBe(-3);
  });
});
