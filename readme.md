# w2v models

Just a proof of concept to create word2vec models from pdf content.

## Install

```
npm install
```

or

```
yarn install
```

## Usage

First, create a input text from a pdf file:

```
node create-input.js --pdfFile 01033067.pdf --txtFile 01033067.txt
```

Afterwards, create a model from input text using `word2vec` command line (compiled just for ios):

```
./word2vec/word2vec -train 01033067.txt -output 01033067.bin -binary 1
```

Above example will train a model using default options from word2vec command line, you can play around changing default options. For listing all options, you can just execute this: `./word2vec/word2vec` on your terminal.

Once you get a model, then just run the following:

```
node get-similarities-from --word experiencia --limit 10
```

## MIT
