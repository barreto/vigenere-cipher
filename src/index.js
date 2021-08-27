const readlineSync = require("readline-sync");
const menu = require("./constants/menu");
const options = require("./constants/options");
const vigenereCipher = require("./utils/vigenereCipher");

readlineSync.setDefaultOptions({ encoding: "utf8" });

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

function getValidText(question) {
  let text;
  let isValidOption;

  do {
    text = readlineSync.question(question);
    isValidOption = Boolean(text.trim().length);
  } while (!isValidOption);
  return text;
}

function waitForEnter() {
  readlineSync.question("\nPara continuar pressione ENTER...");
}

(async function Main() {
  let finishApp = false;

  do {
    console.log("[Cifra de Vigenère]");
    console.log(menu);
    const option = getValidOption("Escolha uma das alternativas: ");

    switch (option) {
      case options.cypherOption:
        {
          const text = getValidText("Digite o texto: ");
          const cipher = getValidText("Informe a cifra: ");
          const result = vigenereCipher.encrypt(text, cipher);
          console.log(`\nResultado: ${result}: \n`);
          waitForEnter();
        }
        break;

      case options.decypherOption:
        {
          const text = getValidText("Digite o texto: ");
          const cipher = getValidText("Informe a cifra: ");
          const result = vigenereCipher.decrypt(text, cipher);
          console.log(`\nResultado: ${result}: \n`);
          waitForEnter();
        }
        break;

      case options.quit:
        finishApp = true;
        console.log("\nSaindo!\n");
        setTimeout(() => {}, 1500);
        break;

      default:
        finishApp = false;
        break;
    }
  } while (!finishApp);
})();
