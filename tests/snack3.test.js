const { average } = require('../src/functions');

describe('average', () => {
  test('should calculate the arithmetic mean', () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([10, 20, 30, 40])).toBe(25);
    expect(average([0])).toBe(0);
  });

  test('should return NaN for empty array', () => {
    expect(average([])).toBeNaN();
  });
});
