import leia = require("readline-sync");
import Stack = require("./Stack");

const pilha = new Stack<string>();

// pilha é uma classe exportável
// aqui aparecem todos os metodos que estao definidos dentro de queue
pilha.push("Renan");
pilha.push("Vivian");
pilha.push("Erick");
// pilha.push(leia.question("Digite um nome: "))

console.log("***pilha Original ***")
pilha.printStack();

console.log("\n")
// ultimo que entra, primeiro que sai. exemplo do prato empilhado no restaurante.
pilha.pop();

console.log("*** pilha após a remoção de um elemento***");
pilha.printStack();

console.log("\n")

// verifica quantos elementos temos na pilha
console.log("Tamanho da pilha: ", pilha.count());

// duvida de João P
let busca = "Erick";
busca.toLowerCase;

// console.log("O Erick está na pilha? ", pilha.contains("Erick"));

console.log("O Erick está na pilha? ", pilha.contains(busca));

// existe a lista duplamente encadeada, e a lista simples
// a dupla sabe quem é o anterior e quem é o proximo
// a simples nao sabr