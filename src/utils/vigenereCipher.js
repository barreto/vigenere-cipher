const emptySpace = "";
const whiteSpace = " ";
const alphabetLength = 26;
const initialCharCodeOfASCII = "A".charCodeAt(0);

/***
 * Make the cipher get the same length of text and capitalize the keyword.
 */
function equalizeKey(textArr = [], key = "") {
  let keyArr = key.split(emptySpace);

  const hasSameLength = textArr.length === key.length;

  if (!hasSameLength) {
    const lenghtDifference = textArr.length - keyArr.length;
    const entireRepetition = Math.floor(lenghtDifference / keyArr.length);
    const partialRepetition = lenghtDifference % keyArr.length;

    if (entireRepetition) {
      for (let idx = 0; idx < entireRepetition; idx++)
        keyArr = keyArr.concat(key.split(emptySpace));

      const partialKeyArr = key.substr(0, partialRepetition).split(emptySpace);
      keyArr = keyArr.concat(partialKeyArr);
    }
  }

  return keyArr.join(emptySpace).toUpperCase();
}

/***
 * Remove whitespaces and turns all caracters uppercased.
 */
function standardizeText(text) {
  let spacesIndexes = [];
  let upperCasesIndexes = [];

  const isUpperCase = (value) => /^[A-Z]*$/.test(value);
  const allWhitespacesRegExp = new RegExp(whiteSpace, "g");

  text.split(emptySpace).forEach((character, index) => {
    if (character === whiteSpace) spacesIndexes.push(index);
    if (isUpperCase(character)) upperCasesIndexes.push(index);
  });

  const textArr = text
    .toUpperCase()
    .replace(allWhitespacesRegExp, emptySpace)
    .split(emptySpace);

  return { textArr, upperCasesIndexes, spacesIndexes };
}

function recoverOriginalAspects(
  text = "",
  indexesOfUpperCases,
  indexesOfWhiteSpaces
) {
  let textArr = text.toLowerCase().split(emptySpace);

  // Retrieve whitespaces between words
  for (const index of indexesOfWhiteSpaces) {
    const initialText = textArr.slice(0, index);
    const finalText = textArr.slice(index, textArr.length);
    textArr = [...initialText, whiteSpace, ...finalText];
  }

  // Retrieve the upper case caracters
  textArr = textArr.map((character, index) =>
    indexesOfUpperCases.includes(index) ? character.toUpperCase() : character
  );

  return textArr.join(emptySpace);
}

function encrypt(text, key) {
  const { textArr, upperCasesIndexes, spacesIndexes } = standardizeText(text);
  const keyword = equalizeKey(textArr, key);

  let cipheredText = "";
  for (let index = 0; index < textArr.length; index++) {
    const textCharCode = textArr[index].charCodeAt(0);
    const keyCharCode = keyword[index].charCodeAt(0);
    const innerAlphabetCharCode = (textCharCode + keyCharCode) % alphabetLength;
    const cipheredCharCode = initialCharCodeOfASCII + innerAlphabetCharCode;
    cipheredText += String.fromCharCode(cipheredCharCode);
  }

  cipheredText = recoverOriginalAspects(
    cipheredText,
    upperCasesIndexes,
    spacesIndexes
  );

  return cipheredText;
}

function decrypt(text, key) {
  const { textArr, upperCasesIndexes, spacesIndexes } = standardizeText(text);
  const keyword = equalizeKey(textArr, key);

  let cipheredText = "";
  for (let index = 0; index < textArr.length; index++) {
    const textCharCode = textArr[index].charCodeAt(0);
    const keyCharCode = keyword[index].charCodeAt(0);
    const innerAlphabetCharCode =
      (textCharCode - keyCharCode + alphabetLength) % alphabetLength;
    const cipheredCharCode = initialCharCodeOfASCII + innerAlphabetCharCode;
    cipheredText += String.fromCharCode(cipheredCharCode);
  }

  cipheredText = recoverOriginalAspects(
    cipheredText,
    upperCasesIndexes,
    spacesIndexes
  );

  return cipheredText;
}

const vigenereCipher = { encrypt, decrypt };

module.exports = vigenereCipher;
