function encrypt(text, cipher) {
  return text + cipher;
}

function decrypt(text, cipher) {
  return cipher + text;
}

const vigenereCipher = { encrypt, decrypt };

module.exports = vigenereCipher;
