import leia = require("readline-sync");
import Queue = require("../Queue");

const fila = new Queue<string>();
let opcao: number;

do {
    console.log("\n*****************************************************");
    console.log("          1 - Adicionar Cliente na Fila                ");
    console.log("          2 - Listar todos os Clientes                 ");
    console.log("          3 - Retirar Cliente da Fila                  ");
    console.log("          0 - Sair                                     ");
    console.log("*******************************************************");

    opcao = leia.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
        case 1:
            const nome = leia.question("Digite o nome: ");
            fila.enqueue(nome);
            console.log("\nFila:")
            fila.printQueue();
            console.log("Cliente Adicionado!");
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("\nA Fila esta vazia!");
            } else {
                console.log("\nLista de Clientes na Fila:");
                fila.printQueue();
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("\nA Fila esta vazia!");
            } else {
                let clienteChamado = fila.dequeue();

                console.log("\nFila:");
                console.log("Clentes na fila: ");

                fila.printQueue();
                console.log(`\nO cliente ${clienteChamado} foi chamado!`)
            }
            break;

        case 0:
            const confirmaSaida = leia.question("Tem certeza de que deseja sair? [S/N]: ").toLowerCase();
            if (confirmaSaida === 's') {
                console.log("Programa Finalizado!");
            } else {
                console.log("Retornando ao Menu Principal...");
                opcao = -1;
            }
            break;

        default:
            console.log("Opcao invalida!");
    }

} while (opcao !== 0);