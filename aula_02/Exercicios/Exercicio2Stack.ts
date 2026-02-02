import leia = require("readline-sync");
import Stack = require("../Stack");

const pilha = new Stack<string>();
let opcao: number;

do {
    console.log("\n*****************************************************");
    console.log("          1 - Adicionar Livro na pilha                 ");
    console.log("          2 - Listar todos os Livros                   ");
    console.log("          3 - Retirar Livro da pilha                   ");
    console.log("          0 - Sair                                     ");
    console.log("*******************************************************");

    opcao = leia.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
        case 1:
            const nomeLivro = leia.question("Digite o nome: ");
            pilha.push(nomeLivro);
            console.log("\nPilha:");
            pilha.printStack();
            console.log("\nLivro adicionado!");
            break;

        case 2:
            if (pilha.isEmpty()) {
                console.log("\nA Pilha esta vazia!");
            } else {
                console.log("\nLista de Livros na Pilha:");
                pilha.printStack();
            }
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("\nA Pilha esta vazia!");
            } else {
                const livroRemovido = pilha.pop();
                console.log("\nPilha:");
                pilha.printStack();
                console.log("\nUm Livro foi retirado da pilha!");
            }
            break;

        case 0:
            const confirmaSaida = leia.question("Tem certeza de que deseja sair? [s/n]: ").toLowerCase();
            if(confirmaSaida === 's'){
                console.log("Programa Finalizado");
            }else {
                console.log("Retornando ao Menu Principal...");
                opcao = -1;
            }
            break;

        default:
            console.log("\nOpção inválida!");
    }

} while (opcao !== 0);