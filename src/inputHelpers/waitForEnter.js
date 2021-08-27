const readlineSync = require("readline-sync");

function waitForEnter() {
  readlineSync.question("\nPara continuar pressione ENTER...");
}

module.exports = waitForEnter;
