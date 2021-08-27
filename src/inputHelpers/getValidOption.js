const readlineSync = require("readline-sync");
const options = require("../constants/options");

function getValidOption(question) {
  let option;
  let isValidOption;
  const validOptions = Object.values(options);

  do {
    option = readlineSync.question(question);
    isValidOption = validOptions.includes(option);
  } while (!isValidOption);
  return option;
}

module.exports = getValidOption;
