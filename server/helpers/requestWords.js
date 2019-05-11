const categories = require('./data/categories');

// Generate a list of words for players to draw
module.exports.getWords = rounds => {
  const words = [];

  for (let i = 0; i < rounds; i++) {
    let word = categories[Math.floor(Math.random() * categories.length)];
    words.push(word);
  }
  return words;
};
