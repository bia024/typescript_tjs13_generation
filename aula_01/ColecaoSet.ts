import leia = require("readline-sync");

const cores: Set<string> = new Set<string>();

cores.add("Azul");
cores.add("Verde");
cores.add("Azul");
cores.add("Vermelho");
cores.add("Amarelo");

console.table(cores);

// Verifica se o elemento existe
console.log("A cor Verde existe? ", cores.has("verde"));


// Deletar elemento
cores.delete("Azul");

console.table(cores);
for(let cor of cores){
    // nesse caso, o _for of_ ajuda bastante
    console.log(cor)
}


// Set descarta valores repetidos.
// Array aceita elementos repetidos