// pode ser outra coisa como const = batatinha quando nasce esparrama pello chão
// import leia = require("readline-sync");

// let numero1, numero2: number;

// quando é numero, é so numero. quando é letra, string. 
// numero2 = "a";

//  ta errado
// let qualquerCoisa: any;

//  lt mensagem: string;

// mensagem = '1';
// qualquerCoisa: any;

import leia = require("readline-sync");

let numero1, numero2: number; // tanto faz o exemplo da linha 19 ou a linha 20
// let numero1: number, numero2: number;

// poderia tbm ser let numero1 = ... (ai a linha 19 sairia)
numero1 = leia.questionFloat("Digite o primeiro numero: ");
numero2 = leia.questionFloat("Digite o segundo numero: ");

console.log(`${numero1} + ${numero2} = ${numero1+ numero2}`);


// ts tira as tipagens/ diferentemente de javascript