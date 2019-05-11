const adjectives = require('./data/adjectives');
const nouns = require('./data/nouns');

const BENCHMARK = 5;
const Key = {};

Key.generate = () => {
  const key = {};
  const filteredAdj = adjectives.filter(word => word.length < BENCHMARK);
  const randAdj = filteredAdj[Math.floor(Math.random() * filteredAdj.length)];
  const filteredNoun = nouns.filter(word => word.length < BENCHMARK);
  const randNoun = filteredNoun[Math.floor(Math.random() * filteredNoun.length)];
  key.key = randAdj + '-' + randNoun;
  return key;
}

module.exports = Key;
