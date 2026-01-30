import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();

console.log("--- LISTA 02 - EXERCICIO DE NUMERO 3 - COLLECTION SET ---");

// numeros.add

for (let n = 1; n <= 10; n++) {
    numeros.add(leia.questionInt(`Digite o ${n} numero: `));
}

console.log("Listar dados do Set: ");

for (let numero of numeros) {
    console.log(numero)
}

// console.log("Deseja continuar? [y/n]")   