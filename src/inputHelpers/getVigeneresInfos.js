const getValidText = require("./getValidText");

function getVigeneresInfos() {
  const text = getValidText("Digite o texto: ");
  const key = getValidText("Informe a chave: ");
  return { text, key };
}

module.exports = getVigeneresInfos;
