const { createSlug } = require('../src/functions');

describe('createSlug spaces replacement', () => {
  test('should replace spaces with hyphens', () => {
    expect(createSlug('Questo è un test')).toBe('questo-e-un-test');
    expect(createSlug('Hello World')).toBe('hello-world');
  });
});
