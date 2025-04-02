const { createSlug } = require('../src/functions');

describe('createSlug error handling', () => {
  test('should throw error for empty title', () => {
    expect(() => createSlug('')).toThrow('Title is empty or invalid');
    expect(() => createSlug(null)).toThrow('Title is empty or invalid');
    expect(() => createSlug(undefined)).toThrow('Title is empty or invalid');
  });
});
