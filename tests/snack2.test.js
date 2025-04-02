const { createSlug } = require('../src/functions');

describe('createSlug lowercase', () => {
  test('should return a lowercase string', () => {
    const result = createSlug('TEST String');
    expect(result).toBe(result.toLowerCase());
  });
});
