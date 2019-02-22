const assert = require('assert');
const { promisify } = require('util');
const w2v = require('word2vec');
const argv = require('yargs').argv;

w2v.loadModelAsync = promisify(w2v.loadModel);

const getSimilaritiesFromWord = async function({ model, limit, word }) {
  assert(model, 'model is required');
  assert(word, 'word is required');

  const trainedModel = await w2v.loadModelAsync(model);
  const similarities = trainedModel.mostSimilar(word, limit || 10);

  console.log(`Similarities from word "${word}"`);
  console.log(JSON.stringify(similarities, null, 2));
};

getSimilaritiesFromWord(argv);
