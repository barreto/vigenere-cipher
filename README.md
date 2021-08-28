# Cifra de Vigenère

> Aplicação CLI [NodeJS](https://nodejs.org/) para criptografar e decriptografar frases simples  - caracteres alfabéticos maiúsculos e minusculos - utilizando o conceito de cifra de Vigenère.



## Preview

![application preview](https://github.com/barreto/vigenere-cipher/blob/main/assets/img/preview.gif?raw=true)

## Tecnologias  
Toda comunicação do CLI foi desenvolvida tomando como base a biblioteca [readlineSync](https://www.npmjs.com/package/readline-sync), as demais funcionalidades foram codificadas no próprio projeto.

## Como utilizar

### Inicialização
Inicializar a aplicação através de um dos comandos abaixo:
```sh
npm start

# or

yarn start
```

### Escolha da funcionalidade desejada
Será disponibilizado um menu de opções semelhante ao da imagem abaixo:

![cli options](https://github.com/barreto/vigenere-cipher/blob/main/assets/img/cli-options.png?raw=true)

Com exceção da opção ```0```, que encerrará o processo do CLI, as outras duas opções lhe pedirão o texto e a cifra, logo em seguida o resultado será apresentado em tela.

### Retorno para o fluxo inicial
Caso queira cifrar ou decifrar mais vezes pressione ```ENTER``` e o menu de opções lhe será apresentado novamente.
