const { findPostById } = require('../src/functions');
const { posts } = require('../src/data');

describe('findPostById', () => {
  test('should return correct post by id', () => {
    const post = findPostById(posts, 1);
    expect(post).toEqual(
      expect.objectContaining({
        id: 1,
        title: expect.any(String),
        slug: expect.any(String),
      })
    );
  });

  test('should return undefined for non-existent id', () => {
    expect(findPostById(posts, 999)).toBeUndefined();
  });

  test('should validate posts structure', () => {
    posts.forEach((post) => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('slug');
      expect(typeof post.id).toBe('number');
      expect(typeof post.title).toBe('string');
      expect(typeof post.slug).toBe('string');
    });
  });
});
