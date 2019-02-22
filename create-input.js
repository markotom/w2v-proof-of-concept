const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const parsePdf = require('pdf-parse');
const argv = require('yargs').argv;
const assert = require('assert');
const keywords = require('keyword-extractor');

const writeFileAsync = promisify(fs.writeFile);

const createTxtFromPdf = async function({ pdfFile, txtFile }) {
  assert(pdfFile, 'pdfFile is required');
  assert(txtFile, 'txtFile is required');

  try {
    const dataBuffer = fs.readFileSync(pdfFile);
    const parsedPdf = await parsePdf(dataBuffer);

    // Removing stop words
    let formattedText = keywords.extract(parsedPdf.text, {
      language: 'spanish',
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false,
    });

    formattedText = formattedText.join(' ').replace(/\-/g, '');

    await writeFileAsync(txtFile, formattedText);
    console.log(`pdf content was inserted into ${txtFile}`);
  } catch (error) {
    console.log('ERROR =>', error);
  }
};

// Using yargs, but you can use whatever you want passing required options
createTxtFromPdf(argv);
