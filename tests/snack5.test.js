const { isPalindrome } = require('../src/functions');

describe('isPalindrome', () => {
  test('should check if string is palindrome', () => {
    expect(isPalindrome('anna')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  test('should handle case sensitivity', () => {
    expect(isPalindrome('Anna')).toBe(true);
  });
});
