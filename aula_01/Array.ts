import leia = require("readline-sync");

//genery : qual a tipagem de dados que sera armazenada na estrutura de Dados
const numeros: Array<number> = new Array<number>();

// duvida de vivian (depois pedir o codigo pra ela exatamente como foi feita a pergunta). rafael mostrou na pratica e respondeu:
// não ha necessidade maior em definir tamanho nesse caso
// console.log(numeros.length);

numeros.push(5);
numeros.push(1,5,7,9);
numeros.push(leia.questionInt("Digite um numero: "));

// console.table(numeros)

// variavel que percorre toda a variável numero
for(let numero of numeros){
    // nesse caso, o _for of_ ajuda bastante
    console.log(numero)
}

// verifica se o elemento existe
console.log("O numero 5 existe? ", numeros.includes(5));
console.log("O numero 7 existe? ", numeros.indexOf(7));

// verifica o indice do elemento
console.log("O indice do numero 7:", numeros.indexOf(7));

// Splice Method

// para que serve? Deletar elemento. informar quantos elementos quero apagar
// combinacao com indexOf pra pegar o elemento e selecionar quantos eu quero apagar
// numeros.splice(numeros.indexOf(7), 1);
numeros.splice(numeros.indexOf(7), 2);
console.table(numeros);

