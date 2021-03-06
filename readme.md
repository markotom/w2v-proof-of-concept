# w2v models

Just a proof of concept to create word2vec models from pdf content and get word similarities based on word vector distances.

## Install

```
npm install
```

or

```
yarn install
```

## Usage

First, create a input text from a pdf file using stop words to format the parsed result:

```
node create-input.js --pdfFile 01033067.pdf --txtFile 01033067.txt
```

Afterwards, create a model from input text using `word2vec` command line (compiled only for MacOS):

```
./word2vec/word2vec -train 01033067.txt -output 01033067.bin -binary 1
```

Above example will train a model using default options from word2vec command line, you can play around changing default options (maybe trying with skip-gram or cbow algorithms). For listing all options, you can just execute this: `./word2vec/word2vec` (without args or flags) on your terminal.

Once you get a pretrained model, then just run the following:

```
node get-similarities-from.js --model 01033067.bin --word experiencia
```

Results:

![](sample.png?raw=true)

## References

https://code.google.com/archive/p/word2vec/

https://www.quora.com/What-are-the-continuous-bag-of-words-and-skip-gram-architectures

https://iksinc.online/tag/continuous-bag-of-words-cbow/

http://building-babylon.net/2017/08/01/hierarchical-softmax/

https://github.com/makcedward/nlp/blob/master/sample/nlp-word_embedding.ipynb

## License

MIT
