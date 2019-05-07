const adjectives = require('./data/adjectives');
const nouns = require('./data/nouns');
const categories = require('./data/categories');

const BENCHMARK = 5;
const Key = {};

Key.generate = () => {
  const key = {};
  const filteredAdj = adjectives.filter(word => word.length > BENCHMARK);
  const randAdj = filteredAdj[Math.floor(Math.random() * filteredAdj.length)];
  const filteredNoun = nouns.filter(word => word.length > BENCHMARK);
  const randNoun = filteredNoun[Math.floor(Math.random() * filteredNoun.length)];
  const randCate = categories[Math.floor(Math.random() * categories.length)];
  key.id = randAdj + '-' + randNoun;
  key.target = randCate;
  return key;
}

module.exports = Key;
