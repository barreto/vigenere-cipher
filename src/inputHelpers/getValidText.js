const readlineSync = require("readline-sync");

function getValidText(question) {
  let text;
  let isValidOption;

  do {
    text = readlineSync.question(question);
    isValidOption = Boolean(text.trim().length);
  } while (!isValidOption);
  return text;
}

module.exports = getValidText;
