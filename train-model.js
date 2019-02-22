const assert = require('assert');
const { promisify } = require('util');
const w2v = require('word2vec');
const path = require('path');
const argv = require('yargs').argv;

w2v.word2vecAsync = promisify(w2v.word2vec);

const trainModel = async function(options) {
  try {
    const { input, output } = options;

    assert(input, 'input is required');
    assert(output, 'output is required');

    const params = {...options}
    delete params.input
    delete params.output

    const trainedModel = await w2v.word2vecAsync(
      path.resolve(__dirname, input),
      path.resolve(__dirname, output),
      {
        ...params,
        binary: 1,
        silent: true
      },
    );

    console.log('The model has trained.');
    console.log(JSON.stringify(trainedModel, null, 2));
  } catch (error) {
    console.log('ERROR =>', error);
  }
};

trainModel(argv);
