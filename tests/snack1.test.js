const { getInitials } = require('../src/functions');

describe('getInitials', () => {
  test('should return initials from full name', () => {
    expect(getInitials('John Doe')).toBe('JD');
    expect(getInitials('Alice Bob Charlie')).toBe('ABC');
    expect(getInitials('Single')).toBe('S');
  });

  test('should handle empty string', () => {
    expect(getInitials('')).toBe('');
  });
});
