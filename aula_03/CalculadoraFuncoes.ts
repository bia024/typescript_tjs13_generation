import leia from "readline-sync";

// criar o menu para as opções da calculadora

let opcao: number;
let numero1: number;
let numero2: number;


do{
    console.log("********************************************")
    console.log("1 - Soma                                    ")
    console.log("2 - Subtração                               ")
    console.log("3 - Multiplicação                           ")
    console.log("4 - Divisão                                 ")
    console.log("0 - Sair                                    ")
    console.log("********************************************")

    opcao = leia.questionInt("Digite a operacao: ")
    if (opcao === 0){
        sobre();
        process.exit(0);
    }

    switch(opcao){
        case 1: 
        // aqui vem a desestruturacao. chamando a funcao, guardando na desestruturacao la embaixo
            [numero1, numero2] = obterNumeros();
            let resultado = somar(numero1, numero2);
            // exemplo:
            console.log(`${numero1} + ${numero2} = ${resultado}`);
            // no void, nao usamos return./ em casos de undefined, boleano, ai sim somos obrigados a colocar return
        break;
        case 2:
             [numero1, numero2] = obterNumeros();
            // exemplo:
            console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);

        break;
        case 3:
             [numero1, numero2] = obterNumeros();
            // exemplo:
            console.log(`${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);

        break;
        case 4:
             [numero1, numero2] = obterNumeros();
            // exemplo:
            console.log(`${numero1} / ${numero2} = ${dividir(numero1, numero2)}`);
        break;
        default:
    }
    // é a mesma coisa  que dar control c e fechar o programa. o 0 ele dá a ordem: "fecha o programa e acabou"



// o while vai continuar enquanto ele for verdadeiro

}while(true);

// poderia ser input tbm esse obternumeros . ela vai me retornar uma desestruturacao
function obterNumeros(): [number, number]{
    // input de dados
    const numero1 = leia.questionFloat("Digite o primeiro numero: ");
    const numero2 = leia.questionFloat("Digite o segundo numero: ");
    return [numero1, numero2];
}

function somar(numero1: number, numero2: number): number{
    return numero1 + numero2;
}

function subtrair(numero1: number, numero2: number): number{
    return numero1 - numero2;
}
function multiplicar(numero1: number, numero2: number): number{
    return numero1 * numero2;
}
function dividir(numero1: number, numero2: number): number{
    return numero1 / numero2;
}

function sobre(): void{
    console.log("Programa desenvolvido por Bianca Caetano.")
    // console.log("Programa desenvolvido por Bianca Caetano.")
}

// em java seria:
// public float somar(float numero1, float numero2){
//     return numero1 + numero2;
// }