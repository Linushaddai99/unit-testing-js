const calculator = require('./calculator');

describe('calculator', () => {
    test('to properly add two numbers', () => {
      expect(calculator.add(5, 6)).toBe(11);
      expect(calculator.add(-1, 6)).toBe(5);
      expect(calculator.add(10, 6)).toBe(16);
    });
  
    test('to properly subract two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(4, 1)).toBe(3);
      expect(calculator.subtract(10, 3)).toBe(7);
    });

    test('to properly multiply two numbers', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
        expect(calculator.multiply(4, 1)).toBe(4);
        expect(calculator.multiply(10, 3)).toBe(30);
      });

    test('to properly divide two numbers', () => {
        expect(calculator.divide(15, 3)).toBe(5);
        expect(calculator.divide(4, 1)).toBe(4);
        expect(calculator.divide(10, 5)).toBe(2);
        });
  });