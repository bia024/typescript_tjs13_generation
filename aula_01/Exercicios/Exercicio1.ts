import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

console.log("--- Digite 5 cores para a sua Collection ---");

for (let i = 0; i < 5; i++) {
    cores.push(leia.question(`Digite a ${i + 1}a cor: `));
}

console.log("\nListar todas as cores:");
for (let cor of cores) {
    console.log(cor);
}

cores.sort();

console.log("\nOrdenar as cores:");
for (let cor of cores) {
    console.log(cor);
}

console.log("\nA cor 'Azul' existe no Array? ", cores.includes("Azul"));

console.log("O índice da cor 'Verde' é:", cores.indexOf("Verde"));

console.table(cores);