import leia = require("readline-sync");
import Queue = require("./Queue");

const fila = new Queue<string>();

// fila é uma classe exportável
// aqui aparecem todos os metodos que estao definidos dentro de queue
fila.enqueue("Renan");
fila.enqueue("Vivian");
fila.enqueue("Erick");
// fila.enqueue(leia.question("Digite um nome: "))

console.log("***Fila Original ***")
fila.printQueue();

console.log("\n")

fila.dequeue();

console.log("*** Fila após a remoção de um elemento***");
fila.printQueue();

console.log("\n")

// verifica quantos elementos temos na fila
console.log("Tamanho da fila: ", fila.count());

// duvida de João P
let busca = "Erick";
busca.toLowerCase;

// console.log("O Erick está na fila? ", fila.contains("Erick"));

console.log("O Erick está na fila? ", fila.contains(busca));