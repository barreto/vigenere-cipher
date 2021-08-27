const menu = require("./constants/menu");
const options = require("./constants/options");
const getValidOption = require("./inputHelpers/getValidOption");
const getVigeneresInfos = require("./inputHelpers/getVigeneresInfos");
const waitForEnter = require("./inputHelpers/waitForEnter");
const vigenereCipher = require("./utils/vigenereCipher");

(async function Main() {
  let finishApp = false;

  do {
    console.log("[Cifra de Vigenère]");
    console.log(menu);
    const option = getValidOption("Escolha uma das alternativas: ");

    switch (option) {
      case options.cypherOption:
        {
          const { text, key } = getVigeneresInfos();
          const result = vigenereCipher.encrypt(text, key);
          console.log(`\nResultado: ${result}: \n`);
          waitForEnter();
        }
        break;

      case options.decypherOption:
        {
          const { text, key } = getVigeneresInfos();
          const result = vigenereCipher.decrypt(text, key);
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
