// Snack 1
const getInitials = (fullName) => {
  if (!fullName) return '';
  return fullName
    .split(' ')
    .map((name) => name[0].toUpperCase())
    .join('');
};

// Snack 2, 4, 6
const createSlug = (title) => {
  if (!title || typeof title !== 'string') {
    throw new Error('Title is empty or invalid');
  }
  return title.toLowerCase().replace(/\s+/g, '-');
};

// Snack 3
const average = (numbers) => {
  if (numbers.length === 0) return NaN;
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
};

// Snack 5
const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
};

// Snack 7
const findPostById = (posts, id) => {
  return posts.find((post) => post.id === id);
};

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};
