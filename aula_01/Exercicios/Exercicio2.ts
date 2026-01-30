import leia = require("readline-sync");

const reset = "\x1b[0m";
const vermelho = "\x1b[31m";
const verde = "\x1b[32m";
const amarelo = "\x1b[33m";

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("----- LISTA 01 - EXERCICIO DE NUMERO 2 - BUSCA DE NUMEROS NO ARRAY -----");

console.log("Mapa do Array:");
let indicesFormatados = " ";
let valoresFormatados = " ";

for (let i = 0; i < numeros.length; i++) {
    indicesFormatados += `${vermelho}${i}${reset} `;
    valoresFormatados += `${numeros[i]} `;
}

console.log(indicesFormatados);
console.log(valoresFormatados);
console.log("                                   ");

const numeroBusca: number = leia.questionInt("Digite o numero que voce deseja encontrar: ");

const indice: number = numeros.indexOf(numeroBusca);

if (indice !== -1) {
    console.log(`\nO numero ${verde}${numeroBusca}${reset} esta localizado na posicao: ${vermelho}${indice}${reset}`);
} else {
    console.log(`\nO numero ${amarelo}${numeroBusca}${reset} nao foi encontrado!`);
}